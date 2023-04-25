import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../components/Navbar';
import BookingHeader from '../components/BookingHeader';
import BookingWidget from '../components/BookingWidget';
import Footer from '../components/Footer';

function Booking() {
  return (
    <>
    <Navbar />
    <BookingHeader />
    <BookingWidget />
    <Footer />
    </>
  );
}

export default Booking;