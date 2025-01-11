import CustomSwiper from "../components/CustomSwiper";
import {
  dataCaiTaoSuaChuaCongTrinh,
  dataCongTrinhDanDungVaCongNghiep,
  dataCongTrinhHaTangKyThuat,
  dataCongTrinhKhuNghiDuong,
  dataSanTheThao,
  dataTrungTamThuongMai,
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
          Cải tạo sửa chửa công trình
        </h3>
        <CustomSwiper data={dataCaiTaoSuaChuaCongTrinh} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Công trình dân dụng và công nghiệp
        </h3>
        <CustomSwiper data={dataCongTrinhDanDungVaCongNghiep} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Công trình hạ tầng kỹ thuật
        </h3>
        <CustomSwiper data={dataCongTrinhHaTangKyThuat} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Trung tâm thương mại
        </h3>
        <CustomSwiper data={dataTrungTamThuongMai} />
      </div>
      <div className="px-4 py-5 sm:px-6 mb-10">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-6">
          Công trình khu nghỉ dưỡng
        </h3>
        <CustomSwiper data={dataCongTrinhKhuNghiDuong} />
      </div>
    </div>
  );
}
