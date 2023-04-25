import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import ContactUsContent from '../components/ContactUsContent';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <>
    <Navbar />
    <ContactUsContent />
    <Footer />
    </>
  );
}

export default AboutUs;