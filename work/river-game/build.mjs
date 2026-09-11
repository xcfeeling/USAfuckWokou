import { build } from 'esbuild';
import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const output = resolve('../../outputs/cloudflare-pages');
await mkdir(output, { recursive: true });
await mkdir(resolve(output, 'assets'), { recursive: true });
await copyFile('public/victory.webp', resolve(output, 'assets/victory.webp'));
await build({ entryPoints: ['src/main.js'], bundle: true, minify: true, format: 'esm', target: 'es2022', charset: 'utf8', outfile: resolve(output, 'app.js'), legalComments: 'eof' });
await build({ entryPoints: ['server/worker.js'], bundle: true, minify: true, format: 'esm', platform: 'neutral', target: 'es2022', charset: 'utf8', outfile: resolve(output, '_worker.js') });
const routes = JSON.parse(await readFile('public/_routes.json', { encoding: 'utf8' }));
await writeFile(resolve(output, '_routes.json'), JSON.stringify(routes, null, 2) + '\n', { encoding: 'utf8' });
for (const file of ['index.html', 'style.css', 'mobile.css', 'campaign.css']) {
  const text = new TextDecoder('utf-8', { fatal: true }).decode(await readFile(file));
  await writeFile(resolve(output, file), text, { encoding: 'utf8' });
}
const licenses = [];
for (const [name, path] of [['Three.js', 'node_modules/three/LICENSE'], ['cannon-es', 'node_modules/cannon-es/LICENSE'], ['Lucide', 'node_modules/lucide/LICENSE'], ['PathFinding.js (MIT)', 'node_modules/pathfinding/README.md'], ['heap (PSF)', 'node_modules/heap/README.md']]) {
  licenses.push(`${name}\n${await readFile(path, { encoding: 'utf8' })}`);
}
await writeFile(resolve(output, 'LICENSES.txt'), licenses.join('\n\n'), { encoding: 'utf8' });
console.log('Built static site in outputs/cloudflare-pages');
