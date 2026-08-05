"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { Sparkles, Trash2, CheckCircle2 } from "lucide-react";

export default function Cleanliness() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchOrMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleTouchOrMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleTouchOrMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="cleanliness" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Interactive Before/After Housekeeping Slider */}
          <div className="lg:col-span-6 flex flex-col justify-center items-center">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold mb-4 self-start lg:hidden">
              Interactive View
            </span>
            
            {/* Slider Container */}
            <div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[320px] md:h-[400px] rounded-luxury overflow-hidden shadow-luxury border border-slate-200/20 dark:border-white/5 cursor-ew-resize select-none"
            >
              {/* Image 1: Cleaned Spotless Room (Base) */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={IMAGES.single_sharing}
                  alt="Spotless clean room suite after housekeeping"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-6 right-6 glass-panel px-3.5 py-1.5 rounded-full border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <CheckCircle2 size={12} />
                  After: Spotless Clean
                </div>
              </div>

              {/* Image 2: Faded/Dimmed Uncleaned Room (Overlay - Sliced) */}
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <div className="absolute inset-0 w-[50vw] h-full" style={{ width: "100%", minWidth: containerRef.current?.getBoundingClientRect().width }}>
                  <Image
                    src={IMAGES.single_sharing}
                    alt="Uncleaned room before housekeeping"
                    fill
                    className="object-cover grayscale brightness-50"
                  />
                </div>
                <div className="absolute top-6 left-6 glass-panel px-3.5 py-1.5 rounded-full border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Trash2 size={12} />
                  Before Housekeeping
                </div>
              </div>

              {/* Sliding Separator Line */}
              <div
                className="absolute inset-y-0 w-1 bg-gold pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* gold drag handle */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-slate-950 flex items-center justify-center shadow-lg border-2 border-white pointer-events-none">
                  <Sparkles size={14} className="animate-pulse" />
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-4">
              ← Drag or Move Mouse to slide before/after →
            </p>
          </div>

          {/* Right Column: Copywriting and Bullet Items */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
              Hygiene Standards
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Clean Spaces. <br />
              <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
                Better Living.
              </span>
            </h2>
            <p className="mt-6 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Daily housekeeping and regular maintenance ensure that every room and common area remains fresh, organized, and welcoming. We prioritize meticulous cleaning guidelines so residents can focus entirely on study and career progress in a sanitarily secure sanctuary.
            </p>

            {/* checklist items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Daily Suite Sweeping & Dusting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Weekly Deep Washroom Disinfection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Daily Kitchen Sanitization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                <span className="text-xs md:text-sm font-bold text-slate-700 dark:text-slate-300">Professional Waste Management</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
