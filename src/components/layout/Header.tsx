"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Phone, MessageCircle, ChevronRight, Zap, ArrowRight, X } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Applications", href: "/applications" },
  { name: "Projects", href: "/projects" },
  { name: "Why Lemis", href: "/why-lemis" },
  { name: "Contact", href: "/contact" },
];

/* ─── Animated Hamburger (3-bar to X morph) ─── */
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="relative w-5 h-4 flex flex-col justify-between">
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full origin-left"
        animate={isOpen ? { rotate: 45, y: 0, x: 1 } : { rotate: 0, y: 0, x: 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full"
        animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.span
        className="block h-[2px] w-full bg-current rounded-full origin-left"
        animate={isOpen ? { rotate: -45, y: 0, x: 1 } : { rotate: 0, y: 0, x: 0 }}
        transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}

/* ─── Desktop: Magnetic Nav Link with hover underline slide ─── */
function NavLink({
  link,
  isActive,
}: {
  link: { name: string; href: string };
  isActive: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFinePointer, setHasFinePointer] = useState(false);

  const springConfig = { damping: 22, stiffness: 280, mass: 0.4 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !hasFinePointer) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.15);
    y.set(dy * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div style={{ x, y }}>
      <Link
        ref={ref}
        href={link.href}
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative px-3.5 py-2 text-[13px] font-bold tracking-wide uppercase transition-colors ${
          isActive
            ? "text-amber-700"
            : "text-slate-500 hover:text-slate-900"
        }`}
      >
        {link.name}

        {/* Active indicator — spring glider pill */}
        {isActive && (
          <motion.div
            layoutId="navActiveGlider"
            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-5 h-[3px] rounded-full bg-gradient-to-r from-red-500 via-amber-500 to-amber-400"
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
          />
        )}

        {/* Hover underline slide (not on active item) */}
        {!isActive && (
          <span
            className={`absolute -bottom-1 left-1/2 h-[2px] rounded-full bg-slate-300 transition-all duration-300 ease-out ${
              isHovered
                ? "w-5 -translate-x-1/2 opacity-100"
                : "w-0 -translate-x-1/2 opacity-0"
            }`}
          />
        )}
      </Link>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════ */
/*                  MAIN HEADER                   */
/* ═══════════════════════════════════════════════ */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openQuoteModal } = useQuoteModal();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* ─── Top Utility Bar (Desktop) ─── */}
      <div className="bg-slate-950 text-slate-400 text-[11px] py-1.5 px-4 hidden md:block relative z-[60]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              Direct Manufacturer
            </span>
            <span className="text-slate-700">|</span>
            <span>Bulk Supply to Contractors, Builders & Facilities</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-amber-400 transition-colors font-medium text-slate-300"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_INFO.displayPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20have%20a%20project%20enquiry.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* ─── Main Floating Capsule Navbar ─── */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-7xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none ${
          isScrolled ? "top-3" : "top-3 md:top-12"
        }`}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`flex items-center justify-between mx-auto pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "bg-white/85 backdrop-blur-2xl border border-slate-200/60 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.1)] rounded-2xl px-3 py-1.5 sm:px-4 sm:py-2"
              : "bg-white/70 backdrop-blur-xl border border-slate-200/40 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] rounded-2xl px-3 py-2 sm:px-5 sm:py-3"
          }`}
        >
          {/* ── Logo with Ambient Glow Aura ── */}
          <Link href="/" className="relative flex items-center gap-3 group shrink-0">
            {/* Warm glow aura behind logo — signature effect */}
            <div
              className={`absolute -inset-3 rounded-full bg-gradient-to-br from-red-500/15 via-amber-400/10 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              aria-hidden="true"
            />

            <div className="relative">
              <Image
                src="/logo-lemis.png"
                alt="Lemis Electronics"
                width={140}
                height={140}
                className={`w-auto transition-all duration-500 origin-left object-contain ${
                  isScrolled ? "h-9 sm:h-10" : "h-10 sm:h-14"
                }`}
                priority
              />
            </div>

            {/* Text group next to logo — shows tagline that fades on scroll */}
            <div className={`hidden sm:flex flex-col transition-all duration-500 ${isScrolled ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}>
              <span className="text-[10px] font-extrabold uppercase tracking-[2px] text-slate-400 leading-none">
                LED & Solar
              </span>
              <span className="text-[9px] font-bold text-slate-400/60 tracking-wider leading-none mt-0.5">
                Manufacturer
              </span>
            </div>
          </Link>

          {/* ── Desktop Navigation Links ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                link={link}
                isActive={pathname === link.href}
              />
            ))}
          </nav>

          {/* ── Desktop Right Actions ── */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* WhatsApp circle */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics%2C%20I%20need%20a%20quotation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 flex items-center justify-center transition-all duration-200 border border-emerald-200/60"
              title="WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Primary CTA — Enquire Now with pulsing radar dot */}
            <button
              onClick={() => openQuoteModal()}
              className="group relative inline-flex items-center gap-2.5 pl-4 pr-2.5 py-2 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-amber-500 hover:from-red-700 hover:via-amber-600 hover:to-amber-600 text-white text-[13px] font-black tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-amber-600/30 transition-all duration-300 active:scale-[0.97] cta-shine"
            >
              <span>Enquire Now</span>
              <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center relative">
                <span className="absolute w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-60" />
                <ArrowRight className="relative w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* ── Mobile Actions ── */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              onClick={() => openQuoteModal()}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-amber-500 text-white text-[11px] font-black shadow-sm active:scale-95 transition-all"
            >
              Quote
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-100/80 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <HamburgerIcon isOpen={mobileMenuOpen} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* ═══ Full-Screen Spatial Mobile Drawer ═══ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[55] bg-slate-950/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[56] w-[85vw] max-w-sm bg-white shadow-2xl lg:hidden flex flex-col overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo-lemis.png"
                    alt="Lemis Electronics"
                    width={100}
                    height={100}
                    className="w-auto h-10 object-contain"
                  />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links — staggered reveal */}
              <motion.nav
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
                  closed: {},
                }}
                className="flex-1 px-4 py-4"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        closed: { opacity: 0, x: 30 },
                        open: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-bold transition-colors mb-1 ${
                          isActive
                            ? "bg-gradient-to-r from-amber-50 to-red-50/50 text-red-700 border border-amber-200/60"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronRight className={`w-4 h-4 ${isActive ? "text-red-500" : "text-slate-300"}`} />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              {/* Drawer Footer Actions */}
              <div className="px-4 pb-6 pt-3 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-amber-500 to-amber-500 text-white font-black text-sm text-center shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 active:scale-[0.97] transition-transform"
                >
                  <Zap className="w-4 h-4" />
                  <span>Get Instant Quote</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="py-3 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center gap-2 border border-slate-200/80 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-red-500" />
                    <span>Call</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Lemis%20Electronics.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-[10px] text-slate-400 text-center pt-1">
                  Direct Manufacturer — LED & Solar Lights
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
