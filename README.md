# Lemis Electronics — LED & Solar Lighting Manufacturer

> **"Manufacturers of All Kinds of LED and Solar Lights"**  
> Direct B2B manufacturer and bulk supplier for electrical contractors, builders, industrial plants, infrastructure projects, and commercial developments.

---

## 🌟 Overview

**LEMIS ELECTRONICS** is an Indian manufacturer specializing in high-performance, industrial-grade LED luminaires and standalone off-grid solar lighting systems. The website is engineered primarily for **B2B lead generation, project BOQ estimation, dealer inquiries, direct phone calls, and instant WhatsApp communication**.

Designed with a **clean, modern light theme** and a **Swiggy/Zomato-inspired mobile-first UX** featuring horizontal category exploration rails, floating bottom action docks, and tap-friendly bottom-sheet quotation workflows.

---

## 🚀 Key Features

* **Mobile-First Experience (Swiggy / Zomato Pattern)**:
  * **Horizontal Quick-Category Rail**: Instant horizontal scroll for fast navigation across all 12 lighting categories.
  * **Floating Action Dock**: Always-accessible bottom bar on mobile with direct buttons: `[Call]`, `[WhatsApp]`, and `[Get Quote]`.
  * **Mobile Bottom Sheet Modal**: Smooth upward sliding drawer with quick quantity preset chips (`10-25 pcs`, `50 pcs`, `100 pcs`, `250+ pcs`, `Project BOQ`).
* **High-Conversion B2B Workflows**:
  * Project BOQ upload and quotation forms with dual submission (Website Lead DB + WhatsApp auto-filled text).
  * Direct factory calling and WhatsApp chat links with tailored enquiry messages.
* **Product Catalog & Dynamic Pages**:
  * 12 lighting categories: LED Flood Lights, LED High Bay Lights, Solar Street Lights, LED Street Lights, Rimless Downlights, Aluminium Profile Lights, Canopy Lights, Track Lights, Strip Lights, Panel Lights, Garden Bollards, and Bulk Project Supplies.
  * Full technical specification tables for engineers and architects.
  * Real-world application breakdown (factories, warehouses, sports arenas, roadways, commercial offices).
* **Engineering & Motion Quality**:
  * Clean industrial light theme with subtle amber/gold accents.
  * Accessibility-first design with `prefers-reduced-motion` compliance.
  * Compositor-only hardware-accelerated animations via Framer Motion.
  * Zero placeholder mockups — authentic product imagery.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 14](https://nextjs.org/) (App Router, SSG & Server Components)
* **Language**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom Design Tokens
* **Animations**: [Framer Motion](https://www.framer.com/motion/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Fonts**: Inter & Plus Jakarta Sans via Google Fonts

---

## 📦 Project Structure

```text
├── public/
│   ├── applications/      # Sector and installation photography
│   └── products/          # Manufactured fixture photography
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # Manufacturing story & quality standards
│   │   ├── applications/  # Application-specific solutions
│   │   ├── contact/       # Sales desk, maps & contact forms
│   │   ├── products/      # Catalog & dynamic [slug] product pages
│   │   ├── projects/      # Commercial BOQ supply & contractor partnerships
│   │   ├── why-lemis/     # Manufacturer advantages & build quality
│   │   ├── globals.css    # Design system tokens & utility classes
│   │   └── layout.tsx     # Root layout with providers & sticky header/dock
│   ├── components/
│   │   ├── home/          # Homepage section components
│   │   ├── layout/        # Header, Footer, MobileBottomBar, WhatsApp
│   │   └── ui/            # QuoteModal, LightboxModal
│   ├── context/           # QuoteModalContext for universal quote prefilling
│   ├── data/              # Single source of truth for products, FAQs, etc.
│   └── lib/               # Constants, utility functions & WhatsApp formatters
└── package.json
```

---

## 💻 Getting Started Locally

### Prerequisites

* Node.js 18+ installed on your machine
* npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/KuruvaVamshi/lemis-electronics.git

# Navigate to project directory
cd lemis-electronics

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
# Generate optimized static production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License & Ownership

© 2026 **LEMIS ELECTRONICS**. All rights reserved.  
*Manufacturers of All Kinds of LED and Solar Lights.*
