import LayoutSection from "./layout/LayoutSection";
import a1_content1 from "../assest/image/News/News1/a1.jpg";
import Image from "next/image";
import Link from "next/link";
export default function SectionTintuc({}) {
  return (
    <LayoutSection title="TIN TỨC" showBtnMore={true} slug="/news">
      <div className="lg:max-w-none grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:gap-3 gap-2">
        <div className="col-span-4 lg:col-span-2 row-span-2 md:row-span-4">
          <div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-auto">
            <Link
              href="/news/aeon-hue-chinh-thuc-di-vao-hoat-dong"
              className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-tr-md cursor-pointer"
            >
              <Image
                alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát"
                src={a1_content1}
                className="lg:h-[328px] h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </Link>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-sm sm:text-xl font-semibold">
                AEON HUẾ CHÍNH THỨC ĐI VÀO HOẠT ĐỘNG
              </h6>
              <p className="text-slate-600 leading-normal font-light text-[12px] sm:text-[14px]">
                Aeon Mall Việt Nam tổ chức khánh thành và chính thức khai trương
                Trung tâm thương mại Aeon Mall Huế (tỉnh Thừa Thiên Huế). Đây là
                Aeon Mall thứ 7 tại Việt Nam và là Aeon Mall đầu tiên tại miền
                trung.
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2 ">
              <Link
                className="cursor-pointer rounded-md bg-slate-800 py-[4px] px-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                href="/news/aeon-hue-chinh-thuc-di-vao-hoat-dong"
              >
                Chi tiết
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 md:col-start-1 h-[100px] md:h-[120px]">
          <div className="relative cursor-pointer flex flex-row w-full h-full bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-bl-md">
              <img
                className="w-[90px] sm:w-[120px] lg:w-[170px] h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát"
              />
            </div>
            <div className="p-2 flex flex-col justify-start flex-1">
              <h4 className="mb-2 text-slate-800 text-[12px] sm:text-[14px] font-semibold line-clamp-3">
                Lyft launching cross-platform service this week
              </h4>
              <p className=" text-slate-600 leading-normal text-[10px] sm:text-[12px] font-light line-clamp-2">
                Like so many organizations these days, Autodesk is a company
                Like so many organizations these days, Autodesk is a company
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
}
