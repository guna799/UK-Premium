"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { Award, Compass, Heart, Users } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <Compass className="text-gold" size={24} />,
      title: "Apple-Grade Design",
      desc: "Clean layout architecture, premium walnut finishes, and hidden storage for minimalist aesthetics."
    },
    {
      icon: <Award className="text-gold" size={24} />,
      title: "Marriott Hospitality",
      desc: "Concierge support, seamless professional cleaning, high-speed laundry, and premium maintenance."
    },
    {
      icon: <Users className="text-gold" size={24} />,
      title: "Elite Community",
      desc: "Network with tech founders, designers, consultants, and software engineers in a premium setting."
    },
    {
      icon: <Heart className="text-gold" size={24} />,
      title: "Bespoke Wellness",
      desc: "Rooftop terrace gardens, dynamic recreation setups, and curated gaming lounges to unwind."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Image with Luxury Frame & Glow */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-luxury overflow-hidden group shadow-luxury border border-slate-200/5 dark:border-white/5"
          >
            {/* Image zoom effect */}
            <Image
              src={IMAGES.lobby}
              alt="Luxury Co-Living Interior Common Area"
              fill
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Aesthetic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full border border-white/10 text-xs font-semibold tracking-wider text-white">
              Aman Resorts Inspired Lounge
            </div>
          </motion.div>

          {/* Right Column: Title and Descriptions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
              About the Property
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Premium Living <br />
              <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
                Designed Around Your Comfort
              </span>
            </h2>
            <div className="mt-6 flex flex-col gap-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              <p>
                UK Premium Co-Living offers thoughtfully designed accommodation for students and working professionals seeking comfort, convenience, and a premium lifestyle. Located on ITPL Main Road opposite Starbucks, our property combines modern interiors, well-maintained rooms, quality food, and excellent amenities to create a peaceful and enjoyable living experience.
              </p>
              <p>
                Our commitment to cleanliness, safety, and hospitality makes us one of the highest-rated premium PG accommodations in the Whitefield area.
              </p>
            </div>

            {/* Grid of Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 w-full">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-start text-left"
                >
                  <div className="p-3 bg-amber-500/10 rounded-2xl mb-4 border border-gold/10">
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
