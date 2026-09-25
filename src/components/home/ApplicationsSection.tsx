"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { APPLICATIONS } from "@/data/applications";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function ApplicationsSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="applications" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            Tailored Industry Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Lighting Solutions for Every Application
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            From heavy manufacturing floors requiring high-bay illumination to residential ceilings demanding glare-free rimless downlights, Lemis Electronics provides application-engineered lighting.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="group rounded-2xl bg-white border border-slate-200 hover:border-amber-400 overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-card-hover"
            >
              <div>
                {/* Visual Header */}
                <div className="relative w-full h-40 sm:h-44 bg-slate-100 overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-base sm:text-lg font-bold text-white font-heading drop-shadow-sm">
                      {app.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 sm:p-5">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                    {app.description}
                  </p>

                  <div className="space-y-1.5 pt-2.5 border-t border-slate-100">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-amber-700 block">
                      Recommended Fixtures:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {app.recommendedLights.map((light) => (
                        <span
                          key={light}
                          className="inline-block px-2 py-0.5 rounded text-[11px] bg-slate-100 text-slate-700 border border-slate-200 font-medium"
                        >
                          {light}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-4 pt-0 sm:p-5 sm:pt-0 mt-auto">
                <button
                  onClick={() => openQuoteModal(`${app.title} Lighting Requirement`)}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                >
                  <span>Enquire for {app.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
