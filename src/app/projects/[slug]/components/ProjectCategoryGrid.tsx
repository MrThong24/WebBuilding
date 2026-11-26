import Image from "next/image";
import Link from "next/link";
import { dataListProject } from "@/app/layout/header/mockData";
import { getProjectCategoryCover } from "../categoryCovers";

export default function ProjectCategoryGrid() {
  const categories = dataListProject.filter(({ slug }) => slug !== "tat-ca");

  return (
    <ul
      aria-label="Danh sách danh mục dự án"
      className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
    >
      {categories.map(({ slug, name, href }) => {
        const cover = getProjectCategoryCover(slug);

        return (
          <li key={href} className="min-w-0">
            <Link
              href={href}
              className="group relative flex aspect-video items-end overflow-hidden rounded-xl bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 sm:aspect-[4/3]"
            >
              <Image
                src={cover}
                alt=""
                fill
                sizes="(min-width: 1216px) 273px, (min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
              />
              <div className="relative flex min-w-0 flex-1 items-end justify-between gap-3 p-4 text-white">
                <h2 className="text-base font-semibold leading-snug">{name}</h2>
                <span aria-hidden="true" className="shrink-0 text-lg leading-none">
                  →
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
