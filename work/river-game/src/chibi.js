import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { surfaceMaps } from './surfaces.js';
import { createBossModel } from './boss-model.js';
import { batchModel, shareGeometry } from './model-batching.js';

export const ENEMY_NAMES = Object.freeze({ raider: '倭寇', heavy: '武士', boss: '鬼子头目', emperor: '鬼子天皇' });
export const isBossType = type => type === 'boss' || type === 'emperor';

export const HEROES = [
  { id: 'captain', name: '蓝盾队长', title: '先锋', detail: '生命 120 · 守护护盾', health: 120, speed: 4.2, skill: '守护护盾', color: '#19b6e0' },
  { id: 'armor', name: '赤焰战甲', title: '火力', detail: '生命 100 · 超载火力', health: 100, speed: 4.1, skill: '超载火力', color: '#e74748' },
  { id: 'ranger', name: '星际游侠', title: '机动', detail: '生命 90 · 时间减速', health: 90, speed: 4.9, skill: '时间减速', color: '#8de094' },
  { id: 'panda', name: '熊猫卫士', title: '守卫', detail: '生命 140 · 震荡冲击', health: 140, speed: 3.9, skill: '震荡冲击', color: '#f2df9c' }
];
export const WEAPONS = [
  { id: 'pistol', name: '制式手枪', detail: '精准 · 单发', damage: 22, interval: .28, range: 24, pellets: 1, spread: 0, color: '#ffe3a0' },
  { id: 'rifle', name: '突击步枪', detail: '全自动 · 连射', damage: 19, interval: .14, range: 25, pellets: 1, spread: .015, color: '#93eadc', ammoPickup: 72, maxAmmo: 216 },
  { id: 'scatter', name: '双管霰弹枪', detail: '近战 · 五发散射', damage: 18, interval: .67, range: 11, pellets: 5, spread: .30, color: '#ffaa7d', ammoPickup: 14, maxAmmo: 42 },
  { id: 'rail', name: '重型狙击枪', detail: '重击 · 穿透', damage: 84, interval: .87, range: 31, pellets: 1, spread: 0, pierce: 3, color: '#a8d6ff', ammoPickup: 10, maxAmmo: 30 }
];
const materialCache = new Map();
function material(color, metalness = .25, roughness = .32) {
  const key = `${color}-${metalness}-${roughness}`;
  if (!materialCache.has(key)) materialCache.set(key, new THREE.MeshPhysicalMaterial({ color, metalness, roughness, clearcoat: metalness >= .25 ? .65 : .12, clearcoatRoughness: .2 }));
  return materialCache.get(key);
}
function fabric(color) {
  const key = `fabric-${color}`;
  if (!materialCache.has(key)) materialCache.set(key, new THREE.MeshStandardMaterial({ color, ...surfaceMaps('cloth'), roughness: .88, bumpScale: .008 }));
  return materialCache.get(key);
}
const white = material('#faf6eb', .1), black = material('#121b25', .12), skin = material('#f6c3a4', 0, .52);
const steel = material('#80969e', .8), red = material('#bc3049', .45), gold = material('#dbad48', .65);
const eyeMat = material('#081225', .2, .12);
const blue = material('#087aaf', .35), darkBlue = fabric('#15518a');
function add(parent, geometry, mat, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(geometry, mat); mesh.position.set(x, y, z); mesh.castShadow = mesh.receiveShadow = true; parent.add(mesh); return mesh;
}
function oval(parent, mat, scale, position, segments = 28) {
  const mesh = add(parent, new THREE.SphereGeometry(1, mat.isMeshPhysicalMaterial ? segments : Math.min(20, segments), mat.isMeshPhysicalMaterial ? 18 : 12), mat, ...position); mesh.scale.set(...scale); return mesh;
}
function rounded(parent, mat, size, position, radius = .06) {
  return add(parent, Math.min(...size) < .035 ? new THREE.BoxGeometry(...size) : new RoundedBoxGeometry(...size, 1, radius), mat, ...position);
}
function rod(parent, mat, radius, length, position) {
  const mesh = add(parent, new THREE.CylinderGeometry(radius, radius, length, 14), mat, ...position); mesh.rotation.x = Math.PI / 2; return mesh;
}
function star(parent, mat, radius, x, y, z) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) { const a = Math.PI / 2 + i * Math.PI / 5, r = i % 2 ? radius * .44 : radius; const px = Math.cos(a) * r, py = Math.sin(a) * r; i ? shape.lineTo(px, py) : shape.moveTo(px, py); }
  shape.closePath(); return add(parent, new THREE.ExtrudeGeometry(shape, { depth: .015, bevelEnabled: false }), mat, x, y, z);
}
function textBadge(text, parent, x, y, z, width, height) {
  const canvas = document.createElement('canvas'); canvas.width = canvas.height = 128;
  const ctx = canvas.getContext('2d'); ctx.fillStyle = '#fff7ef'; ctx.font = '900 105px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(text, 64, 70);
  const map = new THREE.CanvasTexture(canvas); map.colorSpace = THREE.SRGBColorSpace;
  const mat = new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false });
  const mesh = add(parent, new THREE.PlaneGeometry(width, height), mat, x, y, z); mesh.userData.ownedMaterial = true; return mesh;
}
function eyes(head, mask, type) {
  for (const s of [-1, 1]) {
    const x = s * .29;
    if (mask) oval(head, mask, [.285, .292, .078], [x, .05, .552]);
    oval(head, white, [.235, .249, .09], [x, .045, .613]);
    oval(head, eyeMat, [.146, .171, .053], [x - s * .025, .044, .69]);
    oval(head, white, [.044, .041, .016], [x - .036, .116, .739], 12);
    const brow = rounded(head, type === 'armor' ? gold : mask || black, [.40, .052, .07], [x, .239, .671], .019); brow.rotation.z = -s * .24;
  }
}
export function createHero(id) {
  const group = new THREE.Group(), body = new THREE.Group(), head = new THREE.Group(), arms = new THREE.Group(), legs = [];
  group.add(body); body.add(head, arms); head.position.y = 1.56;
  const isCaptain = id === 'captain', isArmor = id === 'armor', isPanda = id === 'panda';
  const suit = isCaptain ? darkBlue : isArmor ? red : isPanda ? fabric('#222a2a') : fabric('#4c8470');
  const shell = isCaptain ? blue : isArmor ? red : isPanda ? white : material('#cad9c6', .3);
  const boots = isCaptain || isArmor ? red : black;
  oval(body, suit, [.34, .42, .25], [0, .69, 0]);
  rounded(body, isPanda ? white : shell, [.56, .42, .20], [0, .82, .2], .1);
  rounded(body, black, [.61, .12, .46], [0, .44, 0], .04);
  rounded(body, gold, [.13, .13, .04], [0, .44, .255], .02);
  for (const s of [-1, 1]) {
    rounded(body, fabric('#46524c'), [.14, .20, .11], [s * .25, .46, .25], .025);
    rounded(body, steel, [.06, .035, .02], [s * .25, .49, .313], .006);
    rounded(body, suit, [.045, .31, .025], [s * .205, .82, .31], .012);
  }
  for (const s of [-1, 1]) {
    const leg = new THREE.Group(); leg.position.set(s * .19, .43, 0); group.add(leg); legs.push(leg);
    oval(leg, suit, [.14, .22, .145], [0, -.13, 0]);
    rounded(leg, boots, [.29, .24, .36], [0, -.32, .07], .085);
    oval(arms, suit, [.15, .21, .145], [s * .36, .91, .10]);
    const elbow = rounded(arms, suit, [.23, .21, .31], [s * .37, .78, .27], .09); elbow.rotation.x = -.3;
    oval(arms, boots, [.135, .135, .14], [s * .32, .78, .44]);
  }
  oval(head, shell, [.69, .68, .625], [0, 0, 0], 40);
  if (isCaptain) {
    oval(head, skin, [.51, .265, .36], [0, -.36, .31]);
    eyes(head, blue, id); textBadge('A', head, 0, .43, .555, .30, .34);
    for (const s of [-1, 1]) { oval(head, steel, [.072, .19, .20], [s * .635, -.04, -.02]); const fin = rounded(head, white, [.045, .27, .10], [s * .66, .2, -.02], .015); fin.rotation.z = -s * .4; }
    star(body, white, .17, 0, .85, .317);
    for (const x of [-.16, 0, .16]) rounded(body, white, [.075, .2, .03], [x, .60, .251], .01);
    const shield = new THREE.Group(); shield.position.set(-.12, .83, -.36); shield.rotation.y = Math.PI; body.add(shield);
    for (const [r, mat, z] of [[.48, red, 0], [.39, steel, .025], [.31, red, .05], [.23, blue, .08]]) { const disc = add(shield, new THREE.CylinderGeometry(r, r, .045, 40), mat, 0, 0, z); disc.rotation.x = Math.PI / 2; }
    star(shield, white, .19, 0, 0, .12);
  } else if (isArmor) {
    oval(head, gold, [.574, .55, .15], [0, -.035, .49]);
    eyes(head, gold, id);
    rounded(head, red, [.2, .27, .08], [0, .40, .567], .025);
    rounded(head, black, [.26, .035, .035], [0, -.40, .625], .01);
    oval(body, white, [.11, .11, .04], [0, .84, .32]);
  } else if (isPanda) {
    for (const s of [-1, 1]) oval(head, black, [.205, .21, .15], [s * .46, .52, -.03]);
    eyes(head, black, id); oval(head, black, [.11, .07, .06], [0, -.24, .624]);
    oval(head, white, [.23, .12, .09], [0, -.36, .559]);
  } else {
    oval(head, material('#abd2ac', 0, .38), [.55, .49, .16], [0, -.03, .52]);
    eyes(head, material('#447569', .2), id);
    for (const s of [-1, 1]) oval(head, steel, [.08, .20, .22], [s * .625, -.01, 0]);
    rounded(head, red, [.095, .22, .06], [0, .44, .55], .023);
    rounded(body, gold, [.23, .09, .03], [0, .84, .322], .02);
  }
  if (!isArmor && !isPanda) { oval(head, skin, [.065, .055, .06], [0, -.24, .651]); rounded(head, red, [.11, .032, .023], [0, -.405, .57], .012); }
  const mount = new THREE.Group(); mount.position.set(.31, .80, .40); arms.add(mount);
  const muzzle = new THREE.Object3D(); mount.add(muzzle);
  batchModel(group);
  let weapon;
  function equip(weaponId) {
    if (weapon) disposeModel(weapon);
    weapon = createGun(weaponId); mount.add(weapon); muzzle.position.set(0, .032, weaponId === 'rail' ? 1.16 : weaponId === 'rifle' ? .96 : .78);
  }
  equip('pistol');
  function animate(time, moving, recoil = 0, cheer = 0) {
    const stride = Math.sin(time * 13) * moving;
    legs[0].rotation.x = stride * .75; legs[1].rotation.x = -stride * .75;
    body.position.y = Math.abs(stride) * .07 + Math.sin(time * 2.3) * .012 * (1 - moving);
    body.rotation.x = moving * .045 + recoil * .018;
    body.rotation.z = stride * .035; head.rotation.z = stride * -.025; head.rotation.x = -recoil * .025;
    mount.position.z = .4 - recoil * .10;
    mount.rotation.x = -recoil * .12;
    arms.rotation.z = Math.sin(time * 14) * cheer * .12;
  }
  return { group, animate, equip, muzzle, head };
}

