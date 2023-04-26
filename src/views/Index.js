import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import IndexHeader from '../components/IndexHeader';
import IndexContent from '../components/IndexContent';

function Index() {
  return (
    <>
    <IndexHeader />
    <IndexContent />
    </>
  );
}

export default Index;