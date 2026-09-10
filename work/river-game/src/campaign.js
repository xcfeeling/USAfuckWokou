export const CHAPTERS = Object.freeze([
  { id: 'beach', name: '海边登陆', missions: ['抢滩先锋', '滩头防线', '夺取海岸指挥所'], sky: '#a4c7cf', sun: '#fff4dc', ground: '#bfbb98', road: '#b5b29a', map: '#777c67', spawns: [[-36, 30], [0, 0], [36, -30]] },
  { id: 'jungle', name: '丛林作战', missions: ['林间遭遇', '穿越伏击圈', '清剿密林营地'], sky: '#a7b9a2', sun: '#eaf4cd', ground: '#6f8767', road: '#84907b', map: '#334d3a', spawns: [[-36, 30], [0, 0], [36, -30]] },
  { id: 'mountain', name: '山地打击', missions: ['山口争夺', '高地压制', '攻克山顶要塞'], sky: '#aebdc6', sun: '#f4f4ed', ground: '#8d999a', road: '#a3aba7', map: '#59676b', spawns: [[-36, 30], [0, 0], [36, -30]] },
  { id: 'city', name: '城市巷战', missions: ['突破外街', '十字路口围攻', '肃清城市中枢'], sky: '#a3b0b8', sun: '#fff1dc', ground: '#a2adae', road: '#87979d', map: '#505d61', spawns: [[-36, 30], [0, 0], [36, -30]] },
  { id: 'fuji', name: '富士山下猛攻', missions: ['山麓前进', '参道鏖战', '决胜雪峰防线'], sky: '#b7c9d1', sun: '#fff0eb', ground: '#91a299', road: '#aab1a8', map: '#5c6f6a', spawns: [[0, 16], [0, -15], [24, -34]] },
  { id: 'palace', name: '皇宫大决战', missions: ['最后的决战'], sky: '#adbfc4', sun: '#ffecd6', ground: '#a8aeaa', road: '#bfc0b4', map: '#626764', spawns: [[0, 12]] }
]);

const enemyCounts = [8, 12, 16, 17, 20, 24, 25, 28, 32, 33, 36, 40, 41, 44, 48, 40];
export const CAMPAIGN = Object.freeze(CHAPTERS.flatMap((chapter, chapterIndex) => chapter.missions.map((name, stage) => {
  const level = chapterIndex * 3 + stage + 1;
  return Object.freeze({
    level, name, chapter: chapter.id, chapterIndex, stage, spawn: chapter.spawns[stage],
    boss: chapter.id === 'palace' ? 'emperor' : stage === 2 ? 'boss' : null,
    total: enemyCounts[level - 1], maxAlive: Math.min(18, 4 + level),
    spawnInterval: Math.max(.48, 1.55 - level * .065), heavyChance: Math.min(.55, (level - 1) * .036),
    healthScale: 1 + (level - 1) * .12, speedScale: 1 + (level - 1) * .052,
    bossHealth: chapter.id === 'palace' ? 6400 : 1400 + chapterIndex * 720
  });
})));

export const missionAt = level => CAMPAIGN[level - 1];
export const chapterAt = level => CHAPTERS[missionAt(level).chapterIndex];
