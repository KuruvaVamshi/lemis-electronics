"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-[100] flex pointer-events-none overflow-hidden">
        {/* 5 falling columns */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="h-full flex-1 bg-slate-950 border-r border-slate-800/50 last:border-r-0"
            initial={{ top: 0 }}
            animate={{ top: "100%" }}
            transition={{
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
              delay: 0.5 + i * 0.08, // Staggered drop
            }}
            style={{ position: "relative" }}
          />
        ))}

        {/* Logo in center */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 1, y: 0, scale: 1 }}
          animate={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        >
          <div className="flex flex-col items-center gap-4">
            <Image 
              src="/logo-lemis.png" 
              alt="Lemis Electronics" 
              width={200} 
              height={200} 
              className="w-auto h-24 sm:h-32 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
