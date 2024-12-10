"use client"; // <===== REQUIRED

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import About from "../assest/image/About.jpeg";
export default function SectionAbout() {
  const router = useRouter();
  return (
    <section className="py-12 lg:py-24 relative bg-white">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start items-start gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <div className="border-l-[3px] border-[var(--thm-primary-color)] pl-3 w-full">
                <motion.h2
                  className="text-[var(--thm-primary-color)] text-4xl lg:text-5xl font-bold font-manrope leading-normal lg:text-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  Chào mừng!
                </motion.h2>
                <motion.h2
                  className="text-[var(--thm-primary-color)] text-2xl font-bold font-manrope leading-normal lg:text-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Công ty TNHH Đầu tư Xây dựng Đại Tiến Phát
                </motion.h2>
              </div>
              <motion.p
                className="text-gray-500 text-[14px] font-normal leading-relaxed lg:text-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Công ty TNHH Đầu tư Xây dựng Đại Tiến Phát là đơn vị thi công
                xây dựng uy tín tại Việt Nam, chuyên cung cấp giải pháp hoàn
                thiện nội thất, xây dựng công trình dân dụng và công nghiệp. Với
                đội ngũ kỹ sư chuyên nghiệp, chúng tôi cam kết mang đến chất
                lượng vượt trội và sự hài lòng cho khách hàng
              </motion.p>
            </div>
            <motion.button // Thay đổi từ button thành motion.button
              className="sm:w-fit px-3.5 py-2 bg-[var(--thm-primary-color)] hover:bg-[var(--thm-primary-color-hover)] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] lg:justify-center items-center flex"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => router.push("/about/tong-quan")}
            >
              <span className="px-1.5 text-white text-sm font-medium leading-6">
                Tìm hiểu thêm
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="size-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
          <div className="relative lg:h-[560px] sm:h-[460px] h-[420px]">
            <Image
              className="w-full h-full rounded-2xl object-cover relative"
              alt="Đại Tiến Phát" // Cập nhật thuộc tính alt
              src={About}
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
