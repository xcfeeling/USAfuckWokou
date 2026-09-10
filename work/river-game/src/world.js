import * as THREE from 'three';
import { Water } from 'three/addons/objects/Water.js';
import { box, oval, cylinder, tube, mesh, labelTexture } from './models.js';

const LENGTH=36, COUNT=7;
function rng(seed){return()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
function instances(parent, geometry, material, items, colors=false){
  const batch=new THREE.InstancedMesh(geometry,material,items.length), dummy=new THREE.Object3D();
  items.forEach((item,index)=>{
    dummy.position.set(...item.p);dummy.scale.set(...item.s);dummy.rotation.set(...(item.r||[0,0,0]));dummy.updateMatrix();batch.setMatrixAt(index,dummy.matrix);
    if(colors)batch.setColorAt(index,new THREE.Color(item.color));
  });
  batch.castShadow=batch.receiveShadow=true;parent.add(batch);return batch;
}
function treeData(random,x,z,scale,trunks,leaves){
  const h=(3.8+random()*2.8)*scale;
  const up=new THREE.Vector3(0,1,0),direction=new THREE.Vector3(),rotation=new THREE.Euler(),quaternion=new THREE.Quaternion();
  function branch(a,b,radius){
    direction.set(b[0]-a[0],b[1]-a[1],b[2]-a[2]);
    const length=direction.length();quaternion.setFromUnitVectors(up,direction.normalize());rotation.setFromQuaternion(quaternion);
    trunks.push({p:a.map((n,i)=>(n+b[i])/2),s:[radius,length,radius],r:[rotation.x,rotation.y,rotation.z]});
  }
  branch([x,0,z],[x+.14*scale,h*.91,z],.17*scale);
  for(let j=0;j<11;j++){
    const a=j*2.4+random()*.45, radius=(.85+random()*1.1)*scale;
    const center=[x+Math.cos(a)*radius,h*(.64+random()*.3),z+Math.sin(a)*radius];
    branch([x,h*(.34+j*.034),z],center,(.035+random()*.032)*scale);
    for(let k=0;k<65;k++){
      const angle=random()*Math.PI*2,spread=Math.sqrt(random())*1.13*scale;
      const size=(.24+random()*.22)*scale;
      leaves.push({p:[center[0]+Math.cos(angle)*spread,center[1]+(random()-.4)*1.45*scale,center[2]+Math.sin(angle)*spread],s:[size*.8,size*1.65,size],r:[random()*2.8,random()*6.28,random()*6.28],color:new THREE.Color().setHSL(.18+random()*.06,.14,.55+random()*.26)});
    }
  }
}
function foliage(parent,mats,leaves){
  const geometry=new THREE.PlaneGeometry(1,1),uv=geometry.attributes.uv;
  for(let i=0;i<uv.count;i++)uv.setXY(i,.163+uv.getX(i)*.176,.598+uv.getY(i)*.39);
  const batch=instances(parent,geometry,mats.foliage,leaves,true);
  batch.castShadow=false;
}
function forest(parent,mats,random,type){
  const trunks=[],leaves=[],grasses=[];
  const total=type==='river'?21:type==='rail'?17:4;
  for(let i=0;i<total;i++){
    const x=random()*LENGTH;
    const z=type==='river'?-29-random()*21:random()<.65?-17-random()*24:15+random()*17;
    treeData(random,x,z,.7+random()*.6,trunks,leaves);
  }
  for(let i=0;i<170;i++){
    const z=random()<.55?-4.6-random()*.65:4.6+random()*5;
    grasses.push({p:[random()*LENGTH,.13,z],s:[.02+random()*.025,.2+random()*.34,.02],r:[random()*.35,random()*6,random()*.25],color:new THREE.Color().setHSL(.19+random()*.08,.22,.26+random()*.18)});
  }
  instances(parent,new THREE.CylinderGeometry(.7,1,1,7),mats.bark,trunks);
  foliage(parent,mats,leaves);
  instances(parent,new THREE.ConeGeometry(1,1,3),mats.leaves[2],grasses,true);
}
function lamp(parent,mats,x,z,modern=false){
  cylinder(parent,mats.steel,.055,3.4,[x,1.7,z]);
  cylinder(parent,mats.steel,.11,.18,[x,.09,z]);
  tube(parent,mats.steel,.036,[x,3.38,z],[x,3.6,z-.55]);
  if(modern){box(parent,mats.steel,[.47,.06,.8],[x,3.59,z-.65]);box(parent,mats.glow,[.39,.012,.62],[x,3.55,z-.65]);}
  else{box(parent,mats.copper,[.29,.06,.29],[x,3.63,z-.55]);box(parent,mats.glow,[.16,.24,.16],[x,3.46,z-.55]);}
}
function bench(parent,mats,x,z){
  for(let i=0;i<4;i++)box(parent,mats.wood,[1.7,.075,.11],[x,.5,z+i*.135]);
  for(const s of [-1,1]){tube(parent,mats.steel,.035,[x+s*.62,0,z+.15],[x+s*.62,.55,z+.15]);tube(parent,mats.steel,.035,[x+s*.62,0,z+.47],[x+s*.62,.55,z+.47]);}
  for(let i=0;i<3;i++)box(parent,mats.wood,[1.7,.13,.075],[x,.69+i*.15,z+.55]);
}
function bridge(parent,mats,x){
  for(let i=0;i<18;i++){
    const z=-5-i*1.27, y=.15+Math.sin(i/17*Math.PI)*1.45;
    box(parent,mats.wood,[2.7,.14,1.2],[x,y,z]);
    for(const s of [-1,1]){
      box(parent,mats.wood,[.085,.99,.085],[x+s*1.28,y+.52,z]);
      if(i<17){const ny=.15+Math.sin((i+1)/17*Math.PI)*1.45;tube(parent,mats.wood,.044,[x+s*1.28,y+1,z],[x+s*1.28,ny+1,z-1.27]);}
    }
    if(i===4||i===13)for(const s of [-1,1])box(parent,mats.concrete,[.48,3,.55],[x+s*.92,y-1.5,z]);
  }
}
function boat(parent,mats,x,z){
  const group=new THREE.Group();group.position.set(x,-.05,z);parent.add(group);
  oval(group,mats.wood,[1.6,.24,.56],[0,0,0]);oval(group,mats.leather,[1.35,.17,.42],[0,.09,0]);
  for(const bx of [-.7,0,.7])box(group,mats.wood,[.16,.08,1],[bx,.17,0]);
  tube(group,mats.wood,.025,[-.25,.2,-.5],[.65,.27,-1.45]);
  group.userData.boat=true;return group;
}
function house(parent,mats,x,z,random,tall=false){
  const h=tall?4+random()*8:2.1+random()*1.6, w=3.2+random()*2.4,d=3+random()*2;
  const plaster=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.1+random()*.07,.08+random()*.13,.58+random()*.16),map:mats.concrete.map,normalMap:mats.concrete.normalMap,roughness:.95});
  box(parent,plaster,[w,h,d],[x,h*.5,z]);
  const windowMat=new THREE.MeshStandardMaterial({color:'#36535b',metalness:.32,roughness:.27});
  for(let floor=0;floor<Math.floor(h/1.4);floor++)for(let col=0;col<3;col++){
    box(parent,windowMat,[.48,.65,.028],[x-w*.31+col*w*.31,.95+floor*1.4,z+d*.5+.022]);
    box(parent,mats.ivory,[.57,.05,.095],[x-w*.31+col*w*.31,.61+floor*1.4,z+d*.5+.045]);
  }
  if(tall){box(parent,mats.concrete,[w+.15,.17,d+.15],[x,h,z]);box(parent,mats.steel,[.8,.7,.9],[x+.5,h+.36,z]);}
  else{
    const roof=new THREE.MeshStandardMaterial({color:'#656e65',roughness:.88});
    for(const s of [-1,1]){const part=box(parent,roof,[w+.6,.15,d*.64],[x,h+.48,z+s*d*.27]);part.rotation.x=s*.39;}
    box(parent,mats.darkConcrete,[.48,1.1,.5],[x-.8,h+.7,z-.6]);
  }
}
function ruinedBuilding(parent,mats,x,z,random){
  const width=3+random()*4,depth=3+random()*3,floors=3+Math.floor(random()*5);
  const wall=new THREE.MeshStandardMaterial({color:new THREE.Color().setHSL(.12,.035,.33+random()*.18),map:mats.concrete.map,normalMap:mats.concrete.normalMap,roughness:1});
  for(let i=0;i<floors;i++){
    const y=i*1.25;
    box(parent,mats.darkConcrete,[width+.12,.16,depth+.1],[x,y+.08,z]);
    for(const sx of [-1,1])for(const sz of [-1,1]){
      if(i>floors-3&&random()<.25)continue;
      box(parent,wall,[.24,1.22,.24],[x+sx*width*.47,y+.65,z+sz*depth*.47]);
    }
    for(let j=0;j<3;j++)if(random()>.2){
      const px=x-width*.33+j*width*.33;
      box(parent,wall,[width*.28,.42,.14],[px,y+.25,z+depth*.5]);
      if(random()>.4)box(parent,mats.steel,[.035,.58,.035],[px,y+.73,z+depth*.5]);
    }
  }
  for(let i=0;i<6;i++){
    const fragment=box(parent,mats.darkConcrete,[.8+random()*1.6,.3+random()*.5,.6+random()],[x+random()*width-width/2,.3,z+depth*.65+random()*2]);fragment.rotation.set(random()*.4,random()*3,random()*.4);
  }
  for(let i=0;i<5;i++)tube(parent,mats.steel,.013,[x-width*.4+i*width*.19,(floors-1)*1.25+.16,z],[x-width*.4+i*width*.19+.15,(floors-1)*1.25+.7+random(),z+.13]);
}
function sandbags(parent,mats,x,z){
  for(let i=0;i<7;i++){
    const bag=oval(parent,mats.wood,[.42,.2,.26],[x+i*.48,.2,z+Math.sin(i)*.05]);
    bag.rotation.z=(i%2-.5)*.12;
  }
  for(let i=0;i<5;i++)oval(parent,mats.wood,[.4,.18,.24],[x+.28+i*.52,.54,z+.08]);
}
function battlefieldProp(parent,mats,x,z,random){
  const crate=box(parent,mats.wood,[1.1,.72,.9],[x,.37,z]);crate.rotation.y=random()*1.2;
  box(parent,mats.ivory,[.06,.74,.92],[x,.37,z]);
  cylinder(parent,mats.rubber,.25,.16,[x,.85,z],.25,12).rotation.x=Math.PI/2;
  tube(parent,mats.steel,.02,[x-.5,.75,z],[x+.35,1.28,z+.12]);
}
function wreckedTruck(parent,mats,x,z){
  const wreck=box(parent,mats.darkConcrete,[2.8,.72,1.35],[x,.48,z]);wreck.rotation.set(.08,.24,.08);
  box(parent,mats.rubber,[1.05,.4,.08],[x+.35,.93,z+.69]);
  for(const sx of [-1,1]){const wheel=cylinder(parent,mats.rubber,.34,.18,[x+sx*.92,.35,z+.72],.34,14);wheel.rotation.x=Math.PI/2;}
  tube(parent,mats.steel,.025,[x-1.15,.72,z],[x-1.7,1.7,z+.12]);
}
function hillside(parent,mats,random){
  for(let layer=0;layer<3;layer++){
    const geometry=new THREE.PlaneGeometry(540,90,80,18);geometry.rotateX(-Math.PI/2);
    const p=geometry.attributes.position;
    for(let i=0;i<p.count;i++){
      const x=p.getX(i),z=p.getZ(i);
      const crest=7+Math.sin(x*.025+layer)*4+Math.sin(x*.066+layer*2)*3;
      p.setY(i,Math.max(0,Math.sin((z+45)/90*Math.PI))*(crest+layer*3));
    }
    geometry.computeVertexNormals();
    const material=new THREE.MeshStandardMaterial({color:['#778b67','#92a288','#a7b29e'][layer],map:layer===0?mats.grass.map:null,roughness:1});
    mesh(geometry,material,[80,-.3,-75-layer*48],parent);
  }
}
function tracks(parent,mats,z){
  const ties=[];
  for(let x=0;x<LENGTH;x+=.64)ties.push({p:[x,.02,z],s:[.2,.1,2.8]});
  instances(parent,new THREE.BoxGeometry(1,1,1),mats.wood,ties);
  for(const s of [-1,1]){
    box(parent,mats.steel,[LENGTH,.14,.105],[LENGTH/2,.16,z+s*.69]);
    box(parent,mats.silver,[LENGTH,.045,.085],[LENGTH/2,.248,z+s*.69]);
  }
}
function roadSign(parent,mats,x,z,text,subtitle){
  for(const sx of [-.54,.54])cylinder(parent,mats.steel,.035,1.9,[x+sx,.95,z]);
  const material=new THREE.MeshStandardMaterial({map:labelTexture(text,subtitle),roughness:.7,side:THREE.DoubleSide});
  box(parent,mats.teal,[1.7,.66,.08],[x,1.75,z]);
  mesh(new THREE.PlaneGeometry(1.65,.62),material,[x,1.75,z+.045],parent);
}

