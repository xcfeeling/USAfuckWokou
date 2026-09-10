import * as CANNON from 'cannon-es';

export class DrivingPhysics{
  constructor(){
    this.world=new CANNON.World({gravity:new CANNON.Vec3(0,-12,0)});
    this.world.broadphase=new CANNON.SAPBroadphase(this.world);
    this.world.solver.iterations=7;
    this.world.defaultContactMaterial.friction=.03;
    this.world.defaultContactMaterial.restitution=0;
    const ground=new CANNON.Body({mass:0,shape:new CANNON.Plane(),collisionFilterGroup:1});
    ground.quaternion.setFromEuler(-Math.PI/2,0,0);this.world.addBody(ground);
    this.body=new CANNON.Body({mass:8,position:new CANNON.Vec3(0,.24,0),fixedRotation:true,linearDamping:.01,collisionFilterGroup:2,collisionFilterMask:1|4});
    this.shape=new CANNON.Box(new CANNON.Vec3(1,.23,.4));this.body.addShape(this.shape);this.world.addBody(this.body);
    this.pendingHit=null;
    this.body.addEventListener('collide',event=>{if(event.body.obstacle&&!this.pendingHit)this.pendingHit=event.body.obstacle;});
    this.obstacles=[];
  }
  resize(info,scale){
    if(this.vehicle===info&&Math.abs(this.scale-scale)<.001)return;
    this.vehicle=info;this.scale=scale;
    this.shape.halfExtents.set(info.half*scale*.88,.23,info.width*scale*.9);
    this.shape.updateConvexPolyhedronRepresentation();this.shape.updateBoundingSphereRadius();this.body.updateBoundingRadius();this.body.aabbNeedsUpdate=true;
  }
  addObstacle(item){
    const [x,y,z]=item.half;
    const body=new CANNON.Body({mass:0,type:CANNON.Body.KINEMATIC,shape:new CANNON.Box(new CANNON.Vec3(x,y,z)),collisionFilterGroup:4,collisionFilterMask:2});
    body.obstacle=item;body.position.set(item.distance,y,item.lane);this.world.addBody(body);item.body=body;this.obstacles.push(body);
  }
  clearObstacles(){for(const body of this.obstacles)this.world.removeBody(body);this.obstacles.length=0;this.pendingHit=null;}
  step(dt,forwardSpeed,laneZ,invulnerable,lowGravity){
    this.world.gravity.y=lowGravity?-7.5:-12;
    this.body.collisionFilterMask=invulnerable?1:1|4;
    this.body.position.x=0;this.body.velocity.x=0;
    this.body.velocity.z=Math.max(-5,Math.min(5,(laneZ-this.body.position.z)*8));
    this.body.aabbNeedsUpdate=true;
    for(const obstacle of this.obstacles)obstacle.velocity.x=-forwardSpeed;
    this.world.step(1/120,dt,5);
    this.body.position.x=0;this.body.velocity.x=0;
    const hit=this.pendingHit;this.pendingHit=null;return hit;
  }
  jump(velocity){if(this.body.position.y<.31&&this.body.velocity.y<.3){this.body.velocity.y=velocity;this.body.wakeUp();return true;}return false;}
  reset(z){this.body.position.set(0,.245,z);this.body.velocity.set(0,0,0);this.body.angularVelocity.set(0,0,0);this.body.quaternion.set(0,0,0,1);this.body.wakeUp();this.pendingHit=null;}
}
