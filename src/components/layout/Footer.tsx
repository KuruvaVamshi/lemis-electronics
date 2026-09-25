import React from "react";
import Link from "next/link";
import { Zap, Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { PRODUCT_CATEGORIES } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner / Factory Strip */}
      <div className="border-b border-slate-800 bg-slate-950/60 py-7 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white font-bold font-heading text-base">
                Looking for Bulk Lighting Supply or Custom Manufacturing?
              </p>
              <p className="text-xs text-slate-400 mt-0.5">
                Our sales engineering team provides instant BOQ reviews and direct factory quotations.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20a%20bulk%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Sales
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-colors border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              Call Factory
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black">
                <Zap className="w-5 h-5 fill-slate-950 stroke-slate-950" />
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-black tracking-tight text-white font-heading">
                  LEMIS
                </span>
                <span className="text-xl font-bold tracking-tight text-amber-500 font-heading">
                  ELECTRONICS
                </span>
              </div>
            </Link>

            <p className="text-amber-400 font-bold text-xs tracking-wider uppercase">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Dedicated manufacturer and supplier of heavy-duty LED lighting luminaires and standalone solar lighting systems for contractors, commercial developers, and industrial infrastructure.
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="inline-block text-[11px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                {COMPANY_INFO.manufacturingTag}
              </span>
              <span className="inline-block text-[11px] font-bold text-sky-400 bg-sky-950/60 border border-sky-500/30 px-3 py-1 rounded-full">
                Bulk Order Supplier
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-amber-400 transition-colors">
                  Applications & Industries
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-amber-400 transition-colors">
                  Project Solutions
                </Link>
              </li>
              <li>
                <Link href="/why-lemis" className="hover:text-amber-400 transition-colors">
                  Why Lemis Electronics
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Products */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Lighting Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/products/led-flood-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>LED Flood Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/led-high-bay-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>LED High Bay Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/solar-street-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>Solar Street Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/led-street-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>LED Street Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/rimless-down-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>Rimless Down Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
              <li>
                <Link href="/products/led-profile-light" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                  <span>LED Profile Lights</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading mb-4">
              Factory & Sales Desk
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp Quick Chat
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Lemis Electronics. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>Manufacturers of All Kinds of LED and Solar Lights</span>
            <span>•</span>
            <span>Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