const gunTemplates = new Map();
export function createGun(id) {
  if (gunTemplates.has(id)) return gunTemplates.get(id).clone(true);
  const group = new THREE.Group();
  const isRifle = id === 'rifle', isShotgun = id === 'scatter', isRail = id === 'rail';
  const finish = isRifle ? material('#687e62', .4) : isShotgun ? material('#8d503c', .25) : isRail ? material('#638b9a', .4) : steel;
  rounded(group, finish, [.24, .22, .59], [0, .02, .24], .06);
  rounded(group, black, [.17, .26, .2], [0, -.19, .08], .035).rotation.x = -.22;
  rounded(group, black, [.19, .10, .30], [0, .17, .19], .025);
  const length = isRail ? .66 : isRifle ? .46 : .28;
  for (const x of isShotgun ? [-.077, .077] : [0]) {
    rod(group, steel, .065, length, [x, .032, .62 + length / 2 - .13]);
    rod(group, black, .041, .014, [x, .032, .625 + length - .13]);
  }
  if (isRifle || isRail) { rounded(group, finish, [.22, .21, .27], [0, -.01, -.18], .05); rounded(group, black, [.135, .28, .15], [0, -.22, .30], .035).rotation.x = .12; }
  if (isRail) { rod(group, black, .09, .36, [0, .285, .26]); rod(group, material('#78e3f1', .1), .062, .013, [0, .285, .446]); }
  rounded(group, material(WEAPONS.find(item => item.id === id).color, .3), [.247, .035, .21], [0, .05, .40], .012);
  for (const s of [-1, 1]) {
    rounded(group, black, [.015, .10, .25], [s * .124, .015, .24], .004);
    for (let i = 0; i < 4; i++) rounded(group, steel, [.012, .025, .016], [s * .135, .052, .16 + i * .047], .003);
  }
  rounded(group, steel, [.035, .035, .07], [0, .18, .45], .006);
  const guard = add(group, new THREE.TorusGeometry(.09, .012, 4, 12, Math.PI), black, 0, -.13, .245); guard.rotation.y = Math.PI / 2;
  batchModel(group); shareGeometry(group); gunTemplates.set(id, group);
  return group.clone(true);
}

