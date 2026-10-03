"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Sun, Layers, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import SpotlightCard from "@/components/ui/SpotlightCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HIGHLIGHTS = [
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Engineered LED fixtures designed for industrial plants, commercial buildings, architectural interiors, and outdoor floodlighting with dependable thermal design.",
    points: ["Heavy-duty heatsinks", "High lumen efficiency", "Surge protected drivers"],
    accent: "from-amber-500 to-yellow-400",
    clipOrigin: "polygon(0 0, 0 0, 0 100%, 0 100%)",
    clipFinal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    icon: Sun,
    title: "Solar Lighting",
    description: "Independent off-grid solar street and perimeter illumination featuring high-grade monocrystalline PV panels and lithium battery technology.",
    points: ["Zero electricity bills", "Dusk-to-dawn sensors", "Standalone pole systems"],
    accent: "from-emerald-500 to-teal-400",
    clipOrigin: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    clipFinal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    icon: Layers,
    title: "Bulk & Project Orders",
    description: "Structured to fulfill volume quantity demands for electrical contractors, infrastructure builders, residential societies, and regional distributors.",
    points: ["Project BOQ pricing", "Coordinated dispatch", "Consistent color binning"],
    accent: "from-sky-500 to-blue-500",
    clipOrigin: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
    clipFinal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
  {
    icon: Wrench,
    title: "Custom Requirements",
    description: "Technical capability to configure custom wattages, specialized geometric profile lengths, and housing options to meet specific architectural requirements.",
    points: ["Custom profile cuts", "Specific CCT choices", "Application consultation"],
    accent: "from-violet-500 to-purple-500",
    clipOrigin: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    clipFinal: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
];

/**
 * Curtain-Lift Reveal: Each card slides open from a different edge via clip-path
 * transition (hardware-accelerated). Icons bounce in with elastic easing.
 * A horizontal light-sweep beam glides across the section on scroll via GSAP.
 */
export default function TrustIntroSection() {
  const { openQuoteModal } = useQuoteModal();
  const sectionRef = useRef<HTMLElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: "-15%" });

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !beamRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Horizontal light beam that sweeps across the section
      gsap.fromTo(
        beamRef.current,
        { x: "-100%", opacity: 0 },
        {
          x: "200%",
          opacity: 1,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card entrance variants — curtain lift with clip-path
  const cardVariants = (item: typeof HIGHLIGHTS[0], idx: number) => ({
    hidden: {
      clipPath: item.clipOrigin,
      opacity: 0,
    },
    visible: {
      clipPath: item.clipFinal,
      opacity: 1,
      transition: {
        clipPath: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 },
        opacity: { duration: 0.4, delay: idx * 0.15 },
      },
    },
  });

  // Icon elastic bounce
  const iconVariants = (idx: number) => ({
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 12,
        delay: 0.3 + idx * 0.15,
      },
    },
  });

  // Check points stagger
  const pointVariants = (idx: number, pIdx: number) => ({
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5 + idx * 0.15 + pIdx * 0.08,
      },
    },
  });

  return (
    <section ref={sectionRef} className="py-14 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-amber-50/50 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Scroll-driven light sweep beam — signature effect for this section */}
      <div
        ref={beamRef}
        className="absolute top-1/2 -translate-y-1/2 w-[200px] h-[600px] pointer-events-none z-0"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.04), rgba(245,158,11,0.08), rgba(245,158,11,0.04), transparent)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading — text split reveal */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10, scaleX: 0.7 }}
            animate={isInView ? { opacity: 1, y: 0, scaleX: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block text-[10px] font-bold uppercase tracking-[3px] text-amber-700"
          >
            Manufacturing & Supply Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight"
          >
            Lighting Solutions Built for Real-World Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base text-slate-500 leading-relaxed"
          >
            Lemis Electronics is an Indian manufacturer and supplier focused on delivering rugged, high-performance LED and solar lighting fixtures for contractors, engineers, and institutional buyers.
          </motion.p>
        </motion.div>

        {/* 4 Compact Highlights Grid — Curtain-Lift Clip-Path Reveal */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-8%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants(item, idx)}
              >
                <SpotlightCard className="h-full p-5 sm:p-6 hover:border-amber-300 hover:-translate-y-1.5 group">
                  <div>
                    <motion.div
                      variants={iconVariants(idx)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center text-white mb-4 shadow-sm`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {item.points.map((pt, pIdx) => (
                      <motion.div
                        key={pt}
                        variants={pointVariants(idx, pIdx)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs font-medium text-slate-600"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pt}</span>
                      </motion.div>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mini Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="text-sm text-slate-700">
            <span className="font-bold text-slate-900">Have a specific project BOQ?</span> Share your requirement list for instant evaluation and commercial discounts.
          </div>
          <button
            onClick={() => openQuoteModal("Project BOQ Enquiry")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm whitespace-nowrap transition-colors shadow-sm active:scale-[0.97] group"
          >
            <span>Submit BOQ</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [style*="clip-path"] {
            clip-path: none !important;
          }
        }
      `}</style>
    </section>
  );
}
