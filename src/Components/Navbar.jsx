import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-zinc-950 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Brand */}
        <div>
          <h1 className="text-2xl font-extrabold text-blue-500">Shubham</h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-6">
          {["/", "/about", "/service", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="text-white hover:text-blue-400 transition duration-300"
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-900 py-4 px-4 space-y-4 animate__animated animate__fadeInDown">
          {["/", "/about", "/service", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="block text-white hover:text-blue-400 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
