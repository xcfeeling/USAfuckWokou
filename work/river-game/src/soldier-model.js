import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { oval, cylinder, mesh } from './models.js';
import { surfaceMaps } from './surfaces.js';
import { batchModel, shareGeometry } from './model-batching.js';

const templates = new Map();
const cloth = new THREE.MeshStandardMaterial({ color: '#817e5e', ...surfaceMaps('cloth'), roughness: .92, bumpScale: .009 });
const leather = new THREE.MeshStandardMaterial({ color: '#514739', ...surfaceMaps('leather'), roughness: .82, bumpScale: .006 });
const steel = new THREE.MeshStandardMaterial({ color: '#4e584e', ...surfaceMaps('paint'), metalness: .35, roughness: .57, bumpScale: .006 });
const skin = new THREE.MeshStandardMaterial({ color: '#c8a487', ...surfaceMaps('skin'), roughness: .78, bumpScale: .003 });
const dark = new THREE.MeshStandardMaterial({ color: '#272d2b', ...surfaceMaps('leather'), roughness: .88, bumpScale: .006 });
const brass = new THREE.MeshStandardMaterial({ color: '#b5a16a', ...surfaceMaps('metal'), metalness: .72, roughness: .42, bumpScale: .005 });
const blade = new THREE.MeshStandardMaterial({ color: '#d6dfdb', ...surfaceMaps('metal'), metalness: .9, roughness: .26, bumpScale: .004 });
function box(parent, material, size, position) {
  const edge = Math.min(...size);
  return mesh(edge < .04 ? new THREE.BoxGeometry(...size) : new RoundedBoxGeometry(...size, 1, Math.min(.035, edge * .22)), material, position, parent);
}

