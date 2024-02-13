import React from 'react';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Rocket from '../models/Rocket';
import { OrbitControls } from '@react-three/drei';
import Space from '../models/Space';

const Home = () => {
  const adjustRocket = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0,3.15,0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [rocketScale, rocketPosition, rocketRotation] = adjustRocket();

  return (
    <section className = 'w-screen h-screen fixed'>
      <Canvas 
        className='w-screen h-screen bg-transparent'
        camera = {{ 
          fov: 60,
          near: 0.1, 
          far: 1000,
          position: [0, 0, -20]}} >

        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <directionalLight position={[1,1,1]} intensity={4}/>
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Space />
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