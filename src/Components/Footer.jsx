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
      glow: "hover:shadow-[0_10px_20px_rgba(236,72,153,0.3)]"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/Shubham7737", 
      color: "hover:text-slate-900",
      glow: "hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
    },
    { 
      icon: <FaLinkedinIn />, 
      href: "https://www.linkedin.com/in/shubham-danu/",
      color: "hover:text-blue-600",
      glow: "hover:shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
    },
    { 
      icon: <MdOutlineEmail />, 
      href: "mailto:danushubham18@gmail.com", 
      color: "hover:text-sky-500",
      glow: "hover:shadow-[0_10px_20px_rgba(14,165,233,0.3)]"
    },
  ];

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      {/* 3D Modern Background Elements */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] z-0" 
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Social Links with Modern Hover */}
          {/* <div className="flex justify-center items-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.1, rotateZ: 5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-2xl text-slate-500 transition-all duration-300 ${social.color} p-4 rounded-2xl bg-white border border-slate-200 shadow-sm ${social.glow}`}
              >
                {social.icon}
              </motion.a>
            ))}
          </div> */}

          {/* Divider */}
          <div className="w-full max-w-lg h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-10"></div>

          {/* Footer Bottom Section */}
          <div className="text-center">
            <p className="text-slate-500 text-sm font-medium">
              &copy; {currentYear} | Designed & Built by{" "}
              <span className="text-slate-900 font-bold hover:text-blue-600 transition-colors cursor-default">
                Shubham Danu
              </span>
            </p>
            <p className="text-[11px] text-slate-400 mt-3 font-bold tracking-widest uppercase">
              Jaipur, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}