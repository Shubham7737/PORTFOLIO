import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] text-center max-w-lg z-10 shadow-2xl"
      >
        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 10, stiffness: 100, delay: 0.2 }}
          className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        <h1 className="text-4xl font-bold text-white mb-4 italic">Message Sent!</h1>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          Thanks for reaching out, <span className="text-blue-400 font-semibold">Shubham</span> will get back to you shortly.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-zinc-100 text-black px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}