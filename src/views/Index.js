import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import IndexHeader from '../components/IndexHeader';
import IndexContent from '../components/IndexContent';
import Footer from '../components/Footer';

function Index() {
  return (
    <>
    <Navbar />
    <IndexHeader />
    <IndexContent />
    <Footer />
    </>
  );
}

export default Index;