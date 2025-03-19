"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";

const Slider = ({ slides }) => {
  return (
    <div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover", ...slide.style }} 
            />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="imageSwiper" // Unique class
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* <Image
              src={slide.src}
              alt={slide.alt}
              fill
              style={{ objectFit: "cover", ...slide.style }}
            /> */}
            <div
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.src})`,
                height: "100%",
                width: "100%",
                backgroundSize: "cover",
                ...slide.style,
              }}
              className='overflow-hidden flex justify-center items-center'
            >
              <div className="md:text-4xl text-2xl text-neutralWhite fond-bold w-[60%] text-center">
                  {slide.content}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
