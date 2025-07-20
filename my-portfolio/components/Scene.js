import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';

// This is the main rotating object in our scene.
function Shape() {
  const meshRef = useRef();
  const { viewport, mouse } = useThree(); // Get viewport size and mouse position

  // This hook runs on every frame, allowing for animation.
  useFrame((state, delta) => {
    // Make it slowly rotate on its own
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.1;

    // Make it gently move towards the mouse position
    const x = (mouse.x * viewport.width) / 2.5;
    const y = (mouse.y * viewport.height) / 2.5;
    meshRef.current.position.set(x, y, 0);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 0]}> 
      {/* The '0' detail level makes it look like a low-poly crystal */}
      <meshStandardMaterial color="#ffffff" wireframe />
    </Icosahedron>
  );
}

// This is the main component that you will import into your page.
export default function Scene() {
  return (
    <Canvas>
      {/* Add some lights to the scene */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Add our rotating shape */}
      <Shape />
    </Canvas>
  );
}
