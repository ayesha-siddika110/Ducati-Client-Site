import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import DashboardSideBar from '../../../DashboardNav/DashboardSideBar';
import { ToastContainer } from 'react-toastify';

const DashboardLayout = () => {
    return (
        <div className="flex">
            <ToastContainer
  position="top-right"
  autoClose={false}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>


        <div className="hidden md:flex">
           
            {/* Suspense with a fallback loading UI */}
            <Suspense fallback={<div>Loading Sidebar...</div>}>
                <DashboardSideBar />
            </Suspense>
        </div>

        <div className="bg-[#FAFAFA] w-full">
            
            {/* <Suspense fallback={<div>Loading Header...</div>}>
                <DashboardHeader />
            </Suspense> */}

            <div className="min-h-[85vh] ">
                {/* Outlet remains as is */}
                <Outlet />
            </div>

            {/* <Suspense fallback={<div>Loading Footer...</div>}>
                <DashboardFooter />
            </Suspense> */}
        </div>

    </div>
    );
};

export default DashboardLayout;