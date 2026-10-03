"use client";

import React, { useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";
import { COMPANY_INFO, TARGET_CUSTOMERS } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

/**
 * BulkProjectOrdersSection — "Blueprint Unfold" animation.
 * The left content draws on like a technical drawing with ruled lines,
 * while the form card slides in from the right with a perspective
 * rotation that unfolds like opening a folder.
 * Customer chips cascade in with a wave pattern.
 */
export default function BulkProjectOrdersSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    location: "",
    projectType: "Commercial Building",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Form card: perspective unfold from right edge
      if (formCardRef.current) {
        gsap.fromTo(
          formCardRef.current,
          { 
            opacity: 0, 
            rotateY: -12, 
            x: 80,
            transformOrigin: "right center",
          },
          {
            opacity: 1,
            rotateY: 0,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: formCardRef.current,
              start: "top 80%",
            },
          }
        );
      }

      // Customer chips: wave cascade
      chipRefs.current.forEach((chip, idx) => {
        if (!chip) return;
        gsap.fromTo(
          chip,
          { opacity: 0, y: 15, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: chip,
              start: "top 90%",
            },
            delay: idx * 0.06,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and contact phone number.");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("lemis_leads") || "[]");
      existing.push({ ...formData, type: "bulk_section", timestamp: new Date().toISOString() });
      localStorage.setItem("lemis_leads", JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      alert("Please enter your phone number.");
      return;
    }
    const message = formatWhatsAppMessage(formData);
    const url = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${message}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  // Left content stagger variants
  const leftVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const leftChildVariants = {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)" },
    show: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section ref={sectionRef} id="bulk-orders" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Blueprint-style content draw-on */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            variants={leftVariants}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <motion.span variants={leftChildVariants} className="inline-block text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Bulk Supply & Project Division
            </motion.span>
            
            <motion.h2 variants={leftChildVariants} className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight">
              Planning a Lighting Project?
            </motion.h2>

            <motion.p variants={leftChildVariants} className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Whether you need lighting for a commercial building, warehouse, factory, apartment project, outdoor area or large-scale development, talk to our team for product recommendations and bulk quotations.
            </motion.p>

            <motion.div variants={leftChildVariants} className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Supplying Directly To:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {TARGET_CUSTOMERS.slice(0, 8).map((customer, idx) => (
                  <span
                    key={customer}
                    ref={(el) => { chipRefs.current[idx] = el; }}
                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-medium bg-white border border-slate-200 text-slate-700 shadow-xs"
                    style={{ opacity: 0 }}
                  >
                    {customer}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={leftChildVariants} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5 shadow-sm">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs sm:text-sm">
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>Prefer Direct Discussion?</span>
              </div>
              <p className="text-xs text-slate-600">
                Call our technical desk directly at{" "}
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-900 font-black underline hover:text-amber-600">
                  {COMPANY_INFO.displayPhone}
                </a>{" "}
                or chat on WhatsApp for fast BOQ estimation.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Perspective Unfold Form Card */}
          <div
            ref={formCardRef}
            className="lg:col-span-7"
            style={{ opacity: 0, transformStyle: "preserve-3d" }}
          >
            <div className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-400 to-sky-500 absolute top-0 left-0" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="py-8 text-center space-y-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.15 }}
                    className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    Project Enquiry Submitted!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Our sales team will evaluate your project requirement and get back to you with comprehensive product recommendations and direct quotation.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Requirement
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="border-b border-slate-100 pb-2.5">
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading">
                      Request a Project Quote
                    </h3>
                    <p className="text-xs text-slate-500">
                      Submit details below for direct manufacturer pricing and delivery schedules.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company / Contractor Firm
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Infra Projects"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    {/* Product Required */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Product Required *
                      </label>
                      <input
                        type="text"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g. High Bay / Solar Street Lights"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Quantity Required
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 pcs / 200 pcs"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Project Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Hyderabad / Vijayawada"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-amber-500 transition-all"
                    >
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Factory / Industrial Plant">Factory / Industrial Plant</option>
                      <option value="Warehouse / Logistics">Warehouse / Logistics</option>
                      <option value="Apartment / Residential Society">Apartment / Residential Society</option>
                      <option value="Roadway / Outdoor Street">Roadway / Outdoor Street</option>
                      <option value="Farm / Agriculture Site">Farm / Agriculture Site</option>
                      <option value="Electrical Dealer / Retailer">Electrical Dealer / Retailer</option>
                      <option value="Other Project Requirement">Other Project Requirement</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Remarks
                    </label>
                    <textarea
                      name="message"
                      rows={2}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter wattages, pole heights, or special requirements..."
                      className="w-full px-3.5 py-2 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submission buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Request a Project Quote</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Talk on WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Reduced motion fallback */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          [style*="opacity: 0"] {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
