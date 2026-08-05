"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { Coffee, Utensils, Heart } from "lucide-react";

export default function Food() {
  const highlights = [
    {
      icon: <Utensils size={20} />,
      title: "Fresh & Hygienic Prep",
      desc: "Cooked daily in an open, sanitarily maintained kitchen using premium ingredients."
    },
    {
      icon: <Heart size={20} />,
      title: "Nutritious & homelike",
      desc: "Balanced recipes low in artificial colors and heavy oils, designed for daily wellness."
    },
    {
      icon: <Coffee size={20} />,
      title: "Spacious Dining Lounge",
      desc: "An upscale shared dining area equipped with RO water dispensers and hand washing bays."
    }
  ];

  return (
    <section id="food" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Description & Bullet Features */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
              Catering Services
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Healthy Home-Style Meals
            </h2>
            <p className="mt-6 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Residents enjoy freshly prepared, hygienic, and delicious meals served daily in a clean dining environment. Our focus is on quality, nutrition, and consistency, making every meal feel like home. We support varied menu selections to cater to both corporate employees and university students.
            </p>

            {/* highlights list */}
            <div className="flex flex-col gap-6 mt-8 w-full">
              {highlights.map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="p-3 bg-amber-500/10 text-gold rounded-xl border border-gold/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Collages of Gourmet dining */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 grid grid-cols-2 gap-4 h-[350px] md:h-[450px] lg:h-[500px]"
          >
            {/* Left large food photo */}
            <div className="relative rounded-luxury overflow-hidden h-full shadow-luxury group border border-white/5">
              <Image
                src={IMAGES.food}
                alt="Premium Catering Plated Food"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 rounded-full text-[9px] font-black uppercase text-white border border-white/10 shadow-md">
                Gourmet Servings
              </div>
            </div>

            {/* Right stack: dining hall & kitchen */}
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative rounded-luxury overflow-hidden shadow-luxury group border border-white/5">
                <Image
                  src={IMAGES.dining_hall}
                  alt="Elite Dining Space"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 rounded-full text-[9px] font-black uppercase text-white border border-white/10 shadow-md">
                  Dining Hall
                </div>
              </div>

              <div className="relative rounded-luxury overflow-hidden shadow-luxury group border border-white/5">
                <Image
                  src={IMAGES.kitchen}
                  alt="Clean kitchen counters"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-4 left-4 glass-panel px-3 py-1 rounded-full text-[9px] font-black uppercase text-white border border-white/10 shadow-md">
                  Hygienic Kitchen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
