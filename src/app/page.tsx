import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustIntroSection from "@/components/home/TrustIntroSection";
import MarqueeSection from "@/components/home/MarqueeSection";
import StatsRibbon from "@/components/home/StatsRibbon";
import HorizontalServicesSection from "@/components/home/HorizontalServicesSection";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import InteractiveProjectsSection from "@/components/home/InteractiveProjectsSection";
import WhyLemisSection from "@/components/home/WhyLemisSection";
import BulkProjectOrdersSection from "@/components/home/BulkProjectOrdersSection";
import AnimatedProcessSection from "@/components/home/AnimatedProcessSection";
import ProductGallerySection from "@/components/home/ProductGallerySection";
import LeadGenBannerSection from "@/components/home/LeadGenBannerSection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";
import ExclusiveAdvertisingSection from "@/components/home/ExclusiveAdvertisingSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* INFINITE SCROLL MARQUEE */}
      <MarqueeSection />

      {/* STATS RIBBON — Animated counters */}
      <StatsRibbon />

      {/* SECTION 2 — TRUST / BUSINESS INTRO */}
      <TrustIntroSection />

      {/* SECTION 3 — ★ HORIZONTAL SCROLL SERVICES SHOWCASE (Signature Move) */}
      <HorizontalServicesSection />

      {/* SECTION 4 — PRODUCT CATEGORIES */}
      <ProductCategoriesSection />

      {/* SECTION 5 — FEATURED PRODUCTS (with Spotlight beam & wattage selector) */}
      <FeaturedProductsSection />

      {/* SECTION 6 — ★ INTERACTIVE PROJECTS SHOWCASE (Animated Carousel) */}
      <InteractiveProjectsSection />

      {/* SECTION 7 — WHY LEMIS */}
      <WhyLemisSection />

      {/* SECTION 7.5 — EXCLUSIVE ADVERTISING (NEW IMAGES) */}
      <ExclusiveAdvertisingSection />

      {/* SECTION 8 — BULK & PROJECT ORDERS */}
      <BulkProjectOrdersSection />

      {/* SECTION 9 — ★ ANIMATED PROCESS (SVG Path Draw + Scroll-Driven) */}
      <AnimatedProcessSection />

      {/* SECTION 10 — PRODUCT GALLERY */}
      <ProductGallerySection />

      {/* SECTION 11 — LEAD GENERATION CTA */}
      <LeadGenBannerSection />

      {/* SECTION 12 — FAQ */}
      <FaqSection />

      {/* SECTION 13 — CONTACT */}
      <ContactSection />
    </>
  );
}
