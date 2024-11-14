import SectionAbout from "./pages/Home/SectionAbout";
import SectionDuAnThucHien from "./pages/Home/SectionDuAnThucHien";
import SectionGiaTriCotLoi from "./pages/Home/SectionGiaTriCotLoi";
import DemoSlider from "./pages/Home/SectionSwiper";
import SectionTintuc from "./pages/Home/SectionTinTuc";
import { dataGiaTriCotLoi } from "./pages/Home/mockData";

export default function Home() {
  return (
    <div>
      <DemoSlider
        data={[
          {
            id: 1,
            title: "ARE AWESOME",
            tagline: "NEXTJS 13 & SWIPER SLIDER",
            image:
              "https://www.cc1.vn/wp-content/uploads/2023/07/1_HayLenTieng_PRINT-07.jpg",
          },
          {
            id: 2,
            title: "GIVE IT A SHOOT",
            tagline: "IF YOU LIKE IT",
            image:
              "https://www.cc1.vn/wp-content/uploads/2024/05/DBP_2024_F-03.jpg",
          },
        ]}
      />
      <SectionAbout />
      <SectionGiaTriCotLoi posts={dataGiaTriCotLoi} />
      <SectionDuAnThucHien />
      <SectionTintuc />
    </div>
  );
}
