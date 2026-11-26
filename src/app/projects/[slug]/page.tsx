import { GRANITO_PROJECT } from "@/app/constant/unit";
import { dataListProject } from "@/app/layout/header/mockData";
import { listProject } from "./mockData";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import ProjectCategoryGrid from "./components/ProjectCategoryGrid";
import logoHeader from "../../assest/image/projects/logo-about-dai-tien-phat-du-an.png";
import type { Metadata } from "next";

type ProjectCategoryProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return dataListProject.map(({ slug }) => ({ slug }));
}

function getCategory(slug: string) {
  const category = dataListProject.find((project) => project.slug === slug);
  if (!category) notFound();
  return category;
}

export async function generateMetadata({
  params,
}: ProjectCategoryProps): Promise<Metadata> {
  const { slug } = await params;
  const { heading, description, href } = getCategory(slug);
  const title = `${heading} | Đại Tiến Phát`;
  const url = `${href}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: logoHeader.src,
      type: "website",
    },
  };
}

export default async function Page({ params }: ProjectCategoryProps) {
  const { slug } = await params;
  const category = getCategory(slug);
  const isAllProjects = slug === "tat-ca";
  const isGranitoCategory = slug === GRANITO_PROJECT.slug;
  const projects = listProject.filter((item) => item.type === slug);

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
        <h1 className="absolute inset-0 flex items-center justify-center px-4 text-center text-2xl font-bold text-white md:text-3xl">
          {category.heading}
        </h1>

        <Image
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          alt="Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát" // Cập nhật thuộc tính alt
          src={logoHeader}
        />
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <p className="mx-auto max-w-3xl py-8 text-center text-base leading-7 text-gray-700">
          {category.description}
        </p>
        {isAllProjects ? (
          <ProjectCategoryGrid />
        ) : (
          <>
            <Link
              href="/projects/tat-ca/"
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:underline"
            >
              <span aria-hidden="true">←</span>
              Tất cả dự án
            </Link>
            <div
              className={
                isGranitoCategory
                  ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid lg:grid-cols-7 grid-cols-6 gap-4"
              }
            >
              {projects.map((item) => {
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
                        {isGranitoCategory ? item.des : item.type}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </>
        )}
        {isGranitoCategory && (
          <Link
            href="/contact/"
            className="mt-8 inline-block font-semibold text-green-800 underline"
          >
            Liên hệ tư vấn thi công Granito và đá rửa
          </Link>
        )}
      </div>
    </div>
  );
}
