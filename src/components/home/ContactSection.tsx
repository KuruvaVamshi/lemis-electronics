"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { formatWhatsAppMessage } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ContactSection — "Glass Panel Slide" animation.
 * The left contact info panel slides in from the bottom-left with a scale,
 * while each contact channel row animates sequentially with a clip-path reveal.
 * The right form panel slides in from the right with perspective depth.
 * The map has a smooth opacity reveal with border expansion.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const channelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Left panel — slide from bottom-left
      if (leftPanelRef.current) {
        gsap.fromTo(
          leftPanelRef.current,
          { opacity: 0, y: 50, x: -30 },
          {
            opacity: 1,
            y: 0,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: leftPanelRef.current,
              start: "top 82%",
            },
          }
        );
      }

      // Contact channel rows — sequential clip-path reveal from left
      channelRefs.current.forEach((channel, idx) => {
        if (!channel) return;
        gsap.fromTo(
          channel,
          { opacity: 0, x: -25 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: channel,
              start: "top 90%",
            },
            delay: idx * 0.1,
          }
        );
      });

      // Right panel — slide from right with perspective
      if (rightPanelRef.current) {
        gsap.fromTo(
          rightPanelRef.current,
          { opacity: 0, x: 60, rotateY: -8 },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: rightPanelRef.current,
              start: "top 80%",
            },
            delay: 0.15,
          }
        );
      }

      // Map — opacity + scale reveal
      if (mapRef.current) {
        gsap.fromTo(
          mapRef.current,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: mapRef.current,
              start: "top 85%",
            },
            delay: 0.3,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("lemis_leads") || "[]");
      existing.push({ ...formData, type: "contact_section", timestamp: new Date().toISOString() });
      localStorage.setItem("lemis_leads", JSON.stringify(existing));
    } catch {}
    setSubmitted(true);
  };

  const handleWhatsApp = (e: React.FormEvent) => {
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

  return (
    <section ref={sectionRef} id="contact" className="py-12 lg:py-20 bg-white" style={{ perspective: "1200px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading — blur rise */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
            Direct Factory Channels
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Contact Lemis Electronics
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Reach our sales and manufacturing facility for product inquiries, dealer discussions, or project quotations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards + Map */}
          <div
            ref={leftPanelRef}
            className="lg:col-span-5 space-y-5"
            style={{ opacity: 0 }}
          >
            
            {/* Direct Channels Card */}
            <div className="p-5 sm:p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 font-heading border-b border-slate-200 pb-3">
                Factory & Sales Desk
              </h3>

              {/* Phone */}
              <div ref={(el) => { channelRefs.current[0] = el; }} className="flex items-start gap-3" style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight block">Direct Calling</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.displayPhone}
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div ref={(el) => { channelRefs.current[1] = el; }} className="flex items-start gap-3" style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight block">WhatsApp Enquiries</span>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    Chat Directly with Sales Team
                  </a>
                </div>
              </div>

              {/* Email */}
              <div ref={(el) => { channelRefs.current[2] = el; }} className="flex items-start gap-3" style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight block">Email RFQ</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-semibold text-slate-800 hover:text-amber-600 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div ref={(el) => { channelRefs.current[3] = el; }} className="flex items-start gap-3" style={{ opacity: 0 }}>
                <div className="w-10 h-10 rounded-xl bg-slate-200/80 border border-slate-300 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight block">Plant / Office Address</span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {COMPANY_INFO.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div ref={(el) => { channelRefs.current[4] = el; }} className="flex items-start gap-2.5 pt-2 border-t border-slate-200 text-xs text-slate-500" style={{ opacity: 0 }}>
                <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div
              ref={mapRef}
              className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 h-48 sm:h-52 relative shadow-xs"
              style={{ opacity: 0 }}
            >
              <iframe
                title="Lemis Electronics Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.76861819777!2d78.3846985223362!3d17.412348705030438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

          </div>

          {/* Right Column: Contact Enquiry Form — Perspective Slide */}
          <div
            ref={rightPanelRef}
            className="lg:col-span-7"
            style={{ opacity: 0, transformStyle: "preserve-3d" }}
          >
            <div className="p-5 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
              <h3 className="text-lg sm:text-xl font-black text-slate-900 font-heading mb-1">
                Send Product Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-5">
                Fill in your details below and our team will get in touch with you shortly.
              </p>

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
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                    className="w-14 h-14 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>
                  <h4 className="text-xl font-black text-slate-900 font-heading">
                    Enquiry Received
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                    Thank you for reaching out to Lemis Electronics. Our technical sales representative will contact you via phone/WhatsApp.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-300 transition-colors"
                  >
                    Submit Another Query
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company / Firm"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Product / Requirement
                      </label>
                      <input
                        type="text"
                        name="product"
                        value={formData.product}
                        onChange={handleChange}
                        placeholder="e.g. LED Flood Light, Street Light"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 50 pcs"
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Hyderabad / Telangana"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message / Requirement Details
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your requirements or questions..."
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all resize-none"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-md active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Enquiry</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Directly</span>
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
