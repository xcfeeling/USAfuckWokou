import * as THREE from 'three';

export const CHARACTERS = [
  { id: 'panda', name: '竹影熊猫', detail: '护盾冲击 · 近身更稳', skill: '竹叶护盾' },
  { id: 'hero', name: '光能队长', detail: '能量爆发 · 远射更强', skill: '光能冲刺' },
  { id: 'alien', name: '星际小兵', detail: '低重力 · 灵活闪避', skill: '低重力' }
];
export const WEAPONS = [
  { id: 'pistol', name: '脉冲手枪', detail: '精准 · 快速连射', damage: 1, fireRate: .27, spread: 0, color: '#d7e8df' },
  { id: 'rifle', name: '磁轨步枪', detail: '穿透 · 中距离压制', damage: 2, fireRate: .42, spread: 0, color: '#f0bf73' },
  { id: 'scatter', name: '星尘散射炮', detail: '扇形 · 近距离爆发', damage: 1, fireRate: .72, spread: .18, pellets: 5, color: '#a9ddff' },
  { id: 'plasma', name: '等离子加农', detail: '重击 · 击退敌群', damage: 4, fireRate: .95, spread: .02, color: '#d6a9ff' }
];
export const VEHICLES = [
  { id: 'scooter', name: '电动车', detail: '平稳 · 易于控制', speed: 6.4, jump: 8.3, half: 1.22, width: .42, seat: [-.38, 1.13, 0], handle: [.76, 1.56, .39], pedal: false, radius: .4 },
  { id: 'bicycle', name: '自行车', detail: '轻巧 · 灵活跳跃', speed: 5.9, jump: 9, half: 1.35, width: .35, seat: [-.42, 1.27, 0], handle: [.82, 1.59, .34], pedal: true, radius: .51 },
  { id: 'motorcycle', name: '摩托车', detail: '迅速 · 远距离腾空', speed: 7.7, jump: 8.8, half: 1.48, width: .46, seat: [-.47, 1.11, 0], handle: [.77, 1.55, .44], pedal: false, radius: .47 },
  { id: 'tricycle', name: '三轮车', detail: '稳定 · 顺路载货', speed: 5.6, jump: 8.4, half: 1.48, width: .77, seat: [.05, 1.22, 0], handle: [.94, 1.57, .35], pedal: true, radius: .43 },
  { id: 'truck', name: '小货车', detail: '沉稳 · 撞开轻障碍', speed: 5.1, jump: 9.2, half: 2.08, width: .85, seat: [.85, 1.19, .27], handle: [1.43, 1.85, .28], pedal: false, radius: .46, characterScale: .78 }
];
export const SCENES = [
  { id: 'river', name: '河岸清晨', detail: '木桥 · 河风 · 顺路早餐', time: '07:42 / 18°C' },
  { id: 'ruins', name: '90年代战场', detail: '断壁 · 沙袋 · 倭寇来袭', time: '1996 / 17:26' },
  { id: 'rail', name: '山间铁道', detail: '道岔 · 信号灯 · 山风', time: '09:18 / 16°C' },
  { id: 'city', name: '城市马路', detail: '街角 · 施工区 · 快递', time: '16:32 / 22°C' }
];
const UP = new THREE.Vector3(0, 1, 0);
const vectorA = new THREE.Vector3(), vectorB = new THREE.Vector3();
export function mesh(geometry, material, position = [0, 0, 0], parent) {
  const item = new THREE.Mesh(geometry, material);
  item.position.set(...position); item.castShadow = item.receiveShadow = true;
  if (parent) parent.add(item);
  return item;
}
export function box(parent, material, size, position, bevel = 0) {
  const item = mesh(new THREE.BoxGeometry(...size), material, position, parent);
  return item;
}
export function oval(parent, material, size, position, detail = 24) {
  const item = mesh(new THREE.SphereGeometry(1, detail, Math.floor(detail * .65)), material, position, parent);
  item.scale.set(...size); return item;
}
export function cylinder(parent, material, radius, height, position, top = radius, segments = 16) {
  return mesh(new THREE.CylinderGeometry(top, radius, height, segments), material, position, parent);
}
export function link(item, start, end) {
  vectorA.set(...start); vectorB.set(...end);
  item.position.copy(vectorA).add(vectorB).multiplyScalar(.5);
  vectorB.sub(vectorA);
  item.scale.y = vectorB.length();
  item.quaternion.setFromUnitVectors(UP, vectorB.normalize());
}
export function tube(parent, material, radius, start, end, segments = 10) {
  const item = cylinder(parent, material, radius, 1, [0, 0, 0], radius, segments);
  link(item, start, end); return item;
}
function shell(parent, material, points, depth) {
  const shape = new THREE.Shape();
  points.forEach((point, index) => index ? shape.lineTo(...point) : shape.moveTo(...point));
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: .08, bevelThickness: .07, curveSegments: 12 });
  geometry.translate(0, 0, -depth / 2);
  return mesh(geometry, material, [0, 0, 0], parent);
}
function wheel(parent, mats, radius, width, position, spokeCount = 14) {
  const group = new THREE.Group(); group.position.set(...position); parent.add(group);
  const tireWidth = width * .48;
  mesh(new THREE.TorusGeometry(radius - tireWidth, tireWidth, 14, 48), mats.rubber, [0, 0, 0], group);
  mesh(new THREE.TorusGeometry(radius * .7, .025, 8, 48), mats.silver, [0, 0, 0], group);
  mesh(new THREE.TorusGeometry(radius * .93, .008, 6, 48), mats.steel, [0, 0, width * .37], group);
  const hub = cylinder(group, mats.silver, radius * .17, width + .02, [0, 0, 0]); hub.rotation.x = Math.PI / 2;
  for (let i = 0; i < spokeCount; i++) {
    const angle = i / spokeCount * Math.PI * 2;
    tube(group, mats.silver, .008, [0, 0, (i % 2 ? -1 : 1) * width * .2], [Math.cos(angle) * radius * .7, Math.sin(angle) * radius * .7, 0], 5);
  }
  group.userData.radius = radius;
  return group;
}