export function createEnvironment(type,assets){
  const {mats}=assets, root=new THREE.Group(), chunks=[],boats=[];
  const random=rng(7831+type.length*777);
  const nearMaterial=type==='ruins'?mats.darkConcrete:mats.grass;
  const surface=mesh(new THREE.PlaneGeometry(400,8.8),mats.road,[100,.013,0],root);surface.rotation.x=-Math.PI/2;surface.castShadow=false;
  for(const material of [mats.road.map,mats.road.normalMap,mats.road.roughnessMap])material.repeat.set(90,2);
  mats.grass.map.repeat.set(60,18);
  if(type==='river'){
    for(const z of [45,-68]){const terrain=mesh(new THREE.PlaneGeometry(500,80),nearMaterial,[110,-.05,z],root);terrain.rotation.x=-Math.PI/2;terrain.castShadow=false;}
    const bed=mesh(new THREE.PlaneGeometry(500,25),new THREE.MeshStandardMaterial({color:'#3e655b',roughness:.45}),[100,-1.4,-16.5],root);bed.rotation.x=-Math.PI/2;
    for(const z of [-5.1,-28.1]){const bank=box(root,mats.grass,[500,.8,2],[110,-.3,z]);bank.rotation.x=z<-10?-.23:.23;}
  }else{const terrain=mesh(new THREE.PlaneGeometry(500,180),nearMaterial,[110,-.065,-25],root);terrain.rotation.x=-Math.PI/2;terrain.castShadow=false;}
  let water=null,train=null;
  if(type==='river'){
    water=new Water(new THREE.PlaneGeometry(500,22),{textureWidth:384,textureHeight:384,waterNormals:assets.water,sunDirection:new THREE.Vector3(-.5,.7,-.25).normalize(),sunColor:0xfff1d3,waterColor:0x477a6d,distortionScale:.5,fog:true});
    water.rotation.x=-Math.PI/2;water.position.set(100,-.22,-16.4);root.add(water);
  }
  hillside(root,mats,random);
  for(let index=0;index<COUNT;index++){
    const chunk=new THREE.Group();root.add(chunk);chunks.push(chunk);
    for(const z of [-3.97,3.97])box(chunk,mats.paint,[LENGTH,.006,.08],[LENGTH/2,.024,z]);
    for(let x=0;x<LENGTH;x+=4.5)for(const z of [-1.2,1.2])box(chunk,mats.paint,[1.5,.006,.055],[x,.023,z]);
    if(type==='river'){
      forest(chunk,mats,random,type);
      for(let x=0;x<LENGTH;x+=4){
        cylinder(chunk,mats.wood,.055,.73,[x,.36,-4.6]);
        tube(chunk,mats.wood,.027,[x,.59,-4.6],[x+4,.59,-4.6]);
      }
      bench(chunk,mats,11,6.1);lamp(chunk,mats,8,-4.6);
      if(index%2===0){bridge(chunk,mats,24);boats.push(boat(chunk,mats,8,-15));}
      if(index%3===0){house(chunk,mats,15,-33,random);roadSign(chunk,mats,19,5.1,'竹桥驿站','RIVERSIDE POST');}
    }else if(type==='ruins'){
      for(let x=0;x<LENGTH;x+=7)ruinedBuilding(chunk,mats,x+random()*2,-10-random()*13,random);
      for(let x=0;x<LENGTH;x+=9){
        const slab=box(chunk,mats.concrete,[2.2,.3,1.2],[x,.12,5.8+random()*3]);slab.rotation.set(.2,random()*3,.12);
        tube(chunk,mats.steel,.025,[x,0,6.5],[x+.8,1.4,6.4]);
      }
      sandbags(chunk,mats,5.2,5.6);
      if(index%2===0){roadSign(chunk,mats,17,5.3,'临时补给站','SECTOR 07');battlefieldProp(chunk,mats,24,-6.7,random);}
      if(index%3===0)wreckedTruck(chunk,mats,13,6.2);
    }else if(type==='rail'){
      forest(chunk,mats,random,type);tracks(chunk,mats,-7.1);tracks(chunk,mats,-10.4);
      const mast=cylinder(chunk,mats.steel,.055,4.5,[22,2.25,-5.1]);
      box(chunk,mats.steel,[.31,.85,.21],[22,4.2,-5.1]);
      oval(chunk,mats.blueGlow,[.095,.095,.03],[22,4.39,-4.98]);oval(chunk,mats.rubber,[.09,.09,.03],[22,4.1,-4.98]);
      if(index%2===0)roadSign(chunk,mats,9,5.1,'山间巡护道','MOUNTAIN RAIL');
    }else{
      for(const z of [-6.3,6.3]){box(chunk,mats.concrete,[LENGTH,.14,3.4],[LENGTH/2,.03,z]);for(let x=0;x<LENGTH;x+=12)lamp(chunk,mats,x,z,true);}
      for(let x=2;x<LENGTH;x+=7){house(chunk,mats,x,-11,random,true);if(index%2===0&&x>12)house(chunk,mats,x,-24,random,true);}
      for(let x=0;x<LENGTH;x+=12){const treeRoot=new THREE.Group();chunk.add(treeRoot);const tr=[],lf=[];treeData(random,x,-5.9, .53,tr,lf);instances(treeRoot,new THREE.CylinderGeometry(.7,1,1,7),mats.bark,tr);foliage(treeRoot,mats,lf);}
      if(index%2===0)roadSign(chunk,mats,19,5.2,'沿途便利店','OPEN DAILY');
    }
  }
  if(type==='rail'){
    train=new THREE.Group();root.add(train);train.position.z=-10.4;
    for(let i=0;i<4;i++){
      box(train,mats.teal,[4.2,1.7,2.5],[i*4.55,1.35,0]);box(train,mats.ivory,[4.25,.15,2.55],[i*4.55,2.25,0]);
      for(let x=-1.35;x<=1.35;x+=.9)box(train,mats.eye,[.62,.5,.035],[i*4.55+x,1.76,1.27]);
      box(train,mats.ivory,[4.18,.12,.025],[i*4.55,1.22,1.272]);
      for(const x of [-1.2,1.2])for(const z of [-1,1]){const w=cylinder(train,mats.rubber,.3,.13,[i*4.55+x,.36,z]);w.rotation.x=Math.PI/2;}
    }
  }
  function update(distance,time){
    assets.wind.value=time;
    chunks.forEach((chunk,index)=>chunk.position.x=((index*LENGTH-distance+LENGTH*COUNT*100)%(LENGTH*COUNT))-LENGTH);
    for(const texture of [mats.road.map,mats.road.normalMap,mats.road.roughnessMap])texture.offset.x=(distance/4.444)%1;
    if(water)water.material.uniforms.time.value=time*.35;
    boats.forEach((boat,i)=>{boat.position.y=-.06+Math.sin(time*.8+i)*.06;boat.rotation.x=Math.sin(time*.65+i)*.035;});
    if(train)train.position.x=150-(time*11)%235;
  }
  update(0,0);
  return {root,update,type,water};
}

