import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/service', label: 'Service' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-zinc-950 text-white shadow-lg relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-500 z-50">Shubham</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-zinc-900 px-4 z-40 shadow-md 
        ${isMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
