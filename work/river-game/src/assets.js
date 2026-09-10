import * as THREE from 'three';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

export async function loadAssets(progress) {
  const manager = new THREE.LoadingManager();
  manager.onProgress = (_, loaded, total) => progress(15 + loaded / total * 70);
  const loader = new THREE.TextureLoader(manager);
  const texture = async (name, repeat, color = true) => {
    const map = await loader.loadAsync(`./assets/${name}`);
    map.wrapS = map.wrapT = THREE.RepeatWrapping;
    map.repeat.set(...repeat);
    map.anisotropy = 8;
    if (color) map.colorSpace = THREE.SRGBColorSpace;
    return map;
  };
  const [road, normal, rough, grass, bark, water, environment, leaf, leafAlpha, leafNormal, concrete, concreteNormal, battleRoad, battleNormal, battleRough] = await Promise.all([
    texture('asphalt_02-diffuse.jpg', [5, 1.5]),
    texture('asphalt_02-nor_gl.jpg', [5, 1.5], false),
    texture('asphalt_02-rough.jpg', [5, 1.5], false),
    texture('aerial_grass_rock-diffuse.jpg', [8, 8]),
    texture('bark_brown_02-diffuse.jpg', [1, 2]),
    texture('waternormals.jpg', [1, 1], false),
    new RGBELoader(manager).loadAsync('./assets/kloppenheim_06_puresky-hdri.hdr'),
    texture('island_tree_02-leaves_diff.jpg', [1, 1]),
    texture('island_tree_02-leaves_alpha.jpg', [1, 1], false),
    texture('island_tree_02-leaves_nor_gl.jpg', [1, 1], false),
    texture('concrete_wall_007-diffuse.jpg', [2, 2]),
    texture('concrete_wall_007-nor_gl.jpg', [2, 2], false),
    texture('asphalt_01-diffuse.jpg', [1, 1]),
    texture('asphalt_01-nor_gl.jpg', [1, 1], false),
    texture('asphalt_01-rough.jpg', [1, 1], false)
  ]);
  environment.mapping = THREE.EquirectangularReflectionMapping;
  const fur = document.createElement('canvas');
  fur.width = fur.height = 256;
  const ctx = fur.getContext('2d');
  ctx.fillStyle = '#deded5'; ctx.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 12000; i++) {
    const shade = Math.round(170 + Math.random() * 80);
    ctx.strokeStyle = `rgb(${shade},${shade},${shade - 5})`;
    const x = Math.random() * 256, y = Math.random() * 256;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.random() * 2, y + 2 + Math.random() * 6); ctx.stroke();
  }
  const furMap = new THREE.CanvasTexture(fur);
  furMap.wrapS = furMap.wrapT = THREE.RepeatWrapping;
  furMap.repeat.set(3, 3);
  const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .7, ...extra });
  const mats = {
    whiteFur: std('#eeede1', { map: furMap, bumpMap: furMap, bumpScale: .035, roughness: 1 }),
    blackFur: std('#181f22', { bumpMap: furMap, bumpScale: .02, roughness: .95 }),
    silver: std('#bbc9c9', { metalness: .94, roughness: .23 }),
    red: std('#a7313e', { metalness: .55, roughness: .32 }),
    ivory: new THREE.MeshPhysicalMaterial({ color: '#d6e3dc', metalness: .32, roughness: .24, clearcoat: 1, clearcoatRoughness: .15 }),
    teal: std('#337e75', { metalness: .38, roughness: .3 }),
    rubber: std('#121b21', { roughness: .87, bumpMap: furMap, bumpScale: .008 }),
    leather: std('#303533', { roughness: .8, bumpMap: furMap, bumpScale: .01 }),
    steel: std('#546775', { metalness: .82, roughness: .38 }),
    copper: std('#b29360', { metalness: .78, roughness: .36 }),
    alien: std('#a6bfa1', { roughness: .54 }),
    eye: new THREE.MeshPhysicalMaterial({ color: '#070e14', roughness: .08, clearcoat: 1 }),
    suit: std('#416075', { roughness: .86, bumpMap: furMap, bumpScale: .008 }),
    glow: std('#e9f7df', { emissive: '#d5ffe4', emissiveIntensity: 2.8, roughness: .1 }),
    blueGlow: std('#9ce4e5', { emissive: '#63dbe1', emissiveIntensity: 2.2 }),
    tail: std('#c33332', { emissive: '#e84221', emissiveIntensity: 1.5 }),
    wood: std('#978463', { roughness: .87, bumpMap: furMap, bumpScale: .025 }),
    bark: std('#b9b3a0', { map: bark, roughness: 1 }),
    leaves: [std('#688253'), std('#4d714f'), std('#8d995b'), std('#3d6450')],
    concrete: std('#adb2a8', { map: concrete, normalMap: concreteNormal, normalScale: new THREE.Vector2(.55,.55), roughness: .97 }),
    darkConcrete: std('#737e80', { map: concrete, normalMap: concreteNormal, roughness: .95 }),
    foliage: std('#d4dcaa', { map: leaf, alphaMap: leafAlpha, alphaTest: .48, normalMap: leafNormal, normalScale: new THREE.Vector2(.3,.3), side: THREE.DoubleSide, roughness: .82 }),
    road: std('#a4b0b0', { map: road, normalMap: normal, normalScale: new THREE.Vector2(.45, .45), roughnessMap: rough, roughness: .84 }),
    grass: std('#c3c89b', { map: grass, roughness: 1 }),
    yellow: std('#dab777', { roughness: .74 }),
    orange: std('#c56b42', { roughness: .76 }),
    paint: std('#d8d8ba', { roughness: .95 }),
    glass: new THREE.MeshPhysicalMaterial({ color: '#a4c5cc', metalness: .1, roughness: .1, transmission: .35, transparent: true, opacity: .2, depthWrite: false })
  };
  const wind = { value: 0 };
  mats.foliage.onBeforeCompile = shader => {
    shader.uniforms.windTime = wind;
    shader.vertexShader = `uniform float windTime;\n${shader.vertexShader}`.replace('#include <begin_vertex>', '#include <begin_vertex>\n#ifdef USE_INSTANCING\nvec3 anchor=instanceMatrix[3].xyz;transformed.x+=sin(windTime*1.4+anchor.x*.8+anchor.z)*.12*uv.y;transformed.z+=cos(windTime+anchor.y)*.07;\n#endif');
  };
  return { mats, environment, water, wind, maps: { road, normal, rough, grass, bark, battleRoad, battleNormal, battleRough } };
}
