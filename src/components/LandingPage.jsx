import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

const LandingPage = () => {
    return (
        <>
      <Header/>
        <Outlet/>
    </>
    );
};

export default LandingPage;
