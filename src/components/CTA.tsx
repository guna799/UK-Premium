"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Calendar, Compass, ArrowRight } from "lucide-react";

export default function CTA() {
  const directionsUrl = "https://www.google.com/maps/place/UK+Premium+Co-Living/@12.9590449,77.7151867,122m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3bae123958f3a7b7:0x76fee74577540643!2sKundalahalli+Gate!8m2!3d12.956844!4d77.715033!16s%2Fg%2F1hjgv53tq!3m5!1s0x3bae1300783f3bfb:0xd4619f0ca765c3d8!8m2!3d12.9590449!4d77.7151867!16s%2Fg%2F11z0mp37gk?entry=ttu";

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#contact");
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
    <section className="py-20 md:py-28 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden z-10">
      {/* Background visual assets */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.15),transparent)]" />
      <div className="glow-blob glow-blob-blue top-1/4 left-1/4 opacity-10 animate-pulse-slow" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
          Join the Elite
        </span>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Looking for a Premium PG <br />
          <span className="bg-gradient-to-r from-amber-400 via-gold to-yellow-500 bg-clip-text text-transparent">
            in Whitefield?
          </span>
        </h2>
        
        <p className="text-sm md:text-base text-slate-400 max-w-xl font-light leading-relaxed">
          Book your visit today and experience premium co-living designed around comfort, convenience, and community. Experience the top-rated PG in East Bengaluru.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4 w-full sm:w-auto">
          {/* 1. Call Now */}
          <a
            href="tel:+917996042999"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md"
          >
            <Phone size={14} />
            Call Now
          </a>

          {/* 2. Book Visit */}
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 hover:border-gold hover:text-gold text-slate-200 font-extrabold px-8 py-4 rounded-full text-xs uppercase tracking-wider active:scale-95 transition-all duration-300"
          >
            <Calendar size={14} />
            Book Visit
          </a>

          {/* 3. Get Directions */}
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/30 text-slate-300 hover:text-white hover:border-gold px-8 py-4 rounded-full text-xs uppercase tracking-wider transition-all duration-300 group"
          >
            <Compass size={14} className="group-hover:rotate-45 transition-transform" />
            Get Directions
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
