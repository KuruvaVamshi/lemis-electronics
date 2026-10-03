"use client";

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Factory, Users, MapPin, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STATS = [
  {
    icon: Factory,
    value: 5,
    suffix: "+",
    label: "Years Manufacturing",
    accent: "from-red-500 to-amber-500",
    accentHex: "#f59e0b",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Contractors Served",
    accent: "from-amber-500 to-yellow-400",
    accentHex: "#eab308",
  },
  {
    icon: MapPin,
    value: 15,
    suffix: "+",
    label: "States Pan-India",
    accent: "from-emerald-400 to-teal-500",
    accentHex: "#14b8a6",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Made in India",
    accent: "from-sky-400 to-blue-500",
    accentHex: "#3b82f6",
  },
];

/**
 * StatsRibbon: "Light Sweep Meter" — Each stat card has a progress bar that
 * fills on scroll-scrub + a radiant glow that reveals behind each icon.
 * The numbers count up via the existing AnimatedCounter.
 * Signature animation: a horizontal light sweep travels across all 4 cards
 * sequentially as the user scrolls, creating a "power-on" sequence feel.
 */
export default function StatsRibbon() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const meterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Each card slides up with a rotating reveal
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateX: 15 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
            delay: idx * 0.12,
          }
        );
      });

      // Progress meter bars fill on scroll
      meterRefs.current.forEach((meter, idx) => {
        if (!meter) return;
        gsap.fromTo(
          meter,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: meter,
              start: "top 85%",
            },
            delay: 0.3 + idx * 0.15,
          }
        );
      });

      // Icon glow pulse on scroll entry
      glowRefs.current.forEach((glow, idx) => {
        if (!glow) return;
        gsap.fromTo(
          glow,
          { scale: 0, opacity: 0 },
          {
            scale: 1.5,
            opacity: 0.3,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: glow,
              start: "top 85%",
            },
            delay: 0.4 + idx * 0.15,
            onComplete: () => {
              // Settle down to resting glow
              gsap.to(glow, { scale: 1, opacity: 0.15, duration: 0.5, ease: "power2.inOut" });
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-14 lg:py-20 bg-white border-y border-slate-200 relative overflow-hidden" style={{ perspective: "1000px" }}>

      {/* Background ambient glow — subtle warm lighting feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-br from-amber-500/8 via-red-500/5 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[200px] bg-gradient-to-tr from-amber-500/6 to-transparent blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-amber-700">
            Our Track Record
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                ref={(el) => { cardRefs.current[idx] = el; }}
                className="relative text-center p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group"
                style={{ transformOrigin: "center bottom", willChange: "transform, opacity" }}
              >
                {/* Hover glow effect — radial gradient appears */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.accent} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                {/* Top progress meter bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden rounded-t-2xl">
                  <div
                    ref={(el) => { meterRefs.current[idx] = el; }}
                    className={`h-full bg-gradient-to-r ${stat.accent} origin-left`}
                    style={{ transform: "scaleX(0)" }}
                  />
                </div>

                {/* Icon with radiant glow behind it */}
                <div className="relative w-12 h-12 mx-auto mb-4">
                  {/* Glow ring */}
                  <div
                    ref={(el) => { glowRefs.current[idx] = el; }}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: `radial-gradient(circle, ${stat.accentHex}40, transparent 70%)`,
                      opacity: 0,
                      transform: "scale(0)",
                    }}
                  />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.accent} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}
                    style={{ background: `linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05))` }}
                  >
                    <Icon className="w-5 h-5 text-amber-600 group-hover:text-amber-700 transition-colors" />
                  </div>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight mb-1.5">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </h3>

                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [style*="scaleX"] {
            transform: scaleX(1) !important;
          }
        }
      `}</style>
    </section>
  );
}
