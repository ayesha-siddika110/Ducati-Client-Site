import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';
import "../../index.css"
import Footer from '../../Componants/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayouts = () => {
    return (
        <div className='inter-font'>
            <ToastContainer />
            <Navbar></Navbar>
            <div>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;