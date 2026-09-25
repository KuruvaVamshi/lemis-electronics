"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

/**
 * MagneticButton — Implements Animation Bible #124 & Motion Design Skill §5.
 * On desktop (pointer: fine), primary CTAs subtly gravitate towards the mouse cursor
 * using spring physics, returning elastically on mouse leave.
 * On mobile/touch devices, physics listeners are bypassed completely with native tap scale.
 */
export default function MagneticButton({
  children,
  className = "",
  strength = 0.28,
  onClick,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  // Smooth interruptible spring physics
  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mq.matches);

    const handler = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current || !hasFinePointer) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
      whileTap={{ scale: 0.96 }}
      className={`relative inline-flex items-center justify-center transition-shadow select-none ${className}`}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