const enemyMaterials = new Map();
function enemyMaterial(color, surface = 'cloth', metalness = 0, roughness = .9) {
  const key = `${color}-${surface}-${metalness}-${roughness}`;
  if (!enemyMaterials.has(key)) enemyMaterials.set(key, new THREE.MeshStandardMaterial({ color, ...surfaceMaps(surface), metalness, roughness, bumpScale: surface === 'cloth' ? .013 : .006 }));
  return enemyMaterials.get(key);
}

const enemyTemplates = new Map(), enemyPool = new Map();
export function releaseEnemy(model) {
  model.group.removeFromParent(); model.group.rotation.set(0, 0, 0); model.group.scale.setScalar(model.scale);
  if (!enemyPool.has(model.type)) enemyPool.set(model.type, []);
  enemyPool.get(model.type).push(model);
}

export function createEnemy(type) {
  if (enemyPool.get(type)?.length) return enemyPool.get(type).pop();
  if (isBossType(type)) return { ...createBossModel(type), type };
  if (enemyTemplates.has(type)) return enemyInstance(type);
  const group = new THREE.Group(), torso = new THREE.Group(), head = new THREE.Group(), legs = [], knees = [], swordArm = new THREE.Group(), freeArm = new THREE.Group();
  group.add(torso); torso.add(head, swordArm, freeArm); head.position.set(0, 1.64, .025);
  const armored = type !== 'raider';
  const cloth = enemyMaterial(type === 'raider' ? '#7b5550' : '#613b39');
  const folds = enemyMaterial(type === 'raider' ? '#393e42' : '#2a3034');
  const armor = enemyMaterial('#414a50', 'metal', .62, .59);
  const edging = enemyMaterial('#a08b57', 'metal', .66, .45), cord = enemyMaterial('#b9a48b');
  const flesh = enemyMaterial('#c7a38b', 'cloth', 0, .86), hair = enemyMaterial('#242322', 'cloth', 0, .98);
  const bladeMat = enemyMaterial('#c4cbd0', 'metal', .92, .29), wrap = enemyMaterial('#363b34');
  const sash = enemyMaterial('#d1bf96');
  oval(torso, cloth, [.31, .42, .215], [0, 1.02, 0]);
  rounded(torso, sash, [.62, .12, .45], [0, .80, .015], .025);
  rounded(torso, wrap, [.19, .12, .09], [.03, .80, .262], .026);
  const lapel = rounded(torso, cord, [.068, .54, .032], [-.07, 1.12, .206], .009); lapel.rotation.z = -.42;
  for (let i = 0; i < 4; i++) { const fold = rounded(torso, folds, [.025, .22, .025], [-.2 + i * .12, 1.0, .203], .007); fold.rotation.z = (i - 1.5) * .14; }
  oval(head, flesh, [.305, .344, .275], [0, 0, 0], 32);
  oval(head, flesh, [.22, .18, .20], [0, -.20, .095]);
  for (const s of [-1, 1]) {
    oval(head, flesh, [.052, .084, .044], [s * .303, -.016, 0], 16);
    oval(head, hair, [.097, .052, .018], [s * .126, .039, .249], 20);
    oval(head, white, [.075, .033, .015], [s * .126, .035, .265], 20);
    oval(head, hair, [.032, .032, .013], [s * .113, .033, .278], 16);
    rounded(head, hair, [.18, .029, .03], [s * .13, .105, .255], .007).rotation.z = s * .22;
    const leg = new THREE.Group(), knee = new THREE.Group(); leg.position.set(s * .18, .76, 0); knee.position.y = -.31; leg.add(knee); group.add(leg); legs.push(leg); knees.push(knee);
    oval(leg, cloth, [.175, .265, .155], [0, -.13, 0]);
    for (const xx of [-.07, .07]) rounded(leg, folds, [.019, .34, .028], [xx, -.15, .142], .006);
    oval(knee, folds, [.10, .22, .105], [0, -.17, .0]);
    for (let i = 0; i < 4; i++) { const band = add(knee, new THREE.CylinderGeometry(.108, .108, .025, 12), sash, 0, -.1 - i * .055, 0); band.scale.z = .95; }
    rounded(knee, wrap, [.23, .12, .32], [0, -.385, .07], .042);
    rounded(knee, cord, [.22, .025, .11], [0, -.324, .1], .008);
  }
  oval(head, flesh, [.042, .09, .055], [0, -.065, .268]);
  rounded(head, folds, [.11, .018, .018], [0, -.204, .267], .005);
  rounded(head, cord, [.08, .012, .014], [.175, -.07, .242], .003).rotation.z = -.65;
  if (armored) {
    const helmet = add(head, new THREE.SphereGeometry(.345, 32, 18, 0, Math.PI * 2, 0, Math.PI * .57), armor, 0, .085, -.027); helmet.scale.y = .83;
    for (let i = 0; i < 8; i++) {
      const angle = i / 8 * Math.PI * 2;
      const curve = new THREE.CatmullRomCurve3([new THREE.Vector3(0, .362, -.026), new THREE.Vector3(Math.sin(angle) * .23, .255, -.026 + Math.cos(angle) * .23), new THREE.Vector3(Math.sin(angle) * .342, .07, -.026 + Math.cos(angle) * .342)]);
      add(head, new THREE.TubeGeometry(curve, 12, .009, 4, false), edging);
    }
    rounded(head, armor, [.58, .07, .17], [0, .12, .284], .015);
    for (const s of [-1, 1]) {
      for (let j = 0; j < 4; j++) {
        rounded(head, armor, [.09, .068, .38 - j * .024], [s * .35, .015 - j * .071, -.04], .016);
        oval(head, edging, [.016, .015, .012], [s * .38, .015 - j * .071, .10], 10);
      }
      const horn = add(head, new THREE.ConeGeometry(.045, .34, 12), edging, s * .22, .4, .20); horn.rotation.z = -s * .52;
      for (let j = 0; j < 4; j++) {
        rounded(torso, armor, [.24, .085, .23], [s * .38, 1.3 - j * .09, .035], .013);
        rounded(torso, cord, [.015, .10, .018], [s * .40, 1.29 - j * .09, .159], .004);
        rounded(torso, armor, [.26, .085, .12], [s * .19, .76 - j * .085, .21], .012);
      }
    }
    oval(head, armor, [.22, .14, .066], [0, -.19, .244]);
    const crest = add(head, new THREE.TorusGeometry(.24, .034, 5, 18, Math.PI * 1.2), edging, 0, .38, .31); crest.rotation.z = -.1 * Math.PI;
    for (const s of [-1, 1]) {
      rounded(torso, edging, [.021, .42, .023], [s * .29, 1.09, .27], .004);
      rounded(torso, cloth, [.11, .60, .018], [s * .20, .59, -.23], .007);
    }
    for (let i = 0; i < 5; i++) {
      rounded(torso, armor, [.56, .082, .135], [0, 1.32 - i * .09, .208], .014);
      for (const x of [-.20, -.085, .085, .20]) rounded(torso, cord, [.014, .08, .02], [x, 1.32 - i * .09, .281], .004);
      rounded(torso, edging, [.54, .012, .013], [0, 1.283 - i * .09, .279], .004);
    }
  } else {
    oval(head, hair, [.306, .18, .271], [0, .235, -.025]);
    oval(head, hair, [.092, .135, .095], [0, .383, -.092], 20);
    rounded(head, sash, [.58, .072, .14], [0, .177, .215], .02);
    rounded(head, flesh, [.028, .11, .016], [-.18, .001, .258], .004).rotation.z = -.4;
    for (const s of [-1, 1]) { const flap = rounded(torso, cloth, [.23, .25, .065], [s * .19, .68, .16], .025); flap.rotation.z = s * .12; }
    for (const y of [1.20, 1.05]) rounded(torso, sash, [.035, .13, .022], [.235, y, .16], .009).rotation.z = -.3;
    const straw = enemyMaterial('#9e956d');
    add(head, new THREE.ConeGeometry(.45, .23, 24, 1, true), straw, 0, .49, -.035);
    const rim = add(head, new THREE.TorusGeometry(.445, .012, 4, 24), cord, 0, .375, -.035); rim.rotation.x = Math.PI / 2;
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, direction = new THREE.Vector3(Math.sin(a) * .44, -.225, Math.cos(a) * .44);
      const tie = add(head, new THREE.CylinderGeometry(.004, .004, direction.length(), 4), cord, direction.x * .5, .61 + direction.y * .5, -.035 + direction.z * .5);
      tie.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    }
  }
  swordArm.position.set(.35, 1.22, .04); freeArm.position.set(-.35, 1.22, .04);
  for (const arm of [swordArm, freeArm]) {
    oval(arm, cloth, [.14, .245, .16], [0, -.12, .015]);
    oval(arm, flesh, [.082, .17, .085], [0, -.32, .074]);
    rounded(arm, armored ? armor : sash, [.16, .20, .10], [0, -.33, .127], .022);
    oval(arm, flesh, [.088, .103, .09], [0, -.46, .115], 20);
  }
  rod(swordArm, wrap, .037, .27, [0, -.43, .24]);
  for (let i = 0; i < 5; i++) rounded(swordArm, cord, [.072, .013, .014], [0, -.397, .16 + i * .045], .004).rotation.y = i % 2 ? .65 : -.65;
  const guard = add(swordArm, new THREE.CylinderGeometry(.087, .087, .027, 12), edging, 0, -.43, .388); guard.rotation.x = Math.PI / 2;
  const blade = new THREE.Shape(); blade.moveTo(-.029, 0); blade.lineTo(-.012, .81); blade.quadraticCurveTo(.065, 1.0, .079, 1.02); blade.lineTo(.054, .05); blade.closePath();
  const sword = add(swordArm, new THREE.ExtrudeGeometry(blade, { depth: .018, bevelEnabled: true, bevelSize: .004, bevelThickness: .003, bevelSegments: 1 }), bladeMat, 0, -.426, .40); sword.rotation.x = Math.PI / 2;
  const scabbard = rod(torso, wrap, .036, .89, [-.34, .75, -.12]); scabbard.rotation.x = 1.28; scabbard.rotation.z = .25;
  for (const y of [.59, .85]) rounded(torso, sash, [.12, .046, .085], [-.31, y, -.15], .01);
  for (const [name, part] of Object.entries({ head, torso, swordArm, freeArm, leg0: legs[0], leg1: legs[1], knee0: knees[0], knee1: knees[1] })) part.name = name;
  batchModel(group); shareGeometry(group);
  const scale = type === 'heavy' ? 1.14 : .96; group.scale.setScalar(scale);
  enemyTemplates.set(type, { group, scale });
  return enemyInstance(type);
}

