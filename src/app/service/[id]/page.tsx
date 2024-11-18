"use client";

import Breadcrumb from "@/app/components/Breadcrumb";
import { useParams } from "next/navigation";
import { dataService } from "../mockData";
import Link from "next/link";
import { getTypeNameService } from "@/app/unit/common";

export default function Service() {
  const params = useParams<{ id: string }>(); // Định nghĩa kiểu cho params
  const { id } = params; // Lấy id từ params

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
          src="https://wallpaperaccess.com/full/508840.jpg"
          alt="about Us image"
        />
        <Breadcrumb
          title="Lĩnh vực hoạt động"
          href="/home"
          nameChild={getTypeNameService(id)}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10">
        <div className="flex justify-center text-sm font-medium text-center text-gray-500 border-b border-red-500 sm:border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center">
            {dataService?.map((item) => (
              <li className="" key={item?.href}>
                <Link
                  href={item?.href}
                  aria-current="page"
                  className={`inline-block p-4 border-b-2 rounded-t-lg ${
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
      </div>
    </div>
  );
}
