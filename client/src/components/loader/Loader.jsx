import { Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { RocketSVG } from './RocketSVG';
import './loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 5; // Increase progress by 5% every 100ms
        }
        clearInterval(interval);
        return prevProgress;
      });
    }, 10); // Adjust speed of loading

    return () => clearInterval(interval);
  }, []);

  return (
    <Html style={{position: 'fixed', translate: '-50vw -50vh'}} className='w-screen h-screen'>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='flex flex-col h-screen justify-center items-center'>
        <RocketSVG />
        <div className="mt-2 text-white text-sm">Loading {progress}%</div>
      </div>
    </Html>
  );
};

export default Loader;