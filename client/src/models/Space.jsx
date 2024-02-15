import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import spaceScene from '../assets/3D/stars_skybox.glb'

const Space = () => {
  const space = useGLTF(spaceScene);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 1000 }, () => getRandomPosition());
    setStars(newStars);
  }, []);

  return (
    <mesh>
        <primitive 
          object={space.scene} 
          scale = {[500, 500, 500]} />
        {stars.map(([x, y, z], index) => (
        <Star key={index} position={[x, y, z]} />
        ))}
    </mesh>
  )
}

const Star = ({ position }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.3, 8, 8]} />
      <meshStandardMaterial />
    </mesh>
  );
};

function getRandomPosition() {
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloat( 30, 300 ));
  return [x,y,z];
}

function randomFloat (total, range) {

}

export default Space;