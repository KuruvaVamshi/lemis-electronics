"use client";

import React from "react";
import Link from "next/link";
import WhyLemisSection from "@/components/home/WhyLemisSection";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

export default function WhyLemisPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="py-10 lg:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-3 py-1 rounded-full inline-block">
            The Lemis Advantage
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Why Contractors & Builders Choose Lemis Electronics
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Direct manufacturer accountability, rugged die-cast aluminium construction, transparent commercial terms, and prompt technical support.
          </p>
        </div>
      </div>

      <WhyLemisSection />

      {/* Direct Contact Banner */}
      <div className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Ready to discuss your lighting requirements?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Talk directly to our manufacturing sales desk today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openQuoteModal("Why Lemis Enquiry")}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              Request a Project Quote
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
