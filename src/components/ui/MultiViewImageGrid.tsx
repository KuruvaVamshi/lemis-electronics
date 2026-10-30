"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface MultiViewImageGridProps {
  src: string;
  alt: string;
}

export default function MultiViewImageGrid({ src, alt }: MultiViewImageGridProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="w-full space-y-4">
      {/* 
        The product images are actually full cohesive infographic posters 
        rather than uniform multi-part grids. Displaying them as a single 
        high-quality view with zoom capabilities provides the best experience 
        without arbitrarily cutting text or images in half.
      */}
      <div 
        className="relative w-full rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md group transition-all duration-300 cursor-zoom-in"
        onClick={() => setIsZoomed(!isZoomed)}
        style={{ aspectRatio: "1536 / 1024" }}
      >
        <motion.div
          animate={{ scale: isZoomed ? 1.5 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transformOrigin: "center center",
          }}
        />

        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 text-slate-800 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0">
            {isZoomed ? (
              <>
                <ZoomOut className="w-4 h-4" />
                <span className="text-sm font-medium">Click to zoom out</span>
              </>
            ) : (
              <>
                <ZoomIn className="w-4 h-4" />
                <span className="text-sm font-medium">Click to zoom in</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-between px-2 text-sm text-slate-500">
        <p className="flex items-center gap-1.5">
          <Maximize2 className="w-4 h-4" />
          <span>High-resolution product infographic</span>
        </p>
      </div>
    </div>
  );
}
