import * as THREE from 'three';

const surfaces = new Map();

export function surfaceMaps(type) {
  if (surfaces.has(type)) return surfaces.get(type);
  const size = ['skin', 'leather', 'fur', 'rubber'].includes(type) ? 256 : 512, canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const heightCanvas = document.createElement('canvas'), roughCanvas = document.createElement('canvas');
  heightCanvas.width = heightCanvas.height = roughCanvas.width = roughCanvas.height = size;
  const ctx = canvas.getContext('2d'), heightCtx = heightCanvas.getContext('2d'), roughCtx = roughCanvas.getContext('2d');
  const pixels = ctx.createImageData(size, size), heights = heightCtx.createImageData(size, size), roughness = roughCtx.createImageData(size, size);
  let seed = type === 'cloth' ? 7451 : type === 'metal' ? 1319 : 5793;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const i = (y * size + x) * 4;
    const grain = (random() - .5) * 10, mottling = Math.sin(x * .044 + Math.cos(y * .031) * 2) * Math.sin(y * .055) * 6;
    const weave = type === 'cloth' ? ((x % 4 < 2 ? 1 : -1) + (y % 4 < 2 ? 1 : -1)) * 3 : 0;
    const fiber = type === 'fur' ? Math.sin(x * 1.7 + Math.sin(y * .21) * 1.6) * 5 : 0;
    const fine = type === 'skin' ? .18 : type === 'metal' || type === 'rubber' ? .45 : 1;
    const value = 236 + (grain + mottling + weave + fiber) * fine;
    pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = value; pixels.data[i + 3] = 255;
    heights.data[i] = heights.data[i + 1] = heights.data[i + 2] = 128 + (grain * 1.8 + weave * 2 + fiber * 2 + (type === 'leather' ? mottling * 2 : 0)) * fine;
    heights.data[i + 3] = 255;
    roughness.data[i] = roughness.data[i + 1] = roughness.data[i + 2] = 235 + grain * fine + mottling * (type === 'metal' || type === 'paint' ? 2 : .5);
    roughness.data[i + 3] = 255;
  }
  ctx.putImageData(pixels, 0, 0);
  heightCtx.putImageData(heights, 0, 0); roughCtx.putImageData(roughness, 0, 0);
  if (type === 'metal' || type === 'paint') {
    for (let i = 0; i < 190; i++) {
      const x = random() * size, y = random() * size;
      ctx.strokeStyle = i % 3 ? '#ffffff24' : '#20272216'; ctx.lineWidth = .4 + random() * .6;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 2 + random() * 24, y + random() * 3); ctx.stroke();
    }
    if (type === 'paint') for (let i = 0; i < 65; i++) {
      const x = random() * size, y = random() * size, r = .7 + random() * 3;
      ctx.fillStyle = i % 3 ? '#72564930' : '#3c494840'; ctx.beginPath(); ctx.ellipse(x, y, r, r * .45, random() * 6, 0, Math.PI * 2); ctx.fill();
      roughCtx.fillStyle = '#ffffff'; roughCtx.fillRect(x, y, r, r * .5);
    }
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  // Color wear, surface relief and specular variation need independent values.
  const bumpMap = new THREE.CanvasTexture(heightCanvas), roughnessMap = new THREE.CanvasTexture(roughCanvas);
  for (const texture of [map, bumpMap, roughnessMap]) { texture.wrapS = texture.wrapT = THREE.RepeatWrapping; texture.anisotropy = 8; texture.userData.shared = true; }
  const result = { map, bumpMap, roughnessMap }; surfaces.set(type, result); return result;
}

export function grassAlbedo(source) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 1024;
  const ctx = canvas.getContext('2d'); ctx.drawImage(source.image, 0, 0, 1024, 1024);
  const pixels = ctx.getImageData(0, 0, 1024, 1024), data = pixels.data;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2], luminance = r * .2126 + g * .7152 + b * .0722;
    const vegetation = THREE.MathUtils.clamp((Math.min(r, g) - b) / 75, 0, 1);
    data[i] = THREE.MathUtils.lerp(r * .96, luminance * .76, vegetation);
    data[i + 1] = THREE.MathUtils.lerp(g * .98, luminance * 1.02, vegetation);
    data[i + 2] = THREE.MathUtils.lerp(b, luminance * .68, vegetation);
  }
  ctx.putImageData(pixels, 0, 0);
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping; map.repeat.copy(source.repeat); map.anisotropy = source.anisotropy; return map;
}

