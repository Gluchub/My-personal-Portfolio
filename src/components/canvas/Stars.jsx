import {Suspense,useRef} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
const Stars = (props) => {
  const ref=useRef();
  const [sphere]= random.inSphere(new Float32Array(5000), {radius:1.2})
  useFrame((state, delta)=>{
    ref.current.rotation.x -= delta/10;
    ref.current.rotation.y -= delta/15;
  })
  return (
    <group rotation={[0, 0, Math.PI/4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial 
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <ambientLight intensity={0.3}/>
    </group>
  )
}

const StarsCanvas= ()=>{

  <div className='absolute w-full h-full inset-0 z-[-1]'>
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
      <Preload all/>
    </Canvas>
  </div>
}
export default StarsCanvas