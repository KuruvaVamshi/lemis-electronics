"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Factory, Building2, Sun, Lightbulb, Zap, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const SERVICES = [
  {
    icon: Factory,
    title: "Industrial Lighting",
    subtitle: "Factories · Warehouses · Plants",
    description: "High-bay and floodlight solutions engineered for 24/7 industrial environments with IP65+ ratings and surge-protected drivers.",
    image: "/applications/factories.webp",
    color: "#f59e0b",
    stats: { lux: "500+", life: "50,000h", ip: "IP65" },
  },
  {
    icon: Building2,
    title: "Commercial Lighting",
    subtitle: "Offices · Malls · Hotels",
    description: "Energy-efficient downlights, profiles, and panel lights designed for glare-free comfort in corporate and retail spaces.",
    image: "/applications/commercial.webp",
    color: "#3b82f6",
    stats: { lux: "300+", life: "40,000h", ip: "IP40" },
  },
  {
    icon: Sun,
    title: "Solar Lighting",
    subtitle: "Streets · Farms · Campuses",
    description: "Off-grid solar street lights with monocrystalline panels, lithium batteries, and dusk-to-dawn automation.",
    image: "/applications/roads.webp",
    color: "#10b981",
    stats: { lux: "200+", life: "25,000h", ip: "IP66" },
  },
  {
    icon: Lightbulb,
    title: "Architectural Lighting",
    subtitle: "Residences · Showrooms · Interiors",
    description: "Rimless downlights, cove profiles, and geometric fixtures that blend seamlessly with modern interior design.",
    image: "/applications/residential.webp",
    color: "#8b5cf6",
    stats: { lux: "400+", life: "35,000h", ip: "IP20" },
  },
  {
    icon: Zap,
    title: "Project Solutions",
    subtitle: "BOQ · Bulk · Custom Specs",
    description: "End-to-end lighting supply for large-scale projects — from lighting plan consultation to coordinated multi-site delivery.",
    image: "/applications/apartments.webp",
    color: "#ef4444",
    stats: { lux: "Custom", life: "50,000h", ip: "Custom" },
  },
];

export default function HorizontalServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const { openQuoteModal } = useQuoteModal();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Calculate horizontal scroll distance
      const totalWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      // Pin the section and scrub the track horizontally
      gsap.to(track, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance * 1.2}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Heading parallax — move slower than the cards for depth
      if (headingRef.current) {
        gsap.to(headingRef.current, {
          x: -scrollDistance * 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollDistance * 1.2}`,
            scrub: 1,
          },
        });
      }

      // Parallax each card image (moves slower than card for depth)
      const cards = track.querySelectorAll("[data-service-card]");
      cards.forEach((card) => {
        const img = card.querySelector("[data-parallax-img]");
        if (img) {
          gsap.to(img, {
            x: -60,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${scrollDistance * 1.2}`,
              scrub: 1,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white overflow-hidden"
      id="services-showcase"
    >
      {/* Fixed left-side heading that stays while cards scroll past */}
      <div
        ref={headingRef}
        className="absolute top-0 left-0 z-20 h-full flex flex-col justify-center pl-6 sm:pl-10 lg:pl-16 pointer-events-none"
        style={{ width: "clamp(300px, 30vw, 420px)" }}
      >
        <span className="text-[10px] font-bold uppercase tracking-[4px] text-amber-700 mb-3">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight leading-[1.1]">
          Our<br />
          Lighting<br />
          Services
        </h2>
        <p className="text-sm text-slate-500 mt-4 max-w-xs leading-relaxed">
          Scroll to explore our full range of manufacturing and supply capabilities.
        </p>

        {/* Scroll indicator */}
        <div className="mt-8 flex items-center gap-3">
          <div className="w-12 h-[2px] bg-amber-500 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            Scroll →
          </span>
        </div>
      </div>

      {/* Gradient fade on left edge for depth */}
      <div className="absolute top-0 left-0 w-[clamp(320px,32vw,440px)] h-full bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />

      {/* Horizontal scrolling track */}
      <div
        ref={trackRef}
        className="absolute top-0 left-0 h-full flex items-center gap-8 px-[35vw]"
        style={{ willChange: "transform" }}
      >
        {SERVICES.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              data-service-card
              className="relative flex-shrink-0 w-[340px] sm:w-[420px] lg:w-[480px] h-[70vh] max-h-[560px] rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => openQuoteModal(`${service.title} Enquiry`)}
            >
              {/* Background Image with parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <div data-parallax-img className="absolute inset-[-60px] w-[calc(100%+120px)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

              {/* Top badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                  0{idx + 1}
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-white/60 font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-5 max-w-xs group-hover:text-white/70 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Spec chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {Object.entries(service.stats).map(([key, val]) => (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-sm text-white/80 border border-white/10"
                    >
                      <span className="text-white/50">{key}:</span> {val}
                    </span>
                  ))}
                </div>

                {/* CTA line */}
                <div className="flex items-center gap-2 text-xs font-bold text-white/60 group-hover:text-amber-400 transition-colors duration-300">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>

              {/* Hover border glow */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 0 0 transparent`,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [data-parallax-img] {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
