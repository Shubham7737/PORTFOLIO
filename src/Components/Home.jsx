import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Shubh_CV from "../assets/Shubh_CV.pdf";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [text, setText] = useState("");
  const str = "Hi, I'm Shubham Danu";
  const [index, setIndex] = useState(0);

  // Typing Effect Logic (Smoother and Faster)
  useEffect(() => {
    if (index < str.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + str[index]);
        setIndex((prev) => prev + 1);
      }, 100); // Faster typing for better UX
      return () => clearTimeout(timeout);
    }
  }, [index]);

  const handleScroll = () => {
    setShowButton(window.scrollY > 400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[#020617] text-white min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">
      
      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>

      {/* Hero Content */}
      <motion.section 
        id="HOME" 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl text-center z-10"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-block px-4 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium"
        >
          Available for New Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
          <span className="text-white">{text}</span>
          <span className="animate-pulse text-blue-500">|</span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          A <span className="text-white font-semibold">Full Stack Developer</span> specialized in building 
          high-performance backend systems with <span className="text-blue-400">Node.js & MySQL</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={Shubh_CV} download>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all flex items-center gap-2"
            >
              Download CV <span>↓</span>
            </motion.button>
          </a>
          
          <button 
            onClick={() => document.getElementById('ABOUT').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-bold rounded-2xl border border-zinc-800 transition-all"
          >
            Explore Work
          </button>
        </motion.div>
      </motion.section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 z-50 bg-blue-600 text-white p-4 rounded-2xl shadow-2xl hover:bg-blue-500 transition-colors border border-blue-400/50"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Modern Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-zinc-950 to-transparent"></div>
    </div>
  );
}