"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SectionDuAnThucHien() {
  return (
    <section className="py-24 relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 flex justify-between items-center">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-3xl">
            DỰ ÁN NỔI
          </h2>
          <button
            type="button"
            className=" text-white hidden bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center sm:inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Xem thêm
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>

        </div>

        <div className="mt-8 border-t border-gray-200 pt-10 sm:mt-2 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <Swiper
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
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-700 group-hover:from-green-600/70 group-hover:via-green-600/60 group-hover:to-green-600/70" />
                <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-[18px] font-bold text-white flex w-auto">
                    Bàn giao dự án Trung tâm thương mại AEON MALL Huế
                  </h1>
                  <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ngày 21/9, tại thành phố Huế, chính thức tổ chức lễ khai trương AEON MALL Huế. Dự án Trung tâm thương mại AEON MALL HUẾ tọa lạc tại số 8, đường Võ Nguyên Giáp, phường An Đông, thành phố Huế.....
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
                    src="https://khangnhatcons.com/uploads/article/370x472nha-may-niwa-foundry-viet-nam-cong-tac-cai-tao-va-xay-moi-1697515502.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-700 group-hover:from-green-600/70 group-hover:via-green-600/60 group-hover:to-green-600/70" />
                <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-[18px] font-bold text-white flex w-auto">
                    Bàn giao dự án Trung tâm thương mại AEON MALL Huế
                  </h1>
                  <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ngày 21/9, tại thành phố Huế, chính thức tổ chức lễ khai trương AEON MALL Huế. Dự án Trung tâm thương mại AEON MALL HUẾ tọa lạc tại số 8, đường Võ Nguyên Giáp, phường An Đông, thành phố Huế.....
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
                    src="https://khangnhatcons.com/uploads/article/370x472shophouse-an-cuu-city-giai-doan-2-1679970906.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-700 group-hover:from-green-600/70 group-hover:via-green-600/60 group-hover:to-green-600/70" />
                <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-[18px] font-bold text-white flex w-auto">
                    Bàn giao dự án Trung tâm thương mại AEON MALL Huế
                  </h1>
                  <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Ngày 21/9, tại thành phố Huế, chính thức tổ chức lễ khai trương AEON MALL Huế. Dự án Trung tâm thương mại AEON MALL HUẾ tọa lạc tại số 8, đường Võ Nguyên Giáp, phường An Đông, thành phố Huế.....
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-green-600/60">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
