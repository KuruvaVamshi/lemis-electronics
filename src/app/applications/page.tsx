"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ApplicationsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="py-10 lg:py-16 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block">
            Application-Specific Engineering
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Lighting Solutions for Every Industry
          </h1>
          <p className="text-xs sm:text-base text-slate-600">
            Tailored luminaires, optical distributions, and thermal ratings engineered to match specific application demands.
          </p>
        </div>

        {/* Detailed Application Sections */}
        <div className="space-y-8 sm:space-y-12">
          {APPLICATIONS.map((app, idx) => (
            <div
              key={app.id}
              className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              <div className={`space-y-4 ${idx % 2 === 1 ? "lg:col-span-6 lg:order-2" : "lg:col-span-6 lg:order-1"}`}>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Sector {idx + 1}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 font-heading">
                  {app.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {app.description}
                </p>

                <div className="space-y-2 pt-1">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Recommended Fixtures & Assemblies:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {app.recommendedLights.map((l) => (
                      <span
                        key={l}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => openQuoteModal(`${app.title} Lighting Inquiry`)}
                    className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-sm active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Get Quote for {app.title}</span>
                  </button>

                  <Link
                    href="/products"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-colors"
                  >
                    <span>Browse Lights</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className={`${idx % 2 === 1 ? "lg:col-span-6 lg:order-1" : "lg:col-span-6 lg:order-2"}`}>
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
                  <Image src={app.image} alt={app.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
