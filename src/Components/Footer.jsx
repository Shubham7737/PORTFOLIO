import React from 'react';
import { FaInstagram, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-8">
      {/* Social Links */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a
          href="https://www.instagram.com/baddwolf__/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaInstagram className="text-2xl text-pink-500 hover:text-pink-600" />
        </a>
        <a
          href="https://github.com/Shubham7737"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <FaGithub className="text-2xl hover:text-gray-400" />
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <CiLinkedin className="text-3xl text-blue-400 hover:text-blue-600" />
        </a>
        <a
          href="mailto:danushubham18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition-transform"
        >
          <MdOutlineEmail className="text-2xl text-sky-400 hover:text-sky-600" />
        </a>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="text-sm text-gray-400">
          Made with ❤️ by <span className="text-white font-semibold">Shubham Danu</span>
        </p>
      </div>
    </footer>
  );
}
