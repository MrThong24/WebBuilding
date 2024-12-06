"use client"; // <===== REQUIRED

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LayoutSection from "./layout/LayoutSection";

export default function SectionDuAnMoiNhat() {
  return (
    <LayoutSection title="DỰ ÁN MỚI NHẤT" showBtnMore={true}>
      <div className="lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          watchSlidesProgress={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className=" bg-slate-400">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-green-800/30 ">
              <div className="max-h-[500px] w-auto">
                <img
                  className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://khangnhatcons.com/uploads/article/370x472thi-cong-gian-hang-trung-tam-thuong-mai-aeon-mall-hue-1728292660.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ` group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-[18px] font-bold text-white flex w-auto">
                  Bàn giao dự án Trung tâm thương mại AEON MALL Huế
                </h1>
                <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ngày 21/9, tại thành phố Huế, chính thức tổ chức lễ khai
                  trương AEON MALL Huế. Dự án Trung tâm thương mại AEON MALL HUẾ
                  tọa lạc tại số 8, đường Võ Nguyên Giáp, phường An Đông, thành
                  phố Huế.....
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-green-600/60">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" bg-slate-400">
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-green-800/30 ">
              <div className="max-h-[500px] w-auto">
                <img
                  className="h-full w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src="https://khangnhatcons.com/uploads/article/370x472thi-cong-gian-hang-trung-tam-thuong-mai-aeon-mall-hue-1728292660.jpg"
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ` group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-[18px] font-bold text-white flex w-auto">
                  Bàn giao dự án Trung tâm thương mại AEON MALL Huế
                </h1>
                <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Ngày 21/9, tại thành phố Huế, chính thức tổ chức lễ khai
                  trương AEON MALL Huế. Dự án Trung tâm thương mại AEON MALL HUẾ
                  tọa lạc tại số 8, đường Võ Nguyên Giáp, phường An Đông, thành
                  phố Huế.....
                </p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-green-600/60">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </LayoutSection>
  );
}
