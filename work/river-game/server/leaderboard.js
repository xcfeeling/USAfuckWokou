import { calculateResult, maximumBaseScore, normalizeNickname, validNickname } from '../src/score-rules.js';
import { CAMPAIGN } from '../src/campaign.js';

const playerIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const schemas = new WeakMap();
const better = 'excluded.score > leaderboard_scores.score OR (excluded.score = leaderboard_scores.score AND excluded.seconds < leaderboard_scores.seconds)';
const resultFields = ['score', 'base_score', 'seconds', 'level', 'outcome', 'created_at'];
const saveScore = `INSERT INTO leaderboard_scores (player_id, nickname, score, base_score, seconds, level, outcome, created_at)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(player_id) DO UPDATE SET nickname = excluded.nickname,
  ${resultFields.map(field => `${field} = CASE WHEN ${better} THEN excluded.${field} ELSE leaderboard_scores.${field} END`).join(', ')}`;

class RequestError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

function json(data, status = 200) {
  return Response.json(data, { status, headers: { 'Cache-Control': 'no-store', 'Content-Type': 'application/json; charset=utf-8', 'X-Content-Type-Options': 'nosniff' } });
}

async function ensureSchema(db) {
  if (!schemas.has(db)) {
    const ready = (async () => {
      await db.prepare(`CREATE TABLE IF NOT EXISTS leaderboard_scores (
        player_id TEXT PRIMARY KEY,
        nickname TEXT NOT NULL,
        score INTEGER NOT NULL CHECK (score >= 0),
        base_score INTEGER NOT NULL CHECK (base_score >= 0),
        seconds REAL NOT NULL CHECK (seconds >= 0),
        level INTEGER NOT NULL CHECK (level BETWEEN 1 AND ${CAMPAIGN.length}),
        outcome TEXT NOT NULL CHECK (outcome IN ('defeat', 'victory')),
        created_at INTEGER NOT NULL
      )`).run();
      await db.prepare('CREATE TABLE IF NOT EXISTS leaderboard_schema (version INTEGER PRIMARY KEY)').run();
      const version = await db.prepare('SELECT MAX(version) AS version FROM leaderboard_schema').first();
      if ((version?.version || 0) < 2) {
        // D1 batches are atomic: preserve all existing scores while widening the old CHECK constraint.
        await db.batch([
          db.prepare(`CREATE TABLE leaderboard_scores_v2 (
            player_id TEXT PRIMARY KEY, nickname TEXT NOT NULL,
            score INTEGER NOT NULL CHECK (score >= 0), base_score INTEGER NOT NULL CHECK (base_score >= 0),
            seconds REAL NOT NULL CHECK (seconds >= 0), level INTEGER NOT NULL CHECK (level BETWEEN 1 AND ${CAMPAIGN.length}),
            outcome TEXT NOT NULL CHECK (outcome IN ('defeat', 'victory')), created_at INTEGER NOT NULL
          )`),
          db.prepare('INSERT INTO leaderboard_scores_v2 (player_id, nickname, score, base_score, seconds, level, outcome, created_at) SELECT player_id, nickname, score, base_score, seconds, level, outcome, created_at FROM leaderboard_scores'),
          db.prepare('DROP TABLE leaderboard_scores'),
          db.prepare('ALTER TABLE leaderboard_scores_v2 RENAME TO leaderboard_scores'),
          db.prepare('CREATE INDEX leaderboard_ranking ON leaderboard_scores (score DESC, seconds ASC, created_at ASC, player_id ASC)'),
          db.prepare('INSERT OR IGNORE INTO leaderboard_schema (version) VALUES (2)')
        ]);
      }
      await db.prepare('CREATE INDEX IF NOT EXISTS leaderboard_ranking ON leaderboard_scores (score DESC, seconds ASC, created_at ASC, player_id ASC)').run();
    })().catch(error => { schemas.delete(db); throw error; });
    schemas.set(db, ready);
  }
  await schemas.get(db);
}

