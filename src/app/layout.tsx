import type { Metadata, Viewport } from "next";
import "./globals.css";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import WhatsAppFloatingBtn from "@/components/layout/WhatsAppFloatingBtn";
import QuoteModal from "@/components/ui/QuoteModal";
import { COMPANY_INFO } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: `${COMPANY_INFO.name} | LED & Solar Lighting Manufacturer`,
    template: `%s | ${COMPANY_INFO.name}`,
  },
  description:
    "Manufacturer of all kinds of LED and Solar Lights for industrial plants, commercial buildings, roads, apartments and infrastructure projects. Bulk order supply, competitive quotations, and custom lighting manufacturing.",
  keywords: [
    "LED lights manufacturer",
    "LED lighting manufacturer",
    "LED lights supplier",
    "LED flood lights",
    "LED street lights",
    "solar street lights",
    "LED high bay lights",
    "LED down lights",
    "LED profile lights",
    "solar lighting solutions",
    "LED lighting supplier",
    "LED lighting manufacturer Hyderabad",
    "commercial lighting bulk supplier",
    "industrial lighting manufacturer",
  ],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  metadataBase: new URL("https://lemiselectronics.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lemiselectronics.com",
    title: `${COMPANY_INFO.name} | Manufacturers of All Kinds of LED and Solar Lights`,
    description:
      "Reliable LED & Solar Lighting solutions for contractors, builders, industrial plants, and commercial developments. Get direct manufacturer quotations.",
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/products/hero-lighting-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Lemis Electronics Industrial LED and Solar Lighting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY_INFO.name} | LED & Solar Lights Manufacturer`,
    description:
      "High-power LED flood lights, solar street lights, high bay lights and architectural luminaires.",
    images: ["/products/hero-lighting-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 pb-16 sm:pb-0">
        <QuoteModalProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileBottomBar />
          <WhatsAppFloatingBtn />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
