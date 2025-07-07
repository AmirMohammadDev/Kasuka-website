import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";

const Section_slider = () => {
  return (
    <>
      <Swiper
        className="mySwiper max-w-7xl m-auto mt-20"
        modules={[Pagination, Autoplay]}
        slidesPerView={6}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide className="px-10 base">
          <img
            src="./client-1.png"
            alt="Slide 1"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-2.png"
            alt="Slide 2"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-3.png"
            alt="Slide 3"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-4.png"
            alt="Slide 4"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-5.png"
            alt="Slide 5"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-6.png"
            alt="Slide 6"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-1.png"
            alt="Slide 1"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-2.png"
            alt="Slide 2"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide className="px-10">
          <img
            src="./client-3.png"
            alt="Slide 3"
            className="w-[120px] h-auto grayscale-[100] opacity-[0.5] hover:opacity-[1] hover:grayscale-0 duration-300 hover:cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Section_slider;
