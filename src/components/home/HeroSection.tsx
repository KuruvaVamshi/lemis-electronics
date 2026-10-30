"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Phone,
  Zap,
  ChevronRight,
  Sun,
  Moon,
  Factory,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/data/products";
import MagneticButton from "@/components/ui/MagneticButton";

/* ─── Hero Showcase Products with Verified HD Images ─── */
const HERO_SHOWCASE_PRODUCTS = [
  {
    id: "industrial",
    tabLabel: "Industrial High Bay & Flood",
    title: "Heavy-Duty Industrial LED Luminaires",
    subtitle: "High Bay, Floodlights & Bulkheads for factories, plants & warehouses.",
    image: "/advertising/architectural_floodlight.jpg",
    specs: "50W – 500W • IP66 Die-Cast • 140 lm/W",
    badge: "Industrial Grade",
    tagline: "Die-Cast Heat Dissipation",
  },
  {
    id: "solar",
    tabLabel: "Solar Highway & Street",
    title: "All-in-One Solar Street Lighting",
    subtitle: "Integrated LiFePO4 battery, mono solar panel & intelligent dusk-to-dawn sensors.",
    image: "/advertising/cobra_head_street_light.jpg",
    specs: "15W – 120W • 3 Days Autonomy • Auto-Dimming",
    badge: "Eco Solar",
    tagline: "Zero Electricity Bills",
  },
  {
    id: "architectural",
    tabLabel: "Architectural & Post-Top",
    title: "Architectural Post-Top & Facade Lighting",
    subtitle: "Luxury estate poles, landscape bollards and optical facade luminaires.",
    image: "/advertising/modern-lyre-architectural-post.jpg",
    specs: "Heritage & Modern • Anti-Glare Optics • 5-Yr Life",
    badge: "Architectural",
    tagline: "Premium Aesthetics",
  },
];

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal();
  const [activeLightingMode, setActiveLightingMode] = useState<"cool" | "warm">("cool");
  const [selectedProductIdx, setSelectedProductIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeProduct = HERO_SHOWCASE_PRODUCTS[selectedProductIdx];

  // Auto-cycle through the 3 hero showcase images smoothly every 6s unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setSelectedProductIdx((prev) => (prev + 1) % HERO_SHOWCASE_PRODUCTS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50/50 via-white to-slate-50/80 pt-6 pb-12 lg:pt-12 lg:pb-16 border-b border-slate-200">
      {/* ─── Ambient Lighting Radial Aura (Reactively shifts with CCT mode) ─── */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] blur-[120px] opacity-70 transition-all duration-700 z-0 ${
          activeLightingMode === "warm"
            ? "bg-gradient-to-b from-amber-300/40 via-amber-200/20 to-transparent"
            : "bg-gradient-to-b from-sky-200/40 via-amber-100/20 to-transparent"
        }`}
      />

      {/* Subtle Technical Pattern Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(203, 213, 225, 0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ═══════════════════════════════════════════════════
              LEFT COLUMN: HERO CONTENT & HIGH-CONVERSION VALUE
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Direct Factory Verified Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-600" />
              </span>
              <span>Direct Manufacturer • LED & Solar Lights</span>
              <span className="hidden sm:inline-block text-amber-400">•</span>
              <span className="hidden sm:inline-block text-slate-500 font-semibold lowercase">
                Hyderabad, India
              </span>
            </div>

            {/* Brand Title & Main Headline */}
            <div className="space-y-2">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-amber-600 font-heading">
                  LEMIS ELECTRONICS
                </span>
                <span className="w-8 h-[1px] bg-amber-400" />
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-[3.75rem] font-black text-slate-900 font-heading tracking-tight leading-[1.08]">
                Powering Spaces with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                  Precision LED
                </span>{" "}
                & Solar Lighting
              </h1>
            </div>

            {/* Subheading & Manufacturing Strengths */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Direct OEM manufacturing for industrial plants, infrastructure roads, commercial
              campuses, and residential developments. Heavy-duty die-cast aluminium housings,
              high-lumen efficiency (140+ lm/W), and direct factory pricing.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-left">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <Factory className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">Direct Factory Rates</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <Award className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">High Lumen (140+ lm/W)</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <Layers className="w-4 h-4 text-amber-600 shrink-0" />
                <span className="text-xs font-bold text-slate-800">IP66 Heavy Die-Cast</span>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary: Get a Quote with Magnetic Spring */}
              <MagneticButton
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm sm:text-base shadow-md shadow-amber-500/20 active:scale-95 group gap-2 cta-shine"
              >
                <span>Request Factory Quotation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>

              {/* Secondary: WhatsApp */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20enquiry%20regarding%20bulk%20LED%20lighting%20supply.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-sm transition-all duration-200 active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Supply</span>
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
                Direct OEM Manufacturer
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
          </motion.div>

          {/* ═══════════════════════════════════════════════════
              RIGHT COLUMN: INTERACTIVE PRODUCT SHOWCASE & CCT SIMULATOR
          ═══════════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Product Category Selector Tabs */}
            <div className="flex items-center gap-1 mb-2 bg-slate-100 p-1 rounded-xl border border-slate-200 overflow-x-auto no-scrollbar">
              {HERO_SHOWCASE_PRODUCTS.map((prod, idx) => (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProductIdx(idx)}
                  className={`flex-1 py-1.5 px-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedProductIdx === idx
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {prod.tabLabel.split(" ")[0]} Light
                </button>
              ))}
            </div>

            {/* Showcase Card Container */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white group">
              
              {/* Interactive Lighting Spectrum Mode Switcher (6500K Cool vs 3000K Warm) */}
              <div className="absolute top-3 right-3 z-30 flex items-center gap-1 bg-white/95 backdrop-blur-md p-1 rounded-xl border border-slate-200 shadow-md">
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
                      ? "bg-amber-500 text-slate-950 shadow-xs font-black"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  title="Simulate 3000K Warm Golden Ambience"
                >
                  <Moon className="w-3 h-3 text-amber-900" />
                  <span>3000K Warm</span>
                </button>
              </div>

              {/* Tag Badge on Image Top-Left */}
              <div className="absolute top-3 left-3 z-30 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-md">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>{activeProduct.badge}</span>
              </div>

              {/* Product Visual Container with Smooth Transition */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-slate-950">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProduct.id}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.title}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Simulated CCT Color Wash Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 pointer-events-none mix-blend-color-dodge ${
                    activeLightingMode === "warm"
                      ? "bg-gradient-to-t from-amber-500/35 via-amber-400/15 to-transparent opacity-85"
                      : "bg-gradient-to-t from-sky-400/30 via-cyan-300/10 to-transparent opacity-70"
                  }`}
                />

                {/* Ambient vignette shadow for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                {/* Overlay Text Inside Image Bottom */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                      {activeProduct.tagline}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      {activeProduct.specs}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium">
                    {selectedProductIdx + 1} / {HERO_SHOWCASE_PRODUCTS.length}
                  </span>
                </div>
              </div>

              {/* Bottom Card Footer Details */}
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900 text-xs sm:text-sm font-bold leading-tight">
                    {activeProduct.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                    {activeProduct.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => openQuoteModal()}
                  className="shrink-0 px-3.5 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-colors shadow-xs active:scale-95 ml-3"
                >
                  Quick Quote
                </button>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ═══════════════════════════════════════════════════
            BOTTOM SECTION: QUICK CATEGORY RAIL FOR FAST BROWSING
        ═══════════════════════════════════════════════════ */}
        <div className="mt-10 pt-6 border-t border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Explore Product Categories</span>
            </h2>
            <Link
              href="/products"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-0.5"
            >
              <span>View All Products</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Horizontally scrollable category pills */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar scroll-smooth">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products#${cat.slug}`}
                className="flex-shrink-0 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-xs transition-all group"
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

        {/* Scroll Cue Indicator */}
        <div className="hidden lg:flex flex-col items-center gap-2 mt-8">
          <div className="relative w-[2px] h-7 bg-slate-300 overflow-hidden rounded-full">
            <div className="absolute top-0 left-0 w-full h-full bg-amber-500 animate-[scrollCue_2s_cubic-bezier(0.65,0,0.35,1)_infinite]" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[3px] text-slate-400">
            Scroll to Explore
          </span>
        </div>

      </div>
    </section>
  );
}
