"use client";

import { dataListProject } from "@/app/layout/header/mockData";
import { usePathname, useRouter } from "next/navigation";

export default function CustomSelect() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="relative mb-8">
      <div className="border-t-black"></div>
      <div className="flex items-center relative sm:max-w-[340px] rounded-sm">
        <select
          aria-label="Danh mục dự án"
          className="text-gray-900 text-sm font-medium py-2.5 px-4 appearance-none w-full cursor-pointer bg-transparent rounded-md"
          onChange={(e) => router.push(e.target.value)}
          value={pathname.replace(/\/$/, "")}
        >
          {dataListProject.map(({ href, name, filterName }) => (
            <option key={href} value={href}>
              {filterName ?? name}
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
  );
}
