import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobeAmericas, FaCubes, FaShieldAlt, FaCodeBranch, FaChartLine, FaHandsHelping } from 'react-icons/fa';

const cards = [
  {
    icon: <FaGlobeAmericas className="text-3xl text-blue-500" />, 
    title: 'Travel Technology Expertise',
    description: 'Deep industry knowledge for hotels, OTAs and travel agencies.'
  },
  {
    icon: <FaCubes className="text-3xl text-purple-500" />, 
    title: 'Enterprise Architecture',
    description: 'Scalable, secure backend systems built for long‑term growth.'
  },
  {
    icon: <FaShieldAlt className="text-3xl text-indigo-500" />, 
    title: 'Scalable & Secure Solutions',
    description: 'Performance‑first design with robust security and compliance.'
  },
  {
    icon: <FaCodeBranch className="text-3xl text-green-500" />, 
    title: 'API Integration Expertise',
    description: 'Seamless hotel, payment, maps and authentication API integrations.'
  },
  {
    icon: <FaChartLine className="text-3xl text-orange-500" />, 
    title: 'Performance & SEO Optimized',
    description: 'Core‑Web‑Vitals, fast load, and SEO best practices baked in.'
  },
  {
    icon: <FaHandsHelping className="text-3xl text-red-500" />, 
    title: 'Long‑Term Technical Support',
    description: 'Ongoing maintenance, feature upgrades, and dedicated assistance.'
  }
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

export default function WhyChooseMe() {
  return (
    <section id="why-choose" className="bg-3d-grid py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
          Why Businesses Choose Me
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
          Helping hotels and travel businesses build reliable, scalable and conversion‑focused digital products.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariant}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-white/30 mb-4 drop-shadow-md">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
