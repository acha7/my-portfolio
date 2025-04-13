// HomeSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Wins from '../pages/Wins'
import Resume from '../pages/Resume'



const HomeSection = () => {
  return (
    <div>
        <section
      id="home"
      className="bg-white min-h-screen flex items-center px-6 py-20 md:py-0"
    >
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT: Text Section */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I'm{' '}
            <span className="pages text-forest">Fuateh Ngwa Prodencia Achaleke</span>
          </h1>
          <p className="text-xl text-gray-700">
            A <span className="text-white font-semibold">Software Engineer and</span> {' '}
            <span className="text-white font-semibold">Data Analyst</span>
          </p>

          <Link to="/contact">
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-black transition duration-300">
              Hire Me
            </button>
          </Link>
        </motion.div>

        {/* RIGHT: Image Section */}
        <motion.div
          className="relative w-full flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85 }}
        >
          <div className="relative w-[300px] h-[350px]">
            {/* Your Profile Image */}
            <img
              src="/assets/t3.jpeg"
              
              className=" im w-full h-full object-cover rounded-lg shadow-lg z-10 relative"
            />

            {/* Decorative Top Right Line */}
            <div className="line absolute top-0 right-0 w-16 h-16 border-t-[6px] border-r-[6px] border-forest z-0"></div>

            {/* Decorative Bottom Left Line */}
            <div className="line absolute bottom-0 left-0 w-16 h-16 border-b-[6px] border-l-[6px] border-primary z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
    <Wins /> <br /><br /><br />
    <About />
    <Projects />
    <Resume />
    <Contact />
    </div>

  );
};

export default HomeSection;
