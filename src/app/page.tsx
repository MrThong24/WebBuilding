import {
  dataGiaTriCotLoi,
  dataKhachHang,
  dataLinhVucHoatDong,
} from "./home/mockData";
import SectionDuAnMoiNhat from "./home/SectionDuAnMoiNhat";
import SectionGiaTriCotLoi from "./home/SectionGiaTriCotLoi";
import SectionLinhVucHoatDong from "./home/SectionLinhVucHoatDong";
import DemoSlider from "./home/SectionSwiper";
import SectionTintuc from "./home/SectionTinTuc";
import SectionAbout from "./home/SectionAbout";
import SectionKhachHang from "./home/SectionKhachHang";
export default function Home() {
  return (
    <div className="bg-white">
      <DemoSlider />
      <SectionAbout />
      <SectionGiaTriCotLoi posts={dataGiaTriCotLoi} />
      <SectionLinhVucHoatDong datas={dataLinhVucHoatDong} />
      <SectionDuAnMoiNhat />
      <SectionKhachHang datas={dataKhachHang} />
      <SectionTintuc />
    </div>
  );
}
