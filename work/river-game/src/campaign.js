export const CHAPTERS = Object.freeze([
  { id: 'beach', name: '海边登陆', missions: ['抢滩先锋', '守住登陆场', '夺取海岸炮台', '突破沿岸封锁', '海岸指挥所'], sky: '#b6d9dc', sun: '#fff4dc', ground: '#c9c6a6', road: '#b9bdad', map: '#777c67', spawns: [[-36, 30], [-36, 0], [0, 0], [36, 0], [36, -30]], transport: 'boat', route: [-29, 30] },
  { id: 'jungle', name: '丛林作战', missions: ['林间遭遇', '穿越伏击圈', '争夺河谷桥头', '深入密林腹地', '清剿密林营地'], sky: '#bdd2bf', sun: '#edf7d7', ground: '#758e69', road: '#97a08b', map: '#334d3a', spawns: [[-36, 30], [0, 30], [-36, 0], [0, 0], [36, -30]], transport: 'truck', route: [-20, 20] },
  { id: 'mountain', name: '山地打击', missions: ['山口争夺', '高地压制', '断崖反击', '山脊突围', '攻克山顶要塞'], sky: '#c5d7df', sun: '#f7f6eb', ground: '#a5b0a5', road: '#bcc2b3', map: '#59676b', spawns: [[-36, 30], [0, 30], [36, 0], [0, 0], [0, -30]], transport: 'truck', route: [-7, 8] },
  { id: 'city', name: '城市巷战', missions: ['突破外街', '十字路口围攻', '夺取电车站', '守住钟楼街区', '肃清城市中枢'], sky: '#c4d2d5', sun: '#fff1dc', ground: '#adb7b7', road: '#8e9fa1', map: '#505d61', spawns: [[0, 30], [-36, 0], [0, 0], [36, 0], [0, -30]], transport: 'jeep', route: [4, 1] },
  { id: 'fuji', name: '富士山下猛攻', missions: ['山麓前进', '熔岩警戒线', '守卫雪峰参道', '穿越火山灰', '决胜火口防线'], sky: '#c2dbe3', sun: '#fff0eb', ground: '#a3b19b', road: '#b8bcac', map: '#5c6f6a', spawns: [[0, 0], [36, 0], [-36, 0], [0, -15], [36, -22]], transport: 'truck', route: [14, -7] },
  { id: 'palace', name: '皇宫大决战', missions: ['最后的决战'], sky: '#c9d6db', sun: '#ffecd6', ground: '#b8c3b1', road: '#cacbc0', map: '#626764', spawns: [[0, 12]], transport: 'jeep', route: [23, -12] }
]);

export const ENEMY_SCORES = Object.freeze({ raider: 100, heavy: 180, soldier: 220, boss: 600, officer: 850, emperor: 1800 });
const enemyCounts = [14, 18, 22, 26, 30, 32, 35, 38, 42, 45, 46, 49, 52, 55, 58, 60, 63, 66, 69, 72, 74, 77, 80, 83, 86, 62];
export const CAMPAIGN = Object.freeze(CHAPTERS.flatMap((chapter, chapterIndex) => chapter.missions.map((name, stage) => {
  const level = chapterIndex * 5 + stage + 1;
  const bosses = chapter.id === 'palace' ? ['officer', 'officer', 'emperor'] : level % 5 === 0 ? ['officer'] : level % 3 === 0 ? ['boss'] : [];
  return Object.freeze({
    level, name, chapter: chapter.id, chapterIndex, stage, spawn: chapter.spawns[stage],
    bosses: Object.freeze(bosses), regularCount: enemyCounts[level - 1] - bosses.length,
    total: enemyCounts[level - 1], maxAlive: Math.min(14, 5 + Math.ceil(level * .45)),
    spawnInterval: Math.max(.8, 1.65 - level * .034), heavyChance: Math.min(.32, (level - 1) * .018),
    soldierChance: level < 4 ? 0 : Math.min(.23, .08 + (level - 4) * .008),
    healthScale: 1.12 + Math.min(22, level - 1) * .069, speedScale: 1 + Math.min(22, level - 1) * .022,
    damageScale: 1.06 + Math.min(22, level - 1) * .004,
    bossHealth: 1140 + level * 54, officerHealth: chapter.id === 'palace' ? 1520 : 1120 + level * 52,
    emperorHealth: 4200, disaster: chapter.id === 'fuji' ? 'eruption' : chapter.id === 'beach' ? 'tsunami' : chapter.id === 'palace' ? null : 'earthquake',
    disasterChance: level === 1 || chapter.id === 'palace' ? 0 : chapter.id === 'fuji' ? .45 : .30
  });
})));

export const missionAt = level => CAMPAIGN[level - 1];
export const chapterAt = level => CHAPTERS[missionAt(level).chapterIndex];
