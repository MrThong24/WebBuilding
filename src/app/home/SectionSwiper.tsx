"use client"; // <===== REQUIRED

import React from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <section className="relative bg-white mt-24">
      <Swiper
        pagination={{ type: "bullets", clickable: true }}
        loop={true}
        modules={[Autoplay, Pagination]}
        speed={1000} // Corrected: Removed duplicate loop: true,
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        watchSlidesProgress={true}
      >
        {data?.map(({ id, image, tagline, title }) => (
          <SwiperSlide key={id}>
            <img
              className="md:h-auto lg:h-[80vh] h-[240px] w-full object-cover"
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
