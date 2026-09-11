import * as THREE from 'three';
import { disposeModel } from './chibi.js';

export class CampaignFinale {
  constructor(scene, effects, battlefield, enemy, player, nuclear, onImpact, targets = [enemy]) {
    Object.assign(this, { scene, effects, battlefield, enemy, targets, nuclear, onImpact, time: 0, impacted: false, done: false, flash: 0 });
    this.target = enemy.model.group.position.clone();
    const bounds = new THREE.Box3().setFromPoints([this.target, player, battlefield.palaceCenter.clone().add(new THREE.Vector3(-34, 0, -12)), battlefield.palaceCenter.clone().add(new THREE.Vector3(34, 0, 18))]);
    this.focus = bounds.getCenter(new THREE.Vector3()); this.focus.y = 1.5;
    this.extent = bounds.getSize(new THREE.Vector3());
    this.impactTime = nuclear ? 2.1 : .35;
    if (nuclear) {
      this.missile = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({ color: '#e2e6dc', metalness: .7, roughness: .3 });
      const tipMat = new THREE.MeshStandardMaterial({ color: '#b85840', metalness: .4, roughness: .4 });
      const body = new THREE.Mesh(new THREE.CylinderGeometry(.20, .20, 1.5, 12), bodyMat);
      const tip = new THREE.Mesh(new THREE.ConeGeometry(.20, .55, 12), tipMat); tip.rotation.z = Math.PI; tip.position.y = -1;
      this.missile.add(body, tip);
      for (const angle of [0, Math.PI / 2]) { const fin = new THREE.Mesh(new THREE.BoxGeometry(.8, .42, .05), tipMat); fin.position.y = .64; fin.rotation.y = angle; this.missile.add(fin); }
      this.missile.traverse(object => { if (object.isMesh) object.userData.ownedMaterial = true; });
      this.missile.position.copy(this.target).setY(34); scene.add(this.missile);
      effects.ring(this.target, '#ffdb9d', 3.5);
    }
  }
  update(dt) {
    this.time += dt;
    if (this.missile && !this.impacted) {
      this.missile.position.y = 34 * (1 - Math.min(1, this.time / this.impactTime)) + .8;
      const plume = this.missile.position.clone().add(new THREE.Vector3(0, 1, 0));
      this.effects.emit(plume, 4, '#ffe5b1', { speed: .5, up: 4, gravity: -1, life: .4, size: .17, energy: 2.5 });
    }
    if (!this.impacted && this.time >= this.impactTime) {
      this.impacted = true; if (this.missile) { disposeModel(this.missile); this.missile = null; }
      for (const enemy of this.targets) { enemy.health = 0; enemy.bar.visible = enemy.warning.visible = false; }
      if (this.nuclear) this.effects.nuclearBlast(this.target);
      else { this.effects.explosion(this.target); this.effects.ring(this.target, '#e6efc6', 12); }
      this.battlefield.destroyPalace(this.effects); this.onImpact();
    }
    if (this.impacted) {
      const elapsed = this.time - this.impactTime, fall = Math.min(1, elapsed / .9);
      for (const enemy of this.targets) {
        const group = enemy.model.group, progress = enemy.downed ? 1 : fall;
        enemy.model.animate(this.time, 0, 0, 'stagger');
        group.rotation.x = -Math.sin(progress * Math.PI / 2) * 1.51; group.rotation.z = .12 * progress; group.position.y = Math.sin(progress * Math.PI) * .35 + .2 * progress;
      }
      this.flash = this.nuclear ? Math.exp(-elapsed * 6) * .82 : 0;
      if (elapsed > (this.nuclear ? 6.2 : 4.4)) this.done = true;
    }
  }
  dispose() { if (this.missile) disposeModel(this.missile); }
}
