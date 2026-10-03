"use client";

import React, { useRef, useState, useLayoutEffect, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Zap, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface Project {
  id: number;
  title: string;
  location: string;
  type: string;
  year: string;
  fixtures: string;
  image: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Hyderabad Industrial Park",
    location: "Telangana, India",
    type: "Industrial High Bay",
    year: "2025",
    fixtures: "120+ LED High Bay 200W",
    image: "/applications/factories.webp",
    description: "Complete high bay lighting retrofit for a 50,000 sq.ft manufacturing facility, delivering 500+ lux at work plane height with 65% energy savings.",
  },
  {
    id: 2,
    title: "Residential Township Phase III",
    location: "Visakhapatnam, AP",
    type: "Street & Perimeter Lighting",
    year: "2025",
    fixtures: "85 Solar Street Lights 40W",
    image: "/applications/apartments.webp",
    description: "Off-grid solar LED street lighting across a 200-unit gated community covering internal roads, garden pathways, and perimeter security zones.",
  },
  {
    id: 3,
    title: "Commercial Mall Interior",
    location: "Bengaluru, Karnataka",
    type: "Downlights & Profiles",
    year: "2024",
    fixtures: "350+ Rimless Downlights",
    image: "/applications/commercial.webp",
    description: "High-CRI downlight and aluminium profile installation across 3 floors of retail space, delivering glare-free, uniform illumination.",
  },
  {
    id: 4,
    title: "Highway Connector Stretch",
    location: "Maharashtra, India",
    type: "LED Street Lighting",
    year: "2024",
    fixtures: "200+ LED Street Lights 150W",
    image: "/applications/roads.webp",
    description: "Municipal LED street light deployment over 8km of connecting road, replacing conventional sodium vapour lamps with smart LED fixtures.",
  },
  {
    id: 5,
    title: "Premium Villa Interiors",
    location: "Hyderabad, Telangana",
    type: "Architectural Profiles",
    year: "2025",
    fixtures: "40+ Geometric Profile Lights",
    image: "/applications/residential.webp",
    description: "Custom architectural profile light installation for a luxury villa, including cove lighting, wall-wash profiles, and recessed geometric designs.",
  },
];

/**
 * InteractiveProjectsSection — "Cinematic Split" animation.
 * Image transitions use a vertical wipe with scale, while text
 * content slides with depth parallax. Progress dots use a
 * fluid width animation. The section entrance uses GSAP with
 * a perspective tilt-in effect.
 */
export default function InteractiveProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { openQuoteModal } = useQuoteModal();
  const autoPlayRef = useRef<ReturnType<typeof setInterval>>();

  const activeProject = PROJECTS[activeIndex];

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setActiveIndex(idx);
  }, []);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % PROJECTS.length;
    goTo(next, 1);
  }, [activeIndex, goTo]);

  const goPrev = useCallback(() => {
    const prev = (activeIndex - 1 + PROJECTS.length) % PROJECTS.length;
    goTo(prev, -1);
  }, [activeIndex, goTo]);

  // Auto-play carousel
  React.useEffect(() => {
    autoPlayRef.current = setInterval(goNext, 5000);
    return () => clearInterval(autoPlayRef.current);
  }, [goNext]);

  // Pause auto-play on hover
  const pauseAutoPlay = () => clearInterval(autoPlayRef.current);
  const resumeAutoPlay = () => {
    autoPlayRef.current = setInterval(goNext, 5000);
  };

  // Scroll-triggered entrance with perspective tilt
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion) {
        gsap.from(sectionRef.current, {
          opacity: 0,
          y: 60,
          rotateX: 4,
          transformOrigin: "center bottom",
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Image transition: vertical wipe with scale
  const imageVariants = {
    enter: (dir: number) => ({
      clipPath: dir > 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)",
      scale: 1.1,
      opacity: 0,
    }),
    center: {
      clipPath: "inset(0 0 0 0)",
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      clipPath: dir > 0 ? "inset(0 0 100% 0)" : "inset(100% 0 0 0)",
      scale: 0.95,
      opacity: 0,
    }),
  };

  // Text transition: depth parallax slide
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      filter: "blur(8px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="projects-showcase"
      className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
      style={{ perspective: "1000px" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(90deg, #94a3b8 1px, transparent 1px), linear-gradient(#94a3b8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
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
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Our Work
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mt-2">
              Featured Project Installations
            </h2>
            <p className="text-sm text-slate-500 mt-1 max-w-lg">
              See how Lemis lighting transforms real-world spaces across India.
            </p>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 shadow-sm transition-all active:scale-95"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Progress dots — fluid width transition */}
            <div className="flex items-center gap-1.5">
              {PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx, idx > activeIndex ? 1 : -1)}
                  className="rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    width: idx === activeIndex ? "32px" : "8px",
                    height: "8px",
                    backgroundColor: idx === activeIndex ? "#f59e0b" : "#cbd5e1",
                  }}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 shadow-sm transition-all active:scale-95"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Project Showcase — Cinematic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[420px]">
          {/* Left: Image — Vertical Wipe */}
          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden bg-slate-200 shadow-xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={activeProject.id}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                {/* Bottom gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Floating project counter */}
            <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg">
              <span className="text-xs font-black text-slate-900">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-xs text-slate-400 mx-1">/</span>
              <span className="text-xs text-slate-400">
                {String(PROJECTS.length).padStart(2, "0")}
              </span>
            </div>

            {/* Project type badge */}
            <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-amber-500 shadow-lg">
              <span className="text-[11px] font-black text-slate-950 uppercase tracking-wider">
                {activeProject.type}
              </span>
            </div>
          </div>

          {/* Right: Details — Depth Parallax Slide */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeProject.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mb-3">
                {activeProject.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>{activeProject.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>{activeProject.year}</span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 max-w-lg">
                {activeProject.description}
              </p>

              {/* Fixtures used — animated chip */}
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 mb-8 p-3 rounded-xl bg-amber-50 border border-amber-200/60 max-w-md"
              >
                <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                <div>
                  <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">
                    Fixtures Deployed
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    {activeProject.fixtures}
                  </span>
                </div>
              </motion.div>

              {/* CTA */}
              <button
                onClick={() => openQuoteModal(`Project Like: ${activeProject.title}`)}
                className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm transition-all shadow-md hover:shadow-lg active:scale-95 group"
              >
                <span>Need Similar Lighting?</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
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
