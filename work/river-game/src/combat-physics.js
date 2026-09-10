import * as CANNON from 'cannon-es';
import { ARENA } from './battlefield.js';

export class CombatPhysics {
  constructor(){
    this.world=new CANNON.World({gravity:new CANNON.Vec3(0,0,0)});
    this.world.broadphase=new CANNON.SAPBroadphase(this.world);
    this.world.solver.iterations=5;
    this.world.defaultContactMaterial.friction=0;
    this.world.defaultContactMaterial.restitution=0;
    this.enemies=[];this.walls=[];this.obstacles=[];this.grenades=[];
    const floor=new CANNON.Body({mass:0,shape:new CANNON.Plane(),collisionFilterGroup:4,collisionFilterMask:2,position:new CANNON.Vec3(0,-.06,0)});floor.quaternion.setFromEuler(-Math.PI/2,0,0);this.world.addBody(floor);
    this.world.addEventListener('preStep',()=>{for(const body of this.grenades)body.force.y-=14*body.mass;});
    this.player=this.addPawn(.52,3);
    for(const [x,z,sx,sz] of [[-ARENA.x-.6,0,.5,ARENA.z+1],[ARENA.x+.6,0,.5,ARENA.z+1],[0,-ARENA.z-.6,ARENA.x+1,.5],[0,ARENA.z+.6,ARENA.x+1,.5]]){
      const wall=new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(sx,3,sz)),position:new CANNON.Vec3(x,1,z),collisionFilterGroup:4});this.world.addBody(wall);this.walls.push(wall);
    }
  }
  setObstacles(obstacles){
    for(const body of this.obstacles)this.world.removeBody(body);
    this.obstacles=obstacles.map(({x,z,halfX,halfZ,height,walkOnly})=>{const body=new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(halfX,height/2,halfZ)),position:new CANNON.Vec3(x,height/2,z),collisionFilterGroup:4,collisionFilterMask:walkOnly?1:3});this.world.addBody(body);return body;});
  }
  addPawn(radius,mass=1){
    const body=new CANNON.Body({mass,shape:new CANNON.Sphere(radius),position:new CANNON.Vec3(0,.6,0),fixedRotation:true,linearDamping:0,collisionFilterGroup:1,collisionFilterMask:5});
    body.linearFactor.set(1,0,1);this.world.addBody(body);return body;
  }
  addEnemy(x,z,radius,mass=1){const body=this.addPawn(radius,mass);body.position.set(x,.6,z);this.enemies.push(body);return body;}
  addGrenade(position,direction){const body=new CANNON.Body({mass:.3,shape:new CANNON.Sphere(.16),position:new CANNON.Vec3(position.x,position.y,position.z),linearDamping:.12,angularDamping:.1,collisionFilterGroup:2,collisionFilterMask:4});body.velocity.set(direction.x*6.6,4.8,direction.z*6.6);body.angularVelocity.set(6,2,4);this.world.addBody(body);this.grenades.push(body);return body;}
  removeGrenade(body){this.world.removeBody(body);const index=this.grenades.indexOf(body);if(index!==-1)this.grenades.splice(index,1);}
  knockback(body,direction,strength){body.applyImpulse(new CANNON.Vec3(direction.x*strength*body.mass,0,direction.z*strength*body.mass));}
  removeEnemy(body){this.world.removeBody(body);this.enemies.splice(this.enemies.indexOf(body),1);}
  clear(){for(const enemy of this.enemies)this.world.removeBody(enemy);for(const body of [...this.grenades])this.removeGrenade(body);this.enemies.length=0;this.player.position.set(0,.6,0);this.player.velocity.setZero();this.world.accumulator=0;}
  step(dt){this.world.step(1/60,dt,4);for(const body of [this.player,...this.enemies]){body.position.y=.6;body.velocity.y=0;body.position.x=Math.max(-ARENA.x,Math.min(ARENA.x,body.position.x));body.position.z=Math.max(-ARENA.z,Math.min(ARENA.z,body.position.z));}}
}
