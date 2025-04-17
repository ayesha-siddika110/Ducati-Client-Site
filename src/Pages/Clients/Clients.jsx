import React from "react";
import { motion } from "framer-motion";
import Tooltip from "../../Componants/Share/Tooltip";
import HeadingPara from "../../Componants/Share/HeadingPara";

const logos = [
  "https://i.ibb.co.com/rfTFR19t/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898-screen.jpg",
"https://i.ibb.co.com/pvtBjS1B/Real-Estate-Construction-Logo-Design.png",
"https://i.ibb.co.com/tPkcdbgj/pngtree-growth-business-company-logo-png-image-728232.jpg",
"https://i.ibb.co.com/4Z7zDVyH/beautiful-unique-logo-design-ecommerce-retail-company-1287271-14561.jpg",
"https://i.ibb.co.com/4Z6FG9wp/company-7759278-1280.webp",
"https://i.ibb.co.com/KcYcf1Wf/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
"https://i.ibb.co.com/ds5Gjw9P/images-3.jpg",
];



const Clients = () => {
  return (
    <div>
      <HeadingPara heading={"Our valuable clients"} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero dolor vitae enim ipsum delectus dolore harum rem magnam deleniti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, possimus."}></HeadingPara>
    <div className="relative overflow-hidden bg-white py-16">
    <div className="w-full h-[500px] relative">
      {/* Animate the entire block */}
      <motion.div
        className="absolute flex flex-wrap justify-center items-center gap-20 w-full"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {/* Duplicate logos for infinite scroll illusion */}
        {[...logos, ...logos]?.map((logo, i) => (
          <div
            key={i}
            className={`w-24 h-24 rounded-full bg-white shadow-lg p-2 flex justify-center items-center cursor-pointer 
            ${
              i % 4 === 0
                ? "mt-0"
                : i % 4 === 1
                ? "mt-6"
                : i % 4 === 2
                ? "-mt-4"
                : "mt-16"
            }`}
          >
            <Tooltip text={`client-${i}`}>

            <img
              src={logo}
              alt={`client-${i}`}
              className="object-contain w-full h-full rounded-full  transition duration-300 hover:scale-105"
            />
            </Tooltip>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
    </div>
  );
};

export default Clients;
