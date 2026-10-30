"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Award, Zap, Lightbulb, MapPin, Target, Factory } from "lucide-react";

const MILESTONES = [
  {
    year: "2012",
    tag: "Founding Vision",
    title: "Inception of Lemis Electronics",
    description: "Started as a dedicated OEM lighting assembler focusing on high-quality LED drivers and residential lighting solutions with a small dedicated team.",
    image: "/products/story-generated.jpg",
    stats: [
      { val: "1st", lbl: "Assembly Line" },
      { val: "100%", lbl: "Quality Focus" },
      { val: "25+", lbl: "Initial Clients" }
    ],
    icon: <Lightbulb className="w-4 h-4" />
  },
  {
    year: "2016",
    tag: "Manufacturing Expansion",
    title: "Setup of Die-Casting & SMT Facility",
    description: "Transitioned to full-scale manufacturing by establishing in-house pressure die-casting and automated SMT lines for industrial LED luminaires.",
    image: "/products/highbay-light.jpg",
    stats: [
      { val: "50k", lbl: "Sq.Ft Factory" },
      { val: "SMT", lbl: "Automation" },
      { val: "IP66", lbl: "Rated Products" }
    ],
    icon: <Factory className="w-4 h-4" />
  },
  {
    year: "2020",
    tag: "Solar Integration",
    title: "Launch of Standalone Solar Lighting",
    description: "Introduced advanced solar street lighting systems with integrated lithium-ion batteries and smart MPPT charge controllers for infrastructure projects.",
    image: "/products/solar-street-light.jpg",
    stats: [
      { val: "Zero", lbl: "Grid Dependency" },
      { val: "MPPT", lbl: "Smart Controllers" },
      { val: "5 Yr", lbl: "Battery Life" }
    ],
    icon: <Zap className="w-4 h-4" />
  },
  {
    year: "2024",
    tag: "Regional Leadership",
    title: "Major Infrastructure & Highway Projects",
    description: "Recognized as a premier bulk supplier for government municipalities, highway authorities, and large-scale commercial real estate developers.",
    image: "/products/street-light.jpg",
    stats: [
      { val: "100k+", lbl: "Units Installed" },
      { val: "Govt", lbl: "Approved Vendor" },
      { val: "Pan-India", lbl: "Dispatch" }
    ],
    icon: <Award className="w-4 h-4" />
  }
];

export default function MilestoneJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Translate X based on scroll progress. 
  // We have 4 cards, so we need to translate left by approx 75% of the track width to see the last card.
  // The exact percentage depends on the viewport width vs track width.
  // A safe generic value is to move -100% + viewport width. We'll use a rough percentage mapping.
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-slate-900">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-24 pb-12">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center shrink-0">
          <span className="text-emerald-400 font-bold uppercase tracking-[3px] text-[10px] sm:text-xs">
            Company Evolution
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mt-3 mb-4">
            A Decade of Lighting Innovation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Scroll to travel through our journey from a boutique assembler into a leading manufacturer of industrial LED and Solar lighting solutions.
          </p>
          
          {/* Era Navigation Pills (Visual only, to match Vaaraahi style) */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {MILESTONES.map((ms, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-bold">
                <span className="text-amber-500">{ms.icon}</span>
                {ms.year} — {ms.tag.split(' ')[0]}
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex-1 w-full flex items-center mt-12 mb-12 pl-4 sm:pl-8 md:pl-16">
          <motion.div 
            style={{ x: xTransform }} 
            className="flex gap-8 sm:gap-12 w-max pr-32"
          >
            {MILESTONES.map((ms, idx) => (
              <div key={idx} className="w-[300px] sm:w-[450px] md:w-[600px] shrink-0 relative group">
                
                {/* Year Watermark */}
                <div className="absolute -top-16 left-0 text-7xl sm:text-9xl font-black text-slate-800/30 font-heading z-0 pointer-events-none select-none tracking-tighter transition-colors duration-500 group-hover:text-amber-500/10">
                  {ms.year}
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950/80 backdrop-blur-sm border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-2xl hover:border-amber-500/40 transition-colors">
                  
                  {/* Visual Left Side */}
                  <div className="relative aspect-[4/3] md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-inner">
                    <Image 
                      src={ms.image} 
                      alt={ms.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-700 text-xs font-bold text-slate-200 backdrop-blur-md">
                      <span className="text-amber-500">{ms.icon}</span>
                      {ms.tag}
                    </div>
                  </div>

                  {/* Content Right Side */}
                  <div className="flex flex-col justify-center py-2">
                    <span className="text-amber-500 font-bold text-[10px] tracking-widest uppercase mb-2">
                      Era {ms.year} — {ms.tag}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-black text-white font-heading mb-3 leading-tight">
                      {ms.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {ms.description}
                    </p>

                    <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-auto pt-4 border-t border-slate-800">
                      {ms.stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                          <span className="text-amber-400 font-bold text-sm sm:text-lg font-heading">{stat.val}</span>
                          <span className="text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">{stat.lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
