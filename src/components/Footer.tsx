"use client";

import React from "react";
import { Compass, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-white py-16 md:py-24 px-6 md:px-12 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-gold flex items-center justify-center text-slate-900 shadow-md">
                <Compass size={22} className="stroke-[2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-widest text-white uppercase leading-none">
                  UK PREMIUM
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gold font-bold uppercase leading-none mt-1">
                  CO-LIVING
                </span>
              </div>
            </a>
            <p className="mt-6 text-xs md:text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              Ultra-premium luxury co-living quarters designed for young tech professionals, founders, and students in Bengaluru's Whitefield district. Experience the Aman Resorts & Marriott Bonvoy standard.
            </p>
          </div>

          {/* Column 2: Sitemap Links */}
          <div className="md:col-span-3 flex flex-col items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">
              Sitemap
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#rooms"
                onClick={(e) => handleLinkClick(e, "#rooms")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Rooms
              </a>
              <a
                href="#amenities"
                onClick={(e) => handleLinkClick(e, "#amenities")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Amenities
              </a>
              <a
                href="#gallery"
                onClick={(e) => handleLinkClick(e, "#gallery")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                onClick={(e) => handleLinkClick(e, "#pricing")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#location"
                onClick={(e) => handleLinkClick(e, "#location")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Location
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Column 3: Contact details & Social Connect */}
          <div className="md:col-span-4 flex flex-col items-start">
            <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-6">
              Connect
            </h4>
            <span className="text-xs text-slate-400 block font-light">4/2 Ashvir, ITPL Main Road,</span>
            <span className="text-xs text-slate-400 block mt-1 font-light">Opposite Starbucks, Kundalahalli Gate,</span>
            <span className="text-xs text-slate-400 block mt-1 font-light">AECS Layout, Munnekolala, Bengaluru 560037</span>
            <a
              href="tel:+917996042999"
              className="text-xs font-bold text-slate-200 hover:text-gold transition-colors block mt-4"
            >
              +91 79960 42999
            </a>
            <div className="flex items-center gap-1.5 mt-2.5 text-gold text-xs font-bold">
              <span>5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="stroke-none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                ))}
              </div>
              <span className="text-slate-500 font-light text-[10px] uppercase tracking-wider">(27 Google Reviews)</span>
            </div>

            {/* Social Icons row */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-gold rounded-full transition-all duration-300 flex items-center justify-center"
                aria-label="Instagram Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-gold rounded-full transition-all duration-300 flex items-center justify-center"
                aria-label="LinkedIn Page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-gold rounded-full transition-all duration-300 flex items-center justify-center"
                aria-label="YouTube Channel"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-gold rounded-full transition-all duration-300 flex items-center justify-center"
                aria-label="Facebook Page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Level Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] tracking-wider text-slate-500 uppercase font-medium">
            © {currentYear} UK PREMIUM CO-LIVING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] tracking-wider text-slate-500 uppercase font-medium">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
