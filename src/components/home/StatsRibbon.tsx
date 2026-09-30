"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { Factory, Users, MapPin, Award } from "lucide-react";

const STATS = [
  {
    icon: Factory,
    value: 5,
    suffix: "+",
    label: "Years Manufacturing",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Contractors Served",
  },
  {
    icon: MapPin,
    value: 15,
    suffix: "+",
    label: "States Pan-India",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Made in India",
  },
];

export default function StatsRibbon() {
  return (
    <section className="py-10 lg:py-14 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                }}
                className="relative text-center p-6 sm:p-8 rounded-2xl bg-slate-800/60 border border-slate-700/50 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Accent bar on hover (Varaahi commitment-card pattern) */}
                <div className="absolute top-0 left-0 w-full h-[3px] rounded-t-2xl bg-amber-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-1">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
