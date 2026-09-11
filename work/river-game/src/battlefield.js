import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { box, oval, cylinder, tube, mesh, labelTexture } from './models.js';
import { surfaceMaps, groundWeathering, roadEdges } from './surfaces.js';
import { CHAPTERS } from './campaign.js';
import { createCampaignScenery } from './campaign-scenery.js';

export const BATTLEFIELDS = CHAPTERS;
export const ARENA = Object.freeze({ x: 60, z: 50 });

export function createBattlefield(type, assets) {
  const chapter = CHAPTERS.find(item => item.id === type), natural = ['beach', 'jungle', 'mountain', 'fuji'].includes(type);
  const root = new THREE.Group(), {mats} = assets, fires = [], obstacles = [], districts = [];
  const ownedMaterials = new Set(), ownedMaps = new Set();
  function material(color, extra = {}) { const mat = new THREE.MeshStandardMaterial({color, roughness:.92,...extra});ownedMaterials.add(mat);return mat; }
  function tiled(texture,x,y){ const map=texture.clone();map.repeat.set(x,y);ownedMaps.add(map);return map; }
  const fieldX = ARENA.x, fieldZ = ARENA.z, rear = -fieldZ-4.6;
  function obstacle(x,z,halfX,halfZ,height,angle=0,walkOnly=false){const c=Math.abs(Math.cos(angle)),s=Math.abs(Math.sin(angle));obstacles.push({x,z,halfX:halfX*c+halfZ*s,halfZ:halfX*s+halfZ*c,height,walkOnly});}
  function beveled(parent,mat,size,position,radius=.035){return mesh(Math.min(...size)<.06?new THREE.BoxGeometry(...size):new RoundedBoxGeometry(...size,1,radius),mat,position,parent);}
  const grassy = type === 'jungle' || type === 'fuji';
  const groundMap = type === 'beach' ? assets.maps.sand : grassy ? assets.maps.grass : type === 'city' ? assets.maps.battleRoad : assets.maps.stone;
  const groundMat = material(type==='mountain'?'#a2afa5':'#e0e2da',{map:tiled(groundMap,27.5,25),vertexColors:true,roughness:.98});
  if(grassy){groundMat.bumpMap=tiled(groundMap,27.5,25);groundMat.bumpMap.colorSpace=THREE.NoColorSpace;groundMat.bumpScale=.045;}
  else{groundMat.normalMap=tiled(type==='beach'?assets.maps.sandNormal:type==='city'?assets.maps.battleNormal:assets.maps.stoneNormal,27.5,25);groundMat.normalScale.set(.5,.5);}
  for(const map of [groundMat.map,groundMat.bumpMap,groundMat.normalMap,groundMat.roughnessMap].filter(Boolean)){map.center.set(.5,.5);map.rotation=.23;}
  const groundGeometry=new THREE.PlaneGeometry(220,200,88,80),groundPositions=groundGeometry.attributes.position,groundColors=[];
  for(let i=0;i<groundPositions.count;i++){
    const x=groundPositions.getX(i),z=-groundPositions.getY(i);
    let shade=.90+Math.sin(x*.12+Math.cos(z*.09)*2)*.075+Math.sin(z*.27+x*.04)*.035;
    if(type==='beach')shade*=.79+.21*THREE.MathUtils.smoothstep(x,-53,-37);
    groundColors.push(shade*(grassy?.97:1),shade,shade*(grassy?.97:1));
  }
  groundGeometry.setAttribute('color',new THREE.Float32BufferAttribute(groundColors,3));
  const ground=mesh(groundGeometry,groundMat,[0,-.065,0],root);ground.rotation.x=-Math.PI/2;ground.castShadow=false;
  const roadMap=type==='beach'?assets.maps.sand:natural?assets.maps.soil:assets.maps.road;
  const roadNormal=type==='beach'?assets.maps.sandNormal:natural?assets.maps.soilNormal:assets.maps.normal;
  const roadRepeat=natural&&type!=='beach'?40:20;
  const roadMat=material(type==='beach'?'#bcb9aa':natural?'#b2b9be':'#bcc4c3',{map:tiled(roadMap,roadRepeat,7*roadRepeat/120),normalMap:tiled(roadNormal,roadRepeat,7*roadRepeat/120),roughnessMap:natural?null:tiled(assets.maps.rough,20,7/6),normalScale:new THREE.Vector2(.38,.38)});
  if(natural){roadMat.alphaMap=roadEdges();ownedMaps.add(roadMat.alphaMap);roadMat.transparent=true;roadMat.depthWrite=false;}
  for(const z of [-30,0,30]){const lane=mesh(new THREE.PlaneGeometry(fieldX*2,7),roadMat,[0,-.058,z],root);lane.rotation.x=-Math.PI/2;lane.castShadow=false;}
  for(const x of [-36,0,36]){const lane=mesh(new THREE.PlaneGeometry(fieldZ*2,7),roadMat,[x,-.054,0],root);lane.rotation.set(-Math.PI/2,0,Math.PI/2);lane.castShadow=false;}
  const weatherMap=groundWeathering(36,30);weatherMap.wrapS=weatherMap.wrapT=THREE.MirroredRepeatWrapping;weatherMap.repeat.set((fieldX*2+9)/36,(fieldZ*2+8)/30);ownedMaps.add(weatherMap);
  const weatherMat=new THREE.MeshBasicMaterial({map:weatherMap,color:'#cbd2ca',opacity:.55,transparent:true,depthWrite:false});ownedMaterials.add(weatherMat);
  const weather=mesh(new THREE.PlaneGeometry(fieldX*2+9,fieldZ*2+8),weatherMat,[0,-.047,0],root);weather.rotation.x=-Math.PI/2;weather.castShadow=false;
  const concrete=material('#c3c2ba',{map:mats.concrete.map,normalMap:mats.concrete.normalMap,normalScale:new THREE.Vector2(.42,.42)});
  const olive=material('#606f60',{...surfaceMaps('paint'),metalness:.25,roughness:.8,bumpScale:.009});
  const paint=material('#b3a16c'),white=material('#a3b0a7'),rust=material('#82604d',{...surfaceMaps('paint'),metalness:.2,bumpScale:.008}),dark=material('#373e3e');
  const brick=material('#a57763',{map:mats.concrete.map,normalMap:mats.concrete.normalMap,normalScale:new THREE.Vector2(.38,.38)}),tire=material('#242827',{...surfaceMaps('rubber'),roughness:.96,bumpScale:.012});
  const glass=material('#506366',{metalness:.35,roughness:.19,envMapIntensity:.85}),lampGlass=material('#c2baa1',{metalness:.15,roughness:.26});
  const bagMat=material('#a99f87',{...surfaceMaps('cloth'),bumpScale:.012});
  const seamMat=material('#655f4d',{roughness:1}),bareSteel=material('#a1aaa9',{...surfaceMaps('metal'),metalness:.82,roughness:.43,bumpScale:.008});
  const puddleMat=new THREE.MeshPhysicalMaterial({color:'#737b72',metalness:0,roughness:.17,envMapIntensity:.9,normalMap:assets.water,normalScale:new THREE.Vector2(.025,.025),transparent:true,opacity:.16,depthWrite:false});ownedMaterials.add(puddleMat);
  for(let i=0;i<65;i++){
    const x=Math.sin(i*9.17)*fieldX,z=Math.cos(i*3.47)*fieldZ;
    const outline=new THREE.Shape();for(let j=0;j<64;j++){const a=j/64*Math.PI*2,r=.86+Math.sin(a*3+i)*.12+Math.cos(a*5)*.07;j?outline.lineTo(Math.cos(a)*r,Math.sin(a)*r):outline.moveTo(Math.cos(a)*r,Math.sin(a)*r);}outline.closePath();
    const patch=mesh(new THREE.ShapeGeometry(outline),puddleMat,[x,-.033,z],root);patch.rotation.x=-Math.PI/2;patch.scale.set(.8+(i%4)*.55,.36+(i%3)*.25,1);patch.castShadow=false;
  }
  for(const x of [-fieldX-.55,fieldX+.55])for(let z=-fieldZ-.6;z<fieldZ+.6;z+=.52)box(root,paint,[.07,.009,.40],[x,-.026,z]);
  for(const z of [-fieldZ-.55,fieldZ+.55])for(let x=-fieldX-.5;x<fieldX+.5;x+=1.1)box(root,paint,[.55,.009,.07],[x,-.026,z]);
  if(!natural&&type!=='palace')for(const z of [-30,0,30])for(let x=-fieldX+2;x<fieldX-1;x+=4){if([-36,0,36].every(c=>Math.abs(x-c)>4))box(root,white,[1.8,.008,.09],[x,-.027,z]);}
  if(!natural&&type!=='palace')for(const x of [-36,0,36])for(let z=-fieldZ+2;z<fieldZ-1;z+=4){if([-30,0,30].every(c=>Math.abs(z-c)>4))box(root,white,[.09,.008,1.8],[x,-.027,z]);}
  if(type==='city'){
    for(const x of [-36,0,36])for(const s of [-1,1])box(root,paint,[.045,.008,fieldZ*2],[x+s*3.3,-.029,0]);
    for(const z of [-30,0,30])for(const s of [-1,1])box(root,paint,[fieldX*2,.008,.045],[0,-.028,z+s*3.3]);
  }
  const circle=mesh(new THREE.RingGeometry(2.05,2.11,64),paint,[0,-.025,0],root);circle.rotation.x=-Math.PI/2;circle.castShadow=false;
  box(root,paint,[3.1,.01,.12],[0,-.025,-1]);box(root,paint,[3.1,.01,.12],[0,-.025,1]);for(const x of [-1.35,1.35])box(root,paint,[.12,.01,2.05],[x,-.025,0]);
  function bags(x,z,angle=0){obstacle(x+Math.cos(angle)*1.8,z-Math.sin(angle)*1.8,2.25,.29,.7,angle);const line=new THREE.Group();line.position.set(x,0,z);line.rotation.y=angle;root.add(line);for(let row=0;row<2;row++)for(let i=0;i<6-row;i++){
    const bx=i*.72+row*.3,by=row*.33+.18;const bag=oval(line,bagMat,[.44,.20,.28],[bx,by,0],16);bag.rotation.y=(i%2-.5)*.1;
    const seam=mesh(new THREE.TorusGeometry(1,.014,4,24),seamMat,[bx,by,0],line);seam.rotation.x=Math.PI/2;seam.scale.set(.435,.273,.7);
    for(const s of [-1,1])oval(line,bagMat,[.055,.07,.12],[bx+s*.42,by,.01],10);
  }}
  bags(-fieldX-1.2,-fieldZ-1.6);bags(fieldX-3,-fieldZ-1.6);bags(-fieldX-1.7,1,Math.PI/2);bags(fieldX+1.7,-4,Math.PI/2);bags(-fieldX+.2,fieldZ+1.7);bags(fieldX-4,fieldZ+1.7);
  const stencil=labelTexture('AMMUNITION','LOT 96 / 7.62 MM','#d5cfac','#4d6151');ownedMaps.add(stencil);const stencilMat=material('#ffffff',{map:stencil});
  function crate(x,z){obstacle(x,z,.58,.48,.85);beveled(root,olive,[1.15,.83,.92],[x,.41,z]);for(const sx of [-.37,.37]){box(root,dark,[.06,.85,.95],[x+sx,.41,z]);for(const y of [.14,.67])cylinder(root,bareSteel,.026,.017,[x+sx,y,z+.483],.026,8).rotation.x=Math.PI/2;}mesh(new THREE.PlaneGeometry(.6,.23),stencilMat,[x,.46,z+.469],root);}
  for(let i=0;i<7;i++)crate(i<4?-fieldX-3.2:fieldX+3.2,-4+i*2.0);
  function barrel(x,z,burning=false){obstacle(x,z,.41,.41,.99);cylinder(root,burning?rust:olive,.39,.95,[x,.48,z],.39,24);for(const y of [.12,.72])cylinder(root,dark,.401,.038,[x,y,z],.401,24);cylinder(root,dark,.31,.01,[x,.965,z],.31,24);cylinder(root,bareSteel,.035,.018,[x+.15,.98,z],.035,10);if(burning)fires.push(new THREE.Vector3(x,.96,z));}
  barrel(-fieldX-2.5,fieldZ*.65,true);barrel(fieldX+2.5,-fieldZ*.67,true);barrel(fieldX+3.15,-fieldZ*.69);barrel(-fieldX-3.2,fieldZ*.67);
  function ruin(x,z,height){
    obstacle(x,z+.5,2.65,2.55,height);
    const group=new THREE.Group();group.position.set(x,0,z);root.add(group);
    box(group,concrete,[5.2,.22,4.1],[0,.11,0]);
    const wallShape=new THREE.Shape();wallShape.moveTo(-2.5,0);wallShape.lineTo(2.5,0);wallShape.lineTo(2.5,height-.5);
    for(const [xx,yy] of [[2.1,height-.4],[1.85,height-.9],[1.35,height-.77],[1.05,height-1.4],[.48,height-1.25],[.1,height-1.8],[-.55,height-1.5],[-.92,height-.4],[-1.35,height-.17],[-1.8,height-.45],[-2.5,height]])wallShape.lineTo(xx,yy);
    wallShape.closePath();
    for(const xx of [-1.55,.2,1.65]){const hole=new THREE.Path();hole.moveTo(xx-.46,.82);hole.lineTo(xx-.46,2.0);hole.lineTo(xx+.41,2.0);hole.lineTo(xx+.48,.82);hole.closePath();wallShape.holes.push(hole);}
    const wallGeometry=new THREE.ExtrudeGeometry(wallShape,{depth:.3,bevelEnabled:true,bevelSize:.026,bevelThickness:.022,bevelSegments:1});
    const wallUV=wallGeometry.attributes.uv;
    for(let i=0;i<wallUV.count;i++)wallUV.setXY(i,wallUV.getX(i)*.22,wallUV.getY(i)*.22);
    mesh(wallGeometry,concrete,[0,0,1.7],group);
    box(group,brick,[.26,height-1.0,3.8],[-2.4,(height-1.0)/2,-.1]);box(group,dark,[4.8,.16,3.7],[0,2.55,-.1]);
    box(group,concrete,[4.8,.17,3.7],[0,2.66,-.1]);box(group,concrete,[.26,height-.7,.28],[2.35,(height-.7)/2,-1.7]);
    for(const xx of [-1.55,.2,1.65]){
      box(group,dark,[.9,1.12,.025],[xx,1.4,1.67]);box(group,bareSteel,[.032,1.18,.04],[xx,1.41,2.03]);box(group,bareSteel,[.94,.025,.04],[xx,1.57,2.03]);
      for(let j=0;j<3;j++)box(group,brick,[.26,.12,.033],[xx-.35+j*.29,.69,2.019]);
      for(const s of [-1,1])beveled(group,white,[.065,1.28,.11],[xx+s*.49,1.41,2.018],.01);
      beveled(group,concrete,[1.15,.11,.49],[xx,.80,1.98],.018);
      box(group,white,[1.08,.065,.12],[xx,2.045,2.027]);
      const pane=new THREE.Shape();pane.moveTo(0,0);pane.lineTo(.28,0);pane.lineTo(.28,.4);pane.lineTo(.14,.23);pane.closePath();
      mesh(new THREE.ShapeGeometry(pane),glass,[xx-.42,1.61,2.011],group);
    }
    for(let i=0;i<9;i++){const xx=-2.35+i*.58,yy=height-1.5+Math.sin(i*1.8)*.7;tube(group,rust,.015,[xx,yy,1.82],[xx+Math.sin(i)*.1,yy+.85,1.9]);}
    for(let i=0;i<25;i++){
      const slab=mesh(new THREE.DodecahedronGeometry(1,0),i%3?concrete:brick,[Math.sin(i*4.7)*2.8,.12+(i%3)*.055,2.25+(i%5)*.19],group);
      slab.scale.set(.19+(i%3)*.16,.08+(i%2)*.08,.23+(i%4)*.11);slab.rotation.set(i*.08,i*.9,.12);
    }
    tube(group,rust,.055,[-2.3,.4,2.5],[1.7,1.1,2.7]);
    for(const s of [-1,1]){box(group,concrete,[.17,height-.5,.20],[s*2.32,(height-.5)/2,1.99]);for(let i=0;i<5;i++)box(group,brick,[.44,.17,.035],[s*1.5,2.2+i*.24,2.026]);}
    box(group,white,[4.95,.10,.40],[0,.67,1.89]);
    tube(group,dark,.058,[2.43,.26,2.05],[2.43,height-.72,2.05]);
    tube(group,dark,.058,[2.43,.26,2.05],[2.58,.17,2.20]);
    for(const y of [1.0,2.25])box(group,bareSteel,[.16,.055,.065],[2.43,y,2.08]);
    for(const xx of [-1.8,-.75,.6,1.7])box(group,rust,[.034,.06,.29],[xx,2.65,1.77]);
    if(type==='city'){
      const awning=box(group,olive,[4.6,.08,1.35],[0,2.50,2.2]);awning.rotation.x=-.13;
      const shop=labelTexture('五金商行','HARDWARE / EST. 1978','#d9d3b6','#405b63');ownedMaps.add(shop);
      mesh(new THREE.PlaneGeometry(3.1,.46),material('#ffffff',{map:shop}),[0,2.89,2.04],group);
      for(const s of [-1,1]){const plank=box(group,mats.wood,[.17,1.4,.08],[s*1.55,1.45,2.09]);plank.rotation.z=s*.38;}
    }
  }
  for(const x of [-fieldX-3.4,-fieldX+3.0,fieldX-3.0,fieldX+3.4])ruin(x,rear,type==='city'?5.3:4.4);
  function damagedWall(x,z,angle){
    obstacle(x,z,2.5,.27,1.9,angle);
    const wall=new THREE.Group();wall.position.set(x,0,z);wall.rotation.y=angle;root.add(wall);
    for(let row=0;row<7;row++)for(let col=0;col<8-row*.45;col++)beveled(wall,(row+col)%6===0?concrete:brick,[.53,.24,.25],[(col-3.5)*.57+(row%2)*.26,.13+row*.27,0],.012);
    for(let i=0;i<11;i++){const rubble=box(wall,i%3?concrete:brick,[.3+(i%3)*.12,.15,.2+(i%2)*.17],[Math.sin(i*7.2)*2.4,.08,.7+Math.cos(i*4)*.5]);rubble.rotation.y=i;}
  }
  damagedWall(-fieldX-3.1,fieldZ*.40,.6);damagedWall(fieldX+3.1,fieldZ*.60,-.4);
  function wreck(x,z,angle){
    obstacle(x,z,1.15,2.5,2.1,angle);
    const truck=new THREE.Group();truck.position.set(x,0,z);truck.rotation.y=angle;root.add(truck);
    box(truck,dark,[1.65,.28,3.9],[0,.63,0]);beveled(truck,olive,[1.82,.57,2.12],[0,1.0,-.88]);
    beveled(truck,olive,[1.77,1.25,1.35],[0,1.36,1.0],.09);box(truck,glass,[1.48,.58,.04],[0,1.64,1.69]);
    beveled(truck,olive,[1.8,.18,1.42],[0,2.0,1.03],.07);beveled(truck,rust,[1.65,.35,.7],[0,1.11,1.98],.075);
    box(truck,olive,[.045,.59,.035],[0,1.64,1.719]);box(truck,dark,[.014,.009,.64],[0,1.289,1.97]);
    box(truck,dark,[1.77,.15,.14],[0,.75,2.38]);box(truck,steelMaterial,[.65,.28,.07],[0,1.0,2.35]);
    for(let i=-3;i<=3;i++)box(truck,dark,[.04,.25,.015],[i*.075,1.01,2.391]);
    for(const s of [-1,1]){tube(truck,bareSteel,.012,[s*.30,1.39,1.72],[s*.42,1.7,1.72]);tube(truck,bareSteel,.024,[s*.88,1.59,1.37],[s*1.12,1.7,1.49]);beveled(truck,dark,[.08,.22,.17],[s*1.13,1.72,1.51]);}
    for(const [a,b] of [[[.1,1.53,1.721],[.35,1.81,1.721]],[[.19,1.62,1.722],[-.16,1.83,1.722]],[[.19,1.62,1.722],[.53,1.64,1.722]]])tube(truck,bareSteel,.005,a,b,4);
    for(const s of [-1,1]){
      box(truck,glass,[.03,.58,.75],[s*.9,1.6,1.06]);beveled(truck,lampGlass,[.23,.17,.06],[s*.65,1.06,2.35],.02);
      box(truck,olive,[.032,.58,.032],[s*.92,1.6,1.25]);box(truck,dark,[.15,.055,1.05],[s*.93,.69,1.01]);
      for(const zz of [-1.32,1.22]){
        const wheel=mesh(new THREE.TorusGeometry(.35,.11,8,28),tire,[s*.92,.46,zz],truck);wheel.rotation.y=Math.PI/2;
        const hub=cylinder(truck,bareSteel,.22,.28,[s*.94,.46,zz],.22,16);hub.rotation.z=Math.PI/2;
        cylinder(truck,dark,.09,.30,[s*.96,.46,zz],.09,12).rotation.z=Math.PI/2;
        const fender=mesh(new THREE.TorusGeometry(.53,.065,5,18,Math.PI),olive,[s*.9,.46,zz],truck);fender.rotation.y=Math.PI/2;
        for(let i=0;i<16;i++){const a=i/16*Math.PI*2,block=box(truck,dark,[.20,.045,.10],[s*.92,.46+Math.cos(a)*.455,zz+Math.sin(a)*.455]);block.rotation.x=-a;}
      }
      box(truck,olive,[.07,.75,2.1],[s*.89,1.29,-.88]);
      box(truck,bareSteel,[.026,.03,.21],[s*.9,1.29,.68]);for(const zz of [.46,1.62])box(truck,dark,[.012,.88,.019],[s*.895,1.13,zz]);
      for(const zz of [-1.65,-.9,-.2])box(truck,bareSteel,[.025,.68,.027],[s*.938,1.3,zz]);
      for(let i=0;i<4;i++)box(truck,dark,[.016,.10,.026],[s*.83,1.12,1.77+i*.12]);
    }
    for(let i=0;i<3;i++){box(truck,dark,[.5,.45,.6],[(i%2-.5)*.7,1.29,-1.5+i*.5]);}
    const burn=new THREE.Vector3(0,1.3,2.02).applyAxisAngle(new THREE.Vector3(0,1,0),angle).add(truck.position);fires.push(burn);
  }
  const containerMaterials=new Map();
  function container(x,z,color){if(!containerMaterials.has(color))containerMaterials.set(color,material(color,{...surfaceMaps('paint'),metalness:.45,roughness:.75,bumpScale:.015}));const mat=containerMaterials.get(color);obstacle(x,z,3.25,1.36,2.3);beveled(root,mat,[6.4,2.3,2.5],[x,1.15,z]);for(let bx=-2.95;bx<3;bx+=.28)box(root,mat,[.045,2.19,.06],[x+bx,1.15,z+1.28]);for(const sx of [-1,1]){box(root,bareSteel,[.04,2.25,.05],[x+sx*2.9,1.16,z+1.32]);for(const y of [.2,2.12])box(root,rust,[.18,.15,.08],[x+sx*2.9,y,z+1.33]);}mesh(new THREE.PlaneGeometry(1.1,.4),stencilMat,[x-1.8,1.65,z+1.34],root);}
  const steelMaterial=material('#8c9690',{metalness:.65});
  wreck(-fieldX-3.1,-fieldZ*.40,-.25);
  for(let i=0;i<8;i++){
    const x=fieldX+1.1+(i%3)*.65,z=-fieldZ*.6+i*.85;
    const debris=box(root,i%2?concrete:rust,[.35+(i%3)*.15,.12,.35],[x,.07,z]);debris.rotation.y=i*1.6;
  }
  for(const side of [-1,1]){
    const x=side*(fieldX+1.7);
    for(let z=-fieldZ+1;z<fieldZ-1;z+=2.7)tube(root,rust,.024,[x,0,z],[x,1.05,z]);
    for(const y of [.55,.9]){tube(root,mats.steel,.012,[x,y,-fieldZ+1],[x,y,fieldZ-1]);for(let z=-fieldZ+1;z<fieldZ-1;z+=.75){tube(root,bareSteel,.008,[x-.06,y-.07,z],[x+.06,y+.07,z],4);tube(root,bareSteel,.008,[x-.06,y+.07,z],[x+.06,y-.07,z],4);}}
  }
  const canvasMat=material('#747b63',{...surfaceMaps('cloth'),bumpScale:.009,roughness:1,side:THREE.DoubleSide});
  function campTent(x,z){
    obstacle(x,z,2.55,1.94,2.5);
    const tent=new THREE.Group();tent.position.set(x,0,z);root.add(tent);box(tent,canvasMat,[5,1.6,3.6],[0,.8,0]);
    for(const s of [-1,1]){
      const roofGeometry=new THREE.PlaneGeometry(5.1,2.2,18,8),p=roofGeometry.attributes.position;
      for(let i=0;i<p.count;i++){const xx=p.getX(i),t=(p.getY(i)+1.1)/2.2;p.setXYZ(i,xx,1.48+t*.94-Math.sin(t*Math.PI)*(.07+Math.cos(xx*2.7)*.02),s*1.86*(1-t));}
      roofGeometry.computeVertexNormals();mesh(roofGeometry,canvasMat,[0,0,0],tent);
      for(const xx of [-2.3,0,2.3])tube(tent,seamMat,.008,[xx,2.43,0],[xx,1.49,s*1.88]);
      for(const xx of [-2.4,2.4]){tube(tent,seamMat,.012,[xx,1.7,s*1.7],[xx*1.25,.06,s*2.6]);cylinder(tent,rust,.018,.2,[xx*1.25,.08,s*2.6],.018,6);}
    }
    box(tent,dark,[1.8,1.56,.05],[0,.79,1.85]);
    for(const s of [-1,1]){const flap=box(tent,canvasMat,[.75,1.56,.035],[s*1.05,.79,1.89]);flap.rotation.y=s*.32;}
  }
  function watchTower(x,z){
    obstacle(x,z,1.55,1.45,5.2);
    for(const s of [-1,1])for(const t of [-1,1]){box(root,olive,[.17,4.25,.17],[x+s*1.28,2.1,z+t*1.13]);tube(root,bareSteel,.025,[x+s*1.28,.3,z+t*1.13],[x-s*1.28,3.5,z+t*1.13]);}
    box(root,olive,[3,.17,2.75],[x,3.5,z]);box(root,olive,[2.9,.78,.08],[x,3.95,z-1.28]);
    for(const s of [-1,1])box(root,olive,[.08,.78,2.6],[x+s*1.42,3.95,z]);
    for(let i=0;i<9;i++)box(root,bareSteel,[.62,.045,.06],[x+.65,.35+i*.35,z+1.34]);
    const roof=box(root,canvasMat,[3.2,.1,3.0],[x,5.0,z]);roof.rotation.z=.07;
    tube(root,bareSteel,.025,[x-1,3.5,z-1],[x-1,6.4,z-1]);tube(root,bareSteel,.019,[x-1.6,6.1,z-1],[x-.4,6.1,z-1]);
  }
  function streetLamp(x,z){
    cylinder(root,dark,.12,.32,[x,.16,z],.16,12);tube(root,bareSteel,.06,[x,0,z],[x,4.5,z]);tube(root,bareSteel,.045,[x,4.5,z],[x+.85,4.65,z]);
    beveled(root,dark,[.6,.13,.34],[x+.85,4.6,z]);box(root,mats.glow,[.43,.014,.25],[x+.85,4.526,z]);
  }
  function freightCar(x,z){
    obstacle(x,z,4.7,1.42,3.2);
    const car=new THREE.Group();car.position.set(x,0,z);root.add(car);
    beveled(car,rust,[9.2,2.1,2.6],[0,2.02,0]);box(car,dark,[9.5,.26,2.68],[0,.84,0]);
    for(let i=-4;i<=4;i++){box(car,bareSteel,[.055,2.0,.065],[i,2.03,1.33]);box(car,rust,[.045,.11,2.60],[i,3.14,0]);}
    for(const x of [-3.1,-2.25,2.25,3.1])for(const s of [-1,1]){const wheel=cylinder(car,dark,.38,.14,[x,.46,s*1.09],.38,12);wheel.rotation.x=Math.PI/2;}
    for(const s of [-1,1])box(car,bareSteel,[.06,2.1,.08],[s*.82,2.01,1.38]);
    mesh(new THREE.PlaneGeometry(1.1,.4),stencilMat,[-2.7,2.22,1.351],car);
  }
  function gantry(x,z){
    for(const s of [-1,1]){obstacle(x+s*5.1,z,.36,.46,5.3);box(root,paint,[.34,5.25,.50],[x+s*5.1,2.6,z]);box(root,dark,[.75,.15,1.1],[x+s*5.1,.12,z]);}
    box(root,paint,[10.9,.38,.55],[x,5.35,z]);for(let i=-4;i<=4;i++)tube(root,dark,.026,[x+i,5.6,z],[x+i+.5,5.12,z]);
    box(root,olive,[1.1,.65,.9],[x+2,5.3,z]);tube(root,bareSteel,.014,[x+2,5,z],[x+2,2.6,z]);
  }
  if(type==='depot'){
    for(const z of [rear+.8,rear-.5]){box(root,steelMaterial,[fieldX*2+17,.13,.13],[0,.05,z]);}
    for(let x=-fieldX-8;x<fieldX+8;x+=.7)box(root,mats.wood,[.16,.1,2.4],[x,-.025,rear+.15]);
    container(-4.2,rear-3.5,'#607f93');container(3,rear-3.5,'#9e5d49');
  }else{
    campTent(-3.8,rear-1.1);container(4.0,rear-1.5,'#667e84');
  }
  const districtNames={
    beach:['北侧海滩','海岸工事','海岸指挥所','登陆航道','滩头防线','椰林哨区','抢滩阵地','运输集结区','东岸补给点'],
    jungle:['西北密林','前进营地','密林指挥所','沼泽边缘','林间空地','伏击林道','侦察入口','南侧林区','补给营地'],
    mountain:['西侧山口','高地阵地','山顶要塞','西侧石坡','山间通路','东坡防线','山谷入口','南侧隘口','运输坡道'],
    city:['西北住宅区','北部厂房','城市中枢','西街废墟','中央路口','东部街区','南侧残楼','南部街道','东南车场'],
    fuji:['西麓树林','雪峰参道','雪峰防线','西侧营地','鸟居大道','东侧石庭','山麓入口','南部神社','战地营地'],
    palace:['西侧御殿','皇宫正殿','东侧御殿','西侧护城河','决战庭院','东侧护城河','西侧城门','正门参道','东侧城门']
  }[type];
  for(let row=0;row<3;row++)for(let col=0;col<3;col++){
    const x=(col-1)*36,z=(row-1)*30,index=row*3+col;
    districts.push({x,z,name:districtNames[index]});
    if(type==='palace')continue;
    if(type==='fuji'&&(index===1||index===2))continue;
    if(natural&&index%2===0)campTent(x-11,z-10);else if(type==='depot'&&index%2===0)freightCar(x-11,z-13);else ruin(x-11,z-10,type==='city'?5.3:3.2);
    if(type==='depot'||index%3===2)container(x+10,z-10,index%2?'#9e5d49':'#607f93');
    else if(type==='city'||type==='mountain'&&index%3===0)ruin(x+11,z-10,4.6);
    else campTent(x+9,z-10);
    bags(x-11,z+8,(index%2)*.15);if(type==='city'||type==='mountain')damagedWall(x-12,z+3.8,(index%2-.5)*.5);
    wreck(x+11,z+8,(index%3-1)*.35);
    crate(x+7,z+6.8);crate(x+7,z+8.1);barrel(x+14,z+7,index%2===0);barrel(x-7,z-9);
    if(index%3===2)container(x-10,z+12,'#667e84');
    const number=labelTexture(String(index+1).padStart(2,'0'),'作战区域','#c4c9ae','#47554d');ownedMaps.add(number);
    const marking=mesh(new THREE.PlaneGeometry(2.6,1.1),material('#ffffff',{map:number}),[x-2.2,-.024,z+4.9],root);marking.rotation.x=-Math.PI/2;marking.castShadow=false;
    if(type==='city'){
      for(const s of [-1,1])for(let i=0;i<7;i++){box(root,concrete,[.25,.13,1.18],[x+s*4.1,.005,z-9+i*1.25]);box(root,white,[.8,.012,.20],[x+s*2.3,-.025,z-2+i*.66]);}
      streetLamp(x+5,z-5.5);
    }else if((type==='jungle'||type==='beach')&&index%2===0)watchTower(x-16,z+10);
    else if(type==='depot'&&index%2===0)gantry(x+10,z-10);
  }
  if(type==='depot')for(const z of [-43,-13,17,43]){
    for(const offset of [-.65,.65])box(root,steelMaterial,[fieldX*2,.1,.1],[0,.01,z+offset]);
    for(let x=-fieldX+1;x<fieldX;x+=.8)box(root,mats.wood,[.18,.08,2.05],[x,-.015,z]);
  }
  for(const x of [-fieldX-3.8,fieldX+3.8]){
    tube(root,mats.steel,.065,[x,0,-fieldZ-1.7],[x,5,-fieldZ-1.7]);tube(root,mats.steel,.045,[x-.55,4.9,-fieldZ-1.7],[x+.55,4.9,-fieldZ-1.7]);
    for(const sx of [-.38,.38]){beveled(root,dark,[.43,.32,.2],[x+sx,4.8,-fieldZ-1.6]);box(root,mats.glow,[.33,.23,.024],[x+sx,4.8,-fieldZ-1.482]);}
  }
  for(let i=0;i<7;i++)tube(root,mats.steel,.025,[fieldX+4,.6,rear-2+i*.42],[fieldX+4,3.3-i*.27,rear-2+i*.42]);
  tube(root,mats.steel,.035,[fieldX+4,0,rear-1],[fieldX+4,7,rear-1]);
  const signMap=labelTexture(chapter.name,'老美大战倭寇','#f5e3b3','#2e4544');ownedMaps.add(signMap);
  const signMat=material('#ffffff',{map:signMap});mesh(new THREE.PlaneGeometry(3.3,1.24),signMat,[0,2.1,-fieldZ-2.4],root);for(const sx of [-1.4,1.4])tube(root,mats.steel,.04,[sx,0,-fieldZ-2.5],[sx,3,-fieldZ-2.5]);
  const scenery=createCampaignScenery(type,{root,assets,material,obstacle,ownedMaps,fires});
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=64;const shadowContext=shadowCanvas.getContext('2d');
  const shadowGradient=shadowContext.createRadialGradient(32,32,8,32,32,32);shadowGradient.addColorStop(0,'#081012bb');shadowGradient.addColorStop(.58,'#10171b65');shadowGradient.addColorStop(1,'#10171b00');shadowContext.fillStyle=shadowGradient;shadowContext.fillRect(0,0,64,64);
  const shadowMap=new THREE.CanvasTexture(shadowCanvas);ownedMaps.add(shadowMap);const shadowMaterial=new THREE.MeshBasicMaterial({map:shadowMap,transparent:true,depthWrite:false,opacity:.65});ownedMaterials.add(shadowMaterial);
  const shadowObstacles=obstacles.filter(item=>!item.walkOnly);
  const contactShadows=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),shadowMaterial,shadowObstacles.length),shadowDummy=new THREE.Object3D();
  shadowObstacles.forEach((item,i)=>{shadowDummy.position.set(item.x,-.021,item.z);shadowDummy.rotation.x=-Math.PI/2;shadowDummy.scale.set(item.halfX*2+1.8,item.halfZ*2+1.8,1);shadowDummy.updateMatrix();contactShadows.setMatrixAt(i,shadowDummy.matrix);});contactShadows.computeBoundingSphere();root.add(contactShadows);
  // Spatial batches keep distant districts eligible for frustum culling.
  root.updateMatrixWorld(true);const batches=new Map(),discard=new Set();
  const worldPosition=new THREE.Vector3();
  root.traverse(object=>{if(!object.isMesh||object.isInstancedMesh||object.material.transparent)return;object.getWorldPosition(worldPosition);const key=(object.userData.batchRoot||root).uuid+'-'+object.material.uuid+'-'+object.castShadow+'-'+Math.floor(worldPosition.x/24)+'-'+Math.floor(worldPosition.z/24);if(!batches.has(key))batches.set(key,[]);batches.get(key).push(object);});
  for(const objects of batches.values()){
    if(objects.length<2)continue;
    const batchRoot=objects[0].userData.batchRoot||root,inverse=batchRoot.matrixWorld.clone().invert();
    const pieces=objects.map(object=>{const geometry=object.geometry.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,object.matrixWorld));if(!geometry.index)geometry.setIndex(Array.from({length:geometry.attributes.position.count},(_,i)=>i));return geometry;});
    const merged=mergeGeometries(pieces,false);pieces.forEach(geometry=>geometry.dispose());
    if(!merged)continue;
    const combined=mesh(merged,objects[0].material,[0,0,0],batchRoot);combined.castShadow=objects[0].castShadow;
    merged.computeBoundingSphere();
    for(const object of objects){discard.add(object.geometry);object.removeFromParent();}
  }
  discard.forEach(geometry=>geometry.dispose());
  const empty=[];root.traverse(object=>{if(object.isGroup&&object!==root)empty.push(object);});for(const object of empty.reverse())if(!object.children.length)object.removeFromParent();
  root.updateMatrixWorld(true);root.traverse(object=>{object.matrixAutoUpdate=false;});
  function dispose(){root.removeFromParent();const geometry=new Set();root.traverse(o=>{if(o.geometry)geometry.add(o.geometry);});geometry.forEach(g=>g.dispose());ownedMaterials.forEach(m=>m.dispose());ownedMaps.forEach(m=>m.dispose());}
  return {root,fires,obstacles,districts,dispose,type,chapter,...scenery};
}
