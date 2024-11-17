"use client";
import { TypeAbout } from "@/app/constant/unit";
import { getTypeNameAbout } from "@/app/unit/common";
import Link from "next/link";
import { useParams } from "next/navigation";
import { dataAbout } from "../mockData";
import Breadcrumb from "../../components/Breadcrumb";
import SectionTongQuan from "./SectionTongQuan";
import SectionLichSu from "./SectionLichSu";
import SectionTamNhin from "./SectionTamNhin";

export default function About() {
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
          title="Giới thiệu"
          href="tong-quan"
          nameChild={getTypeNameAbout(id)}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10">
        <div className="flex justify-center text-sm font-medium text-center text-gray-500 border-b border-red-500 sm:border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            {dataAbout?.map((item) => (
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
        <div className="mt-10">
          {id === TypeAbout.TONG_QUAN_TYPE && <SectionTongQuan />}
          {id === TypeAbout.LICH_SU_PHAT_TRIEN_TYPE && <SectionLichSu />}
          {id === TypeAbout.TAM_NHIN_SU_MENH_GIA_TRI_COT_LOI_TYPE && (
            <SectionTamNhin />
          )}
        </div>
      </div>
    </div>
  );
}
