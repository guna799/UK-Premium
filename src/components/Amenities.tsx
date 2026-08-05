"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  ShieldCheck,
  Video,
  Sparkles,
  RotateCw,
  Zap,
  Droplets,
  Flame,
  ArrowUpDown,
  Car,
  Shirt,
  Bed,
  Box,
  BookOpen,
  VolumeX,
  Users,
  Wrench,
  Compass,
  MapPin,
  Utensils,
  Tv,
  Heart
} from "lucide-react";

interface Amenity {
  name: string;
  icon: React.ReactNode;
  category: "Utilities" | "Safety" | "Spaces" | "Amenities";
}

const AMENITIES: Amenity[] = [
  { name: "High-Speed Wi-Fi", icon: <Wifi size={22} />, category: "Utilities" },
  { name: "24×7 Security", icon: <ShieldCheck size={22} />, category: "Safety" },
  { name: "CCTV Surveillance", icon: <Video size={22} />, category: "Safety" },
  { name: "Daily Housekeeping", icon: <Sparkles size={22} />, category: "Utilities" },
  { name: "Regular Cleaning", icon: <RotateCw size={22} />, category: "Utilities" },
  { name: "Power Backup", icon: <Zap size={22} />, category: "Utilities" },
  { name: "RO Drinking Water", icon: <Droplets size={22} />, category: "Utilities" },
  { name: "Hot Water", icon: <Flame size={22} />, category: "Utilities" },
  { name: "Lift Facility", icon: <ArrowUpDown size={22} />, category: "Utilities" },
  { name: "Parking", icon: <Car size={22} />, category: "Utilities" },
  { name: "Laundry Facility", icon: <Shirt size={22} />, category: "Utilities" },
  { name: "Fully Furnished Rooms", icon: <Bed size={22} />, category: "Amenities" },
  { name: "Comfortable Beds", icon: <Heart size={22} />, category: "Amenities" },
  { name: "Wardrobes", icon: <Box size={22} />, category: "Amenities" },
  { name: "Study Tables", icon: <BookOpen size={22} />, category: "Amenities" },
  { name: "Attached/Common Washrooms", icon: <Droplets size={22} />, category: "Amenities" },
  { name: "Dining Area", icon: <Utensils size={22} />, category: "Spaces" },
  { name: "Common Lounge", icon: <Tv size={22} />, category: "Spaces" },
  { name: "Peaceful Environment", icon: <VolumeX size={22} />, category: "Spaces" },
  { name: "Friendly Staff", icon: <Users size={22} />, category: "Spaces" },
  { name: "Excellent Maintenance", icon: <Wrench size={22} />, category: "Utilities" },
  { name: "Near Main Road", icon: <Compass size={22} />, category: "Utilities" },
  { name: "Prime Location", icon: <MapPin size={22} />, category: "Utilities" }
];

export default function Amenities() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.02
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="amenities" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Bespoke Services
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            World-Class Amenities <br />
            <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
              Tailored for Modern Life
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            From smart digital locks to backup generators and high-speed multi-gigabit internet, enjoy access to five-star residential services daily.
          </p>
        </div>

        {/* Unified Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {AMENITIES.map((amenity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-luxury glass-panel hover:border-gold/30 hover:shadow-luxury-gold hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between min-h-[140px]"
            >
              {/* Highlight line on top hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="flex items-start justify-between w-full">
                <div className="p-3 bg-amber-500/10 text-gold rounded-2xl border border-gold/10 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-500">
                  {amenity.icon}
                </div>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-extrabold mt-1">
                  {amenity.category}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-4 leading-tight">
                {amenity.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
