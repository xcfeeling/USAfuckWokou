import * as THREE from 'three';
import { box, cylinder, tube, mesh } from './models.js';
import { surfaceMaps } from './surfaces.js';

export function createCampaignScenery(type, { root, assets, material, obstacle, ownedMaps, fires }) {
  let seed = 1996 + ['beach', 'jungle', 'mountain', 'city', 'fuji', 'palace'].indexOf(type) * 617;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const rockMat = material(type === 'fuji' ? '#899491' : '#a5aea3', { map: assets.mats.concrete.map, normalMap: assets.mats.concrete.normalMap, vertexColors: true });
  const bark = material('#aea18c', { map: assets.maps.bark, bumpMap: assets.maps.bark, bumpScale: .035 });
  const leafMats = ['#648764', '#819967', '#a2af76'].map(color => material(color, { roughness: .86, side: THREE.DoubleSide, vertexColors: true }));
  const stone = material('#b2b9b4', { map: assets.mats.concrete.map, normalMap: assets.mats.concrete.normalMap });
  const vermilion = material('#a44740', { ...surfaceMaps('paint'), roughness: .7 });
  const roofMat = material('#455354', { ...surfaceMaps('metal'), metalness: .25, roughness: .7 });
  const gold = material('#d6b778', { metalness: .6, roughness: .4 });
  const black = material('#313c3b'), plaster = material('#deded0', { ...surfaceMaps('cloth'), bumpScale: .008 });
  const animatedWater = [], foamBands = [], foliage = [], blossoms = [];
  let waterTime = 0;
  let palaceIntact, palaceRuins, collapse = -1;
  const palaceCenter = new THREE.Vector3(0, 0, -21);

  function rock(x, z, size = 1.8, height = size, collide = true, parent = root) {
    const geometry = new THREE.IcosahedronGeometry(1, 2), positions = geometry.attributes.position, colors = [];
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i), noise = Math.sin(x * 9 + z * 11 + y * 5), scale = 1 + noise * .12;
      positions.setXYZ(i, x * scale, y * scale, z * scale);
      const shade = .72 + y * .16 + noise * .08; colors.push(shade, shade * 1.02, shade * .97);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();
    const item = mesh(geometry, rockMat, [x, height * .35, z], parent); item.scale.set(size, height, size * .75); item.rotation.y = random() * 6;
    if (collide) obstacle(x, z, size * .87, size * .7, height * 1.35);
    return item;
  }
  function palm(x, z, scale = 1) {
    obstacle(x, z, .43 * scale, .43 * scale, 5.6 * scale);
    const tree = new THREE.Group(); tree.position.set(x, 0, z); tree.scale.setScalar(scale); root.add(tree);
    tube(tree, bark, .19, [0, 0, 0], [.5, 5.4, .15], 8);
    for (let i = 0; i < 12; i++) { const ring = cylinder(tree, bark, .205 - i * .004, .08, [i / 12 * .5, .3 + i * .42, i / 12 * .15], .19 - i * .004, 8); ring.rotation.z = -.09; }
    for (let f = 0; f < 8; f++) {
      const frond = new THREE.Group(); frond.position.set(.5, 5.35, .15); frond.rotation.y = f * Math.PI / 4 + random() * .2; tree.add(frond);
      const points = [], indices = [], uvs = [], colors = [];
      for (let i = 0; i <= 28; i++) {
        const t = i / 28, spread = Math.sin(t * Math.PI) * .66 * (i % 2 ? .26 : 1), y = Math.sin(t * Math.PI) * .68 - t * .8;
        points.push(-spread, y - .10, t * 3.1 - .08, 0, y, t * 3.1, spread, y - .10, t * 3.1 - .08);
        uvs.push(0, t, .5, t, 1, t);
        const shade = .6 + Math.sin(t * Math.PI) * .35; colors.push(shade, shade, shade, .86, .92, .7, shade, shade, shade);
        if (i < 28) { const n = i * 3; indices.push(n, n + 1, n + 4, n, n + 4, n + 3, n + 1, n + 2, n + 5, n + 1, n + 5, n + 4); }
      }
      const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3)); geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); geometry.setIndex(indices); geometry.computeVertexNormals();
      mesh(geometry, leafMats[f % 3], [0, 0, 0], frond);
      tube(frond, bark, .014, [0, 0, 0], [0, -.8, 3.1], 4);
    }
  }
  function fern(x, z, scale = 1) {
    for (let i = 0; i < 7; i++) {
      const angle = i * Math.PI * 2 / 7;
      foliage.push({ x: x + Math.sin(angle) * .32 * scale, y: .42 * scale, z: z + Math.cos(angle) * .32 * scale, rx: -.7, ry: angle, rz: (random() - .5) * .35, scale });
    }
  }
  function foliageBatch(placements, mat) {
    if (!placements.length) return;
    const geometry = new THREE.PlaneGeometry(1.35, 1.2, 2, 3), tiles = new Map();
    for (const item of placements) { const key = `${Math.floor(item.x / 24)}:${Math.floor(item.z / 24)}`; if (!tiles.has(key)) tiles.set(key, []); tiles.get(key).push(item); }
    for (const items of tiles.values()) {
      const leaves = new THREE.InstancedMesh(geometry, mat, items.length), dummy = new THREE.Object3D();
      items.forEach((item, i) => { dummy.position.set(item.x, item.y, item.z); dummy.rotation.set(item.rx, item.ry, item.rz); dummy.scale.setScalar(item.scale); dummy.updateMatrix(); leaves.setMatrixAt(i, dummy.matrix); });
      leaves.receiveShadow = true; leaves.castShadow = mat !== assets.mats.foliage; leaves.computeBoundingSphere(); leaves.boundingSphere.radius += .2; root.add(leaves);
    }
  }
  function water(x, z, width, depth, ocean = false) {
    const normal = assets.water.clone(); normal.repeat.set(width / 8, depth / 8); ownedMaps.add(normal);
    const mat = material(ocean ? '#397b8a' : '#638f92', { normalMap: normal, normalScale: new THREE.Vector2(.4, .4), metalness: .25, roughness: .28, envMapIntensity: .9 });
    const surface = mesh(new THREE.PlaneGeometry(width, depth), mat, [x, -.022, z], root); surface.rotation.x = -Math.PI / 2; surface.castShadow = false; animatedWater.push(normal);
    if (ocean) {
      const foam = material('#d5e8db', { transparent: true, opacity: .6, vertexColors: true, depthWrite: false, side: THREE.DoubleSide });
      for (let j = 0; j < 4; j++) {
        const positions = [], colors = [], indices = [];
        for (let start = -100 + j * 2; start < 100; start += 10 + random() * 5) {
          const length = 4 + random() * 5, base = positions.length / 3;
          for (let i = 0; i <= 12; i++) {
            const t = i / 12, rz = start + t * length, rx = x + width / 2 - .25 - j * .95 + Math.sin(rz * .43 + j) * .17, taper = Math.sin(t * Math.PI), half = (.10 + j * .025) * taper;
            positions.push(rx - half, .015, rz, rx, .015, rz, rx + half, .015, rz);
            colors.push(1, 1, 1, 0, 1, 1, 1, taper * (1 - j * .18), 1, 1, 1, 0);
            if (i < 12) { const n = base + i * 3; indices.push(n, n + 1, n + 4, n, n + 4, n + 3, n + 1, n + 2, n + 5, n + 1, n + 5, n + 4); }
          }
        }
        const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 4)); geometry.setIndex(indices); geometry.computeVertexNormals();
        const band = mesh(geometry, foam, [0, 0, 0], root); band.castShadow = false; band.userData.phase = j; foamBands.push(band);
      }
    }
  }
  function torii(x, z, width = 7) {
    for (const s of [-1, 1]) { cylinder(root, vermilion, .25, 4.8, [x + s * width * .42, 2.4, z], .34, 10); cylinder(root, black, .36, .55, [x + s * width * .42, .27, z], .36, 10); obstacle(x + s * width * .42, z, .4, .4, 4.8); }
    box(root, vermilion, [width + .5, .28, .36], [x, 3.8, z]);
    const curve = new THREE.CatmullRomCurve3([[-width * .6, 4.95, 0], [0, 4.65, 0], [width * .6, 4.95, 0]].map(p => new THREE.Vector3(...p)));
    mesh(new THREE.TubeGeometry(curve, 18, .21, 6, false), black, [x, 0, z], root);
    box(root, gold, [.7, .85, .10], [x, 4.2, z + .23]);
  }
  function lantern(x, z) {
    obstacle(x, z, .48, .48, 2.15);
    box(root, stone, [.95, .25, .95], [x, .12, z]); cylinder(root, stone, .20, 1.12, [x, .77, z], .25, 6);
    box(root, stone, [.72, .12, .72], [x, 1.4, z]); box(root, gold, [.42, .42, .42], [x, 1.65, z]);
    for (const s of [-1, 1]) for (const t of [-1, 1]) box(root, stone, [.10, .50, .1], [x + s * .28, 1.67, z + t * .28]);
    const cap = mesh(new THREE.ConeGeometry(.64, .35, 4), stone, [x, 2.06, z], root); cap.rotation.y = Math.PI / 4;
  }
  function tiledRoof(parent, x, y, z, width, depth) {
    const shape = new THREE.Shape(); shape.moveTo(-depth / 2, .4); shape.quadraticCurveTo(-depth * .3, .0, 0, 1.5); shape.quadraticCurveTo(depth * .3, .0, depth / 2, .4); shape.lineTo(depth / 2, .18); shape.quadraticCurveTo(depth * .3, -.25, 0, 1.25); shape.quadraticCurveTo(-depth * .3, -.25, -depth / 2, .18); shape.closePath();
    const item = mesh(new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false, curveSegments: 8 }), roofMat, [x - width / 2, y, z], parent); item.rotation.y = Math.PI / 2;
    box(parent, gold, [width + .3, .15, .19], [x, y + 1.51, z]);
    for (const s of [-1, 1]) tube(parent, gold, .06, [x - width / 2, y + .43, z + s * depth / 2], [x + width / 2, y + .43, z + s * depth / 2], 6);
    for (let i = -width / 2 + .25; i < width / 2; i += .45) {
      for (const s of [-1, 1]) tube(parent, roofMat, .052, [x + i, y + 1.44, z], [x + i, y + .43, z + s * depth / 2], 4);
    }
  }
  function palaceBuilding(x, z, width, depth, height) {
    obstacle(x, z, width / 2 + .3, depth / 2 + .3, height + 3);
    box(palaceIntact, stone, [width + 1.8, .7, depth + 1.8], [x, .35, z]);
    box(palaceIntact, plaster, [width, height, depth], [x, .7 + height / 2, z]);
    for (let i = -width / 2 + .65; i < width / 2; i += 1.45) {
      box(palaceIntact, vermilion, [.20, height, .26], [x + i, .7 + height / 2, z + depth / 2 + .04]);
      box(palaceIntact, black, [1.04, height * .55, .04], [x + i + .65, .9 + height * .45, z + depth / 2 + .03]);
      for (let j = 0; j < 4; j++) box(palaceIntact, gold, [.026, height * .55, .05], [x + i + .25 + j * .23, .9 + height * .45, z + depth / 2 + .07]);
    }
    tiledRoof(palaceIntact, x, height + .55, z, width + 2, depth + 2.5);
    box(palaceIntact, plaster, [width * .62, 1.8, depth * .65], [x, height + 2.3, z]);
    tiledRoof(palaceIntact, x, height + 3.05, z, width * .72, depth * .84);
    for (let i = 0; i < 3; i++) box(palaceIntact, stone, [width * .38 + i * .7, .22, .65], [x, .6 - i * .2, z + depth / 2 + .9 + i * .55]);
    box(palaceRuins, stone, [width + 1.8, .35, depth + 1.8], [x, .17, z]);
    for (let i = 0; i < 50; i++) {
      const rx = x + (random() - .5) * (width + 4), rz = z + (random() - .5) * (depth + 4);
      const piece = box(palaceRuins, i % 3 ? stone : roofMat, [.3 + random() * 1.9, .16 + random() * .5, .3 + random()], [rx, .2 + random() * .6, rz]); piece.rotation.set(random() * .5, random() * 6, random() * .45);
    }
    for (let i = 0; i < 6; i++) { const column = box(palaceRuins, i % 2 ? vermilion : plaster, [.3, 1 + random() * 1.4, .4], [x + (random() - .5) * width, .6, z + depth * .42]); column.rotation.z = (random() - .5) * .7; }
  }

  if (type === 'beach') {
    water(-89, 0, 80, 200, true); obstacle(-80, 0, 31, 50, 2, 0, true);
    for (const z of [-29, 3, 32]) {
      const landing = new THREE.Group(); landing.position.set(-45, 0, z); landing.rotation.y = Math.PI / 2; root.add(landing);
      const hull = material('#727f79', { ...surfaceMaps('metal'), metalness: .5 });
      box(landing, hull, [3, .45, 6], [0, .25, 0]); for (const s of [-1, 1]) box(landing, hull, [.15, 1.3, 6], [s * 1.42, .8, 0]);
      box(landing, hull, [3, 1.2, .2], [0, .8, -2.9]); const ramp = box(landing, hull, [2.8, .13, 2.7], [0, .18, 4.1]); ramp.rotation.x = .13;
      obstacle(-45, z, 3.2, 1.5, 1.5);
    }
    for (let i = 0; i < 18; i++) { const x = -38 + (i % 3) * 10, z = -43 + Math.floor(i / 3) * 16; rock(x - 4, z - 4, .65, .5); for (const a of [-.8, .8]) { const beam = box(root, roofMat, [.20, 2.0, .20], [x, .6, z]); beam.rotation.z = a; } obstacle(x, z, .8, .4, 1.2); }
    for (let i = 0; i < 12; i++) palm(22 + (i % 3) * 15, -42 + Math.floor(i / 3) * 27, .7 + random() * .2);
  }
  if (type === 'jungle') {
    for (const z of [-40, -10, 20, 42]) for (const x of [-48, -23, 14, 48]) {
      palm(x, z, .85 + random() * .24); palm(x + 3.2, z + 3, .65 + random() * .22);
      for (let i = 0; i < 4; i++) fern(x + (random() - .5) * 9, z + (random() - .5) * 7, .7 + random() * .7);
      rock(x - 3, z - 1.8, 1.0 + random(), .7);
    }
    for (const x of [-68, 68]) for (let z = -50; z <= 50; z += 10) palm(x, z, 1.3);
  }
  if (type === 'mountain' || type === 'fuji') {
    for (const x of [-72, 72]) for (let z = -55; z < 60; z += 22) rock(x, z, 14 + random() * 5, 12 + random() * 10, false);
    for (let i = 0; i < 12; i++) rock(-49 + (i % 4) * 31, -40 + Math.floor(i / 4) * 36, 2 + random() * 1.3, 1.5 + random() * 2);
    if (type === 'mountain') for (let i = 0; i < 6; i++) { const x = -46 + i * 18; rock(x, -66, 14, 16 + random() * 9, false); }
  }
  if (type === 'fuji') {
    const slopeMat = material('#7d8b88', { map: assets.mats.concrete.map, normalMap: assets.mats.concrete.normalMap });
    const mountain = mesh(new THREE.ConeGeometry(34, 44, 56, 10), slopeMat, [16, 20, -76], root);
    const snow = material('#eef2ef', { roughness: .94 });
    mesh(new THREE.ConeGeometry(10.6, 13.8, 56, 5), snow, [16, 35.3, -76], root);
    obstacle(16, -76, 32, 33, 44);
    mountain.castShadow = false;
    for (const z of [-31, 0, 31]) { torii(0, z); for (const x of [-8, 8]) lantern(x, z + 4); }
    const blossomCanvas = document.createElement('canvas'); blossomCanvas.width = blossomCanvas.height = 512;
    const context = blossomCanvas.getContext('2d'); context.filter = 'grayscale(1) brightness(1.5)'; context.drawImage(assets.mats.foliage.map.image, 0, 0, 512, 512);
    const blossomMap = new THREE.CanvasTexture(blossomCanvas); blossomMap.colorSpace = THREE.SRGBColorSpace; ownedMaps.add(blossomMap);
    const blossom = material('#e5bccb', { map: blossomMap, alphaMap: assets.mats.foliage.alphaMap, alphaTest: .48, normalMap: assets.mats.foliage.normalMap, normalScale: new THREE.Vector2(.3, .3), roughness: .9, side: THREE.DoubleSide });
    blossom.onBeforeCompile = assets.mats.foliage.onBeforeCompile;
    for (const x of [-43, -19, 19, 43]) for (const z of [-37, 17]) {
      obstacle(x, z, .45, .45, 4.4); tube(root, bark, .17, [x, 0, z], [x + .3, 4.5, z + .15], 7);
      for (let i = 0; i < 5; i++) {
        const dx = Math.sin(i * 2.4) * 1.35, dz = Math.cos(i * 2.4) * 1.35; tube(root, bark, .07, [x, 2.7, z], [x + dx, 4.1, z + dz], 5);
        for (let j = 0; j < 9; j++) blossoms.push({ x: x + dx + (random() - .5) * 1.4, y: 4.1 + random() * 1.15, z: z + dz + (random() - .5) * 1.4, rx: -random() * 1.7, ry: random() * 6.28, rz: random() * 3, scale: .7 + random() * .6 });
      }
    }
    foliageBatch(blossoms, blossom);
  }
  if (type === 'palace') {
    palaceIntact = new THREE.Group(); palaceRuins = new THREE.Group(); root.add(palaceIntact, palaceRuins); palaceRuins.visible = false;
    water(-48, 0, 18, 94); water(48, 0, 18, 94); obstacle(-48, 0, 9, 47, 2, 0, true); obstacle(48, 0, 9, 47, 2, 0, true);
    const plaza = material('#b9beb7', { map: assets.maps.battleRoad, normalMap: assets.maps.battleNormal, roughness: .82 });
    box(root, plaza, [70, .12, 83], [0, -.10, 1]);
    for (let z = -35; z < 42; z += 3) box(root, stone, [69, .012, .035], [0, -.026, z]);
    for (let x = -33; x <= 33; x += 3) box(root, stone, [.035, .012, 78], [x, -.025, 3]);
    palaceBuilding(0, -22, 23, 11, 4.2); palaceBuilding(-26, -17, 10, 9, 3.1); palaceBuilding(26, -17, 10, 9, 3.1);
    for (const x of [-34, 34]) { box(palaceIntact, plaster, [.65, 2.8, 65], [x, 1.4, 2]); obstacle(x, 2, .55, 32.5, 2.8); box(palaceRuins, stone, [1.4, .6, 65], [x, .3, 2]); }
    for (const z of [-6, 9, 24, 37]) for (const x of [-8, 8]) lantern(x, z);
    for (const x of [-13, 13]) { box(palaceIntact, vermilion, [.55, 5.4, .55], [x, 2.7, -3]); obstacle(x, -3, .5, .5, 5.4); }
    tiledRoof(palaceIntact, 0, 5, -3, 29, 3.4);
    for (const x of [-23, 23]) for (const z of [8, 27]) { rock(x, z, 1.4, 1.2); fern(x + 2, z, 1.6); }
    for (const group of [palaceIntact, palaceRuins]) group.traverse(object => { if (object.isMesh) object.userData.batchRoot = group; });
  }
  foliageBatch(foliage, assets.mats.foliage);
  return {
    palaceCenter: type === 'palace' ? palaceCenter : null,
    update(dt) {
      waterTime += dt;
      for (const map of animatedWater) { map.offset.x += dt * .018; map.offset.y += dt * .007; }
      for (const band of foamBands) { band.position.x = Math.sin(waterTime * .65 + band.userData.phase) * .35; band.updateMatrix(); }
      if (collapse >= 0 && collapse < 2.2) {
        collapse += dt; palaceIntact.position.y = -Math.min(1, collapse / 1.8) * 10; palaceIntact.rotation.z = Math.sin(collapse * 1.4) * .055; palaceIntact.updateMatrix();
        if (collapse >= 1.8) palaceIntact.visible = false;
      }
    },
    destroyPalace(effects) {
      if (!palaceIntact || collapse >= 0) return;
      collapse = 0; palaceRuins.visible = true;
      for (let i = 0; i < 9; i++) { const position = new THREE.Vector3(-26 + (i % 3) * 26, .7, -25 + Math.floor(i / 3) * 6); effects.debrisBurst(position, 10, '#b7b4a4'); effects.smoke(position, 6, '#858984', 3.8); fires.push(position); }
    }
  };
}
