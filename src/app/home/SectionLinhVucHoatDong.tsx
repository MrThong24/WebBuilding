"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import LayoutSection from "./layout/LayoutSection";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Data {
  id: number; // or string, depending on your data
  title: string;
  description: string;
  href: string;
  icons: StaticImageData;
}

interface PageProps {
  datas: Data[];
}
export default function SectionLinhVucHoatDong({ datas }: PageProps) {
  const router = useRouter();
  return (
    <LayoutSection
      title="LĨNH VỰC HOẠT ĐỘNG"
      showBtnMore={true}
      handleClick={() => {
        router.push("/service/thi-cong-hoan-thien-noi-that");
      }}
      children={
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
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
              slidesPerView: 4,
            },
          }}
        >
          {datas?.map((item) => (
            <SwiperSlide
              className="bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors duration-300"
              key={item?.id}
            >
              <Link href={`/service/${item?.href}`}>
                <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow p-4">
                  <div className="flex mb-4">
                    <Image
                      alt="Logo Company" // Cập nhật thuộc tính alt
                      src={item?.icons}
                      width={50} // Thay đổi kích thước theo yêu cầu
                      height={50} // Thay đổi kích thước theo yêu cầu
                    />
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-[var(--thm-primary-color)] mb-4 h-14">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-black leading-6 line-clamp-6 ">
                    {item?.description}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    />
  );
}
