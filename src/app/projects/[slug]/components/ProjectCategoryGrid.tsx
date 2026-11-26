import Image from "next/image";
import Link from "next/link";
import { GRANITO_PROJECT } from "@/app/constant/unit";
import { dataListProject } from "@/app/layout/header/mockData";
import { listProject } from "../mockData";
import defaultCover from "@/app/assest/image/projects/logo-about-dai-tien-phat-du-an.png";
import granitoCover from "../../../../../public/images/project/DaMaiGranito/san-granito-noi-that.webp";

export default function ProjectCategoryGrid() {
  const categories = dataListProject.filter(({ slug }) => slug !== "tat-ca");

  return (
    <ul
      aria-label="Danh sách danh mục dự án"
      className="grid w-full grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-7"
    >
      {categories.map(({ slug, name, href }) => {
        const representative = listProject.find((project) => project.type === slug);
        const isWide = representative?.col === 3;
        const cover =
          slug === GRANITO_PROJECT.slug
            ? granitoCover
            : representative?.img ?? defaultCover;

        return (
          <li key={href} className={isWide ? "lg:col-span-3" : "lg:col-span-2"}>
            <Link
              href={href}
              className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700"
            >
              <div className="relative h-72 overflow-hidden bg-gray-100 sm:h-80 lg:h-[400px]">
                <Image
                  src={cover}
                  alt=""
                  fill
                  sizes={`(min-width: 1024px) ${isWide ? "43vw" : "29vw"}, (min-width: 640px) 50vw, 100vw`}
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-105"
                />
              </div>
              <h2 className="mt-2 text-base font-medium text-gray-900 transition-colors group-hover:text-green-700 sm:text-lg">
                {name}
              </h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
