"use client";

import Breadcrumb from "@/app/components/Breadcrumb";
import { useParams } from "next/navigation";
import { dataService } from "../mockData";
import Link from "next/link";
import { getTypeNameService } from "@/app/unit/common";
import SectionThiCongHoanThien from "./SectionThiCongHoanThien";
import { TypeService } from "@/app/constant/unit";
import SectionThiCongNhaSuong from "./SectionThiCongNhaSuong";
import SectionThiCongCongTrinhDanDung from "./SectionThiCongCongTrinhDanDung";
import SectionThiCongHaTangKyThuat from "./SectionThiCongHaTangKyThuat";
import SectionThiCongCanhQuan from "./SectionThiCongCanhQuan";
import SectionCaiTao from "./SectionCaiTao";
import SectionSanXuat from "./SectionSanXuat";
import ThiCongHoanThien from "../../assest/image/ThiCongHoanThien.jpg";
import ThiCongNhaSuong from "../../assest/image/ThiCongNhaSuong.jpg";
import Image from "next/image";

export default function Service() {
  const params = useParams<{ id: string }>(); // Định nghĩa kiểu cho params
  const { id } = params; // Lấy id từ params
  console.log("id", id);
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

        {id === TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE ? (
          <Image
            alt="Thi Cong Hoan Thien" // Cập nhật thuộc tính alt
            src={ThiCongHoanThien}
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          />
        ) : (
          <img
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            src="https://wallpaperaccess.com/full/508840.jpg"
            alt="about Us image"
          />
        )}

        <Breadcrumb
          title="Lĩnh vực hoạt động"
          href="/service/thi-cong-hoan-thien-noi-that"
          nameChild={getTypeNameService(id)}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10">
        <div className="flex justify-center text-sm font-medium text-center text-gray-600  sm:border-gray-200 dark:text-gray-600 dark:border-gray-700">
          <ul className="flex flex-wrap justify-center">
            {dataService?.map((item) => (
              <li className="" key={item?.href}>
                <Link
                  href={item?.href}
                  aria-current="page"
                  className={`inline-block sm:p-4 p-[10px] border-b-2 rounded-t-lg ${
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
        <div className=" mt-16">
          {id === TypeService.THI_CONG_HOAN_THIEN_NOI_THAT_TYPE && (
            <SectionThiCongHoanThien />
          )}
          {id === TypeService.THI_CONG_NHA_XUONG_CONG_NGHIEP_TYPE && (
            <SectionThiCongNhaSuong />
          )}
          {id === TypeService.THI_CONG_CONG_TRINH_DAN_DUNG_TYPE && (
            <SectionThiCongCongTrinhDanDung />
          )}
          {id === TypeService.THI_CONG_HA_TANG_KY_THUAT_TYPE && (
            <SectionThiCongHaTangKyThuat />
          )}
          {id === TypeService.THI_CONG_CANH_QUAN_TYPE && (
            <SectionThiCongCanhQuan />
          )}
          {id === TypeService.CAI_TAO_SUA_CHUA_CONG_TRINH_TYPE && (
            <SectionCaiTao />
          )}
          {id === TypeService.SAN_XUAT_THUONG_MAI_NOI_THAT_QUANG_CAO_TYPE && (
            <SectionSanXuat />
          )}
        </div>
      </div>
    </div>
  );
}
