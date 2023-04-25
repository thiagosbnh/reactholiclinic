import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Index from './views/Index';
import AboutUs from './views/AboutUs';
import Booking from './views/Booking';
import ContactUs from './views/ContactUs';


function AppRouter() {
  return (
    <>
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" component={Index} exact={true} />
          <Route path="/about" component={AboutUs} />
          <Route path="/booking" component={Booking} />
          <Route path="/contact" component={ContactUs} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  );
}

export default AppRouter;