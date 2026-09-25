"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export default function WhatsAppFloatingBtn() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-20 sm:bottom-8 right-5 sm:right-8 z-40">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20am%20interested%20in%20your%20LED%20and%20Solar%20Lighting%20solutions.`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 p-3.5 sm:px-4 sm:py-3 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappHover text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-brand-whatsapp" />
        <span className="hidden sm:inline-block font-bold text-sm tracking-wide">
          WhatsApp Us
        </span>
        
        {/* Radar ping effect */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-brand-950"></span>
        </span>
      </a>
    </aside>
  );
}
