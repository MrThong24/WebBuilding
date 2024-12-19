import { dataGiaTriCotLoi } from "@/app/home/mockData";
import Image from "next/image";

export default function SectionTamNhin() {
  return (
    <div className="px-4 py-5 sm:px-6">
      <div className="mb-12">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-4 ">
          Tầm nhìn
        </h3>
        <ul className="mt-3 flex flex-col space-y-2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-auto w-6 text-green-600 sm:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
            <p className=" text-slate-700 text-sm flex-1">
              Trở thành thương hiệu hàng đầu trong lĩnh vực xây dựng và nội thất
              tại Việt Nam.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-12">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-4">
          Sứ mệnh
        </h3>
        <ul className="mt-3 flex flex-col space-y-2">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-auto w-6 text-green-600 sm:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
            <p className=" text-slate-700 text-sm flex-1">
              Gia tăng giá trị cho cộng đồng.
            </p>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="mr-2 h-auto w-6 text-green-600 sm:w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              ></path>
            </svg>
            <p className=" text-slate-700 text-sm flex-1">
              Nâng cao chất lượng cuộc sống thông qua các công trình bền vững.
            </p>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="text-[16px] md:text-2xl leading-6 font-semibold text-green-900 mb-4">
          Giá trị cốt lõi
        </h3>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 lg:gap-y-6 md:max-w-none md:grid-cols-3 sm:grid-cols-2">
          {dataGiaTriCotLoi.map((post) => (
            <div
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 ">
                  <div className="flex justify-start items-center gap-x-4">
                    <span className="absolute inset-0" />
                    <Image
                      alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát" // Cập nhật thuộc tính alt
                      src={post.icons}
                      width={40} // Thay đổi kích thước theo yêu cầu
                      height={40} // Thay đổi kích thước theo yêu cầu
                    />
                    <p className="text-[16px]">{post.title}</p>
                  </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-[14px] text-gray-800 font-medium">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
