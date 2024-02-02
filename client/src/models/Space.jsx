import { useGLTF } from '@react-three/drei';
import React from 'react';

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

export default Space;