"use client"; // <===== REQUIRED

import Link from "next/link";
import { useEffect, useState } from "react";
import { listProject, Project } from "./mockData";
import Image from "next/image";

export default function MyApp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // State for hovered index
  const [keyFilter, setKeyFilter] = useState("");
  const [listProjectFilter, setListProjectFilter] =
    useState<Project[]>(listProject);

  const listFilterOption = [
    { value: "all", name: "Tất cả" },
    { value: "Fit-out", name: "Fit-out" },
    { value: "San-choi-the-thao", name: "Sân chơi thể thao" },
    { value: "Cai-tao-cong-trinh", name: "Cải tạo công trình" },
    { value: "Cong-trinh-nha-thep", name: "Công trình nhà thép" },
  ];
  const handleClickOption = (value: string) => {
    setKeyFilter(value);
  };
  useEffect(() => {
    if (keyFilter === "all" || keyFilter === "") {
      setListProjectFilter(listProject);
      return;
    }
    setListProjectFilter(
      listProject?.filter((item) => item?.type === keyFilter)
    );
  }, [keyFilter]);

  return (
    <div className="mt-24 bg-white">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(27 49 71), rgba(179, 205, 209, 0.5))",
          }}
        ></div>
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          DỰ ÁN
        </h2>
        <img
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          src="https://www.cc1.vn/wp-content/themes/cc1/assets/images/project/23.png"
          alt="about Us image"
        />
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <h2 className="text-[18px] md:text-2xl leading-6 font-semibold text-green-900 text-center mt-10 mb-10">
          Tất cả dự án
        </h2>
        <div className="relative mb-8">
          <div className="border-t-black"></div>
          <div className="flex items-center relative max-w-[280px] bg-slate-500">
            <select
              className="h-12 text-gray-900 text-sm font-medium py-2.5 px-4 appearance-none w-full cursor-pointer"
              onChange={(e) => handleClickOption(e.target.value)}
            >
              {listFilterOption?.map((item) => (
                <option key={item?.value} value={item?.value}>
                  {item?.name}
                </option>
              ))}
            </select>
            <svg
              className="absolute top-1/2 -translate-y-1/2 right-4 z-1"
              width={20}
              height={20}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                stroke="#111827"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="border-t-black"></div>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-6 gap-4">
          {listProjectFilter.map((item, index) => {
            const colSpan = item?.col;

            return (
              <Link
                key={item.id} // Add a unique key for each item
                href={`/projects/${item.slug}`}
                className={`lg:col-span-${colSpan} sm:col-span-3 col-span-6 cursor-pointer transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-60"
                    : "opacity-100"
                }`} // Adjust opacity with animation
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
              >
                <div className="overflow-hidden h-[400px]">
                  <Image
                    src={item.img} // Use the image from the item
                    alt={`project image ${item.title}`} // Use the title for alt text
                    className="w-full h-[400px] object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h2
                  className={`md:text-lg text-[14px] font-medium ${
                    hoveredIndex === index ? "text-green-700" : "text-black"
                  }`}
                >
                  {item.title}
                </h2>
                <h2 className="md:text-sm text-[12px] text-gray-500 font-normal transition-transform duration-300 hover:text-black">
                  {item.type}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
