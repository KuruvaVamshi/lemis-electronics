"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, ChevronRight, Zap } from "lucide-react";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ProductCategoriesSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="categories" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Full Manufacturing Portfolio
            </span>
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
        </div>

        {/* 12 Categories Grid (Swiggy/Zomato inspired mobile grid) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat) => (
            <div
              key={cat.slug}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-card-hover"
            >
              <div>
                {/* Image Container with subtle zoom */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
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

              {/* Actions Footer (Swiggy style "+ Get Quote" button) */}
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
