import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Index from './views/Index';
import AboutUs from './views/AboutUs';
import Booking from './views/Booking';
import ContactUs from './views/ContactUs';


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />        
      </div>
    </>
  );
}

export default App;
