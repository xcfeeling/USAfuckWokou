import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { SMAAPass } from 'three/addons/postprocessing/SMAAPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { createIcons, Camera, VolumeX, Volume2, Pause, Play, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCcw, Sparkles, SlidersHorizontal, Dices, Check, Target, Shield, Zap, Bomb, Monitor, Trophy, RefreshCw, Send, Move } from 'lucide';
import { loadAssets } from './assets.js';
import { HEROES, WEAPONS, ENEMY_NAMES, isBossType, createHero, createEnemy, releaseEnemy, createGun, createGrenade, createPickup, disposeModel } from './chibi.js';
import { createBattlefield } from './battlefield.js';
import { CAMPAIGN, CHAPTERS, ENEMY_SCORES, missionAt, chapterAt } from './campaign.js';
import { CampaignFinale } from './campaign-finale.js';
import { CombatPhysics } from './combat-physics.js';
import { Navigation } from './navigation.js';
import { TacticalMap } from './tactical-map.js';
import { BossCombat } from './boss-combat.js';
import { Effects } from './effects.js';
import { Leaderboard } from './leaderboard.js';
import { calculateResult } from './score-rules.js';
import { TouchJoystick } from './touch-joystick.js';
import { Disasters } from './disasters.js';
import { TravelSequence } from './travel-sequence.js';

