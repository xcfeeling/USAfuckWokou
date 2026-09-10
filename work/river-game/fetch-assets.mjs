import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve('../../outputs/cloudflare-pages/assets');
await mkdir(output, { recursive: true });
const sources = [];
for (const [id, maps] of [
  ['asphalt_02', ['diffuse', 'nor_gl', 'rough']],
  ['aerial_grass_rock', ['diffuse']],
  ['bark_brown_02', ['diffuse']],
  ['kloppenheim_06_puresky', ['hdri']]
]) {
  const response = await fetch(`https://api.polyhaven.com/files/${id}`);
  if (!response.ok) throw new Error(`${id}: ${response.status}`);
  const manifest = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(await response.arrayBuffer()));
  for (const map of maps) {
    const key = Object.keys(manifest).find((key) => key.toLowerCase() === map);
    const format = map === 'hdri' ? 'hdr' : 'jpg';
    const asset = manifest[key]['1k'][format];
    const download = await fetch(asset.url);
    if (!download.ok) throw new Error(`${asset.url}: ${download.status}`);
    const bytes = new Uint8Array(await download.arrayBuffer());
    const filename = `${id}-${map}.${format}`;
    await writeFile(resolve(output, filename), bytes);
    sources.push({ filename, source: asset.url, license: 'CC0', provider: 'Poly Haven' });
    console.log(`${filename}: ${bytes.length} bytes`);
  }
}
const waterUrl = 'https://threejs.org/examples/textures/waternormals.jpg';
const water = await fetch(waterUrl);
if (!water.ok) throw new Error(`Water texture: ${water.status}`);
await writeFile(resolve(output, 'waternormals.jpg'), new Uint8Array(await water.arrayBuffer()));
sources.push({ filename: 'waternormals.jpg', source: waterUrl, license: 'MIT', provider: 'Three.js examples' });
await writeFile(resolve(output, 'sources.json'), `${JSON.stringify(sources, null, 2)}\n`, { encoding: 'utf8' });
