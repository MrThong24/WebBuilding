import Image, { StaticImageData } from "next/image";
import Quality from '../../assest/image/Quality.jpg'

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
    <section className="py-10 relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-3xl">
            GIÁ TRỊ CỐT LÕI
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-8 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
                      alt="Logo Company" // Cập nhật thuộc tính alt
                      src={post.icons}
                      width={50} // Thay đổi kích thước theo yêu cầu
                      height={50} // Thay đổi kích thước theo yêu cầu
                    />
                    {post.title}
                  </div>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-800 font-medium">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
