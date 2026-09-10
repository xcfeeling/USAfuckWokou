import { handleLeaderboard } from './leaderboard.js';

export default {
  async fetch(request, env) {
    if (new URL(request.url).pathname.startsWith('/api/')) return handleLeaderboard(request, env);
    return env.ASSETS.fetch(request);
  }
};
