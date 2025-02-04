"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function CustomSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const listFilterOption = [
    { value: "tat-ca", name: "Tất cả" },
    { value: "san-choi-the-thao", name: "Sân chơi thể thao" },
    {
      value: "cong-trinh-dan-dung-va-cong-nghiep",
      name: "Công trình dân dụng và công nghiệp",
    },
    {
      value: "cong-trinh-ha-tang-ky-thuat",
      name: "Công trình hạ tầng kỹ thuật",
    },
    {
      value: "sua-chua-cai-tao-cong-trinh",
      name: "Sửa chửa - Cải tạo công trình",
    },
    {
      value: "trung-tam-thuong-mai",
      name: "Trung tâm thương mại",
    },
    {
      value: "cong-trinh-khu-nghi-duong",
      name: "Công trình khu nghỉ dưỡng",
    },
  ];
  const idSlug = pathname.split("/")[2];
  const handleClickOption = (value: string) => {
    router.push(`/projects/${value}`);
  };
  return (
    <div className="relative mb-8">
      <div className="border-t-black"></div>
      <div className="flex items-center relative sm:max-w-[340px] rounded-sm">
        <select
          className="text-gray-900 text-sm font-medium py-2.5 px-4 appearance-none w-full cursor-pointer bg-transparent rounded-md"
          onChange={(e) => handleClickOption(e.target.value)}
          value={
            listFilterOption?.find((item) => item?.value === idSlug)?.value
          }
        >
          {listFilterOption?.map((item) => (
            <option key={item?.value} value={item?.value}>
              {item?.name}
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
