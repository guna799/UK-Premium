import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageShowcase from "@/components/ImageShowcase";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import Food from "@/components/Food";
import Cleanliness from "@/components/Cleanliness";
import Lifestyle from "@/components/Lifestyle";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SpecialEffects from "@/components/SpecialEffects";

export default function Home() {
  return (
    <div className="relative min-h-screen selection:bg-gold selection:text-slate-950 font-sans transition-colors duration-500 overflow-x-hidden">
      {/* Floating global layouts, theme controller, scroll tracker, mouse glows */}
      <SpecialEffects />

      {/* Transparent blur glass Navigation Bar */}
      <Navbar />

      {/* Main content layouts */}
      <main className="w-full flex flex-col items-stretch">
        
        {/* Fullscreen slow zoom video/image Hero */}
        <Hero />

        {/* Masonry image grids of various zones */}
        <ImageShowcase />

        {/* Details & core philosophy pillars split-grid */}
        <About />

        {/* Card grid explaining Why Residents Love Co-Living */}
        <WhyChooseUs />

        {/* Grid comparing services & utility components */}
        <Amenities />

        {/* Luxury Room category metrics comparing beds & space */}
        <Rooms />

        {/* Healthy Home-Style Meals section */}
        <Food />

        {/* Daily housekeeping & regular cleaning comparison slider */}
        <Cleanliness />

        {/* Community collage themed 'More Than Just Accommodation' */}
        <Lifestyle />

        {/* Gallery space tabs & fully responsive lightbox slider */}
        <Gallery />

        {/* Map, location chips, transit/landmark list grid */}
        <Location />

        {/* Resident slider containing real Google reviews and rating stats */}
        <Testimonials />

        {/* Complete price table for Single, Double, Triple sharing options */}
        <Pricing />

        {/* Smooth Accordions answering standard residency queries */}
        <FAQ />

        {/* Premium Call / Visit / Location mapping action CTA block */}
        <CTA />

        {/* Direct WhatsApp links & responsive contact inquiry forms */}
        <Contact />

      </main>

      {/* Structured sitemap & quick social links Footer */}
      <Footer />
    </div>
  );
}
