"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "@/utils/images";
import { X, ChevronLeft, ChevronRight, Filter, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: number;
  title: string;
  category: "rooms" | "common" | "food" | "exterior" | "washroom";
  categoryLabel: string;
  image: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: "Executive Suite Bed Detail", category: "rooms", categoryLabel: "Rooms", image: IMAGES.luxury_room_interior },
  { id: 2, title: "Single Sharing Layout", category: "rooms", categoryLabel: "Rooms", image: IMAGES.single_sharing },
  { id: 3, title: "Double sharing Workspace", category: "rooms", categoryLabel: "Rooms", image: IMAGES.double_sharing },
  { id: 4, title: "Aman-Style Reception Desk", category: "common", categoryLabel: "Common Area", image: IMAGES.reception },
  { id: 5, title: "Co-Working & Collaboration Suite", category: "common", categoryLabel: "Common Area", image: IMAGES.study_area },
  { id: 6, title: "Lounge and Reading Room", category: "common", categoryLabel: "Common Area", image: IMAGES.lobby },
  { id: 7, title: "Gourmet Plated Meals", category: "food", categoryLabel: "Food", image: IMAGES.food },
  { id: 8, title: "Sky Deck Terrace Garden", category: "exterior", categoryLabel: "Exterior", image: IMAGES.terrace },
  { id: 9, title: "Exterior Facade dusk lighting", category: "exterior", categoryLabel: "Exterior", image: IMAGES.building_exterior_night },
  { id: 10, title: "Marble Tiled Bathroom Suite", category: "washroom", categoryLabel: "Washroom", image: IMAGES.washroom },
  { id: 11, title: "Kitchen Marble Prep Counters", category: "common", categoryLabel: "Common Area", image: IMAGES.kitchen },
  { id: 12, title: "Triple Sharing Suite Layout", category: "rooms", categoryLabel: "Rooms", image: IMAGES.triple_sharing }
];

const CATEGORIES = [
  { value: "all", label: "All Spaces" },
  { value: "rooms", label: "Luxury Rooms" },
  { value: "common", label: "Common Areas" },
  { value: "food", label: "Gourmet Dining" },
  { value: "exterior", label: "Terrace & Exterior" },
  { value: "washroom", label: "Washrooms" }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState(GALLERY_ITEMS);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredItems(GALLERY_ITEMS);
    } else {
      setFilteredItems(GALLERY_ITEMS.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Visual Exploration
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Photo Gallery
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            Take a visual tour through our meticulously crafted micro-apartments, high-end common areas, and luxury facilities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === cat.value
                  ? "bg-gold text-slate-900 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900/60 border border-slate-200/50 dark:border-white/5 text-slate-600 dark:text-slate-400 hover:text-gold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Image Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative h-[280px] rounded-luxury overflow-hidden group cursor-pointer shadow-luxury border border-slate-200/5 dark:border-white/5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gold">{item.categoryLabel}</span>
                  <h3 className="text-white text-base font-extrabold mt-1">{item.title}</h3>
                </div>

                <div className="absolute top-4 right-4 p-3 bg-slate-950/60 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-md">
                  <Maximize2 size={14} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/98 backdrop-blur-md flex flex-col justify-between p-6 md:p-12 text-white"
          >
            {/* Top Control Bar */}
            <div className="flex items-center justify-between w-full z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-amber-500/10 border border-gold/20 px-3 py-1 rounded-full">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="text-lg font-bold text-slate-200 mt-2">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-3 bg-slate-900 border border-slate-800 rounded-full hover:text-gold transition-colors duration-300 cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Image Viewport */}
            <div className="flex-1 flex items-center justify-center relative my-8">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-4 z-10 p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-white rounded-full hover:text-gold transition-all cursor-pointer"
                aria-label="Previous Image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Central Image Container */}
              <div className="relative w-full max-w-5xl h-[50vh] md:h-[65vh] rounded-luxury overflow-hidden">
                <Image
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  fill
                  className="object-contain"
                  quality={90}
                />
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 md:right-4 z-10 p-4 bg-slate-900/60 hover:bg-slate-900 border border-slate-800 text-white rounded-full hover:text-gold transition-all cursor-pointer"
                aria-label="Next Image"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Progress Stats */}
            <div className="flex items-center justify-center z-10">
              <span className="text-xs font-semibold text-slate-500 tracking-wider">
                IMAGE {lightboxIndex + 1} OF {filteredItems.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
