import { Link } from "react-router";

import { IoIosArrowDown, IoIosPeople } from "react-icons/io";
import { useState } from "react";
import { FaTachometerAlt, FaShoppingCart, FaBox, FaUsers, FaStore, FaMoneyBillWave, FaChartBar, FaBullhorn, FaCog, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";

import { CiGrid42 } from "react-icons/ci";
import { NavLink } from "react-router";
import { IoBagHandleOutline } from "react-icons/io5";
import './DashboardSideBar.css';
import { AiTwotoneSound } from "react-icons/ai";
import { BiCertification } from "react-icons/bi";
import logo from "../assets/logo.png"





const DashboardSideBar = () => {
    const DashboardListItem = ({text})=> <>
     <button className="w-full text-left px-4 py-2 rounded-md border-white">{text}</button>
    </>
    const [active, setActive] = useState("Dashboard");
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const role = "superAdmin"


    const toggleSubMenu = (name) => {
        setOpenSubMenu(openSubMenu === name ? null : name);
    };
    return (
        <div className={`md:w-[250px]    h-screen flex flex-col gap-2 overflow-y-scroll border-r dark:border-r-black overflow-x-hidden sticky top-0 `}>

            <div>
                <div className="flex items-center justify-center pt-10">
                    {/* logo */}
                    <Link to="/"><img src={logo} alt="logo" className="h-20" /></Link>

                </div>
                <div>

                    {
                        role === "superAdmin" && <>

                            <ul className=" my-10">
                                <NavLink to="/dashboard" className="flex items-center gap-3 pl-4 py-2 mx-2 block rounded-lg "><CiGrid42 className="text-xl font-semibold" /> Dashboard</NavLink>
                      

                                {/* products */}
                                <li>
                          
                                    <button className="flex items-center justify-between w-full text-left px-4 py-2" onClick={() => toggleSubMenu("products")}>
                                        <span className="flex items-center gap-2"><IoBagHandleOutline />Products</span>
                                        <FaChevronDown className={`${openSubMenu === "products" ? "rotate-180" : ""} transition-transform`} />
                                    </button>
                                    {openSubMenu === "products" && (
                                        <ul className="mt-1 text-sm space-y-1 w-full px-4">
                                            <NavLink to="/dashboard/addProducts" className=" py-2 rounded-lg" ><DashboardListItem text={"Add Products"}></DashboardListItem></NavLink>
                                        </ul>
                                    )}
                                </li>
                                <NavLink to="/dashboard/addBlogs" className="flex items-center gap-3 pl-4 py-2 mx-2  rounded-lg "><CiGrid42 className="text-xl font-semibold" /> Add Blogs</NavLink>
                              
                                <NavLink to="/dashboard/allBlogs" className="flex items-center gap-3 pl-4 py-2 mx-2  rounded-lg "><CiGrid42 className="text-xl font-semibold" /> All Blogs</NavLink>
                                {/* <li>
                          
                                    <button className="flex items-center justify-between w-full text-left px-4 py-2" onClick={() => toggleSubMenu("advertise")}>
                                        <span className="flex items-center gap-2"><AiTwotoneSound />Advertise</span>
                                        <FaChevronDown className={`${openSubMenu === "advertise" ? "rotate-180" : ""} transition-transform`} />
                                    </button>
                                    {openSubMenu === "advertise" && (
                                        <ul className="mt-1 text-sm space-y-1 w-full px-4">
                                            <NavLink to="/dashboard/advertise" className=" py-2 rounded-lg" ><DashboardListItem text={"Advertise"}></DashboardListItem></NavLink>
                                        </ul>
                                    )}
                                </li> */}
                                <NavLink to="/dashboard/advertise" className="flex items-center gap-3 pl-4 py-2 mx-2  rounded-lg "><AiTwotoneSound className="text-xl font-semibold" /> Advertise</NavLink>
                                <NavLink to="/dashboard/certification" className="flex items-center gap-3 pl-4 py-2 mx-2  rounded-lg "><BiCertification className="text-xl font-semibold" /> Certification</NavLink>
                                <NavLink to="/dashboard/partners" className="flex items-center gap-3 pl-4 py-2 mx-2  rounded-lg "><IoIosPeople className="text-xl font-semibold" /> Partners</NavLink>



                            </ul>

                        </>
                    }

               













                </div>









            </div>

        </div>
    );
};

export default DashboardSideBar;