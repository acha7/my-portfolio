

import React from 'react';
import logo from '../assets/logo.jpg';
import logo11 from '../assets/logo11.png';

const Projects = () => {
  

  const Projects = [
    {
      image: logo,
      name: '237Jobs',
      position: 'Frontend Developer',
      text: 'I have been using this product for months and it has been a game-changer for my business. Highly recommended!',
      link: 'https://237jobs.com'
    },
    {
      image: logo11,
      name: 'TTT-Website',
      position: 'Frontend Developer',
      text: 'This product has exceeded all my expectations. It is easy to use and has greatly improved our team productivity.',
      link: 'https://237jobs.com'
    },
    {
      image: logo,
      name: 'Presentify',
      position: 'B-Tech Project',
      text: 'This product has exceeded all my expectations. It is easy to use and has greatly improved our team productivity.',
      link: 'https://237jobs.com'
    },
    {
      image: logo11,
      name: 'ZEF-Website',
      position: 'Frontend Developer',
      text: 'This product has exceeded all my expectations. It is easy to use and has greatly improved our team productivity.',
      link: 'https://237jobs.com'
    },
    {
      image: logo,
      name: 'Mathematics-Chatbot',
      position: 'Assistant machine Learning Engineer',
      text: 'This product has exceeded all my expectations. It is easy to use and has greatly improved our team productivity.',
      link: 'https://237jobs.com'
    },
    {
      image: logo11,
      name: 'Optical Character Recognition',
      position: 'Machine Learning Intern',
      text: 'This product has exceeded all my expectations. It is easy to use and has greatly improved our team productivity.',
      link: 'https://237jobs.com'
    },
    // Add more testimonials here
  ];

 

  return (
    <section className="testimonial-section">
      <h1 className='testimony-header'>Take a look at some projects i have worked on</h1>
      <p className='testimony-text'>Over the years, i have worked  on some amazing projects.</p> <br></br>
      <div className="testimonial-container">
        {Projects.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-position">{testimonial.position}</p>
            <p className="testimonial-text">{testimonial.text}</p>
            <a
  href={testimonial.link}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800 transition duration-300"
>
  View Project
</a>
      
          </div>
        ))}
      </div>
      
        
    </section>
  );
};

export default Projects;
  