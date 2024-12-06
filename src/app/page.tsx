import { dataGiaTriCotLoi, dataLinhVucHoatDong } from "./home/mockData";
import SectionDuAnMoiNhat from "./home/SectionDuAnMoiNhat";
import SectionGiaTriCotLoi from "./home/SectionGiaTriCotLoi";
import SectionLinhVucHoatDong from "./home/SectionLinhVucHoatDong";
import DemoSlider from "./home/SectionSwiper";
import SectionTintuc from "./home/SectionTinTuc";
import SectionAbout from "./home/SectionAbout";
export default function Home() {
  return (
    <div className="bg-white">
      <DemoSlider />
      <SectionAbout />
      <SectionGiaTriCotLoi posts={dataGiaTriCotLoi} />
      <SectionLinhVucHoatDong datas={dataLinhVucHoatDong} />
      <SectionDuAnMoiNhat />
      <SectionTintuc />
    </div>
  );
}
