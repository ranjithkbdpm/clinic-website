"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
import { Pagination, Navigation, Autoplay, freeMode } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomePageTestimonals = () => {
  const testimonalData = [
    {
      testimony: "Best click for ortho and physio",
      name: "Vijay",
      location: "pondicherry",
    },
    {
      testimony: "Thank you doctor for the best dignosis and treatment",
      name: "Raj",
      location: "chennai",
    },
    {
      testimony: "Best opinion and treatment for knee replacement",
      name: "Ajithkumar",
      location: "bangalore",
    },
    {
      testimony:
        "Clinc is good and staffs are humble, had good treatment from doctor",
      name: "john",
      location: "madurai",
    },
    {
      testimony: "physio theraphy service was good, had a home service",
      name: "karpakam",
      location: "chennai",
    },
  ];
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
        className="testimony"
      >
        {testimonalData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white">
              <div>{item.testimony}</div>
              <div>
                <div>{item.name}</div>
                <div>{item.location}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
      <h1 className="font-bold text-4xl text-primary text-center">
        Testimonials
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={1}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="testimonySwiper" // Unique class
      >
        {testimonalData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-accentDarkBlue border rounded-md shadow-1 p-12">
              <div className="text-xl mb-1 text-neutralWhite">{item.testimony}</div>
              <div className=" text-neutralWhite">
                <div className="text-sm">{item.name}</div>
                <div className="text-xs">{item.location}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePageTestimonals;
