import * as THREE from 'three';
import { ARENA } from './battlefield.js';
import { isBossType } from './chibi.js';

export class TacticalMap {
  constructor(canvas, label, coordinates) {
    this.canvas = canvas; this.ctx = canvas.getContext('2d'); this.label = label; this.coordinates = coordinates;
    this.background = document.createElement('canvas'); this.background.width = canvas.width; this.background.height = canvas.height;
    this.scaleX = (canvas.width - 16) / (ARENA.x * 2); this.scaleZ = (canvas.height - 16) / (ARENA.z * 2);
    this.ray = new THREE.Raycaster(); this.plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0); this.point = new THREE.Vector3();
    this.corners = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([x, y]) => new THREE.Vector2(x, y)); this.nextUpdate = 0;
  }
  x(value) { return 8 + (value + ARENA.x) * this.scaleX; }
  z(value) { return 8 + (value + ARENA.z) * this.scaleZ; }
  setBattlefield(battlefield) {
    this.battlefield = battlefield; this.nextUpdate = 0;
    const ctx = this.background.getContext('2d'); ctx.fillStyle = battlefield.chapter.map; ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.fillStyle = '#52605b';
    for (const x of [-36, 0, 36]) ctx.fillRect(this.x(x - 3.5), 8, 7 * this.scaleX, this.canvas.height - 16);
    for (const z of [-30, 0, 30]) ctx.fillRect(8, this.z(z - 3.5), this.canvas.width - 16, 7 * this.scaleZ);
    for (const box of battlefield.obstacles) { ctx.fillStyle = box.walkOnly ? '#467a89' : '#9eab96'; ctx.fillRect(this.x(box.x - box.halfX), this.z(box.z - box.halfZ), box.halfX * 2 * this.scaleX, box.halfZ * 2 * this.scaleZ); }
    ctx.strokeStyle = '#98b2a866'; ctx.lineWidth = 1; ctx.strokeRect(8, 8, this.canvas.width - 16, this.canvas.height - 16);
  }
  update(player, facing, enemies, pickups, warnings, camera) {
    if (performance.now() < this.nextUpdate) return;
    this.nextUpdate = performance.now() + 80;
    const ctx = this.ctx; ctx.drawImage(this.background, 0, 0);
    ctx.save(); ctx.beginPath(); ctx.rect(8, 8, this.canvas.width - 16, this.canvas.height - 16); ctx.clip();
    ctx.beginPath();
    this.corners.forEach((corner, i) => { this.ray.setFromCamera(corner, camera); this.ray.ray.intersectPlane(this.plane, this.point); i ? ctx.lineTo(this.x(this.point.x), this.z(this.point.z)) : ctx.moveTo(this.x(this.point.x), this.z(this.point.z)); });
    ctx.closePath(); ctx.fillStyle = '#d9efc817'; ctx.fill(); ctx.lineWidth = 1.5; ctx.strokeStyle = '#dcebd384'; ctx.stroke();
    for (const warning of warnings) { ctx.strokeStyle = '#e69f86'; ctx.beginPath(); ctx.arc(this.x(warning.position.x), this.z(warning.position.z), 4, 0, Math.PI * 2); ctx.stroke(); }
    for (const pickup of pickups) { ctx.fillStyle = '#ffda88'; const x = this.x(pickup.group.position.x), z = this.z(pickup.group.position.z); ctx.fillRect(x - 3, z - 3, 6, 6); }
    for (const enemy of enemies) { if (enemy.health <= 0) continue; ctx.fillStyle = isBossType(enemy.type) ? '#ffca6b' : '#ff8379'; ctx.beginPath(); ctx.arc(this.x(enemy.body.position.x), this.z(enemy.body.position.z), isBossType(enemy.type) ? 4.5 : 3, 0, Math.PI * 2); ctx.fill(); }
    const px = this.x(player.x), pz = this.z(player.z);
    ctx.beginPath(); ctx.arc(px, pz, 9, 0, Math.PI * 2); ctx.fillStyle = '#92e8f52a'; ctx.fill();
    ctx.beginPath(); ctx.moveTo(px + facing.x * 8, pz + facing.z * 8); ctx.lineTo(px - facing.x * 5 - facing.z * 4, pz - facing.z * 5 + facing.x * 4); ctx.lineTo(px - facing.x * 5 + facing.z * 4, pz - facing.z * 5 - facing.x * 4); ctx.closePath();
    ctx.fillStyle = '#bcf2f5'; ctx.strokeStyle = '#152f36'; ctx.lineWidth = 1.5; ctx.fill(); ctx.stroke(); ctx.restore();
    const district = this.battlefield.districts.reduce((closest, item) => Math.hypot(item.x - player.x, item.z - player.z) < Math.hypot(closest.x - player.x, closest.z - player.z) ? item : closest);
    this.label.textContent = district.name; this.coordinates.textContent = `${Math.round(player.x)} : ${Math.round(-player.z)}`;
  }
}
