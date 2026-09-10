import PF from 'pathfinding';
import * as THREE from 'three';
import { ARENA } from './battlefield.js';

export class Navigation {
  constructor(obstacles) {
    this.boxes = obstacles.map(({ x, z, halfX, halfZ, height }) => new THREE.Box3(new THREE.Vector3(x - halfX, -.1, z - halfZ), new THREE.Vector3(x + halfX, height, z + halfZ)));
    this.shotBoxes = this.boxes.filter((box, index) => !obstacles[index].walkOnly);
    this.clearance = this.boxes.map(box => new THREE.Box3(new THREE.Vector3(box.min.x - .82, -1, box.min.z - .82), new THREE.Vector3(box.max.x + .82, 8, box.max.z + .82)));
    this.grid = new PF.Grid(ARENA.x * 2, ARENA.z * 2);
    this.ray = new THREE.Ray(); this.hit = new THREE.Vector3(); this.origin = new THREE.Vector3(); this.direction = new THREE.Vector3();
    for (let z = 0; z < ARENA.z * 2; z++) for (let x = 0; x < ARENA.x * 2; x++) {
      if (!this.isOpen(x - ARENA.x + .5, z - ARENA.z + .5)) this.grid.setWalkableAt(x, z, false);
    }
    this.finder = new PF.AStarFinder({ diagonalMovement: PF.DiagonalMovement.OnlyWhenNoObstacles });
    this.searchGrid = this.grid.clone(); this.dirtyNodes = []; this.searchesRemaining = 2;
    const mark = node => { if (node && !node.dirty) { node.dirty = true; this.dirtyNodes.push(node); } return node; };
    const getNode = this.searchGrid.getNodeAt.bind(this.searchGrid), getNeighbors = this.searchGrid.getNeighbors.bind(this.searchGrid);
    this.searchGrid.getNodeAt = (x, z) => mark(getNode(x, z));
    this.searchGrid.getNeighbors = (...args) => { const neighbors = getNeighbors(...args); for (const node of neighbors) mark(node); return neighbors; };
    this.regions = new Int32Array(ARENA.x * 2 * ARENA.z * 2);
    let region = 0;
    for (let z = 0; z < ARENA.z * 2; z++) for (let x = 0; x < ARENA.x * 2; x++) {
      if (!this.grid.isWalkableAt(x, z) || this.regions[z * ARENA.x * 2 + x]) continue;
      const queue = [this.grid.getNodeAt(x, z)]; this.regions[z * ARENA.x * 2 + x] = ++region;
      for (let i = 0; i < queue.length; i++) for (const node of this.grid.getNeighbors(queue[i], PF.DiagonalMovement.OnlyWhenNoObstacles)) {
        const index = node.y * ARENA.x * 2 + node.x;
        if (!this.regions[index]) { this.regions[index] = region; queue.push(node); }
      }
    }
  }
  isOpen(x, z) {
    if (Math.abs(x) > ARENA.x - 1 || Math.abs(z) > ARENA.z - 1) return false;
    return !this.clearance.some(box => x >= box.min.x && x <= box.max.x && z >= box.min.z && z <= box.max.z);
  }
  unobstructed(from, to, padded = true) {
    this.origin.set(from.x, .6, from.z); this.direction.set(to.x - from.x, 0, to.z - from.z);
    const distance = this.direction.length();
    if (distance < .001) return true;
    this.ray.set(this.origin, this.direction.divideScalar(distance));
    for (const box of padded ? this.clearance : this.boxes) {
      if (box.containsPoint(this.origin) || (this.ray.intersectBox(box, this.hit) && this.origin.distanceTo(this.hit) < distance)) return false;
    }
    return true;
  }
  nearestCell(position) {
    const x = Math.max(0, Math.min(ARENA.x * 2 - 1, Math.floor(position.x + ARENA.x)));
    const z = Math.max(0, Math.min(ARENA.z * 2 - 1, Math.floor(position.z + ARENA.z)));
    for (let radius = 0; radius <= 6; radius++) {
      let closest, best = Infinity;
      for (let dz = -radius; dz <= radius; dz++) for (let dx = -radius; dx <= radius; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dz)) !== radius || !this.grid.isWalkableAt(x + dx, z + dz)) continue;
        const candidate = { x: x + dx - ARENA.x + .5, z: z + dz - ARENA.z + .5 };
        if (!this.unobstructed(position, candidate, false)) continue;
        const distance = (candidate.x - position.x) ** 2 + (candidate.z - position.z) ** 2;
        if (distance < best) { best = distance; closest = [x + dx, z + dz]; }
      }
      if (closest) return closest;
    }
    return null;
  }
  path(from, to) {
    const start = this.nearestCell(from), end = this.nearestCell(to);
    if (!start || !end) return [];
    // Reset only nodes visited by the previous search, without cloning 12,000 nodes.
    for (const node of this.dirtyNodes) { node.opened = node.closed = node.dirty = false; node.g = node.h = node.f = 0; node.parent = null; }
    this.dirtyNodes.length = 0;
    const cells = this.finder.findPath(...start, ...end, this.searchGrid);
    return PF.Util.compressPath(cells).map(([x, z]) => ({ x: x - ARENA.x + .5, z: z - ARENA.z + .5 }));
  }
  connected(from, to) {
    const start = this.nearestCell(from), end = this.nearestCell(to);
    return Boolean(start && end && this.regions[start[1] * ARENA.x * 2 + start[0]] === this.regions[end[1] * ARENA.x * 2 + end[0]]);
  }
  shotDistance(ray, range) {
    let distance = range;
    for (const box of this.shotBoxes) {
      if (box.containsPoint(ray.origin)) return 0;
      if (ray.intersectBox(box, this.hit)) distance = Math.min(distance, ray.origin.distanceTo(this.hit));
    }
    return distance;
  }
}
