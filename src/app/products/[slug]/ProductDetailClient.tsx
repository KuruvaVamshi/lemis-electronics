"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, MessageCircle, Phone, ArrowLeft, ShieldCheck, CheckCircle2, Factory, Layers, ArrowRight } from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";

export default function ProductDetailClient({ product }: { product: Product }) {
  const { openQuoteModal } = useQuoteModal();
  const [activeImage, setActiveImage] = useState(product.image);

  const images = product.galleryImages && product.galleryImages.length > 0
    ? product.galleryImages
    : [product.image];

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categorySlug === product.categorySlug || p.featured)
  ).slice(0, 3);

  const handleWhatsApp = () => {
    const text = formatWhatsAppMessage({
      product: product.name,
      message: `I would like to enquire about technical specifications and bulk pricing for ${product.name}.`,
    });
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <div className="py-8 sm:py-12 lg:py-16 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-amber-700 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-amber-700 transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">{product.name}</span>
        </div>

        {/* Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-md">
              <Image
                src={activeImage}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />

              {/* Swiggy veg/non-veg style badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-800">Made in India</span>
              </div>

              {product.badge && (
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wide shadow-sm">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex items-center gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      activeImage === img
                        ? "border-amber-500 shadow-sm scale-105"
                        : "border-slate-200 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${idx + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Manufacturer Assurance Box */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5 text-xs shadow-xs">
              <div className="flex items-center gap-2 text-amber-700 font-bold">
                <Factory className="w-4 h-4 text-amber-600" />
                <span>Manufactured by Lemis Electronics</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Direct from factory supply. Rigorous burn-in tested luminaires with verified thermal dissipation and genuine component sourcing.
              </p>
            </div>
          </div>

          {/* Right Column: Details & Enquiry Actions */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 border border-amber-200 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mt-3">
                {product.name}
              </h1>
              
              <div className="mt-2.5 flex items-center gap-3">
                <span className="text-xs sm:text-sm font-bold text-amber-800 bg-amber-100 border border-amber-300 px-3 py-1 rounded-lg">
                  {product.priceLabel}
                </span>
                <span className="text-xs text-slate-500">
                  Direct Factory Project Terms
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* 3 High-Conversion CTA Buttons */}
            <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-md space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Order & Quotation Enquiries
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => openQuoteModal(product.name)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Quote</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Sales</span>
                </button>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-bold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call Factory Desk: {COMPANY_INFO.displayPhone}</span>
              </a>
            </div>

            {/* BULK CALLOUT */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>Looking for bulk quantities? Contact our team.</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Special commercial volume rates and scheduled staged deliveries are available for electrical contractors, builders, industrial plants, and dealer networks.
              </p>
            </div>

            {/* Applications List */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Recommended Applications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.applications.map((app) => (
                  <div key={app} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Specifications Table Section */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Engineering Specs
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-heading mt-2 mb-4">
              Technical Specifications
            </h2>

            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <tbody className="divide-y divide-slate-100">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <tr key={key} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 sm:px-5 font-bold text-slate-800 bg-slate-50 w-1/3">
                        {key}
                      </td>
                      <td className="py-3 px-4 sm:px-5 text-slate-700 font-medium">
                        {val}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-3 px-4 sm:px-5 font-bold text-slate-800 bg-slate-50">
                      Testing & Quality
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700 font-medium">
                      100% factory burn-in testing prior to dispatch.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-5 font-bold text-slate-800 bg-slate-50">
                      Custom Options
                    </td>
                    <td className="py-3 px-4 sm:px-5 text-slate-700 font-medium">
                      Custom wattages and housing options available on request.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[11px] text-slate-500 mt-2.5">
              * Note: Exact wattages, driver brands, and beam angles can be configured based on project consultant specifications.
            </p>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                  Related Lighting Luminaires
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Frequently paired fixtures for comprehensive facility projects.
                </p>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
              >
                <span>All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col justify-between hover:border-amber-400 transition-colors shadow-sm"
                >
                  <div className="flex gap-3.5">
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                      <Image src={rel.image} alt={rel.name} fill className="object-cover" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-amber-700 uppercase">
                        {rel.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-heading line-clamp-1 mt-0.5">
                        {rel.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-1">
                        {rel.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/products/${rel.slug}`}
                      className="text-xs font-bold text-slate-700 hover:text-amber-700"
                    >
                      View Specs →
                    </Link>
                    <button
                      onClick={() => openQuoteModal(rel.name)}
                      className="px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black transition-colors shadow-xs"
                    >
                      Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
