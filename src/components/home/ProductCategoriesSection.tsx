"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ChevronRight, Zap } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import SpotlightCard from "@/components/ui/SpotlightCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ProductCategoriesSection — "Masonry Cascade" animation.
 * Cards enter with a waterfall-style staggered cascade where
 * each column drops in with different timing, creating a natural
 * "rainfall" settle pattern. Images have a scale-reveal from center.
 */
export default function ProductCategoriesSection() {
  const { openQuoteModal } = useQuoteModal();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Masonry cascade: cards in different columns get different delays
      // Column pattern for 4-column grid: 0,1,2,3 then repeat
      cardRefs.current.forEach((card, idx) => {
        if (!card) return;
        const col = idx % 4;
        // Waterfall: each column has a base delay offset to create diagonal cascade
        const colDelay = [0, 0.08, 0.16, 0.24][col];
        const rowDelay = Math.floor(idx / 4) * 0.12;
        
        gsap.fromTo(
          card,
          { 
            opacity: 0, 
            y: 80 + col * 20, // Different heights per column
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
            },
            delay: colDelay + rowDelay,
          }
        );

        // Image scale-reveal: starts zoomed in and settles
        const img = card.querySelector("[data-cat-img]");
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.3, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 92%",
              },
              delay: colDelay + rowDelay + 0.15,
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="categories" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header — horizontal line expand + text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10"
        >
          <div>
            <motion.span
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full origin-left"
            >
              Full Manufacturing Portfolio
            </motion.span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mt-1.5">
              Our Lighting Solutions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Manufactured with high-grade components for heavy-duty commercial, industrial and architectural lighting projects.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors self-start sm:self-auto"
          >
            <span>View Full Catalog</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 12 Categories Grid — Masonry Cascade */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.slug}
              ref={(el) => { cardRefs.current[idx] = el; }}
              className="h-full"
              style={{ opacity: 0 }}
            >
              <SpotlightCard className="group h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 p-0 overflow-hidden">
                <div>
                {/* Image Container with scale-reveal */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <div data-cat-img className="absolute inset-0" style={{ opacity: 0 }}>
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                      className="object-cover group-hover:scale-[1.08] transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Range Tag */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-800 shadow-sm">
                    {cat.productCount}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-4">
                  <h3 className="text-xs sm:text-base font-bold text-slate-900 font-heading group-hover:text-amber-700 transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  
                  <div className="mt-1 mb-1.5">
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block">
                      Contact for Price
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed hidden sm:block">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-3 pt-0 sm:p-4 sm:pt-0 grid grid-cols-1 sm:grid-cols-2 gap-1.5 border-t border-slate-100 mt-auto">
                <Link
                  href={`/products#${cat.slug}`}
                  className="hidden sm:inline-flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </Link>

                <button
                  onClick={() => openQuoteModal(cat.name)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-colors shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Get Quote</span>
                </button>
              </div>
            </SpotlightCard>
          </div>
          ))}
        </div>

      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [style*="opacity: 0"] {
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
