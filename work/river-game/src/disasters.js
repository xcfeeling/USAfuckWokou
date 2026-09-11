import * as THREE from 'three';
import { isBossType } from './chibi.js';

const labels = { eruption: ['火山喷发', '玄武岩安全区'], tsunami: ['海啸', '高地安全区'], earthquake: ['地震', '稳固安全区'] };

export class Disasters {
  constructor(scene, effects) {
    this.effects = effects; this.center = new THREE.Vector3(); this.radius = 6.4; this.phase = 'idle'; this.clock = 0;
    this.root = new THREE.Group(); scene.add(this.root);
    this.ring = new THREE.Mesh(new THREE.RingGeometry(this.radius - .12, this.radius, 96), new THREE.MeshBasicMaterial({ color: '#a8ffb7', side: THREE.DoubleSide, depthWrite: false }));
    this.ring.rotation.x = -Math.PI / 2; this.ring.position.y = .14; this.ring.renderOrder = 3; this.root.add(this.ring);
    this.pad = new THREE.Mesh(new THREE.CircleGeometry(this.radius - .12, 64), new THREE.MeshBasicMaterial({ color: '#5addb5', transparent: true, opacity: .16, side: THREE.DoubleSide, depthWrite: false }));
    this.pad.rotation.copy(this.ring.rotation); this.pad.position.y = .12; this.root.add(this.pad);
    const beacons = new THREE.InstancedMesh(new THREE.CylinderGeometry(.05, .05, 2.5, 5), new THREE.MeshBasicMaterial({ color: '#b2ffc6', transparent: true, opacity: .8 }), 8);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; dummy.position.set(Math.sin(a) * this.radius, 1.25, Math.cos(a) * this.radius); dummy.updateMatrix(); beacons.setMatrixAt(i, dummy.matrix); }
    this.beacons = beacons; this.root.add(beacons);
    this.surface = new THREE.Mesh(new THREE.PlaneGeometry(120, 100), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide,
      uniforms: { time: { value: 0 }, kind: { value: 0 }, strength: { value: 0 }, safe: { value: new THREE.Vector2() }, radius: { value: this.radius } },
      vertexShader: 'varying vec2 world; void main(){vec4 p=modelMatrix*vec4(position,1.);world=p.xz;gl_Position=projectionMatrix*viewMatrix*p;}',
      fragmentShader: `
        varying vec2 world; uniform float time, kind, strength, radius; uniform vec2 safe;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
        float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
        float fbm(vec2 p){return noise(p)*.55+noise(p*2.03)*.28+noise(p*4.1)*.17;}
        void main(){
          float boundary=smoothstep(radius-.12,radius+.15,distance(world,safe));
          if(boundary<.01||strength<.001)discard;
          vec2 p=world*.34; float n=noise(p+vec2(-time*.18,time*.07));
          vec3 col; float alpha;
          if(kind<.5){
            float warp=fbm(p+vec2(0.,-time*.11));
            float crack=1.-smoothstep(.018,.072,abs(fbm(p*1.5+warp)-.5));
            float stream=1.-smoothstep(.06,.24,abs(sin(p.x*.38+fbm(p*.5)*3.)));
            float heat=max(crack*.74,stream*.96);
            vec3 liquid=mix(vec3(.58,.028,.003),vec3(1.2,.33,.018),fbm(p*3.+vec2(0.,-time*.35)));
            col=mix(vec3(.06,.044,.036)+fbm(p*12.)*.045,liquid,heat);alpha=.88;
          }else if(kind<1.5){
            float crest=pow(.5+.5*sin(world.x*1.2-time*4.+n*3.),14.);
            col=mix(vec3(.035,.27,.31),vec3(.72,.93,.89),crest*.85+n*.12);alpha=.70;
          }else{
            float crack=1.-smoothstep(.025,.10,abs(sin(p.x*1.7+n*5.)*sin(p.y*2.2+n*4.)));
            col=mix(vec3(.29,.24,.16),vec3(.035,.025,.017),crack);alpha=.14+crack*.7;
          }
          gl_FragColor=vec4(col,alpha*strength*boundary);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`
    }));
    this.surface.rotation.x = -Math.PI / 2; this.surface.position.y = .07; scene.add(this.surface);
    this.crest = new THREE.Mesh(new THREE.PlaneGeometry(100, 3.2, 48, 2), new THREE.ShaderMaterial({
      transparent: true, depthWrite: false, side: THREE.DoubleSide, uniforms: this.surface.material.uniforms,
      vertexShader: `varying vec2 world;varying vec2 vUv;uniform float time;void main(){vUv=uv;vec3 p=position;p.y+=sin(p.x*.38+time*2.)*uv.y*.38;vec4 w=modelMatrix*vec4(p,1.);world=w.xz;gl_Position=projectionMatrix*viewMatrix*w;}`,
      fragmentShader: `varying vec2 world;varying vec2 vUv;uniform vec2 safe;uniform float radius,strength;void main(){if(distance(world,safe)<radius)discard;float foam=smoothstep(.66,.97,vUv.y);gl_FragColor=vec4(mix(vec3(.065,.42,.49),vec3(.88,.99,.93),foam),(.22+foam*.5)*strength);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
    }));
    this.crest.rotation.y = Math.PI / 2; this.crest.position.y = 1.65; scene.add(this.crest); this.clear();
  }
  clear() { this.phase = 'idle'; this.root.visible = this.surface.visible = this.crest.visible = false; this.remaining = 0; this.intensity = 0; this.enabled = false; }
  reset(mission, retry = false) {
    this.clear(); this.kind = mission.disaster;
    // Keep the same event plan when retrying a mission; a new run rolls again.
    if (!retry || this.plan?.level !== mission.level) {
      this.plan = { level: mission.level, enabled: Boolean(this.kind) && Math.random() < mission.disasterChance, wait: 28 + Math.random() * 26 };
    }
    this.enabled = this.plan.enabled; this.wait = this.plan.wait; this.clock = 0;
  }
  start(player, navigation) {
    this.center.copy(player);
    for (let i = 0; i < 24; i++) {
      const a = Math.random() * Math.PI * 2, r = 9 + Math.random() * 4;
      const candidate = new THREE.Vector3(player.x + Math.sin(a) * r, 0, player.z + Math.cos(a) * r);
      if (navigation.isOpen(candidate.x, candidate.z) && navigation.unobstructed(player, candidate)) { this.center.copy(candidate); break; }
    }
    this.phase = 'warning'; this.remaining = 8; this.root.visible = true;
    this.root.position.set(this.center.x, 0, this.center.z);
    this.surface.material.uniforms.safe.value.set(this.center.x, this.center.z);
    this.surface.material.uniforms.kind.value = { eruption: 0, tsunami: 1, earthquake: 2 }[this.kind];
  }
  safe(position) { return Math.hypot(position.x - this.center.x, position.z - this.center.z) <= this.radius; }
  update(dt, { player, navigation, enemies, damageEnemy, takeDamage, battlefield, playing }) {
    if (!this.enabled) return;
    this.clock += dt;
    if (this.phase === 'idle') {
      this.wait -= dt; if (this.wait <= 0) this.start(player, navigation); else return;
    }
    this.remaining -= dt;
    this.ring.material.color.set(this.phase === 'warning' && Math.sin(this.clock * 5) > 0 ? '#ffffff' : '#a8ffb7');
    this.pad.material.opacity = .12 + Math.sin(this.clock * 3) * .035;
    if (this.phase === 'warning' && this.remaining <= 0) {
      this.phase = 'active'; this.remaining = this.kind === 'eruption' ? 8 : 6; this.tick = .6; this.particles = 0; this.surface.visible = true; this.crest.visible = this.kind === 'tsunami';
    }
    this.intensity = this.phase === 'active' ? Math.min(1, this.intensity + dt * 1.8) : .15;
    battlefield.setDisaster?.(this.kind, this.phase === 'active' ? this.intensity : .12);
    if (this.phase !== 'active') return;
    this.surface.material.uniforms.time.value = this.clock;
    this.surface.material.uniforms.strength.value = Math.min(this.intensity, this.remaining);
    if (this.crest.visible) this.crest.position.x = -60 + (6 - this.remaining) * 20;
    this.tick -= dt; this.particles -= dt;
    if (this.particles <= 0) {
      this.particles = .13;
      const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 15;
      const p = new THREE.Vector3(player.x + Math.sin(a) * r, .12, player.z + Math.cos(a) * r);
      if (!this.safe(p) && navigation.isOpen(p.x, p.z)) {
        if (this.kind === 'eruption') { this.effects.flame(p, .5, .42); this.effects.emit(p, 5, '#ffb24c', { up: 3, speed: 1, life: .7, gravity: 4, energy: 2 }); }
        else if (this.kind === 'tsunami') this.effects.emit(p, 12, '#c7efeb', { up: 3, speed: 2, gravity: 6, life: .6, size: .13 });
        else { this.effects.smoke(p, 2, '#c0b6a1', 1.2); this.effects.debrisBurst(p, 2, '#8e968a'); }
      }
    }
    if (this.tick <= 0) {
      this.tick = .9;
      if (!this.safe(player)) takeDamage(this.kind === 'eruption' ? 14 : 11, 'disaster');
      if (!playing()) return;
      for (const enemy of [...enemies]) {
        if (enemy.downed || this.safe(enemy.body.position)) continue;
        damageEnemy(enemy, isBossType(enemy.type) ? enemy.maxHealth * .018 : enemy.maxHealth * .42, enemy.model.group.position, 'disaster');
        if (!playing()) return;
      }
    }
    if (this.remaining <= 0) {
      this.clear();
      battlefield.setDisaster?.(this.kind, 0);
    }
  }
  status(player) {
    if (this.phase === 'idle') return null;
    const [name, zone] = labels[this.kind];
    return { title: `${name}${this.phase === 'warning' ? '预警' : '持续中'} · ${Math.max(0, Math.ceil(this.remaining))} 秒`,
      detail: this.safe(player) ? `${zone} · 已进入` : `${zone} · ${Math.ceil(Math.max(0, player.distanceTo(this.center) - this.radius))} 米`, safe: this.safe(player) };
  }
}
