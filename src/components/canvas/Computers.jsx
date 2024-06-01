import React ,{Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, meshBounds, useGLTF, } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Computers = ({isMobile}) => {
  const computer= useGLTF('../../../desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20,50,10]}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        angle={0.12}
      />
      <primitive 
        object={computer.scene}
        scale={1.7}
        position={isMobile ? [4, -9.25, -3.5] : [4, -6.25, -3.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas= ()=>{
  const [isMobile, setIsMobile]= useState(false);
  useEffect(()=>{
    const mediaQuery= window.matchMedia(
      '(max-width:900px)'
    );
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange= (event)=>{
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return ()=>{
      mediaQuery,removeEventListener('change', handleMediaQueryChange);
    }
  })
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={isMobile?{position:[20,3,5], fov:80} : {position:[20,3,5], fov:60}}
    gl={{preserveDrawingBuffer:true}}
    >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI/2}
              minPolarAngle={Math.PI/2}
            />
          <Computers isMobile={isMobile}/>
        </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputersCanvas