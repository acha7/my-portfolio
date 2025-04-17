

import React from 'react';

const ResumeSection = () => {


  const techStack = [
    'JavaScript',
    'HTML $ CSS',
    'Reactjs',
    'Tailwind',
    'Python',
    'Natural language Processing',
    'Machine Learning',
    'Git & GitHub',
  ];

 

  return (
    <section
      id="resume"
      className="bg-gradient-to-b  py-20 px-6 overflow-hidden" 
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-forest uppercase tracking-wider mb-2">
          My Resume
        </h2>
        <div className="w-24 h-1 bg-forest mx-auto mb-12 rounded-full animate-pulse"></div>

        {/* Summary Section */}
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          I’m a software engineer and data analyst passionate about building beautiful, functional applications and solving problems through code and data. Here’s a breakdown of what I bring to the table.
        </p>

       
       

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-forest mb-4">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-forest text-forest font-semibold rounded-full shadow-sm hover:bg-green-700 hover:text-black transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

       

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="/Achaleke Prodencia.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 hover:scale-105 transition-all duration-300"
          >
            🚀 View Resume
          </a>
          <a
            href="/Achaleke Prodencia.pdf"
            download
            className="inline-block px-6 py-3 border-2 border-green-700 text-green-700 font-semibold rounded-lg hover:bg-green-100 hover:scale-105 transition-all duration-300"
          >
            ⬇️ Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
