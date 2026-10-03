"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, Zap, ShieldCheck } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

/**
 * LeadGenBannerSection — "Cinematic Reveal" animation.
 * The dark card scales up from 0.9 with a glow line that wipes across
 * the top. Text content staggers in with different y-offsets.
 * CTA buttons enter with a spring bounce.
 * Assurance footer uses a horizontal wipe reveal.
 */
export default function LeadGenBannerSection() {
  const { openQuoteModal } = useQuoteModal();

  // Container entrance
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.92, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Text elements stagger
  const textVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // CTA button spring entrance
  const buttonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Footer horizontal wipe
  const footerVariants = {
    hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  return (
    <section className="py-12 lg:py-20 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* High-Impact Visual Banner — Cinematic Reveal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          variants={containerVariants}
          className="relative p-6 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white shadow-xl overflow-hidden text-center"
        >
          
          {/* Top amber accent line — animated width */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400 origin-left"
          />

          {/* Badge */}
          <motion.div variants={textVariants} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Direct Manufacturer Pricing & Fast Turnaround</span>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={textVariants} className="text-2xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight max-w-3xl mx-auto leading-tight">
            Looking for the Right Lighting Solution?
          </motion.h2>

          {/* Subtext */}
          <motion.p variants={textVariants} className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto mt-3 sm:mt-4 leading-relaxed">
            Send us your requirement and our team will get back to you with tailored recommendations, technical specifications, and bulk quotations.
          </motion.p>

          {/* 3 Call to Action Buttons — spring bounce */}
          <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 sm:mt-8">
            {/* Get a Quote */}
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => openQuoteModal("Lead Banner Enquiry")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-amber-500/25 transition-all cta-shine"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            {/* WhatsApp Us */}
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20an%20urgent%20lighting%20requirement.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </motion.a>

            {/* Call Now */}
            <motion.a
              variants={buttonVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm sm:text-base transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </motion.a>
          </motion.div>

          {/* Assurance footer — horizontal wipe reveal */}
          <motion.div
            variants={footerVariants}
            className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400"
          >
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
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
