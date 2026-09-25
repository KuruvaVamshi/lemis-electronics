"use client";

import React from "react";
import { Phone, MessageCircle, FileText, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

export default function MobileBottomBar() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-1.5 shadow-dock flex items-center justify-between gap-1.5">
        
        {/* Quick Call */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold active:scale-95 transition-all border border-slate-200/80"
        >
          <Phone className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Call</span>
        </a>

        {/* WhatsApp Instant Chat */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20enquiry%20regarding%20LED%20and%20Solar%20lights.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold active:scale-95 transition-all border border-emerald-300/80"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote / Swiggy Style Primary Action */}
        <button
          onClick={() => openQuoteModal()}
          className="flex-[1.3] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-xs font-black shadow-md shadow-amber-500/25 active:scale-95 transition-all"
        >
          <FileText className="w-4 h-4 text-slate-950 shrink-0" />
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </aside>
  );
}
