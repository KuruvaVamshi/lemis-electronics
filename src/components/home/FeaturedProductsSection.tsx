"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, ExternalLink, Sparkles, CheckCircle2, Sliders } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import SpotlightCard from "@/components/ui/SpotlightCard";

function ProductCardItem({ product }: { product: Product }) {
  const { openQuoteModal } = useQuoteModal();

  // Extract wattages or provide common presets
  const availableWattages = React.useMemo(() => {
    const raw = product.specifications["Available Wattages"] || "";
    const matches = raw.match(/\d+W/g);
    return matches && matches.length > 0 ? matches.slice(0, 4) : ["50W", "100W", "150W", "200W"];
  }, [product]);

  const [selectedWattage, setSelectedWattage] = useState<string>(availableWattages[1] || availableWattages[0]);

  return (
    <SpotlightCard className="h-full group hover:border-amber-400">
      <div>
        {/* Image Container with subtle zoom */}
        <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-60" />

          {/* Swiggy / Zomato style Made in India badge */}
          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-800">Made in India</span>
          </div>

          {product.badge && (
            <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-tight shadow-sm">
              {product.badge}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-4 sm:p-5">
          <span className="text-[10px] sm:text-[11px] font-bold text-sky-700 tracking-wide uppercase">
            {product.category}
          </span>
          
          <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading mt-0.5 group-hover:text-amber-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Interactive Wattage Selector Chips */}
          <div className="mt-2.5 mb-2">
            <div className="flex items-center justify-between text-[11px] mb-1">
              <span className="text-slate-500 font-medium">Select Wattage:</span>
              <span className="font-extrabold text-amber-700">{selectedWattage}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {availableWattages.map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setSelectedWattage(w)}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all ${
                    selectedWattage === w
                      ? "bg-slate-900 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-2 mb-2 flex items-center justify-between">
            <span className="text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded">
              {product.priceLabel}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              Project Pricing
            </span>
          </div>

          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
            {product.shortDesc}
          </p>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-600">
            <span className="font-semibold text-slate-700">Applications: </span>
            <span>{product.applications.slice(0, 2).join(", ")}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 pt-0 grid grid-cols-2 gap-2 border-t border-slate-100 mt-auto">
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
        >
          <span>Specs</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </Link>

        <button
          onClick={() => openQuoteModal(`${selectedWattage} ${product.name}`)}
          className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-all shadow-sm active:scale-95"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get Quote</span>
        </button>
      </div>
    </SpotlightCard>
  );
}

export default function FeaturedProductsSection() {
  const { openQuoteModal } = useQuoteModal();
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 8);

  return (
    <section id="featured-products" className="py-12 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Flagship Fixtures
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mt-1.5">
              Featured Lighting Luminaires
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Engineered for project contractors, industrial plants, and commercial buildings requiring certified build quality.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal("Bulk Project Inquiry")}
            className="self-start sm:self-auto px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs transition-colors shadow-sm"
          >
            Request Bulk Pricing
          </button>
        </div>

        {/* Products Grid with Spotlight Lighting Effect & Interactive Wattage Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featured.map((product) => (
            <ProductCardItem key={product.id} product={product} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            * Specifications and photometric reports available on request for electrical consultants and architects.
          </p>
        </div>

      </div>
    </section>
  );
}
