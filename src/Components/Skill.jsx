import React from "react";
import { motion } from "framer-motion";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { FaBootstrap, FaJava, FaJsSquare } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const skills = [
  { icon: <BiLogoCPlusPlus />, label: "C++", color: "text-blue-500" },
  { icon: <FaJava />, label: "Java", color: "text-red-600" },
  { icon: <IoLogoHtml5 />, label: "HTML", color: "text-orange-600" },
  { icon: <IoLogoCss3 />, label: "CSS", color: "text-blue-600" },
  { icon: <FaJsSquare />, label: "JavaScript", color: "text-yellow-400" },
  { icon: <IoLogoNodejs />, label: "NodeJS", color: "text-green-600" },
  { icon: <SiMongodb />, label: "MongoDB", color: "text-green-500" },
  { icon: <IoLogoReact />, label: "React", color: "text-blue-400" },
  { icon: <FaBootstrap />, label: "Bootstrap", color: "text-purple-600" },
  { icon: <RiTailwindCssFill />, label: "Tailwind", color: "text-teal-400" },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 bg-zinc-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          🚀 My Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`text-5xl ${skill.color}`}>{skill.icon}</div>
              <p className="mt-3 text-lg font-medium">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
