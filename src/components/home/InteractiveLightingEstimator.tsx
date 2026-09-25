"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  Lightbulb, 
  Layers, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Sun, 
  Building2, 
  Warehouse, 
  Factory, 
  Compass, 
  SlidersHorizontal 
} from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { COMPANY_INFO } from "@/lib/constants";
import MagneticButton from "@/components/ui/MagneticButton";

interface SpacePreset {
  id: string;
  name: string;
  category: string;
  targetLux: number;
  icon: React.ComponentType<{ className?: string }>;
  recommendedFixture: string;
  wattage: number;
  fixtureLumens: number;
  defaultHeight: number;
  suggestedCCT: number;
  description: string;
}

const SPACE_PRESETS: SpacePreset[] = [
  {
    id: "factory",
    name: "Industrial Factory Floor",
    category: "Industrial High Bay",
    targetLux: 500,
    icon: Factory,
    recommendedFixture: "150W LED High Bay UFO (Die-Cast)",
    wattage: 150,
    fixtureLumens: 21000,
    defaultHeight: 22,
    suggestedCCT: 6500,
    description: "High-lux precision illumination engineered for assembly lines, metal fabrication, and machinery operations.",
  },
  {
    id: "warehouse",
    name: "Warehouse & Logistics",
    category: "High Bay Luminaires",
    targetLux: 300,
    icon: Warehouse,
    recommendedFixture: "100W High Bay Industrial Luminaire",
    wattage: 100,
    fixtureLumens: 14000,
    defaultHeight: 20,
    suggestedCCT: 6500,
    description: "Uniform aisle illumination with minimal glare for forklift operators and inventory racking.",
  },
  {
    id: "commercial",
    name: "Commercial Office / Co-Working",
    category: "Downlights & Profiles",
    targetLux: 400,
    icon: Building2,
    recommendedFixture: "18W Rimless Downlight & Profile Assemblies",
    wattage: 18,
    fixtureLumens: 2160,
    defaultHeight: 10,
    suggestedCCT: 4000,
    description: "Glare-free architectural lighting with high CRI (Ra > 85) for productivity and eye comfort.",
  },
  {
    id: "outdoor",
    name: "Outdoor Yard / Parking / Security",
    category: "LED Flood Lights",
    targetLux: 150,
    icon: Compass,
    recommendedFixture: "100W IP66 Heavy Die-Cast Flood Light",
    wattage: 100,
    fixtureLumens: 13500,
    defaultHeight: 18,
    suggestedCCT: 6500,
    description: "Wide optical beam distribution for comprehensive night security and perimeter visibility.",
  },
  {
    id: "street",
    name: "Internal Roadway / Solar Street",
    category: "Solar Street Lights",
    targetLux: 50,
    icon: Sun,
    recommendedFixture: "60W All-In-One Solar Street Light",
    wattage: 60,
    fixtureLumens: 7800,
    defaultHeight: 16,
    suggestedCCT: 6500,
    description: "Zero grid dependency, dusk-to-dawn autonomous illumination for township and industrial access roads.",
  },
];

const CCT_OPTIONS = [
  { kelvin: 3000, label: "3000K Warm White", glowColor: "from-amber-400/40 via-amber-300/20 to-transparent", textColor: "text-amber-600", dot: "#f59e0b" },
  { kelvin: 4000, label: "4000K Natural Day", glowColor: "from-yellow-200/50 via-amber-100/20 to-transparent", textColor: "text-amber-700", dot: "#fbbf24" },
  { kelvin: 6500, label: "6500K Cool White", glowColor: "from-sky-300/50 via-sky-100/25 to-transparent", textColor: "text-sky-600", dot: "#38bdf8" },
];

