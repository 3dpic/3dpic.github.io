// let maxAnisotropy = renderer.capabilities.getMaxAnisotropy();
// matSteelTexture.anisotropy = maxAnisotropy;
// vert_fon.anisotropy = maxAnisotropy;
// vert_fonGor.anisotropy = maxAnisotropy;
let matAluminuim = new THREE.MeshStandardMaterial({
  color: 0x333333,
  metalness: 0.8,
  roughness: 0.3,
  needsUpdate: true
});
let matSteel = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,    //0x9698a0
  metalness: 0.75,
  roughness: 0.6,
  needsUpdate: true
});
let matSteelNerg = new THREE.MeshStandardMaterial({
  color: 0xd50000,    //0x9698a0
  metalness: 0.9,
  roughness: 0.1,
  needsUpdate: true
});
// matSteel.envMap = textureCube;
// matSteel.needsUpdate = true;
// // matSteel.map = matSteelTexture;
// matSteel.roughnessMap = matSteelTexture;
// matSteel.roughnessMap.wrapS = THREE.RepeatWrapping;
// matSteel.roughnessMap.repeat.set( 2, 1 );
// matSteel.bumpMap = matSteelTexture;
// matSteel.bumpMap.wrapS = THREE.RepeatWrapping;
// matSteel.bumpMap.repeat.set( 2, 1 );
// matSteel.bumpScale = 0.2;
let matRAL7045 = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 0.5,
  roughness: 0.3
});
let matBlueGloss = new THREE.MeshStandardMaterial({
  color: 0x0032da,    //0x28343b
  metalness: 0.6,
  roughness: 0.3
});

let matBlueGlossDark = new THREE.MeshStandardMaterial({
  color: 0x0000ff,    //0x28343b
  metalness: 0.2,
  roughness: 0.2
});

let matSteelClear = new THREE.MeshStandardMaterial({
  color: 0x28343b,    //0x28343b
  metalness: 0.7,
  roughness: 0.8
});
let stainlessGunMetal = new THREE.MeshStandardMaterial({
  color: 0xaaaaaa,    //0x28343b
  metalness: 0.9,
  roughness: 0.6,
  // envMap: textureCube,
  needsUpdate: true,
  // map: StainlessGunMetal_albedo,
  // roughnessMap: StainlessGunMetal_roughness,
  side: THREE.DoubleSide
});

let matGold = new THREE.MeshStandardMaterial({
  color: 0xffc355,    //Gold	(1.000, 0.766, 0.336) or [255, 195, 86]
  metalness: 0.9,
  roughness: 0.12 ,
  // combine: THREE.MultiplyOperation,
});
let matSilver = new THREE.MeshStandardMaterial({
  color: 0xf8f5e9,    //Silver	(0.972, 0.960, 0.915) or [248, 245, 233]
  metalness: 1,
  roughness: 0.2 ,
  // combine: THREE.MultiplyOperation,
});
let matCopper = new THREE.MeshStandardMaterial({
  color: 0xeffffff,
  metalness: 0.9,
  roughness: 1.0 ,
  // envMap: textureCube,
  needsUpdate: true,
  // map: RepolishedCopper_albedo,
  // roughnessMap: RepolishedCopper_roughness,
});
let matPlastic = new THREE.MeshStandardMaterial({
  color: 0x020202,
  metalness:0.2,
  roughness: 0.1,
  side: THREE.DoubleSide
});
let matRubber = new THREE.MeshStandardMaterial({
  color: 0x030303,
  metalness:0.2,
  roughness: 0.4,
  side: THREE.DoubleSide
});
let matPlasticBlack = new THREE.MeshLambertMaterial({
  color: 0x000000
});
let matDarkDoubleSide = new THREE.MeshLambertMaterial({
  color: 0x222222,
  side: THREE.DoubleSide
});
let matYellowDoubleSide = new THREE.MeshLambertMaterial({
  color: 0x93936c,
  side: THREE.DoubleSide
});
let matPlasticMatte = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:0.2,
  roughness: 0.7
});
let matPlasticWhite = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0.4,
  roughness: 0.3,
  side: THREE.DoubleSide
});
let matEkran = new THREE.MeshLambertMaterial({
   color: 0xffffff,
  // map: vert_fon
});
let matEkranGorizont = new THREE.MeshLambertMaterial({
   color: 0xffffff,
  // map: vert_fonGor
});
let matWood1 = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness:0.6,
  roughness: 1.0,
});
let matGlass2 = new THREE.MeshStandardMaterial({
  color: 0x000000,
  metalness:1.0,
  roughness: 0.15,
  transparent: true,
  opacity: 1
});
let matGhost = new THREE.MeshPhongMaterial({
  color: 0xaaaaaa,
  needsUpdate: true,
  // side: THREE.DoubleSide,
  transparent: true,
  wireframe: true,
  //combine: THREE.MultiplyOperation,
  opacity: 0.4
});
let shader = THREE.FresnelShader;
let uniforms = THREE.UniformsUtils.clone( shader.uniforms );
uniforms[ "tCube" ].value = textureCube;
let matGlass = new THREE.ShaderMaterial( {
uniforms: uniforms,
vertexShader: shader.vertexShader,
fragmentShader: shader.fragmentShader,
transparent: true
} );

let matStoikaVert = [
  new THREE.MeshStandardMaterial({
    color : 0xff0000
  })
];
let matStoikaGoriz = [
  new THREE.MeshStandardMaterial({
    color : 0x00ff00
  })
];
let matStoikaGoriz2 = [
  new THREE.MeshStandardMaterial({
    color : 0x00ff00
  })
];
