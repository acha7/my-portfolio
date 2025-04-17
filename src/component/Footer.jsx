
import { Link } from 'react-router-dom';
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10">
        {/* About Me */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold mb-3 text-forest">About Me</h4>
          <p className="text-gray-300 text-sm">
            Fuateh Ngwa Prodencia, Software Engineer and Data Analyst. Passionate about building useful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold mb-3 text-forest">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-forest transition duration-300">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-forest transition duration-300">About</Link></li>
            <li><Link to="/projects" className="text-gray-300 hover:text-forest transition duration-300">Projects</Link></li>
          </ul>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold mb-3 text-forest">Navigation</h4>
          <ul className="space-y-2">
            <li><Link to="/resume" className="text-gray-300 hover:text-forest transition duration-300">Resume</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-forest transition duration-300">Contact</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 text-3xl text-gray-300">
          <a href="https://www.facebook.com/achaleke.prudencia" className="hover:text-blue-600 transition duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-green-500 transition duration-300">
            <FaWhatsapp />
          </a>
          <a href="https://www.instagram.com/achaleke_prudencia_/profilecard/?igsh=MTJ1ZWR1ODY5ZmV0ZQ==" className="hover:text-pink-600 transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/achaleke-prudencia-784aa722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="hover:text-blue-700 transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2025 Fuateh Ngwa Prodencia. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

  