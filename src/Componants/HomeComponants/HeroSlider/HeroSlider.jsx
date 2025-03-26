import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import img1 from "../../../assets/products/img6.jfif"
import img2 from "../../../assets/products/7764fb58df2dcb8930db44bb5e707471.png"
import img3 from "../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png"
import img4 from "../../../assets/products/7d8be7430ad63595921754acdd8b7a62.jfif"
import img5 from "../../../assets/products/img5.jfif"
import Marquee from 'react-fast-marquee';

const HeroSlider = () => {

{/*  */}
   
{/* <Swiper
      modules={[Autoplay]}
      slidesPerView={3.4}  // ডিফল্টভাবে ৩-৪ টা ইমেজ দেখাবে
      spaceBetween={10} // ইমেজগুলোর মধ্যে ১০px স্পেস
      autoplay={{
        delay: 3000, // ৩ সেকেন্ড পর পর স্লাইড পরিবর্তন হবে
        disableOnInteraction: false, // ইউজার ইন্টারঅ্যাকশনের পরও অটোপ্লে চলবে
      }}
      className="h-[500px] flex"
    >
      {[img1, img2, img3, img4, img5].map((img, index) => (
        <SwiperSlide key={index} className="transition-all duration-500">
          <div className="group flex items-center transition-all duration-500">
            <div className="w-[350px] h-[500px] overflow-hidden border rounded-2xl transition-all duration-500 ease-in-out flex-shrink-0 
              group-hover:w-[450px] group-hover:scale-110 group-hover:z-50 group-hover:translate-x-[50px]">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-2xl transition-all duration-500 ease-in-out"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper> */}
  return (
    <Marquee className='flex h-[500px] my-10'>
    {[img2, img3, img4, img1,img5].map((img, index) => (
      <span
        key={index}
        className="overflow-hidden flex justify-center items-center"
      >
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="transition-all duration-500 ease-in-out w-[300px] h-[500px] object-cover hover:w-[500px] hover:object-cover  pr-2 rounded-2xl"
        />
     
   
      </span>

    ))}
  </Marquee>

  );
};

export default HeroSlider;
