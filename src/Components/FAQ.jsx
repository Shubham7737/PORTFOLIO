import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: 'Why choose custom travel software?',
    answer: 'Custom solutions are tailored to your business processes, ensuring scalability, integration flexibility, and a competitive edge in the travel market.'
  },
  {
    question: 'Can you integrate Hotel APIs?',
    answer: 'Yes, we have extensive experience integrating major hotel booking APIs (Booking.com, Expedia, Agoda, etc.) with secure, rate‑limited connections.'
  },
  {
    question: 'Do you build B2B travel portals?',
    answer: 'Absolutely – we design agent‑centric portals with commission tracking, wallet systems, and white‑label branding.'
  },
  {
    question: 'Do you provide long‑term maintenance?',
    answer: 'We offer SLA‑based support, regular security updates, and feature roadmap planning for continuous growth.'
  },
  {
    question: 'Can you modernize existing booking systems?',
    answer: 'We refactor legacy codebases, introduce micro‑services, and migrate to modern stacks while preserving your data integrity.'
  },
  {
    question: 'How scalable are your solutions?',
    answer: 'Our architecture leverages cloud‑native services, horizontal scaling, and caching to support millions of concurrent users.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = i => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-3d-grid py-20" id="FAQ">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-slate-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <motion.div key={i} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-6">
              <button onClick={() => toggle(i)} className="w-full flex justify-between items-center text-left">
                <span className="font-medium text-slate-700">{item.question}</span>
                {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-3 text-slate-600"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