function enemyInstance(type) {
  const template = enemyTemplates.get(type), group = template.group.clone(true), scale = template.scale;
  const [head, torso, swordArm, freeArm, leg0, leg1, knee0, knee1] = ['head', 'torso', 'swordArm', 'freeArm', 'leg0', 'leg1', 'knee0', 'knee1'].map(name => group.getObjectByName(name));
  const legs = [leg0, leg1], knees = [knee0, knee1];
  function animate(time, moving, swing = 0, pose = '') {
    const gait = Math.sin(time * 10), swingArc = Math.sin(swing * Math.PI);
    legs[0].rotation.x = gait * .58 * moving; legs[1].rotation.x = -gait * .58 * moving;
    knees[0].rotation.x = Math.max(0, -gait) * .55 * moving; knees[1].rotation.x = Math.max(0, gait) * .55 * moving;
    torso.position.y = Math.abs(gait) * .045 * moving; torso.rotation.x = pose === 'stagger' ? -.18 : moving * .085; torso.rotation.y = gait * .045 * moving;
    swordArm.rotation.set(pose === 'windup' ? -1.45 : -.6 - swingArc * .65, -.16 + swingArc * 2.1, -.16);
    freeArm.rotation.x = -gait * .46 * moving; freeArm.rotation.z = .12; head.rotation.y = -torso.rotation.y * .7;
  }
  animate(0, 0); return { group, animate, scale, type };
}