export function createSoldierModel(type) {
  const officer = type === 'officer';
  if (!templates.has(type)) {
    const root = new THREE.Group(), torso = new THREE.Group(), head = new THREE.Group(), arms = new THREE.Group(), sword = new THREE.Group();
    root.add(torso); torso.add(head, arms, sword); head.position.y = 1.83;
    oval(torso, cloth, [.32, .48, .235], [0, 1.09, 0]);
    box(torso, leather, [.66, .12, .50], [0, .86, 0]);
    box(torso, brass, [.13, .10, .04], [0, .86, .272]);
    const strap = box(torso, leather, [.075, .74, .036], [0, 1.23, .235]); strap.rotation.z = -.55;
    box(torso, cloth, [.048, .56, .04], [0, 1.15, .252]);
    for (let i = 0; i < 4; i++) oval(torso, brass, [.018, .018, .012], [.045, 1.03 + i * .12, .275], 10);
    for (const s of [-1, 1]) {
      box(torso, cloth, [.22, .23, .055], [s * .175, 1.22, .229]);
      box(torso, leather, [.19, .014, .016], [s * .175, 1.285, .262]);
      oval(torso, brass, [.014, .014, .01], [s * .175, 1.25, .267], 10);
      const collar = box(torso, cloth, [.15, .19, .08], [s * .11, 1.47, .15]); collar.rotation.z = s * .32;
      for (let i = 0; i < 2; i++) {
        const x = s * (.15 + i * .145);
        box(torso, leather, [.12, .19, .13], [x, .87, .30]);
        box(torso, dark, [.10, .015, .018], [x, .914, .367]);
        oval(torso, brass, [.012, .012, .008], [x, .898, .372], 10);
      }
      box(torso, officer ? brass : cloth, [.21, .047, .12], [s * .32, 1.46, 0]);
      const leg = new THREE.Group(); leg.name = `leg${s}`; leg.position.set(s * .18, .82, 0); root.add(leg);
      oval(leg, cloth, [.15, .29, .16], [0, -.2, 0]);
      const knee = new THREE.Group(); knee.name = `knee${s}`; knee.position.y = -.34; leg.add(knee);
      oval(knee, cloth, [.105, .23, .11], [0, -.19, .01]);
      for (let i = 0; i < 5; i++) cylinder(knee, leather, .11, .018, [0, -.04 - i * .061, .01], .11, 10);
      box(knee, dark, [.25, .16, .37], [0, -.39, .08]);
      box(knee, leather, [.26, .035, .38], [0, -.467, .085]);
      for (let i = 0; i < 3; i++) box(knee, cloth, [.085, .012, .014], [0, -.316, .11 + i * .035]);
      oval(arms, cloth, [.145, .245, .145], [s * .36, 1.27, .09]);
      oval(arms, cloth, [.125, .125, .24], [s * .30, 1.05, .32]);
      oval(arms, skin, [.085, .09, .09], [s * .25, 1.05, .51]);
    }
    oval(head, skin, [.29, .34, .27], [0, 0, 0]);
    for (const s of [-1, 1]) {
      oval(head, skin, [.047, .08, .05], [s * .29, -.03, 0], 12);
      box(head, dark, [.09, .028, .025], [s * .12, .035, .254]);
      box(head, dark, [.13, .022, .02], [s * .12, .093, .25]).rotation.z = s * .16;
      box(head, leather, [.028, .27, .026], [s * .25, -.085, .13]).rotation.z = s * .18;
    }
    oval(head, skin, [.041, .072, .052], [0, -.055, .274], 12);
    box(head, dark, [.10, .015, .018], [0, -.185, .256]);
    if (officer) {
      cylinder(head, cloth, .34, .16, [0, .29, -.015], .30, 20);
      box(head, dark, [.48, .045, .23], [0, .20, .23]);
      box(head, brass, [.46, .025, .025], [0, .245, .276]);
      cylinder(head, leather, .335, .035, [0, .225, -.015], .335, 24);
    } else {
      mesh(new THREE.SphereGeometry(.365, 24, 12, 0, Math.PI * 2, 0, Math.PI * .57), steel, [0, .14, -.028], head).scale.y = .78;
      oval(head, steel, [.39, .025, .365], [0, .076, -.028]);
      for (const s of [-1, 1]) oval(head, brass, [.016, .016, .012], [s * .25, .22, .205], 10);
    }
    const insignia = mesh(new THREE.OctahedronGeometry(.057), brass, [0, .23, .29], head); insignia.scale.z = .15;
    const rifle = new THREE.Group(); arms.add(rifle); rifle.position.set(.19, 1.065, .24);
    box(rifle, leather, [.105, .16, 1.05], [0, 0, .32]);
    cylinder(rifle, steel, .038, .70, [0, .08, .90], .038, 10).rotation.x = Math.PI / 2;
    box(rifle, steel, [.085, .06, .48], [0, .10, .29]);
    for (const z of [.55, .89]) box(rifle, steel, [.12, .18, .04], [0, .01, z]);
    cylinder(rifle, steel, .022, .12, [.085, .13, .22], .022, 8).rotation.z = Math.PI / 2;
    oval(rifle, dark, [.035, .035, .035], [.15, .13, .22], 12);
    box(rifle, leather, [.13, .21, .36], [0, -.04, -.33]);
    box(rifle, dark, [.045, .08, .06], [0, .15, 1.14]);
    sword.position.set(-.42, 1.22, .18);
    box(sword, leather, [.06, .24, .07], [0, -.20, .06]);
    box(sword, brass, [.20, .035, .15], [0, -.06, .06]);
    box(sword, blade, [.055, 1.08, .024], [0, .50, .065]);
    mesh(new THREE.ConeGeometry(.039, .18, 3), blade, [0, 1.13, .065], sword);
    box(torso, dark, [.08, .92, .09], [-.36, .66, -.11]).rotation.z = -.2;
    box(torso, leather, [.43, .46, .20], [0, 1.13, -.30]);
    for (const s of [-1, 1]) box(torso, cloth, [.045, .44, .022], [s * .14, 1.13, -.407]);
    box(torso, leather, [.45, .085, .23], [0, 1.35, -.305]);
    const flask = oval(torso, steel, [.12, .17, .08], [.35, .91, -.16], 16); flask.rotation.z = -.2;
    for (const [name, part] of Object.entries({ torso, head, arms, sword, rifle })) part.name = name;
    batchModel(root); shareGeometry(root); templates.set(type, root);
  }
  const group = templates.get(type).clone(true), scale = officer ? 1.45 : 1;
  group.scale.setScalar(scale);
  const parts = Object.fromEntries(['torso', 'head', 'arms', 'sword', 'rifle', 'leg-1', 'leg1', 'knee-1', 'knee1'].map(name => [name, group.getObjectByName(name)]));
  function animate(time, moving, swing = 0, pose = '') {
    const step = Math.sin(time * 9.5), slash = pose === 'blade' || pose === 'windup';
    parts['leg-1'].rotation.x = step * moving * .65; parts.leg1.rotation.x = -step * moving * .65;
    parts['knee-1'].rotation.x = Math.max(0, -step) * moving * .6; parts.knee1.rotation.x = Math.max(0, step) * moving * .6;
    parts.torso.position.y = Math.abs(step) * moving * .045;
    parts.torso.rotation.x = pose === 'stagger' ? -.22 : moving * .06;
    parts.arms.rotation.x = pose === 'reload' ? -.42 : pose === 'aim' ? -.08 : moving * .13;
    parts.head.rotation.z = pose === 'reload' ? .12 : 0;
    parts.rifle.visible = !slash; parts.sword.visible = slash;
    parts.sword.rotation.set(pose === 'windup' ? -.8 : -1.4, Math.sin(swing * Math.PI) * 2.5, -.4);
  }
  animate(0, 0);
  return { group, animate, scale, radius: officer ? .72 : .43, hitRadius: officer ? .82 : .54, barHeight: officer ? 3.65 : 2.55 };
}
