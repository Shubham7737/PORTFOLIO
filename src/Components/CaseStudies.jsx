import React from 'react';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaChartLine, FaCode, FaLaptop, FaUserTie } from 'react-icons/fa';

const caseStudies = [
  {
    title: 'Hotel Booking Platform for Luxury Resort',
    challenge: 'Low conversion and frequent downtimes',
    solution: 'Re‑architected backend with micro‑services, added caching and optimized UI',
    impact: '45% increase in bookings, 99.9% uptime',
  },
  {
    title: 'B2B Travel Marketplace for Agency Network',
    challenge: 'Complex commission calculations and fragmented data',
    solution: 'Built unified dashboard with real‑time analytics and automated invoicing',
    impact: '30% rise in agent revenue, 2× faster reporting',
  },
  {
    title: 'Enterprise Hotel Management System',
    challenge: 'Manual room allocation and legacy PMS',
    solution: 'Implemented a modern SaaS PMS with room‑locking and AI‑based pricing',
    impact: '20% operational cost reduction, 15% revenue uplift',
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-3d-grid py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Case Studies
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-left shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{cs.title}</h3>
              <p className="text-sm text-slate-600"><strong>Challenge:</strong> {cs.challenge}</p>
              <p className="text-sm text-slate-600"><strong>Solution:</strong> {cs.solution}</p>
              <p className="text-sm text-slate-600"><strong>Impact:</strong> {cs.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
