import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import AboutUsHeader from '../components/AboutUsHeader';
import AboutUsCollapsible from '../components/AboutUsCollapsible.js';
import AboutUsLocation from '../components/AboutUsLocation';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <>
    <Navbar />
    <AboutUsHeader />
    <AboutUsCollapsible />
    <AboutUsLocation />
    <Footer />
    </>
  );
}

export default AboutUs;