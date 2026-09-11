import { CAMPAIGN, ENEMY_SCORES } from './campaign.js';

export function calculateResult(base, seconds, outcome) {
  seconds = Math.round(seconds * 1000) / 1000;
  const bonus = outcome === 'victory' ? Math.round(base * .6 / (1 + seconds / 900)) : 0;
  return { base, seconds, bonus, total: base + bonus };
}

export function maximumBaseScore(level) {
  return CAMPAIGN.slice(0, level).reduce((total, mission) => total + (mission.regularCount * ENEMY_SCORES.soldier + mission.bosses.reduce((score, type) => score + ENEMY_SCORES[type], 0)) * mission.level, 0);
}

export const normalizeNickname = value => value.normalize('NFKC').trim().replace(/\s+/gu, ' ');
export const validNickname = value => [...value].length >= 1 && [...value].length <= 16 && !/[\p{Cc}\p{Cf}\p{Cs}]/u.test(value);
