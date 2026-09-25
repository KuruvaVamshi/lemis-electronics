"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { GalleryItem } from "@/data/gallery";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function LightboxModal({ item, onClose, onNext, onPrev }: LightboxModalProps) {
  const { openQuoteModal } = useQuoteModal();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && onNext) onNext();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
    };
    if (item) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-md">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Content Box */}
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-4xl w-full flex flex-col items-center max-h-[90vh] overflow-hidden"
        >
          <div className="relative w-full h-[55vh] sm:h-[65vh] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-slate-950">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>

          {/* Details Bar */}
          <div className="w-full mt-4 p-4 rounded-xl bg-slate-900/95 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {item.categoryLabel}
              </span>
              <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                {item.caption}
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                openQuoteModal(item.title);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors whitespace-nowrap active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire This Fixture</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
