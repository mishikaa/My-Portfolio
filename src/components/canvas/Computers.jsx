import {Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber"
import {OrbitControls, Preload, useGLTF} from "@react-three/drei"
import CanvasLoader from '../Loader'

const Computers = ({isMobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundCoolor="black"/>
      <pointLight intensity={0.75}/>
      <spotLight 
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={0.5}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // An event listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)'); 
    
    // setting the initial value of 'isMobile' state variable
    setIsMobile(mediaQuery.matches) //returns true if the width is 500px or less
   
    // Defining a callback function as a listener for 
    // changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    // Adding a callback function as a listener for
    // changes to the media query
    mediaQuery.addEventListener('change',
    handleMediaQueryChange)
    
    // Removing the listener when the comonent is unmounted
    return () => {
      mediaQuery.removeEventListener('change', 
      handleMediaQueryChange)
    }
  }, [])
  
  return (
    <Canvas 
      frameloop='demand' 
      shadows 
      camera={{position: [20, 3, 5], 
      fov: 25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
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