import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { surfaceMaps } from './surfaces.js';
import { batchModel } from './model-batching.js';

export function createBossModel(type = 'emperor') {
  const emperor = type === 'emperor';
  const group = new THREE.Group(), torso = new THREE.Group(), head = new THREE.Group(), sleeves = [], legs = [];
  group.add(torso); torso.add(head); head.position.set(0, 1.94, .02);
  const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .77, ...extra });
  const fabric = document.createElement('canvas'); fabric.width = fabric.height = 256;
  const ctx = fabric.getContext('2d'); ctx.fillStyle = emperor ? '#eeeade' : '#684847'; ctx.fillRect(0, 0, 256, 256); ctx.strokeStyle = emperor ? '#cdc4ac' : '#99765b'; ctx.lineWidth = 1;
  for (let y = 0; y <= 256; y += 32) for (let x = 0; x <= 256; x += 32) {
    const cx = x + (y % 64 ? 16 : 0);
    for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; ctx.beginPath(); ctx.ellipse(cx + Math.cos(a) * 5, y + Math.sin(a) * 5, 5, 2, a, 0, Math.PI * 2); ctx.stroke(); }
    ctx.beginPath(); ctx.arc(cx, y, 2.2, 0, Math.PI * 2); ctx.stroke();
  }
  const brocade = new THREE.CanvasTexture(fabric); brocade.colorSpace = THREE.SRGBColorSpace; brocade.wrapS = brocade.wrapT = THREE.RepeatWrapping; brocade.repeat.set(2, 2);
  const robe = mat(emperor ? '#eee9df' : '#bd9b92', { ...surfaceMaps('cloth'), map: brocade, bumpScale: .015 });
  const fold = mat(emperor ? '#c8c5b7' : '#353f42', { ...surfaceMaps('cloth'), bumpScale: .015 }), lining = mat('#b92d35', { ...surfaceMaps('cloth'), bumpScale: .016 });
  const skin = mat('#ead6b5'), black = mat('#202522'), gold = mat('#b19852', { metalness: .72, roughness: .35 }), steel = mat('#cfd9d5', { metalness: .9, roughness: .24 });
  function add(parent, geometry, material, position = [0, 0, 0]) { const mesh = new THREE.Mesh(geometry, material); mesh.position.set(...position); mesh.castShadow = mesh.receiveShadow = true; mesh.userData.ownedMaterial = true; parent.add(mesh); return mesh; }
  function oval(parent, material, scale, position) { const mesh = add(parent, new THREE.SphereGeometry(1, 28, 18), material, position); mesh.scale.set(...scale); return mesh; }
  function box(parent, material, size, position, radius = .035) { return add(parent, Math.min(...size) < .035 ? new THREE.BoxGeometry(...size) : new RoundedBoxGeometry(...size, 1, radius), material, position); }
  function cord(parent, material, points, radius = .014) { return add(parent, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p))), 20, radius, 6, false), material); }
  oval(torso, robe, [.62, .77, .38], [0, 1.13, 0]);
  for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(s * .25, .77, 0); group.add(leg); legs.push(leg);
    box(leg, lining, [.51, .65, .47], [0, -.30, 0], .09); box(leg, black, [.34, .16, .53], [0, -.69, .09], .05);
    for (let i = 0; i < 3; i++) box(leg, fold, [.013, .46, .015], [-.14 + i * .14, -.31, .24], .004);
    const skirt = oval(torso, robe, [.45, .51, .33], [s * .39, .64, .06]); skirt.rotation.z = s * .16;
    const lapel = box(torso, fold, [.105, .83, .06], [s * .17, 1.36, .354]); lapel.rotation.z = s * .39;
    const trim = box(torso, robe, [.07, .84, .075], [s * .19, 1.37, .39]); trim.rotation.z = s * .39;
    const sleeve = new THREE.Group(); sleeve.position.set(s * .55, 1.57, 0); torso.add(sleeve); sleeves.push(sleeve);
    oval(sleeve, robe, [.47, .30, .37], [s * .28, -.02, .04]);
    box(sleeve, robe, [.65, .76, .65], [s * .47, -.33, .02], .12);
    box(sleeve, lining, [.045, .39, .43], [s * .80, -.13, .09], .025);
    oval(sleeve, skin, [.13, .13, .14], [s * .79, -.10, .12]);
    for (let i = 0; i < 3; i++) cord(sleeve, fold, [[s * .16, -.13 - i * .1, .37], [s * .43, -.19 - i * .12, .36], [s * .69, -.10 - i * .15, .35]], .008);
  }
  box(torso, lining, [1.04, .14, .80], [0, .95, .035]);
  box(torso, gold, [.15, .14, .065], [0, .95, .456]);
  cord(torso, gold, [[-.5, .96, .40], [0, .9, .465], [.5, .96, .40]], .014);
  oval(head, skin, [.405, .47, .343], [0, 0, .03]); oval(head, black, [.41, .28, .33], [0, .25, -.045]);
  oval(head, skin, [.38, .43, .21], [0, -.01, .22]);
  for (const s of [-1, 1]) {
    oval(head, skin, [.065, .1, .05], [s * .395, -.02, .04]);
    cord(head, black, [[s * .06, .08, .421], [s * .16, .095, .418], [s * .26, .065, .38]], .012);
    cord(head, black, [[s * .065, .205, .38], [s * .15, .224, .395], [s * .255, .19, .36]], .014);
    oval(head, black, [.024, .021, .014], [s * .15, .073, .428]);
  }
  oval(head, skin, [.055, .10, .055], [0, -.05, .428]);
  cord(head, lining, [[-.085, -.228, .386], [0, -.236, .404], [.085, -.228, .386]], .009);
  let tail;
  if (emperor) {
    oval(head, black, [.40, .095, .34], [0, .46, -.03]);
    const crown = oval(head, black, [.135, .32, .15], [0, .73, -.105]); crown.rotation.z = -.13;
    oval(head, black, [.22, .055, .12], [-.2, .5, .08]);
    const ribbon = new THREE.Shape(); ribbon.moveTo(0, .56); ribbon.bezierCurveTo(.18, .93, .95, 1.29, 1.55, 1.21); ribbon.lineTo(1.62, 1.07); ribbon.bezierCurveTo(.95, 1.18, .38, .94, .035, .49); ribbon.closePath();
    tail = add(head, new THREE.ExtrudeGeometry(ribbon, { depth: .035, bevelEnabled: true, bevelSize: .009, bevelThickness: .007, bevelSegments: 1 }), black, [-.018, 0, -.08]); tail.rotation.y = .18;
    tail.userData.animated = true;
  } else {
    const armor = mat('#3b494c', { ...surfaceMaps('metal'), metalness: .7 });
    oval(head, armor, [.48, .30, .43], [0, .35, -.02]);
    box(head, gold, [.99, .065, .15], [0, .36, .34]);
    for (const s of [-1, 1]) {
      cord(head, gold, [[s * .12, .51, .26], [s * .46, .70, .2], [s * .54, 1.01, .06]], .047);
      for (let i = 0; i < 3; i++) box(head, armor, [.23, .14, .57], [s * .43, .18 - i * .14, -.07]);
      for (let i = 0; i < 3; i++) box(sleeves[s === -1 ? 0 : 1], armor, [.64, .16, .72], [s * .29, .13 - i * .17, .03]);
    }
    for (let i = 0; i < 4; i++) {
      box(torso, armor, [1.05, .15, .10], [0, 1.56 - i * .17, .37]);
      for (const s of [-1, 1]) box(torso, gold, [.035, .15, .025], [s * .3, 1.56 - i * .17, .436]);
    }
  }
  const sword = new THREE.Group(); sleeves[1].add(sword); sword.position.set(.81, -.09, .17);
  const grip = add(sword, new THREE.CylinderGeometry(.048, .048, .33, 12), black, [0, 0, .14]); grip.rotation.x = Math.PI / 2;
  for (let i = 0; i < 5; i++) box(sword, gold, [.09, .016, .014], [0, .045, .025 + i * .054], .003);
  const guard = add(sword, new THREE.CylinderGeometry(.14, .14, .035, 16), gold, [0, 0, .325]); guard.rotation.x = Math.PI / 2;
  const blade = new THREE.Shape(); blade.moveTo(-.043, 0); blade.lineTo(-.015, 1.37); blade.quadraticCurveTo(.025, 1.58, .12, 1.69); blade.lineTo(.062, .05); blade.closePath();
  const edge = add(sword, new THREE.ExtrudeGeometry(blade, { depth: .022, bevelEnabled: true, bevelSize: .006, bevelThickness: .005, bevelSegments: 1 }), steel, [0, 0, .34]); edge.rotation.x = Math.PI / 2;
  let bow;
  if (emperor) {
    bow = new THREE.Group(); bow.position.set(-.82, -.08, .22); sleeves[0].add(bow);
    cord(bow, gold, [[0, -1.1, .2], [0, -.7, -.22], [0, .1, -.34], [0, .8, -.18], [0, 1.3, .2]], .035);
    cord(bow, fold, [[0, -1.1, .2], [0, .1, .28], [0, 1.3, .2]], .009);
    box(bow, black, [.09, .26, .10], [0, .08, -.30]);
  }
  const scale = emperor ? 1.4 : 1.3; group.scale.setScalar(scale);
  batchModel(group);
  function animate(time, moving, swing = 0, pose = '') {
    const gait = Math.sin(time * 8), slash = Math.sin(swing * Math.PI);
    legs[0].rotation.x = gait * .42 * moving; legs[1].rotation.x = -gait * .42 * moving;
    torso.position.y = Math.abs(gait) * .036 * moving; torso.rotation.x = pose === 'stagger' ? -.18 : moving * .055;
    torso.rotation.y = slash * .35; head.rotation.y = -.1 - torso.rotation.y * .5;
    sleeves[0].rotation.set(Math.sin(time * 3) * .035, 0, .13 + gait * .05 * moving);
    sleeves[1].rotation.set(pose === 'windup' ? -1.1 : -.12 - slash * .65, -.25 + slash * 1.6, -.16);
    if (tail) tail.rotation.z = Math.sin(time * 3.5) * .03 + moving * .045;
    if (bow) {
      bow.visible = pose === 'bow'; sword.visible = !bow.visible;
      if (bow.visible) { sleeves[0].rotation.set(-.65, -.75, -.25); sleeves[1].rotation.set(-.72, .85, .20); torso.rotation.y = -.45; }
    }
  }
  animate(0, 0); return { group, animate, scale, radius: .72, hitRadius: 1.03, barHeight: 4.85 };
}
