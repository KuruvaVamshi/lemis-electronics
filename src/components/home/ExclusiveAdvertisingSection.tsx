"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXCLUSIVE_PRODUCTS = [
  {
    id: "arch-flood",
    title: "Architectural Floodlight",
    category: "Facade Lighting",
    image: "/advertising/architectural_floodlight.jpg",
    desc: "Precision optics for building facades and monuments.",
  },
  {
    id: "cobra-street",
    title: "Cobra Head Street Light",
    category: "Roadway",
    image: "/advertising/cobra_head_street_light.jpg",
    desc: "Aerodynamic high-efficiency municipal lighting.",
  },
  {
    id: "victorian-promenade",
    title: "Victorian Promenade Lamp",
    category: "Heritage Collection",
    image: "/advertising/victorian-dual-promenade-lamp.jpg",
    desc: "Classic dual-arm aesthetic with modern LED core.",
  },
  {
    id: "vintage-bollard",
    title: "Hexagonal Garden Bollard",
    category: "Landscape",
    image: "/advertising/vintage-hexagonal-garden-bollard.jpg",
    desc: "Pathway illumination with vintage styling.",
  },
  {
    id: "heritage-brass",
    title: "Brass Estate Lamp",
    category: "Heritage Collection",
    image: "/advertising/heritage-brass-estate-lamp.jpg",
    desc: "Premium brass finish for luxury estates and resorts.",
  },
  {
    id: "dome-post",
    title: "Dome Post Top",
    category: "Urban Lighting",
    image: "/advertising/dome_post_top_light.jpg",
    desc: "Sleek, glare-free lighting for parks and walkways.",
  },
];

export default function ExclusiveAdvertisingSection() {
  const { openQuoteModal } = useQuoteModal();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current || !scrollContainerRef.current) return;

    const sections = gsap.utils.toArray(".horizontal-item");
    
    // Create the horizontal scroll animation
    const ctx = gsap.context(() => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing effect
          snap: 1 / (sections.length - 1), // Optional snap to panels
          end: () => "+=" + (scrollContainerRef.current?.offsetWidth || 0),
        },
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div className="relative w-full">
      <section ref={sectionRef} className="h-screen bg-slate-950 text-white relative overflow-hidden flex flex-col justify-center">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="px-4 sm:px-6 lg:px-12 mb-8 relative z-10 w-full shrink-0">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">
            Exclusive Collections
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading mt-2">
            Keep Scrolling to Explore
          </h2>
        </div>

        {/* GSAP Horizontal Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="relative z-10 flex flex-nowrap w-[400vw] lg:w-[250vw] h-[50vh] sm:h-[60vh] pl-4 sm:pl-12"
        >
          {EXCLUSIVE_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="horizontal-item relative w-[85vw] sm:w-[60vw] lg:w-[40vw] h-full shrink-0 px-2 sm:px-4 flex items-center justify-center"
            >
              <div
                onClick={() => openQuoteModal(product.title)}
                className="group relative w-full h-full rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-slate-800 shadow-2xl"
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    priority={true}
                    unoptimized={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 z-10" />

                {/* Content Box */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out z-20">
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-500 font-bold mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black font-heading text-white mb-2 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    {product.desc}
                  </p>
                  
                  {/* Action Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
