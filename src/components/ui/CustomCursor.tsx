"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the outer ring
  const springX = useSpring(-100, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(-100, { damping: 25, stiffness: 300, mass: 0.5 });

  // Fast springs for the inner dot
  const dotSpringX = useSpring(-100, { damping: 40, stiffness: 800, mass: 0.2 });
  const dotSpringY = useSpring(-100, { damping: 40, stiffness: 800, mass: 0.2 });

  useEffect(() => {
    // Only run cursor logic on non-touch devices
    const mq = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mq.addEventListener("change", handler);

    if (!mq.matches) return;

    const moveCursor = (e: MouseEvent) => {
      springX.set(e.clientX - 16); // offset by half size
      springY.set(e.clientY - 16);
      dotSpringX.set(e.clientX - 4); // offset by half size
      dotSpringY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      mq.removeEventListener("change", handler);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [springX, springY, dotSpringX, dotSpringY]);

  // We render the container but hide it if no fine pointer to avoid React reconciliation errors
  return (
    <div className={hasFinePointer ? "block" : "hidden"}>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-amber-500 pointer-events-none z-[9999]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-amber-500 pointer-events-none z-[9999]"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(245, 158, 11, 0.1)" : "rgba(245, 158, 11, 0)",
        }}
        transition={{ duration: 0.2 }}
      />
    </div>
  );
}
