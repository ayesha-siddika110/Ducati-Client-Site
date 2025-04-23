import React from 'react';
import { Link, NavLink } from 'react-router';

import logo from '../../assets/logo.png'
import PrimaryButton from '../Button/PrimaryButton';
import useTheme from '../../Hooks/useTheme';
import { FaMobileAlt, FaUsersCog } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import telegram from "../../assets/logos/icons8-telegram-48.png"
import instagram from "../../assets/logos/icons8-instagram-48.png"
import twitter from "../../assets/logos/icons8-twitter-bird-48.png"
import linkedin from "../../assets/logos/icons8-linkedin-48.png"
import facebook from "../../assets/logos/icons8-facebook-48 (1).png"
import useAuth from '../../Hooks/useAuth';
import Tooltip from '../Share/Tooltip';
import './Navbar.css'


const Navbar = () => {
  const { color } = useTheme()
  const { user } = useAuth()
  const links = <>
    <NavLink to="/" className="py-2 px-2 rounded-lg">Home</NavLink>
    <NavLink to="/aboutUs" className="py-2 px-2 rounded-lg">About Us</NavLink>
    <NavLink to="/allProducts" className="py-2 px-2 rounded-lg">Products</NavLink>
    <NavLink to="/Clients" className="py-2 px-2 rounded-lg">Clients</NavLink>
    <NavLink to="/gellary" className="py-2 px-2 rounded-lg">Gallery</NavLink>
    <NavLink to="/blogs" className="py-2 px-2 rounded-lg">Blogs</NavLink>
    <NavLink to="/contact" className="py-2 px-2 rounded-lg">Contact Us</NavLink>
  </>

  return (
    <div>
      <div className="">
        {/* Top Heading */}
        <div style={{ backgroundColor: color?.primary }}>
          <div className="text-white text-center py-2 flex flex-wrap justify-between items-center w-[90%] m-auto text-sm md:flex-nowrap md:text-left">

            {/* Address & Phone */}
            <div className="flex flex-wrap items-center gap-3 md:gap-5 justify-center md:justify-start w-full md:w-auto">
              <div className="flex items-center gap-1">
                <MdLocationOn className="text-xl" />
                <p>Uttara, Dhaka-1230, Bangladesh.</p>
              </div>
              <span className="hidden md:block">|</span>
              <div className="flex items-center gap-1">
                <FaMobileAlt />
                <p>+8801713301292</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 justify-center m-auto md:m-0 mt-2 md:mt-0">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="telegram" className="w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="instagram" className="w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="twitter" className="w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="linkedin" className="w-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="facebook" className="w-6" />
              </a>
            </div>

          </div>
        </div>

        {/* Middle Navbar */}
        <nav className=" bg-[#F5F5F5] text-[#070707] py-2">
          <div className="flex justify-between w-[90%] items-center mx-auto">
            <div className='md:w-[20%]'>
              <Link to="/"><img src={logo} alt="Logo" className='h-[60px]' /></Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-center md:w-[60%]">
              <ul className="menu menu-horizontal space-x-4 text-[14px]">
                {links}
              </ul>
            </div>

            {/* Right Section: Icons & Auth */}
            <div className="flex justify-end items-center gap-5 text-2xl md:w-[20%]"  >
              {/* Mobile Menu Toggle */}
              <div className="dropdown dropdown-end lg:hidden">
                <div tabIndex={0} role="button">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-[#070707] rounded-box z-[50] w-52 flex flex-col space-y-3 p-4 text-[14px] shadow text-center">
                  {links}
                </ul>
              </div>

              {/* let's talk */}

              <PrimaryButton text={"Let's Talk"}></PrimaryButton>
              {/* Login */}
              {
                user ? <Link to="dashboard"><Tooltip text="dashboard">
                <FaUsersCog className='text-2xl' />
                </Tooltip></Link>
                : 
                <Link to="/login"><PrimaryButton text={"Login"}></PrimaryButton></Link>
              }
              {/* Theme Toggle */}
              








            </div>
          </div>
        </nav>


      </div>
    </div>
  );
};

export default Navbar;