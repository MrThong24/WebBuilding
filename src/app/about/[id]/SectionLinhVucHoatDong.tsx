"use client";

import "swiper/css";
import "swiper/css/navigation";

import CustomSwiper from "../components/CustomSwiper";
import {
  dataCaiTaoSuaChuaCongTrinh,
  dataCongTrinhNhaThep,
  dataSanTheThao,
} from "../mockData";

export default function SectionLinhVucHoatDong() {
  return (
    <div className="bg-white lg:max-w-full overflow-hidden flex flex-col justify-center">
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Sân chơi thể thao
        </h3>
        <CustomSwiper data={dataSanTheThao} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Cải tạo công trình
        </h3>
        <CustomSwiper data={dataCaiTaoSuaChuaCongTrinh} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Công trình nhà thép
        </h3>
        <CustomSwiper data={dataCongTrinhNhaThep} />
      </div>
    </div>
  );
}