export default function InteractiveLightingEstimator() {
  const { openQuoteModal } = useQuoteModal();

  const [selectedSpaceId, setSelectedSpaceId] = useState("factory");
  const [areaSqFt, setAreaSqFt] = useState(5000);
  const [heightFt, setHeightFt] = useState(20);
  const [selectedCCT, setSelectedCCT] = useState(6500);

  const activePreset = useMemo(
    () => SPACE_PRESETS.find((p) => p.id === selectedSpaceId) || SPACE_PRESETS[0],
    [selectedSpaceId]
  );

  // Optical calculations based on lumen method (CU ~0.6, LLF ~0.8)
  const calculation = useMemo(() => {
    const areaSqMeters = areaSqFt * 0.092903;
    // Total raw lumens needed = (Target Lux * Area in m2) / (Coeff of Utilization * Light Loss Factor)
    const utilizationFactor = heightFt > 20 ? 0.52 : 0.65;
    const lightLossFactor = 0.8;
    const totalLumensNeeded = (activePreset.targetLux * areaSqMeters) / (utilizationFactor * lightLossFactor);

    // Number of fixtures
    const count = Math.max(1, Math.round(totalLumensNeeded / activePreset.fixtureLumens));
    const totalWatts = count * activePreset.wattage;
    const traditionalHalideWatts = count * (activePreset.wattage * 2.8);
    const estimatedMonthlySavingsKWh = Math.round(((traditionalHalideWatts - totalWatts) * 12 * 30) / 1000);

    return {
      count,
      totalWatts,
      totalLumensNeeded: Math.round(totalLumensNeeded),
      estimatedMonthlySavingsKWh,
    };
  }, [areaSqFt, heightFt, activePreset]);

  const activeCCTData = useMemo(
    () => CCT_OPTIONS.find((c) => c.kelvin === selectedCCT) || CCT_OPTIONS[2],
    [selectedCCT]
  );

  const handleQuoteClick = () => {
    const contextNote = `${activePreset.recommendedFixture} (${calculation.count} units calculated for ${areaSqFt} sq.ft @ ${heightFt}ft height, ${selectedCCT}K)`;
    openQuoteModal(contextNote);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello Lemis Electronics, I used your Lighting Estimator for my project:\n• Project Type: ${activePreset.name}\n• Area: ${areaSqFt.toLocaleString()} sq.ft (Ceiling Height: ${heightFt} ft)\n• Recommended Fixture: ${activePreset.recommendedFixture}\n• Estimated Quantity: ${calculation.count} units (${selectedCCT}K)\n\nPlease share commercial project rates and technical data sheets.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Grid Texture */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:32px_32px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Engineering Tool</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight">
            Quick Project Lighting Estimator
          </h2>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
            Estimate recommended target lux, optimal fixture wattages, and required unit counts for your project area in real time.
          </p>
        </div>

        {/* Main Interactive Workstation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-7 bg-white p-5 sm:p-7 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            {/* 1. Space Type Selection Chips */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">1</span>
                  Select Application Space:
                </label>
                <span className="text-[11px] text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Target: {activePreset.targetLux} Lux
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SPACE_PRESETS.map((preset) => {
                  const Icon = preset.icon;
                  const isSelected = selectedSpaceId === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => {
                        setSelectedSpaceId(preset.id);
                        setHeightFt(preset.defaultHeight);
                        setSelectedCCT(preset.suggestedCCT);
                      }}
                      className={`p-3 rounded-xl border text-left flex items-start gap-3 transition-all ${
                        isSelected
                          ? "bg-amber-50/80 border-amber-400 ring-1 ring-amber-400 shadow-xs"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${isSelected ? "bg-amber-500 text-slate-950" : "bg-white text-slate-600 border border-slate-200"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {preset.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {preset.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Area Size Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">2</span>
                  Total Floor Area:
                </label>
                <div className="text-right">
                  <span className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    {areaSqFt.toLocaleString()}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">sq.ft (~{Math.round(areaSqFt * 0.0929)} m²)</span>
                </div>
              </div>

              <input
                type="range"
                min={500}
                max={30000}
                step={250}
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              {/* Quick Area Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {[1000, 2500, 5000, 10000, 20000].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAreaSqFt(val)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                      areaSqFt === val
                        ? "bg-slate-900 text-white"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {val.toLocaleString()} sq.ft
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Ceiling / Mounting Height Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">3</span>
                  Mounting / Ceiling Height:
                </label>
                <div>
                  <span className="text-base sm:text-lg font-black text-slate-900 font-heading">
                    {heightFt}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">feet (~{(heightFt * 0.3048).toFixed(1)}m)</span>
                </div>
              </div>

              <input
                type="range"
                min={8}
                max={35}
                step={1}
                value={heightFt}
                onChange={(e) => setHeightFt(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />

              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>8 ft (Low Ceiling)</span>
                <span>18 ft (Medium Bay)</span>
                <span>35 ft (High Bay Industrial)</span>
              </div>
            </div>

            {/* 4. Interactive Color Temperature (CCT) Switcher */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-[10px] font-black">4</span>
                  Color Temperature (CCT):
                </label>
                <span className={`text-xs font-bold ${activeCCTData.textColor}`}>
                  {activeCCTData.label}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {CCT_OPTIONS.map((cct) => {
                  const isCCTActive = selectedCCT === cct.kelvin;
                  return (
                    <button
                      key={cct.kelvin}
                      type="button"
                      onClick={() => setSelectedCCT(cct.kelvin)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1 ${
                        isCCTActive
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                          : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/40 shadow-xs"
                        style={{ backgroundColor: cct.dot }}
                      />
                      <span className="text-xs font-bold">{cct.kelvin}K</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Output & Simulation Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-md p-5 sm:p-7 space-y-5 relative overflow-hidden flex flex-col justify-between">
            
            {/* Top Amber Accent Line */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-sky-400" />

            <div>
              {/* Card Title */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 block">
                    Engineering Result
                  </span>
                  <h3 className="text-lg font-black text-slate-900 font-heading">
                    Recommended Lighting Solution
                  </h3>
                </div>
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
                  <Lightbulb className="w-5 h-5" />
                </div>
              </div>

              {/* Interactive Beam Simulation Preview Box */}
              <div className="relative mt-4 mb-4 p-4 rounded-2xl bg-slate-950 text-white overflow-hidden text-center">
                {/* Simulated light cone from top down */}
                <div 
                  className={`pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 w-48 h-40 bg-gradient-to-b ${activeCCTData.glowColor} blur-2xl transition-all duration-500`}
                />

                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                    Estimated Fixture Requirement
                  </span>
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-4xl sm:text-5xl font-black font-heading text-white">
                      {calculation.count}
                    </span>
                    <span className="text-sm font-bold text-slate-300">Units</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium pt-1">
                    {activePreset.recommendedFixture}
                  </p>
                </div>
              </div>

              {/* Technical Readouts */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Target Lux</span>
                  <span className="text-sm font-black text-slate-900">{activePreset.targetLux} Lux</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Total Load</span>
                  <span className="text-sm font-black text-slate-900">{calculation.totalWatts.toLocaleString()} Watts</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Lumen Package</span>
                  <span className="text-sm font-black text-slate-900">{calculation.totalLumensNeeded.toLocaleString()} lm</span>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[10px] text-emerald-700 font-bold uppercase block">Est. Energy Saved</span>
                  <span className="text-sm font-black text-emerald-800">~65% vs HID</span>
                </div>
              </div>

              {/* Application Guidance */}
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                {activePreset.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <MagneticButton
                onClick={handleQuoteClick}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Request Project Quote for This Result</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>

              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Discuss This Calculation on WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

        {/* Disclaimer / Contractor Support Footer */}
        <div className="mt-8 text-center text-xs text-slate-500">
          * Calculated values represent general recommended optical levels as per standard illumination guidelines. Custom photometric DIALux reports available upon contractor BOQ submission.
        </div>

      </div>
    </section>
  );
}
