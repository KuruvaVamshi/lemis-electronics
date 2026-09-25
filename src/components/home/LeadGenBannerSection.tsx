"use client";

import React from "react";
import { MessageCircle, Phone, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

export default function LeadGenBannerSection() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="py-12 lg:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High-Impact Visual Banner */}
        <div className="relative p-6 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl overflow-hidden text-center">
          
          {/* Top amber accent line */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400" />

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Direct Manufacturer Pricing & Fast Turnaround</span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight max-w-3xl mx-auto leading-tight">
            Looking for the Right Lighting Solution?
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Send us your requirement and our team will get back to you with tailored recommendations, technical specifications, and bulk quotations.
          </p>

          {/* 3 Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-8">
            {/* Get a Quote */}
            <button
              onClick={() => openQuoteModal("Lead Banner Enquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-amber-500/25 transition-all active:scale-95"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* WhatsApp Us */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20urgent%20lighting%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </a>

            {/* Call Now */}
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm sm:text-base transition-all active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Assurance footer */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Direct Factory Dispatches
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Project Quantities & OEM Ready
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Thermal & Driver Safety
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
