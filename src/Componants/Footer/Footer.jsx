import img from "../../assets/logo.png"
import useTheme from "../../Hooks/useTheme";

const Footer = () => {
    const {color} = useTheme()
    return (
        <div>
            <footer className="bg-[#161616] rounded-t-4xl text-white py-14">
                <div className="w-[90%]  max-w-[1440px] m-auto px-5">
                    {/* Upper Section */}
                    <div className="text-center mb-10 md:flex items-center justify-between">
                        <h2 className="text-5xl font-bold md:w-[50%] text-start">Ready to streamline your fashion journey!</h2>
                        <div className="mt-4 md:w-[50%]  flex justify-center items-center gap-2 bg-white rounded-full p-2  mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white border-none outline-none text-black px-4"
                            />
                            <button style={{backgroundColor: color?.primary}} className=" text-white px-5 py-2 rounded-full">Submit</button>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="border-t border-gray-600 my-6"></div>

                    {/* Lower Section */}
                    <div className="grid md:grid-cols-4 gap-6 text-gray-400 text-sm">
                        {/* Brand Section */}
                        <div>
                            <h3 className="text-lg font-bold flex items-center gap-2">
                                <img src={img} alt="DUCATI" className="h-14" /> DUCATI
                            </h3>
                            <p className="mt-2">
                                Streamline your workflow, stay on track, and achieve more with our all-in-one fashion production platform.
                            </p>
                        </div>

                        {/* Office Location */}
                        <div>
                            <h4 style={{color: color?.primary}} className=" font-semibold">Office Location</h4>
                            <p className="mt-2">
                                Head Office: House-24, Road-04, Sector-04, Uttara, Dhaka-1230, Bangladesh.
                            </p>
                            <p className="mt-2">Factory: Kathgora, Ashulia, Savar, Dhaka, Bangladesh.</p>
                        </div>

                        {/* Contact Section */}
                        <div>
                            <h4 style={{color: color?.primary}} className="font-semibold">Contact Us</h4>
                            <p className="mt-2">(+880) 1713901292, 1714004433</p>
                            <p className="mt-2">info@ducatiapparels.com</p>
                            <p className="mt-2">News Letter</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 style={{color: color?.primary}} className=" font-semibold">Quick Links</h4>
                            <ul className="mt-2 space-y-1">
                                <li><a href="#" className="hover:text-white">About Us</a></li>
                                <li><a href="#" className="hover:text-white">Products</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                                <li><a href="#" className="hover:text-white">CSR</a></li>
                                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="hover:text-white">Our Clients</a></li>
                            </ul>
                        </div>
                    </div>

                   
                </div>
            </footer>
             {/* Copyright */}
             <div style={{backgroundColor: color?.primary}} className=" text-center  py-3 text-sm font-medium text-white">
                        Copyright © 2025 Ducatiapparels All rights reserved.
                    </div>
        </div>
    );
};

export default Footer;