export function createVehicle(id, mats) {
  const info = VEHICLES.find((vehicle) => vehicle.id === id);
  const group = new THREE.Group(), wheels = [], pedals = [];
  let crank = null;
  const addWheel = (x, z, radius = info.radius, width = .21) => wheels.push(wheel(group, mats, radius, width, [x, radius, z], id === 'bicycle' ? 20 : 12));
  const pair = (action) => [-1, 1].forEach(action);
  const front = id === 'tricycle' ? 1.4 : id === 'motorcycle' ? 1.38 : 1.08;
  const rear = id === 'tricycle' ? -.93 : id === 'motorcycle' ? -1.26 : -1.08;
  if (id === 'truck') {
    for (const x of [-1.38, 1.39]) for (const z of [-.82, .82]) addWheel(x, z, .46, .28);
    box(group, mats.steel, [4.25, .18, 1.45], [0, .64, 0]);
    box(group, mats.teal, [1.63, .72, 1.72], [1.04, 1.09, 0]);
    box(group, mats.ivory, [1.68, .13, 1.77], [1.04, 2.78, 0]);
    for (const z of [-.83, .83]) {
      for (const x of [.28, 1.79]) box(group, mats.ivory, [.07, 1.1, .075], [x, 2.2, z]);
      box(group, mats.teal, [1.5, .46, .085], [1.02, 1.65, z]);
      box(group, mats.glass, [1.38, .72, .025], [1.02, 2.2, z]);
      box(group, mats.silver, [.25, .035, .06], [.63, 1.88, z * 1.03]);
    }
    box(group, mats.glass, [.025, .87, 1.6], [1.8, 2.21, 0]);
    box(group, mats.steel, [.12, .2, 1.88], [1.94, .91, 0]);
    pair((s) => box(group, mats.glow, [.05, .17, .34], [1.887, 1.33, s * .56]));
    box(group, mats.rubber, [.025, .21, .8], [1.906, 1.14, 0]);
    for (const z of [-.32, -.16, 0, .16, .32]) box(group, mats.silver, [.04, .19, .025], [1.924, 1.14, z]);
    box(group, mats.wood, [2.12, .1, 1.62], [-1.1, .85, 0]);
    pair((s) => {
      box(group, mats.ivory, [2.2, .5, .09], [-1.1, 1.12, s * .8]);
      for (const x of [-2.12, -1.12, -.13]) box(group, mats.steel, [.035, .55, .11], [x, 1.13, s * .8]);
      box(group, mats.tail, [.055, .12, .27], [-2.24, .76, s * .6]);
    });
    box(group, mats.ivory, [.09, .5, 1.63], [-2.17, 1.12, 0]);
    box(group, mats.leather, [.51, .12, .48], [.82, 1.18, .27]);
    const steering = mesh(new THREE.TorusGeometry(.22, .025, 8, 24), mats.rubber, [1.41, 1.84, .27], group); steering.rotation.y = Math.PI / 2;
  } else {
    addWheel(front, 0, info.radius, id === 'bicycle' ? .085 : .23);
    if (id === 'tricycle') { addWheel(rear, -.73, .43, .2); addWheel(rear, .73, .43, .2); }
    else addWheel(rear, 0, info.radius, id === 'bicycle' ? .085 : .28);
    const sx = info.seat[0], sy = info.seat[1];
    pair((s) => {
      tube(group, mats.silver, id === 'bicycle' ? .028 : .045, [front, info.radius, s * .1], [.77, 1.4, s * .1]);
      tube(group, mats.steel, .026, [rear, info.radius, s * .12], [sx, sy - .12, s * .12]);
      tube(group, mats.teal, .038, [rear, info.radius, s * .12], [0, .53, s * .12]);
    });
    tube(group, id === 'motorcycle' ? mats.red : mats.teal, .048, [sx, sy - .11, 0], [.76, 1.35, 0]);
    tube(group, mats.teal, .042, [sx, sy - .11, 0], [0, .53, 0]);
    tube(group, mats.teal, .042, [0, .53, 0], [.76, 1.35, 0]);
    tube(group, mats.silver, .036, [.76, 1.35, 0], [info.handle[0], info.handle[1], 0]);
    tube(group, mats.silver, .025, [info.handle[0], info.handle[1], -.42], [info.handle[0], info.handle[1], .42]);
    pair((s) => tube(group, mats.rubber, .043, [info.handle[0], info.handle[1], s * .27], [info.handle[0], info.handle[1], s * .44]));
    oval(group, mats.leather, id === 'bicycle' ? [.32, .07, .19] : [.49, .09, .28], [sx, sy - .015, 0]);
    if (id === 'scooter') {
      shell(group, mats.ivory, [[-1.23,.55],[-1.05,.97],[-.65,1.06],[-.3,.85],[-.15,.44],[.58,.44],[.83,1.35],[1.07,1.41],[1.24,1.12],[.95,.35],[.72,.29],[-.94,.32]], .49);
      box(group, mats.leather, [.76, .045, .66], [.18, .43, 0]);
      pair((s) => {
        box(group, mats.teal, [.72, .075, .025], [-.73, .72, s * .327]);
        tube(group, mats.silver, .014, [.72, 1.59, s * .37], [.72, 1.91, s * .55]);
        oval(group, mats.silver, [.085, .064, .13], [.73, 1.93, s * .56]);
      });
      oval(group, mats.ivory, [.23, .18, .28], [.82, 1.55, 0]);
      oval(group, mats.glow, [.025, .117, .18], [1.039, 1.58, 0]);
      oval(group, mats.tail, [.035, .065, .13], [-1.24, .82, 0]);
      tube(group, mats.silver, .02, [-1.3, 1.09, -.22], [-1.3, 1.09, .22]);
    } else if (id === 'motorcycle') {
      oval(group, mats.red, [.55, .25, .31], [.22, 1.08, 0]);
      oval(group, mats.leather, [.32, .09, .25], [-.97, 1.01, 0]);
      box(group, mats.steel, [.62, .48, .56], [.02, .67, 0]);
      for (let i = 0; i < 6; i++) box(group, mats.silver, [.57, .025, .61], [.02, .5 + i * .067, 0]);
      pair((s) => {
        tube(group, mats.silver, .057, [.23, .52, s * .36], [-1.05, .43, s * .4]);
        tube(group, mats.rubber, .034, [.09, .56, s * .24], [.09, .56, s * .48]);
      });
      const lamp = cylinder(group, mats.silver, .17, .15, [.88, 1.42, 0]); lamp.rotation.z = -Math.PI / 2;
      oval(group, mats.glow, [.025, .145, .145], [.973, 1.42, 0]);
      for (const x of [-1.26, 1.38]) {
        const fender = mesh(new THREE.TorusGeometry(.53, .055, 7, 22, Math.PI * .8), mats.red, [x, .48, 0], group); fender.rotation.z = .1 * Math.PI;
      }
    } else if (id === 'tricycle') {
      box(group, mats.teal, [1.18, .53, 1.49], [-1.04, 1.03, 0]);
      box(group, mats.wood, [1.08, .08, 1.34], [-1.04, 1.28, 0]);
      pair((s) => tube(group, mats.silver, .025, [-1.59, 1.48, s * .72], [-.47, 1.48, s * .72]));
      for (const x of [-1.58, -.49]) pair((s) => tube(group, mats.silver, .022, [x, 1.25, s * .72], [x, 1.48, s * .72]));
      tube(group, mats.steel, .055, [-.95, .43, -.79], [-.95, .43, .79]);
    }
    if (info.pedal) {
      const ring = mesh(new THREE.TorusGeometry(.19, .022, 7, 26), mats.steel, [0, .55, .14], group);
      crank = new THREE.Group();crank.position.set(0,.55,0);group.add(crank);
      pair(s=>{
        tube(crank,mats.silver,.018,[0,0,s*.2],[s*.22,0,s*.25]);
        pedals.push(box(crank,mats.rubber,[.18,.035,.13],[s*.22,0,s*.25]));
      });
      tube(group, mats.steel, .022, [rear, .5, .17], [0, .36, .17]);
      tube(group, mats.steel, .022, [rear, .5, .17], [0, .74, .17]);
    }
  }
  const cargo = new THREE.Group();
  cargo.position.set(id === 'truck' ? -1.1 : id === 'tricycle' ? -1.02 : -.99, id === 'truck' ? 1.12 : id === 'tricycle' ? 1.5 : 1.32, 0);
  box(cargo, mats.wood, [.5, .37, .42], [0, .02, 0]);
  box(cargo, mats.ivory, [.51, .07, .43], [0, .09, 0]);
  box(cargo, mats.teal, [.06, .39, .44], [0, .02, 0]);
  cargo.visible = false; group.add(cargo);
  return { group, wheels, cargo, info, crank, pedals };
}

