"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, MessageCircle, Phone, Sparkles, Zap, ChevronRight, Sun, Moon } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/data/products";
import MagneticButton from "@/components/ui/MagneticButton";

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();
  const [activeLightingMode, setActiveLightingMode] = useState<"cool" | "warm">("cool");

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-white to-slate-50/80 pt-6 pb-12 lg:pt-14 lg:pb-20 border-b border-slate-200">
      
      {/* Subtle Warm Lighting Glow behind header — reactively shifts with Lighting Mode */}
      <div 
        aria-hidden="true" 
        className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] blur-3xl opacity-75 transition-all duration-700 ${
          activeLightingMode === "warm"
            ? "bg-gradient-to-b from-amber-300/50 via-amber-200/30 to-transparent"
            : "bg-gradient-to-b from-sky-200/50 via-amber-100/30 to-transparent"
        }`} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            {/* Manufacturing Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/80 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Direct Manufacturer • LED & Solar Lights</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 font-heading tracking-tight leading-[1.12]">
              Powering Spaces with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                Reliable LED & Solar
              </span>{" "}
              Lighting
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Manufacturer of LED and solar lighting solutions for residential, commercial, industrial and large-scale projects. Heavy-duty die-cast housings, high lumen efficiency, and dependable performance.
            </p>

            {/* Quick Action CTAs with MagneticButton on Desktop */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              {/* Primary: Get a Quote (Magnetic Spring on Desktop fine-pointer) */}
              <MagneticButton
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/25 active:scale-95 group gap-2"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              {/* Secondary: WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20enquiry%20regarding%20LED%20lighting%20supply.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-md transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              {/* Tertiary: Call */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Factory: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Direct Manufacturer
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Bulk Supply to Contractors
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Made in India
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Product Banner with Interactive Lighting Mode Switcher */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              
              {/* Interactive Lighting Spectrum Mode Switcher */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-slate-200 shadow-md">
                <button
                  type="button"
                  onClick={() => setActiveLightingMode("cool")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all ${
                    activeLightingMode === "cool"
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Simulate 6500K Industrial Cool White"
                >
                  <Sun className="w-3 h-3 text-sky-400" />
                  <span>6500K Cool</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveLightingMode("warm")}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all ${
                    activeLightingMode === "warm"
                      ? "bg-amber-500 text-slate-950 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Simulate 3000K Warm Golden Ambience"
                >
                  <Moon className="w-3 h-3 text-amber-900" />
                  <span>3000K Warm</span>
                </button>
              </div>

              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/products/hero-lighting-banner.jpg"
                  alt="Lemis Electronics Industrial LED and Solar Lights"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Simulated Lighting Color Wash Overlay based on active mode */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                    activeLightingMode === "warm"
                      ? "bg-gradient-to-t from-amber-950/60 via-amber-500/10 to-transparent opacity-70"
                      : "bg-gradient-to-t from-slate-950/70 via-sky-500/10 to-transparent opacity-60"
                  }`} 
                />
              </div>

              {/* Floating Bottom Card on Image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 block">
                    Industrial & Commercial Range
                  </span>
                  <p className="text-slate-900 text-xs sm:text-sm font-bold">
                    Flood • High Bay • Solar & Street Lights
                  </p>
                </div>
                <button
                  onClick={() => openQuoteModal()}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-colors shadow-sm"
                >
                  Quick Quote
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* SWIGGY / ZOMATO STYLE: Quick Category Rail for Mobile & Fast Browsing */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Explore Categories</span>
            </h2>
            <Link
              href="/products"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-0.5"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Horizontally scrollable category pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products#${cat.slug}`}
                className="flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-sm transition-all group"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                  <Image src={cat.image} alt={cat.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <span className="text-xs font-bold text-slate-800 group-hover:text-amber-700 transition-colors block whitespace-nowrap">
                    {cat.name}
                  </span>
                  <span className="text-[10px] text-slate-500 block">
                    {cat.productCount}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
