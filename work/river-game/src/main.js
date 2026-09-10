import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createIcons, Camera, VolumeX, Volume2, Pause, Play, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCcw, Sparkles, SlidersHorizontal, Dices, Check, Target, Shield, Zap, Bomb, Monitor } from 'lucide';
import { loadAssets } from './assets.js';
import { HEROES, WEAPONS, ENEMY_NAMES, isBossType, createHero, createEnemy, releaseEnemy, createGun, createGrenade, createPickup, disposeModel } from './chibi.js';
import { createBattlefield } from './battlefield.js';
import { CAMPAIGN, CHAPTERS, missionAt, chapterAt } from './campaign.js';
import { CampaignFinale } from './campaign-finale.js';
import { CombatPhysics } from './combat-physics.js';
import { Navigation } from './navigation.js';
import { TacticalMap } from './tactical-map.js';
import { BossCombat } from './boss-combat.js';
import { Effects } from './effects.js';

const elements = new Map();
const $ = id => { if (!elements.has(id)) elements.set(id, document.getElementById(id)); return elements.get(id); };
const random = (min, max) => min + Math.random() * (max - min);
const choose = list => list[Math.floor(Math.random() * list.length)];
const icons = { Camera, VolumeX, Volume2, Pause, Play, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCcw, Sparkles, SlidersHorizontal, Dices, Check, Target, Shield, Zap, Bomb, Monitor };
const iconize = () => createIcons({ icons, attrs: { 'stroke-width': 1.8 } });
const catalogs = { character: HEROES };
let preferences = { character: 'captain', sound: false, quality: 'balanced' };
try {
  const saved = JSON.parse(localStorage.getItem('frontline-arena-v8') || '{}');
  for (const [key, list] of Object.entries(catalogs)) if (list.some(item => item.id === saved[key])) preferences[key] = saved[key];
  preferences.sound = saved.sound === true;
  if (['performance', 'balanced', 'high'].includes(saved.quality)) preferences.quality = saved.quality;
} catch {}
const savePreferences = () => { try { localStorage.setItem('frontline-arena-v8', JSON.stringify(preferences)); } catch {} };
const heroInfo = () => HEROES.find(item => item.id === preferences.character);
const weaponInfo = () => WEAPONS.find(item => item.id === state.weapon);
const startingInventory = () => Object.fromEntries(WEAPONS.map(weapon => [weapon.id, { owned: weapon.id === 'pistol', ammo: weapon.id === 'pistol' ? -1 : 0, rank: 0 }]));
const weaponDamage = (weapon = weaponInfo()) => weapon.damage * (1 + state.inventory[weapon.id].rank * .08);
let renderer, camera, composer, bloom, scene, assets, battlefield, physics, effects, hero, sun, navigation, tacticalMap, bossCombat;
let thumbnailRenderer, audioContext, selectedTab = 'character', draft, checkpoint, finale;
const enemies = [], fallen = [], pickups = [], warnings = [], grenades = [], keys = new Set(), fireInputs = new Set(), thumbnails = new Map(), soundBuffers = new Map();
let hudTimer = 0, renderDirty = true, resolutionScale = 1, frameSample = 0, frameSum = 0;
let combatStartedAt = null;
const playerPosition = new THREE.Vector3(), facing = new THREE.Vector3(0, 0, 1), movement = new THREE.Vector3();
const cameraFocus = new THREE.Vector3(0, .5, 0), cameraOffset = new THREE.Vector3(0, 23.5, 34), sunOffset = new THREE.Vector3(-16, 28, 16);
const muzzlePosition = new THREE.Vector3(), axisY = new THREE.Vector3(0, 1, 0);
const raycaster = new THREE.Raycaster(), shotDirection = new THREE.Vector3(), aimProjection = new THREE.Vector3();
const silhouette = new THREE.Group(), silhouetteParts = [], silhouetteMaterial = new THREE.MeshBasicMaterial({ color: '#87dce8', transparent: true, opacity: .22, depthTest: false, depthWrite: false });
const state = {
  ready: false, phase: 'playing', paused: false, time: 0, previous: 0, level: 1,
  total: 8, scheduled: 0, kills: 0, score: 0, health: 120, weapon: 'pistol', inventory: startingInventory(), grenades: 2, grenadeCooldown: 0,
  spawnTimer: 2.2, shotTimer: 0, recoil: 0, hurt: 0, invulnerable: 0, dash: 0, dashCooldown: 0,
  skill: 0, skillCooldown: 0, combo: 0, comboTimer: 0, clearTimer: 0, toast: 0, ambientTimer: 0, dropPity: 0,
  transitioning: false, hitMarker: 0, supportUnlocked: false, combatSeconds: 0, result: null, settingsOpen: false
};

