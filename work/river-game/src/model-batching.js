import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const materials = new Map();

// Bake paint colors into vertices while retaining separate fabric and metal surfaces.
export function batchModel(root) {
  const parts = [];
  root.traverse(object => { if (object.isGroup) parts.push(object); });
  for (const part of parts) {
    const batches = new Map();
    for (const object of part.children) {
      if (!object.isMesh || object.material.transparent || object.userData.animated) continue;
      const source = object.material;
      const metalness = source.metalness >= .5 ? .78 : .06;
      const roughness = source.metalness >= .5 ? .4 : source.isMeshPhysicalMaterial ? (source.roughness >= .5 ? .65 : .4) : .88;
      const key = [source.type, metalness, roughness, source.clearcoat, source.clearcoatRoughness, source.map?.uuid, source.normalMap?.uuid, source.bumpMap?.uuid, source.roughnessMap?.uuid, source.bumpScale, source.side].join('/');
      if (!materials.has(key)) {
        const material = source.clone();
        material.color.set('#ffffff'); material.vertexColors = true;
        material.metalness = metalness; material.roughness = roughness;
        material.userData.shared = true; materials.set(key, material);
      }
      if (!batches.has(key)) batches.set(key, []);
      batches.get(key).push(object);
    }
    for (const [key, objects] of batches) {
      const pieces = objects.map(object => {
        object.updateMatrix();
        const geometry = object.geometry.clone().applyMatrix4(object.matrix);
        const color = object.material.color, colors = new Float32Array(geometry.attributes.position.count * 3);
        for (let i = 0; i < colors.length; i += 3) { colors[i] = color.r; colors[i + 1] = color.g; colors[i + 2] = color.b; }
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        if (geometry.index) return geometry;
        geometry.setIndex(Array.from({ length: geometry.attributes.position.count }, (_, i) => i));
        return geometry;
      });
      const geometry = mergeGeometries(pieces, false); pieces.forEach(piece => piece.dispose());
      if (!geometry) continue;
      geometry.computeBoundingSphere();
      const combined = new THREE.Mesh(geometry, materials.get(key));
      combined.castShadow = combined.receiveShadow = true; part.add(combined);
      for (const object of objects) { object.geometry.dispose(); object.removeFromParent(); }
    }
  }
}

export function shareGeometry(root) {
  root.traverse(object => {
    if (object.geometry) object.geometry.userData.shared = true;
    if (object.material) object.material.userData.shared = true;
  });
}
