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
    <nav className="bg-white text-gray-900 shadow-md relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-600 z-50">Shubham</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-700 hover:text-blue-600 font-medium transition duration-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden z-50">
          <button onClick={toggleMenu} className="text-gray-900 text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-gray-50 px-4 z-40 border-b border-gray-200 
        ${isMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="text-gray-800 font-medium hover:text-blue-600 transition duration-300"
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
