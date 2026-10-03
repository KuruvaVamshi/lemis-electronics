"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles, ContactShadows, Sphere } from "@react-three/drei";
import * as THREE from "three";

function TechCore({ activeLightingMode = "cool" }: { activeLightingMode?: "cool" | "warm" }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  const isWarm = activeLightingMode === "warm";
  const glowColor = isWarm ? "#f59e0b" : "#38bdf8"; // amber-500 or sky-400
  const coreColor = isWarm ? "#fef3c7" : "#e0f2fe";

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Magnetic cursor tracking
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, delta * 2);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, delta * 2);
      
      // Floating animation for rings
      const time = state.clock.getElapsedTime();
      if (ring1Ref.current) ring1Ref.current.rotation.x = time * 0.5;
      if (ring1Ref.current) ring1Ref.current.rotation.y = time * 0.2;
      
      if (ring2Ref.current) ring2Ref.current.rotation.y = time * 0.3;
      if (ring2Ref.current) ring2Ref.current.rotation.z = time * 0.4;
      
      if (ring3Ref.current) ring3Ref.current.rotation.x = -time * 0.2;
      if (ring3Ref.current) ring3Ref.current.rotation.z = -time * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Intense Glowing Core */}
        <Sphere args={[0.8, 64, 64]}>
          <meshBasicMaterial color={coreColor} />
        </Sphere>
        
        {/* Core Halo/Aura */}
        <Sphere args={[1.1, 32, 32]}>
          <meshBasicMaterial color={glowColor} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
        </Sphere>

        <Sphere args={[1.5, 32, 32]}>
          <meshBasicMaterial color={glowColor} transparent opacity={0.1} blending={THREE.AdditiveBlending} depthWrite={false} />
        </Sphere>

        {/* High-Tech Rings */}
        <mesh ref={ring1Ref}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={2} toneMapped={false} />
        </mesh>
        
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2.5, 0.05, 16, 100]} />
          <meshStandardMaterial color="#334155" metalness={1} roughness={0.1} />
        </mesh>

        <mesh ref={ring3Ref}>
          <torusGeometry args={[3, 0.01, 16, 100]} />
          <meshStandardMaterial color={glowColor} emissive={glowColor} emissiveIntensity={1.5} toneMapped={false} />
        </mesh>

        {/* Energy Particles */}
        <Sparkles count={200} scale={8} size={2} speed={0.4} color={glowColor} opacity={0.8} />
      </Float>
    </group>
  );
}

export default function Hero3DBulb({ activeLightingMode = "cool" }: { activeLightingMode?: "cool" | "warm" }) {
  return (
    <div className="w-full h-full relative cursor-crosshair">
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        
        <TechCore activeLightingMode={activeLightingMode} />
        
        <Environment preset="city" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.8} scale={20} blur={2.5} far={5} color="#000000" />
      </Canvas>
    </div>
  );
}
