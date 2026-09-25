"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, MessageSquare, ExternalLink, ArrowRight, ShieldCheck, Zap, MessageCircle } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

export default function ProductsPage() {
  const { openQuoteModal } = useQuoteModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCat =
      selectedCategory === "all" || product.categorySlug === selectedCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            Manufacturing Catalog
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Commercial & Industrial Lighting Range
          </h1>
          <p className="text-xs sm:text-base text-slate-600">
            Browse our complete manufactured line of LED floodlights, solar luminaires, high bay lights, downlights, and architectural profiles.
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href={COMPANY_INFO.whatsappCatalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Open Official WhatsApp Catalog</span>
            </a>
          </div>
        </div>

        {/* Filter & Search Bar (Swiggy / Zomato style sticky or top bar) */}
        <div className="mb-8 p-3 sm:p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search fixtures, wattages..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          {/* Category Pills (horizontally scrollable) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === "all"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All ({PRODUCTS.length})
            </button>
            {PRODUCT_CATEGORIES.slice(0, 6).map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.slug
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-card-hover"
            >
              <div>
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Swiggy veg/non-veg style Made in India badge */}
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-md border border-slate-200 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-slate-800">Made in India</span>
                  </div>

                  {product.badge && (
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-tight shadow-sm">
                      {product.badge}
                    </div>
                  )}
                </div>

                <div className="p-4 sm:p-5">
                  <span className="text-[10px] sm:text-[11px] font-bold text-sky-700 tracking-wide uppercase">
                    {product.category}
                  </span>
                  
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading mt-0.5 group-hover:text-amber-700 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <div className="mt-1 mb-2">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-200 px-2 py-0.5 rounded">
                      {product.priceLabel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
                    {product.shortDesc}
                  </p>

                  <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                    <span>Specifications tailored to project BOQ.</span>
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
                  onClick={() => openQuoteModal(product.name)}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-all shadow-sm active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Get Quote</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Project Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 text-center space-y-3 shadow-sm">
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 font-heading">
            Need a Specific Fixture Not Listed Here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Lemis Electronics offers custom OEM and project fabrication for specialized wattages, non-standard housings, and custom profile lengths.
          </p>
          <button
            onClick={() => openQuoteModal("Custom Lighting Requirement")}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            Submit Custom Specification
          </button>
        </div>

      </div>
    </div>
  );
}
