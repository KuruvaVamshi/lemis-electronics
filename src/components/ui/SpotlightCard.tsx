"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, type HTMLMotionProps } from "framer-motion";

interface SpotlightCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * SpotlightCard — Implements Animation Bible #75 & #88 (Card Glow Follow / Spotlight Card).
 * On desktop (pointer: fine), a subtle warm lighting beam tracks the cursor across the card surface,
 * embodying the lighting manufacturing aesthetic.
 * On mobile/touch devices, heavy listeners are omitted for optimal performance.
 */
export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(245, 158, 11, 0.12)",
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  useEffect(() => {
    // Pointer discipline: only attach mouse listeners on fine-pointer devices (desktop)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 3D Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || !hasFinePointer) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPosition({ x: mouseX, y: mouseY });
    
    // Tilt calculation
    const xPct = (mouseX / rect.width) - 0.5;
    const yPct = (mouseY / rect.height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (hasFinePointer) setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl overflow-hidden bg-white border border-slate-200 transition-all duration-300 shadow-sm hover:shadow-card-hover ${className}`}
      style={hasFinePointer ? { rotateX, rotateY, transformStyle: "preserve-3d" } : {}}
      {...props}
    >
      {/* Dynamic Lighting Beam Spotlight overlay */}
      {hasFinePointer && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
          style={{
            opacity,
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 70%)`,
          }}
          aria-hidden="true"
        />
      )}

      {/* Card Content */}
      <div className="relative z-20 h-full flex flex-col justify-between transform-gpu" style={{ transform: hasFinePointer ? "translateZ(30px)" : "none" }}>
        {children}
      </div>
    </motion.div>
  );
}
