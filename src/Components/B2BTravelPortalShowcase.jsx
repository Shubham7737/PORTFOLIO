import React from 'react';
import { motion } from 'framer-motion';

export default function B2BTravelPortalShowcase() {
  const cards = [
    { title: 'Agent Dashboard', icon: '📊' },
    { title: 'Commission Management', icon: '💰' },
    { title: 'Wallet System', icon: '💳' },
    { title: 'Booking Management', icon: '🛎️' },
    { title: 'Invoice Generation', icon: '🧾' },
    { title: 'Reports', icon: '📈' },
    { title: 'Corporate Accounts', icon: '🏢' },
    { title: 'Markup Management', icon: '⚙️' },
    { title: 'Sub‑Agent Management', icon: '👥' },
  ];

  return (
    <section className="py-20 bg-3d-grid" id="B2B-PORTAL">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-slate-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          B2B Travel Portal Showcase
        </motion.h2>
        <motion.p
          className="text-center text-slate-600 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Empower travel agents with a powerful, white‑label platform that drives commissions and bookings.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center shadow-xl glass-effect"
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-4xl mb-3">{c.icon}</div>
              <h3 className="font-semibold text-slate-800">{c.title}</h3>
            </motion.div>
          ))}
        </div>
        {/* Mockup Image Placeholder */}
        {/* <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl h-64 bg-slate-200 rounded-xl" />
        </div> */}
      </div>
    </section>
  );
}
