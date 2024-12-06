import Image from "next/image";
import ThiCong from "../../assest/image/ThiCong.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";

interface Data {
  title: string;
  des: string;
}

interface PageProps {
  data: Data[];
}
export default function CustomSwiper({ data }: PageProps) {
  return (
    <Swiper
      style={
        {
          "--swiper-navigation-color": "#e50019",
          "--swiper-pagination-color": "#e50019",
          "--swiper-navigation-size": "30px",
        } as React.CSSProperties
      }
      slidesPerView={4}
      spaceBetween={30}
      navigation={true}
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
      modules={[Navigation]}
      className="mySwiper"
    >
      {data?.map((item) => (
        <SwiperSlide
          className="bg-slate-200 rounded-lg hover:bg-slate-300 transition-colors duration-300"
          key={item?.title}
        >
          <Link href={`/service/`}>
            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow p-4">
              <div className="flex mb-4">
                <Image
                  alt="Logo Company" // Cập nhật thuộc tính alt
                  src={ThiCong}
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="mt-2 text-lg/2 font-semibold text-[var(--thm-primary-color)] mb-4 h-14">
                {item?.title}
              </h3>
              <p className="text-[14px] text-black leading-6 line-clamp-6 ">
                {item?.des}
              </p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
