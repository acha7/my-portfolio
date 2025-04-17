
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">Prodencia</div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-forest text-2xl">
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Navbar Links (Desktop) */}
        <div className={`lg:flex space-x-6 font-medium hidden ${isMenuOpen ? 'block' : 'lg:block'}`}>
          <Link to="/" className="text-green-700 relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-green-700 after:absolute after:left-0 after:bottom-0">
            Home
          </Link>
          <Link to="/about" className="text-green-700 relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-green-700 after:absolute after:left-0 after:bottom-0">
            About
          </Link>
          <Link to="/projects" className="text-green-700 relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-green-700 after:absolute after:left-0 after:bottom-0">
            Projects
          </Link>
          <Link to="/resume" className="text-green-700 relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-green-700 after:absolute after:left-0 after:bottom-0">
            Resume
          </Link>
          <Link to="/contact" className="text-green-700 relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-green-700 after:absolute after:left-0 after:bottom-0">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 text-forest text-xl">
          <a href="https://www.facebook.com/achaleke.prudencia" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-blue-600 transition-all duration-300">
            <FaFacebook />
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-green-500 transition-all duration-300">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/achaleke_prudencia_/profilecard/?igsh=MTJ1ZWR1ODY5ZmV0ZQ==" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-pink-600 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/achaleke-prudencia-784aa722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-forest hover:text-blue-700 transition-all duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Menu (Responsive) */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4`}>
        <Link to="/" className="block py-2 text-green-700">Home</Link>
        <Link to="/about" className="block py-2 text-green-700">About</Link>
        <Link to="/projects" className="block py-2 text-green-700">Projects</Link>
        <Link to="/resume" className="block py-2 text-green-700">Resume</Link>
        <Link to="/contact" className="block py-2 text-green-700">Contact</Link>
      </div>
    </nav>
  );
}
