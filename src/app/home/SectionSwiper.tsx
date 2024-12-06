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

const DemoSlider: React.FC<DemoSliderProps> = () => {
  return (
    <section className="relative bg-white lg:mt-0 mt-24">
      <div className="box_video">
        <video autoPlay={true} loop={true} muted={true} height="90%">
          <source src="/Intro.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default DemoSlider;
