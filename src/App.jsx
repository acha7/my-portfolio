// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import './App.css'
import './index.css';

import React from 'react';


function App() {
    

  return (
 

    <div>
       <Router>
      <Navbar /> <br />
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>

       <Footer />
     </Router> 
    </div>
  )
}

export default App
