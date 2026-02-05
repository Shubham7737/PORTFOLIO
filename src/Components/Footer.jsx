import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: <FaInstagram />, 
      href: "https://www.instagram.com/baddwolf__/?hl=en", 
      color: "hover:text-pink-500",
      glow: "hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/Shubham7737", 
      color: "hover:text-white",
      glow: "hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://www.linkedin.com/in/shubham-danu/", // Make sure this is your correct profile link
      color: "hover:text-blue-500",
      glow: "hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
    },
    { 
      icon: <MdOutlineEmail />, 
      href: "mailto:danushubham18@gmail.com", 
      color: "hover:text-sky-400",
      glow: "hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]"
    },
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Logo or Name branding */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent italic">
              Shubham Danu
            </h2>
            <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase mt-1">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Social Links with Modern Hover */}
          <div className="flex justify-center items-center gap-6 mb-10">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-zinc-500 transition-all duration-300 ${social.color} p-3 rounded-full bg-zinc-900/50 border border-white/5 ${social.glow}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-8"></div>

          {/* Footer Bottom Section */}
          <div className="text-center">
            <p className="text-zinc-500 text-sm font-light">
              &copy; {currentYear} | Designed & Built by{" "}
              <span className="text-zinc-200 font-medium hover:text-blue-400 transition-colors cursor-default">
                Shubham Danu
              </span>
            </p>
            <p className="text-[10px] text-zinc-600 mt-2 tracking-widest uppercase">
              Jaipur, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}