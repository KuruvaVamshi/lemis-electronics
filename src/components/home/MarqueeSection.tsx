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
  "BULK PROJECT ORDERS",
];

export default function MarqueeSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-4 sm:py-5 border-y border-slate-800/80">

      {/* Subtle warm gradient overlay — left and right fade edges for seamless loop */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center font-heading font-black text-lg sm:text-xl uppercase tracking-[0.15em]"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      >
        {[...Array(4)].map((_, arrayIndex) => (
          <React.Fragment key={arrayIndex}>
            {MARQUEE_ITEMS.map((item, index) => (
              <div key={`${arrayIndex}-${index}`} className="flex items-center mx-5 sm:mx-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 via-slate-300 to-slate-400">
                  {item}
                </span>
                <Zap className="w-4 h-4 ml-5 sm:ml-8 text-amber-500/60" />
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
