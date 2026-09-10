import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('../../outputs/cloudflare-pages/assets');
const decoder = new TextDecoder('utf-8', { fatal: true });
const sources = JSON.parse(decoder.decode(await readFile(resolve(output, 'sources.json'))));
for (const [id, maps] of [['island_tree_02', ['leaves_diff', 'leaves_alpha', 'leaves_nor_gl']], ['concrete_wall_007', ['Diffuse', 'nor_gl']]]) {
  const response = await fetch(`https://api.polyhaven.com/files/${id}`);
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  const manifest = JSON.parse(decoder.decode(await response.arrayBuffer()));
  for (const map of maps) {
    const key = Object.keys(manifest).find(key => key.toLowerCase() === map.toLowerCase());
    const asset = manifest[key]['1k'].jpg;
    const response = await fetch(asset.url);
    if (!response.ok) throw new Error(`${asset.url}: ${response.status}`);
    const filename = `${id}-${map.toLowerCase()}.jpg`;
    await writeFile(resolve(output, filename), new Uint8Array(await response.arrayBuffer()));
    sources.push({ filename, source: asset.url, license: 'CC0', provider: 'Poly Haven' });
    console.log(filename);
  }
}
await writeFile(resolve(output, 'sources.json'), `${JSON.stringify(sources, null, 2)}\n`, { encoding: 'utf8' });