export function roadEdges() {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d'), pixels = ctx.createImageData(128, 128);
  for (let y = 0; y < 128; y++) for (let x = 0; x < 128; x++) {
    const u = x / 128 * Math.PI * 2, edge = .025 + Math.sin(u * 3) * .013 + Math.sin(u * 7) * .007;
    const alpha = THREE.MathUtils.smoothstep(Math.min(y, 127 - y) / 127, edge, .095 + edge) * 255;
    const i = (y * 128 + x) * 4;
    pixels.data[i] = pixels.data[i + 1] = pixels.data[i + 2] = alpha; pixels.data[i + 3] = 255;
  }
  ctx.putImageData(pixels, 0, 0);
  const map = new THREE.CanvasTexture(canvas); map.wrapS = THREE.RepeatWrapping; map.repeat.set(12, 1); return map;
}

export function groundWeathering(width, depth) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 2048;
  const ctx = canvas.getContext('2d');
  let seed = 91637;
  const random = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const px = x => (x / width + .5) * 2048, py = z => (z / depth + .5) * 2048;
  for (let i = 0; i < 140; i++) {
    const x = random() * 2048, y = random() * 2048, r = 25 + random() * 95;
    ctx.fillStyle = i % 3 ? '#1c211c0c' : '#77694f09';
    for (let layer = 0; layer < 5; layer++) {
      ctx.beginPath();
      for (let j = 0; j < 18; j++) {
        const a = j / 18 * Math.PI * 2, radius = r * (.75 + Math.sin(a * 3 + i) * .23) * (1 - layer * .1);
        const xx = x + Math.cos(a) * radius * 1.6, yy = y + Math.sin(a) * radius * .5;
        j ? ctx.lineTo(xx, yy) : ctx.moveTo(xx, yy);
      }
      ctx.closePath(); ctx.fill();
    }
  }
  for (const lane of [-width * .24, width * .30]) {
    for (const side of [-.65, .65]) {
      ctx.save(); ctx.translate(px(lane + side), 0); ctx.rotate(lane > 0 ? -.13 : .045);
      ctx.fillStyle = '#121d162a'; ctx.fillRect(-7, -60, 14, 2180);
      for (let y = 0; y < 2180; y += 10) { ctx.fillStyle = '#111b1738'; ctx.fillRect(-9, y, 18, 4); }
      ctx.restore();
    }
  }
  for (let i = 0; i < 7000; i++) {
    const x = random() * 2048, y = random() * 2048;
    ctx.fillStyle = i % 2 ? '#d0cbb64a' : '#18241c40'; ctx.fillRect(x, y, 1 + random() * 2, 1 + random() * 2);
  }
  for (const [x, z] of [[-width * .29, -depth * .23], [width * .22, depth * .2]]) {
    const cx = px(x), cy = py(z), radius = 54;
    const gradient = ctx.createRadialGradient(cx, cy, 7, cx, cy, radius);
    gradient.addColorStop(0, '#101714aa'); gradient.addColorStop(.48, '#21271e77'); gradient.addColorStop(.66, '#443d2c44'); gradient.addColorStop(1, '#22291f00');
    ctx.fillStyle = gradient; ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
    for (let i = 0; i < 11; i++) {
      const a = random() * Math.PI * 2;
      ctx.strokeStyle = '#151d1750'; ctx.lineWidth = 1 + random() * 2; ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * 23, cy + Math.sin(a) * 23);
      ctx.lineTo(cx + Math.cos(a + .08) * 64, cy + Math.sin(a + .08) * 64); ctx.lineTo(cx + Math.cos(a) * 83, cy + Math.sin(a) * 83); ctx.stroke();
    }
  }
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace; map.anisotropy = 8; return map;
}
