import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Decal, Float, useTexture } from "@react-three/drei"
import CanvasLoader from '../Loader'
import { Suspense } from 'react'

const Ball = ({icon}) => {
  const [decal] = useTexture([icon]);

  return (
    <Float
      speed={1.75} 
      rotationIntensity={1}
      floatIntensity={2}  
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh
        castShadow receiveShadow scale={2.75}
      >
        <octahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={95}
          flatShading
        />
        <Decal 
          position={[0, 0, 1]}
          rotation={[2*Math.PI,0,6.28]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

const BallCanvas = (props) => {
  
  return (
  <Canvas
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
      />
      <Ball icon={props.icon}/>
    </Suspense>

    <Preload all />
  </Canvas>
  )
}
export default BallCanvas;