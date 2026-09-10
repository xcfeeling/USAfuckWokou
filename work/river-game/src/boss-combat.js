import * as THREE from 'three';
import { disposeModel } from './chibi.js';
import { shareGeometry } from './model-batching.js';

export class BossCombat {
  constructor(scene, effects) { this.scene = scene; this.effects = effects; this.shots = []; this.ray = new THREE.Ray(); this.hit = new THREE.Vector3(); }
  clearMarker(enemy) { if (enemy.telegraph) { disposeModel(enemy.telegraph); enemy.telegraph = null; } }
  interrupt(enemy) { this.clearMarker(enemy); enemy.bossMode = 'recover'; enemy.modeTime = .55; enemy.strike = 0; enemy.routeTimer = 0; }
  remove(enemy) { this.clearMarker(enemy); for (const shot of [...this.shots]) if (shot.owner === enemy) this.removeShot(shot); }
  clear() { for (const shot of [...this.shots]) this.removeShot(shot); }
  removeShot(shot) { disposeModel(shot.mesh); const index = this.shots.indexOf(shot); if (index !== -1) this.shots.splice(index, 1); }
  marker(enemy, attack, length) {
    const root = new THREE.Group(), color = attack === 'arrows' ? '#eaca71' : attack === 'cleave' ? '#f1ad58' : attack === 'volley' ? '#efd786' : '#ef6e5e';
    const material = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .23, depthWrite: false, side: THREE.DoubleSide });
    let geometry;
    if (attack === 'cleave') geometry = new THREE.CircleGeometry(4.25, 64);
    else if (attack === 'charge') geometry = new THREE.PlaneGeometry(2.2, length);
    else { const shape = new THREE.Shape(), range = attack === 'arrows' ? 23 : 12; shape.moveTo(0, 0); for (let i = 0; i <= 24; i++) { const angle = -.48 + i / 24 * .96; shape.lineTo(Math.sin(angle) * range, -Math.cos(angle) * range); } shape.closePath(); geometry = new THREE.ShapeGeometry(shape); }
    const area = new THREE.Mesh(geometry, material); area.rotation.x = -Math.PI / 2; area.position.z = attack === 'charge' ? length / 2 : 0; area.userData.ownedMaterial = true; root.add(area);
    const border = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), new THREE.LineBasicMaterial({ color, transparent: true, opacity: .88, depthWrite: false })); border.rotation.copy(area.rotation); border.position.copy(area.position); border.userData.ownedMaterial = true; root.add(border);
    root.position.set(enemy.body.position.x, .045, enemy.body.position.z); root.rotation.y = Math.atan2(enemy.aim.x, enemy.aim.z); this.scene.add(root); enemy.telegraph = root;
  }
  volley(enemy) {
    const count = enemy.enraged ? 5 : 3;
    for (let i = 0; i < count; i++) {
      const angle = (i / (count - 1) - .5) * .88, direction = enemy.aim.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      const material = new THREE.MeshBasicMaterial({ color: '#ffcd8b', transparent: true, opacity: .95, blending: THREE.AdditiveBlending, depthWrite: false });
      const mesh = new THREE.Mesh(new THREE.TorusGeometry(.4, .045, 6, 24, Math.PI * 1.25), material); mesh.userData.ownedMaterial = true;
      mesh.position.set(enemy.body.position.x, .85, enemy.body.position.z); mesh.position.addScaledVector(direction, 1.3); mesh.rotation.set(-Math.PI / 2, 0, Math.atan2(direction.x, direction.z)); this.scene.add(mesh);
      this.shots.push({ mesh, direction, owner: enemy, life: 3.2, speed: enemy.enraged ? 8 : 6.5, trail: 0 });
    }
  }
  arrows(enemy) {
    if (!this.arrowTemplate) {
      this.arrowTemplate = new THREE.Group();
      const wood = new THREE.MeshStandardMaterial({ color: '#bc8c55', roughness: .65 });
      const steel = new THREE.MeshStandardMaterial({ color: '#eee6c3', metalness: .75, roughness: .3 });
      const shaft = new THREE.Mesh(new THREE.CylinderGeometry(.025, .025, 1.2, 6), wood); shaft.rotation.x = Math.PI / 2;
      const tip = new THREE.Mesh(new THREE.ConeGeometry(.10, .32, 4), steel); tip.rotation.x = Math.PI / 2; tip.position.z = .76;
      this.arrowTemplate.add(shaft, tip);
      for (const angle of [0, Math.PI / 2]) { const feather = new THREE.Mesh(new THREE.BoxGeometry(.22, .025, .26), steel); feather.position.z = -.42; feather.rotation.z = angle; this.arrowTemplate.add(feather); }
      shareGeometry(this.arrowTemplate);
    }
    const count = enemy.enraged ? 7 : 5;
    for (let i = 0; i < count; i++) {
      const direction = enemy.aim.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), (i / (count - 1) - .5) * .92);
      const mesh = this.arrowTemplate.clone(true); mesh.position.set(enemy.body.position.x, .85, enemy.body.position.z); mesh.position.addScaledVector(direction, 1.4); mesh.rotation.y = Math.atan2(direction.x, direction.z); this.scene.add(mesh);
      this.shots.push({ mesh, direction, owner: enemy, kind: 'arrow', life: 3.2, speed: enemy.enraged ? 14 : 11, trail: 0 });
    }
  }
  updateShots(dt, player, navigation, takeDamage, slow, level) {
    const sphere = new THREE.Sphere(new THREE.Vector3(player.x, .85, player.z), .77);
    for (const shot of [...this.shots]) {
      const distance = dt * shot.speed * slow; shot.life -= dt * slow;
      this.ray.set(shot.mesh.position, shot.direction);
      const wall = navigation.shotDistance(this.ray, distance);
      const hitPlayer = this.ray.intersectSphere(sphere, this.hit) && shot.mesh.position.distanceTo(this.hit) <= wall;
      if (hitPlayer) { takeDamage(shot.kind === 'arrow' ? 28 : 15 + Math.min(10, level)); this.effects.emit(this.hit, 20, '#ffbe8c', { speed: 2.4, up: 1, life: .4 }); }
      if (hitPlayer || wall < distance || shot.life <= 0) { this.removeShot(shot); continue; }
      shot.mesh.position.addScaledVector(shot.direction, distance); if (shot.kind !== 'arrow') shot.mesh.rotation.z += dt * 5; shot.trail -= dt;
      if (shot.trail <= 0) { this.effects.emit(shot.mesh.position, shot.kind === 'arrow' ? 1 : 3, '#ffe7bc', { speed: .3, up: .2, gravity: 0, life: .3, size: .08 }); shot.trail = .055; }
    }
  }
  update(enemy, dt, { player, time, level, slow, navigation, takeDamage, toast }) {
    const position = enemy.body.position, distance = Math.hypot(player.x - position.x, player.z - position.z), step = dt * slow;
    enemy.bossMode ||= 'approach'; enemy.modeTime ??= 1.6;
    if (!enemy.enraged && enemy.health <= enemy.maxHealth * .5) {
      enemy.enraged = true; this.effects.ring(new THREE.Vector3(position.x, .04, position.z), '#ed8870', 5);
      this.effects.emit(new THREE.Vector3(position.x, 1, position.z), 85, '#f7c780', { speed: 3.5, up: 3.8, life: 1, energy: 2.5 }); toast(`${enemy.name} · 怒意觉醒`);
    }
    enemy.modeTime -= step;
    if (enemy.bossMode === 'approach') {
      if (enemy.modeTime > 0 || distance > (enemy.type === 'emperor' ? 25 : 15) || !navigation.unobstructed(position, player, false)) return false;
      enemy.aim = new THREE.Vector3(player.x - position.x, 0, player.z - position.z).normalize();
      if (enemy.aim.lengthSq() < .01) enemy.aim.set(0, 0, 1);
      enemy.attackCount = (enemy.attackCount || 0) + 1;
      enemy.bossAttack = enemy.type === 'emperor' && (distance > 12 || enemy.attackCount % 2 === 1) ? 'arrows' : distance < 4.8 ? 'cleave' : enemy.attackCount % 3 === 0 ? 'volley' : 'charge';
      this.ray.set(new THREE.Vector3(position.x, .6, position.z), enemy.aim);
      enemy.chargeLength = Math.max(1, Math.min(12, distance + 2.5, navigation.shotDistance(this.ray, 14) - .8));
      enemy.bossMode = 'windup'; enemy.modeTime = enemy.bossAttack === 'arrows' ? (enemy.enraged ? .85 : 1.25) : enemy.enraged ? .78 : 1.08; enemy.windupLength = enemy.modeTime;
      this.marker(enemy, enemy.bossAttack, enemy.chargeLength);
    }
    if (enemy.bossMode === 'windup') {
      enemy.body.velocity.setZero(); enemy.model.group.rotation.y = Math.atan2(enemy.aim.x, enemy.aim.z);
      enemy.model.animate(time, 0, 0, enemy.bossAttack === 'arrows' ? 'bow' : 'windup'); enemy.telegraph.children[0].material.opacity = .18 + (1 - enemy.modeTime / enemy.windupLength) * .23;
      if (enemy.modeTime > 0) return true;
      this.clearMarker(enemy); enemy.strike = 1;
      if (enemy.bossAttack === 'charge') { enemy.bossMode = 'charge'; enemy.modeTime = enemy.chargeLength / 12; enemy.chargeHit = false; }
      else {
        if (enemy.bossAttack === 'cleave') {
          const center = new THREE.Vector3(position.x, .045, position.z);
          this.effects.ring(center, '#ffd393', 4.25); this.effects.arc(center.clone().setY(.8), '#ffe4b0', 3.2, 1.5);
          this.effects.emit(center, 85, '#efb278', { speed: 6, up: 1.5, gravity: 7, life: .6, size: .1 });
          if (distance < 4.65 && navigation.unobstructed(position, player, false)) takeDamage(28 + Math.min(12, level * 1.5));
        } else if (enemy.bossAttack === 'arrows') this.arrows(enemy);
        else this.volley(enemy);
        enemy.bossMode = 'recover'; enemy.modeTime = enemy.enraged ? 1.2 : 1.85;
      }
    }
    if (enemy.bossMode === 'charge') {
      enemy.body.velocity.set(enemy.aim.x * 12 * slow, 0, enemy.aim.z * 12 * slow); enemy.model.animate(time, 1.5, .65);
      if (!enemy.chargeHit && distance < 1.8 && navigation.unobstructed(position, player, false)) { takeDamage(30 + Math.min(12, level * 1.5)); enemy.chargeHit = true; }
      if (Math.sin(time * 36) > .3) this.effects.emit(new THREE.Vector3(position.x, .1, position.z), 3, '#e6d4b3', { speed: .7, up: .6, life: .35 });
      if (enemy.modeTime > 0) return true;
      enemy.bossMode = 'recover'; enemy.modeTime = enemy.enraged ? 1.3 : 2;
    }
    enemy.body.velocity.setZero(); enemy.model.animate(time, 0, Math.max(0, enemy.strike)); enemy.strike = Math.max(0, enemy.strike - dt * 2.8);
    if (enemy.modeTime <= 0) { enemy.bossMode = 'approach'; enemy.modeTime = enemy.enraged ? .6 : 1; enemy.routeTimer = 0; }
    return true;
  }
}
