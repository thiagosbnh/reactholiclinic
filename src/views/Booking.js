import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import BookingHeader from '../components/BookingHeader';
import BookingWidget from '../components/BookingWidget';

function Booking() {
  return (
    <>
    <BookingHeader />
    <BookingWidget />
    </>
  );
}

export default Booking;