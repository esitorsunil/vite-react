import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sparkles } from '@react-three/drei'

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })
  return(
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive={"#468585"}/>

      <Sparkles count={100} size={6} scale={1} speed={0.002} noise={0.2} color={"orange"}/>

    </mesh>
  )
}
const App = () => {
  return (
    <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', 
    justifyContent: 'center', alignItems: 'center' }}>
      <OrbitControls enableZoom enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />

      <color attach="background" args={['#f0f0f0']} />

      <RotatingCube />
      </Canvas>
  )
}

export default App