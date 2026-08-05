"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "What is the availability of rooms and how do I reserve a room?",
    answer: "Room availability changes dynamically. You can verify real-time vacancies by booking a virtual or in-person visit through our Inquiry Form below, or by contacting our leasing team directly via WhatsApp or Call. A small token amount is required to secure and lock in a specific room category."
  },
  {
    question: "What is the security deposit amount and is there a lock-in period?",
    answer: "To keep bookings tenant-friendly, we charge a minimal security deposit of only 1 month's rent (fully refundable upon checkout). The standard lock-in period is 3 months, which provides stability for our community."
  },
  {
    question: "What is the notice period required before moving out?",
    answer: "We require a standard 30-day written notice period before vacating. This helps us ensure a smooth checkout audit, coordinate maintenance checks, and process your refund quickly."
  },
  {
    question: "Are daily meals included in the rent? What is the catering structure?",
    answer: "Yes, freshly prepared meals (Breakfast, Lunch, and Dinner) are fully integrated into the monthly subscription fee. Our in-house chefs craft healthy, balanced menus that feature North Indian, South Indian, and light Continental options, with special meals on weekends."
  },
  {
    question: "What is the guest and visitor policy for overnight stays?",
    answer: "Visitors are welcome in our common lounges and dining halls from 9:00 AM to 9:00 PM. Overnight stays for close family members (parents, siblings) are permitted with prior coordination with the property warden and subject to security logs."
  },
  {
    question: "Is there secure parking on-site?",
    answer: "Yes, we provide safe, designated, covered parking slots for two-wheelers and limited slots for four-wheelers. The parking zones are monitored 24/7 by security personnel and high-definition cameras."
  },
  {
    question: "How is the physical security managed on-premise?",
    answer: "We maintain an elite security infrastructure. This includes 24/7 physical security guards at gate points, 64 high-res CCTV cameras covering all corridors and common zones, and biometric access gateways at both the reception entrance and individual room doors."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold mb-3">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-none">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-xl font-light leading-relaxed">
            Quick, straightforward answers regarding bookings, rental policies, food scheduling, visitors, and security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/50 dark:border-white/5 glass-panel overflow-hidden shadow-sm hover:border-gold/25 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-100 pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gold shrink-0 p-1.5 bg-amber-500/10 rounded-full border border-gold/10"
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-xs md:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed border-t border-slate-200/10 dark:border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
      <div className="luxury-divider mt-24" />
    </section>
  );
}
