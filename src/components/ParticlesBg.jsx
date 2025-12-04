import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// This component MUST run inside the Canvas
function ParticlePoints({ theme }) {
  const particlesRef = useRef();

  // Generate particle positions once
  const positions = useMemo(() => {
    const arr = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  // Mouse reactive rotation
  useFrame(({ mouse }) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = mouse.x * 0.4;
    particlesRef.current.rotation.x = mouse.y * 0.4;
    particlesRef.current.rotation.z += 0.0015; 
  });

  return (
    <Points ref={particlesRef} positions={positions} stride={3}>
      <PointMaterial
        size={0.015}
        sizeAttenuation
        transparent
        depthWrite={false}
        color={theme === "dark" ? "#ffffff" : "#444444"}
      />
    </Points>
  );
}

// Wrapper Component (NO Three.js hooks here)
export default function ParticlesBg({ theme }) {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 2.7] }}>
        <ParticlePoints theme={theme} />
      </Canvas>
    </div>
  );
}
