"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileSpreadsheet, ShieldCheck, CheckCircle2, Phone, MessageCircle, ArrowRight, Layers, Factory } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO, TARGET_CUSTOMERS } from "@/lib/constants";

export default function ProjectsPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="py-10 lg:py-16 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block">
            Project Division
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Commercial & Bulk Lighting Project Supply
          </h1>
          <p className="text-xs sm:text-base text-slate-600">
            Dedicated manufacturing and logistics coordination for large residential apartments, factories, infrastructure corridors, and commercial complexes.
          </p>
        </div>

        {/* 3 Pillars of Project Supply */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              BOQ & Technical Review
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Send us your architectural electrical bill of quantities. Our technical sales team reviews fixture wattages, cutouts, and environmental ratings to ensure exact project compliance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Direct Manufacturing Scale
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Produce hundreds or thousands of identical units with consistent color temperature (CCT) binning, matched driver specifications, and rugged die-cast housings.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-heading">
              Staged Site Deliveries
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We align dispatch schedules with your construction milestones—delivering basement/conduit fixtures first, followed by interior downlights and exterior street luminaires.
            </p>
          </div>
        </div>

        {/* Project Supply Flow Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-1 rounded-md">
                Contractor Partnership
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                Have an Active Tender or Client BOQ?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Submit your project details for direct manufacturer pricing. We provide sample units for consultant inspection and client approvals.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => openQuoteModal("Project BOQ Submission")}
                  className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
                >
                  Submit Project Requirement
                </button>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20active%20project%20BOQ%20to%20quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send BOQ on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                Project Supply Checklist:
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Fast Commercial Estimation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physical Samples on Request</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Wattages & Mounting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct Factory Dispatches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
