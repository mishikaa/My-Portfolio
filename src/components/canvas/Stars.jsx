import { PointMaterial, Points, Preload } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { random } from 'maath';
import React, { Suspense, useRef } from 'react'

const Stars = (props) => {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array
  (8000), {radius: 1.1})

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta/20; 
    ref.current.rotation.y -= delta/15; 
  }) 
  return (
    <group rotation={[0,0,Math.PI/4]}>
      <Points 
        ref={ref} 
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial 
          transparent
          color="#f272c8"
          size={0.0025}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const StarsCanvas = () => {
  return (
  <div className='w-full h-full absolute inset-0 z-[-1]'>
    <Canvas
      camera={{
        position: [0, 0, 1]
      }}
    >
      <Suspense fallback={null}>
        <Stars />
        <Preload all />
      </Suspense>
    </Canvas>
  </div>
)}
export default StarsCanvas