export function createCharacter(id, mats, info = VEHICLES[0]) {
  const root = new THREE.Group(), torso = new THREE.Group(), head = new THREE.Group();
  root.add(torso); torso.add(head);
  const isPanda = id === 'panda', isHero = id === 'hero';
  const skin = isPanda ? mats.whiteFur : isHero ? mats.silver : mats.alien;
  const suit = isPanda ? mats.blackFur : isHero ? mats.red : mats.suit;
  oval(torso, isPanda ? mats.whiteFur : suit, isPanda ? [.38,.47,.34] : [.27,.45,.29], [0,.43,0]);
  oval(torso, skin, [.22,.23,.23], [.12,.57,0]);
  head.position.set(.12, 1.06, 0);
  oval(head, skin, isPanda ? [.43,.42,.4] : isHero ? [.29,.38,.28] : [.39,.45,.34], [0,0,0], 32);
  if (isPanda) {
    for (const s of [-1,1]) {
      oval(head, mats.blackFur, [.16,.17,.14], [-.12,.31,s*.31]);
      const patch = oval(head, mats.blackFur, [.055,.14,.102], [.35,.035,s*.20]); patch.rotation.z = -.12;
      oval(head, mats.eye, [.037,.047,.033], [.398,.039,s*.2]);
      oval(head, mats.glow, [.009,.011,.011], [.423,.057,s*.205], 12);
      oval(head, mats.whiteFur, [.14,.12,.14], [.32,-.17,s*.09]);
    }
    oval(head, mats.blackFur, [.075,.047,.068], [.46,-.13,0]);
    tube(head, mats.blackFur, .013, [.453,-.177,0], [.43,-.225,0]);
  } else if (isHero) {
    const fin = new THREE.Shape(); fin.moveTo(-.15,-.12); fin.lineTo(-.06,.59); fin.lineTo(.11,.31); fin.lineTo(.22,.06); fin.closePath();
    const crest = new THREE.ExtrudeGeometry(fin,{depth:.045,bevelEnabled:true,bevelSize:.012,bevelThickness:.01,bevelSegments:2,steps:1}); crest.translate(0,0,-.0225); mesh(crest,mats.silver,[0,0,0],head);
    for (const s of [-1,1]) { const eye = oval(head, mats.glow, [.045,.079,.105],[.253,.035,s*.13]); eye.rotation.x = s*.23; }
    oval(head,mats.silver,[.067,.1,.048],[.305,-.06,0]);
    oval(head,mats.steel,[.022,.026,.089],[.279,-.19,0]);
    oval(torso,mats.silver,[.235,.1,.305],[.13,.71,0]);
    oval(torso,mats.blueGlow,[.045,.065,.062],[.353,.66,0]);
    for (const s of [-1,1]) oval(torso,mats.silver,[.19,.11,.06],[.09,.21,s*.26]);
  } else {
    for (const s of [-1,1]) {
      const eye = oval(head,mats.eye,[.045,.16,.12],[.326,.05,s*.17]); eye.rotation.x = s*.3;
      oval(head,mats.silver,[.011,.024,.029],[.368,.105,s*.178]);
    }
    oval(head,mats.alien,[.06,.04,.048],[.38,-.13,0]);
    oval(torso,mats.copper,[.035,.078,.07],[.325,.52,.09]);
    tube(torso,mats.ivory,.012,[.274,.29,0],[.274,.69,0]);
  }
  const arms = [], legs = [];
  for (const side of [-1,1]) {
    const upper = cylinder(torso,suit,isPanda?.12:.095,1,[0,0,0]);
    const lower = cylinder(torso,isHero?mats.silver:suit,isPanda?.115:.083,1,[0,0,0]);
    const hand = oval(torso,isPanda?mats.blackFur:skin,[.13,.1,.105],[0,0,0]);
    const thigh = cylinder(root,suit,isPanda?.15:.115,1,[0,0,0]);
    const shin = cylinder(root,isHero?mats.silver:suit,isPanda?.135:.105,1,[0,0,0]);
    const foot = oval(root,isPanda?mats.blackFur:isHero?mats.red:mats.copper,[.22,.09,.13],[0,0,0]);
    arms.push({upper,lower,hand,side}); legs.push({thigh,shin,foot,side});
  }
  root.position.set(...info.seat); root.scale.setScalar(info.characterScale || 1);
  const scale = info.characterScale || 1;
  const handWorld = new THREE.Vector3();
  function animate(phase, celebration = 0, suspension = 0) {
    torso.position.y = suspension;
    head.rotation.y = -.43 - celebration * .53;
    head.rotation.z = .03 * Math.sin(phase*.7) - celebration*.055;
    for (const arm of arms) {
      const s = arm.side, raise = s === 1 ? celebration : 0;
      const grip = [(info.handle[0]-info.seat[0])/scale,(info.handle[1]-info.seat[1])/scale,(s*info.handle[2]-info.seat[2])/scale];
      const shoulder = [.02,.72,s*.28];
      const end = [THREE.MathUtils.lerp(grip[0],.04,raise),THREE.MathUtils.lerp(grip[1],1.65,raise),THREE.MathUtils.lerp(grip[2],s*.48,raise)];
      const elbow = [(shoulder[0]+end[0])*.5+.08,(shoulder[1]+end[1])*.5-.18+raise*.16,s*.42];
      link(arm.upper,shoulder,elbow); link(arm.lower,elbow,end); arm.hand.position.set(...end); arm.hand.rotation.z = -.25-raise*.9;
    }
    for (const leg of legs) {
      const s=leg.side, p=phase+(s===1?0:Math.PI);
      const foot = info.pedal ? [(Math.cos(p)*.22-info.seat[0])/scale,(.55+Math.sin(p)*.22-info.seat[1])/scale,s*.25/scale] : [.55,-.69,s*.31];
      if(info.id==='truck'){foot[0]=.54;foot[1]=-.55;foot[2]=s*.2;}
      const hip = [0,0,s*.2], knee = [.43,-.32,s*.34];
      link(leg.thigh,hip,knee); link(leg.shin,knee,foot); leg.foot.position.set(...foot);
    }
  }
  animate(0);
  return { group: root, animate, handPosition: () => arms[1].hand.getWorldPosition(handWorld) };
}

export function createRide(character, vehicle, mats) {
  const ride=createVehicle(vehicle,mats), person=createCharacter(character,mats,ride.info);
  ride.group.add(person.group);
  return {...ride,person};
}

export function labelTexture(text, subtitle='', color='#28483e', background='#edf0db') {
  const canvas=document.createElement('canvas'); canvas.width=512;canvas.height=192;
  const ctx=canvas.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,512,192);
  ctx.fillStyle=color;ctx.textAlign='center';ctx.font='600 53px "Microsoft YaHei",sans-serif';ctx.fillText(text,256,92);
  if(subtitle){ctx.font='22px "Microsoft YaHei",sans-serif';ctx.fillText(subtitle,256,143);}
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;return texture;
}
