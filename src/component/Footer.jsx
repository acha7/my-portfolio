import { Link } from 'react-router-dom';
import React from 'react';

import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-bold text-lg mb-2">About Me</h4>
            <p>Fuateh Ngwa Prodencia, Software Engineer and Data Analyst. Passionate about building useful digital experiences.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#projects">Projects</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Navigation</h4>
            <ul>
              <li><Link to="/resume">Resume</Link></li>
              <li><Link to="#contact">Contact</Link></li>
            </ul>
          </div>
          <div className="flex space-x-4 text-2xl">
            <a href="#"><FaFacebook className='pages'/></a>
            <a href="#"><FaWhatsapp className='pages'/></a>
            <a href="#"><FaInstagram className='pages'/></a>
            <a href="#"><FaLinkedin className='pages'/></a>
          </div>
        </div>
      </footer>
    );
  }
  