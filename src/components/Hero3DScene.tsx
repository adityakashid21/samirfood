import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Stylized Tomato
function Tomato({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.1 : 1}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#e53935"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
        {/* Stem */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.05, 0.08, 0.15, 8]} />
          <meshStandardMaterial color="#2e7d32" roughness={0.6} />
        </mesh>
        {/* Leaves */}
        <mesh position={[0.1, 0.55, 0]} rotation={[0, 0, 0.5]}>
          <boxGeometry args={[0.2, 0.02, 0.08]} />
          <meshStandardMaterial color="#43a047" roughness={0.5} />
        </mesh>
        <mesh position={[-0.1, 0.55, 0]} rotation={[0, 0, -0.5]}>
          <boxGeometry args={[0.2, 0.02, 0.08]} />
          <meshStandardMaterial color="#43a047" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// Stylized Onion
function Onion({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={position}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#f5deb3"
            roughness={0.4}
            metalness={0.05}
          />
        </mesh>
        {/* Root */}
        <mesh position={[0, -0.5, 0]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <meshStandardMaterial color="#d4a574" roughness={0.7} />
        </mesh>
        {/* Top shoots */}
        <mesh position={[0, 0.6, 0]}>
          <cylinderGeometry args={[0.02, 0.05, 0.3, 8]} />
          <meshStandardMaterial color="#66bb6a" roughness={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

// Stylized Green Chili
function GreenChili({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.4}>
      <group ref={meshRef} position={position} rotation={[0, 0, -0.3]}>
        {/* Chili body */}
        <mesh>
          <capsuleGeometry args={[0.12, 0.6, 8, 16]} />
          <meshStandardMaterial
            color="#2e7d32"
            roughness={0.3}
            metalness={0.1}
          />
        </mesh>
        {/* Stem */}
        <mesh position={[0, 0.45, 0]}>
          <cylinderGeometry args={[0.03, 0.05, 0.12, 8]} />
          <meshStandardMaterial color="#1b5e20" roughness={0.6} />
        </mesh>
      </group>
    </Float>
  );
}

// Stylized Grapes Cluster
function Grapes({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const grapePositions: [number, number, number][] = [
    [0, 0, 0],
    [0.15, -0.1, 0.05],
    [-0.15, -0.1, 0.05],
    [0.08, -0.25, -0.05],
    [-0.08, -0.25, -0.05],
    [0, -0.4, 0],
    [0.12, -0.35, 0.08],
    [-0.12, -0.35, 0.08],
  ];

  return (
    <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={groupRef} position={position}>
        {/* Stem */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.02, 0.03, 0.25, 8]} />
          <meshStandardMaterial color="#5d4037" roughness={0.7} />
        </mesh>
        {/* Grapes */}
        {grapePositions.map((pos, i) => (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color="#7b1fa2"
              roughness={0.25}
              metalness={0.15}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Stylized Carrot
function Carrot({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.35} floatIntensity={0.45}>
      <group ref={meshRef} position={position} rotation={[0.2, 0, 0]}>
        {/* Carrot body */}
        <mesh>
          <coneGeometry args={[0.2, 0.9, 16]} />
          <meshStandardMaterial
            color="#ff7043"
            roughness={0.4}
            metalness={0.05}
          />
        </mesh>
        {/* Leaves */}
        {[0, 1, 2].map((i) => (
          <mesh
            key={i}
            position={[Math.sin(i * 2.1) * 0.05, 0.5 + i * 0.08, Math.cos(i * 2.1) * 0.05]}
            rotation={[0.2, i * 1.2, 0]}
          >
            <boxGeometry args={[0.02, 0.25, 0.06]} />
            <meshStandardMaterial color="#43a047" roughness={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Main 3D Scene
export function Hero3DScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#fff" />

        <Tomato position={[-1.8, 0.5, 0]} />
        <Onion position={[1.8, 0.3, 0.5]} />
        <GreenChili position={[0, 1, 1]} />
        <Grapes position={[-0.8, -0.8, 0.8]} />
        <Carrot position={[1.2, -0.5, 0.3]} />

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
