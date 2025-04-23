import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Marquee from "react-fast-marquee";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './herosilder.css'



// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import img1 from "../../../assets/products/img6.jfif"
import img2 from "../../../assets/products/7764fb58df2dcb8930db44bb5e707471.png"
import img3 from "../../../assets/products/008ea2391635532bb7bdc0e6b7f7d950.png"
import img4 from "../../../assets/products/7d8be7430ad63595921754acdd8b7a62.jfif"
import img5 from "../../../assets/products/img5.jfif"
import useAdvertise from '../../../Hooks/useAdvertise';

const HeroSlider = () => {
  const [advertise,isLoading,refetch] = useAdvertise()
  const images = advertise?.map((item,index)=>  item?.images) // Array of image URLs
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = [img3, img4,].length;

  // Auto slide with interval
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup interval when component unmounts
  }, [totalImages]);
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
    const renderImages = (repeatCount = 3) => {
      const repeatedImages = [];
      for (let i = 0; i < repeatCount; i++) {
        images.forEach((img, index) => {
          repeatedImages.push(
            <div
              key={`${i}-${index}`}
              className="flex-shrink-0 md:w-[320px] w-[200px] hover:w-[320px] md:hover:w-[450px]  transition-all duration-500 ease-in-out h-[500px]"
            >
              <img
                src={img}
                alt={`Slide ${i}-${index}`}
                className="w-full h-full  object-cover rounded-2xl"
              />
            </div>
          );
        });
      }
      return repeatedImages;
    };
  return (
<div className="overflow-hidden  w-full h-[500px]">
      <div className="flex animate-marquee gap-4 ">
        {/* Original images */}
        {/* {images.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] transition-all duration-500 ease-in-out hover:w-[450px] h-[500px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))} */}
        {/* Duplicate images for seamless loop */}
        {/* {images.map((img, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 w-[250px] hover:w-[450px] transition-all duration-500 ease-in-out h-[500px]">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        ))} */}
        {renderImages(4)}
       
      </div>
    </div>
  );
};

export default HeroSlider;
