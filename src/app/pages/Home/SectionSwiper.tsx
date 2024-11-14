"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="mt-24 relative bg-white">
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Autoplay, Pagination]}
      >
        {data?.map(({ id, image, tagline, title }) => (
          <SwiperSlide key={id}>
            <img
            className="md:h-auto lg:h-[calc(100vh-97px)] h-[240px] object-cover"
            src={image}
            alt="about Us image"
          />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default DemoSlider;
