import React from 'react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-3d-grid py-24" id="final-cta">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-6 lg:px-20 text-center"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
          Ready to Transform Your Travel Business?
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10">
          Whether you need a hotel booking platform, B2B travel portal, or an enterprise dashboard, let’s build a scalable, high‑performance solution together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <motion.a
            href="#CONTACT"
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px -5px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-all"
          >
            Start Your Project
          </motion.a>
          <motion.a
            href="#CONTACT"
            whileHover={{ scale: 1.05, y: -5, boxShadow: "0 10px 25px -5px rgba(37,99,235,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-2xl border border-blue-200 shadow-md transition-all"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
