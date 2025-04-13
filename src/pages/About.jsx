
import React from 'react';
export default function About() {
    return (
        <div>
                    <section id="about" className="bg-white py-16 px-6">
           <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <h2 className="bounce text-3xl font-bold text-forest mb-2 uppercase animate-fade-in-up">Know Me More</h2>
          <div className="h-1 w-24 bg-forest mb-10"></div>
      
          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Left Text Side */}
            <div className="space-y-6 text-black">
              {/* What I love to do */}
              <div>
                
                <p className="text-gray-700">
                  I enjoy building efficient and user-friendly web applications that solve real-world problems.
                  Working with data and drawing insights also excites me — combining logic with creativity is my thing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest mb-1">What I Love to Do</h3>
                <p className="text-gray-700">
                  I enjoy building efficient and user-friendly web applications that solve real-world problems.
                  Working with data and drawing insights also excites me — combining logic with creativity is my thing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-forest mb-1">What I Love to Do</h3>
                <p className="text-gray-700">
                  I enjoy building efficient and user-friendly web applications that solve real-world problems.
                  Working with data and drawing insights also excites me — combining logic with creativity is my thing.
                </p>
              </div>
      
              {/* Why Hire Me */}
              <div>
                <h3 className="text-xl font-semibold text-forest mb-1">Why Hire Me</h3>
                <p className="text-gray-700">
                  I'm detail-oriented, passionate about innovation, and dedicated to creating meaningful software solutions.
                  My experience as both a Software Engineer and Data Analyst gives me a unique perspective on full-cycle development.
                </p>
              </div>
            </div>
      
            {/* Right Image Side */}
            <div className="relative w-full flex justify-center items-center">
              <div className="relative w-[300px] h-[350px]">
                {/* Main Image */}
                <img
                  src="/assets/profile.jpg"
                  alt="Prodencia"
                  className="w-full h-full object-cover rounded-lg shadow-lg z-10 relative"
                />
      
                {/* Decorative Top Right Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-forest rounded-tr-lg z-0"></div>
                
                {/* Decorative Bottom Left Corner */}
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-forest rounded-bl-lg z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>

    );
  }
  