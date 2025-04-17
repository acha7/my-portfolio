
import React from 'react';

export default function About() {
    return (
        <div>
            <section id="about" className="bg-white py-16 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    {/* Section Heading */}
                    <h2 className="text-3xl font-bold text-forest mb-2 uppercase text-left animate-fade-in-up">
                        Know Me More
                    </h2>
                    {/* Short line */}
                    <hr className="w-20 h-[2px] bg-green-700 mb-4 ml-0" /> 
                    <div className="h-1 w-14 bg-forest mb-10 ml-0"></div> 
           

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

                        {/* Left Text Side */}
                        <div className="space-y-6 text-black">
                            {/* Introduction */}
                            <div>
                                <p className="text-lg text-gray-700">
                                    I enjoy building efficient and user-friendly web applications that solve real-world problems. 
                                    Working with data and drawing insights excites me — combining logic with creativity is my thing.
                                </p>
                            </div>

                            {/* What I Love to Do */}
                            <div>
                                <h3 className="text-xl font-semibold text-forest mb-1">What I Love to Do</h3>
                                <p className="text-gray-700">
                                    I enjoy creating web applications that are not only functional but also easy to use. My passion lies in merging 
                                    technology with creativity to solve complex challenges.
                                </p>
                            </div>

                            {/* Why Hire Me */}
                            <div>
                                <h3 className="text-xl font-semibold text-forest mb-1">Why Hire Me</h3>
                                <p className="text-gray-700">
                                    I'm detail-oriented, passionate about innovation, and dedicated to creating meaningful software solutions. 
                                    My background as a Software Engineer and Data Analyst enables me to handle full-cycle development efficiently.
                                </p>
                            </div>

                            {/* Additional Skills */}
                            <div>
                                <h3 className="text-xl font-semibold text-forest mb-1">Skills & Expertise</h3>
                                <p className="text-gray-700">
                                    I specialize in JavaScript, React, Python, and data analysis tools. I love tackling challenges with a mix of coding, 
                                    problem-solving, and analytical thinking to deliver high-quality solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Image Side */}
                        <div className="relative w-full flex justify-center items-center">
                            <div className="relative w-[300px] h-[350px] rounded-lg shadow-lg">
                                {/* Main Image */}
                                <img
                                    src="https://via.placeholder.com/300x350" // Placeholder image
                                    
                                    className="im w-full h-full object-cover rounded-lg shadow-xl z-10"
                                />

                                {/* Decorative Top Right Corner */}
                                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-green-700 rounded-tr-lg z-0"></div>

                                {/* Decorative Bottom Left Corner */}
                                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-green-700 rounded-bl-lg z-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

  