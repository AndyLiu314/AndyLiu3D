import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';

import CameraRig from './CameraRig';

const CanvasModule = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      
      <CameraRig>
        <Center>
          {/* PUT .JSX FILE FROM CANVAS FOLDER THAT HAS THREE JS SHIT */}
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModule;