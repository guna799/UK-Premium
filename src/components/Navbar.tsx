"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Calendar, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80; // approximate navbar height
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "glass-navbar py-4 shadow-luxury"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-gold flex items-center justify-center text-slate-900 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Compass size={22} className="stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-widest text-slate-900 dark:text-white uppercase leading-none">
                UK PREMIUM
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase leading-none mt-1">
                CO-LIVING
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-gold dark:hover:text-gold transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTAs and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:shadow-luxury-gold hover:opacity-90 active:scale-95 transition-all duration-300"
            >
              <Calendar size={14} />
              Book Now
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-900 dark:text-white lg:hidden hover:text-gold dark:hover:text-gold transition-colors duration-300"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 pt-24 px-6 bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between pb-12 lg:hidden"
          >
            <div className="flex flex-col gap-6 mt-8">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="text-2xl font-semibold text-slate-200 hover:text-gold tracking-wide transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 border-t border-slate-800 pt-8"
            >
              <p className="text-sm text-slate-400">
                4/2 Ashvir, ITPL Main Road, Opposite Starbucks, Kundalahalli Gate, Bengaluru - 560037
              </p>
              <a
                href="tel:+917996042999"
                className="text-xs font-black text-gold tracking-widest uppercase hover:underline mt-1"
              >
                Call: +91 79960 42999
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 text-sm font-bold uppercase tracking-wider py-4 rounded-full"
              >
                <Calendar size={16} />
                Book Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
