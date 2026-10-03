"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/gallery";
import LightboxModal from "@/components/ui/LightboxModal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TABS = [
  { id: "all", label: "All Fixtures" },
  { id: "outdoor", label: "Outdoor & Flood" },
  { id: "industrial", label: "Industrial High Bay" },
  { id: "solar", label: "Solar Lighting" },
  { id: "indoor", label: "Indoor & Profiles" },
];

export default function ProductGallerySection() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeTab === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleNext = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  const handlePrev = () => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((i) => i.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-12 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/70 px-2.5 py-0.5 rounded-full">
              Visual Showcase
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 font-heading tracking-tight mt-1.5">
              Lighting Products & Installations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Explore our manufactured lighting assemblies, finished fixtures, and project installations. Tap any image to enlarge.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-xs self-start md:self-auto">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-slate-950 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Swiper 3D Gallery Carousel */}
        <div className="relative mt-8">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 150,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-full pt-4 pb-12"
          >
            {filteredItems.map((item) => (
              <SwiperSlide key={item.id} className="w-[280px] sm:w-[350px] md:w-[450px]">
                <div
                  onClick={() => setActiveItem(item)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 cursor-pointer shadow-xl"
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-sm text-slate-800 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <Maximize2 className="w-4 h-4 text-amber-600" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                        {item.categoryLabel}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-white font-heading">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation */}
          <div className="flex items-center justify-center gap-4 mt-2">
            <button className="swiper-button-prev-custom w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 shadow-sm transition-all z-10 cursor-pointer">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="swiper-custom-pagination flex items-center justify-center gap-1.5 z-10" />
            <button className="swiper-button-next-custom w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-amber-600 hover:border-amber-300 shadow-sm transition-all z-10 cursor-pointer">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
}
