import React from "react";
import { motion } from "framer-motion";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaBootstrap, FaJava, FaJsSquare } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const skills = [
  { icon: <BiLogoCPlusPlus />, label: "C++", color: "text-blue-600" },
  { icon: <FaJava />, label: "Java", color: "text-red-500" },
  { icon: <IoLogoHtml5 />, label: "HTML", color: "text-orange-500" },
  { icon: <IoLogoCss3 />, label: "CSS", color: "text-blue-500" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-500" },
  { icon: <IoLogoNodejs />, label: "NodeJS", color: "text-green-600" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
  { icon: <IoLogoReact />, label: "React", color: "text-cyan-500" },
  { icon: <SiMysql />, label: "MySql", color: "text-purple-600" },
  { icon: <RiTailwindCssFill />, label: "Tailwind", color: "text-teal-500" },
];

const Skill = () => {
  return (
    <section id="skills" className="py-12 bg-white text-gray-800 relative overflow-hidden">
      {/* 3D Modern Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-80 h-80 bg-blue-50 rounded-full blur-[80px] z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] z-0" 
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 text-slate-900"
        >
          My <span className="text-blue-600">Tech Arsenal</span>
        </motion.h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 10,
                rotateX: -10,
                y: -10 
              }}
              className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div className={`text-5xl ${skill.color} drop-shadow-md`}>{skill.icon}</div>
              <p className="mt-4 text-lg font-bold text-slate-700">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
