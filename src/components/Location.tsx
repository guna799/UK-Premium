"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Train, Briefcase, HeartPulse, ShoppingBag, Coffee, Star } from "lucide-react";

interface Landmark {
  name: string;
  distance: string;
  time: string;
  category: "transit" | "work" | "leisure" | "essentials";
  icon: React.ReactNode;
}

const LANDMARKS: Landmark[] = [
  {
    name: "Starbucks Coffee (Opposite Property)",
    distance: "10m",
    time: "Directly opposite",
    category: "leisure",
    icon: <Coffee size={18} />
  },
  {
    name: "Kundalahalli Metro Station (Purple Line)",
    distance: "300m",
    time: "3 mins walk",
    category: "transit",
    icon: <Train size={18} />
  },
  {
    name: "Kundalahalli Gate Junction",
    distance: "150m",
    time: "2 mins walk",
    category: "transit",
    icon: <MapPin size={18} />
  },
  {
    name: "ITPL (International Tech Park)",
    distance: "2.8 km",
    time: "8 mins drive",
    category: "work",
    icon: <Briefcase size={18} />
  },
  {
    name: "Whitefield IT Corridor / Tech Parks",
    distance: "1.5 km",
    time: "5 mins drive",
    category: "work",
    icon: <Briefcase size={18} />
  },
  {
    name: "AECS Layout Bus Stops",
    distance: "100m",
    time: "1 min walk",
    category: "transit",
    icon: <Train size={18} />
  },
  {
    name: "Brookfield Hospital & Medical Care",
    distance: "1.2 km",
    time: "4 mins drive",
    category: "essentials",
    icon: <HeartPulse size={18} />
  },
  {
    name: "Virginia Mall & Shopping Areas",
    distance: "3.2 km",
    time: "9 mins drive",
    category: "leisure",
    icon: <ShoppingBag size={18} />
  },
  {
    name: "Supermarkets & Daily Essentials",
    distance: "200m",
    time: "2 mins walk",
    category: "essentials",
    icon: <ShoppingBag size={18} />
  }
];

const FILTERS = [
  { value: "all", label: "All Around" },
  { value: "transit", label: "Transit Links" },
  { value: "work", label: "Tech Parks" },
  { value: "leisure", label: "Cafes & Dining" },
  { value: "essentials", label: "Hospitals & Daily" }
];

export default function Location() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredLandmarks = activeFilter === "all"
    ? LANDMARKS
    : LANDMARKS.filter(item => item.category === activeFilter);

  return (
    <section id="location" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Custom Luxury Radar Map Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative rounded-luxury overflow-hidden glass-panel p-8 flex flex-col justify-center items-center h-[400px] md:h-[500px] border border-slate-200/5 dark:border-white/5 bg-slate-950"
          >
            {/* Ambient gold glow */}
            <div className="absolute inset-0 bg-radial-gradient from-gold/10 via-transparent to-transparent pointer-events-none" />

            {/* Radar Rings Grid */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-slate-800 flex items-center justify-center">
              <div className="w-[220px] h-[220px] rounded-full border border-slate-800 flex items-center justify-center">
                <div className="w-[120px] h-[120px] rounded-full border border-slate-800 flex items-center justify-center" />
              </div>
            </div>

            {/* Compass axes */}
            <div className="absolute w-[320px] h-[1px] bg-slate-900" />
            <div className="absolute h-[320px] w-[1px] bg-slate-900" />

            {/* Pulsing Target Point - The Property */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-gold flex items-center justify-center text-slate-950 shadow-luxury-gold animate-float">
                <MapPin size={22} className="stroke-[2.5]" />
              </div>
              <span className="text-white text-xs font-extrabold tracking-widest mt-4 uppercase">
                UK Premium Co-Living
              </span>
              <span className="text-gold text-[9px] tracking-widest font-black uppercase mt-1">
                Opposite Starbucks
              </span>
            </div>

            {/* Map Labels for tech parks / hotspots */}
            <div className="absolute top-20 right-20 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              Starbucks (Opposite)
            </div>
            <div className="absolute bottom-20 left-16 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
              Metro (300m)
            </div>
            <div className="absolute top-1/3 left-12 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
              ITPL Road
            </div>
            <div className="absolute bottom-24 right-12 text-[10px] text-slate-500 font-extrabold uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
              Kundalahalli Gate
            </div>

            {/* Radial radar scanning line */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute w-[320px] h-[320px] rounded-full border-r border-gold/15 pointer-events-none"
              style={{ transformOrigin: "center" }}
            />
          </motion.div>

          {/* Right: Location Details & Filter List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
              Prime Proximity
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Everything You Need Around You
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Located directly on ITPL Main Road opposite Starbucks at Kundalahalli Gate. Enjoy pedestrian proximity to AECS Layout supermarkets, shopping areas, hospitals, and local transport networks.
            </p>

            {/* Location Chips Filter */}
            <div className="flex flex-wrap gap-2 mt-8 w-full">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeFilter === f.value
                      ? "bg-gold text-slate-900 shadow-md"
                      : "bg-slate-100 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Landmark List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
              <AnimatePresence mode="popLayout">
                {filteredLandmarks.map((landmark) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={landmark.name}
                    className="p-4 rounded-2xl glass-panel border border-slate-200/5 dark:border-white/5 flex gap-4 items-start shadow-sm"
                  >
                    <div className="p-2.5 bg-amber-500/10 text-gold rounded-xl border border-gold/10 shrink-0">
                      {landmark.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 leading-tight">
                        {landmark.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className="text-[10px] font-black text-gold uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-md">
                          {landmark.distance}
                        </span>
                        <span className="text-[10px] font-light text-slate-400">
                          ({landmark.time})
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
