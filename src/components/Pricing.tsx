"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Info, Award } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  deposit: string;
  period: string;
  features: string[];
  recommended?: boolean;
  ctaText: string;
  description: string;
}

const PLANS: PricingPlan[] = [
  {
    name: "Triple Sharing Suite",
    price: "₹15,000",
    deposit: "1 Month Security Deposit",
    period: "/ Month",
    description: "Affordable premium living option with all standard luxury amenities included.",
    features: [
      "Three separate single beds",
      "Individual secure lockers",
      "Shared luxury ensuite bathroom",
      "High speed mesh WiFi access",
      "3 daily gourmet meals included"
    ],
    ctaText: "Inquire Suite"
  },
  {
    name: "Double Sharing Suite",
    price: "₹16,500",
    deposit: "1 Month Security Deposit",
    period: "/ Month",
    description: "Our most popular package balancing privacy and social co-living experience.",
    features: [
      "Twin Single bed setup",
      "Dedicated dual study desk units",
      "Attached luxury bathroom layout",
      "Biometric secure wardrobe storage",
      "3 daily gourmet meals + laundry",
      "Unlimited lounge & gym access"
    ],
    recommended: true,
    ctaText: "Reserve Suite"
  },
  {
    name: "Single Luxury Suite",
    price: "₹24,000",
    deposit: "1 Month Security Deposit",
    period: "/ Month",
    description: "Ultimate individual layout. 100% private study, workstation, and balcony.",
    features: [
      "Queen orthopedic bed",
      "Premium workstation & ergonomic chair",
      "Private attached balcony suite",
      "Private en-suite bathroom",
      "Premium dining service direct to room",
      "Access to all lifestyle areas"
    ],
    ctaText: "Reserve Private Suite"
  },
  {
    name: "Custom Enterprise Plan",
    price: "Custom",
    deposit: "Corporate Rates Available",
    period: "",
    description: "For corporate group bookings, tech teams, or organizations looking for full block units.",
    features: [
      "Dedicated block/floor reservation",
      "Tailored dietary/catering choices",
      "Meeting room & project space bookings",
      "Flexible notice periods",
      "Dedicated account manager support"
    ],
    ctaText: "Contact Sales"
  }
];

export default function Pricing() {
  const scrollToContact = () => {
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
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      {/* Background blobs for luxury look */}
      <div className="glow-blob glow-blob-gold top-1/3 left-1/3 opacity-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Investment Structure
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            No hidden costs. No processing charges. Pricing covers premium lodging, gourmet food, high-speed utilities, laundry, and daily housekeeping.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {PLANS.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-luxury glass-panel p-8 flex flex-col justify-between border shadow-luxury group transition-all duration-300 ${plan.recommended
                  ? "border-gold/50 shadow-luxury-gold lg:scale-[1.03] bg-slate-900/10 dark:bg-slate-900/30"
                  : "border-slate-200/5 dark:border-white/5"
                }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-md flex items-center gap-1">
                  <Award size={10} />
                  Best Value Plan
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="text-lg font-extrabold text-slate-800 dark:text-white leading-snug group-hover:text-gold transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light mt-3 leading-relaxed min-h-[50px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 border-t border-slate-200/20 dark:border-white/5 pt-6 flex flex-col items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-black tracking-tight text-gold">
                      {plan.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      {plan.period}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium mt-1 flex items-center gap-1 leading-none">
                    <Info size={10} className="text-gold" />
                    {plan.deposit}
                  </span>
                </div>

                {/* Feature bullet List */}
                <ul className="mt-8 flex flex-col gap-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-amber-500/10 text-gold flex items-center justify-center shrink-0 mt-0.5 border border-gold/10">
                        <Check size={10} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8">
                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${plan.recommended
                      ? "bg-gradient-to-r from-amber-500 to-gold text-slate-900 hover:shadow-luxury-gold hover:opacity-90 active:scale-95"
                      : "bg-slate-900 dark:bg-slate-800 hover:bg-gold dark:hover:bg-gold hover:text-slate-900 border border-slate-700/50 hover:border-gold text-slate-200"
                    }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
