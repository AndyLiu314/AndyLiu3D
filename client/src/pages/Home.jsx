import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Rocket from '../models/Rocket';

const Home = () => {
  const adjustRocket = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0,0,0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [rocketScale, rocketPosition, rocketRotation] = adjustRocket();

  return (
    <section className = 'w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera = {{ near: 0.1, far: 1000}} >

        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Rocket 
            position = {rocketPosition}
            scale = {rocketScale}
            rotation = {rocketRotation}
          />
        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home;