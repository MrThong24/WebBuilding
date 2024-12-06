"use client"; // <===== REQUIRED

import Breadcrumb from "@/app/components/Breadcrumb";
import { useParams } from "next/navigation";
import { dataService } from "../mockData";
import Link from "next/link";
import { getTypeNameService } from "@/app/unit/common";
import { TypeService } from "@/app/constant/unit";
import ThiCongHoanThien from "../../assest/image/ThiCongHoanThien.jpg";
import Image from "next/image";

import { useEffect, useState } from "react";
import { listProject, Project } from "@/app/projects/mockData";
export default function Service() {
  const params = useParams<{ id: string }>(); // Định nghĩa kiểu cho params
  const { id } = params; // Lấy id từ params
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // State for hovered index
  const [keyFilter, setKeyFilter] = useState("");
  const [listProjectFilter, setListProjectFilter] =
    useState<Project[]>(listProject);

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

        {id === TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE ? (
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={ThiCongHoanThien}
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          />
        ) : (
          <img
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            src="https://wallpaperaccess.com/full/508840.jpg"
            alt="about Us image"
          />
        )}

        <Breadcrumb
          title="Lĩnh vực hoạt động"
          href="/service/thi-cong-hoan-thien-noi-that"
          nameChild={getTypeNameService(id)}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10">
        <div className="flex justify-center text-sm font-medium text-center text-gray-600  sm:border-gray-200 dark:text-gray-600 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center">
            {dataService?.map((item) => (
              <li className="" key={item?.href}>
                <Link
                  href={item?.href}
                  aria-current="page"
                  className={`inline-block sm:p-4 p-[10px] border-b-2 rounded-t-lg ${
                    id === item?.href
                      ? "border-red-600 text-red-500"
                      : "border-transparent hover:text-red-500 hover:border-red-600 dark:hover:text-red-500"
                  }`}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid lg:grid-cols-7 grid-cols-6 gap-4 mt-20">
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
