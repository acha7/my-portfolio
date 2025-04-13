// import { Link } from 'react-router-dom'
// import React from 'react';

// import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-10">
//       <div className="text-2xl font-bold text-forest">Prodencia</div>

//       <div className="space-x-6 text-black font-medium">
//         <Link to="/">Home</Link>
//         <Link
//             to="/about"
//             className="hover:text-blue-400"
//           >
//             About
            
//           </Link>
//         <Link to="/experience">Experiences</Link>
//         <Link to="/resume">Resume</Link>
//         <Link to="/contact">Contact</Link>
//       </div>

//       <div className="flex space-x-4 text-forest text-xl">
//         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
//         <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
//         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
//       </div>
//     </nav>
//   )
// }

import { Link } from 'react-router-dom'
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed w-full z-10">
      <div className="text-2xl font-bold text-forest">Prodencia</div>

      <div className="space-x-6 text-forest font-medium">
        <Link to="/" className=" pages relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-forest after:absolute after:left-0 after:bottom-0">
          Home
        </Link>
        <Link to="/about" className="pages relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-forest after:absolute after:left-0 after:bottom-0">
          About
        </Link>
        <Link to="/projects" className="pages relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-forest after:absolute after:left-0 after:bottom-0">
          Projects
        </Link>
        <Link to="/resume" className="pages relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-forest after:absolute after:left-0 after:bottom-0">
          Resume
        </Link>
        <Link to="/contact" className="pages relative hover:after:w-full after:w-0 after:transition-all after:duration-300 after:h-[2px] after:bg-forest after:absolute after:left-0 after:bottom-0">
          Contact
        </Link>
      </div>

      <div className="flex space-x-4 text-forest text-xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='pages'><FaFacebook /></a>
        <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className='pages'><FaWhatsapp /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='pages'><FaInstagram /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='pages'><FaLinkedin /></a>
      </div>
    </nav>
  )
}
