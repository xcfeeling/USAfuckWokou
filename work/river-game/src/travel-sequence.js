import * as THREE from 'three';
import { CHAPTERS } from './campaign.js';
import { box, oval, cylinder, mesh } from './models.js';
import { createHero, disposeModel } from './chibi.js';
import { batchModel } from './model-batching.js';
import { surfaceMaps } from './surfaces.js';

const smooth = t => { const p = THREE.MathUtils.clamp(t, 0, 1); return p * p * (3 - 2 * p); };

export class TravelSequence {
  constructor(assets) {
    this.scene = new THREE.Scene(); this.scene.background = new THREE.Color('#427f92');
    this.scene.environment = assets.environment; this.scene.environmentIntensity = .45;
    this.camera = new THREE.OrthographicCamera(-70, 70, 50, -50, .1, 350);
    this.scene.add(new THREE.HemisphereLight('#d8e7f1', '#747768', .9));
    const sun = new THREE.DirectionalLight('#fff1da', 3.1); sun.position.set(-40, 90, 30); this.scene.add(sun);
    const mat = (color, options = {}) => new THREE.MeshStandardMaterial({ color, roughness: .84, ...options });
    const landMap = assets.maps.grass.clone(); landMap.repeat.set(.10, .10); landMap.wrapS = landMap.wrapT = THREE.RepeatWrapping;
    const land = mat('#91a387', { map: landMap }), sand = mat('#b8b09a', { map: assets.maps.sand }), rock = mat('#7b8170', { map: assets.maps.stone, normalMap: assets.maps.stoneNormal, normalScale: new THREE.Vector2(.4, .4) });
    const waterNormal = assets.water.clone(); waterNormal.repeat.set(45, 45); waterNormal.wrapS = waterNormal.wrapT = THREE.RepeatWrapping;
    this.sea = new THREE.Mesh(new THREE.PlaneGeometry(450, 450), mat('#386f7a', { normalMap: waterNormal, normalScale: new THREE.Vector2(.26, .26), metalness: 0, roughness: .22 }));
    this.sea.rotation.x = -Math.PI / 2; this.sea.position.y = -.28; this.scene.add(this.sea);
    // Original island outlines, arranged along the reference's southwest-to-northeast chain.
    const islands = [
      [[-39,33],[-37,28],[-32,27],[-34,21],[-29,20],[-25,24],[-22,23],[-22,29],[-27,32],[-26,38],[-30,42],[-33,37],[-37,40]],
      [[-23,20],[-20,16],[-14,17],[-8,14],[-6,18],[-11,23],[-17,23],[-20,26]],
      [[-26,16],[-25,12],[-20,11],[-18,7],[-11,8],[-7,4],[-3,5],[1,0],[6,1],[10,-5],[16,-8],[14,-14],[17,-18],[18,-27],[20,-32],[21,-40],[24,-42],[28,-38],[28,-32],[32,-29],[29,-23],[30,-17],[27,-12],[28,-8],[24,-6],[23,-1],[18,1],[18,6],[11,8],[7,5],[2,8],[-3,7],[-8,12],[-15,13],[-20,16]],
      [[21,-46],[25,-50],[22,-54],[26,-57],[32,-55],[37,-59],[39,-53],[47,-48],[41,-44],[39,-39],[34,-41],[29,-44],[26,-42]],
      [[-43,45],[-42,42],[-40,43],[-41,47]]
    ];
    this.landRoot = new THREE.Group(); this.scene.add(this.landRoot);
    for (const points of islands) {
      const shape = new THREE.Shape(); points.forEach(([x, z], i) => i ? shape.lineTo(x, -z) : shape.moveTo(x, -z)); shape.closePath();
      const coast = mesh(new THREE.ExtrudeGeometry(shape, { depth: 1.2, bevelEnabled: true, bevelSize: .38, bevelThickness: .3, bevelSegments: 2 }), sand, [0, -.05, 0], this.landRoot); coast.rotation.x = -Math.PI / 2;
      const top = mesh(new THREE.ShapeGeometry(shape), land, [0, 1.52, 0], this.landRoot); top.rotation.x = -Math.PI / 2;
    }
    const ridges = [[25,-36],[24,-31],[23,-27],[22,-22],[21,-18],[22,-13],[20,-5],[17,0],[12,3],[7,3],[0,5],[-7,9],[-14,12],[-29,29],[-28,25],[-15,20],[34,-49],[37,-48],[31,-47]];
    for (let i = 0; i < ridges.length; i++) {
      const [x, z] = ridges[i];
      const hill = mesh(new THREE.ConeGeometry(1, 1, 16, 3), rock, [x, 2.6, z], this.landRoot); hill.scale.set(2, 2.6 + Math.sin(i * 3.7) * .7, 2.7);
    }
    const routePoints = CHAPTERS.map(chapter => new THREE.Vector3(chapter.route[0], 1.65, chapter.route[1]));
    const road = new THREE.CatmullRomCurve3(routePoints, false, 'catmullrom', .18);
    mesh(new THREE.TubeGeometry(road, 96, .35, 5, false), mat('#536566'), [0, 0, 0], this.landRoot);
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(road.getPoints(140)), new THREE.LineDashedMaterial({ color: '#e1eaca', dashSize: .7, gapSize: .55 })); line.position.y = .36; line.computeLineDistances(); this.scene.add(line);
    this.pins = routePoints.map((p, i) => {
      const pin = new THREE.Group(); pin.position.copy(p); this.scene.add(pin);
      cylinder(pin, mat('#cfeddf'), .15, 2.4, [0, 1.2, 0], .15, 6);
      const disc = cylinder(pin, mat(CHAPTERS[i].id === 'palace' ? '#dfb677' : '#d9f9df'), .66, .18, [0, 2.4, 0], .66, 16);
      pin.userData.disc = disc; return pin;
    });
    const fuji = new THREE.Group(); fuji.position.set(14, 1.5, -9); this.landRoot.add(fuji);
    mesh(new THREE.ConeGeometry(3.2, 4.7, 28), rock, [0, 2.35, 0], fuji);
    mesh(new THREE.ConeGeometry(1.2, 1.8, 28), mat('#edf4ed'), [0, 3.86, 0], fuji);
    const palace = new THREE.Group(); palace.position.set(23, 1.5, -12); this.landRoot.add(palace);
    for (const [w, y] of [[4, .7], [2.8, 2]]) { box(palace, mat('#f0e9cf'), [w, 1.2, 2.8], [0, y, 0]); const roof = mesh(new THREE.ConeGeometry(w * .86, 1, 4), mat('#375c59'), [0, y + 1, 0], palace); roof.rotation.y = Math.PI / 4; roof.scale.z = .65; }
    batchModel(this.landRoot);
    this.vehicles = {};
    const olive = mat('#687762', { ...surfaceMaps('paint'), metalness: .35, roughness: .64, bumpScale: .008 });
    const steel = mat('#a9b4ad', { ...surfaceMaps('metal'), metalness: .8, roughness: .42, bumpScale: .005 }), rubber = mat('#29322d', { ...surfaceMaps('rubber'), bumpScale: .009 });
    const wood = mat('#867958', { map: assets.maps.bark }), lamp = mat('#d5cbb0', { roughness: .28 });
    const glass = mat('#739599', { metalness: .2, roughness: .17, transparent: true, opacity: .42, depthWrite: false });
    for (const kind of ['boat', 'truck', 'jeep']) {
      const root = new THREE.Group(); this.scene.add(root); root.visible = false; const wheels = [];
      if (kind === 'boat') {
        const hullShape = new THREE.Shape(); hullShape.moveTo(-1.35, -2.5); hullShape.lineTo(1.35, -2.5); hullShape.lineTo(1.35, 1.6); hullShape.lineTo(.72, 2.8); hullShape.lineTo(-.72, 2.8); hullShape.lineTo(-1.35, 1.6); hullShape.closePath();
        const hull = mesh(new THREE.ExtrudeGeometry(hullShape, { depth: .65, bevelEnabled: true, bevelSize: .14, bevelThickness: .15, bevelSegments: 1 }), olive, [0, .1, 0], root); hull.rotation.x = -Math.PI / 2;
        for (const s of [-1, 1]) box(root, steel, [.14, .8, 4.6], [s * 1.32, .8, 0]);
        box(root, wood, [2.1, .15, .55], [0, .9, -.7]); box(root, olive, [1.3, 1.4, .5], [0, 1.1, -1.8]);
        for (const s of [-1, 1]) {
          box(root, rubber, [.15, .065, 4.6], [s * 1.32, 1.23, 0]);
          for (let z = -1.8; z < 2; z += .7) box(root, olive, [.055, .63, .06], [s * 1.235, .84, z]);
        }
      } else {
        const length = kind === 'truck' ? 5 : 3.8;
        box(root, olive, [2.3, .55, length], [0, .85, 0]); box(root, olive, [2.15, .5, 1.4], [0, 1.22, 1.35]);
        for (const s of [-1, 1]) { box(root, steel, [.075, 1.1, .075], [s, 1.93, .55]); box(root, olive, [.13, .55, length - 1.5], [s * 1.12, 1.38, -.7]); }
        box(root, steel, [2.1, .08, .075], [0, 2.46, .55]);
        box(root, glass, [1.9, 1.0, .025], [0, 1.94, .56]);
        box(root, olive, [.045, 1.05, .035], [0, 1.94, .585]);
        box(root, rubber, [1.9, .36, .55], [0, 1.32, -.05]);
        for (const x of [-1.23, 1.23]) for (const z of [-length * .33, length * .33]) {
          const wheel = new THREE.Group(); wheel.position.set(x, .57, z); root.add(wheel);
          mesh(new THREE.TorusGeometry(.38, .13, 8, 24), rubber, [0, 0, 0], wheel).rotation.y = Math.PI / 2; wheels.push(wheel);
          for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, tread = box(wheel, rubber, [.24, .055, .12], [0, Math.cos(a) * .5, Math.sin(a) * .5]); tread.rotation.x = -a; }
          cylinder(root, steel, .25, .32, [x, .57, z], .25, 12).rotation.z = Math.PI / 2;
        }
        box(root, rubber, [1.12, .3, .03], [0, 1.08, length / 2 + .035]);
        for (let x = -.45; x < .5; x += .15) box(root, steel, [.038, .27, .04], [x, 1.08, length / 2 + .06]);
        box(root, steel, [2.35, .17, .18], [0, .73, length / 2 + .11]);
        for (const s of [-1, 1]) {
          box(root, lamp, [.26, .23, .05], [s * .75, 1.24, length / 2 + .03]);
          box(root, steel, [.025, .05, .24], [s * 1.185, 1.42, -.45]);
          for (let z = -length / 2 + .25; z < -.6; z += .7) box(root, steel, [.027, .49, .045], [s * 1.192, 1.39, z]);
        }
      }
      wheels.forEach(wheel => wheel.userData.animated = true); batchModel(root);
      this.vehicles[kind] = { root, wheels };
    }
    this.wake = new THREE.Group(); this.scene.add(this.wake);
    for (let i = 0; i < 7; i++) {
      const ring = mesh(new THREE.RingGeometry(.9, 1.05, 32, 1, .15, Math.PI * .85), new THREE.MeshBasicMaterial({ color: '#d4f6ed', transparent: true, opacity: .55, side: THREE.DoubleSide, depthWrite: false }), [0, -.08, 0], this.wake);
      ring.rotation.x = -Math.PI / 2;
    }
  }
  start(index, heroId) {
    this.index = index; this.time = 0; this.duration = index === 0 ? 9.5 : 8.2; this.active = true;
    const chapter = CHAPTERS[index], end = new THREE.Vector3(...[chapter.route[0], 1.9, chapter.route[1]]);
    const previous = index ? CHAPTERS[index - 1].route : [-43, 43];
    const from = new THREE.Vector3(previous[0], index ? 1.9 : .15, previous[1]);
    const middle = from.clone().lerp(end, .5); middle.x -= index ? 0 : 3;
    this.path = new THREE.CatmullRomCurve3([from, middle, end]);
    for (const vehicle of Object.values(this.vehicles)) vehicle.root.visible = false;
    this.vehicle = this.vehicles[chapter.transport]; this.vehicle.root.visible = true; this.vehicle.root.scale.setScalar(1.6);
    if (this.passenger) disposeModel(this.passenger.group);
    this.passenger = createHero(heroId); this.passenger.group.scale.setScalar(.86); this.passenger.group.position.set(-.45, chapter.transport === 'boat' ? .75 : 1.17, -.15); this.vehicle.root.add(this.passenger.group);
    this.pins.forEach((pin, i) => { pin.userData.disc.material.color.set(i < index ? '#85bca6' : i === index ? '#fcdb85' : '#bfd2cb'); });
    this.update(0, 16 / 9);
  }
  update(dt, aspect) {
    this.time += dt; const travel = smooth((this.time - .7) / (this.duration - 4)), position = this.path.getPoint(travel), tangent = this.path.getTangent(travel);
    this.vehicle.root.position.copy(position); this.vehicle.root.rotation.y = Math.atan2(tangent.x, tangent.z);
    this.vehicle.root.rotation.z = Math.sin(this.time * 4) * (this.index ? .012 : .025);
    for (const wheel of this.vehicle.wheels) wheel.rotation.x -= dt * 8;
    this.passenger.animate(this.time, 0);
    this.wake.visible = this.index === 0 && travel < 1; this.wake.position.copy(position); this.wake.position.y = 0; this.wake.rotation.y = this.vehicle.root.rotation.y;
    this.wake.children.forEach((ring, i) => { ring.position.z = -3 - (i + this.time * 3) % 7; ring.scale.setScalar(1 + (-ring.position.z - 3) * .3); ring.material.opacity = .55 * (1 - (-ring.position.z - 3) / 7); });
    this.sea.material.normalMap.offset.set(this.time * .008, this.time * .003);
    const span = Math.max(108, 114 / aspect), focus = new THREE.Vector3(3, 0, -5).lerp(position, .12 * smooth(this.time / 3));
    this.camera.left = -span * aspect / 2; this.camera.right = span * aspect / 2; this.camera.top = span / 2; this.camera.bottom = -span / 2;
    this.camera.zoom = 1 + smooth((this.time - 1) / 3) * .05; this.camera.updateProjectionMatrix();
    this.camera.position.copy(focus).add(new THREE.Vector3(0, 96, 73)); this.camera.lookAt(focus); this.camera.updateMatrixWorld();
    this.panorama = smooth((this.time - (this.duration - 2.6)) / 2.6);
    this.done = this.time >= this.duration;
  }
  stop() { this.active = false; this.done = true; }
}
