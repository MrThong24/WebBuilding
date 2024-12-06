"use client"; // <===== REQUIRED

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MyApp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // State for hovered index
  const [listProject] = useState([
    {
      id: 1,
      title: "Dự án 1",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình dân dụng",
      type: "option1",
    },
    {
      id: 2,
      title: "Dự án 2",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình công nghiệp",
      type: "option1",
    },
    {
      id: 3,
      title: "Dự án 3",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công nội thất",
      type: "option2",
    },
    {
      id: 4,
      title: "Dự án 4",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công cảnh quan",
      type: "option2",
    },
    {
      id: 5,
      title: "Dự án 5",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Hạ tầng kỹ thuật",
      type: "option2",
    },
  ]);
  const [keyFilter] = useState("");
  const [listProjectFilter, setListProjectFilter] = useState([
    {
      id: 1,
      title: "Dự án 1",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình dân dụng",
      type: "option1",
    },
    {
      id: 2,
      title: "Dự án 2",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình công nghiệp",
      type: "option1",
    },
    {
      id: 3,
      title: "Dự án 3",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công nội thất",
      type: "option2",
    },
    {
      id: 4,
      title: "Dự án 4",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công cảnh quan",
      type: "option2",
    },
    {
      id: 5,
      title: "Dự án 5",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Hạ tầng kỹ thuật",
      type: "option2",
    },
  ]);

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
        <img
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          src="https://www.cc1.vn/wp-content/themes/cc1/assets/images/project/23.png"
          alt="about Us image"
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          TIN TỨC
        </h2>
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <h2 className="text-[18px] md:text-2xl leading-6 font-semibold text-green-900 text-center mt-10 mb-10">
          Tất cả tin tức
        </h2>

        <div className="grid lg:grid-cols-7 grid-cols-6 gap-4">
          {listProjectFilter.map((item, index) => {
            const colSpan =
              (index < 6 && index % 3 === 0) || // For the first row, the first item takes 3 columns
              (index >= 6 && index % 3 === 2) // For the second row, the last item takes 3 columns
                ? 3 // 3 columns for the specified items
                : 2; // All other items take 2 columns

            return (
              <Link
                key={item.id} // Add a unique key for each item
                href={`/news/${item.id}`}
                className={`lg:col-span-${colSpan} sm:col-span-3 col-span-6 cursor-pointer transition-opacity duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "opacity-60"
                    : "opacity-100"
                }`} // Adjust opacity with animation
                onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
              >
                <div className="overflow-hidden h-[400px]">
                  <img
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
                  {item.description}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
