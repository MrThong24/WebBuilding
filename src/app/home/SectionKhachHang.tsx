"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import LayoutSection from "./layout/LayoutSection";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";

import Image, { StaticImageData } from "next/image";

interface Data {
  id: number; // or string, depending on your data
  icons: StaticImageData;
}

interface PageProps {
  datas: Data[];
}

export default function SectionKhachHang({ datas }: PageProps) {
  return (
    <LayoutSection
      title="KHÁCH HÀNG"
      showBtnMore={false}
      slug="/about/linh-vuc-hoat-dong"
    >
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#e50019",
            "--swiper-pagination-color": "#e50019",
            "--swiper-navigation-size": "30px",
          } as React.CSSProperties
        }
        spaceBetween={20}
        slidesPerView={5}
        navigation={true}
        autoplay={{
          delay: 1500, // Thời gian mỗi slide chuyển đổi (ms)
          disableOnInteraction: false, // Giữ autoplay ngay cả khi người dùng tương tác
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {datas?.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <Image
              alt="Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát"
              src={item?.icons}
              className="w-[100%] h-[160px] md:h-[180px] object-contain rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </LayoutSection>
  );
}
