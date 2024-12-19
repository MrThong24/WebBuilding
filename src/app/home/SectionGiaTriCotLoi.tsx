"use client"; // <===== REQUIRED

import Image, { StaticImageData } from "next/image";
import LayoutSection from "./layout/LayoutSection";

interface Post {
  id: number; // or string, depending on your data
  title: string;
  description: string;
  icons: StaticImageData;
}

interface PageProps {
  posts: Post[];
}

export default function SectionGiaTriCotLoi({ posts }: PageProps) {
  return (
    <LayoutSection title="GIÁ TRỊ CỐT LÕI" showBtnMore={false} slug="">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:gap-y-16 md:max-w-none md:grid-cols-3 sm:grid-cols-2">
        {posts.map((post) => (
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
                    width={50} // Thay đổi kích thước theo yêu cầu
                    height={50} // Thay đổi kích thước theo yêu cầu
                  />
                  <p>{post.title}</p>
                </div>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-800 font-medium">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </LayoutSection>
  );
}
