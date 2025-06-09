import { Suspense, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import {useGLTF, OrbitControls, Preload} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  //Loads the 3D model
  const computer = useGLTF('./desktop_pc/scene.gltf');
  return (
    /*A Mesh is a basic scene object in three.js, and it's used to hold the geometry and the material needed to represent a shape in 3D space. We'll create a new mesh using a BoxGeometry and a MeshStandardMaterial which automatically attach to their parent. */ 
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={computer.scene} 
        scale={isMobile ? 0.75 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  //This entire block of code is for making the computer model more
  //responsive on smaller devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect( () => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []); 

  return (
    //Canvas sets up a scene and a camera and all the basic building blocks
    <Canvas 
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
      {/* removing this fixed all the warnings and error in the console */}
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          />
        <Computers isMobile={isMobile}/> 
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas