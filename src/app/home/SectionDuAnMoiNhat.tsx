"use client"; // <===== REQUIRED

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import LayoutSection from "./layout/LayoutSection";
import Image from "next/image";
import DuAn1 from "../assest/image/DuAnMoiNhat/a1.jpg";
import Link from "next/link";
export default function SectionDuAnMoiNhat() {
  const router = useRouter();

  return (
    <LayoutSection
      title="DỰ ÁN MỚI NHẤT"
      showBtnMore={true}
      handleClick={() => {
        router.push("/projects");
      }}
    >
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
            <Link href={`/projects/san-choi-the-thao/thi-cong-san-pickleball`}>
              <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-green-800/30">
                <div className="max-h-[500px] w-auto">
                  <Image
                    alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát"
                    className="lg:h-[500px] sm:h-[460px] h-[400px] w-full object-fill transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                    src={DuAn1}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ` group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
                <div className="absolute inset-12 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                  <h1 className="text-[18px] font-bold text-white flex w-auto">
                    Thi Công Sân Pickleball Chuyên Nghiệp
                  </h1>
                  <p className="mb-3 text-[14px] italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Thi công sân Pickleball chuyên nghiệp trên mọi nền với cam
                    kết chất lượng hàng đầu. Thực hiện thi công sân pickleball
                    chuyên nghiệp, đảm bảo rằng mọi sân pickleball đều đạt tiêu
                    chuẩn cao nhất. Với thi công sân pickleball chú trọng vào
                    từng chi tiết, sẽ mang lại trải nghiệm cho khách hàng
                  </p>
                  <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-green-600/60">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </LayoutSection>
  );
}
