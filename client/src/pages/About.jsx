import Loader from '../components/Loader';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import Space from '../models/Space';
import { OrbitControls } from '@react-three/drei';

const About = () => {
  return (
    <section className='w-screen h-screen fixed'>
      <Canvas
        className='w-screen h-screen bg-transparent'
        camera={{ 
          fov: 60,
          near: 0.1, 
          far: 1000,
          position: [0, 0, -25]}}>
        <Suspense fallback={<Loader />}>
          <OrbitControls />
          <directionalLight position={[1,1,1]} intensity={0}/>
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          <Space />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default About;