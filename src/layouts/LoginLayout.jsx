/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from "react-router-dom";
import Footer from '../pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
    );
};

export default LoginLayout;