import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      <SwiperSlide>
        <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold">
          <h2>Manufacturer & Wholesaler</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
