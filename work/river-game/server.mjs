import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { Readable } from 'node:stream';
import { handleLeaderboard } from './server/leaderboard.js';
import { openLocalDatabase } from './server/local-database.mjs';
const root = resolve('../../outputs/cloudflare-pages');
const port = Number(process.env.PORT || 4173);
let leaderboardDatabase;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.hdr': 'application/octet-stream', '.json': 'application/json; charset=utf-8' };
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname.startsWith('/api/')) {
      leaderboardDatabase ||= openLocalDatabase(resolve(process.env.LEADERBOARD_DATABASE || '.local/leaderboard.sqlite'));
      const headers = new Headers();
      for (const [name, value] of Object.entries(request.headers)) if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
      const apiRequest = new Request(new URL(request.url, `http://${request.headers.host || `127.0.0.1:${port}`}`), { method: request.method, headers, body: ['GET', 'HEAD'].includes(request.method) ? undefined : Readable.toWeb(request), duplex: 'half' });
      const result = await handleLeaderboard(apiRequest, { LEADERBOARD_DB: leaderboardDatabase });
      response.writeHead(result.status, Object.fromEntries(result.headers)); response.end(Buffer.from(await result.arrayBuffer())); return;
    }
    if (pathname === '/_worker.js' || pathname === '/_routes.json') { response.writeHead(404); response.end(); return; }
    const path = resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
    if (path !== root && !path.startsWith(root + sep)) { response.writeHead(403); response.end(); return; }
    const data = await readFile(path);
    response.writeHead(200, { 'Content-Type': types[extname(path)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    response.end(data);
  } catch { response.writeHead(404); response.end('Not found', 'utf8'); }
}).listen(port, '127.0.0.1', () => console.log(`http://127.0.0.1:${port}`));
