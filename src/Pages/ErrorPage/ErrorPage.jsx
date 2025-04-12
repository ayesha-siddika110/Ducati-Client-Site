import React from 'react';
import errorimage from "../../assets/gif/FAM-Compass.gif"
import useTheme from '../../Hooks/useTheme';
import { Link } from 'react-router';

const ErrorPage = () => {
    const {color} = useTheme()
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <img src={errorimage} alt="" />
            <p className='text-gray-400 font-bold text-5xl'>Page not found</p>
            <Link to="/"><button className=' text-white py-1 px-3 rounded-lg mt-6 cursor-pointer' style={{backgroundColor: color?.primary}}>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;