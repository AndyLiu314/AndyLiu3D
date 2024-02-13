import { useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from 'three';

import spaceScene from '../assets/3D/stars_skybox.glb'

const Space = () => {
  const space = useGLTF(spaceScene);
  return (
    <mesh>
        <primitive 
          object={space.scene} 
          scale = {[100, 100, 100]} />
    </mesh>
  )
}

function addStars() {
  
  return (
    <mesh>
      <sphereGeometry 
        args={[0.25, 24, 24]}
        position={[1,1,1]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

function getRandomPosition() {
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ));
  return [x,y,z];
}

export default Space;