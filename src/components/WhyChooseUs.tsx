"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    title: "Premium Fully Furnished Rooms",
    description: "Plush beds, ergonomic study desks, individual wardrobes, and high-end walnut finishes."
  },
  {
    title: "Spotless Cleanliness",
    description: "Daily housekeeping, regular sanitization, and meticulous maintenance of all spaces."
  },
  {
    title: "Hygienic Home-style Food",
    description: "Nutritious, delicious, freshly cooked meals served daily in our clean dining hall."
  },
  {
    title: "High-Speed Wi-Fi",
    description: "Seamless multi-point mesh networks ensuring high-speed internet in every suite."
  },
  {
    title: "Friendly Management",
    description: "On-site supportive warden and dedicated hospitality staff at your service."
  },
  {
    title: "Peaceful Environment",
    description: "An organized, quiet atmosphere tailored for study, concentration, and deep rest."
  },
  {
    title: "Safe & Secure Living",
    description: "Equipped with 24×7 physical security guards, full CCTV layout, and biometric entry."
  },
  {
    title: "Prime Whitefield Location",
    description: "Located on ITPL Main Road opposite Starbucks with direct access to tech parks and transit."
  },
  {
    title: "Value for Money",
    description: "Competitive all-inclusive pricing covering food, laundry, utilities, and daily maintenance."
  }
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <section id="why-choose-us" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Why Residents Love <br />
            <span className="bg-gradient-to-r from-amber-500 to-gold bg-clip-text text-transparent">
              UK Premium Co-Living
            </span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            We provide more than just lodging. Experience a managed ecosystem focused on convenience, safety, and community comfort.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-8 rounded-luxury glass-panel hover:border-gold/30 hover:shadow-luxury-gold hover:scale-[1.02] transition-all duration-300 flex flex-col items-start gap-4"
            >
              {/* Gold Top line highlight on hover */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="p-3 bg-amber-500/10 text-gold rounded-2xl border border-gold/10 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-500 shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
