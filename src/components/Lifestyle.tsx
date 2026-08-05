"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { MessageSquareCode, Trophy, Users, Coffee } from "lucide-react";

interface LifestyleCard {
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  tag: string;
}

const LIFESTYLE_CARDS: LifestyleCard[] = [
  {
    title: "Vibrant Social Community",
    subtitle: "Rooftop acoustic nights, professional mixers, and festival dinners.",
    image: IMAGES.community_area,
    icon: <Users className="text-gold" size={20} />,
    tag: "Social"
  },
  {
    title: "Premium Workspaces",
    subtitle: "High speed mesh WiFi, ergonomic study desk suites, and free filter coffee.",
    image: IMAGES.study_area,
    icon: <Coffee className="text-gold" size={20} />,
    tag: "Productivity"
  },
  {
    title: "State-of-the-Art Gaming",
    subtitle: "PlayStation setups, board games, and pool tables in our lounge.",
    image: IMAGES.common_lounge,
    icon: <Trophy className="text-gold" size={20} />,
    tag: "Recreation"
  },
  {
    title: "Curated Comfort & Wellness",
    subtitle: "Healthy chef-cooked meals, modern gym equipment, and yoga space.",
    image: IMAGES.food,
    icon: <MessageSquareCode className="text-gold" size={20} />,
    tag: "Wellness"
  }
];

export default function Lifestyle() {
  return (
    <section id="lifestyle" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            The Lifestyle Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            More Than Just Accommodation
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            UK Premium Co-Living is built around creating a comfortable community where residents can study, work, relax, and build meaningful friendships in a peaceful environment.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LIFESTYLE_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group rounded-luxury overflow-hidden h-[300px] md:h-[400px] shadow-luxury border border-slate-200/5 dark:border-white/5 cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* High-end Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-950/10 opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

              {/* Luxury Accent Glow Border */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-gold/30 rounded-luxury transition-colors duration-500 pointer-events-none z-10" />

              {/* Tag in top-left */}
              <div className="absolute top-6 left-6 z-10">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold bg-slate-950/70 border border-gold/20 px-3 py-1.5 rounded-full backdrop-blur-md">
                  {card.tag}
                </span>
              </div>

              {/* Content bottom-left */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-white">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-950/60 rounded-xl border border-white/10 backdrop-blur-md">
                    {card.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-300 font-light mt-3 leading-relaxed max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {card.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
