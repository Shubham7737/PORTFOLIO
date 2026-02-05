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
    <div id="ABOUT" className="py-20 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-16">

        {/* Profile Picture with Modern Glow */}
        <motion.div 
          className="pic w-full lg:w-2/5 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="relative group">
            {/* Background Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <img
              src="/Images/shubham.jpg" 
              alt="Shubham Danu"
              className="relative rounded-2xl shadow-2xl w-full max-w-sm h-[480px] object-cover border border-zinc-800"
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
            <h1 className="text-4xl font-extrabold mb-10 text-white">
              My <span className="text-blue-500">Journey</span>
            </h1>
            
            {/* Current Job: TeamIndia Web Design */}
            <div className="relative pl-8 border-l-2 border-blue-500 mb-10">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#3b82f6]"></div>
              <h2 className="text-2xl font-bold text-white">Backend Developer</h2>
              <h3 className="text-blue-400 font-semibold mt-1">TeamIndia Web Design, Jaipur</h3>
              <p className="text-zinc-500 text-sm mb-3">Dec 2025 - Present</p>
              <p className="text-zinc-400 leading-relaxed">
                Currently building high-performance server-side logic and database schemas. 
                My core focus is on <span className="text-white font-medium">Node.js</span> and 
                <span className="text-white font-medium"> MySQL</span>, ensuring seamless data 
                integration and API security for diverse web projects.
              </p>
            </div>

            {/* Internship: Delaine Technologies */}
            <div className="relative pl-8 border-l-2 border-zinc-700">
              <div className="absolute w-4 h-4 bg-zinc-700 rounded-full -left-[9px] top-1"></div>
              <h2 className="text-2xl font-bold text-white opacity-90">MERN Stack Intern</h2>
              <h3 className="text-zinc-400 font-semibold mt-1">Delaine Technologies Pvt. Ltd., Hisar</h3>
              <p className="text-zinc-500 text-sm mb-3">May 2025 - July 2025 (3 Months)</p>
              <p className="text-zinc-400 leading-relaxed">
                Kickstarted my career with an intensive internship on the <span className="text-zinc-300">MERN Stack</span>. 
                Mastered <span className="text-zinc-300">MongoDB, Express, React, and Node.js</span> by 
                contributing to full-stack applications and collaborative coding environments.
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
            <h1 className="text-3xl font-bold mb-4 text-white">Get to know me!</h1>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Hey! I'm <span className="text-white font-semibold">Shubham Danu</span>. Over the past year, 
              I've evolved from a curious learner to a result-oriented developer. 
              With a background in both SQL and NoSQL, I love solving backend puzzles and 
              optimizing data flow.
            </p>
            
            <motion.a 
              href="#CONTACT"
              whileHover={{ scale: 1.05, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border border-blue-500 text-blue-500 font-bold py-3 px-10 rounded-full transition-all duration-300 hover:text-white"
            >
              Let's Connect
            </motion.a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}