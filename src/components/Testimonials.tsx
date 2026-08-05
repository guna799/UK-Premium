"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
  image: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rithika Donthula",
    role: "Verified Resident Review",
    comment: "Excellent facilities with a comfortable environment. Rooms are clean and well-maintained, Wi-Fi works perfectly, management is supportive, and the atmosphere is safe and peaceful. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Divya Ashok",
    role: "Verified Resident Review",
    comment: "Really good PG. Food is very good and homely. The property is neat and clean. All amenities work properly. Staff are friendly and supportive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    name: "Divya Gayathri",
    role: "Verified Resident Review",
    comment: "Tasty and hygienic food. Rooms and common areas are clean and well maintained. Wi-Fi works without issues and the people here are friendly and supportive.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prev => (prev > 0 ? prev - 1 : TESTIMONIALS.length - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev < TESTIMONIALS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Real Resident Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Google Reviews & Ratings
          </h2>
          
          {/* Real overall score rating display */}
          <div className="flex items-center gap-3 mt-6 p-3 rounded-2xl glass-panel border border-gold/20 shadow-sm">
            <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">5.0</span>
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" className="stroke-none" />
              ))}
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              27 Google Reviews
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative quote icon */}
          <div className="absolute -top-10 -left-6 md:-left-12 text-gold/10 pointer-events-none select-none">
            <Quote size={120} className="stroke-[1.5]" />
          </div>

          <div className="min-h-[250px] relative flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
                className="glass-panel p-8 md:p-12 rounded-luxury shadow-luxury border border-slate-200/5 dark:border-white/5"
              >
                {/* Rating */}
                <div className="flex text-gold mb-6">
                  {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="stroke-none" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-base md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed font-light italic">
                  "{TESTIMONIALS[activeIndex].comment}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 mt-8 border-t border-slate-200/20 dark:border-white/5 pt-6">
                  {/* Profile photo */}
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold/40">
                    <img
                      src={TESTIMONIALS[activeIndex].image}
                      alt={TESTIMONIALS[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white leading-none">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 font-medium">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-end gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 hover:text-gold rounded-full transition-colors cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-semibold text-slate-500 tracking-wider">
              {activeIndex + 1} / {TESTIMONIALS.length}
            </span>
            <button
              onClick={handleNext}
              className="p-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-white/5 hover:text-gold rounded-full transition-colors cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