async function readSubmission(request) {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) throw new RequestError(415, '提交格式不正确');
  if (Number(request.headers.get('content-length')) > 4096) throw new RequestError(413, '提交内容过长');
  const reader = request.body?.getReader();
  if (!reader) throw new RequestError(400, '缺少战绩内容');
  const decoder = new TextDecoder('utf-8', { fatal: true });
  let text = '', size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 4096) { await reader.cancel(); throw new RequestError(413, '提交内容过长'); }
      text += decoder.decode(value, { stream: true });
    }
    text += decoder.decode();
    return JSON.parse(text);
  } catch (error) {
    if (error instanceof RequestError) throw error;
    throw new RequestError(400, '战绩内容无法读取');
  } finally { reader.releaseLock(); }
}

function validateSubmission(value) {
  if (!value || typeof value !== 'object' || !playerIdPattern.test(value.playerId)) throw new RequestError(400, '玩家信息无效，请刷新页面');
  if (typeof value.nickname !== 'string') throw new RequestError(400, '请输入玩家昵称');
  const nickname = normalizeNickname(value.nickname);
  if (!validNickname(nickname)) throw new RequestError(400, '昵称需为 1 至 16 个可见字符');
  const { baseScore, seconds, level, outcome } = value;
  if (!Number.isInteger(level) || level < 1 || level > CAMPAIGN.length || !['defeat', 'victory'].includes(outcome) || (outcome === 'victory' && level !== CAMPAIGN.length)) throw new RequestError(400, '关卡记录无效');
  if (!Number.isSafeInteger(baseScore) || baseScore < 0 || baseScore > maximumBaseScore(level) || !Number.isFinite(seconds) || seconds < 0 || seconds > 604800 || (baseScore > 0 && seconds < 1)) throw new RequestError(400, '得分或用时记录无效');
  return { playerId: value.playerId.toLowerCase(), nickname, level, outcome, ...calculateResult(baseScore, seconds, outcome) };
}

async function readBoard(db, playerId) {
  const { results } = await db.prepare('SELECT player_id, nickname, score, seconds, level, outcome FROM leaderboard_scores ORDER BY score DESC, seconds ASC, created_at ASC, player_id ASC LIMIT 50').all();
  const entries = results.map(({ player_id, ...entry }, index) => ({ ...entry, rank: index + 1, isPlayer: player_id === playerId }));
  const personal = playerId ? await db.prepare('SELECT nickname, score, seconds, level, outcome FROM leaderboard_scores WHERE player_id = ?').bind(playerId).first() : null;
  if (personal) personal.rank = entries.find(entry => entry.isPlayer)?.rank ?? null;
  return { entries, personal };
}

export async function handleLeaderboard(request, env) {
  if (new URL(request.url).pathname !== '/api/leaderboard') return json({ error: '接口不存在' }, 404);
  if (!['GET', 'POST'].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: 'GET, POST' } });
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) return json({ error: '请求来源无效' }, 403);
  if (!env.LEADERBOARD_DB) return json({ error: '排行榜暂未就绪', code: 'DATABASE_NOT_CONFIGURED' }, 503);
  try {
    const submission = request.method === 'POST' ? validateSubmission(await readSubmission(request)) : null;
    const playerId = submission?.playerId ?? new URL(request.url).searchParams.get('playerId')?.toLowerCase();
    if (playerId && !playerIdPattern.test(playerId)) throw new RequestError(400, '玩家信息无效');
    const db = env.LEADERBOARD_DB;
    await ensureSchema(db);
    if (submission) {
      await db.prepare(saveScore).bind(submission.playerId, submission.nickname, submission.total, submission.base, submission.seconds, submission.level, submission.outcome, Date.now()).run();
    }
    return json({ ...await readBoard(db, playerId), submittedScore: submission?.total ?? null });
  } catch (error) {
    if (error instanceof RequestError) return json({ error: error.message }, error.status);
    console.error('Leaderboard request failed', error);
    return json({ error: '排行榜暂时不可用，请稍后重试' }, 503);
  }
}
