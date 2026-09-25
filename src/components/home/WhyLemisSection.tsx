"use client";

import React from "react";
import { Shield, Sparkles, PackageCheck, Layers, BadgePercent, Headset, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const ADVANTAGES = [
  {
    icon: Shield,
    title: "Quality-Focused Manufacturing",
    description: "Every fixture is built using pressure die-cast aluminium housing, high-performance LED drivers, and efficient heatsinks to ensure prolonged lumen life and continuous reliability.",
  },
  {
    icon: Sparkles,
    title: "Wide Product Range",
    description: "From indoor architectural profiles and rimless downlights to outdoor solar street fixtures and industrial high-power floodlights, source your complete lighting requirements under one roof.",
  },
  {
    icon: PackageCheck,
    title: "Bulk Order Support",
    description: "Equipped to handle volume production demands for wholesale distributors, electrical retail shops, real estate developers, and large township installations.",
  },
  {
    icon: Layers,
    title: "Project-Based Solutions",
    description: "We work directly with contractors and consultants to review lighting plans, recommend appropriate fixture wattages, and deliver coordinated project supply.",
  },
  {
    icon: BadgePercent,
    title: "Competitive Pricing",
    description: "Direct-from-manufacturer commercial terms eliminate multiple distributor markups, providing high value for your project budgets.",
  },
  {
    icon: Headset,
    title: "Responsive Customer Support",
    description: "Direct communication with our technical sales team via phone and WhatsApp for fast quotations, order status updates, and product queries.",
  },
];

export default function WhyLemisSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section id="why-lemis" className="py-12 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            The Manufacturer Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Why Choose Lemis Electronics?
          </h2>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            We prioritize engineering integrity, transparent commercial terms, and responsive support for contractors, builders, and lighting professionals.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ADVANTAGES.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-amber-700">
                  <span>Guaranteed Build Quality</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-slate-900 font-black text-base sm:text-lg">
              Are you an Electrical Contractor or Project Builder?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Register your firm for priority quotation, consultant samples, and direct bulk terms.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Contractor Registration / Bulk Quote")}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm whitespace-nowrap transition-colors shadow-sm active:scale-95"
          >
            Register Project Requirement
          </button>
        </div>

      </div>
    </section>
  );
}
