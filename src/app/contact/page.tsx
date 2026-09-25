import React from "react";
import ContactSection from "@/components/home/ContactSection";
import FaqSection from "@/components/home/FaqSection";

export const metadata = {
  title: "Contact Us | Lemis Electronics",
  description:
    "Get in touch with Lemis Electronics for LED and solar lighting inquiries, project quotations, dealer partnerships, and bulk orders.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <ContactSection />
      <FaqSection />
    </div>
  );
}