export function createGrenade() {
  const group = new THREE.Group(), olive = material('#526346', .4, .64), dark = material('#303b30', .55, .45);
  oval(group, olive, [.18, .235, .18], [0, 0, 0], 20);
  for (const y of [-.12, 0, .12]) { const band = add(group, new THREE.TorusGeometry(.174, .017, 5, 20), dark, 0, y, 0); band.rotation.x = Math.PI / 2; }
  rounded(group, steel, [.14, .06, .12], [0, .245, 0], .02);
  rounded(group, dark, [.065, .32, .06], [.145, .14, 0], .012).rotation.z = .24;
  const pin = add(group, new THREE.TorusGeometry(.066, .012, 5, 16), steel, -.09, .26, 0); pin.rotation.y = Math.PI / 2;
  return group;
}
export function createPickup(weaponId) {
  const group = new THREE.Group(), gun = weaponId === 'grenade' ? createGrenade() : createGun(weaponId);
  gun.rotation.set(-.2,.3,-.4); gun.scale.setScalar(1.1); gun.position.set(0,.8,-.25); group.add(gun);
  if (weaponId === 'grenade') gun.scale.setScalar(1.55);
  const color = weaponId === 'grenade' ? '#b9e385' : WEAPONS.find(item=>item.id===weaponId).color;
  const baseMat = new THREE.MeshBasicMaterial({color,transparent:true,opacity:.8,depthWrite:false});
  const ring = add(group,new THREE.TorusGeometry(.56,.027,6,40),baseMat,0,.04,0);ring.rotation.x=Math.PI/2;ring.userData.ownedMaterial=true;
  const pad = rounded(group, black, [1.05,.09,.82], [0,.085,0], .025); pad.castShadow = false;
  for (const s of [-1,1]) { const strip = add(group,new THREE.BoxGeometry(.10,.012,.46),baseMat,s*.43,.14,0); strip.castShadow=false; }
  const beamMat = new THREE.MeshBasicMaterial({color,transparent:true,opacity:.055,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide});
  const beam = add(group,new THREE.CylinderGeometry(.06,.52,2.4,12,1,true),beamMat,0,1.24,0);beam.userData.ownedMaterial=true;beam.castShadow=false;
  group.userData.gun=gun;return group;
}

export function disposeModel(root) {
  root.removeFromParent(); const geometries = new Set(), materials = new Set();
  root.traverse(object=>{if(object.geometry&&!object.geometry.userData.shared)geometries.add(object.geometry);if(object.userData.ownedMaterial&&!object.material.userData.shared)materials.add(object.material);});
  geometries.forEach(geometry=>geometry.dispose());materials.forEach(mat=>{if(mat.map&&!mat.map.userData.shared)mat.map.dispose();mat.dispose();});
}