const elements = new Map();
const $ = id => { if (!elements.has(id)) elements.set(id, document.getElementById(id)); return elements.get(id); };
const random = (min, max) => min + Math.random() * (max - min);
const choose = list => list[Math.floor(Math.random() * list.length)];
const icons = { Camera, VolumeX, Volume2, Pause, Play, X, ArrowRight, ArrowLeft, ArrowUp, ArrowDown, RotateCcw, Sparkles, SlidersHorizontal, Dices, Check, Target, Shield, Zap, Bomb, Monitor, Trophy, RefreshCw, Send, Move };
const iconize = () => createIcons({ icons, attrs: { 'stroke-width': 1.8 } });
const catalogs = { character: HEROES };
const touchDevice = navigator.userAgentData?.mobile === true || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints > 1 && matchMedia('(pointer: coarse)').matches;
document.body.classList.toggle('touch-device', touchDevice);
$('touch-joystick').hidden = !touchDevice;
const qualityKey = touchDevice ? 'mobileQuality' : 'quality', MAX_GRENADES = 3;
let savedPreferences = {}, preferences = { character: 'captain', sound: false, quality: touchDevice ? 'performance' : 'balanced' };
try {
  const saved = savedPreferences = JSON.parse(localStorage.getItem('frontline-arena-v8') || '{}');
  for (const [key, list] of Object.entries(catalogs)) if (list.some(item => item.id === saved[key])) preferences[key] = saved[key];
  preferences.sound = saved.sound === true;
  if (['performance', 'balanced', 'high'].includes(saved[qualityKey])) preferences.quality = saved[qualityKey];
} catch {}
const savePreferences = () => { try { localStorage.setItem('frontline-arena-v8', JSON.stringify({ ...savedPreferences, character: preferences.character, sound: preferences.sound, [qualityKey]: preferences.quality })); } catch {} };
const heroInfo = () => HEROES.find(item => item.id === preferences.character);
const weaponInfo = () => WEAPONS.find(item => item.id === state.weapon);
const startingInventory = () => Object.fromEntries(WEAPONS.map(weapon => [weapon.id, { owned: weapon.id === 'pistol', ammo: weapon.id === 'pistol' ? -1 : 0, rank: 0 }]));
const weaponDamage = (weapon = weaponInfo()) => weapon.damage * (1 + state.inventory[weapon.id].rank * .05);
let renderer, camera, composer, bloom, smaa, scene, assets, battlefield, physics, effects, hero, sun, skyLight, navigation, tacticalMap, bossCombat;
let thumbnailRenderer, audioContext, selectedTab = 'character', draft, checkpoint, finale, leaderboard, joystick, releaseFire, disasters, travel, renderPass;
const enemies = [], fallen = [], pickups = [], warnings = [], grenades = [], keys = new Set(), fireInputs = new Set(), thumbnails = new Map(), soundBuffers = new Map();
let hudTimer = 0, renderDirty = true, resolutionScale = 1, frameSample = 0, frameSum = 0;
let combatStartedAt = null;
const viewport = { width: 1, height: 1, span: 24 };
const playerPosition = new THREE.Vector3(), facing = new THREE.Vector3(0, 0, 1), movement = new THREE.Vector3();
const cameraFocus = new THREE.Vector3(0, .5, 0), cameraOffset = new THREE.Vector3(0, 23.5, 34), sunOffset = new THREE.Vector3(-22, 34, 14);
const muzzlePosition = new THREE.Vector3(), axisY = new THREE.Vector3(0, 1, 0);
const raycaster = new THREE.Raycaster(), shotDirection = new THREE.Vector3(), aimProjection = new THREE.Vector3();
const dashDirection = new THREE.Vector3();
const silhouette = new THREE.Group(), silhouetteParts = [], silhouetteMaterial = new THREE.MeshBasicMaterial({ color: '#87dce8', transparent: true, opacity: .22, depthTest: false, depthWrite: false });
const state = {
  ready: false, phase: 'playing', paused: false, time: 0, previous: 0, level: 1,
  total: CAMPAIGN[0].total, scheduled: 0, kills: 0, score: 0, health: 120, weapon: 'pistol', inventory: startingInventory(), grenades: 2, grenadeCooldown: 0,
  spawnTimer: 2.2, shotTimer: 0, recoil: 0, hurt: 0, invulnerable: 0, dash: 0, dashCooldown: 0,
  skill: 0, skillCooldown: 0, combo: 0, comboTimer: 0, clearTimer: 0, toast: 0, ambientTimer: 0, dropPity: 0, grenadeDrops: 0,
  transitioning: false, hitMarker: 0, supportUnlocked: false, combatSeconds: 0, result: null, settingsOpen: false, bossSupply: false
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
function clearInput() { keys.clear(); fireInputs.clear(); movement.set(0, 0, 0); joystick?.reset(); releaseFire?.(); }
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
  scene.background = new THREE.Color(chapter.sky); scene.fog = new THREE.Fog(scene.background, 82, 180);
  sun.color.set(chapter.sun); sun.intensity = chapter.id === 'jungle' ? 3.2 : chapter.id === 'city' ? 3.5 : 3.6;
  skyLight.color.set(chapter.sky).lerp(new THREE.Color('#ffffff'), .55);
  skyLight.groundColor.set(chapter.ground).multiplyScalar(.55);
  scene.environmentIntensity = .45;
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
    button.classList.toggle('unowned', !slot.owned);
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
  const roll = Math.random(), ranged = enemies.filter(enemy => enemy.type === 'soldier').length + warnings.filter(warning => warning.type === 'soldier').length;
  const type = serial >= mission.regularCount ? mission.bosses[serial - mission.regularCount] : roll < mission.soldierChance && ranged < 3 ? 'soldier' : roll < mission.soldierChance + mission.heavyChance ? 'heavy' : 'raider';
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
  const health = Math.round(warning.type === 'emperor' ? mission.emperorHealth : warning.type === 'officer' ? mission.officerHealth : isBoss ? mission.bossHealth : 34 * mission.healthScale * (warning.type === 'heavy' ? 2.4 : warning.type === 'soldier' ? 1.55 : 1));
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
  if (mission.bosses.length && state.scheduled >= mission.regularCount && state.kills < mission.regularCount) return;
  if (mission.bosses.length && state.scheduled === mission.regularCount && state.kills === mission.regularCount && !state.bossSupply) {
    state.bossSupply = true; state.spawnTimer = 4.5; state.health = Math.min(heroInfo().health, state.health + 22);
    dropWeapon(playerPosition, 'rifle'); toast('首领接近 · 战地补给抵达'); return;
  }
  if (state.scheduled < state.total && enemies.length + warnings.length < mission.maxAlive && state.spawnTimer <= 0) {
    scheduleEnemy(); state.spawnTimer = mission.spawnInterval * random(.65, 1.4);
  }
}
function dropWeapon(position, forcedId) {
  const groundWeapons = pickups.filter(pickup => pickup.kind === 'weapon');
  if (groundWeapons.length >= 5) {
    if (!forcedId) return false;
    const oldest = groundWeapons[0]; disposeModel(oldest.group); pickups.splice(pickups.indexOf(oldest), 1);
  }
  const missing = WEAPONS.slice(1).filter(item => !state.inventory[item.id].owned);
  const weapon = forcedId ? WEAPONS.find(item => item.id === forcedId) : choose(missing.length && Math.random() < .7 ? missing : WEAPONS.slice(1)), group = createPickup(weapon.id);
  group.position.copy(position); scene.add(group); pickups.push({ group, kind: 'weapon', weapon, life: 45, phase: random(0, 6) }); effects.ring(position, weapon.color, 1.5);
  return true;
}
function dropGrenade(position) {
  if (state.grenades + pickups.filter(pickup => pickup.kind === 'grenade').length >= MAX_GRENADES) return false;
  const group = createPickup('grenade'); group.position.copy(position); scene.add(group);
  if (navigation.isOpen(position.x + .85, position.z)) group.position.x += .85;
  pickups.push({ group, kind: 'grenade', life: 45, phase: random(0, 6) }); effects.ring(position, '#b9e385', 1.5);
  return true;
}
function removeEnemy(enemy, defeated = false) {
  const index = enemies.indexOf(enemy); if (index === -1) return;
  bossCombat.remove(enemy);
  enemies.splice(index, 1); if (!enemy.downed) physics.removeEnemy(enemy.body); disposeModel(enemy.bar); disposeModel(enemy.warning);
  if (defeated) {
    if (fallen.length >= 8) releaseEnemy(fallen.shift().model);
    fallen.push({ model: enemy.model, life: 1.25, direction: facing.clone(), angle: random(-.3, .3) });
  } else releaseEnemy(enemy.model);
}
function awardEnemy(enemy) {
  if (enemy.counted) return;
  enemy.counted = true; state.kills++; state.score += ENEMY_SCORES[enemy.type] * state.level;
}
function damageEnemy(enemy, damage, impact, source = 'bullet') {
  if (state.phase !== 'playing' || enemy.downed || !enemies.includes(enemy)) return;
  if (isBossType(enemy.type) && source === 'bullet') damage *= enemy.stagger > 0 || enemy.bossMode === 'recover' ? 1.1 : .76;
  enemy.health -= damage;
  enemy.hit = .15; state.hitMarker = .13;
  effects.hit(impact, facing, enemy.type !== 'raider');
  if (enemy.health > 0) return;
  if (enemy.type === 'emperor') {
    awardEnemy(enemy); enemy.health = 0; enemy.downed = true; enemy.body.velocity.setZero(); physics.removeEnemy(enemy.body); bossCombat.remove(enemy);
    enemy.bar.visible = enemy.warning.visible = false; enemy.model.animate(state.time, 0, 0, 'stagger'); enemy.model.group.rotation.x = -1.45; enemy.model.group.position.y = .2;
    effects.burst(enemy.model.group.position, 'crash');
    if (state.kills === state.total) beginFinale(enemy, false); else toast('天皇已倒下 · 清除剩余护卫');
    return;
  }
  const position = enemy.model.group.position.clone();
  awardEnemy(enemy);
  state.combo++; state.comboTimer = 3; state.dropPity++;
  effects.emit(position.clone().setY(.85), 18, enemy.type === 'boss' ? '#ffd186' : '#edc493', { direction: facing, speed: 2.6, up: 2.5, gravity: 9, life: .45, size: .09 });
  effects.debrisBurst(position.clone().setY(.7), enemy.type === 'heavy' ? 9 : 4, enemy.type === 'heavy' ? '#90999d' : '#a99e82');
  effects.smoke(position, 3, '#a4a499', .65);
  if (isBossType(enemy.type)) { effects.burst(position, 'crash'); dropWeapon(position); dropGrenade(position); }
  else {
    const firstWeapon = state.level === 1 && state.kills === 2 && !state.inventory.rifle.owned;
    if (firstWeapon || state.dropPity >= 6 || Math.random() < .22) {
      if (dropWeapon(position, firstWeapon ? 'rifle' : undefined)) state.dropPity = 0;
    }
    if (state.grenadeDrops < (state.level < 7 ? 1 : 2) && Math.random() < .06 && dropGrenade(position)) state.grenadeDrops++;
  }
  removeEnemy(enemy, true);
  if (state.kills === state.total) {
    const emperor = enemies.find(item => item.type === 'emperor');
    if (emperor) beginFinale(emperor, false); else clearLevel();
  }
}
function addTracer(start, end, color) {
  if (start.distanceToSquared(end) < .0001) return;
  effects.tracer(start, end, color, state.weapon === 'rail' ? .028 : .013, state.weapon === 'rail' ? .13 : .065);
}
function fire() {
  if (!playing() || state.shotTimer > 0) return;
  const weapon = weaponInfo(), boost = state.skill > 0 && preferences.character === 'armor' ? 1.5 : 1;
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
      if (enemy.downed) continue;
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
      if (enemy.downed) continue;
      const direction = new THREE.Vector3(enemy.body.position.x - position.x, 0, enemy.body.position.z - position.z), distance = direction.length();
      if (distance > 5.5 + (enemy.model.radius || .42)) continue;
      const target = new THREE.Vector3(enemy.body.position.x, .85, enemy.body.position.z), origin = position.clone().add(new THREE.Vector3(0, .12, 0));
      const separation = target.distanceTo(origin); raycaster.set(origin, target.sub(origin).normalize());
      if (navigation.shotDistance(raycaster.ray, separation) < separation - .05) continue;
      damageEnemy(enemy, 170 * Math.max(.5, 1 - distance / 12), enemy.model.group.position.clone().setY(.8), 'grenade');
      if (state.phase !== 'playing' || !enemies.includes(enemy)) continue;
      if (direction.lengthSq() < .01) direction.copy(facing); else direction.normalize();
      physics.knockback(enemy.body, direction, isBossType(enemy.type) ? 9 : 12);
      enemy.stagger = isBossType(enemy.type) ? .9 : 1.1; enemy.windup = 0; enemy.routeTimer = 0;
      if (isBossType(enemy.type) || enemy.type === 'soldier') bossCombat.interrupt(enemy);
    }
  }
}
function takeDamage(amount, source = 'enemy') {
  if (state.invulnerable > 0 || state.phase !== 'playing') return;
  if (source === 'enemy') amount *= missionAt(state.level).damageScale;
  state.health = Math.max(0, state.health - amount); state.hurt = .24; state.invulnerable = .65;
  // Catch the first threshold crossing, including a hit that would otherwise be fatal.
  if (!state.supportUnlocked && state.health <= heroInfo().health * .05 && enemies.some(enemy => enemy.type === 'emperor')) {
    state.health = Math.max(state.health, heroInfo().health * .05); unlockSupport();
  }
  effects.emit(point(), 21, '#ff8879', { speed: 3, up: 2, life: .4, size: .12 }); sound('hurt');
  if (!state.health) {
    disasters.clear(); battlefield.setDisaster?.(null, 0);
    state.phase = 'gameover'; syncCombatClock(); clearInput(); $('game-over').hidden = false;
    $('game-over-score').textContent = state.score.toLocaleString('zh-CN'); $('failed-level').textContent = state.level;
    state.result = calculateResult(state.score, state.combatSeconds, 'defeat');
    $('game-over-time').textContent = formatTime(state.result.seconds);
    document.body.classList.add('result-shown');
    leaderboard.show({ ...state.result, level: state.level, outcome: 'defeat' }, $('defeat-leaderboard'));
  }
}
function unlockSupport() {
  if (state.supportUnlocked) return;
  state.supportUnlocked = true; state.invulnerable = Math.max(state.invulnerable, 8);
  $('nuclear-support').hidden = false; toast(touchDevice ? '紧急支援已就绪' : '紧急支援已就绪 · 按 N 召唤核弹'); sound('pickup');
}
function summonNuclear() {
  if (!playing() || !state.supportUnlocked) return;
  const emperor = enemies.find(enemy => enemy.type === 'emperor'); if (emperor) beginFinale(emperor, true);
}
function beginFinale(emperor, nuclear) {
  if (state.phase !== 'playing') return;
  state.phase = 'ending'; syncCombatClock(); clearInput(); physics.player.velocity.setZero(); emperor.body.velocity.setZero();
  const targets = enemies.filter(enemy => isBossType(enemy.type));
  for (const enemy of targets) { enemy.body.velocity.setZero(); bossCombat.remove(enemy); }
  bossCombat.clear(); disasters.clear();
  for (const grenade of [...grenades]) removeGrenade(grenade);
  $('nuclear-support').hidden = true; document.body.classList.add('cinematic');
  finale = new CampaignFinale(scene, effects, battlefield, emperor, playerPosition, nuclear, () => {
    for (const enemy of targets) awardEnemy(enemy); sound('explosion');
  }, targets);
  toast(nuclear ? '核弹支援抵达' : '最终目标已击破'); updateHud();
}
function completeCampaign() {
  if (state.phase !== 'ending') return;
  state.phase = 'victory'; $('campaign-victory').hidden = false;
  state.result = calculateResult(state.score, state.combatSeconds, 'victory');
  $('victory-score').textContent = state.result.total.toLocaleString('zh-CN');
  $('victory-base').textContent = state.score.toLocaleString('zh-CN');
  $('victory-time').textContent = formatTime(state.result.seconds);
  $('victory-bonus').textContent = `+${state.result.bonus.toLocaleString('zh-CN')}`;
  $('victory-result').textContent = finale.nuclear ? '核弹命中 · 皇宫已化为废墟' : '最终首领击败 · 皇宫防线崩溃';
  document.body.classList.add('victory-shown', 'result-shown');
  leaderboard.show({ ...state.result, level: state.level, outcome: 'victory' }, $('victory-leaderboard'));
  sound('pickup'); updateHud();
}
function dodge() {
  if (!playing() || state.dashCooldown > 0) return;
  dashDirection.copy(movement.lengthSq() > .01 ? movement : facing).normalize();
  state.dash = .22; state.dashCooldown = 1.7; state.invulnerable = Math.max(state.invulnerable, .48);
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
    for (const enemy of [...enemies]) if (enemy.model.group.position.distanceTo(playerPosition) < 6 && navigation.unobstructed(playerPosition, enemy.body.position, false)) damageEnemy(enemy, 95 * (1 + Math.min(10, state.level - 1) * .04), enemy.model.group.position.clone().setY(.8), 'skill');
    state.skill = .9;
  }
  toast(heroInfo().skill); sound('pickup');
}
function drivePlayer(dt) {
  movement.set(Number(keys.has('ArrowRight') || keys.has('KeyD')) - Number(keys.has('ArrowLeft') || keys.has('KeyA')), 0, Number(keys.has('ArrowDown') || keys.has('KeyS')) - Number(keys.has('ArrowUp') || keys.has('KeyW')));
  if (movement.lengthSq()) movement.normalize();
  else if (joystick) movement.set(joystick.x, 0, joystick.y);
  if (movement.lengthSq()) facing.copy(movement).normalize();
  const speed = heroInfo().speed;
  physics.player.velocity.set(state.dash > 0 ? dashDirection.x * 13 : movement.x * speed, 0, state.dash > 0 ? dashDirection.z * 13 : movement.z * speed);
  for (const field of ['shotTimer', 'recoil', 'hurt', 'invulnerable', 'dash', 'dashCooldown', 'skill', 'skillCooldown', 'comboTimer', 'grenadeCooldown']) state[field] = Math.max(0, state[field] - dt * (field === 'recoil' ? 9 : 1));
  if (state.comboTimer === 0) state.combo = 0;
}
function driveEnemies(dt) {
  const slow = state.skill > 0 && preferences.character === 'ranger' ? .32 : 1;
  navigation.searchesRemaining = 2;
  for (const enemy of enemies) {
    if (enemy.downed) continue;
    enemy.hit = Math.max(0, enemy.hit - dt);
    if (enemy.stagger > 0) {
      enemy.stagger = Math.max(0, enemy.stagger - dt); enemy.body.velocity.x *= Math.exp(-dt * 3.4); enemy.body.velocity.z *= Math.exp(-dt * 3.4);
      enemy.model.animate(state.time, 0, 0, 'stagger'); continue;
    }
    const tactical = isBossType(enemy.type) || enemy.type === 'soldier';
    if (tactical && bossCombat.update(enemy, dt, { player: playerPosition, time: state.time, level: state.level, slow, navigation, takeDamage, toast })) continue;
    const dx = playerPosition.x - enemy.body.position.x, dz = playerPosition.z - enemy.body.position.z, distance = Math.hypot(dx, dz);
    const attackRange = 1.25 + (enemy.model.scale - 1) * .5;
    const canAttack = !tactical && distance < attackRange + .55 && navigation.unobstructed(enemy.body.position, playerPosition, false);
    enemy.strike = Math.max(0, enemy.strike - dt * 3); enemy.attack = Math.max(0, enemy.attack - dt * slow);
    if (enemy.windup > 0) {
      enemy.windup -= dt * slow;
      if (enemy.windup <= 0) {
        enemy.strike = 1; enemy.attack = Math.max(1, 1.55 - state.level * .018);
        if (canAttack) takeDamage(enemy.type === 'boss' ? 27 : enemy.type === 'heavy' ? 18 : 11);
        effects.slash(enemy.model.group.position.clone().setY(.8), enemy.model.group.rotation.y, 1.05);
      }
    } else if (canAttack && distance < attackRange + .3 && enemy.attack === 0) enemy.windup = .62;
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
    if (enemy.downed) continue;
    enemy.model.group.position.set(enemy.body.position.x, 0, enemy.body.position.z);
    const ratio = Math.max(0, enemy.health / enemy.maxHealth);
    enemy.bar.position.set(enemy.body.position.x, enemy.model.barHeight || 2.38 * enemy.model.scale, enemy.body.position.z);
    enemy.fill.scale.x = ratio; enemy.fill.position.x = -.47 * (1 - ratio);
    enemy.warning.position.set(enemy.body.position.x, .04, enemy.body.position.z); enemy.warning.material.opacity = enemy.windup > 0 ? .35 + (.62 - enemy.windup) : 0;
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
  if (pickup.kind === 'grenade') { state.grenades = Math.min(MAX_GRENADES, state.grenades + 1); toast('手雷 +1'); }
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
    const available = pickup.kind === 'grenade' ? state.grenades < MAX_GRENADES : state.inventory[pickup.weapon.id].ammo < pickup.weapon.maxAmmo || state.inventory[pickup.weapon.id].rank < 10;
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
  disasters.clear(); battlefield.setDisaster?.(null, 0);
  for (const grenade of [...grenades]) removeGrenade(grenade); bossCombat.clear();
  $('level-clear').hidden = false; $('level-clear-value').textContent = state.level;
  $('next-level').textContent = `下一关 · ${chapterAt(state.level + 1).name} / ${missionAt(state.level + 1).name}`;
  effects.burst(point(.3), 'success'); sound('pickup');
}
function clearCombat() {
  disasters?.clear(); battlefield?.setDisaster?.(null, 0);
  leaderboard.hide(); state.result = null;
  finale?.dispose(); finale = null; camera.zoom = 1; camera.updateProjectionMatrix();
  document.body.classList.remove('cinematic', 'victory-shown', 'result-shown'); $('finale-flash').style.opacity = 0;
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
  state.phase = 'playing'; state.scheduled = state.kills = state.dropPity = state.grenadeDrops = 0; state.bossSupply = false; state.spawnTimer = 2.1; state.invulnerable = 1.5;
  disasters.reset(mission, retry);
  for (const field of ['shotTimer', 'recoil', 'hurt', 'dash', 'dashCooldown', 'skill', 'skillCooldown', 'combo', 'comboTimer', 'clearTimer', 'grenadeCooldown']) state[field] = 0;
  physics.player.position.set(position.x, .6, position.z); playerPosition.copy(position); facing.set(0, 0, 1); hero.equip(state.weapon);
  checkpoint = { loadout: structuredClone({ score: state.score, inventory: state.inventory, weapon: state.weapon, grenades: state.grenades }), position: position.clone() };
  $('place').textContent = `${chapterAt(level).name} / ${mission.name}`;
  $('chapter-progress').textContent = `${mission.stage + 1} / ${chapterAt(level).missions.length}`;
  document.querySelectorAll('.campaign-route li').forEach((item, index) => { item.classList.toggle('current', index === mission.chapterIndex); item.classList.toggle('complete', index < mission.chapterIndex); if (index === mission.chapterIndex) item.setAttribute('aria-current', 'step'); else item.removeAttribute('aria-current'); });
  $('game-over').hidden = $('level-clear').hidden = true; setPause(false); syncModels(); followCamera(0, true); updateSilhouette(); updateWeaponHud(); updateHud(); toast(`第 ${level} / ${CAMPAIGN.length} 关 · ${mission.name}${mission.bosses.length ? ' · 首领战' : ''}`);
}
async function advanceLevel() {
  if (state.transitioning || !missionAt(state.level + 1)) return;
  const level = state.level + 1, changeScene = battlefield.type !== missionAt(level).chapter;
  if (!changeScene) { startLevel(level); return; }
  state.transitioning = true; syncCombatClock(); clearInput();
  $('loading').hidden = false; $('loading').classList.remove('done'); $('loading-state').textContent = `正在前往${chapterAt(level).name}`; $('load-progress').value = 85;
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  startLevel(level); await warmCombat();
  beginTravel(missionAt(level).chapterIndex);
}
async function deploy() {
  if (state.transitioning) return;
  state.transitioning = true; syncCombatClock(); clearInput();
  $('loading').hidden = false; $('loading').classList.remove('done'); $('loading-state').textContent = '正在部署战场'; $('load-progress').value = 90;
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  state.score = state.combatSeconds = 0; state.result = null; state.weapon = 'pistol'; state.inventory = startingInventory(); state.grenades = 2;
  applyHero(); startLevel(1); resize();
  await warmCombat();
  savePreferences(); frameSum = frameSample = 0; beginTravel(0); $('load-progress').value = 100;
}
function beginTravel(index) {
  state.transitioning = true; syncCombatClock(); clearInput(); travel.start(index, preferences.character);
  document.body.classList.add('traveling'); $('travel-overlay').hidden = false;
  $('travel-chapter').textContent = `战役 ${String(index + 1).padStart(2, '0')} / 06`;
  $('travel-title').textContent = CHAPTERS[index].name;
  $('travel-route').textContent = `${index * 5 + 1}${index < 5 ? ` - ${index * 5 + 5}` : ''} 关 · ${index ? '车队推进' : '乘艇登陆'}`;
  $('loading').hidden = true; $('loading').classList.add('done'); $('crosshair').hidden = true; state.previous = 0; renderDirty = true;
}
function finishTravel() {
  if (!travel?.active) return;
  travel.stop(); document.body.classList.remove('traveling'); $('travel-overlay').hidden = true;
  renderPass.scene = scene; renderPass.camera = camera; state.transitioning = false; clearInput(); followCamera(0, true);
  state.previous = 0; state.spawnTimer = 2.1; syncCombatClock(); updateHud(); renderDirty = true; frameSum = frameSample = 0; $('view').focus({ preventScroll: true });
}
function renderTravel(dt) {
  const running = !state.paused && !document.hidden && !state.settingsOpen;
  if (!running && !renderDirty) return;
  if (running) { travel.update(dt, viewport.width / viewport.height); battlefield.update(dt); }
  if (travel.done) { finishTravel(); return; }
  if (travel.panorama > 0) {
    renderPass.scene = scene; renderPass.camera = camera;
    const progress = travel.panorama, destination = playerPosition.clone(); destination.y = .5; if (battlefield.type === 'fuji') destination.z -= touchDevice ? 3 : 14;
    cameraFocus.copy(battlefield.panoramaFocus).lerp(destination, progress);
    camera.zoom = THREE.MathUtils.lerp(.28, battleZoom(), progress); camera.updateProjectionMatrix();
    camera.position.copy(cameraFocus).add(cameraOffset); camera.lookAt(cameraFocus); camera.updateMatrixWorld();
    sun.target.position.copy(cameraFocus); sun.position.copy(cameraFocus).add(sunOffset); sun.target.updateMatrixWorld();
    hero.animate(travel.time, 0); silhouette.visible = false;
    $('travel-route').textContent = `${CHAPTERS[travel.index].name} · 战场抵达`;
  } else { renderPass.scene = travel.scene; renderPass.camera = travel.camera; }
  $('travel-progress').value = travel.time / travel.duration;
  composer.render(); renderDirty = false;
}
function setPause(value) {
  if (!value && $('render-settings').matches(':popover-open')) $('render-settings').hidePopover();
  clearInput(); state.paused = value; syncCombatClock(); state.previous = 0; renderDirty = true; hudTimer = 0; $('pause-screen').hidden = !value;
  $('pause').innerHTML = `<i data-lucide="${value ? 'play' : 'pause'}"></i>`;
  $('pause').setAttribute('aria-label', value ? '继续' : '暂停'); $('pause').dataset.tooltip = value ? '继续' : '暂停'; iconize();
}
function updateHud() {
  $('level').textContent = String(state.level).padStart(2, '0'); $('kills').textContent = `${state.kills} / ${state.total}`; $('score').textContent = state.score.toLocaleString('zh-CN');
  $('battle-time').textContent = formatTime(state.combatSeconds);
  $('health-value').textContent = Math.ceil(state.health); $('health-bar').style.width = `${state.health / heroInfo().health * 100}%`; $('wave-progress').style.width = `${state.kills / state.total * 100}%`;
  $('skill-time').textContent = Math.ceil(state.skillCooldown) || ''; $('skill').classList.toggle('cooling', state.skillCooldown > 0); $('skill').disabled = state.skillCooldown > 0 || !playing();
  $('dodge').disabled = state.dashCooldown > 0 || !playing(); $('combo').classList.toggle('show', state.combo > 1); $('combo-value').textContent = state.combo;
  if (joystick) $('touch-joystick').classList.toggle('unavailable', !playing());
  $('grenade').disabled = !playing() || state.grenades === 0 || state.grenadeCooldown > 0;
  $('fire').disabled = !playing();
  for (const weapon of WEAPONS) { const slot = state.inventory[weapon.id]; $(`slot-${weapon.id}`).disabled = !playing() || !slot.owned || slot.ammo === 0; }
  const bosses = state.phase === 'playing' ? enemies.filter(enemy => isBossType(enemy.type) && !enemy.downed) : [];
  const boss = bosses.find(enemy => enemy.type === 'emperor') || bosses[0]; $('boss-panel').hidden = !boss; document.body.classList.toggle('boss-active', Boolean(boss));
  if (boss) {
    $('boss-name').textContent = boss.name;
    $('boss-health').textContent = `${Math.ceil(boss.health)} / ${boss.maxHealth}`; $('boss-health-bar').style.width = `${Math.max(0, boss.health / boss.maxHealth * 100)}%`;
    $('boss-phase').textContent = boss.stagger > 0 ? '失衡' : boss.bossMode === 'recover' ? boss.type === 'officer' ? '换弹 · 破绽' : '破绽' : boss.bossMode === 'windup' ? {charge:'拔刀突进',cleave:'回旋斩',volley:'刀气齐射',arrows:'弓箭齐射',rifle:'举枪瞄准',blade:'军刀斩击'}[boss.bossAttack] : boss.bossMode === 'charge' ? '突进' : boss.bossMode === 'burst' ? '短连射' : boss.enraged ? '狂怒' : '逼近';
    $('boss-panel').classList.toggle('enraged', Boolean(boss.enraged)); $('boss-panel').classList.toggle('vulnerable', boss.stagger > 0 || boss.bossMode === 'recover');
  }
  const escorts = bosses.filter(enemy => enemy !== boss);
  for (let i = 0; i < 2; i++) {
    const row = $(`escort-${i}`), enemy = escorts[i]; row.hidden = !enemy;
    if (enemy) { row.querySelector('span').textContent = `${enemy.name} ${i + 1}`; row.querySelector('progress').value = Math.max(0, enemy.health / enemy.maxHealth); }
  }
  const hazard = state.phase === 'playing' && !state.transitioning ? disasters.status(playerPosition) : null;
  $('disaster-panel').hidden = !hazard;
  if (hazard) {
    $('disaster-title').textContent = hazard.title; $('disaster-status').textContent = hazard.detail; $('disaster-panel').classList.toggle('safe', hazard.safe);
    $('disaster-arrow').style.transform = `rotate(${Math.atan2(disasters.center.x - playerPosition.x, playerPosition.z - disasters.center.z)}rad)`;
  }
  $('damage-overlay').classList.toggle('show', state.hurt > 0); $('fire').classList.toggle('active', fireInputs.size > 0 && playing());
  $('nuclear-support').hidden = !state.supportUnlocked || state.phase !== 'playing'; $('summon-nuclear').disabled = !playing();
  $('support-status').textContent = state.invulnerable > 0 ? `紧急保护 ${Math.ceil(state.invulnerable)} 秒` : '紧急支援已就绪';
  $('configure').disabled = state.transitioning || state.phase === 'ending' || state.phase === 'victory'; $('pause').disabled = state.phase === 'victory';
  document.querySelector('.status-label').textContent = { gameover: '失去战斗能力', clear: '区域安全', ending: '最终目标击破', victory: '战役胜利' }[state.phase] || '作战中';
}
function updateAimHud() {
  aimProjection.copy(playerPosition).addScaledVector(facing, 2.5); aimProjection.y = .2; aimProjection.project(camera);
  $('crosshair').style.transform = `translate(${(aimProjection.x * .5 + .5) * viewport.width}px,${(-aimProjection.y * .5 + .5) * viewport.height}px)`; $('crosshair').hidden = state.phase !== 'playing';
  $('crosshair').classList.toggle('hit', state.hitMarker > 0);
}
function battleZoom() { return battlefield.type === 'fuji' ? Math.min(1, viewport.span / 48) : 1; }
function followCamera(dt, snap = false) {
  const blend = snap ? 1 : 1 - Math.exp(-dt * 9);
  const target = finale ? finale.focus : playerPosition, cameraBlend = finale ? 1 - Math.exp(-dt * 1.5) : blend;
  cameraFocus.x += (target.x - cameraFocus.x) * cameraBlend; cameraFocus.z += (target.z - (!finale && battlefield.type === 'fuji' ? touchDevice ? 3 : 14 : 0) - cameraFocus.z) * cameraBlend;
  cameraFocus.y += ((finale ? finale.focus.y : .5) - cameraFocus.y) * cameraBlend;
  const zoom = finale ? Math.min(.78, viewport.span / Math.max(32, finale.extent.z * .8 + 20, finale.extent.x / (viewport.width / viewport.height) + 14)) : battleZoom();
  if (Math.abs(camera.zoom - zoom) > .0001) { camera.zoom += (zoom - camera.zoom) * (snap ? 1 : 1 - Math.exp(-dt * 1.5)); camera.updateProjectionMatrix(); }
  effects.material.uniforms.height.value = viewport.height * renderer.getPixelRatio() / viewport.span * camera.zoom;
  camera.position.copy(cameraFocus).add(cameraOffset); camera.lookAt(cameraFocus); camera.updateMatrixWorld();
  sun.target.position.set(cameraFocus.x, 0, cameraFocus.z); sun.position.copy(sun.target.position).add(sunOffset); sun.target.updateMatrixWorld();
  const center = point(.85), distance = camera.position.distanceTo(center);
  raycaster.set(camera.position, center.sub(camera.position).normalize());
  silhouette.visible = navigation.shotDistance(raycaster.ray, distance) < distance - .1 || battlefield.occludesCamera(raycaster.ray, distance - .1);
  if (silhouette.visible) { hero.group.updateMatrixWorld(true); for (const [source, copy] of silhouetteParts) copy.matrix.copy(source.matrixWorld); }
}
function resize() {
  if (touchDevice) $('game').style.height = `${Math.round(window.visualViewport?.height || innerHeight)}px`;
  const width = viewport.width = Math.max(1, $('game').clientWidth), screenHeight = viewport.height = Math.max(1, $('game').clientHeight);
  const presets = touchDevice
    ? { performance: { pixels: 850000, ratio: 1.25, shadow: 512 }, balanced: { pixels: 1250000, ratio: 1.5, shadow: 1024 }, high: { pixels: 1800000, ratio: 1.75, shadow: 1024 } }
    : { performance: { pixels: 1450000, ratio: 1, shadow: 1024 }, balanced: { pixels: 2300000, ratio: 1.25, shadow: 2048 }, high: { pixels: 4000000, ratio: 1.5, shadow: 2048 } };
  const quality = presets[preferences.quality];
  const ratio = Math.min(devicePixelRatio || 1, quality.ratio, Math.sqrt(quality.pixels / (width * screenHeight))) * resolutionScale;
  renderer.setPixelRatio(ratio); renderer.setSize(width, screenHeight, false); composer.setPixelRatio(ratio); composer.setSize(width, screenHeight);
  bloom.enabled = preferences.quality !== 'performance';
  smaa.enabled = !touchDevice || preferences.quality !== 'performance';
  if (sun.shadow.mapSize.x !== quality.shadow) { sun.shadow.mapSize.setScalar(quality.shadow); sun.shadow.map?.dispose(); sun.shadow.map = null; }
  const aspect = width / screenHeight, height = viewport.span = touchDevice ? Math.max(24, 21 / aspect) : 24;
  camera.left = -height * aspect / 2; camera.right = height * aspect / 2; camera.top = height / 2; camera.bottom = -height / 2; camera.updateProjectionMatrix();
  effects.material.uniforms.height.value = screenHeight * renderer.getPixelRatio() / height;
  renderDirty = true;
}
function frame(timestamp) {
  requestAnimationFrame(frame);
  const elapsed = state.previous ? timestamp - state.previous : 16.67, dt = Math.min(.05, elapsed / 1000); state.previous = timestamp;
  syncCombatClock(timestamp);
  if (travel?.active) { renderTravel(dt); return; }
  const running = active() && !['victory', 'gameover'].includes(state.phase);
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
      if (state.phase === 'playing') disasters.update(dt, { player: playerPosition, navigation, enemies, damageEnemy, takeDamage, battlefield, playing });
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
      state.ambientTimer = touchDevice ? .28 : .17;
      const ambientFocus = finale ? cameraFocus : playerPosition, ambientRange = 32 / camera.zoom;
      if (battlefield.volcanoVent && battlefield.volcanoVent.distanceToSquared(ambientFocus) < ambientRange * ambientRange) {
        effects.smoke(battlefield.volcanoVent, 2, '#899791', 1.3 + disasters.intensity * 1.8);
        if (disasters.phase === 'active') effects.emit(battlefield.volcanoVent, 9, '#ffd17c', { speed: 2.8, up: 5, gravity: 3, life: 1.6, size: .16, energy: 2.5 });
      }
      for (const fire of battlefield.fires) if (fire.distanceToSquared(ambientFocus) < ambientRange * ambientRange) { effects.flame(fire,.48,.33); effects.emit(fire, 2, '#f7b35d', { speed: .35, up: 2, gravity: -1, life: .65, size: .09 }); effects.smoke(fire, 1, '#85867b', .65); }
    }
  }
  effects.update(running ? dt : 0, 0, { strength: state.phase === 'playing' && state.invulnerable > 0 || state.phase === 'ending' && finale.nuclear ? .65 : 0, x: playerPosition.x, y: -.2, z: playerPosition.z, length: .4, width: .3 });
  effects.contacts(playerPosition, enemies); followCamera(running ? dt : 0); updateAimHud();
  tacticalMap.update(playerPosition, facing, enemies, pickups, warnings, camera, disasters);
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
  const light = new THREE.DirectionalLight('#fff4e4', 3.1); light.position.set(-3, 6, 5); stage.add(light, new THREE.HemisphereLight('#dfebf3', '#676d65', .9));
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
  let pointerId = null;
  const release = () => {
    const previous = pointerId; pointerId = null; stop();
    if (previous !== null && button.hasPointerCapture(previous)) button.releasePointerCapture(previous);
  };
  button.addEventListener('pointerdown', event => {
    if (event.button !== 0 || pointerId !== null || button.disabled) return;
    event.preventDefault(); pointerId = event.pointerId; button.setPointerCapture(pointerId); start();
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, event => { if (event.pointerId === pointerId) release(); });
  return release;
}
function bind() {
  leaderboard = new Leaderboard($('leaderboard'));
  const route = document.querySelector('.campaign-route');
  CHAPTERS.forEach((chapter, index) => { const item = document.createElement('li'), name = document.createElement('span'), range = document.createElement('small'); name.textContent = chapter.name; range.textContent = index === 5 ? '26' : `${index * 5 + 1} - ${index * 5 + 5}`; item.append(name, range); route.appendChild(item); });
  $('skip-travel').addEventListener('click', finishTravel);
  releaseFire = bindHold($('fire'), () => { if (playing()) { fireInputs.add('touch'); fire(); } }, () => fireInputs.delete('touch'));
  if (touchDevice) {
    $('pause-tools').append($('configure'), $('graphics'), $('sound'));
    $('pause-tools').hidden = false;
    joystick = new TouchJoystick($('touch-joystick'), playing);
    $('game').setAttribute('aria-label', '老美大战倭寇。左下摇杆控制移动与朝向，按住右下射击按钮连射，点击武器栏切换武器，点击手雷、闪避和技能按钮使用道具与能力。');
    document.querySelector('.combat-controls').addEventListener('contextmenu', event => event.preventDefault());
  }
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
    if (travel?.active && event.code === 'Enter' && !event.repeat) { event.preventDefault(); finishTravel(); return; }
    if (event.code === 'Escape' || event.code === 'KeyP') { if (!event.repeat && state.ready && !['victory', 'gameover'].includes(state.phase)) setPause(!state.paused); return; }
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
  let resizeFrame = 0;
  const handleResize = () => {
    clearInput();
    if (!resizeFrame) resizeFrame = requestAnimationFrame(() => { resizeFrame = 0; resize(); });
  };
  window.addEventListener('resize', handleResize);
  if (touchDevice) window.visualViewport?.addEventListener('resize', handleResize);
}
async function initialize() {
  iconize(); renderer = new THREE.WebGLRenderer({ canvas: $('view'), antialias: false, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace; renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.04;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene(); scene.add(silhouette); camera = new THREE.OrthographicCamera(-18, 18, 12, -12, .1, 260); camera.position.set(0, 24, 34); camera.lookAt(0, .5, 0); camera.updateMatrixWorld();
  assets = await loadAssets(value => $('load-progress').value = value);
  const pmrem = new THREE.PMREMGenerator(renderer); scene.environment = pmrem.fromEquirectangular(assets.environment).texture; scene.environmentIntensity = .65; pmrem.dispose();
  sun = new THREE.DirectionalLight('#fff2d8', 3.1); sun.position.copy(sunOffset); sun.castShadow = true; sun.shadow.mapSize.set(2048,2048); sun.shadow.bias = -.00015; sun.shadow.normalBias = .035;
  skyLight = new THREE.HemisphereLight('#dfebf3', '#777b70', .75);
  Object.assign(sun.shadow.camera, { left: -29, right: 29, top: 29, bottom: -29, near: 1, far: 100 }); scene.add(sun, sun.target, skyLight);
  const rim = new THREE.DirectionalLight('#d1e4f1', .4); rim.position.set(8, 8, -12); scene.add(rim);
  composer = new EffectComposer(renderer); renderPass = new RenderPass(scene, camera); composer.addPass(renderPass);
  bloom = new UnrealBloomPass(new THREE.Vector2(900, 600), .28, .45, 1.25); composer.addPass(bloom); composer.addPass(new OutputPass()); smaa = new SMAAPass(); composer.addPass(smaa);
  effects = new Effects(scene, camera, touchDevice ? .6 : 1); resize(); physics = new CombatPhysics(); bossCombat = new BossCombat(scene, effects); tacticalMap = new TacticalMap($('tactical-map'), $('district-name'), $('map-position'));
  disasters = new Disasters(scene, effects); travel = new TravelSequence(assets); travel.scene.environment = scene.environment;
  await renderer.compileAsync(travel.scene, travel.camera);
  for (const item of HEROES) thumbnail('character', item.id);
  bind(); state.ready = true; await deploy(); $('load-progress').value = 100;
  requestAnimationFrame(frame);
}
async function warmCombat() {
  const stage = new THREE.Group(), models = ['raider', 'heavy', 'soldier', 'boss', 'officer', 'emperor'].map(createEnemy), items = [...WEAPONS.map(weapon => createPickup(weapon.id)), createPickup('grenade')];
  models.forEach((model, i) => { model.group.position.set(-3 + i * 3, 0, -4); stage.add(model.group); });
  items.forEach((item, i) => { item.position.set(-3 + i * 2, 0, 3); stage.add(item); });
  stage.position.copy(playerPosition); scene.add(stage);
  effects.arc(point(1), heroInfo().color, 1.4, 0); effects.shield.visible = true;
  disasters.surface.visible = disasters.crest.visible = true; disasters.surface.material.uniforms.strength.value = 0;
  try { await renderer.compileAsync(scene, camera); composer.render(); }
  finally { models.forEach(releaseEnemy); items.forEach(disposeModel); stage.removeFromParent(); effects.clear(); effects.shield.visible = false; disasters.surface.visible = disasters.crest.visible = false; }
}
function showDeployError(error) {
  console.error(error); $('loading-state').textContent = '战场加载失败'; const retry = document.createElement('button'); retry.className = 'depart'; retry.textContent = '重新加载'; retry.addEventListener('click', () => location.reload()); $('loading-state').after(retry);
}
initialize().catch(showDeployError);
