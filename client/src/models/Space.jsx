import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import spaceScene from '../assets/3D/stars_skybox.glb'
import { randFloat } from 'three/src/math/MathUtils';

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
  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 300 ));
  //const [x,y,z] = Array(3).fill().map(() => twoRangeRandomFloat(50, 200));
  return [x,y,z];
}

/* function twoRangeRandomFloat (min, max) { // Inclusive
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return;
  }
  const range = (max-min)+1;
  const total = range*2;
  var ranFloat = Math.random()*total;
  if (ranFloat < range){
    ranFloat -= max;
  } else {
    ranFloat -= min*2+1;
  }

  return ranFloat;
} */

function twoRangeRandomFloat (min, max) {
 // what the fuck
 // generate random number between 0 and 1, if 0 use negative if 1 use positive.
}

export default Space;