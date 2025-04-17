
  
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div>
      <section id="contact" className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="p-8 rounded-lg shadow-xl bg-white">
            <h2 className="text-3xl font-extrabold text-forest mb-6 text-center">
              Leave a Message
            </h2>
            <form className="space-y-6">
              <input
                className="w-full border-2 border-gray-300 rounded-lg px-6 py-3 focus:ring-2 focus:ring-forest transition duration-300"
                placeholder="Name"
              />
              <input
                className="w-full border-2 border-gray-300 rounded-lg px-6 py-3 focus:ring-2 focus:ring-forest transition duration-300"
                placeholder="Email"
              />
              <textarea
                className="w-full border-2 border-gray-300 rounded-lg px-6 py-3 focus:ring-2 focus:ring-forest transition duration-300"
                placeholder="Your Message"
                rows="5"
              />
              <button className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition duration-300">
                Submit
              </button>
            </form>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col justify-center items-center space-y-6 text-3xl text-forest">
            <h2 className="text-2xl font-bold text-center mb-4 text-forest">Connect with Me</h2>
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/achaleke.prudencia"
                className="hover:text-green-700 transition duration-300"
              >
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-700 transition duration-300">
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/achaleke_prudencia_/profilecard/?igsh=MTJ1ZWR1ODY5ZmV0ZQ=="
                className="hover:text-green-700 transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/achaleke-prudencia-784aa722a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="hover:text-green-700 transition duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
