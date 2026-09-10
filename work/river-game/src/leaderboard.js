import { normalizeNickname, validNickname } from './score-rules.js';

const storageKey = 'laomei-leaderboard-player-v1';
const formatScore = value => value.toLocaleString('zh-CN');
const formatTime = seconds => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

export class Leaderboard {
  constructor(root) {
    this.root = root;
    this.form = root.querySelector('form');
    this.input = root.querySelector('input');
    this.submitButton = root.querySelector('[type=submit]');
    this.refreshButton = root.querySelector('.leaderboard-refresh');
    this.message = root.querySelector('.leaderboard-message');
    this.list = root.querySelector('.leaderboard-list');
    this.summary = root.querySelector('.leaderboard-personal');
    this.version = 0;
    this.player = { id: crypto.randomUUID(), nickname: '' };
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(saved.id)) this.player.id = saved.id;
      if (typeof saved?.nickname === 'string' && validNickname(normalizeNickname(saved.nickname))) this.player.nickname = normalizeNickname(saved.nickname);
    } catch {}
    this.remember();
    this.form.addEventListener('submit', event => { event.preventDefault(); this.submit(); });
    this.input.addEventListener('input', () => this.input.setCustomValidity(''));
    this.refreshButton.addEventListener('click', () => this.refresh());
  }

  remember() { try { localStorage.setItem(storageKey, JSON.stringify(this.player)); } catch {} }

  show(result, mount) {
    this.hide();
    this.result = { ...result };
    this.submitted = false;
    this.input.value = this.player.nickname;
    this.input.setCustomValidity('');
    this.input.disabled = false;
    this.summary.hidden = true;
    this.list.replaceChildren();
    mount.appendChild(this.root);
    this.root.hidden = false;
    this.setBusy(false);
    this.refresh();
    this.input.focus({ preventScroll: true });
  }

  hide() {
    this.version++;
    this.controller?.abort();
    this.root.hidden = true;
    this.result = null;
  }

  setBusy(value) {
    this.busy = value;
    this.root.setAttribute('aria-busy', String(value));
    this.submitButton.disabled = value || this.submitted;
    this.refreshButton.disabled = value;
    this.submitButton.querySelector('span').textContent = this.submitted ? '已提交' : '提交战绩';
  }

  status(text, error = false) {
    this.message.textContent = text;
    this.message.classList.toggle('error', error);
  }

  async request(options) {
    this.controller?.abort();
    const controller = new AbortController();
    this.controller = controller;
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
      const response = await fetch(`/api/leaderboard?playerId=${encodeURIComponent(this.player.id)}`, { ...options, signal: controller.signal, cache: 'no-store' });
      if (!response.headers.get('content-type')?.includes('application/json')) throw new Error('排行榜暂时无法连接');
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || '排行榜暂时无法连接');
      return data;
    } catch (error) {
      if (error.name === 'AbortError') throw new Error('连接超时，请重试');
      if (error instanceof TypeError) throw new Error('网络连接失败，请重试');
      throw error;
    } finally { clearTimeout(timeout); }
  }

  render(data) {
    const rows = data.entries.map(entry => {
      const row = document.createElement('li');
      row.className = entry.isPlayer ? 'leaderboard-row is-player' : 'leaderboard-row';
      const rank = document.createElement('span'); rank.className = 'leaderboard-rank'; rank.textContent = String(entry.rank).padStart(2, '0');
      const identity = document.createElement('div'); identity.className = 'leaderboard-identity';
      const name = document.createElement('strong'); name.textContent = `抗日英雄：${entry.nickname}`;
      const detail = document.createElement('small'); detail.textContent = `${entry.outcome === 'victory' ? '战役通关' : `第 ${entry.level} 关`} · ${formatTime(entry.seconds)}`;
      identity.append(name, detail);
      const score = document.createElement('span'); score.className = 'leaderboard-score'; score.textContent = `得分：${formatScore(entry.score)}`;
      row.append(rank, identity, score); return row;
    });
    if (!rows.length) { const empty = document.createElement('li'); empty.className = 'leaderboard-empty'; empty.textContent = '暂无上榜战绩'; rows.push(empty); }
    this.list.replaceChildren(...rows);
    this.summary.hidden = !data.personal;
    if (data.personal) this.summary.textContent = `个人最佳：${formatScore(data.personal.score)}${data.personal.rank ? ` · 第 ${data.personal.rank} 名` : ' · 未进入前 50 名'}`;
  }

  async refresh() {
    if (this.busy) return;
    const version = this.version;
    this.setBusy(true); this.status('正在加载榜单');
    try {
      const data = await this.request();
      if (version !== this.version) return;
      this.render(data); this.status(this.submitted ? '战绩已提交' : '');
    } catch (error) { if (version === this.version) this.status(error.message, true); }
    finally { if (version === this.version) this.setBusy(false); }
  }

  async submit() {
    if (!this.result || this.busy || this.submitted) return;
    const nickname = normalizeNickname(this.input.value);
    if (!validNickname(nickname)) { this.input.setCustomValidity('昵称需为 1 至 16 个可见字符'); this.input.reportValidity(); return; }
    this.input.value = nickname;
    this.player.nickname = nickname; this.remember();
    const version = this.version, result = this.result;
    this.setBusy(true); this.status('正在提交战绩');
    try {
      const data = await this.request({ method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ playerId: this.player.id, nickname, baseScore: result.base, seconds: result.seconds, level: result.level, outcome: result.outcome }) });
      if (version !== this.version) return;
      this.submitted = true; this.input.disabled = true;
      this.render(data);
      this.status(data.personal.score > data.submittedScore ? '提交成功，已保留历史最高战绩' : '战绩已提交');
    } catch (error) { if (version === this.version) this.status(error.message, true); }
    finally { if (version === this.version) this.setBusy(false); }
  }
}
