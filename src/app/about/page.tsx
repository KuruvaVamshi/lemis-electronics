"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Factory, ShieldCheck, Sun, Layers, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { COMPANY_INFO, TARGET_CUSTOMERS } from "@/lib/constants";
import { useQuoteModal } from "@/context/QuoteModalContext";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            About Lemis Electronics
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight">
            Engineered Lighting Built for Real-World Demands
          </h1>
          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Lemis Electronics is an Indian manufacturer and supplier specializing in high-performance LED luminaires and independent solar lighting solutions.
          </p>
        </div>

        {/* Manufacturing Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 font-heading">
              Our Manufacturing Focus
            </h2>
            <p className="text-xs sm:text-base leading-relaxed text-slate-600">
              Commercial and industrial lighting environments demand more than just lumen output—they require robust thermal dissipation, reliable drivers that withstand power fluctuations, and durable weatherproofing that survives severe monsoons and factory heat.
            </p>
            <p className="text-xs sm:text-base leading-relaxed text-slate-600">
              At Lemis Electronics, we manufacture all kinds of LED and Solar Lights utilizing pressure die-cast aluminium housings, high-efficiency optical lenses, and surge-protected driver technology.
            </p>
            
            <div className="pt-3 border-t border-slate-200 space-y-1.5">
              <div className="flex items-center gap-2 text-sm text-slate-900 font-bold">
                <Factory className="w-4 h-4 text-amber-600" />
                <span>Made in India Manufacturing</span>
              </div>
              <p className="text-xs text-slate-500">
                Direct manufacturing facilities focused on project supply, customization, and rapid lead times.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <Image
                src="/products/hero-lighting-banner.jpg"
                alt="Lemis Electronics Lighting Manufacturing"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200 text-xs shadow-lg">
                <p className="font-bold text-slate-900">Direct Production • Strict Quality Control</p>
                <p className="text-slate-500">Every luminaire undergoes complete burn-in testing prior to project dispatch.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What We Stand For */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-slate-900 font-heading">
              Our Core Commitments
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Transparent, genuine business practices with no inflated claims.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
              <ShieldCheck className="w-8 h-8 text-amber-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Honest Specifications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe in factual wattages, verifiable lumens, and proper heatsink weights. We do not compromise on aluminium mass or driver safety.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
              <Layers className="w-8 h-8 text-sky-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Contractor-First Support</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We work closely with project contractors, providing prompt commercial quotations, technical consultation, and staged dispatch schedules.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5 shadow-sm">
              <Sun className="w-8 h-8 text-amber-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading">Sustainable Solar Solutions</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expanding access to clean, zero-grid solar street and perimeter lighting powered by long-cycle lithium batteries and smart dusk-to-dawn sensors.
              </p>
            </div>
          </div>
        </div>

        {/* Target Customers Served */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 mb-12 shadow-sm">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 font-heading mb-4 text-center">
            Who We Partner With
          </h2>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {TARGET_CUSTOMERS.map((cust) => (
              <span
                key={cust}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200"
              >
                {cust}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-950 text-white text-center space-y-4 shadow-xl">
          <h2 className="text-xl sm:text-3xl font-black font-heading">
            Connect with our Manufacturing Sales Desk
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Discuss your upcoming project requirements with our technical team today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => openQuoteModal("About Page Enquiry")}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
            >
              Request a Project Quote
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