export function createObstacle(kind,mats){
  const group=new THREE.Group();
  let half=[.36,.3,.64],light=false;
  if(kind==='cone'){
    light=true;half=[.21,.31,.23];
    box(group,mats.rubber,[.49,.06,.49],[0,.03,0]);
    cylinder(group,mats.orange,.2,.59,[0,.35,0],.035,20);
    cylinder(group,mats.ivory,.137,.085,[0,.37,0],.119,20);
    cylinder(group,mats.ivory,.09,.065,[0,.51,0],.075,20);
  }else if(kind==='barrier'){
    half=[.32,.35,.69];
    box(group,mats.concrete,[.62,.49,1.38],[0,.255,0]);
    box(group,mats.yellow,[.66,.15,1.42],[0,.52,0]);
    for(let z=-.55;z<.7;z+=.3){const stripe=box(group,mats.rubber,[.675,.155,.13],[0,.52,z]);stripe.rotation.x=.37;}
    for(const z of [-.48,.48]){cylinder(group,mats.steel,.024,.22,[0,.71,z]);oval(group,mats.glow,[.055,.04,.055],[0,.83,z]);}
  }else{
    half=[.43,.28,.64];
    for(let i=0;i<5;i++){const part=mesh(new THREE.DodecahedronGeometry(.31,0),i%2?mats.concrete:mats.darkConcrete,[(i%2-.5)*.23,.2,-.5+i*.24],group);part.scale.set(1,.7+(i%3)*.12,1);part.rotation.set(i*.4,i*.6,i*.2);}
    tube(group,mats.copper,.018,[-.1,.3,-.35],[.05,.67,-.22]);
  }
  return {group,half,light};
}

export function createParcel(mats){
  const group=new THREE.Group();box(group,mats.wood,[.58,.45,.5],[0,.53,0]);box(group,mats.teal,[.09,.47,.52],[0,.53,0]);box(group,mats.ivory,[.4,.12,.515],[0,.54,0]);
  const ring=mesh(new THREE.TorusGeometry(.68,.018,8,48),mats.blueGlow,[0,.045,0],group);ring.rotation.x=-Math.PI/2;
  return {group,ring};
}
