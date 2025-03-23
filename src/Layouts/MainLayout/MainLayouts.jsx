import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Componants/Navbar/Navbar';
import "../../index.css"

const MainLayouts = () => {
    return (
        <div className='inter-font'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;