"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const STORY_STEPS = [
  {
    title: "Engineered for Extremes",
    description: "Industrial grade housings built to withstand extreme temperatures, dust, and moisture.",
  },
  {
    title: "Precision Optics",
    description: "Advanced lenses and reflectors ensure maximum lux delivery exactly where it's needed.",
  },
  {
    title: "Intelligent Drivers",
    description: "Surge-protected, high-efficiency drivers that guarantee 50,000+ hours of flawless operation.",
  }
];

export default function ScrollStorytellingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !canvasContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the entire section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // 3 screens of scrolling
          pin: true,
          scrub: 1, // Smooth scrubbing
        }
      });

      // Animate the Image container (e.g., move it from right to left, scale it)
      tl.fromTo(canvasContainerRef.current, 
        { scale: 1 }, 
        { scale: 1.1, duration: 1 }, 
        0
      );

      // Animate text steps fading in and out
      textRefs.current.forEach((textRef, index) => {
        if (!textRef) return;
        
        // Each text appears at a specific segment of the timeline
        const startTime = index * 0.33;
        const duration = 0.25;
        
        tl.fromTo(textRef, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: duration },
          startTime
        );
        
        // Fade out if it's not the last one
        if (index < textRefs.current.length - 1) {
          tl.to(textRef, 
            { opacity: 0, y: -50, duration: duration },
            startTime + duration + 0.05
          );
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen bg-slate-50 overflow-hidden text-slate-900 flex items-center"
    >
      {/* Image Background Layer */}
      <div 
        ref={canvasContainerRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <Image
          src="/products/story-generated.jpg"
          alt="Advanced LED Technology"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent" />
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full lg:w-1/2 relative h-full flex items-center">
          
          {STORY_STEPS.map((step, idx) => (
            <div 
              key={idx}
              ref={(el) => { textRefs.current[idx] = el }}
              className="absolute left-0 right-0"
              style={{ opacity: 0 }}
            >
              <div className="text-amber-500 font-bold tracking-[4px] uppercase text-xs mb-4">
                0{idx + 1} — The Lemis Advantage
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight font-heading">
                {step.title}
              </h2>
              <p className="text-slate-600 text-lg sm:text-xl max-w-md leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
}
