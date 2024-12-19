import { dataListProject } from "@/app/layout/header/mockData";
import { listProject } from "./mockData";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomSelect from "./components/CustomSelect";

export async function generateStaticParams() {
  // Here you would typically fetch the list of project slugs or IDs
  const params = dataListProject.map((project) => ({
    slug: project.slug, // Assuming 'slug' is the identifier for the project
  }));
  return params;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail =
    slug === "tat-ca"
      ? listProject
      : listProject?.filter((item) => item?.type === slug);

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
          alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát"
        />
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <h2 className="text-[18px] md:text-2xl leading-6 font-semibold text-green-900 text-center mt-10 mb-10">
          Tất cả dự án
        </h2>
        <CustomSelect />

        <div className="grid lg:grid-cols-7 grid-cols-6 gap-4">
          {detail.map((item) => {
            const colSpan = item?.col;
            return (
              <Link
                key={item.id}
                href={`/projects/san-choi-the-thao/${item.slug}`}
                className={`lg:col-span-${colSpan} sm:col-span-3 col-span-6 cursor-pointer transition-opacity duration-300 group`}
              >
                <div key={item.id} className="relative group cursor-pointer">
                  <div className="overflow-hidden h-[400px] group-hover:opacity-60 transition-opacity duration-300">
                    <Image
                      src={item.img}
                      alt={`Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát: ${item.title}`}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="md:text-lg text-[14px] font-medium group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <h2 className="md:text-sm text-[12px] text-gray-500 font-normal transition-colors duration-300 group-hover:text-black">
                    {item.type}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
