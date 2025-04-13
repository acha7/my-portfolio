
import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
export default function Contact() {
    return (
     <div>
        <section id="contact" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div>
            <h2 className="text-2xl font-bold text-forest mb-4">Leave a Message</h2>
            <form className="space-y-4">
              <input className="w-full border px-4 py-2" placeholder="Name" />
              <input className="w-full border px-4 py-2" placeholder="Email" />
              <textarea className="w-full border px-4 py-2" placeholder="Your Message" rows="5" />
              <button className="but  text-white px-6 py-2 rounded-lg shadow hover:bg-black transition duration-300">
              submit
            </button>
            </form>
          </div>
          {/* SOCIAL ICONS */}
          <div className="flex flex-col justify-center items-center space-y-4 text-2xl text-forest">
            <a href="#"><FaFacebook className='pages'/></a>
            <a href="#"><FaWhatsapp className='pages'/></a>
            <a href="#"><FaInstagram className='pages'/></a>
            <a href="#"><FaLinkedin className='pages'/></a>
          </div>
        </div>
      </section>
      </div>
    );
  }
  