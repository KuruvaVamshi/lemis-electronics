import React from "react";
import HeroSection from "@/components/home/HeroSection";
import TrustIntroSection from "@/components/home/TrustIntroSection";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import FeaturedProductsSection from "@/components/home/FeaturedProductsSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import WhyLemisSection from "@/components/home/WhyLemisSection";
import BulkProjectOrdersSection from "@/components/home/BulkProjectOrdersSection";
import EnquiryProcessSection from "@/components/home/EnquiryProcessSection";
import ProductGallerySection from "@/components/home/ProductGallerySection";
import LeadGenBannerSection from "@/components/home/LeadGenBannerSection";
import FaqSection from "@/components/home/FaqSection";
import ContactSection from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <HeroSection />

      {/* SECTION 2 — TRUST / BUSINESS INTRO */}
      <TrustIntroSection />

      {/* SECTION 3 — PRODUCT CATEGORIES */}
      <ProductCategoriesSection />

      {/* SECTION 4 — FEATURED PRODUCTS */}
      <FeaturedProductsSection />

      {/* SECTION 5 — INDUSTRIES / APPLICATIONS */}
      <ApplicationsSection />

      {/* SECTION 6 — WHY LEMIS */}
      <WhyLemisSection />

      {/* SECTION 7 — BULK & PROJECT ORDERS */}
      <BulkProjectOrdersSection />

      {/* SECTION 8 — PRODUCT ENQUIRY PROCESS */}
      <EnquiryProcessSection />

      {/* SECTION 9 — PRODUCT GALLERY */}
      <ProductGallerySection />

      {/* SECTION 10 — LEAD GENERATION CTA */}
      <LeadGenBannerSection />

      {/* SECTION 11 — FAQ */}
      <FaqSection />

      {/* SECTION 12 — CONTACT */}
      <ContactSection />
    </>
  );
}
