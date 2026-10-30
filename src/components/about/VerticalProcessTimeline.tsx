"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Factory, Zap, ShieldCheck, Sun, HardHat, TrendingUp } from "lucide-react";

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Raw Material & Component Audits",
    description: "Every batch of aluminium housing and LED chips undergoes a strict audit for thermal conductivity and binning consistency before entering the assembly line.",
    specs: [
      "100% Thermal Mass Verification",
      "LED Binning Consistency Checks",
      "Driver Component Inspection"
    ],
    image: "/products/street-light.jpg",
    icon: <Factory className="w-5 h-5" />,
    align: "left"
  },
  {
    id: "02",
    title: "Die-Casting & CNC Machining",
    description: "High-pressure die-casting processes create the robust outer shells of our luminaires, designed specifically to dissipate heat effectively in industrial environments.",
    specs: [
      "Heavy-Duty Aluminium Alloys",
      "Precision CNC Finishing",
      "IP66 Weatherproof Seal Preparation"
    ],
    image: "/products/flood-light.jpg",
    icon: <Zap className="w-5 h-5" />,
    align: "right"
  },
  {
    id: "03",
    title: "SMT & LED Array Mounting",
    description: "Automated Surface Mount Technology (SMT) machines place high-efficacy LED diodes onto custom metal-core PCBs for maximum lumen output and thermal transfer.",
    specs: [
      "Automated Precision Placement",
      "Thermal Paste Application",
      "Optical Lens Integration"
    ],
    image: "/products/highbay-light.jpg",
    icon: <Sun className="w-5 h-5" />,
    align: "left"
  },
  {
    id: "04",
    title: "Driver Assembly & Potting",
    description: "Our proprietary surge-protected drivers are assembled and sealed with thermal potting compound to protect against moisture, dust, and electrical transients.",
    specs: [
      "4kV - 10kV Surge Protection",
      "Epoxy Resin Thermal Potting",
      "Voltage Fluctuation Safeguards"
    ],
    image: "/products/profile-light.jpg",
    icon: <ShieldCheck className="w-5 h-5" />,
    align: "right"
  },
  {
    id: "05",
    title: "Burn-In Quality Testing",
    description: "Every single luminaire undergoes a rigorous 12-to-24 hour continuous burn-in cycle in elevated temperature conditions to eliminate early-stage component failures.",
    specs: [
      "Continuous High-Temp Burn-In",
      "Photometric Lumen Output Tests",
      "IP Rating Water Spray Tests"
    ],
    image: "/products/rimless-down-light.webp",
    icon: <HardHat className="w-5 h-5" />,
    align: "left"
  },
  {
    id: "06",
    title: "Project Dispatch & Support",
    description: "Final packaging with secure, shock-absorbent materials ensuring safe transit to project sites across the country, backed by our dedicated warranty support desk.",
    specs: [
      "Shock-Resistant Packaging",
      "Staged Project Deliveries",
      "On-Call Technical Support"
    ],
    image: "/products/solar-street-light.jpg",
    icon: <TrendingUp className="w-5 h-5" />,
    align: "right"
  }
];

export default function VerticalProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-slate-950 relative overflow-hidden text-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-amber-500 font-bold uppercase tracking-[3px] text-[10px] sm:text-xs">
            How We Build
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mt-3 mb-4">
            Our 6-Stop Manufacturing Process
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Scroll through the complete Lemis Electronics production journey — from raw material auditing to final burn-in testing.
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Center Line Background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2 rounded-full" />
          
          {/* Animated Growing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-amber-400 to-amber-600 -translate-x-1/2 rounded-full transform origin-top"
          />

          <div className="space-y-12 sm:space-y-24 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center w-full">
                
                {/* Node Circle */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute left-4 md:left-1/2 w-12 h-12 bg-slate-900 border-4 border-slate-950 shadow-[0_0_0_2px_rgba(245,158,11,0.5)] rounded-full -translate-x-1/2 flex items-center justify-center text-amber-500 z-10 font-bold text-sm font-heading"
                >
                  {step.id}
                </motion.div>

                {/* Content Card Wrapper */}
                <div className={`w-full md:w-1/2 pl-16 pr-4 md:px-12 ${step.align === "left" ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto md:text-left"}`}>
                  <motion.div 
                    initial={{ opacity: 0, x: step.align === "left" ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden shadow-xl hover:border-amber-500/30 transition-colors group"
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <Image 
                        src={step.image} 
                        alt={step.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20">
                        {step.icon}
                      </div>
                    </div>
                    
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-heading mb-3">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2.5">
                        {step.specs.map((spec, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                            <span className="text-xs sm:text-sm text-slate-300 font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
