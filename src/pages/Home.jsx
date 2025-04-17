// // HomeSection.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// import { motion } from 'framer-motion';
// import About from '../pages/About';
// import Projects from '../pages/Projects';
// import Contact from '../pages/Contact';
// import Wins from '../pages/Wins'
// import Resume from '../pages/Resume'



// const HomeSection = () => {
//   return (
//     <div>
//         <section
//       id="home"
//       className="bg-white min-h-screen flex items-center px-6 py-20 md:py-0"
//     >
//       <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
//         {/* LEFT: Text Section */}
//         <motion.div
//           className="space-y-6"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
//             Hi, I'm{' '}
//             <span className="pages text-forest">Fuateh Ngwa Prodencia Achaleke</span>
//           </h1>
//           <p className="text-xl text-gray-700">
//             A <span className="text-white font-semibold">Software Engineer and</span> {' '}
//             <span className="text-white font-semibold">Data Analyst</span>
//           </p>

//           <Link to="/contact">
//             <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-black transition duration-300">
//               Hire Me
//             </button>
//           </Link>
//         </motion.div>

//         {/* RIGHT: Image Section */}
//         <motion.div
//           className="relative w-full flex justify-center items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.85 }}
//         >
//           <div className="relative w-[300px] h-[350px]">
//             {/* Your Profile Image */}
//             <img
              
              
//               className=" im w-full h-full object-cover rounded-lg shadow-xl z-10"
//             />

//             {/* Decorative Top Right Line */}
//             <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-700 rounded-tr-lg z-0"></div>

//             {/* Decorative Bottom Left Line */}
//             <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-green-700 rounded-bl-lg z-0"></div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//     <Wins /> <br /><br /><br />
//     <About />
//     <Projects />
//     <Resume />
//     <Contact />
//     </div>

//   );
// };

// export default HomeSection;

import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Wins from '../pages/Wins';
import Resume from '../pages/Resume';

const HomeSection = () => {
  return (
    <div>
      <section
        id="home"
        className="bg-gradient-to-r from-forest to-blue-500 min-h-screen flex items-center px-6 py-20 md:py-0"
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
              <span className="text-green-700">Fuateh Ngwa Prodencia Achaleke</span>
            </h1>
            <p className="text-xl text-gray-200">
              A <span className="text-white font-semibold">Software Engineer</span> and{' '}
              <span className="text-white font-semibold">Data Analyst</span>
            </p>

            <Link to="/contact">
              <button className="bg-green-700 text-white px-8 py-3 rounded-lg shadow-md hover:bg-black transition duration-300 transform hover:scale-105">
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
            <div className="relative w-[300px] h-[350px] md:w-[400px] md:h-[450px]">
              {/* Your Profile Image */}
              <img
                src="https://via.placeholder.com/400x450"
                
                className="im w-full h-full object-cover rounded-lg shadow-xl z-10"
              />

              {/* Decorative Top Right Line */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-700 rounded-tr-lg z-0"></div>

              {/* Decorative Bottom Left Line */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-green-700 rounded-bl-lg z-0"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <Wins />
      <br />
      <br />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
};

export default HomeSection;
