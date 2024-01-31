import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  return (
    <div>
      <Navbar />

      <div className='pt-16 min-h-screen pb-8'>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Root;