import Image from "next/image";
import { listProject } from "../mockData";
import { Open_Sans } from "next/font/google";
import "../styles/detail.css";

interface BlogPostPageProps {
  params: Promise<{ id: string }>; // Đảm bảo params là một Promise
}

const openSans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  const detail = listProject.find((item) => item?.slug === id);

  // Đặt tiêu đề và mô tả metadata
  const title =
    detail?.title || "Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát";
  const description = detail?.title || title;
  const image = "/images/favicon-light-custom.jpg"; // Đặt ảnh mặc định nếu không có ảnh dự án
  const url = `https://daitienphatcons.com/projects/cong-trinh-ha-tang-ky-thuat/${id}`; // Cập nhật URL với đường dẫn trang dự án

  return {
    metadataBase: new URL("https://daitienphatcons.com"), // Thiết lập metadataBase cho các URL đầy đủ
    title: `${title}`,
    description: description,
    openGraph: {
      title: `${title}`,
      description: description,
      images: image,
      url: url,
      type: "website",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params; // Chờ đợi params hoàn thành
  const id = resolvedParams?.id;
  const detail = listProject.find((item) => item?.slug === id);

  return (
    <div className="pt-24 bg-white ">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgb(27, 49, 71), rgb(99 102 102 / 50%))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <p className="text-white text-xl sm:text-3xl font-semibold min-w-[260px] text-center">
            {detail?.title}
          </p>
        </div>
        {detail?.img && detail.img !== "" && (
          <Image
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            alt={`Công ty TNHH Đầu tư Phát triển Xây dựng Đại Tiến Phát: ${detail?.title}`} // Use the title for alt text
            src={detail.img}
          />
        )}
      </div>

      <div className="mx-auto max-w-6xl px-4 lg:px-8 pb-10 mt-4">
        <div
          className={`${openSans.className} containerEditor`}
          dangerouslySetInnerHTML={{ __html: detail?.content ?? "" }}
        ></div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Here you would typically fetch the list of project slugs or IDs
  const params = listProject.map((project) => ({
    slug: project.type,
    id: project.slug, // Assuming 'slug' is the identifier for the project
  }));
  return params;
}
