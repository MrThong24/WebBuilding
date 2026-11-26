import { GRANITO_PROJECT } from "@/app/constant/unit";
import { dataListProject } from "@/app/layout/header/mockData";
import { listProject } from "./mockData";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomSelect from "./components/CustomSelect";
import logoHeader from "../../assest/image/projects/logo-about-dai-tien-phat-du-an.png";
import type { Metadata } from "next";

type ProjectCategoryProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return dataListProject.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectCategoryProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === GRANITO_PROJECT.slug) {
    return {
      title: GRANITO_PROJECT.name,
      description:
        "Tìm hiểu giá thi công đá mài Granito, ứng dụng trong nội thất và giải pháp sàn cho nhà máy chế biến thủy sản.",
    };
  }

  return {
    title: "Dự án",
    description: "Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát",
  };
}

export default async function Page({ params }: ProjectCategoryProps) {
  const { slug } = await params;
  const isGranitoCategory = slug === GRANITO_PROJECT.slug;
  const detail =
    slug === "tat-ca"
      ? listProject
      : listProject.filter((item) => item.type === slug);

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

        <Image
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          alt="Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát" // Cập nhật thuộc tính alt
          src={logoHeader}
        />
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <h2 className="text-[18px] md:text-2xl leading-6 font-semibold text-green-900 text-center mt-10 mb-10">
          {isGranitoCategory ? GRANITO_PROJECT.name : "Tất cả dự án"}
        </h2>
        <CustomSelect />

        <div
          className={
            isGranitoCategory
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "grid lg:grid-cols-7 grid-cols-6 gap-4"
          }
        >
          {detail.map((item) => {
            const isGranitoArticle = item.type === GRANITO_PROJECT.slug;
            const cardColumns = isGranitoCategory
              ? ""
              : `lg:col-span-${item.col} sm:col-span-3 col-span-6`;
            const imageHeight = isGranitoCategory
              ? "h-52 lg:h-64"
              : "h-[400px]";
            return (
              <Link
                key={item.id}
                href={`/projects/${item.type}/${item.slug}`}
                className={`group cursor-pointer transition-opacity duration-300 ${cardColumns}`}
              >
                <div className="relative">
                  <div
                    className={`overflow-hidden group-hover:opacity-60 transition-opacity duration-300 ${imageHeight}`}
                  >
                    <Image
                      src={item.img}
                      alt={`Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát: ${item.title}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="md:text-lg text-[14px] font-medium group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="md:text-sm text-[12px] text-gray-500 font-normal transition-colors duration-300 group-hover:text-black">
                    {isGranitoArticle ? item.des : item.type}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
