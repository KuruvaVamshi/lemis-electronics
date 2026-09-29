"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const MARQUEE_ITEMS = [
  "INDUSTRIAL HIGH BAY LIGHTING",
  "COMMERCIAL PROFILES",
  "SOLAR STREET LIGHTS",
  "LED FLOOD LIGHTS",
  "ARCHITECTURAL DOWNLIGHTS",
  "DIRECT MANUFACTURER",
  "PAN-INDIA SUPPLY",
];

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden bg-amber-500 py-3 sm:py-4 border-y border-amber-600 flex items-center">
      
      {/* 
        Using Framer Motion to create an infinite, seamless scrolling text marquee.
        We duplicate the list multiple times so it never runs out of content before looping.
      */}
      <motion.div
        className="flex whitespace-nowrap items-center font-heading font-black text-slate-900 text-lg sm:text-2xl uppercase tracking-widest"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // Adjust speed here
        }}
      >
        {/* We map the items 4 times to ensure it fills ultra-wide screens seamlessly */}
        {[...Array(4)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {MARQUEE_ITEMS.map((item, index) => (
              <div key={`${arrayIndex}-${index}`} className="flex items-center mx-4 sm:mx-8">
                <span>{item}</span>
                <Zap className="w-5 h-5 ml-4 sm:ml-8 text-amber-900" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
