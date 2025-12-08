import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  color: string;
  type: 'tomato' | 'onion' | 'chili' | 'grapes' | 'carrot' | 'apple';
}

// Product 3D Models
function TomatoModel({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered
        ? state.clock.elapsedTime * 1.5
        : state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={hovered ? 1.15 : 1}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.2, 8]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.6} />
      </mesh>
      <mesh position={[0.15, 0.9, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.3, 0.03, 0.12]} />
        <meshStandardMaterial color="#43a047" roughness={0.5} />
      </mesh>
      <mesh position={[-0.15, 0.9, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.3, 0.03, 0.12]} />
        <meshStandardMaterial color="#43a047" roughness={0.5} />
      </mesh>
    </group>
  );
}

function OnionModel({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered
        ? state.clock.elapsedTime * 1.5
        : state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={hovered ? 1.15 : 1}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.05} />
      </mesh>
      <mesh position={[0, -0.8, 0]}>
        <coneGeometry args={[0.15, 0.3, 8]} />
        <meshStandardMaterial color="#d4a574" roughness={0.7} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.03, 0.08, 0.5, 8]} />
        <meshStandardMaterial color="#66bb6a" roughness={0.5} />
      </mesh>
    </group>
  );
}

function ChiliModel({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = hovered
        ? Math.sin(state.clock.elapsedTime * 3) * 0.2
        : Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <group ref={meshRef} rotation={[0, 0, -0.3]} scale={hovered ? 1.15 : 1}>
      <mesh>
        <capsuleGeometry args={[0.18, 0.9, 8, 16]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.05, 0.08, 0.18, 8]} />
        <meshStandardMaterial color="#1b5e20" roughness={0.6} />
      </mesh>
    </group>
  );
}

function GrapesModel({ color, hovered }: { color: string; hovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = hovered
        ? state.clock.elapsedTime * 1.5
        : state.clock.elapsedTime * 0.15;
    }
  });

  const grapePositions: [number, number, number][] = [
    [0, 0.1, 0],
    [0.2, -0.05, 0.08],
    [-0.2, -0.05, 0.08],
    [0.12, -0.3, -0.08],
    [-0.12, -0.3, -0.08],
    [0, -0.55, 0],
    [0.18, -0.45, 0.12],
    [-0.18, -0.45, 0.12],
    [0.08, -0.7, 0.05],
    [-0.08, -0.7, 0.05],
  ];

  return (
    <group ref={groupRef} scale={hovered ? 1.15 : 1}>
      <mesh position={[0, 0.35, 0]}>
        <cylinderGeometry args={[0.03, 0.05, 0.35, 8]} />
        <meshStandardMaterial color="#5d4037" roughness={0.7} />
      </mesh>
      {grapePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color={color} roughness={0.25} metalness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

function CarrotModel({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered
        ? state.clock.elapsedTime * 1.5
        : state.clock.elapsedTime * 0.25;
    }
  });

  return (
    <group ref={meshRef} rotation={[0.3, 0, 0]} scale={hovered ? 1.15 : 1}>
      <mesh>
        <coneGeometry args={[0.3, 1.2, 16]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.05} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[Math.sin(i * 1.6) * 0.08, 0.7 + i * 0.1, Math.cos(i * 1.6) * 0.08]}
          rotation={[0.25, i * 1.2, 0]}
        >
          <boxGeometry args={[0.03, 0.35, 0.08]} />
          <meshStandardMaterial color="#43a047" roughness={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function AppleModel({ color, hovered }: { color: string; hovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = hovered
        ? state.clock.elapsedTime * 1.5
        : state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} scale={hovered ? 1.15 : 1}>
        <sphereGeometry args={[0.75, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.25} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.04, 0.06, 0.3, 8]} />
        <meshStandardMaterial color="#5d4037" roughness={0.7} />
      </mesh>
      <mesh position={[0.15, 0.9, 0.05]} rotation={[0, 0, 0.4]}>
        <boxGeometry args={[0.25, 0.02, 0.15]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.5} />
      </mesh>
    </group>
  );
}

function ProductModel({ type, color, hovered }: { type: string; color: string; hovered: boolean }) {
  switch (type) {
    case 'tomato':
      return <TomatoModel color={color} hovered={hovered} />;
    case 'onion':
      return <OnionModel color={color} hovered={hovered} />;
    case 'chili':
      return <ChiliModel color={color} hovered={hovered} />;
    case 'grapes':
      return <GrapesModel color={color} hovered={hovered} />;
    case 'carrot':
      return <CarrotModel color={color} hovered={hovered} />;
    case 'apple':
      return <AppleModel color={color} hovered={hovered} />;
    default:
      return <TomatoModel color={color} hovered={hovered} />;
  }
}

function Product3DCanvas({ type, color, hovered }: { type: string; color: string; hovered: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} />
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <ProductModel type={type} color={color} hovered={hovered} />
      </Float>
      <Environment preset="city" />
    </Canvas>
  );
}

interface ProductCard3DProps {
  product: Product;
}

export function ProductCard3D({ product }: ProductCard3DProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`premium-card overflow-hidden cursor-pointer transition-all duration-500 ${
        hovered ? 'shadow-large scale-[1.02]' : 'shadow-soft'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="h-64 md:h-72 bg-secondary/30">
        <Product3DCanvas type={product.type} color={product.color} hovered={hovered} />
      </div>
      <div className="p-6 space-y-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-foreground">{product.name}</h3>
          <p className="text-muted-foreground text-sm mt-1">{product.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-display text-lg font-bold text-foreground">{product.price}</span>
          <Button variant="premium" size="sm">
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Red Onion',
    description: 'Export-grade Nashik onions, known worldwide',
    price: '$2.50/kg',
    color: '#f5deb3',
    type: 'onion',
  },
  {
    id: '2',
    name: 'Fresh Green Chili',
    description: 'Spicy, farm-fresh chilies for global cuisines',
    price: '$4.00/kg',
    color: '#2e7d32',
    type: 'chili',
  },
  {
    id: '3',
    name: 'Thompson Grapes',
    description: 'Sweet, seedless grapes from Maharashtra vineyards',
    price: '$6.50/kg',
    color: '#7b1fa2',
    type: 'grapes',
  },
  {
    id: '4',
    name: 'Cherry Tomatoes',
    description: 'Vine-ripened, perfect for salads and cooking',
    price: '$3.50/kg',
    color: '#e53935',
    type: 'tomato',
  },
  {
    id: '5',
    name: 'Fresh Carrots',
    description: 'Crisp, orange carrots packed with nutrients',
    price: '$2.00/kg',
    color: '#ff7043',
    type: 'carrot',
  },
  {
    id: '6',
    name: 'Red Delicious Apple',
    description: 'Crisp Himalayan apples with natural sweetness',
    price: '$5.00/kg',
    color: '#c62828',
    type: 'apple',
  },
];

export function ProductsGrid() {
  return (
    <section id="products" className="py-20 md:py-32 bg-background">
      <div className="premium-container">
        <div className="text-center mb-16">
          <h2 className="premium-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Premium Fresh Produce
          </h2>
          <p className="premium-subtext text-lg max-w-2xl mx-auto">
            Explore our selection of export-quality vegetables and fruits, carefully sourced from the finest farms in India.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard3D key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
