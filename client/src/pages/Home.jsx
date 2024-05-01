import React, { useRef, useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Loader from '../components/Loader';
import Rocket from '../models/Rocket';
import { OrbitControls } from '@react-three/drei';
import Space from '../models/Space';
import Earth from '../models/Earth';
import Blackhole from '../models/Blackhole';
import AlienPlanet from '../models/AlienPlanet';

const Rotating = (props) => {
  const ref = useRef();

  useFrame((_state, delta) => {
    ref.current.rotation.y += 0.1*delta;
  })

  return <group ref={ref}>{props.children}</group>
};

const Home = () => {
  const [yOffset, setYOffset] = useState(0);
  const adjustRocket = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0,3.15,0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    const onWheel = (event) => {
      const delta = -event.deltaY; // Positive when scrolling down, negative when scrolling up
      setYOffset((prevOffset) => prevOffset + delta * 0.001); // Adjust factor for sensitivity
    };

    let crazy = window.addEventListener('wheel', onWheel);

    return [screenScale, screenPosition, rotation];
  }

  const [rocketScale, rocketPosition, rocketRotation] = adjustRocket();

  return (
    <section className='w-screen h-screen fixed'>
      <Canvas 
        className='w-screen h-screen bg-transparent'
        camera = {{ 
          fov: 60,
          near: 0.1, 
          far: 1000,
          position: [0, 0, -25]}} >

        <Suspense fallback={<Loader />}>
          {/* <OrbitControls /> */}
          <directionalLight position={[1,1,1]} intensity={4}/>
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Space />
          <Rocket 
            position = {[0, yOffset, 0]}
            scale = {rocketScale}
            rotation = {rocketRotation}
          />
          
          <Rotating>
          <Earth /> 
          </Rotating>
          
          <Blackhole />

          <Rotating>
          <AlienPlanet />
          </Rotating>

        </Suspense>
      </Canvas>

    </section>
  )
}

export default Home;