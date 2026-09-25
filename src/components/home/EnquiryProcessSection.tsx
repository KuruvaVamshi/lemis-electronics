"use client";

import React from "react";
import { MessageSquareText, Lightbulb, FileSpreadsheet, Truck, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";

const STEPS = [
  {
    step: "01",
    title: "Tell Us Your Requirement",
    desc: "Share your lighting bill of quantities, project type, wattages, or application details via our website, WhatsApp, or phone.",
    icon: MessageSquareText,
  },
  {
    step: "02",
    title: "Get Recommendations",
    desc: "Our lighting team evaluates your area dimensions, lux requirements, and advises the most efficient fixtures for the job.",
    icon: Lightbulb,
  },
  {
    step: "03",
    title: "Receive Your Quotation",
    desc: "Get transparent, direct manufacturer commercial terms, technical specification sheets, and dispatch timelines.",
    icon: FileSpreadsheet,
  },
  {
    step: "04",
    title: "Place Your Order",
    desc: "Confirm your order for scheduled production, rigorous quality testing, and coordinated delivery to your site or warehouse.",
    icon: Truck,
  },
];

export default function EnquiryProcessSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-12 lg:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            How Project Enquiries Work
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            A transparent and fast procurement process designed specifically for contractors, engineers, and bulk buyers.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-400 hover:bg-white transition-all duration-200 hover:-translate-y-0.5 shadow-sm flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-2xl sm:text-3xl font-black text-amber-600 font-heading">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading mb-1.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center gap-1 text-[11px] font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => openQuoteModal("Step 1: Start Project Enquiry")}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            <span>Start Step 01 — Tell Us Your Requirement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
