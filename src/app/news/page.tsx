import Link from "next/link";
import { listNews } from "./Mockdata";
import Image from "next/image";
import logoHeader from "../assest/image/news/logo-about-dai-tien-phat-tin-tuc.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát",
};

export default function MyApp() {
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
        <Image
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          alt="Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát" // Cập nhật thuộc tính alt
          src={logoHeader}
        />
        <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          TIN TỨC
        </h2>
      </div>
      <div className="mx-auto px-4 lg:px-8 pb-10">
        <h2 className="text-[18px] md:text-2xl leading-6 font-semibold text-green-900 text-center mt-10 mb-10">
          Tất cả tin tức
        </h2>

        <div className="grid lg:grid-cols-7 grid-cols-6 gap-4">
          {listNews.map((item) => {
            const colSpan = item?.col;
            return (
              <Link
                key={item.id}
                href={`/news/${item.slug}`}
                className={`lg:col-span-${colSpan} sm:col-span-3 col-span-6 cursor-pointer transition-opacity duration-300 group`}
              >
                <div key={item.id} className="relative group cursor-pointer">
                  <div className="overflow-hidden h-[400px] group-hover:opacity-60 transition-opacity duration-300">
                    <Image
                      src={item.img}
                      alt={`Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát: ${item.title}`}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h2 className="md:text-lg text-[14px] font-medium group-hover:text-green-700 transition-colors duration-300">
                    {item.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
