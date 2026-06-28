import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <div id="ABOUT" className="py-12 bg-white overflow-hidden relative">
      {/* 3D Modern Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-32 -right-32 w-96 h-96 bg-blue-50 rounded-full blur-[100px] z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] z-0" 
      />

      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">

        {/* Profile Picture with Modern Glow */}
        <motion.div 
          className="pic w-full lg:w-2/5 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          whileHover={{ scale: 1.02, rotateY: 5 }}
        >
          <div className="relative group perspective-1000">
            {/* Background Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            
            <img
              src="/Images/shubham.jpg" 
              alt="Shubham Danu"
              className="relative rounded-3xl shadow-2xl w-full max-w-sm h-[480px] object-cover border-4 border-white transform transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* About Content */}
        <div className="rightAbout w-full lg:w-3/5">
          
          {/* Professional Experience Section */}
          <motion.div 
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideIn}
          >
            <h1 className="text-4xl font-extrabold mb-10 text-slate-900">
              My <span className="text-blue-600">Journey</span>
            </h1>
            
            {/* Current Job: TeamIndia Web Design */}
            <div className="relative pl-8 border-l-2 border-blue-600 mb-10">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <h2 className="text-2xl font-bold text-slate-800">Backend Developer</h2>
              <h3 className="text-blue-600 font-semibold mt-1">TeamIndia Web Design, Jaipur</h3>
              <p className="text-slate-500 text-sm mb-3 font-medium">Dec 2025 - Present</p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Currently building high-performance server-side logic and database schemas. 
                My core focus is on <span className="text-slate-900 font-bold">Node.js</span> and 
                <span className="text-slate-900 font-bold"> MySQL</span>, ensuring seamless data 
                integration and API security for diverse web projects.
              </p>
            </div>

            {/* Internship: Delaine Technologies */}
            <div className="relative pl-8 border-l-2 border-slate-300">
              <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
              <h2 className="text-2xl font-bold text-slate-800 opacity-90">MERN Stack Intern</h2>
              <h3 className="text-slate-500 font-semibold mt-1">Delaine Technologies Pvt. Ltd., Hisar</h3>
              <p className="text-slate-500 text-sm mb-3 font-medium">May 2025 - July 2025 (3 Months)</p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Kickstarted my career with an intensive internship on the <span className="text-slate-800 font-medium">MERN Stack</span>. 
                Mastered <span className="text-slate-800 font-medium">MongoDB, Express, React, and Node.js</span> by 
                contributing to full-stack applications and collaborative coding environments.
              </p>
            </div>
{/* Frontend Developer at Kodu Technology */}
<div className="relative pl-8 border-l-2 border-slate-300 mb-10">
  <div className="absolute w-4 h-4 bg-slate-300 rounded-full -left-[9px] top-1"></div>
  <h2 className="text-2xl font-bold text-slate-800">Frontend Developer</h2>
  <h3 className="text-slate-500 font-semibold mt-1">Kodu Technology, Remote</h3>
  <p className="text-slate-500 text-sm mb-3 font-medium">Mar 2024 - Apr 2025</p>
  <p className="text-slate-600 leading-relaxed text-lg">
    Developed responsive, high‑performance front‑end interfaces for travel platforms.
    Utilized React, Tailwind CSS, Framer Motion, and integrated multiple travel APIs.
    Delivered UI components that improved booking conversion rates and user experience.
  </p>
</div>
          </motion.div>

          {/* Personal Bio */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-3xl font-bold mb-4 text-slate-900">Get to know me!</h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Hey! I'm <span className="text-slate-900 font-bold">Shubham Danu</span>. Over the past year, 
              I've evolved from a curious learner to a result-oriented developer. 
              With a background in both SQL and NoSQL, I love solving backend puzzles and 
              optimizing data flow.
            </p>
            
            <motion.a 
              href="#CONTACT"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px -5px rgba(37, 99, 235, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 hover:bg-blue-700 shadow-lg shadow-blue-600/30"
            >
              Let's Connect
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}