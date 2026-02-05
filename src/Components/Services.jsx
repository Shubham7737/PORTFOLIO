import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    video: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4',
    title: 'Responsive Web Design',
    des: 'Crafting visually stunning and fully responsive websites that provide a seamless user experience across all devices and screen sizes.',
    color: 'from-blue-500/20'
  },
  {
    video: 'https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4',
    title: 'React App Development',
    des: 'Building high-performance Single Page Applications (SPAs) with React.js, focusing on state management, reusable components, and speed.',
    color: 'from-cyan-500/20'
  },
  {
    video: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4', // New Backend Video
    title: 'Backend & API Solutions',
    des: 'Developing robust server-side logic and secure APIs using Node.js and MySQL to power your applications with reliable data management.',
    color: 'from-indigo-500/20'
  },
];

export default function Services() {
  return (
    <div id="SERVICES" className="bg-zinc-950 py-24 px-6 relative overflow-hidden">
      
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Expertise <span className="text-blue-500">& Services</span>
        </h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className={`group relative bg-zinc-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500`}
          >
            {/* Gradient Overlay on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Video Container */}
            <div className="relative h-60 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              ></video>
            </div>

            {/* Content Section */}
            <div className="p-8 relative z-20">
              <div className="mb-4 inline-block p-3 rounded-2xl bg-blue-600/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              
              <h2 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h2>
              
              <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
                {item.des}
              </p>

              <div className="mt-6 flex items-center text-blue-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Learn More <span className="ml-2">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}