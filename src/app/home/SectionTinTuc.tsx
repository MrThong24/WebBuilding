"use client"; // <===== REQUIRED

import LayoutSection from "./layout/LayoutSection";
import { useRouter } from "next/navigation";

export default function SectionTintuc({}) {
  const router = useRouter();

  return (
    <LayoutSection
      title="TIN TỨC"
      showBtnMore={true}
      handleClick={() => {
        const path = "/news";
        // Chỉ cần sử dụng path mà không cần xử lý thêm
        router.push(path); // Đảm bảo không có dấu / ở cuối
        localStorage.setItem("keyFilter", "all");
      }}
    >
      <div className="lg:max-w-none grid grid-cols-4 grid-rows-1 md:grid-rows-4 md:gap-3 gap-2">
        <div className="col-span-4 lg:col-span-2 row-span-2 md:row-span-4">
          <div className="relative flex flex-col cursor-pointer bg-white shadow-sm border border-slate-200 rounded-lg w-auto">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-tr-md ">
              <img
                className="lg:h-[328px] h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </div>
            <div className="p-4">
              <h6 className="mb-2 text-slate-800 text-sm sm:text-xl font-semibold">
                CC1 TỔ CHỨC CHƯƠNG TRÌNH HỌP MẶT CHÀO MỪNG NGÀY PHỤ NỮ VIỆT NAM
                20/10
              </h6>
              <p className="text-slate-600 leading-normal font-light text-[12px] sm:text-[14px]">
                (Thành phố Hồ Chí Minh, 18/10/2024) Nhân dịp kỷ niệm 94 năm ngày
                Thành lập Hội liên hiệp Phụ nữ Việt Nam 20/10/1930-20/10/2024,
                Tổng Công ty Xây dựng ...
              </p>
            </div>
            <div className="px-4 pb-4 pt-0 mt-2">
              <button
                className="rounded-md bg-slate-800 py-[4px] px-6 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Chi tiết
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 md:col-start-1 h-[100px] md:h-[120px]">
          <div className="relative cursor-pointer flex flex-row w-full h-full bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-bl-md">
              <img
                className="w-[90px] sm:w-[120px] lg:w-[170px] h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
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
        <div className="col-span-4 lg:col-span-2 md:col-start-1 h-[100px] md:h-[120px]">
          <div className="relative cursor-pointer flex flex-row w-full h-full bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-bl-md">
              <img
                className="w-[90px] sm:w-[120px] lg:w-[170px] h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
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
        <div className="col-span-4 lg:col-span-2 md:col-start-1 h-[100px] md:h-[120px]">
          <div className="relative cursor-pointer flex flex-row w-full h-full bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-bl-md">
              <img
                className="w-[90px] sm:w-[120px] lg:w-[170px] h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
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
        <div className="col-span-4 lg:col-span-2 md:col-start-1 h-[100px] md:h-[120px]">
          <div className="relative cursor-pointer flex flex-row w-full h-full bg-white shadow-sm border border-slate-200 rounded-lg">
            <div className="relative h-auto overflow-hidden text-white rounded-tl-md rounded-bl-md">
              <img
                className="w-[90px] sm:w-[120px] lg:w-[170px] h-full object-cover transition-transform duration-300 hover:scale-105"
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
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
