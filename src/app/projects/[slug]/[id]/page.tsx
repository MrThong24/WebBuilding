import Image from "next/image";
import Link from "next/link";
import { dataListProject } from "@/app/layout/header/mockData";
import { listProject } from "../mockData";
import { Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import "../styles/detail.css";

interface BlogPostPageProps {
  params: Promise<{ slug: string; id: string }>;
}

const openSans = Open_Sans({ subsets: ["latin"] });

function getProject(slug: string, id: string) {
  const project = listProject.find(
    (item) => item.type === slug && item.slug === id
  );
  if (!project) notFound();
  return project;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug, id } = await params;
  const project = getProject(slug, id);
  const { img, des, seoTitle } = project;
  const title = seoTitle ? `${seoTitle} | Đại Tiến Phát` : project.title;
  const description = des || project.title;
  const image =
    (typeof img === "string" ? img : img.src) ||
    "/images/favicon-light-custom.jpg";
  const url = `/projects/${slug}/${id}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      images: image,
      url,
      type: "website",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug, id } = await params;
  const detail = getProject(slug, id);
  const category = dataListProject.find((project) => project.slug === slug);

  return (
    <div className="pt-24 bg-white ">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgb(27, 49, 71), rgb(99 102 102 / 50%))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <h1 className="text-white text-xl sm:text-3xl font-semibold min-w-[260px] text-center">
            {detail.title}
          </h1>
        </div>
        {detail.img && (
          <Image
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            alt={`Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát: ${detail.title}`}
            src={detail.img}
          />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8 pb-10 mt-4">
        {category && (
          <nav aria-label="Danh mục bài viết" className="mb-4 text-sm">
            <Link href="/projects/tat-ca/" className="text-green-800 underline">
              Dự án
            </Link>
            <span aria-hidden="true" className="mx-2 text-gray-500">
              /
            </span>
            <Link href={`${category.href}/`} className="text-green-800 underline">
              {category.heading}
            </Link>
          </nav>
        )}
        <div
          className={`${openSans.className} containerEditor`}
          dangerouslySetInnerHTML={{ __html: detail.content }}
        ></div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return listProject.map((project) => ({ slug: project.type, id: project.slug }));
}
