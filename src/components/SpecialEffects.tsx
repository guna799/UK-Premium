"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp, Phone, Sun, Moon, Calendar } from "lucide-react";

export default function SpecialEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position for showing/hiding floating widgets
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setShowStickyCTA(scrollPos > 600);
      setShowBackToTop(scrollPos > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update mouse position for custom cursor & hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Dynamic CSS variables for hover mouse-glow cards
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Initialize and handle theme switching
  useEffect(() => {
    // Check local storage or default to dark mode for luxury look
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = storedTheme || "dark";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />

      {/* Mouse Glow spotlight behind layers */}
      <div 
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 opacity-60 hidden lg:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 175, 55, 0.04), transparent 80%)`
        }}
      />

      {/* Custom Luxury Elastic Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: cursorHovered ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 250,
          mass: 0.2
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
          mass: 0.1
        }}
      />

      {/* Theme Toggler (Floating Control) */}
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="fixed right-6 bottom-36 z-50 p-4 rounded-full glass-panel text-gold shadow-luxury hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        {theme === "dark" ? <Sun size={20} className="animate-spin-slow" /> : <Moon size={20} />}
      </button>

      {/* Sticky Floating CTA - Book Visit */}
      {showStickyCTA && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full glass-panel shadow-luxury-gold max-w-[90vw] md:max-w-auto"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 font-semibold px-6 py-3 rounded-full text-sm tracking-wider uppercase hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md"
          >
            <Calendar size={16} />
            Book Visit
          </a>
          <a
            href="tel:+917996042999"
            className="flex items-center justify-center p-3 rounded-full bg-slate-900 dark:bg-slate-800 text-gold hover:text-white transition-colors duration-300"
          >
            <Phone size={16} />
          </a>
        </motion.div>
      )}

      {/* Back To Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed right-6 bottom-24 z-50 p-4 rounded-full glass-panel text-gold shadow-luxury hover:bg-gold hover:text-slate-900 transition-all duration-300 cursor-pointer"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </>
  );
}
