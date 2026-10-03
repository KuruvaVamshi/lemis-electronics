"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageSquareText, Lightbulb, FileSpreadsheet, Truck, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const STEPS = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    desc: "Share your lighting bill of quantities, project type, wattages, or application details via our website, WhatsApp, or phone.",
    icon: MessageSquareText,
    color: "#f59e0b",
  },
  {
    step: "02",
    title: "Get Recommendations",
    desc: "Our lighting team evaluates your area dimensions, lux requirements, and advises the most efficient fixtures for the job.",
    icon: Lightbulb,
    color: "#3b82f6",
  },
  {
    step: "03",
    title: "Receive Your Quotation",
    desc: "Get transparent, direct manufacturer commercial terms, technical specification sheets, and dispatch timelines.",
    icon: FileSpreadsheet,
    color: "#10b981",
  },
  {
    step: "04",
    title: "Place Your Order",
    desc: "Confirm your order for scheduled production, rigorous quality testing, and coordinated delivery to your site or warehouse.",
    icon: Truck,
    color: "#8b5cf6",
  },
];

export default function AnimatedProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { openQuoteModal } = useQuoteModal();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current!;
      const length = path.getTotalLength();

      // Set up the SVG path for drawing
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      // Draw path on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "bottom 40%",
          scrub: 1,
        },
      });

      // Animate the traveling dot along the path
      if (dotRef.current) {
        const motionPath = {
          path: path,
          align: path,
          alignOrigin: [0.5, 0.5],
        };

        gsap.to(dotRef.current, {
          motionPath,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 1,
          },
        });
      }

      // Stagger-reveal each card as scroll progresses
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });

      // Counter animation for step numbers
      numberRefs.current.forEach((el, idx) => {
        if (!el) return;

        gsap.fromTo(
          el,
          { scale: 0, rotation: -90 },
          {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #94a3b8 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center space-y-2.5 mb-16 sm:mb-20"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            How Project Enquiries Work
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            A transparent and fast procurement process designed specifically for contractors, engineers, and bulk buyers.
          </p>
        </motion.div>

        {/* Process Grid with SVG connecting line */}
        <div className="relative">
          {/* SVG connecting path — hidden on mobile, shown on desktop */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 hidden lg:block"
            viewBox="0 0 1200 400"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d="M 100 200 C 250 50, 350 350, 500 200 C 650 50, 750 350, 900 200 C 950 150, 1000 250, 1100 200"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
            />
            {/* Traveling dot */}
            <circle
              ref={dotRef}
              r="6"
              fill="#f59e0b"
              className="drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
            />
          </svg>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  ref={(el) => { cardRefs.current[idx] = el; }}
                  className="relative group"
                >
                  {/* Step number badge - animated */}
                  <div className="flex justify-center mb-6">
                    <span
                      ref={(el) => { numberRefs.current[idx] = el; }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white font-heading shadow-lg"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: `0 8px 24px ${item.color}30`,
                      }}
                    >
                      {item.step}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="relative p-6 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-amber-300 hover:bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}10`, border: `1px solid ${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 font-heading mb-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Animated bottom bar */}
                    <div className="mt-5 pt-4 border-t border-slate-200/80 flex items-center justify-center gap-1.5">
                      <div
                        className="w-0 group-hover:w-8 h-[3px] rounded-full transition-all duration-500"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[11px] font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                        Step {idx + 1} of 4
                      </span>
                      <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Connecting arrow between cards on mobile */}
                  {idx < STEPS.length - 1 && (
                    <div className="flex justify-center py-4 lg:hidden">
                      <ArrowRight className="w-5 h-5 text-amber-400 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => openQuoteModal("Step 1: Start Project Enquiry")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm transition-all shadow-md hover:shadow-lg active:scale-95 group"
          >
            <span>Start Step 01 — Tell Us Your Requirement</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          svg path, svg circle {
            stroke-dashoffset: 0 !important;
            stroke-dasharray: none !important;
          }
        }
      `}</style>
    </section>
  );
}
