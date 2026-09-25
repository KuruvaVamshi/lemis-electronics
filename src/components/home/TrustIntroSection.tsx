"use client";

import React from "react";
import { Lightbulb, Sun, Layers, Wrench, CheckCircle2 } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const HIGHLIGHTS = [
  {
    icon: Lightbulb,
    title: "LED Lighting",
    description: "Engineered LED fixtures designed for industrial plants, commercial buildings, architectural interiors, and outdoor floodlighting with dependable thermal design.",
    points: ["Heavy-duty heatsinks", "High lumen efficiency", "Surge protected drivers"],
  },
  {
    icon: Sun,
    title: "Solar Lighting",
    description: "Independent off-grid solar street and perimeter illumination featuring high-grade monocrystalline PV panels and lithium battery technology.",
    points: ["Zero electricity bills", "Dusk-to-dawn sensors", "Standalone pole systems"],
  },
  {
    icon: Layers,
    title: "Bulk & Project Orders",
    description: "Structured to fulfill volume quantity demands for electrical contractors, infrastructure builders, residential societies, and regional distributors.",
    points: ["Project BOQ pricing", "Coordinated dispatch", "Consistent color binning"],
  },
  {
    icon: Wrench,
    title: "Custom Requirements",
    description: "Technical capability to configure custom wattages, specialized geometric profile lengths, and housing options to meet specific architectural requirements.",
    points: ["Custom profile cuts", "Specific CCT choices", "Application consultation"],
  },
];

export default function TrustIntroSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Manufacturing & Supply Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Lighting Solutions Built for Real-World Projects
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Lemis Electronics is an Indian manufacturer and supplier focused on delivering rugged, high-performance LED and solar lighting fixtures for contractors, engineers, and institutional buyers.
          </p>
        </div>

        {/* 4 Compact Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-700 mb-3.5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-200/80">
                  {item.points.map((pt) => (
                    <div key={pt} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mini Bottom Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="text-xs text-slate-700">
            <span className="font-bold text-slate-900">Have a specific project Bill of Quantities (BOQ)?</span> Share your requirement list for instant evaluation and commercial discounts.
          </div>
          <button
            onClick={() => openQuoteModal("Project BOQ Enquiry")}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold whitespace-nowrap transition-colors shadow-sm"
          >
            Submit Project BOQ
          </button>
        </div>

      </div>
    </section>
  );
}
