"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Shield, Wifi, MapPin, ArrowRight } from "lucide-react";
import { IMAGES } from "@/utils/images";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const navHeight = 80;
      const targetPos = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPos,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Image with luxury slow-zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.02, opacity: 0.6 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src={IMAGES.hero_exterior}
            alt="UK Premium Co-Living Building Facade"
            fill
            className="object-cover"
            priority
            quality={95}
          />
        </motion.div>
        {/* Dark radial and linear gradients for premium layout overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/40" />
      </div>

      {/* Floating Ambient Blobs */}
      <div className="glow-blob glow-blob-gold top-1/4 left-1/4 animate-pulse-slow opacity-10" />
      <div className="glow-blob glow-blob-blue bottom-1/4 right-1/4 animate-glow opacity-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Heading Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-gold/20 mb-6"
            >
              <div className="flex items-center gap-1 text-gold">
                <span className="text-xs font-black">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" className="stroke-none" />
                  ))}
                </div>
              </div>
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                27+ Google Reviews
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-none text-white font-sans"
            >
              Experience Premium <br />
              <span className="bg-gradient-to-r from-amber-400 via-gold to-yellow-500 bg-clip-text text-transparent">
                Co-Living in Whitefield
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-6 text-base md:text-lg text-slate-300 max-w-xl font-light leading-relaxed"
            >
              Discover modern, fully furnished premium co-living spaces designed for students and working professionals. Enjoy exceptional comfort, hygienic food, high-speed Wi-Fi, and a vibrant community—all in the heart of Whitefield.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToSection("#contact")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 font-bold px-8 py-4 rounded-full tracking-wider uppercase hover:shadow-luxury-gold hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Book a Visit
              </button>
              <button
                onClick={() => scrollToSection("#rooms")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/40 backdrop-blur-sm text-slate-200 hover:text-white hover:border-gold px-8 py-4 rounded-full tracking-wider uppercase transition-all duration-300 group cursor-pointer"
              >
                Explore Rooms
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Floating Luxury Stats Widgets on Right side */}
          <div className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] lg:h-full flex items-center justify-center">
            {/* 1. Google Rating & Reviews Glass Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute top-0 right-4 md:right-12 glass-panel p-6 rounded-luxury w-[230px] shadow-luxury border-white/10 hover:border-gold/30 hover:shadow-luxury-gold transition-all duration-300 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-500/10 text-gold rounded-2xl">
                  <Star size={24} fill="currentColor" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight">5.0</h3>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    27+ Google Reviews
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Security Badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{ animationDelay: "1.5s" }}
              className="absolute top-1/3 left-4 md:left-12 glass-panel p-5 rounded-luxury w-[190px] shadow-luxury border-white/10 hover:border-gold/30 hover:shadow-luxury-gold transition-all duration-300 animate-float"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl">
                  <Shield size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold">24×7 Security</h3>
                  <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">
                    CCTV & Biometrics
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 3. WiFi & Prime Location items */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ animationDelay: "3s" }}
              className="absolute bottom-4 right-8 glass-panel p-5 rounded-luxury w-[240px] shadow-luxury border-white/10 hover:border-gold/30 hover:shadow-luxury-gold transition-all duration-300 animate-float"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl">
                    <Wifi size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">High-Speed Wi-Fi</h4>
                    <p className="text-[9px] tracking-wider text-slate-400 uppercase">Seamless Connection</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Prime Location</h4>
                    <p className="text-[9px] tracking-wider text-slate-400 uppercase">ITPL Road Whitefield</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elegant scroll reveal indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer" onClick={() => scrollToSection("#showcase")}>
        <span className="text-[9px] tracking-[0.3em] font-bold text-slate-500 uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-1.5 h-6 bg-gold/50 rounded-full"
        />
      </div>
    </section>
  );
}
