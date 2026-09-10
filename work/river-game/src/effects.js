import * as THREE from 'three';

function sprite(smoke=false){
  const canvas=document.createElement('canvas');canvas.width=canvas.height=128;
  const ctx=canvas.getContext('2d');
  if(smoke){
    for(let i=0;i<170;i++){
      const x=64+(Math.random()-.5)*70,y=64+(Math.random()-.5)*70,r=9+Math.random()*22;
      const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'#e1e5dc22');g.addColorStop(1,'#b2b7af00');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);
    }
    const edge=ctx.createRadialGradient(64,64,12,64,64,61);edge.addColorStop(0,'#ffffffff');edge.addColorStop(.55,'#ffffffaa');edge.addColorStop(1,'#ffffff00');
    ctx.globalCompositeOperation='destination-in';ctx.fillStyle=edge;ctx.fillRect(0,0,128,128);ctx.globalCompositeOperation='source-over';
  }else{
    const g=ctx.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'#ffffff');g.addColorStop(.08,'#ffffffee');g.addColorStop(.24,'#ffffff77');g.addColorStop(1,'#ffffff00');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
  }
  return new THREE.CanvasTexture(canvas);
}

export class Effects{
  constructor(scene,camera){
    this.scene=scene;this.camera=camera;this.particles=[];this.smokes=[];this.rings=[];this.lights=[];this.arcs=[];this.fragments=[];this.max=1400;
    this.freeParticles=Array.from({length:this.max},()=>({}));this.emitColor=new THREE.Color();
    this.geometry=new THREE.BufferGeometry();
    this.positions=new Float32Array(this.max*3);this.colors=new Float32Array(this.max*3);this.sizes=new Float32Array(this.max);
    this.geometry.setAttribute('position',new THREE.BufferAttribute(this.positions,3).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setAttribute('aColor',new THREE.BufferAttribute(this.colors,3).setUsage(THREE.DynamicDrawUsage));
    this.geometry.setAttribute('aSize',new THREE.BufferAttribute(this.sizes,1).setUsage(THREE.DynamicDrawUsage));
    this.material=new THREE.ShaderMaterial({
      uniforms:{map:{value:sprite()},height:{value:700}},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
      vertexShader:'attribute vec3 aColor;attribute float aSize;varying vec3 vColor;uniform float height;void main(){vColor=aColor;vec4 p=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(aSize*height,0.,100.);}',
      fragmentShader:'uniform sampler2D map;varying vec3 vColor;void main(){vec4 tex=texture2D(map,gl_PointCoord);gl_FragColor=vec4(vColor*tex.rgb,tex.a);}'
    });
    this.geometry.setDrawRange(0,0);
    this.points=new THREE.Points(this.geometry,this.material);this.points.frustumCulled=false;scene.add(this.points);
    const smokeGeometry=new THREE.PlaneGeometry(1,1);
    smokeGeometry.setAttribute('aOpacity',new THREE.InstancedBufferAttribute(new Float32Array(140),1));
    smokeGeometry.setAttribute('aTint',new THREE.InstancedBufferAttribute(new Float32Array(420),3));
    this.smokeMaterial=new THREE.ShaderMaterial({uniforms:{map:{value:sprite(true)}},transparent:true,depthWrite:false,side:THREE.DoubleSide,
      vertexShader:'attribute float aOpacity;attribute vec3 aTint;varying float vOpacity;varying vec3 vTint;varying vec2 vUv;void main(){vOpacity=aOpacity;vTint=aTint;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
      fragmentShader:'uniform sampler2D map;varying float vOpacity;varying vec3 vTint;varying vec2 vUv;void main(){vec4 t=texture2D(map,vUv);gl_FragColor=vec4(vTint*t.rgb,t.a*vOpacity);}'
    });
    this.smokeMesh=new THREE.InstancedMesh(smokeGeometry,this.smokeMaterial,140);this.smokeMesh.frustumCulled=false;this.smokeMesh.count=0;scene.add(this.smokeMesh);
    const flameGeometry=new THREE.PlaneGeometry(1,1);flameGeometry.setAttribute('aHeat',new THREE.InstancedBufferAttribute(new Float32Array(64),1).setUsage(THREE.DynamicDrawUsage));
    const flameMaterial=new THREE.ShaderMaterial({uniforms:{map:{value:this.smokeMaterial.uniforms.map.value}},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
      vertexShader:'attribute float aHeat;varying float vHeat;varying vec2 vUv;void main(){vHeat=aHeat;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
      fragmentShader:'uniform sampler2D map;varying float vHeat;varying vec2 vUv;void main(){float cloud=texture2D(map,vUv).a;float core=smoothstep(.18,.8,cloud)*(1.-vUv.y*.4);vec3 fire=mix(vec3(2.5,.23,.012),vec3(3.2,1.5,.24),core);gl_FragColor=vec4(fire,cloud*vHeat);}'
    });
    this.flames=[];this.flameMesh=new THREE.InstancedMesh(flameGeometry,flameMaterial,64);this.flameMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.flameMesh.frustumCulled=false;this.flameMesh.count=0;scene.add(this.flameMesh);
    this.dummy=new THREE.Object3D();
    this.shieldMaterial=new THREE.ShaderMaterial({uniforms:{strength:{value:0},tint:{value:new THREE.Color('#8de8d1')}},transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.FrontSide,
      vertexShader:'varying vec3 vNormal;varying vec3 vView;void main(){vec4 p=modelViewMatrix*vec4(position,1.);vNormal=normalize(normalMatrix*normal);vView=normalize(-p.xyz);gl_Position=projectionMatrix*p;}',
      fragmentShader:'varying vec3 vNormal;varying vec3 vView;uniform float strength;uniform vec3 tint;void main(){float rim=pow(1.-abs(dot(normalize(vNormal),normalize(vView))),3.);gl_FragColor=vec4(tint*(.5+rim),rim*strength*.48);}'
    });
    this.shield=new THREE.Mesh(new THREE.SphereGeometry(1,32,20),this.shieldMaterial);this.shield.visible=false;scene.add(this.shield);
    this.debris=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),new THREE.MeshStandardMaterial({color:'#787e79',roughness:.88}),120);
    this.debris.frustumCulled=false;this.debris.count=0;scene.add(this.debris);
    this.debris.setColorAt(0,new THREE.Color('#ffffff'));
    // A constant light count avoids shader recompilation during gunfire.
    for(let i=0;i<2;i++){const light=new THREE.PointLight('#ffd59d',0,10,2);scene.add(light);this.lights.push({light,life:0,power:0});}
    const streakGeometry=new THREE.CylinderGeometry(1,1,1,4,1);
    streakGeometry.setAttribute('aFade',new THREE.InstancedBufferAttribute(new Float32Array(128),1).setUsage(THREE.DynamicDrawUsage));
    const streakMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,
      vertexShader:'attribute float aFade;varying vec3 vColor;varying float vFade;void main(){vColor=instanceColor;vFade=aFade;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
      fragmentShader:'varying vec3 vColor;varying float vFade;void main(){gl_FragColor=vec4(vColor*1.8,vFade);}'
    });
    this.streakMesh=new THREE.InstancedMesh(streakGeometry,streakMaterial,128);this.streakMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);this.streakMesh.setColorAt(0,new THREE.Color());this.streakMesh.count=0;this.streakMesh.frustumCulled=false;scene.add(this.streakMesh);
    this.streaks=[];this.freeStreaks=Array.from({length:128},()=>({start:new THREE.Vector3(),end:new THREE.Vector3(),color:new THREE.Color()}));this.direction=new THREE.Vector3();this.up=new THREE.Vector3(0,1,0);
    this.casings=[];this.casingMesh=new THREE.InstancedMesh(new THREE.CylinderGeometry(.021,.025,.085,5),new THREE.MeshStandardMaterial({color:'#c9a053',metalness:.7,roughness:.4}),160);
    this.casingMesh.count=0;this.casingMesh.frustumCulled=false;this.casingMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);scene.add(this.casingMesh);
    this.contactMesh=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial({color:'#0a1314',map:sprite(),transparent:true,opacity:.55,depthWrite:false}),24);this.contactMesh.count=0;this.contactMesh.frustumCulled=false;this.contactMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);scene.add(this.contactMesh);
  }
  emit(position,count=25,color='#bbebe0',options={}){
    const c=this.emitColor.set(color).multiplyScalar(options.energy||1.6),direction=options.direction;
    for(let i=0;i<count&&this.particles.length<this.max;i++){
      const angle=Math.random()*Math.PI*2,speed=(options.speed||2)*(0.2+Math.random());
      const p=this.freeParticles.pop();
      Object.assign(p,{x:position.x,y:position.y,z:position.z,vx:Math.cos(angle)*speed*(direction ? .35 : 1)+(direction?.x||0)*speed*2-(options.backward||0),vy:(options.up??2)*Math.random()+.2,vz:Math.sin(angle)*speed*(direction ? .35 : 1)+(direction?.z||0)*speed*2,gravity:options.gravity??8,life:options.life||.7,max:options.life||.7,size:(options.size||.12)*(.4+Math.random()),r:c.r,g:c.g,b:c.b,ground:options.ground??.03});this.particles.push(p);
    }
  }
  clear(){
    this.freeParticles.push(...this.particles);this.freeStreaks.push(...this.streaks);
    this.particles.length=this.smokes.length=this.fragments.length=this.streaks.length=this.casings.length=this.flames.length=0;
    this.streakMesh.count=this.casingMesh.count=this.debris.count=this.smokeMesh.count=this.flameMesh.count=0;this.geometry.setDrawRange(0,0);
    for(const mesh of [...this.rings.map(item=>item.mesh),...this.arcs.map(item=>item.mesh)]){this.scene.remove(mesh);mesh.geometry.dispose();mesh.material.dispose();}
    for(const f of this.lights){f.life=0;f.light.intensity=0;}
    this.rings.length=this.arcs.length=0;
  }
  smoke(position,count=5,color='#aba68e',size=1){
    for(let i=0;i<count&&this.smokes.length<140;i++)this.smokes.push({x:position.x+(Math.random()-.5)*.5,y:position.y+.1,z:position.z+(Math.random()-.5)*.6,vx:(Math.random()-.5)*.6,vy:.25+Math.random()*.8,vz:(Math.random()-.5)*.35,size:size*(.5+Math.random()),life:1.4+Math.random(),max:2.4,color:new THREE.Color(color),rotation:Math.random()*6});
  }
  flame(position,size=.65,life=.38){
    if(this.flames.length<64)this.flames.push({x:position.x,y:position.y+size*.3,z:position.z,size,life,max:life,rotation:Math.random()*6});
  }
  explosion(position){
    this.debrisBurst(position,28);
    this.emit(position,110,'#ffc46e',{speed:7,up:5,gravity:12,life:.8,size:.085,energy:3});
    const at=new THREE.Vector3();
    for(let i=0;i<10;i++){
      const angle=i*Math.PI*.2,radius=.3+Math.random()*.65;at.set(position.x+Math.cos(angle)*radius,position.y+Math.random()*.65,position.z+Math.sin(angle)*radius);this.flame(at,1.5+Math.random(),.20+Math.random()*.22);
      at.set(position.x+Math.cos(angle)*.8,.10,position.z+Math.sin(angle)*.8);const before=this.smokes.length;this.smoke(at,1,'#a5a291',1.0);
      if(this.smokes.length>before){const smoke=this.smokes.at(-1);smoke.vx=Math.cos(angle)*3.8;smoke.vz=Math.sin(angle)*3.8;smoke.vy=.2;smoke.life=smoke.max=1.35;}
    }
    this.smoke(position,6,'#6e7474',1.65);this.flash(position,'#ffc17d',48);
  }
  nuclearBlast(position){
    this.emit(position,420,'#ffd7a0',{speed:22,up:16,gravity:9,life:2.4,size:.15,energy:3});
    this.debrisBurst(position,45,'#969d98');this.flash(position,'#fff0ce',100);
    for(const size of [18,38,65]){this.ring(position,'#ffe7b9',size);const ring=this.rings.at(-1);ring.life=ring.max=2.8;}
    for(let i=0;i<20;i++){
      const angle=i/20*Math.PI*2,at=new THREE.Vector3(position.x+Math.cos(angle)*3,.4,position.z+Math.sin(angle)*3);
      this.flame(at,4.5,.8);
      const before=this.smokes.length;this.smoke(at,1,'#a7aaa2',3.8);
      if(this.smokes.length>before){const puff=this.smokes.at(-1);puff.vx=Math.cos(angle)*8;puff.vz=Math.sin(angle)*8;puff.vy=.35;puff.life=puff.max=5;}
    }
    for(let i=0;i<28;i++){
      const cap=i>=10,angle=i*2.4,radius=cap?3.3:1;
      const at=new THREE.Vector3(position.x+Math.cos(angle)*radius,cap?11+(i%3)*.65:1+i*.9,position.z+Math.sin(angle)*radius);
      const before=this.smokes.length;this.smoke(at,1,cap?'#8b8c82':'#a2a18d',cap?4.8:2.5);
      if(this.smokes.length>before){const puff=this.smokes.at(-1);puff.vy=cap?1.3:1.0;puff.life=puff.max=7.5;}
    }
  }
  ring(position,color='#b5ead7',size=2.2){
    const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.6,blending:THREE.AdditiveBlending,depthWrite:false});
    const ring=new THREE.Mesh(new THREE.TorusGeometry(1,.009,6,64),material);ring.rotation.x=-Math.PI/2;ring.position.copy(position);ring.position.y=Math.max(.035,position.y);this.scene.add(ring);this.rings.push({mesh:ring,life:.75,max:.75,size});
  }
  flash(position,color='#ffd59d',strength=25){
    const f=this.lights.reduce((best,item)=>item.life<best.life?item:best);f.light.color.set(color);f.light.position.copy(position);f.life=.18;f.power=strength;f.light.intensity=strength;
  }
  tracer(start,end,color='#fff0c9',width=.023,life=.085){
    if(!this.freeStreaks.length)return;
    const streak=this.freeStreaks.pop();streak.start.copy(start);streak.end.copy(end);streak.color.set(color);streak.width=width;streak.life=streak.max=life;this.streaks.push(streak);
  }
  muzzle(position,direction,weapon){
    const heavy=weapon.id==='scatter'||weapon.id==='rail',length=heavy?.76:.43;
    this.direction.copy(position).addScaledVector(direction,length);
    this.tracer(position,this.direction,'#fff8d8',heavy?.072:.045,.055);
    this.emit(position,heavy?13:6,'#ffc378',{direction,speed:heavy?1.7:1.0,up:.3,gravity:1,life:.11,size:.09,energy:3});
    this.flame(position,heavy?.28:.17,.075);
    if(heavy)this.smoke(position,2,'#aeb9b9',.27);
    this.flash(position,'#ffcc83',heavy?12:7);
    if(this.casings.length>=160)this.casings.shift();
    this.casings.push({x:position.x-direction.x*.42,y:position.y,z:position.z-direction.z*.42,vx:direction.z*(1.5+Math.random()),vy:2.3+Math.random(),vz:-direction.x*(1.5+Math.random()),angle:Math.random()*6,life:4});
  }
  hit(position,direction,armored=false){
    this.emit(position,armored?14:8,armored?'#ffe4aa':'#e5c29a',{direction,speed:armored?2.5:1.2,up:2,gravity:12,life:.3,size:.065,energy:armored?3:1.3});
    if(armored)for(let i=0;i<4;i++){
      this.direction.copy(position).addScaledVector(direction,-.10-Math.random()*.25);this.direction.x+=(Math.random()-.5)*.5;this.direction.y+=.06+Math.random()*.28;this.direction.z+=(Math.random()-.5)*.5;
      this.tracer(position,this.direction,'#ffe2a0',.009,.10+Math.random()*.04);
    }
    this.smoke(position,1,armored?'#a8b3b5':'#a58e7d',.25);
  }
  slash(position,yaw,radius=1){
    const start=new THREE.Vector3(),end=new THREE.Vector3();
    for(let i=0;i<7;i++){
      const a=yaw-.9+i*.24,b=a+.24;
      start.set(position.x+Math.sin(a)*radius,position.y+.12*Math.sin(i*.5),position.z+Math.cos(a)*radius);
      end.set(position.x+Math.sin(b)*radius,position.y+.12*Math.sin((i+1)*.5),position.z+Math.cos(b)*radius);
      this.tracer(start,end,'#ffe7c9',.016,.13);
    }
  }
  contacts(player,enemies){
    let i=0;
    for(const actor of [player,...enemies]){
      if(i>=24)break;const position=actor.body?.position||actor,radius=actor.model?.scale||1;
      this.dummy.position.set(position.x,.006,position.z);this.dummy.rotation.set(-Math.PI/2,0,0);this.dummy.scale.set(1.9*radius,1.4*radius,1);this.dummy.updateMatrix();this.contactMesh.setMatrixAt(i++,this.dummy.matrix);
    }
    this.contactMesh.count=i;this.contactMesh.instanceMatrix.needsUpdate=true;
  }
  debrisBurst(position,count=22,color='#828784'){
    const tint=new THREE.Color(color);
    for(let i=0;i<count&&this.fragments.length<120;i++){
      const angle=Math.random()*Math.PI*2,speed=2+Math.random()*3.5;
      this.fragments.push({position:position.clone(),velocity:new THREE.Vector3(Math.cos(angle)*speed,2+Math.random()*5,Math.sin(angle)*speed),rotation:new THREE.Euler(Math.random()*6,Math.random()*6,0),size:.045+Math.random()*.12,life:2.5,color:tint});
    }
  }
  arc(position,color,radius=1.4,tilt=0,boost=false){
    const points=[];
    for(let i=0;i<=32;i++){const a=i/32*Math.PI*1.68;points.push(new THREE.Vector3(Math.cos(a)*radius,Math.sin(a)*radius,Math.sin(a*2)*.18));}
    const curve=new THREE.CatmullRomCurve3(points);
    const material=new THREE.MeshBasicMaterial({color,transparent:true,opacity:.85,blending:THREE.AdditiveBlending,depthWrite:false});
    const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,48,.024,5,false),material);
    mesh.position.copy(position);mesh.rotation.set(.45,tilt,.1);this.scene.add(mesh);this.arcs.push({mesh,life:.9,boost});
  }
  power(position,character,boost=false){
    const color=character==='hero'?'#90eaff':character==='alien'?'#b7aaff':'#d5efab';
    this.emit(position,110,color,{speed:boost?3.6:2.4,up:4,gravity:1,life:1.2,size:.19,energy:3});
    for(let i=0;i<3;i++)this.arc(position,color,.9+i*.36,i*1.7,boost);
    this.flash(position,color,25);
  }
  burst(position,type='success'){
    if(type==='crash'){
      this.explosion(position);
    }else if(type==='jump'){
      this.emit(position,25,'#b8e5dd',{speed:2.2,up:.7,gravity:4,life:.42,size:.085});this.smoke(position,4,'#b4b09c',.65);this.ring(position,'#ccece1',1.7);
    }else if(type==='revive'){
      this.emit(position,95,'#b0efdb',{speed:2,up:5.5,gravity:-.5,life:1.05,size:.14});this.flash(position,'#bfeddd',19);this.ring(position,'#c2f3df',3.1);
    }else{
      this.emit(position,85,'#d9efb8',{speed:3.2,up:4,gravity:3,life:1.1,size:.115});this.emit(position,25,'#ffe0a1',{speed:2.4,up:3,gravity:6,life:1.1,size:.09});this.flash(position,'#daf2c3',15);this.ring(position,'#cef1c4',2.4);
    }
  }
  update(dt,speed,shield){
    for(let i=this.flames.length-1;i>=0;i--){const f=this.flames[i];f.life-=dt;if(f.life<=0){this.flames[i]=this.flames.at(-1);this.flames.pop();continue;}f.y+=dt*.9;}
    this.flames.forEach((f,i)=>{const progress=1-f.life/f.max;this.dummy.position.set(f.x,f.y,f.z);this.dummy.quaternion.copy(this.camera.quaternion);this.dummy.rotateZ(f.rotation);this.dummy.scale.set(f.size*(.65+progress),f.size*(.8+progress*1.6),1);this.dummy.updateMatrix();this.flameMesh.setMatrixAt(i,this.dummy.matrix);this.flameMesh.geometry.attributes.aHeat.setX(i,Math.min(1,progress*8)*(1-progress)**1.6*.8);});this.flameMesh.count=this.flames.length;this.flameMesh.instanceMatrix.needsUpdate=true;this.flameMesh.geometry.attributes.aHeat.needsUpdate=true;
    for(let i=this.streaks.length-1;i>=0;i--){const s=this.streaks[i];s.life-=dt;if(s.life<=0){this.freeStreaks.push(s);this.streaks[i]=this.streaks.at(-1);this.streaks.pop();}}
    this.streaks.forEach((s,i)=>{this.direction.copy(s.end).sub(s.start);const length=this.direction.length();this.dummy.position.copy(s.start).add(s.end).multiplyScalar(.5);this.dummy.quaternion.setFromUnitVectors(this.up,this.direction.divideScalar(length||1));this.dummy.scale.set(s.width,length,s.width);this.dummy.updateMatrix();this.streakMesh.setMatrixAt(i,this.dummy.matrix);this.streakMesh.setColorAt(i,s.color);this.streakMesh.geometry.attributes.aFade.setX(i,Math.min(1,s.life/s.max*1.5));});
    this.streakMesh.count=this.streaks.length;this.streakMesh.instanceMatrix.needsUpdate=true;this.streakMesh.instanceColor.needsUpdate=true;this.streakMesh.geometry.attributes.aFade.needsUpdate=true;
    for(let i=this.casings.length-1;i>=0;i--){const c=this.casings[i];c.life-=dt;if(c.life<=0){this.casings[i]=this.casings.at(-1);this.casings.pop();continue;}c.x+=c.vx*dt;c.z+=c.vz*dt;c.y+=c.vy*dt;c.vy-=12*dt;if(c.y<.045){c.y=.045;c.vy=Math.abs(c.vy)>.35?Math.abs(c.vy)*.24:0;c.vx*=Math.exp(-dt*12);c.vz*=Math.exp(-dt*12);}else c.angle+=dt*14;}
    this.casings.forEach((c,i)=>{this.dummy.position.set(c.x,c.y,c.z);this.dummy.rotation.set(c.angle,0,c.angle*.73);this.dummy.scale.setScalar(Math.min(1,c.life*2));this.dummy.updateMatrix();this.casingMesh.setMatrixAt(i,this.dummy.matrix);});this.casingMesh.count=this.casings.length;this.casingMesh.instanceMatrix.needsUpdate=true;
    for(let i=this.fragments.length-1;i>=0;i--){
      const p=this.fragments[i];p.life-=dt;if(p.life<=0){this.fragments.splice(i,1);continue;}
      p.position.addScaledVector(p.velocity,dt);p.position.x-=speed*dt;p.velocity.y-=12*dt;p.rotation.x+=dt*5;p.rotation.z+=dt*3;
      if(p.position.y<p.size){p.position.y=p.size;p.velocity.y=Math.abs(p.velocity.y)*.32;p.velocity.x*=.8;p.velocity.z*=.8;}
    }
    this.fragments.forEach((p,i)=>{this.dummy.position.copy(p.position);this.dummy.rotation.copy(p.rotation);this.dummy.scale.setScalar(p.size*Math.min(1,p.life*2));this.dummy.updateMatrix();this.debris.setMatrixAt(i,this.dummy.matrix);this.debris.setColorAt(i,p.color);});
    this.debris.count=this.fragments.length;this.debris.instanceMatrix.needsUpdate=true;this.debris.instanceColor.needsUpdate=true;
    for(let i=this.arcs.length-1;i>=0;i--){
      const a=this.arcs[i];a.life-=dt;if(a.life<=0){this.scene.remove(a.mesh);a.mesh.geometry.dispose();a.mesh.material.dispose();this.arcs.splice(i,1);continue;}
      a.mesh.position.x+=(a.boost?5:-speed*.25)*dt;a.mesh.rotation.z+=dt*2.6;a.mesh.scale.setScalar(1+(1-a.life/.9)*.6);a.mesh.material.opacity=(a.life/.9)**1.4;
    }
    for(let i=this.particles.length-1;i>=0;i--){
      const p=this.particles[i];p.life-=dt;
      if(p.life<=0){this.freeParticles.push(p);this.particles[i]=this.particles.at(-1);this.particles.pop();continue;}
      p.x+=(p.vx-speed)*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;p.vy-=p.gravity*dt;p.vx*=Math.pow(.98,dt*60);
      if(p.y<p.ground){p.y=p.ground;p.vy=Math.abs(p.vy)*.23;p.life=Math.min(p.life,.3);}
    }
    this.particles.forEach((p,i)=>{const a=p.life/p.max,j=i*3;this.positions[j]=p.x;this.positions[j+1]=p.y;this.positions[j+2]=p.z;this.colors[j]=p.r*a;this.colors[j+1]=p.g*a;this.colors[j+2]=p.b*a;this.sizes[i]=p.size*(.4+a*.6);});
    this.geometry.setDrawRange(0,this.particles.length);
    for(const key of ['position','aColor','aSize'])this.geometry.attributes[key].needsUpdate=true;
    for(let i=this.smokes.length-1;i>=0;i--){const p=this.smokes[i];p.life-=dt;if(p.life<=0){this.smokes.splice(i,1);continue;}p.x+=(p.vx-speed)*dt;p.y+=p.vy*dt;p.z+=p.vz*dt;}
    this.smokes.forEach((p,i)=>{
      const progress=1-p.life/p.max;this.dummy.position.set(p.x,p.y,p.z);this.dummy.quaternion.copy(this.camera.quaternion);this.dummy.rotateZ(p.rotation+progress*.4);this.dummy.scale.setScalar(p.size*(1+progress*1.9));this.dummy.updateMatrix();this.smokeMesh.setMatrixAt(i,this.dummy.matrix);
      this.smokeMesh.geometry.attributes.aOpacity.setX(i,Math.min(1,progress*5)*Math.min(1,p.life)*.6);this.smokeMesh.geometry.attributes.aTint.setXYZ(i,p.color.r,p.color.g,p.color.b);
    });
    this.smokeMesh.count=this.smokes.length;this.smokeMesh.instanceMatrix.needsUpdate=true;this.smokeMesh.geometry.attributes.aOpacity.needsUpdate=true;this.smokeMesh.geometry.attributes.aTint.needsUpdate=true;
    for(let i=this.rings.length-1;i>=0;i--){const r=this.rings[i];r.life-=dt;r.mesh.position.x-=speed*dt;if(r.life<=0){this.scene.remove(r.mesh);r.mesh.geometry.dispose();r.mesh.material.dispose();this.rings.splice(i,1);continue;}const t=1-r.life/r.max;r.mesh.scale.setScalar(.3+r.size*Math.sqrt(t));r.mesh.material.opacity=(1-t)**2*.5;}
    for(const f of this.lights){f.life=Math.max(0,f.life-dt);f.light.position.x-=speed*dt;f.light.intensity=f.power*(f.life/.18)**2;}
    this.shield.visible=shield.strength>0;this.shield.position.set(shield.x||0,shield.y+1.2,shield.z);this.shield.scale.set(shield.length+.55,1.65,.75+shield.width);this.shieldMaterial.uniforms.strength.value=shield.strength;
  }
}
