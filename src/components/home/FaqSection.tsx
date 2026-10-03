"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "@/data/faq";
import { COMPANY_INFO } from "@/lib/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * FaqSection — "Cascade Slide" animation.
 * FAQ items cascade in from alternating left/right directions,
 * creating a zigzag entrance pattern. The accordion expand/collapse
 * uses a smooth spring-driven height animation. Number badges
 * pop in with elastic overshoot.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      // Show everything immediately for reduced motion
      faqRefs.current.forEach((el) => {
        if (el) el.style.opacity = "1";
      });
      return;
    }

    const ctx = gsap.context(() => {
      faqRefs.current.forEach((faq, idx) => {
        if (!faq) return;
        const fromLeft = idx % 2 === 0;
        gsap.fromTo(
          faq,
          {
            opacity: 0,
            x: fromLeft ? -50 : 50,
            rotateZ: fromLeft ? -1.5 : 1.5,
          },
          {
            opacity: 1,
            x: 0,
            rotateZ: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: faq,
              start: "top 88%",
            },
            delay: idx * 0.07,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="py-14 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading — scale + fade */}
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-3 mb-12 sm:mb-14"
        >
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-amber-700">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Commercial & Procurement Queries
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Factual information regarding our manufacturing capabilities, order procedures, and contractor support.
          </p>
        </motion.div>

        {/* Accordion List — Cascade Slide */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                ref={(el) => { faqRefs.current[idx] = el; }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? "bg-white border-2 border-amber-200 shadow-lg shadow-amber-100/30" 
                    : "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
                style={{ opacity: 0 }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    {/* Number badge — elastic pop */}
                    <motion.span
                      initial={false}
                      animate={{
                        backgroundColor: isOpen ? "#f59e0b" : "#f1f5f9",
                        color: isOpen ? "#ffffff" : "#94a3b8",
                        scale: isOpen ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        backgroundColor: { duration: 0.3 },
                        color: { duration: 0.3 },
                        scale: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
                      }}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </motion.span>
                    <span className={`text-sm sm:text-base font-bold font-heading transition-colors ${
                      isOpen ? "text-amber-900" : "text-slate-800"
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-amber-500" : "text-slate-400"}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[3.25rem] sm:pl-[3.75rem] text-sm text-slate-600 leading-relaxed border-t border-amber-100/80 pt-4">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Unresolved question prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="text-slate-900 font-bold text-sm sm:text-base">
              Still have questions about specifications or supply?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Chat directly with our technical team on WhatsApp.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20a%20question%20about%20your%20products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm whitespace-nowrap transition-all shadow-md shadow-emerald-600/20 active:scale-[0.97]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
