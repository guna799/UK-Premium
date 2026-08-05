"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "double",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call for premium UX
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        roomType: "double",
        message: ""
      });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">

          {/* Left Column: Contact details & Map Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3 block">
                Reservations
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
                Schedule a Visit
              </h2>
              <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Connect with our premium property manager. Walk through our spaces, test the high-speed wifi, sample the catering, and select your perfect room suite.
              </p>

              {/* Coordinates List */}
              <div className="mt-8 flex flex-col gap-6">
                <a
                  href="tel:+917996042999"
                  className="flex items-center gap-4 group p-2 -ml-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors duration-300"
                >
                  <div className="p-3 bg-amber-500/10 text-gold rounded-xl border border-gold/10 group-hover:bg-gold group-hover:text-slate-900 transition-all duration-300">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Call Directly</span>
                    <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">+91 79960 42999</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/917996042999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group p-2 -ml-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors duration-300"
                >
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl border border-emerald-500/10 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">WhatsApp Connect</span>
                    <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">+91 79960 42999</span>
                  </div>
                </a>

                <a
                  href="mailto:reservations@ukpremiumcoliving.com"
                  className="flex items-center gap-4 group p-2 -ml-2 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900/40 transition-colors duration-300"
                >
                  <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/10 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Leasing Email</span>
                    <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">reservations@ukpremiumcoliving.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-2 -ml-2">
                  <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/10 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Physical Address</span>
                    <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200 leading-snug">
                      4/2 Ashvir, ITPL Main Road, Opposite to Starbucks, Kundalahalli Gate, Lakshminarayana Pura, Bengaluru, Karnataka - 560037
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* styled Maps Placeholder */}
            <div className="mt-8 relative rounded-luxury overflow-hidden h-[200px] border border-slate-200/50 dark:border-white/5 shadow-sm group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0125867117036!2d77.71299801083416!3d12.959044887295843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1300783f3bfb%3A0xd4619f0ca765c3d8!2sUK%20Premium%20Co-Living!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 glass-panel px-3.5 py-1.5 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-wider text-white shadow-md">
                Interactive Google Map
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form UI */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 rounded-luxury border border-slate-200/5 dark:border-white/5 shadow-luxury h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Rohan Sen"
                          className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-sm focus:outline-none focus:border-gold transition-colors text-slate-800 dark:text-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 79960 42999"
                          className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-sm focus:outline-none focus:border-gold transition-colors text-slate-800 dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="rohan.sen@example.com"
                        className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-sm focus:outline-none focus:border-gold transition-colors text-slate-800 dark:text-white"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="roomType" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Preferred Room Category
                      </label>
                      <select
                        id="roomType"
                        name="roomType"
                        value={formState.roomType}
                        onChange={handleChange}
                        className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-sm focus:outline-none focus:border-gold transition-colors text-slate-800 dark:text-slate-200 cursor-pointer"
                      >
                        <option value="single">Single Sharing Suite (₹24,000/mo)</option>
                        <option value="double">Double Sharing Suite (₹16,500/mo)</option>
                        <option value="triple">Triple Sharing Suite (₹15,000/mo)</option>
                        <option value="deluxe">Premium Deluxe Room (₹32,000/mo)</option>
                        <option value="executive">Executive Penthouse Room (₹38,000/mo)</option>
                        <option value="corporate">Corporate Group Booking (Custom)</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Special Instructions / Requirements
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Let us know your preferred move-in date, any specific dietary requirements, or workspace preferences..."
                        className="px-5 py-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-white/5 text-sm focus:outline-none focus:border-gold transition-colors text-slate-800 dark:text-white resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-gold text-slate-900 font-extrabold uppercase tracking-widest text-xs py-4 rounded-full hover:shadow-luxury-gold hover:opacity-95 active:scale-[0.98] transition-all duration-300 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send size={14} />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 mb-6">
                      <CheckCircle2 size={48} className="animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-800 dark:text-white">
                      Inquiry Received
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-sm">
                      Thank you for choosing UK Premium. Our luxury leasing director will reach out to you within the next 2 hours on your provided number (+91...) or email.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 px-6 py-2.5 rounded-full border border-slate-700 hover:border-gold text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-gold transition-colors cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
