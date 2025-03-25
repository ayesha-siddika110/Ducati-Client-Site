import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';
import "../../index.css"

const MainLayouts = () => {
    return (
        <div className='inter-font'>
            <Navbar></Navbar>
            <div>

            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;