function active() { return state.ready && !state.transitioning && !state.paused && !$('garage').open && !state.settingsOpen && !document.hidden; }
function playing() { return active() && state.phase === 'playing'; }
function syncCombatClock(now = performance.now()) {
  now = Math.max(now, combatStartedAt ?? now);
  if (combatStartedAt !== null) state.combatSeconds += Math.max(0, now - combatStartedAt) / 1000;
  combatStartedAt = playing() ? now : null;
}
function formatTime(seconds) {
  const total = Math.floor(seconds), hours = Math.floor(total / 3600);
  return `${hours ? `${hours}:` : ''}${String(Math.floor(total / 60) % 60).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
}
function clearInput() { keys.clear(); fireInputs.clear(); movement.set(0, 0, 0); }
function point(height = .8) { return new THREE.Vector3(playerPosition.x, height, playerPosition.z); }
function toast(message) { $('toast').textContent = message; $('toast').classList.add('show'); state.toast = 2.2; }

function sound(kind) {
  if (!preferences.sound) return;
  audioContext ||= new AudioContext();
  if (audioContext.state === 'suspended') audioContext.resume();
  const now = audioContext.currentTime;
  if (kind === 'shot' || kind === 'hurt' || kind === 'explosion') {
    const duration = kind === 'shot' ? .075 : kind === 'explosion' ? .55 : .18;
    if (!soundBuffers.has(kind)) {
      const buffer = audioContext.createBuffer(1, Math.ceil(audioContext.sampleRate * duration), audioContext.sampleRate), data = buffer.getChannelData(0);
      for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length) ** 3;
      soundBuffers.set(kind, buffer);
    }
    const source = audioContext.createBufferSource(), filter = audioContext.createBiquadFilter(), gain = audioContext.createGain();
    source.buffer = soundBuffers.get(kind); filter.type = 'lowpass'; filter.frequency.value = kind === 'shot' ? 1700 : kind === 'explosion' ? 320 : 450; gain.gain.value = kind === 'shot' ? .13 : kind === 'explosion' ? .48 : .22;
    source.connect(filter); filter.connect(gain); gain.connect(audioContext.destination); source.start();
  } else {
    [523, 659, 784].forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator(), gain = audioContext.createGain(), start = now + index * .065;
      oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(.04, start); gain.gain.exponentialRampToValueAtTime(.001, start + .23);
      oscillator.connect(gain); gain.connect(audioContext.destination); oscillator.start(start); oscillator.stop(start + .25);
    });
  }
}

function applyBattlefield(level) {
  const chapter = chapterAt(level), next = createBattlefield(chapter.id, assets); battlefield?.dispose(); battlefield = next; scene.add(battlefield.root);
  physics.setObstacles(battlefield.obstacles); navigation = new Navigation(battlefield.obstacles); tacticalMap.setBattlefield(battlefield);
  document.body.dataset.scene = chapter.id;
  scene.background = new THREE.Color(chapter.sky); scene.fog = new THREE.Fog(scene.background, 65, 145);
  sun.color.set(chapter.sun); scene.environmentIntensity = chapter.id === 'city' ? .55 : .45;
}
function applyHero() {
  if (hero) disposeModel(hero.group);
  hero = createHero(preferences.character); hero.equip(state.weapon); scene.add(hero.group);
  $('hero-name').textContent = heroInfo().name; $('hero-portrait').src = thumbnail('character', preferences.character);
  $('health-max').textContent = heroInfo().health;
  $('skill').dataset.tooltip = heroInfo().skill; $('skill').setAttribute('aria-label', heroInfo().skill);
}
function updateSilhouette() {
  silhouette.clear(); silhouetteParts.length = 0;
  hero.group.traverse(object => { if (object.isMesh && !object.material.transparent) { const copy = new THREE.Mesh(object.geometry, silhouetteMaterial); copy.matrixAutoUpdate = false; copy.renderOrder = 20; silhouette.add(copy); silhouetteParts.push([object, copy]); } });
}
function changeHero(configuration) {
  if (configuration.character === preferences.character) return;
  const healthRatio = state.health / heroInfo().health;
  if (preferences.character === 'captain' && state.skill > 0 && !state.supportUnlocked) state.invulnerable = Math.min(state.invulnerable, .65);
  state.skill = 0; preferences.character = configuration.character;
  state.health = healthRatio * heroInfo().health;
  applyHero(); syncModels(); updateSilhouette(); updateWeaponHud(); updateHud(); savePreferences(); renderDirty = true;
}
function updateWeaponHud() {
  const weapon = weaponInfo(), damage = Math.round(weaponDamage(weapon));
  $('weapon-name').textContent = weapon.name; $('weapon-rank').textContent = `+${state.inventory[weapon.id].rank}`;
  $('weapon-detail').textContent = `伤害 ${damage}${weapon.pellets > 1 ? ` × ${weapon.pellets}` : ''} · 火力 ${Math.round(weaponDamage(weapon) * weapon.pellets / weapon.interval)}`;
  $('current-kit').textContent = heroInfo().name; updateInventoryHud();
}
function updateInventoryHud() {
  for (const weapon of WEAPONS) {
    const slot = state.inventory[weapon.id], button = $(`slot-${weapon.id}`);
    button.setAttribute('aria-pressed', String(state.weapon === weapon.id)); button.classList.toggle('empty', !slot.owned || slot.ammo === 0);
    button.querySelector('.slot-ammo').textContent = slot.owned ? slot.ammo === -1 ? '∞' : slot.ammo : '--';
    button.querySelector('.slot-rank').textContent = slot.rank ? `+${slot.rank}` : '';
    button.setAttribute('aria-label', `${weapon.name}，${!slot.owned ? '尚未获取' : slot.ammo === -1 ? '无限子弹' : `剩余 ${slot.ammo} 发`}`);
  }
  $('grenade-count').textContent = state.grenades;
  const slot = state.inventory[state.weapon]; $('weapon-name-bottom').textContent = slot.ammo === -1 ? '弹药 ∞' : `弹药 ${slot.ammo}`;
}
function selectWeapon(id) {
  const slot = state.inventory[id];
  if (!slot.owned || slot.ammo === 0) { toast(slot.owned ? '弹药耗尽' : '尚未获取这件武器'); return; }
  if (state.weapon === id) return;
  state.weapon = id; hero.equip(id); state.shotTimer = Math.max(state.shotTimer, .18); updateSilhouette(); updateWeaponHud();
}
function groundRing(color, radius, opacity = .75) {
  const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide });
  const mesh = new THREE.Mesh(new THREE.RingGeometry(radius - .05, radius, 48), material);
  mesh.rotation.x = -Math.PI / 2; mesh.position.y = .035; mesh.userData.ownedMaterial = true;
  scene.add(mesh); return mesh;
}
function healthBar(enemy) {
  const root = new THREE.Group(), backMat = new THREE.MeshBasicMaterial({ color: '#251f22', transparent: true, opacity: .8 });
  const frontMat = new THREE.MeshBasicMaterial({ color: isBossType(enemy.type) ? '#f8bb62' : '#ed7771' });
  for (const [mat, z] of [[backMat, 0], [frontMat, .001]]) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(.94, .075), mat); mesh.position.z = z; mesh.userData.ownedMaterial = true; root.add(mesh);
  }
  enemy.fill = root.children[1]; root.quaternion.copy(camera.quaternion); scene.add(root); return root;
}

function scheduleEnemy() {
  const serial = state.scheduled, side = serial % 4, mission = missionAt(state.level);
  const type = mission.boss && serial === state.total - 1 ? mission.boss : Math.random() < mission.heavyChance ? 'heavy' : 'raider';
  const boss = isBossType(type);
  let position;
  for (let attempt = 0; attempt < 32; attempt++) {
    const angle = attempt < 8 ? side * Math.PI / 2 + random(-.7, .7) : random(0, Math.PI * 2), radius = random(boss ? 12 : 9, boss ? 18 : 14);
    const candidate = new THREE.Vector3(playerPosition.x + Math.sin(angle) * radius, .035, playerPosition.z + Math.cos(angle) * radius);
    if (navigation.isOpen(candidate.x, candidate.z) && warnings.every(warning => warning.position.distanceTo(candidate) > 1.8) && navigation.connected(candidate, playerPosition)) { position = candidate; break; }
  }
  if (!position) return;
  state.scheduled++;
  const marker = groundRing(boss ? '#ffc45b' : '#fa685d', boss ? 1.8 : .8); marker.position.copy(position);
  warnings.push({ marker, position, type, remaining: boss ? 2.2 : 1.25 });
  if (boss) toast(`${ENEMY_NAMES[type]}即将现身`);
}
function spawnEnemy(warning) {
  const model = createEnemy(warning.type), isBoss = isBossType(warning.type), mission = missionAt(state.level);
  const health = Math.round(isBoss ? mission.bossHealth : 34 * mission.healthScale * (warning.type === 'heavy' ? 2.4 : 1));
  const body = physics.addEnemy(warning.position.x, warning.position.z, model.radius || .42 * model.scale, isBoss ? 5 : 1);
  const enemy = { model, body, type: warning.type, name: ENEMY_NAMES[warning.type], health, maxHealth: health, speed: isBoss ? 2.05 + mission.chapterIndex * .13 : 1.4 * mission.speedScale * (warning.type === 'raider' ? 1 : .76), attack: random(.4, .8), windup: 0, strike: 0, stagger: 0, hit: 0, phase: random(0, 10), route: [], routeTimer: random(0, .3) };
  model.group.position.set(body.position.x, 0, body.position.z); scene.add(model.group);
  enemy.bar = healthBar(enemy); enemy.warning = groundRing('#fa7464', 1.1, 0); enemies.push(enemy);
  enemy.bar.visible = enemy.warning.visible = false;
  effects.emit(warning.position, 14, '#d2ba98', { speed: 1.4, up: 1, life: .6, size: .11 });
  model.animate(state.time, 0);
  if (warning.type === 'emperor' && state.health <= heroInfo().health * .05) unlockSupport();
}
function updateSpawning(dt) {
  for (let i = warnings.length - 1; i >= 0; i--) {
    const warning = warnings[i]; warning.remaining -= dt;
    warning.marker.scale.setScalar(.85 + Math.sin(state.time * 12) * .14);
    warning.marker.material.opacity = .4 + Math.abs(Math.sin(state.time * 8)) * .5;
    if (warning.remaining <= 0) { spawnEnemy(warning); disposeModel(warning.marker); warnings.splice(i, 1); }
  }
  state.spawnTimer -= dt;
  const mission = missionAt(state.level);
  if (mission.boss && state.scheduled === state.total - 1 && state.kills < state.total - 1) return;
  if (state.scheduled < state.total && enemies.length + warnings.length < mission.maxAlive && state.spawnTimer <= 0) {
    scheduleEnemy(); state.spawnTimer = mission.spawnInterval * random(.65, 1.4);
  }
}
function dropWeapon(position, forcedId) {
  const missing = WEAPONS.slice(1).filter(item => !state.inventory[item.id].owned);
  const weapon = forcedId ? WEAPONS.find(item => item.id === forcedId) : choose(missing.length && Math.random() < .7 ? missing : WEAPONS.slice(1)), group = createPickup(weapon.id);
  group.position.copy(position); scene.add(group); pickups.push({ group, kind: 'weapon', weapon, life: 45, phase: random(0, 6) }); effects.ring(position, weapon.color, 1.5);
}
function dropGrenade(position) {
  const group = createPickup('grenade'); group.position.copy(position); scene.add(group);
  if (navigation.isOpen(position.x + .85, position.z)) group.position.x += .85;
  pickups.push({ group, kind: 'grenade', life: 45, phase: random(0, 6) }); effects.ring(position, '#b9e385', 1.5);
}
function removeEnemy(enemy, defeated = false) {
  const index = enemies.indexOf(enemy); if (index === -1) return;
  if (isBossType(enemy.type)) bossCombat.remove(enemy);
  enemies.splice(index, 1); physics.removeEnemy(enemy.body); disposeModel(enemy.bar); disposeModel(enemy.warning);
  if (defeated) {
    if (fallen.length >= 8) releaseEnemy(fallen.shift().model);
    fallen.push({ model: enemy.model, life: 1.25, direction: facing.clone(), angle: random(-.3, .3) });
  } else releaseEnemy(enemy.model);
}
function damageEnemy(enemy, damage, impact, source = 'bullet') {
  if (state.phase !== 'playing' || !enemies.includes(enemy)) return;
  if (isBossType(enemy.type) && source === 'bullet') damage *= enemy.stagger > 0 || enemy.bossMode === 'recover' ? 1.3 : .78;
  enemy.health -= damage;
  enemy.hit = .15; state.hitMarker = .13;
  effects.hit(impact, facing, enemy.type !== 'raider');
  if (enemy.health > 0) return;
  if (enemy.type === 'emperor') { beginFinale(enemy, false); return; }
  const position = enemy.model.group.position.clone();
  state.kills++; state.score += (enemy.type === 'boss' ? 600 : enemy.type === 'heavy' ? 180 : 100) * state.level;
  state.combo++; state.comboTimer = 3; state.dropPity++;
  effects.emit(position.clone().setY(.85), 18, enemy.type === 'boss' ? '#ffd186' : '#edc493', { direction: facing, speed: 2.6, up: 2.5, gravity: 9, life: .45, size: .09 });
  effects.debrisBurst(position.clone().setY(.7), enemy.type === 'heavy' ? 9 : 4, enemy.type === 'heavy' ? '#90999d' : '#a99e82');
  effects.smoke(position, 3, '#a4a499', .65);
  if (enemy.type === 'boss') { effects.burst(position, 'crash'); dropWeapon(position); dropGrenade(position); }
  else {
    const firstWeapon = state.level === 1 && state.kills === 2 && !state.inventory.rifle.owned;
    if (firstWeapon || state.dropPity >= 4 || Math.random() < .32) { dropWeapon(position, firstWeapon ? 'rifle' : undefined); state.dropPity = 0; }
    if (Math.random() < .18) dropGrenade(position);
  }
  removeEnemy(enemy, true); if (state.kills === state.total) clearLevel();
}
function addTracer(start, end, color) {
  if (start.distanceToSquared(end) < .0001) return;
  effects.tracer(start, end, color, state.weapon === 'rail' ? .028 : .013, state.weapon === 'rail' ? .13 : .065);
}
function fire() {
  if (!playing() || state.shotTimer > 0) return;
  const weapon = weaponInfo(), boost = state.skill > 0 && preferences.character === 'armor' ? 1.65 : 1;
  const slot = state.inventory[weapon.id]; if (!slot.owned || slot.ammo === 0) return;
  if (slot.ammo > 0) slot.ammo--;
  state.shotTimer = weapon.interval / boost; state.recoil = 1;
  hero.group.updateMatrixWorld(true); hero.muzzle.getWorldPosition(muzzlePosition);
  const origin = point(muzzlePosition.y), center = new THREE.Vector3(), sphere = new THREE.Sphere(), intersection = new THREE.Vector3();
  for (let pellet = 0; pellet < weapon.pellets; pellet++) {
    const spread = weapon.pellets > 1 ? (pellet / (weapon.pellets - 1) - .5) * weapon.spread * 2 : random(-weapon.spread, weapon.spread);
    shotDirection.copy(facing).applyAxisAngle(axisY, spread); raycaster.set(origin, shotDirection);
    const wallDistance = navigation.shotDistance(raycaster.ray, weapon.range);
    const hits = [];
    for (const enemy of enemies) {
      center.set(enemy.body.position.x, origin.y, enemy.body.position.z); sphere.set(center, enemy.model.hitRadius || .53 * enemy.model.scale);
      if (raycaster.ray.intersectSphere(sphere, intersection)) {
        const distance = origin.distanceTo(intersection);
        if (distance < wallDistance) hits.push({ enemy, distance, point: intersection.clone() });
      }
    }
    hits.sort((a, b) => a.distance - b.distance);
    const impacted = hits.slice(0, weapon.pierce || 1), last = impacted.at(-1);
    const end = last && !weapon.pierce ? last.point : origin.clone().addScaledVector(shotDirection, wallDistance);
    addTracer(origin.clone().lerp(muzzlePosition, Math.min(1, wallDistance / origin.distanceTo(muzzlePosition))), end, weapon.color);
    if (wallDistance < weapon.range && (!last || weapon.pierce)) effects.hit(end, shotDirection.clone().negate(), true);
    for (const hit of impacted) damageEnemy(hit.enemy, weaponDamage(weapon), hit.point);
  }
  effects.muzzle(muzzlePosition, facing, weapon); sound('shot');
  if (slot.ammo === 0) { selectWeapon('pistol'); toast(`${weapon.name}弹药耗尽`); }
  updateInventoryHud();
}
function throwGrenade() {
  if (!playing() || state.grenades === 0 || state.grenadeCooldown > 0) return;
  state.grenades--; state.grenadeCooldown = 1.8;
  const body = physics.addGrenade(point(1.05).addScaledVector(facing, .2), facing), model = createGrenade(), marker = groundRing('#f6c487', .65, .75);
  scene.add(model); grenades.push({ body, model, marker, fuse: 1.15, trail: 0 }); updateInventoryHud();
}
function removeGrenade(grenade) {
  physics.removeGrenade(grenade.body); disposeModel(grenade.model); disposeModel(grenade.marker);
  const index = grenades.indexOf(grenade); if (index !== -1) grenades.splice(index, 1);
}
function updateGrenades(dt) {
  for (const grenade of [...grenades]) {
    if (!grenades.includes(grenade)) continue;
    const position = new THREE.Vector3(grenade.body.position.x, grenade.body.position.y, grenade.body.position.z);
    grenade.model.position.copy(position); grenade.model.quaternion.copy(grenade.body.quaternion); grenade.fuse -= dt; grenade.trail -= dt;
    grenade.marker.position.set(position.x, .04, position.z); grenade.marker.scale.setScalar(1 + .18 * Math.sin(state.time * 23));
    if (grenade.trail <= 0) { effects.emit(position, 3, '#ffdb91', { speed: .35, up: .5, life: .25, size: .08, energy: 2.6 }); grenade.trail = .07; }
    if (grenade.fuse > 0) continue;
    removeGrenade(grenade); effects.burst(position, 'crash'); sound('explosion');
    for (const enemy of [...enemies]) {
      const direction = new THREE.Vector3(enemy.body.position.x - position.x, 0, enemy.body.position.z - position.z), distance = direction.length();
      if (distance > 5.5 + (enemy.model.radius || .42)) continue;
      const target = new THREE.Vector3(enemy.body.position.x, .85, enemy.body.position.z), origin = position.clone().add(new THREE.Vector3(0, .12, 0));
      const separation = target.distanceTo(origin); raycaster.set(origin, target.sub(origin).normalize());
      if (navigation.shotDistance(raycaster.ray, separation) < separation - .05) continue;
      damageEnemy(enemy, 190 * Math.max(.5, 1 - distance / 12), enemy.model.group.position.clone().setY(.8), 'grenade');
      if (state.phase !== 'playing' || !enemies.includes(enemy)) continue;
      if (direction.lengthSq() < .01) direction.copy(facing); else direction.normalize();
      physics.knockback(enemy.body, direction, isBossType(enemy.type) ? 9 : 12);
      enemy.stagger = isBossType(enemy.type) ? .9 : 1.1; enemy.windup = 0; enemy.routeTimer = 0;
      if (isBossType(enemy.type)) bossCombat.interrupt(enemy);
    }
  }
}
function takeDamage(amount) {
  if (state.invulnerable > 0 || state.phase !== 'playing') return;
  state.health = Math.max(0, state.health - amount); state.hurt = .24; state.invulnerable = .65;
  // Catch the first threshold crossing, including a hit that would otherwise be fatal.
  if (!state.supportUnlocked && state.health <= heroInfo().health * .05 && enemies.some(enemy => enemy.type === 'emperor')) {
    state.health = Math.max(state.health, heroInfo().health * .05); unlockSupport();
  }
  effects.emit(point(), 21, '#ff8879', { speed: 3, up: 2, life: .4, size: .12 }); sound('hurt');
  if (!state.health) {
    state.phase = 'gameover'; syncCombatClock(); clearInput(); $('game-over').hidden = false;
    $('game-over-score').textContent = state.score.toLocaleString('zh-CN'); $('failed-level').textContent = state.level;
  }
}
function unlockSupport() {
  if (state.supportUnlocked) return;
  state.supportUnlocked = true; state.invulnerable = Math.max(state.invulnerable, 8);
  $('nuclear-support').hidden = false; toast('紧急支援已就绪 · 按 N 召唤核弹'); sound('pickup');
}
function summonNuclear() {
  if (!playing() || !state.supportUnlocked) return;
  const emperor = enemies.find(enemy => enemy.type === 'emperor'); if (emperor) beginFinale(emperor, true);
}
function beginFinale(emperor, nuclear) {
  if (state.phase !== 'playing') return;
  state.phase = 'ending'; syncCombatClock(); clearInput(); physics.player.velocity.setZero(); emperor.body.velocity.setZero();
  bossCombat.remove(emperor); bossCombat.clear();
  for (const grenade of [...grenades]) removeGrenade(grenade);
  $('nuclear-support').hidden = true; document.body.classList.add('cinematic');
  finale = new CampaignFinale(scene, effects, battlefield, emperor, playerPosition, nuclear, () => {
    state.kills = state.total; state.score += 1800 * state.level; sound('explosion');
  });
  toast(nuclear ? '核弹支援抵达' : '最终目标已击破'); updateHud();
}
function completeCampaign() {
  if (state.phase !== 'ending') return;
  state.phase = 'victory'; $('campaign-victory').hidden = false;
  const bonus = Math.round(state.score * .6 / (1 + state.combatSeconds / 900));
  state.result = { base: state.score, seconds: state.combatSeconds, bonus, total: state.score + bonus };
  $('victory-score').textContent = state.result.total.toLocaleString('zh-CN');
  $('victory-base').textContent = state.score.toLocaleString('zh-CN');
  $('victory-time').textContent = formatTime(state.combatSeconds);
  $('victory-bonus').textContent = `+${bonus.toLocaleString('zh-CN')}`;
  $('victory-result').textContent = finale.nuclear ? '核弹命中 · 皇宫已化为废墟' : '最终首领击败 · 皇宫防线崩溃';
  document.body.classList.add('victory-shown'); $('campaign-restart').focus({ preventScroll: true });
  sound('pickup'); updateHud();
}
function dodge() {
  if (!playing() || state.dashCooldown > 0) return;
  state.dash = .20; state.dashCooldown = 2.3; state.invulnerable = Math.max(state.invulnerable, .45);
  effects.ring(point(.05), '#b9e7e6', 2); effects.emit(point(.15), 25, '#cce9e6', { speed: 2, up: .5, life: .4 });
}
function activateSkill() {
  if (!playing() || state.skillCooldown > 0) return;
  state.skillCooldown = 12; state.skill = 3.5; const color = heroInfo().color;
  effects.emit(point(1), 100, color, { speed: 3.2, up: 4.2, gravity: 2, life: 1.1, size: .18, energy: 2.8 });
  for (let i = 0; i < 3; i++) effects.arc(point(1), color, 1 + i * .4, i * 1.8);
  if (preferences.character === 'captain') state.invulnerable = Math.max(state.invulnerable, state.skill);
  if (preferences.character === 'panda') {
    effects.ring(point(.03), '#ffdf9d', 8);
    for (const enemy of [...enemies]) if (enemy.model.group.position.distanceTo(playerPosition) < 6 && navigation.unobstructed(playerPosition, enemy.body.position, false)) damageEnemy(enemy, 110 * (1 + Math.min(10, state.level - 1) * .06), enemy.model.group.position.clone().setY(.8));
    state.skill = .9;
  }
  toast(heroInfo().skill); sound('pickup');
}
function drivePlayer(dt) {
  movement.set(Number(keys.has('ArrowRight') || keys.has('KeyD')) - Number(keys.has('ArrowLeft') || keys.has('KeyA')), 0, Number(keys.has('ArrowDown') || keys.has('KeyS')) - Number(keys.has('ArrowUp') || keys.has('KeyW')));
  if (movement.lengthSq()) { movement.normalize(); facing.copy(movement); }
  const speed = heroInfo().speed;
  physics.player.velocity.set(state.dash > 0 ? facing.x * 13 : movement.x * speed, 0, state.dash > 0 ? facing.z * 13 : movement.z * speed);
  for (const field of ['shotTimer', 'recoil', 'hurt', 'invulnerable', 'dash', 'dashCooldown', 'skill', 'skillCooldown', 'comboTimer', 'grenadeCooldown']) state[field] = Math.max(0, state[field] - dt * (field === 'recoil' ? 9 : 1));
  if (state.comboTimer === 0) state.combo = 0;
}
function driveEnemies(dt) {
  const slow = state.skill > 0 && preferences.character === 'ranger' ? .32 : 1;
  navigation.searchesRemaining = 2;
  for (const enemy of enemies) {
    enemy.hit = Math.max(0, enemy.hit - dt);
    if (enemy.stagger > 0) {
      enemy.stagger = Math.max(0, enemy.stagger - dt); enemy.body.velocity.x *= Math.exp(-dt * 3.4); enemy.body.velocity.z *= Math.exp(-dt * 3.4);
      enemy.model.animate(state.time, 0, 0, 'stagger'); continue;
    }
    if (isBossType(enemy.type) && bossCombat.update(enemy, dt, { player: playerPosition, time: state.time, level: state.level, slow, navigation, takeDamage, toast })) continue;
    const dx = playerPosition.x - enemy.body.position.x, dz = playerPosition.z - enemy.body.position.z, distance = Math.hypot(dx, dz);
    const attackRange = 1.25 + (enemy.model.scale - 1) * .5;
    const canAttack = !isBossType(enemy.type) && distance < attackRange + .55 && navigation.unobstructed(enemy.body.position, playerPosition, false);
    enemy.strike = Math.max(0, enemy.strike - dt * 3); enemy.attack = Math.max(0, enemy.attack - dt * slow);
    if (enemy.windup > 0) {
      enemy.windup -= dt * slow;
      if (enemy.windup <= 0) {
        enemy.strike = 1; enemy.attack = Math.max(.65, 1.3 - state.level * .025);
        if (canAttack) takeDamage(enemy.type === 'boss' ? 27 : enemy.type === 'heavy' ? 18 : 11);
        effects.slash(enemy.model.group.position.clone().setY(.8), enemy.model.group.rotation.y, 1.05);
      }
    } else if (canAttack && distance < attackRange + .3 && enemy.attack === 0) enemy.windup = .48;
    let target = playerPosition;
    enemy.routeTimer -= dt;
    if (!navigation.unobstructed(enemy.body.position, playerPosition)) {
      if (enemy.routeTimer <= 0 && navigation.searchesRemaining > 0) { navigation.searchesRemaining--; enemy.route = navigation.path(enemy.body.position, playerPosition); enemy.routeTimer = random(.85, 1.25); }
      while (enemy.route.length && Math.hypot(enemy.route[0].x - enemy.body.position.x, enemy.route[0].z - enemy.body.position.z) < .3) enemy.route.shift();
      target = enemy.route[0] || enemy.body.position;
    } else { enemy.route.length = 0; enemy.routeTimer = 0; }
    const tx = target.x - enemy.body.position.x, tz = target.z - enemy.body.position.z, length = Math.hypot(tx, tz);
    const moving = enemy.windup <= 0 && (!canAttack || distance > attackRange) && length > .03;
    const speed = enemy.speed * slow * (enemy.enraged ? 1.23 : 1);
    enemy.body.velocity.set(moving ? tx / length * speed : 0, 0, moving ? tz / length * speed : 0);
    enemy.model.group.rotation.y = Math.atan2(moving ? tx : dx, moving ? tz : dz); enemy.model.animate(state.time + enemy.phase, moving ? slow : 0, enemy.strike, enemy.windup > 0 ? 'windup' : enemy.hit > 0 ? 'stagger' : '');
  }
}
function syncModels() {
  playerPosition.set(physics.player.position.x, 0, physics.player.position.z);
  hero.group.position.copy(playerPosition); hero.group.rotation.y = Math.atan2(facing.x, facing.z);
  hero.animate(state.time, movement.lengthSq() > 0 ? 1 : 0, state.recoil, state.phase === 'clear' ? 1 : 0);
  for (const enemy of enemies) {
    enemy.model.group.position.set(enemy.body.position.x, 0, enemy.body.position.z);
    const ratio = Math.max(0, enemy.health / enemy.maxHealth);
    enemy.bar.position.set(enemy.body.position.x, enemy.model.barHeight || 2.38 * enemy.model.scale, enemy.body.position.z);
    enemy.fill.scale.x = ratio; enemy.fill.position.x = -.47 * (1 - ratio);
    enemy.warning.position.set(enemy.body.position.x, .04, enemy.body.position.z); enemy.warning.material.opacity = enemy.windup > 0 ? .35 + (.48 - enemy.windup) : 0;
    enemy.warning.visible = enemy.windup > 0; enemy.bar.visible = enemy.health < enemy.maxHealth && !isBossType(enemy.type);
  }
}
function updateFallen(dt) {
  for (let i = fallen.length - 1; i >= 0; i--) {
    const item = fallen[i]; item.life -= dt;
    if (item.life <= 0) { releaseEnemy(item.model); fallen.splice(i, 1); continue; }
    const fall = Math.min(1, (1.25 - item.life) / .33), group = item.model.group;
    group.rotation.x = -Math.sin(fall * Math.PI / 2) * 1.48; group.rotation.z = item.angle * fall;
    group.position.y = Math.sin(fall * Math.PI) * .22 + .10 * fall;
    group.position.addScaledVector(item.direction, dt * Math.max(0, 1 - fall) * 2);
    group.scale.setScalar(item.model.scale * Math.min(1, item.life / .26));
  }
}
function collectPickup(pickup) {
  let color = '#b9e385';
  if (pickup.kind === 'grenade') { state.grenades = Math.min(6, state.grenades + 1); toast('手雷 +1'); }
  else {
    const slot = state.inventory[pickup.weapon.id], owned = slot.owned, before = slot.ammo;
    slot.owned = true; slot.rank = Math.min(10, slot.rank + (owned ? 1 : 0)); slot.ammo = Math.min(pickup.weapon.maxAmmo, slot.ammo + pickup.weapon.ammoPickup); color = pickup.weapon.color;
    if (!owned && state.weapon === 'pistol') selectWeapon(pickup.weapon.id);
    toast(`${pickup.weapon.name} · 弹药 +${slot.ammo - before}${slot.rank ? ` · 强化 +${slot.rank}` : ''}`);
  }
  updateWeaponHud(); sound('pickup'); effects.emit(point(.7), 50, color, { speed: 2.4, up: 3.5, gravity: 1.6, life: .9, size: .13 }); effects.ring(point(.04), color, 2.1);
}
function updatePickups(dt) {
  for (let i = pickups.length - 1; i >= 0; i--) {
    const pickup = pickups[i], distance = Math.hypot(pickup.group.position.x - playerPosition.x, pickup.group.position.z - playerPosition.z);
    const available = pickup.kind === 'grenade' ? state.grenades < 6 : state.inventory[pickup.weapon.id].ammo < pickup.weapon.maxAmmo || state.inventory[pickup.weapon.id].rank < 10;
    pickup.life -= dt; pickup.group.position.y = .06 + Math.sin(state.time * 3 + pickup.phase) * .06; pickup.group.userData.gun.rotation.y += dt;
    const reachable = state.phase === 'clear' || distance < 2.2 && navigation.unobstructed(playerPosition, pickup.group.position, false);
    if (available && reachable) pickup.group.position.lerp(playerPosition, 1 - Math.exp(-dt * (state.phase === 'clear' ? 3.5 : 6)));
    if (available && reachable && distance < .9) { collectPickup(pickup); disposeModel(pickup.group); pickups.splice(i, 1); }
    else if (pickup.life <= 0) { disposeModel(pickup.group); pickups.splice(i, 1); }
  }
}
function clearLevel() {
  if (state.phase !== 'playing') return;
  if (!missionAt(state.level + 1)) return;
  state.phase = 'clear'; syncCombatClock(); state.clearTimer = 3; clearInput();
  for (const grenade of [...grenades]) removeGrenade(grenade); bossCombat.clear();
  $('level-clear').hidden = false; $('level-clear-value').textContent = state.level;
  $('next-level').textContent = `下一关 · ${chapterAt(state.level + 1).name} / ${missionAt(state.level + 1).name}`;
  effects.burst(point(.3), 'success'); sound('pickup');
}
function clearCombat() {
  finale?.dispose(); finale = null; camera.zoom = 1; camera.updateProjectionMatrix();
  document.body.classList.remove('cinematic', 'victory-shown'); $('finale-flash').style.opacity = 0;
  $('campaign-victory').hidden = $('nuclear-support').hidden = true;
  for (const grenade of [...grenades]) removeGrenade(grenade); bossCombat.clear();
  for (const enemy of [...enemies]) removeEnemy(enemy);
  for (const pickup of pickups) disposeModel(pickup.group);
  for (const warning of warnings) disposeModel(warning.marker);
  for (const item of fallen) releaseEnemy(item.model);
  pickups.length = warnings.length = fallen.length = 0; physics.clear(); effects.clear(); clearInput();
}
function startLevel(level, retry = false, spawnPoint) {
  const mission = missionAt(level); if (!mission) return;
  const position = spawnPoint || (retry ? checkpoint.position.clone() : new THREE.Vector3(mission.spawn[0], 0, mission.spawn[1]));
  const rebuild = !battlefield || battlefield.type !== mission.chapter || Boolean(finale);
  clearCombat(); if (retry) Object.assign(state, structuredClone(checkpoint.loadout));
  state.level = level; state.total = mission.total; state.supportUnlocked = false;
  if (rebuild) applyBattlefield(level);
  state.health = retry || level === 1 ? heroInfo().health : Math.min(heroInfo().health, state.health + Math.round(heroInfo().health * .25));
  state.phase = 'playing'; state.scheduled = state.kills = state.dropPity = 0; state.spawnTimer = 2.1; state.invulnerable = 1.5;
  for (const field of ['shotTimer', 'recoil', 'hurt', 'dash', 'dashCooldown', 'skill', 'skillCooldown', 'combo', 'comboTimer', 'clearTimer', 'grenadeCooldown']) state[field] = 0;
  physics.player.position.set(position.x, .6, position.z); playerPosition.copy(position); facing.set(0, 0, 1); hero.equip(state.weapon);
  checkpoint = { loadout: structuredClone({ score: state.score, inventory: state.inventory, weapon: state.weapon, grenades: state.grenades }), position: position.clone() };
  $('place').textContent = `${chapterAt(level).name} / ${mission.name}`;
  $('chapter-progress').textContent = `${mission.stage + 1} / ${chapterAt(level).missions.length}`;
  document.querySelectorAll('.campaign-route li').forEach((item, index) => { item.classList.toggle('current', index === mission.chapterIndex); item.classList.toggle('complete', index < mission.chapterIndex); if (index === mission.chapterIndex) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current'); });
  $('game-over').hidden = $('level-clear').hidden = true; setPause(false); syncModels(); followCamera(0, true); updateSilhouette(); updateWeaponHud(); updateHud(); toast(`第 ${level} / ${CAMPAIGN.length} 关 · ${mission.name}${mission.boss ? ' · 首领战' : ''}`);
}
async function advanceLevel() {
  if (state.transitioning || !missionAt(state.level + 1)) return;
  const level = state.level + 1, changeScene = battlefield.type !== missionAt(level).chapter;
  if (!changeScene) { startLevel(level); return; }
  state.transitioning = true; syncCombatClock(); clearInput();
  $('loading').hidden = false; $('loading').classList.remove('done'); $('loading-state').textContent = `正在前往${chapterAt(level).name}`; $('load-progress').value = 85;
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  startLevel(level); await warmCombat();
  state.transitioning = false; state.previous = 0; syncCombatClock(); renderDirty = true; $('loading').hidden = true; $('loading').classList.add('done'); $('view').focus({ preventScroll: true });
}
async function deploy() {
  if (state.transitioning) return;
  state.transitioning = true; syncCombatClock(); clearInput();
  $('loading').hidden = false; $('loading').classList.remove('done'); $('loading-state').textContent = '正在部署战场'; $('load-progress').value = 90;
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  state.score = state.combatSeconds = 0; state.result = null; state.weapon = 'pistol'; state.inventory = startingInventory(); state.grenades = 2;
  applyHero(); startLevel(1); resize();
  await warmCombat();
  savePreferences(); state.transitioning = false; state.previous = 0; syncCombatClock(); renderDirty = true; frameSum = frameSample = 0; updateHud();
  $('loading').classList.add('done'); $('loading').hidden = true; $('load-progress').value = 100; $('view').focus({ preventScroll: true });
}
function setPause(value) {
  clearInput(); state.paused = value; syncCombatClock(); state.previous = 0; renderDirty = true; hudTimer = 0; $('pause-screen').hidden = !value;
  $('pause').innerHTML = `<i data-lucide="${value ? 'play' : 'pause'}"></i>`;
  $('pause').setAttribute('aria-label', value ? '继续' : '暂停'); $('pause').dataset.tooltip = value ? '继续' : '暂停'; iconize();
}
function updateHud() {
  $('level').textContent = String(state.level).padStart(2, '0'); $('kills').textContent = `${state.kills} / ${state.total}`; $('score').textContent = state.score.toLocaleString('zh-CN');
  $('battle-time').textContent = formatTime(state.combatSeconds);
  $('health-value').textContent = Math.ceil(state.health); $('health-bar').style.width = `${state.health / heroInfo().health * 100}%`; $('wave-progress').style.width = `${state.kills / state.total * 100}%`;
  $('skill-time').textContent = Math.ceil(state.skillCooldown) || ''; $('skill').classList.toggle('cooling', state.skillCooldown > 0); $('skill').disabled = state.skillCooldown > 0 || state.phase !== 'playing';
  $('dodge').disabled = state.dashCooldown > 0 || state.phase !== 'playing'; $('combo').classList.toggle('show', state.combo > 1); $('combo-value').textContent = state.combo;
  $('grenade').disabled = !playing() || state.grenades === 0 || state.grenadeCooldown > 0;
  $('fire').disabled = !playing();
  for (const weapon of WEAPONS) { const slot = state.inventory[weapon.id]; $(`slot-${weapon.id}`).disabled = !playing() || !slot.owned || slot.ammo === 0; }
  const boss = state.phase === 'playing' ? enemies.find(enemy => isBossType(enemy.type)) : null; $('boss-panel').hidden = !boss; document.body.classList.toggle('boss-active', Boolean(boss));
  if (boss) {
    $('boss-name').textContent = boss.name;
    $('boss-health').textContent = `${Math.ceil(boss.health)} / ${boss.maxHealth}`; $('boss-health-bar').style.width = `${Math.max(0, boss.health / boss.maxHealth * 100)}%`;
    $('boss-phase').textContent = boss.stagger > 0 ? '失衡' : boss.bossMode === 'recover' ? '破绽' : boss.bossMode === 'windup' ? {charge:'拔刀突进',cleave:'回旋斩',volley:'刀气齐射',arrows:'弓箭齐射'}[boss.bossAttack] : boss.bossMode === 'charge' ? '突进' : boss.enraged ? '狂怒' : '逼近';
    $('boss-panel').classList.toggle('enraged', Boolean(boss.enraged)); $('boss-panel').classList.toggle('vulnerable', boss.stagger > 0 || boss.bossMode === 'recover');
  }
  $('damage-overlay').classList.toggle('show', state.hurt > 0); $('fire').classList.toggle('active', fireInputs.size > 0 && playing());
  $('nuclear-support').hidden = !state.supportUnlocked || state.phase !== 'playing'; $('summon-nuclear').disabled = !playing();
  $('support-status').textContent = state.invulnerable > 0 ? `紧急保护 ${Math.ceil(state.invulnerable)} 秒` : '紧急支援已就绪';
  $('configure').disabled = state.phase === 'ending' || state.phase === 'victory'; $('pause').disabled = state.phase === 'victory';
  document.querySelector('.status-label').textContent = { gameover: '失去战斗能力', clear: '区域安全', ending: '最终目标击破', victory: '战役胜利' }[state.phase] || '作战中';
}
function updateAimHud() {
  aimProjection.copy(playerPosition).addScaledVector(facing, 2.5); aimProjection.y = .2; aimProjection.project(camera);
  $('crosshair').style.transform = `translate(${(aimProjection.x * .5 + .5) * innerWidth}px,${(-aimProjection.y * .5 + .5) * innerHeight}px)`; $('crosshair').hidden = state.phase !== 'playing';
  $('crosshair').classList.toggle('hit', state.hitMarker > 0);
}
function followCamera(dt, snap = false) {
  const blend = snap ? 1 : 1 - Math.exp(-dt * 9);
  const target = finale ? finale.focus : playerPosition, cameraBlend = finale ? 1 - Math.exp(-dt * 1.5) : blend;
  cameraFocus.x += (target.x - cameraFocus.x) * cameraBlend; cameraFocus.z += (target.z - cameraFocus.z) * cameraBlend;
  const zoom = finale ? Math.min(.78, 24 / Math.max(32, finale.extent.z * .8 + 20, finale.extent.x / (innerWidth / innerHeight) + 14)) : 1;
  if (Math.abs(camera.zoom - zoom) > .0001) { camera.zoom += (zoom - camera.zoom) * (snap ? 1 : 1 - Math.exp(-dt * 1.5)); camera.updateProjectionMatrix(); }
  effects.material.uniforms.height.value = innerHeight * renderer.getPixelRatio() / 24 * camera.zoom;
  camera.position.copy(cameraFocus).add(cameraOffset); camera.lookAt(cameraFocus); camera.updateMatrixWorld();
  sun.target.position.set(cameraFocus.x, 0, cameraFocus.z); sun.position.copy(sun.target.position).add(sunOffset); sun.target.updateMatrixWorld();
  const center = point(.85), distance = camera.position.distanceTo(center);
  raycaster.set(camera.position, center.sub(camera.position).normalize());
  silhouette.visible = navigation.shotDistance(raycaster.ray, distance) < distance - .1;
  if (silhouette.visible) { hero.group.updateMatrixWorld(true); for (const [source, copy] of silhouetteParts) copy.matrix.copy(source.matrixWorld); }
}
function resize() {
  const quality = { performance: { pixels: 1450000, ratio: 1, shadow: 1024 }, balanced: { pixels: 2300000, ratio: 1.25, shadow: 2048 }, high: { pixels: 4000000, ratio: 1.5, shadow: 2048 } }[preferences.quality];
  const ratio = Math.min(devicePixelRatio || 1, quality.ratio, Math.sqrt(quality.pixels / (innerWidth * innerHeight))) * resolutionScale;
  renderer.setPixelRatio(ratio); renderer.setSize(innerWidth, innerHeight, false); composer.setPixelRatio(ratio); composer.setSize(innerWidth, innerHeight);
  bloom.enabled = preferences.quality !== 'performance';
  if (sun.shadow.mapSize.x !== quality.shadow) { sun.shadow.mapSize.setScalar(quality.shadow); sun.shadow.map?.dispose(); sun.shadow.map = null; }
  const aspect = innerWidth / innerHeight, height = 24;
  camera.left = -height * aspect / 2; camera.right = height * aspect / 2; camera.top = height / 2; camera.bottom = -height / 2; camera.updateProjectionMatrix();
  effects.material.uniforms.height.value = innerHeight * renderer.getPixelRatio() / height;
  renderDirty = true;
}
function frame(timestamp) {
  requestAnimationFrame(frame);
  const elapsed = state.previous ? timestamp - state.previous : 16.67, dt = Math.min(.05, elapsed / 1000); state.previous = timestamp;
  syncCombatClock(timestamp);
  const running = active() && state.phase !== 'victory';
  if ((!running && !renderDirty) || state.transitioning) return;
  if (running) {
    if (elapsed < 100) { frameSum += elapsed; frameSample++; }
    if (frameSample >= 180) { if (frameSum / frameSample > 21 && resolutionScale > .75) { resolutionScale = Math.max(.75, resolutionScale - .1); resize(); } frameSum = frameSample = 0; }
    state.time += dt; assets.wind.value = state.time; state.toast = Math.max(0, state.toast - dt);
    state.hitMarker = Math.max(0, state.hitMarker - dt);
    if (state.phase !== 'playing') state.hurt = Math.max(0, state.hurt - dt);
    if (state.phase === 'playing') {
      drivePlayer(dt); driveEnemies(dt); physics.step(dt); syncModels(); if (fireInputs.size) fire();
      if (state.phase === 'playing') updateGrenades(dt);
      if (state.phase === 'playing') bossCombat.updateShots(dt, playerPosition, navigation, takeDamage, state.skill > 0 && preferences.character === 'ranger' ? .32 : 1, state.level);
      if (state.phase === 'playing') updateSpawning(dt);
      if (state.phase === 'playing' || state.phase === 'clear') updatePickups(dt);
    } else if (state.phase === 'clear') {
      hero.animate(state.time, 0, 0, 1); updatePickups(dt); state.clearTimer -= dt; if (state.clearTimer <= 0) advanceLevel().catch(showDeployError);
    } else if (state.phase === 'ending') {
      finale.update(dt); $('finale-flash').style.opacity = finale.flash;
      hero.animate(state.time, 0, 0, finale.impacted ? 1 : 0); if (finale.done) completeCampaign();
    }
    battlefield.update(dt);
    updateFallen(dt);
    state.ambientTimer -= dt;
    if (state.ambientTimer <= 0) {
      state.ambientTimer = .17;
      const ambientFocus = finale ? cameraFocus : playerPosition, ambientRange = 32 / camera.zoom;
      for (const fire of battlefield.fires) if (fire.distanceToSquared(ambientFocus) < ambientRange * ambientRange) { effects.flame(fire,.48,.33); effects.emit(fire, 2, '#f7b35d', { speed: .35, up: 2, gravity: -1, life: .65, size: .09 }); effects.smoke(fire, 1, '#85867b', .65); }
    }
  }
  effects.update(running ? dt : 0, 0, { strength: state.phase === 'playing' && state.invulnerable > 0 || state.phase === 'ending' && finale.nuclear ? .65 : 0, x: playerPosition.x, y: -.2, z: playerPosition.z, length: .4, width: .3 });
  effects.contacts(playerPosition, enemies); followCamera(running ? dt : 0); updateAimHud();
  tacticalMap.update(playerPosition, facing, enemies, pickups, warnings, camera);
  hudTimer -= dt; if (hudTimer <= 0 || renderDirty) { if (!state.toast) $('toast').classList.remove('show'); updateHud(); hudTimer = .1; }
  composer.render(); renderDirty = false;
}

function thumbnail(category, id) {
  const key = `${category}-${id}`; if (thumbnails.has(key)) return thumbnails.get(key);
  if (!thumbnailRenderer) {
    thumbnailRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, preserveDrawingBuffer: true });
    thumbnailRenderer.setSize(400, 300); thumbnailRenderer.outputColorSpace = THREE.SRGBColorSpace; thumbnailRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  }
  const stage = new THREE.Scene(); stage.background = new THREE.Color('#dce5dd'); stage.environment = assets.environment; stage.environmentIntensity = .7;
  const light = new THREE.DirectionalLight('#fff0d3', 3); light.position.set(-3, 6, 5); stage.add(light, new THREE.HemisphereLight('#f2fbff', '#5e6d5a', 1.8));
  const cam = new THREE.PerspectiveCamera(34, 4 / 3, .1, 200); let model;
  if (category === 'character') { model = createHero(id).group; cam.position.set(1.35, 2.15, 5.6); cam.lookAt(0, 1.12, 0); }
  else if (category === 'weapon') { model = createGun(id); model.rotation.z = -.18; cam.position.set(2.15, 1.5, 2.2); cam.lookAt(0, 0, .32); }
  stage.add(model); thumbnailRenderer.render(stage, cam);
  const image = thumbnailRenderer.domElement.toDataURL('image/png'); disposeModel(model); thumbnails.set(key, image); return image;
}
function updateSummary() { $('garage-summary').textContent = `${HEROES.find(item => item.id === draft.character).name} · ${chapterAt(state.level).name}`; $('depart').innerHTML = '确认英雄<i data-lucide="check"></i>'; iconize(); }
function renderChoices() {
  $('choices').replaceChildren(); $('choices').setAttribute('aria-labelledby', `tab-${selectedTab}`);
  for (const item of catalogs[selectedTab]) {
    const label = document.createElement('label'); label.className = 'choice';
    const input = document.createElement('input'); input.type = 'radio'; input.name = selectedTab; input.value = item.id; input.checked = draft[selectedTab] === item.id;
    const image = document.createElement('img'); image.src = thumbnail(selectedTab, item.id); image.alt = item.name; image.width = 400; image.height = 300;
    const title = document.createElement('span'); title.textContent = item.name; const detail = document.createElement('small'); detail.textContent = item.detail;
    const check = document.createElement('i'); check.dataset.lucide = 'check'; label.append(input, image, title, detail, check); $('choices').appendChild(label);
    input.addEventListener('change', () => { draft[selectedTab] = item.id; updateSummary(); });
  }
  iconize(); updateSummary();
}
function openGarage() { if (state.ready && !state.transitioning && !['ending', 'victory'].includes(state.phase)) { clearInput(); draft = { ...preferences }; $('garage').showModal(); syncCombatClock(); renderChoices(); } }
function closeGarage() { clearInput(); $('garage').close(); syncCombatClock(); renderDirty = true; $('view').focus({ preventScroll: true }); }
function chooseTab(button) {
  selectedTab = button.dataset.tab;
  document.querySelectorAll('[data-tab]').forEach(tab => { tab.setAttribute('aria-selected', String(tab === button)); tab.tabIndex = tab === button ? 0 : -1; }); renderChoices();
}
function bindHold(button, start, stop) {
  button.addEventListener('pointerdown', event => { if (event.button !== 0) return; event.preventDefault(); button.setPointerCapture(event.pointerId); start(); });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, stop);
}
function bind() {
  const route = document.querySelector('.campaign-route');
  CHAPTERS.forEach((chapter, index) => { const item = document.createElement('li'), name = document.createElement('span'), range = document.createElement('small'); name.textContent = chapter.name; range.textContent = index === 5 ? '16' : `${index * 3 + 1} - ${index * 3 + 3}`; item.append(name, range); route.appendChild(item); });
  bindHold($('fire'), () => { if (playing()) { fireInputs.add('touch'); fire(); } }, () => fireInputs.delete('touch'));
  $('skill').addEventListener('click', activateSkill); $('dodge').addEventListener('click', dodge);
  $('grenade').addEventListener('click', throwGrenade);
  $('summon-nuclear').addEventListener('click', summonNuclear);
  $('campaign-restart').addEventListener('click', () => deploy().catch(showDeployError));
  for (const weapon of WEAPONS) { const button = $(`slot-${weapon.id}`); button.querySelector('img').src = thumbnail('weapon', weapon.id); button.addEventListener('click', () => { if (playing()) selectWeapon(weapon.id); }); }
  $('pause').addEventListener('click', () => setPause(!state.paused)); $('resume').addEventListener('click', () => setPause(false));
  $('configure').addEventListener('click', openGarage); $('garage-close').addEventListener('click', closeGarage); $('garage').addEventListener('cancel', clearInput);
  $('garage').addEventListener('close', () => { syncCombatClock(); state.previous = 0; renderDirty = true; });
  $('depart').addEventListener('click', () => { changeHero(draft); closeGarage(); });
  $('randomize').addEventListener('click', () => { for (const [key, list] of Object.entries(catalogs)) draft[key] = choose(list).id; renderChoices(); });
  $('restart').addEventListener('click', () => startLevel(state.level, true)); $('new-run').addEventListener('click', () => deploy().catch(showDeployError));
  $('render-settings').addEventListener('beforetoggle', event => { state.settingsOpen = event.newState === 'open'; clearInput(); syncCombatClock(); state.previous = 0; renderDirty = true; });
  $('render-settings').addEventListener('toggle', event => { if (event.newState === 'closed') $('view').focus({ preventScroll: true }); });
  $('quality').value = preferences.quality; $('quality').addEventListener('change', () => { preferences.quality = $('quality').value; resolutionScale = 1; frameSum = frameSample = 0; resize(); savePreferences(); $('render-settings').hidePopover(); $('view').focus({ preventScroll: true }); });
  const updateSound = () => { $('sound').innerHTML = `<i data-lucide="${preferences.sound ? 'volume-2' : 'volume-x'}"></i>`; $('sound').setAttribute('aria-label', preferences.sound ? '关闭声音' : '开启声音'); $('sound').dataset.tooltip = preferences.sound ? '关闭声音' : '开启声音'; iconize(); };
  updateSound(); $('sound').addEventListener('click', () => { preferences.sound = !preferences.sound; savePreferences(); updateSound(); sound('pickup'); });
  $('photo').addEventListener('click', () => { composer.render(); const link = document.createElement('a'); link.href = renderer.domElement.toDataURL('image/png'); link.download = `老美大战倭寇-${Date.now()}.png`; link.click(); toast('战场留影已保存'); });
  const tabs = [...document.querySelectorAll('[data-tab]')];
  for (const tab of tabs) {
    tab.addEventListener('click', () => chooseTab(tab));
    tab.addEventListener('keydown', event => { if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') { event.preventDefault(); const next = tabs[(tabs.indexOf(tab) + (event.code === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]; chooseTab(next); next.focus(); } });
  }
  window.addEventListener('keydown', event => {
    if ($('garage').open || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    if (event.code === 'Escape' || event.code === 'KeyP') { if (!event.repeat && state.ready && state.phase !== 'victory') setPause(!state.paused); return; }
    if (!playing()) return;
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(event.code)) event.preventDefault();
    if (event.code === 'Space') { fireInputs.add('keyboard'); if (!event.repeat) fire(); return; }
    if (/^(Digit|Numpad)[1-4]$/.test(event.code)) { event.preventDefault(); if (!event.repeat) selectWeapon(WEAPONS[Number(event.code.at(-1)) - 1].id); return; }
    if (event.code === 'KeyG' && !event.repeat) { throwGrenade(); return; }
    if (event.code === 'KeyN' && !event.repeat) { event.preventDefault(); summonNuclear(); return; }
    if (event.code === 'KeyE' && !event.repeat) { activateSkill(); return; }
    if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && !event.repeat) { dodge(); return; }
    keys.add(event.code);
  });
  window.addEventListener('keyup', event => { keys.delete(event.code); if (event.code === 'Space') fireInputs.delete('keyboard'); });
  $('view').addEventListener('contextmenu', event => event.preventDefault());
  window.addEventListener('blur', () => { clearInput(); if (state.ready && !['gameover', 'victory'].includes(state.phase) && !$('garage').open) setPause(true); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) { clearInput(); if (state.ready && !['gameover', 'victory'].includes(state.phase)) setPause(true); } });
  window.addEventListener('resize', resize);
}
async function initialize() {
  iconize(); renderer = new THREE.WebGLRenderer({ canvas: $('view'), antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.08;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene(); scene.add(silhouette); camera = new THREE.OrthographicCamera(-18, 18, 12, -12, .1, 260); camera.position.set(0, 24, 34); camera.lookAt(0, .5, 0); camera.updateMatrixWorld();
  assets = await loadAssets(value => $('load-progress').value = value);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromEquirectangular(assets.environment).texture; scene.environmentIntensity = .65; pmrem.dispose();
  sun = new THREE.DirectionalLight('#fff2d8', 3.2); sun.position.set(-16, 28, 16); sun.castShadow = true; sun.shadow.mapSize.set(2048,2048); sun.shadow.bias = -.0002; sun.shadow.normalBias = .035;
  Object.assign(sun.shadow.camera, { left: -27, right: 27, top: 27, bottom: -27, near: 1, far: 90 }); scene.add(sun, sun.target, new THREE.HemisphereLight('#dff0ff', '#777b65', 1.2));
  const rim = new THREE.DirectionalLight('#bfdcd9', 1.1); rim.position.set(8, 8, -12); scene.add(rim);
  composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  bloom = new UnrealBloomPass(new THREE.Vector2(900, 600), .28, .45, 1.25); composer.addPass(bloom); composer.addPass(new OutputPass()); composer.addPass(new SMAAPass());
  effects = new Effects(scene, camera); resize(); physics = new CombatPhysics(); bossCombat = new BossCombat(scene, effects); tacticalMap = new TacticalMap($('tactical-map'), $('district-name'), $('map-position'));
  for (const item of HEROES) thumbnail('character', item.id);
  bind(); state.ready = true; await deploy(); $('load-progress').value = 100;
  requestAnimationFrame(frame);
}
async function warmCombat() {
  const stage = new THREE.Group(), models = ['raider', 'heavy', 'boss', 'emperor'].map(createEnemy), items = [...WEAPONS.map(weapon => createPickup(weapon.id)), createPickup('grenade')];
  models.forEach((model, i) => { model.group.position.set(-3 + i * 3, 0, -4); stage.add(model.group); });
  items.forEach((item, i) => { item.position.set(-3 + i * 2, 0, 3); stage.add(item); });
  stage.position.copy(playerPosition); scene.add(stage);
  effects.arc(point(1), heroInfo().color, 1.4, 0); effects.shield.visible = true;
  try { await renderer.compileAsync(scene, camera); composer.render(); }
  finally { models.forEach(releaseEnemy); items.forEach(disposeModel); stage.removeFromParent(); effects.clear(); effects.shield.visible = false; }
}
function showDeployError(error) {
  console.error(error); $('loading-state').textContent = '战场加载失败'; const retry = document.createElement('button'); retry.className = 'depart'; retry.textContent = '重新加载'; retry.addEventListener('click', () => location.reload()); $('loading-state').after(retry);
}
initialize().catch(showDeployError);
