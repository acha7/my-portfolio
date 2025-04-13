// Inside Home.jsx or wherever you're building your homepage
import React from 'react';
import { Link } from 'react-router-dom';

const ResumeSection = () => {
  return (
    <div>
         <section id="resume" className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-forest uppercase mb-4">My Resume</h2>
        <div className="h-1 w-24 bg-forest mx-auto mb-10"></div>

        {/* Resume Preview */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <img
            src="/assets/resume-preview.jpg"
            alt="Resume Preview"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />

          <div className="space-y-4 text-left">
            <p className="text-gray-700">
              Have a look at my professional resume showcasing my skills, work experience, and education background.
            </p>

            <Link to="/resume-full">
              <button className="but text-white px-6 py-2 rounded-lg hover:bg-black transition duration-300">
                See Full Resume
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default ResumeSection;
