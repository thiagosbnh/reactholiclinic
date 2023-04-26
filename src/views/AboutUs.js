import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import AboutUsHeader from '../components/AboutUsHeader';
import AboutUsCollapsible from '../components/AboutUsCollapsible.js';
import AboutUsLocation from '../components/AboutUsLocation';

function AboutUs() {
  return (
    <>
    <AboutUsHeader />
    <AboutUsCollapsible />
    <AboutUsLocation />
    </>
  );
}

export default AboutUs;