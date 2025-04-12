import React from 'react';
import useTheme from '../../Hooks/useTheme';
import { motion } from 'framer-motion';
import img1 from '../../assets/products/img3.jfif'
import WhyChooseUs from '../../Componants/HomeComponants/AboutUsComponant/WhyChooseUs';
import ContactServices from '../../Componants/HomeComponants/AboutUsComponant/ContactService';

const AboutUs = () => {
    const { color } = useTheme()

    return (
        <div className='min-h-screen w-[90%] m-auto max-[1440px]'>
            {/* <motion.div
                initial={{ y: -200, opacity: 0 }} // Start above the viewport
                animate={{ y: 0, opacity: 1 }}    // Drop into place
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{ backgroundColor: color?.primary }}
                className='h-[250px] rounded-b-[15%] z-10'
            >
            </motion.div> */}
            <div className=" px-4 py-20 flex md:flex-row flex-col justify-between items-center gap-10">
                {/* Left Content */}
                <div className='md:w-[50%]'>
                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-3">About Us</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        Helping businesses <br />
                        deliver <span className="relative inline-block">
                            <span className="relative z-10">exceptional</span>
                            <span className="absolute left-0 bottom-1 w-full h-3 bg-green-200 z-0 rounded-md"></span>
                        </span>{' '}
                        <br />
                        buyer experiences.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Vidyard is the leading video messaging and asynchronous communications platform
                        for go-to-market teams. Millions of sales professionals and more than 250,000
                        go-to-market teams use Vidyard’s AI-powered video messaging, video hosting, and
                        digital sales rooms to connect with more prospects and generate more revenue.
                    </p>
                    <button style={{backgroundColor: color?.primary}} className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
                        Sign Up for Free
                    </button>
                </div>

                {/* Right Image + Decorations */}
                <div className="relative md:w-[50%]">
                    {/* Blob Background (optional abstract shape) */}
                    <div  className="absolute left-[20%] -bottom-10 w-64 h-64 bg-green-900 rounded-full opacity-80 mix-blend-multiply blur-2xl z-0 m-auto"></div>

                    {/* Dots and Shapes (optional decorative) */}
                    <div className="absolute left-4 top-10 w-32 h-32 bg-white opacity-30 rounded-full z-0"></div>

                    {/* Main Image */}
                    <img
                        src={img1}
                        alt="Working person"
                        className="relative z-10 w-[400px] m-auto rounded-[50%_20%_40%_50%/50%_50%_50%_50%] object-cover"
                    />
                </div>
            </div>


            {/* <div className='flex justify-between py-10'>
                <div className='w-[60%] '>
                    <h1 className='text-xl'>Lorem ipsum dolor sit amet.</h1>
                    <h1 className='text-4xl'>Lorem ipsum dolor sit amet.</h1>
                    <h1 className='text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt veniam quia aperiam voluptas delectus temporibus eaque ullam nihil ratione aliquid!</h1>
                </div>
                <div style={{backgroundImage: `url(${img1})`}} className='bg-cover bg-no-repeat h-[300px] w-[350px] bg-green-200 rounded-tl-[150px] rounded-bl-[40px] rounded-tr-[50px] rounded-br-[70px]'>

                </div>
            </div> */}
            <ContactServices></ContactServices>
            <WhyChooseUs></WhyChooseUs>

        </div>
    );
};

export default AboutUs;