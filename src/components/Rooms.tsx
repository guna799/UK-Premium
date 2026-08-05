"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { Users, Crop, ChevronRight, Check } from "lucide-react";

interface RoomCategory {
  id: string;
  name: string;
  price: string;
  occupancy: string;
  size: string;
  image: string;
  features: string[];
  recommended?: boolean;
}

const ROOMS: RoomCategory[] = [
  {
    id: "single",
    name: "Single Sharing Suite",
    price: "₹24,000",
    occupancy: "1 Guest",
    size: "220 Sq Ft",
    image: IMAGES.single_sharing,
    features: [
      "Queen Bed with luxury orthopedic mattress",
      "Ergonomic workspace layout with walnut chair",
      "Attached private balcony overlooking greenery",
      "Fully integrated multi-cabinet wardrobes"
    ]
  },
  {
    id: "double",
    name: "Double Sharing Suite",
    price: "₹16,500",
    occupancy: "2 Guests",
    size: "280 Sq Ft",
    image: IMAGES.double_sharing,
    features: [
      "Twin Single Beds with individual configurations",
      "Dedicated dual workspaces and task lamps",
      "Shared luxury ensuite marble bath",
      "High storage separate lockable wardrobes"
    ],
    recommended: true
  },
  {
    id: "triple",
    name: "Triple Sharing Suite",
    price: "₹15,000",
    occupancy: "3 Guests",
    size: "340 Sq Ft",
    image: IMAGES.triple_sharing,
    features: [
      "Three isolated single beds for supreme privacy",
      "Individual secure drawer storage units",
      "Spacious shared desk system",
      "Attached washing area access"
    ]
  },
  {
    id: "premium-deluxe",
    name: "Premium Deluxe Room",
    price: "₹32,000",
    occupancy: "1 Guest",
    size: "320 Sq Ft",
    image: IMAGES.luxury_room_interior,
    features: [
      "King Size luxury bed with accent wood headboard",
      "L-shaped premium corner study workstation",
      "Smart-mirror bathroom with glass partitions",
      "Mini refrigerator & smart microwave setup"
    ]
  },
  {
    id: "executive",
    name: "Executive Penthouse Room",
    price: "₹38,000",
    occupancy: "1 Guest",
    size: "400 Sq Ft",
    image: IMAGES.common_lounge,
    features: [
      "King Suite with premium velvet lounger couch",
      "Fully loaded workstation with secondary monitor",
      "Direct terrace access and private garden",
      "Personal pantry setup & gourmet coffee machine"
    ]
  }
];

export default function Rooms() {
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
    <section id="rooms" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="flex flex-col items-start text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
              Luxury Quarters
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
              Premium Room Categories
            </h2>
            <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              Carefully curated suites engineered for restorative rest, absolute peace, and high-performance study/work. Complete with luxury linens, soft ambient lighting, and bespoke furniture.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="mt-6 md:mt-0 px-8 py-4 rounded-full border border-slate-700 hover:border-gold hover:text-gold text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
          >
            Inquire Availability
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROOMS.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-luxury overflow-hidden glass-panel flex flex-col justify-between shadow-luxury border ${room.recommended
                  ? "border-gold/40 shadow-luxury-gold lg:scale-[1.03]"
                  : "border-slate-200/5 dark:border-white/5"
                }`}
            >
              {room.recommended && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-950 bg-gold px-3.5 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Room Card Image */}
              <div className="relative h-[240px] w-full overflow-hidden group">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

                {/* Micro info bar */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white z-10">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gold" />
                    <span className="text-xs font-semibold">{room.occupancy}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crop size={16} className="text-gold" />
                    <span className="text-xs font-semibold">{room.size}</span>
                  </div>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white">
                    {room.name}
                  </h3>

                  {/* Pricing row */}
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-black text-gold">{room.price}</span>
                    <span className="text-xs font-medium text-slate-400">/ Month</span>
                  </div>

                  {/* Feature list */}
                  <ul className="mt-6 flex flex-col gap-3">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400 font-light">
                        <Check size={14} className="text-gold mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Action button */}
                <div className="mt-8">
                  <button
                    onClick={scrollToContact}
                    className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800/60 hover:bg-gold dark:hover:bg-gold hover:text-slate-900 border border-slate-700/50 hover:border-gold px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200 transition-all duration-300 group cursor-pointer"
                  >
                    Reserve Now
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
