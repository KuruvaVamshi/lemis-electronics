"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Sparkles, PackageCheck, Layers, BadgePercent, Headset, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import SpotlightCard from "@/components/ui/SpotlightCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ADVANTAGES = [
  {
    icon: Shield,
    title: "Quality-Focused Manufacturing",
    description: "Every fixture is built using pressure die-cast aluminium housing, high-performance LED drivers, and efficient heatsinks to ensure prolonged lumen life and continuous reliability.",
    tag: "Engineering First",
    accent: "from-red-500 to-amber-500",
  },
  {
    icon: Sparkles,
    title: "Wide Product Range",
    description: "From indoor architectural profiles and rimless downlights to outdoor solar street fixtures and industrial high-power floodlights, source your complete lighting requirements under one roof.",
    tag: "Full Portfolio",
    accent: "from-amber-500 to-yellow-400",
  },
  {
    icon: PackageCheck,
    title: "Bulk Order Support",
    description: "Equipped to handle volume production demands for wholesale distributors, electrical retail shops, real estate developers, and large township installations.",
    tag: "Scale Ready",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Project-Based Solutions",
    description: "We work directly with contractors and consultants to review lighting plans, recommend appropriate fixture wattages, and deliver coordinated project supply.",
    tag: "Turnkey Supply",
    accent: "from-sky-500 to-blue-500",
  },
  {
    icon: BadgePercent,
    title: "Competitive Pricing",
    description: "Direct-from-manufacturer commercial terms eliminate multiple distributor markups, providing high value for your project budgets.",
    tag: "Factory Direct",
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Headset,
    title: "Responsive Support",
    description: "Direct communication with our technical sales team via phone and WhatsApp for fast quotations, order status updates, and product queries.",
    tag: "Always On",
    accent: "from-rose-500 to-pink-500",
  },
];

/**
 * WhyLemisSection — "Staggered Slide-Rotate" animation.
 * Cards enter from alternating left/right with a slight 3D rotation,
 * creating a cascading "fold-open" book reveal effect.
 * The accent bar at the bottom of each card animates with a 
 * GSAP-driven width expansion on scroll.
 */
export default function WhyLemisSection() {
  const { openQuoteModal } = useQuoteModal();
  const sectionRef = useRef<HTMLElement>(null);
  const accentBarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Accent bars expand on scroll
      accentBarRefs.current.forEach((bar, idx) => {
        if (!bar) return;
        gsap.fromTo(
          bar,
          { width: "0px", opacity: 0 },
          {
            width: "48px",
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 90%",
            },
            delay: idx * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Cards alternate slide direction: odd from left, even from right
  const cardVariants = (idx: number) => {
    const fromLeft = idx % 2 === 0;
    return {
      hidden: {
        opacity: 0,
        x: fromLeft ? -60 : 60,
        rotateY: fromLeft ? 8 : -8,
      },
      show: {
        opacity: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
          delay: idx * 0.09,
        },
      },
    };
  };

  // Tag label reveals with a scale spring
  const tagVariants = (idx: number) => ({
    hidden: { opacity: 0, scale: 0.6 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 350,
        damping: 20,
        delay: 0.25 + idx * 0.09,
      },
    },
  });

  return (
    <section ref={sectionRef} id="why-lemis" className="py-14 lg:py-24 bg-white border-b border-slate-200 relative overflow-hidden" style={{ perspective: "1200px" }}>

      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-amber-50/60 to-transparent rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header — text rise with blur-in */}
        <motion.div 
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-3 mb-12 sm:mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-amber-700">
            The Manufacturer Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Why Choose Lemis Electronics?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            We prioritize engineering integrity, transparent commercial terms, and responsive support for contractors, builders, and lighting professionals.
          </p>
        </motion.div>

        {/* 6 Benefit Cards with alternating slide direction */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          style={{ transformStyle: "preserve-3d" }}
        >
          {ADVANTAGES.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={adv.title}
                variants={cardVariants(idx)}
              >
                <SpotlightCard className="h-full p-5 sm:p-6 hover:border-amber-300 hover:-translate-y-1 group">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 15,
                          delay: 0.15 + idx * 0.09,
                        }}
                        className={`w-11 h-11 rounded-xl bg-gradient-to-br ${adv.accent} flex items-center justify-center text-white shadow-sm`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <motion.span
                        variants={tagVariants(idx)}
                        className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-600 transition-colors"
                      >
                        {adv.tag}
                      </motion.span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading mb-2 group-hover:text-slate-950 transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>

                  {/* Bottom accent bar — GSAP width expansion */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5">
                    <div
                      ref={(el) => { accentBarRefs.current[idx] = el; }}
                      className={`h-[3px] rounded-full bg-gradient-to-r ${adv.accent} group-hover:opacity-100 group-hover:!w-12 transition-all duration-500`}
                      style={{ width: "0px", opacity: 0 }}
                    />
                    <span className="text-[11px] font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                      Guaranteed
                    </span>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50 via-white to-amber-50 border border-amber-200/60 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left"
        >
          <div className="space-y-1.5">
            <h4 className="text-slate-900 font-black text-base sm:text-lg font-heading">
              Electrical Contractor or Project Builder?
            </h4>
            <p className="text-sm text-slate-500">
              Register for priority quotation, consultant samples, and direct bulk terms.
            </p>
          </div>
          <button
            onClick={() => openQuoteModal("Contractor Registration / Bulk Quote")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-sm whitespace-nowrap transition-all shadow-md active:scale-[0.97] group"
          >
            <span>Register Now</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
