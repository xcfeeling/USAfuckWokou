import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, cylinder, tube, mesh } from './models.js';
import { surfaceMaps } from './surfaces.js';

export function createCampaignScenery(type, { root, assets, material, obstacle, ownedMaps, fires }) {
  let seed = 1996 + ['beach', 'jungle', 'mountain', 'city', 'fuji', 'palace'].indexOf(type) * 617;
  const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
  const rockMat = material(type === 'fuji' ? '#b4b6b2' : '#c2c3b8', { map: assets.maps.stone, normalMap: assets.maps.stoneNormal, normalScale: new THREE.Vector2(.55, .55), vertexColors: true });
  const bark = material('#aea18c', { map: assets.maps.bark, bumpMap: assets.maps.bark, bumpScale: .035 });
  const leafMats = ['#648764', '#819967', '#a2af76'].map(color => material(color, { roughness: .86, side: THREE.DoubleSide, vertexColors: true }));
  const stone = material('#b2b9b4', { map: assets.mats.concrete.map, normalMap: assets.mats.concrete.normalMap, normalScale: new THREE.Vector2(.35, .35) });
  const vermilion = material('#914c43', { ...surfaceMaps('paint'), roughness: .7, bumpScale: .008 });
  const roofMat = material(type === 'palace' ? '#4f5954' : '#4b5352', { ...surfaceMaps('plaster'), metalness: .06, roughness: .82, bumpScale: .008 });
  const palaceWood = material('#403b32', { map: assets.maps.bark, roughness: .82 });
  const gold = material('#bca676', { ...surfaceMaps('metal'), metalness: .6, roughness: .4, bumpScale: .004 });
  const black = material('#313c3b'), plaster = material('#d4d6ca', { ...surfaceMaps('plaster'), bumpScale: .008 });
  const paper = material('#a6b0a4', { ...surfaceMaps('cloth'), bumpScale: .003 }), glass = material('#4c6567', { metalness: .35, roughness: .19, envMapIntensity: .85 });
  const animatedWater = [], foamBands = [], foliage = [], blossoms = [];
  const roofOccluders = [], roofHit = new THREE.Vector3();
  let waterTime = 0;
  let palaceIntact, palaceRuins, volcanoGlow, collapse = -1;
  const volcanoVent = type === 'fuji' ? new THREE.Vector3(14, 14.9, -30) : null;
  const palaceCenter = new THREE.Vector3(0, 0, -21);

  function rock(x, z, size = 1.8, height = size, collide = true, parent = root) {
    const geometry = new THREE.IcosahedronGeometry(1, 2), positions = geometry.attributes.position, colors = [];
    for (let i = 0; i < positions.count; i++) {
      const x = positions.getX(i), y = positions.getY(i), z = positions.getZ(i), noise = Math.sin(x * 9 + z * 11 + y * 5), scale = 1 + noise * .12;
      positions.setXYZ(i, x * scale, y * scale, z * scale);
      const shade = .72 + y * .16 + noise * .08; colors.push(shade, shade * 1.02, shade * .97);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.deleteAttribute('normal');
    const smoothGeometry = mergeVertices(geometry); geometry.dispose(); smoothGeometry.computeVertexNormals();
    const item = mesh(smoothGeometry, rockMat, [x, height * .35, z], parent); item.scale.set(size, height, size * .75); item.rotation.y = random() * 6;
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
    const mat = material(ocean ? '#ffffff' : '#667f76', { normalMap: normal, normalScale: new THREE.Vector2(.26, .26), metalness: 0, roughness: .18, envMapIntensity: 1, vertexColors: ocean });
    const waterGeometry = new THREE.PlaneGeometry(width, depth, ocean ? 12 : 1, ocean ? 80 : 1);
    if (ocean) {
      const positions = waterGeometry.attributes.position, colors = [];
      const deep = new THREE.Color('#397a86'), shallow = new THREE.Color('#779d96');
      for (let i = 0; i < positions.count; i++) {
        const px = positions.getX(i), py = positions.getY(i), shore = THREE.MathUtils.smoothstep(px, width / 2 - 9, width / 2);
        const color = deep.clone().lerp(shallow, shore); colors.push(color.r, color.g, color.b);
        positions.setX(i, px + shore * (Math.sin(py * .19) * .25 + Math.sin(py * .63) * .1));
      }
      waterGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    }
    const surface = mesh(waterGeometry, mat, [x, -.022, z], root); surface.rotation.x = -Math.PI / 2; surface.castShadow = false; animatedWater.push(normal);
    if (ocean) {
      const foam = material('#dfe5df', { transparent: true, opacity: .28, vertexColors: true, depthWrite: false, side: THREE.DoubleSide });
      for (let j = 0; j < 4; j++) {
        const positions = [], colors = [], indices = [];
        for (let start = -100 + j * 2; start < 100; start += 10 + random() * 5) {
          const length = 4 + random() * 5, base = positions.length / 3;
          for (let i = 0; i <= 12; i++) {
            const t = i / 12, rz = start + t * length, rx = x + width / 2 - .4 - j * .95 + Math.sin(rz * .19 + j) * .25 + Math.sin(rz * .63) * .1, taper = Math.sin(t * Math.PI), half = (.035 + j * .014) * taper;
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
    roofOccluders.push(new THREE.Box3(new THREE.Vector3(x - width / 2, y + .18, z - depth / 2), new THREE.Vector3(x + width / 2, y + 1.65, z + depth / 2)));
    const shape = new THREE.Shape(); shape.moveTo(-depth / 2, .4); shape.quadraticCurveTo(-depth * .3, .0, 0, 1.5); shape.quadraticCurveTo(depth * .3, .0, depth / 2, .4); shape.lineTo(depth / 2, .18); shape.quadraticCurveTo(depth * .3, -.25, 0, 1.25); shape.quadraticCurveTo(-depth * .3, -.25, -depth / 2, .18); shape.closePath();
    const item = mesh(new THREE.ExtrudeGeometry(shape, { depth: width, bevelEnabled: false, curveSegments: 8 }), roofMat, [x - width / 2, y, z], parent); item.rotation.y = Math.PI / 2;
    box(parent, gold, [width + .3, .15, .19], [x, y + 1.51, z]);
    for (const s of [-1, 1]) tube(parent, gold, .06, [x - width / 2, y + .43, z + s * depth / 2], [x + width / 2, y + .43, z + s * depth / 2], 6);
    for (let i = -width / 2 + .25; i < width / 2; i += .45) {
      for (const s of [-1, 1]) {
        const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(x + i, y + 1.54, z), new THREE.Vector3(x + i, y + .04, z + s * depth * .3), new THREE.Vector3(x + i, y + .44, z + s * depth / 2));
        mesh(new THREE.TubeGeometry(curve, 10, .052, 5, false), roofMat, [0, 0, 0], parent);
      }
    }
    for (const s of [-1, 1]) for (let t = .2; t < 1; t += .2) {
      const zt = (2 * (1 - t) * t * .3 + t * t * .5) * depth * s;
      const yt = (1 - t) ** 2 * 1.5 + t * t * .4;
      box(parent, roofMat, [width, .025, .028], [x, y + yt + .027, z + zt]);
    }
  }
  function palaceBuilding(x, z, width, depth, height) {
    obstacle(x, z, width / 2 + .3, depth / 2 + .3, height + 3);
    box(palaceIntact, stone, [width + 2.8, .9, depth + 2.8], [x, .35, z]);
    for (let y = .12; y < .8; y += .25) for (let s = -width / 2; s < width / 2; s += 1.4) box(palaceIntact, black, [1.28, .012, .015], [x + s, y, z + depth / 2 + 1.41]);
    box(palaceIntact, plaster, [width, height, depth], [x, .7 + height / 2, z]);
    for (let i = -width / 2 + .65; i < width / 2; i += 1.45) {
      box(palaceIntact, palaceWood, [.22, height, .3], [x + i, .7 + height / 2, z + depth / 2 + .18]);
      box(palaceIntact, paper, [1.04, height * .55, .04], [x + i + .65, .9 + height * .45, z + depth / 2 + .03]);
      for (let j = 0; j < 4; j++) box(palaceIntact, palaceWood, [.036, height * .55, .05], [x + i + .25 + j * .23, .9 + height * .45, z + depth / 2 + .07]);
      for (let j = 0; j < 3; j++) box(palaceIntact, palaceWood, [1.08, .035, .06], [x + i + .65, 1.2 + j * .5, z + depth / 2 + .075]);
    }
    tiledRoof(palaceIntact, x, height + .55, z, width + 2, depth + 2.5);
    box(palaceIntact, plaster, [width * .62, 1.8, depth * .65], [x, height + 2.3, z]);
    tiledRoof(palaceIntact, x, height + 3.05, z, width * .72, depth * .84);
    for (const s of [-1, 1]) {
      box(palaceIntact, palaceWood, [width + .8, .22, .24], [x, height + .3, z + s * (depth / 2 + .3)]);
      box(palaceIntact, palaceWood, [width + 1.4, .20, .8], [x, .82, z + s * (depth / 2 + .5)]);
      for (let q = -depth / 2 + .55; q < depth / 2; q += 1.3) {
        box(palaceIntact, palaceWood, [.14, height - .25, .11], [x + s * (width / 2 + .035), .85 + height / 2, z + q]);
        box(palaceIntact, palaceWood, [.4, .11, .18], [x + s * (width / 2 + .18), height + .24, z + q]);
      }
      box(palaceIntact, palaceWood, [.15, .16, depth + .4], [x + s * (width / 2 + .025), .83, z]);
      const gable = new THREE.Shape(); gable.moveTo(-depth * .30, 0); gable.lineTo(0, 1.05); gable.lineTo(depth * .30, 0); gable.closePath();
      const end = mesh(new THREE.ExtrudeGeometry(gable, { depth: .1, bevelEnabled: false }), plaster, [x + s * width / 2, height + .8, z], palaceIntact); end.rotation.y = Math.PI / 2;
    }
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
    const lighthouse = new THREE.Group(); lighthouse.position.set(-43, 0, -43); root.add(lighthouse); obstacle(-43, -43, 1.8, 1.8, 9);
    cylinder(lighthouse, stone, 2.1, .55, [0, .27, 0], 2, 24);
    for (let i = 0; i < 6; i++) cylinder(lighthouse, i % 2 ? plaster : vermilion, 1.35 - i * .07, 1.1, [0, 1 + i * 1.1, 0], 1.28 - i * .07, 24);
    cylinder(lighthouse, roofMat, 1.65, .18, [0, 7.25, 0], 1.65, 24); cylinder(lighthouse, gold, .85, .85, [0, 7.75, 0], .85, 16);
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; cylinder(lighthouse, black, .055, 1.2, [Math.sin(a), 7.85, Math.cos(a)], .055, 5); }
    mesh(new THREE.ConeGeometry(1.65, 1.0, 24), roofMat, [0, 8.65, 0], lighthouse);
    const hull = material('#727f79', { ...surfaceMaps('paint'), metalness: .35, roughness: .67, bumpScale: .008 });
    for (const z of [-29, 3, 32]) {
      const landing = new THREE.Group(); landing.position.set(-45, 0, z); landing.rotation.y = Math.PI / 2; root.add(landing);
      box(landing, hull, [3, .45, 6], [0, .25, 0]); for (const s of [-1, 1]) box(landing, hull, [.15, 1.3, 6], [s * 1.42, .8, 0]);
      box(landing, hull, [3, 1.2, .2], [0, .8, -2.9]); const ramp = box(landing, hull, [2.8, .13, 2.7], [0, .18, 4.1]); ramp.rotation.x = .13;
      for (const s of [-1, 1]) {
        box(landing, roofMat, [.17, .09, 6], [s * 1.42, 1.49, 0]);
        for (let q = -2.4; q < 3; q += .8) box(landing, hull, [.09, 1.15, .07], [s * 1.31, .81, q]);
        tube(landing, black, .018, [s * 1.33, 1.42, 2.75], [s * 1.33, .20, 4.9]);
      }
      for (let q = -2.4; q < 2.7; q += .55) box(landing, roofMat, [2.7, .027, .075], [0, .494, q]);
      for (let q = 3.0; q < 5.3; q += .3) box(landing, roofMat, [2.6, .026, .045], [0, .23 - (q - 4.1) * .13, q]);
      obstacle(-45, z, 3.2, 1.5, 1.5);
    }
    for (let i = 0; i < 18; i++) { const x = -38 + (i % 3) * 10, z = -43 + Math.floor(i / 3) * 16; rock(x - 4, z - 4, .65, .5); for (const a of [-.8, .8]) { const beam = box(root, roofMat, [.20, 2.0, .20], [x, .6, z]); beam.rotation.z = a; } obstacle(x, z, .8, .4, 1.2); }
    for (let i = 0; i < 12; i++) palm(22 + (i % 3) * 15, -42 + Math.floor(i / 3) * 27, .7 + random() * .2);
  }
  if (type === 'jungle') {
    water(-65, 0, 14, 130); water(65, 0, 14, 130);
    for (const z of [-40, -10, 20, 42]) for (const x of [-48, -23, 14, 48]) {
      palm(x, z, .85 + random() * .24); palm(x + 3.2, z + 3, .65 + random() * .22);
      for (let i = 0; i < 4; i++) fern(x + (random() - .5) * 9, z + (random() - .5) * 7, .7 + random() * .7);
      rock(x - 3, z - 1.8, 1.0 + random(), .7);
    }
    for (const x of [-68, 68]) for (let z = -50; z <= 50; z += 10) palm(x, z, 1.3);
  }
  if (type === 'mountain' || type === 'fuji') {
    for (const x of [-72, 72]) for (let z = -55; z < 60; z += 22) rock(x, z, 14 + random() * 5, (type === 'fuji' ? 7 : 12) + random() * 10, false);
    for (let i = 0; i < 12; i++) rock(-49 + (i % 4) * 31, -40 + Math.floor(i / 4) * 36, 2 + random() * 1.3, 1.5 + random() * 2);
    if (type === 'mountain') for (let i = 0; i < 6; i++) { const x = -46 + i * 18; rock(x, -66, 14, 16 + random() * 9, false); }
    if (type === 'mountain') {
      const needles = material('#4c7463', { map: assets.maps.grass, roughness: .94 });
      for (const x of [-58, 58]) for (let z = -43; z < 45; z += 12) {
        cylinder(root, bark, .22, 5.5, [x, 2.7, z], .13, 8); obstacle(x, z, .32, .32, 6);
        for (let layer = 0; layer < 3; layer++) mesh(new THREE.ConeGeometry(1.85 - layer * .42, 2.7, 12), needles, [x, 3.0 + layer * 1.2, z], root);
      }
    }
  }
  if (type === 'city') {
    const tower = new THREE.Group(); tower.position.set(-18, 0, 15); root.add(tower); obstacle(-18, 15, 1.9, 1.9, 10);
    box(tower, stone, [4.4, .6, 4.4], [0, .3, 0]); box(tower, plaster, [3.5, 8.8, 3.5], [0, 4.4, 0]);
    for (const y of [1, 3.7, 6.4, 8.7]) box(tower, stone, [3.8, .18, 3.8], [0, y, 0]);
    const clock = document.createElement('canvas'); clock.width = clock.height = 256; const ctx = clock.getContext('2d');
    ctx.fillStyle = '#e8e5d3'; ctx.beginPath(); ctx.arc(128, 128, 126, 0, Math.PI * 2); ctx.fill(); ctx.strokeStyle = '#33443e'; ctx.lineWidth = 5;
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; ctx.beginPath(); ctx.moveTo(128 + Math.sin(a) * 97, 128 + Math.cos(a) * 97); ctx.lineTo(128 + Math.sin(a) * 113, 128 + Math.cos(a) * 113); ctx.stroke(); }
    ctx.lineWidth = 8; ctx.beginPath(); ctx.moveTo(78, 97); ctx.lineTo(128, 128); ctx.lineTo(178, 55); ctx.stroke();
    const clockMap = new THREE.CanvasTexture(clock); clockMap.colorSpace = THREE.SRGBColorSpace; ownedMaps.add(clockMap);
    const clockMat = material('#ffffff', { map: clockMap, roughness: .8 });
    for (let i = 0; i < 4; i++) { const a = i * Math.PI / 2; const dial = mesh(new THREE.CircleGeometry(.98, 32), clockMat, [Math.sin(a) * 1.76, 7.35, Math.cos(a) * 1.76], tower); dial.rotation.y = a; }
    mesh(new THREE.ConeGeometry(3.1, 2.0, 4), roofMat, [0, 9.7, 0], tower).rotation.y = Math.PI / 4;
    const tram = new THREE.Group(); tram.position.set(20, 0, 16); root.add(tram); obstacle(20, 16, 4.1, 1.5, 3.2);
    box(tram, black, [8, .35, 2.7], [0, .45, 0]); box(tram, material('#587465', { ...surfaceMaps('paint'), metalness: .25, roughness: .68, bumpScale: .008 }), [8, 2.3, 2.7], [0, 1.7, 0]);
    box(tram, plaster, [8.05, .24, 2.75], [0, 1.55, 0]); box(tram, roofMat, [8.35, .22, 3.05], [0, 2.95, 0]);
    for (const s of [-1, 1]) for (let i = 0; i < 6; i++) {
      const x = -3.25 + i * 1.3;
      box(tram, glass, [.94, .9, .025], [x, 2.21, s * 1.365]);
      box(tram, roofMat, [1.0, .045, .045], [x, 1.74, s * 1.377]);
      for (const side of [-1, 1]) box(tram, plaster, [.035, .95, .055], [x + side * .48, 2.21, s * 1.375]);
      box(tram, plaster, [.027, .9, .045], [x, 2.21, s * 1.383]);
    }
    for (const s of [-1, 1]) {
      box(tram, glass, [.027, .92, 2.05], [s * 4.016, 2.18, 0]);
      box(tram, black, [.23, .12, 2.15], [s * 4.09, .65, 0]);
      for (const z of [-.9, .9]) cylinder(tram, gold, .12, .035, [s * 4.035, 1.24, z], .12, 12).rotation.z = Math.PI / 2;
    }
    for (const s of [-1, 1]) for (const x of [-2.5, 2.5]) { const wheel = cylinder(tram, black, .42, .17, [x, .42, s * 1.24], .42, 12); wheel.rotation.x = Math.PI / 2; }
    for (const z of [15.2, 16.8]) box(root, roofMat, [32, .065, .075], [20, .012, z]);
  }
  if (type === 'fuji') {
    const positions = [], colors = [], uvs = [], indices = [], rings = 32, slices = 96;
    for (let j = 0; j <= rings; j++) for (let i = 0; i <= slices; i++) {
      const t = j / rings, a = i / slices * Math.PI * 2;
      const ridge = Math.sin(a * 15 + t * 2) * .026 + Math.sin(a * 27 - t * 4) * .017;
      const r = 1.3 + 18 * (1 - t) ** 1.5 * (1 + ridge), y = -.5 + t * 15 + Math.sin(a * 7) * t * .15;
      positions.push(Math.sin(a) * r, y, Math.cos(a) * r); uvs.push(i / slices * 7, t * 4);
      const snowline = .70 + Math.sin(a * 11) * .055 + Math.sin(a * 5) * .04, snow = THREE.MathUtils.smoothstep(t, snowline - .035, snowline + .045);
      const shade = .91 + ridge * 1.5;
      const c = new THREE.Color(t < .23 ? '#727b69' : '#717570').lerp(new THREE.Color('#e4e7e2'), snow).multiplyScalar(shade); colors.push(c.r, c.g, c.b);
      if (j < rings && i < slices) { const n = j * (slices + 1) + i; indices.push(n, n + 1, n + slices + 1, n + 1, n + slices + 2, n + slices + 1); }
    }
    const mountainGeometry = new THREE.BufferGeometry(); mountainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); mountainGeometry.setAttribute('normal', new THREE.Float32BufferAttribute(new Float32Array(positions.length), 3)); mountainGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); mountainGeometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); mountainGeometry.setIndex(indices); mountainGeometry.computeVertexNormals();
    const slopeMat = material('#ffffff', { map: assets.maps.stone, normalMap: assets.maps.stoneNormal, normalScale: new THREE.Vector2(.55, .55), vertexColors: true, roughness: .94 });
    slopeMat.onBeforeCompile = shader => {
      // Keep snow bright while retaining exposed rock detail below the snowline.
      shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', '#include <map_fragment>\n diffuseColor.rgb = mix(diffuseColor.rgb, vColor.rgb, smoothstep(.35, .68, vColor.r));');
    };
    mesh(mountainGeometry, slopeMat, [14, 0, -30], root).castShadow = false;
    obstacle(14, -32, 17, 16, 15);
    volcanoGlow = material('#693224', { emissive: '#e86324', emissiveIntensity: .08, roughness: .9 });
    const crater = mesh(new THREE.CircleGeometry(1.32, 48), volcanoGlow, [14, 14.3, -30], root); crater.rotation.x = -Math.PI / 2;
    const rim = mesh(new THREE.TorusGeometry(1.3, .16, 8, 48), material('#c5cfcb', { roughness: .95 }), [14, 14.6, -30], root); rim.rotation.x = Math.PI / 2;
    for (let i = 0; i < 5; i++) {
      const a = i * .35 + .2, path = new THREE.CatmullRomCurve3(Array.from({ length: 24 }, (_, j) => {
        const t = j / 23, up = 1 - t, angle = a + Math.sin(t * 9) * .06;
        const ridge = Math.sin(angle * 15 + up * 2) * .026 + Math.sin(angle * 27 - up * 4) * .017;
        const r = 1.3 + 18 * t ** 1.5 * (1 + ridge);
        return new THREE.Vector3(14 + Math.sin(angle) * r, -.5 + 15 * up + Math.sin(angle * 7) * up * .15 + .055, -30 + Math.cos(angle) * r);
      }));
      mesh(new THREE.TubeGeometry(path, 48, .055 + i * .01, 5, false), volcanoGlow, [0, 0, 0], root);
    }
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
    const paving = assets.mats.concrete.map.clone(), pavingNormal = assets.mats.concrete.normalMap.clone();
    for (const map of [paving, pavingNormal]) { map.repeat.set(23, 27); ownedMaps.add(map); }
    const plaza = material('#cbd0c9', { map: paving, normalMap: pavingNormal, normalScale: new THREE.Vector2(.3, .3), roughness: .88 });
    box(root, plaza, [70, .12, 83], [0, -.10, 1]);
    for (let z = -35; z < 42; z += 3) box(root, stone, [69, .012, .035], [0, -.026, z]);
    for (let x = -33; x <= 33; x += 3) box(root, stone, [.035, .012, 78], [x, -.025, 3]);
    palaceBuilding(0, -24, 25, 13, 5.3); palaceBuilding(-26, -20, 10, 11, 3.6); palaceBuilding(26, -20, 10, 11, 3.6);
    for (const x of [-18, 18]) {
      box(palaceIntact, palaceWood, [8, .4, 3.6], [x, .9, -17]);
      tiledRoof(palaceIntact, x, 3.7, -17, 10, 5);
      for (const dx of [-3, 0, 3]) { cylinder(palaceIntact, palaceWood, .13, 3.4, [x + dx, 2, -15.4], .13, 8); obstacle(x + dx, -15.4, .2, .2, 3.6); }
    }
    for (const x of [-34, 34]) { box(palaceIntact, plaster, [.65, 2.8, 65], [x, 1.4, 2]); obstacle(x, 2, .55, 32.5, 2.8); box(palaceRuins, stone, [1.4, .6, 65], [x, .3, 2]); }
    for (const z of [-6, 9, 24, 37]) for (const x of [-8, 8]) lantern(x, z);
    for (const x of [-12, -7, 7, 12]) { box(palaceIntact, palaceWood, [.48, 5.0, .48], [x, 2.5, -5]); obstacle(x, -5, .42, .42, 5.0); }
    box(palaceIntact, palaceWood, [26, .6, .6], [0, 4.5, -5]); tiledRoof(palaceIntact, 0, 5, -5, 29, 6.8);
    const crest = cylinder(palaceIntact, gold, .51, .11, [0, 4.5, -4.61], .51, 16); crest.rotation.x = Math.PI / 2;
    const pineLeaves = [];
    for (const x of [-23, 23]) for (const z of [8, 27]) {
      rock(x, z, 1.4, 1.2);
      tube(root, bark, .22, [x + 2, 0, z], [x + 3.1, 4.6, z], 8); obstacle(x + 2, z, .55, .55, 5);
      for (let i = 0; i < 4; i++) {
        const dx = Math.sin(i * 2.7) * 1.4, h = 3.2 + i * .5; tube(root, bark, .09, [x + 2.5, 2.7, z], [x + 3 + dx, h, z + Math.cos(i) * 1.1], 6);
        for (let k = 0; k < 15; k++) pineLeaves.push({ x: x + 3 + dx + (random() - .5) * 2.8, y: h + .3 + random() * .4, z: z + Math.cos(i) * 1.1 + (random() - .5) * 2.3, rx: -1.25 + random() * .4, ry: random() * 6.28, rz: 0, scale: .9 + random() * .6 });
      }
      for (let i = 0; i < 5; i++) { const line = mesh(new THREE.TorusGeometry(2 + i * .42, .022, 3, 36), stone, [x, -.015, z], root); line.rotation.x = Math.PI / 2; }
    }
    foliageBatch(pineLeaves, assets.mats.foliage);
    for (const group of [palaceIntact, palaceRuins]) group.traverse(object => { if (object.isMesh) object.userData.batchRoot = group; });
  }
  foliageBatch(foliage, assets.mats.foliage);
  return {
    palaceCenter: type === 'palace' ? palaceCenter : null,
    volcanoVent,
    panoramaFocus: new THREE.Vector3(type === 'fuji' ? 10 : 0, type === 'fuji' ? 3 : 1, type === 'fuji' ? -13 : type === 'palace' ? -12 : 0),
    occludesCamera(ray, distance) {
      if (!palaceIntact?.visible || collapse >= 0) return false;
      return roofOccluders.some(bounds => ray.intersectBox(bounds, roofHit) && ray.origin.distanceToSquared(roofHit) < distance * distance);
    },
    setDisaster(kind, strength) { if (volcanoGlow) volcanoGlow.emissiveIntensity = .08 + strength * 2; },
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
