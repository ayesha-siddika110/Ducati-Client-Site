import { Link } from "react-router";

import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { FaTachometerAlt, FaShoppingCart, FaBox, FaUsers, FaStore, FaMoneyBillWave, FaChartBar, FaBullhorn, FaCog, FaUser, FaSignOutAlt, FaChevronDown } from "react-icons/fa";

import { CiGrid42 } from "react-icons/ci";
import { NavLink } from "react-router";
import { IoBagHandleOutline } from "react-icons/io5";
import useTheme from "../Hooks/useTheme";
import './DashboardSideBar.css'






const DashboardSideBar = () => {
    const DashboardListItem = (text)=> <>
     <button className="w-full text-left px-4 py-2 rounded-md border-white">{text}</button>
    </>
    const [active, setActive] = useState("Dashboard");
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const role = "superAdmin"


    const toggleSubMenu = (name) => {
        setOpenSubMenu(openSubMenu === name ? null : name);
    };
    const { color, darkMode, toggleDarkMode } = useTheme()
    return (
        <div className={`md:w-[250px]   dark:bg-gray-900 dark:text-white h-screen flex flex-col gap-2 overflow-y-scroll border-r dark:border-r-black overflow-x-hidden sticky top-0 `}>

            <div>
                <div className="flex items-center justify-center pt-10">
                    {/* logo */}

                </div>
                <div>

                    {
                        role === "superAdmin" && <>

                            <ul className=" my-10">
                                <NavLink to="/dashboard" className="flex items-center gap-3 pl-4 py-2 rounded-lg w-full"><CiGrid42 className="text-xl font-semibold" /> Dashboard</NavLink>
                      

                                {/* products */}
                                <li>
                          
                                    <button className="flex items-center justify-between w-full text-left px-4 py-2" onClick={() => toggleSubMenu("products")}>
                                        <span className="flex items-center gap-2"><IoBagHandleOutline  /> Products</span>
                                        <FaChevronDown className={`${openSubMenu === "products" ? "rotate-180" : ""} transition-transform`} />
                                    </button>
                                    {openSubMenu === "products" && (
                                        <ul className="mt-1 text-sm space-y-1 w-full px-4">
                                            <NavLink to="/dashboard/allProducts" className=" py-2 rounded-lg" ><DashboardListItem text={"All Products"}></DashboardListItem></NavLink>
                                            <NavLink className=" py-2 rounded-lg" to="/dashboard/addProducts"><DashboardListItem text={"Add Products"}></DashboardListItem></NavLink>
                                            <NavLink className=" py-2 rounded-lg" to="/dashboard/productsSetting"><DashboardListItem text={"Product setting"}></DashboardListItem></NavLink>
                                            
                                        </ul>
                                    )}
                                </li>



                            </ul>

                        </>
                    }

               













                </div>









            </div>

        </div>
    );
};

export default DashboardSideBar;