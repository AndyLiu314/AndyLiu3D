import { Html } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { RocketSVG } from './RocketSVG';

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
    <Html className="flex items-center justify-center h-full w-full">
      <div>
        <RocketSVG />
        <div className="mt-2 text-white text-sm">Loading {progress}%</div> {/* Displaying the loading progress */}
      </div>
    </Html>
  );
};

export default Loader;