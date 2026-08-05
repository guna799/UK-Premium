"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { Maximize2 } from "lucide-react";

interface ShowcaseItem {
  title: string;
  category: string;
  image: string;
  gridClass: string;
}

const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    title: "Architectural Exterior",
    category: "Facade & Lighting",
    image: IMAGES.hero_exterior,
    gridClass: "md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 h-[400px] md:h-[620px]"
  },
  {
    title: "Grand Reception",
    category: "Lobby & Welcome Desk",
    image: IMAGES.reception,
    gridClass: "md:col-span-1 lg:col-span-1 h-[290px]"
  },
  {
    title: "Aman-Inspired Lobby",
    category: "Common Area Lounge",
    image: IMAGES.lobby,
    gridClass: "md:col-span-1 lg:col-span-1 h-[290px]"
  },
  {
    title: "Gourmet Kitchen",
    category: "Shared Culinary Zone",
    image: IMAGES.kitchen,
    gridClass: "md:col-span-2 lg:col-span-2 h-[300px]"
  },
  {
    title: "Rooftop Terrace Garden",
    category: "Sky Deck Lounge",
    image: IMAGES.terrace,
    gridClass: "md:col-span-1 lg:col-span-1 lg:row-span-2 h-[290px] lg:h-[620px]"
  },
  {
    title: "Executive Dining Hall",
    category: "Gourmet Dining",
    image: IMAGES.dining_hall,
    gridClass: "md:col-span-1 lg:col-span-1 h-[290px]"
  },
  {
    title: "Premium Washroom",
    category: "En-suite Bath",
    image: IMAGES.washroom,
    gridClass: "md:col-span-1 lg:col-span-1 h-[300px]"
  },
  {
    title: "Modern Smart Laundry",
    category: "Utility Zone",
    image: IMAGES.laundry,
    gridClass: "md:col-span-1 lg:col-span-1 h-[300px]"
  }
];

export default function ImageShowcase() {
  return (
    <section id="showcase" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Luxury Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Bespoke Architecture & <br />
            <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
              Sophisticated Spaces
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            Every square inch of UK Premium Co-Living has been conceptualized by elite designers to ensure maximum productivity, premium comfort, and absolute style.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {SHOWCASE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-luxury group cursor-pointer shadow-luxury border border-slate-200/5 dark:border-white/5 ${item.gridClass}`}
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* High-end Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Light glow border effect */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/30 rounded-luxury transition-colors duration-500 z-10 pointer-events-none" />

              {/* Text & Icon overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-amber-500/10 border border-gold/20 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Curated luxury for modern professionals.
                  </p>
                </div>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Maximize2 size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
