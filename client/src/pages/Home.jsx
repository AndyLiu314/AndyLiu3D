import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Rocket from '../models/Rocket';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  const adjustRocket = () => {
    let screenScale = null;
    let screenPosition = [0, -20, 0];
    let rotation = [0,3.15,0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [3, 3, 3];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [rocketScale, rocketPosition, rocketRotation] = adjustRocket();

  return (
    <section className = 'w-full h-screen absolute'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera = {{ 
          fov: 75,
          near: 0.1, 
          far: 1000,
          position: [0, 0, -40]}} >

        <Suspense fallback={<Loader />}>
          {/* <OrbitControls /> */}
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