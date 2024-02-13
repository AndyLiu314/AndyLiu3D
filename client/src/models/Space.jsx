import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import * as THREE from 'three';

import spaceScene from '../assets/3D/stars_skybox.glb'

const Space = () => {
  const space = useGLTF(spaceScene);
  const stars = useRef([]);
  return (
    <mesh>
        <primitive 
          object={space.scene} 
          scale = {[100, 100, 100]} />
        {addStar()}
    </mesh>
  )
}

function addStar() {
  const [x,y,z] = getRandomPosition();
  console.log([x,y,z])
  return (
    <mesh>
      <sphereGeometry 
        args={[0.25, 24, 24]}
        position={[x,y,z]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

function getRandomPosition() {
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
  return [x,y,z];
}

export default Space;