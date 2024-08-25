import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navber from '../pages/Shared/Navber/Navber';

const Main = () => {
    return (
        <div><h2>momin</h2>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;