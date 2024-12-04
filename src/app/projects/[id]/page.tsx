"use client"; // <===== REQUIRED

import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { listProject, Project } from "../mockData";
import Image from "next/image";

export default function MyApp() {
  const params = useParams<{ id: string }>(); // Định nghĩa kiểu cho params
  const { id } = params; // Lấy id từ params
  const [detail, setDetail] = useState<Project | null>(null); // Sửa thành useState<Project | null>(null)
  const [thumbsSwiper, setThumbsSwiper] = useState(null as any);
  useEffect(() => {
    const foundDetail = listProject.find((item) => item?.slug === id);
    setDetail(foundDetail ?? null);
  }, [id]);
  return (
    <div className="pt-24 bg-white ">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(27 49 71), rgba(179, 205, 209, 0.5))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <p className="text-white text-3xl font-semibold">{detail?.title}</p>
        </div>
        {detail?.img && detail.img !== "" && (
          <Image
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            alt={`project image ${detail?.title}`} // Use the title for alt text
            src={detail.img}
          />
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10 grid md:grid-cols-2 grid-cols-1 gap-4 mt-16">
        <div className="row-span-1">
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-green-600">
                  Tên dự án
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail?.title}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-green-600">
                  Loại hình thi công
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail?.type}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-green-600">Địa điểm</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail?.location}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-green-600">
                  Thời gian hoàn thành
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail?.time}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-green-600">
                  Mô tả công việc
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {detail?.des}
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="row-span-2">
          <>
            <Swiper
              style={
                {
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                } as React.CSSProperties
              }
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 mb-2"
            >
              {detail?.subImage?.map((item: { img: string }) =>
                item.img !== "" ? (
                  <SwiperSlide key={item?.img}>
                    <Image
                      className="w-full h-full object-cover"
                      alt={`project image ${detail?.title}`} // Use the title for alt text
                      src={item.img}
                    />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
            <Swiper
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper1111111111"
            >
              {detail?.subImage?.map((item: { img: string }) =>
                item.img !== "" ? (
                  <SwiperSlide className="cursor-pointer" key={item?.img}>
                    <Image
                      alt={`project image ${detail?.title}`} // Use the title for alt text
                      src={item.img}
                    />
                  </SwiperSlide>
                ) : null
              )}
            </Swiper>
          </>
        </div>
      </div>
      {/* <div className="slider-container my-20 mx-auto max-w-7xl px-4 lg:px-8 pb-10"></div> */}
    </div>
  );
}
