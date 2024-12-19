import { Open_Sans } from "next/font/google";
import { listNews } from "../Mockdata";
import "../styles/detail.css";
interface BlogPostPageProps {
  params: Promise<{ id: string }>; // Đảm bảo params là một Promise
}
const openSans = Open_Sans({ subsets: ["latin"] });

export default async function BlogPostNews({ params }: BlogPostPageProps) {
  const resolvedParams = await params; // Chờ đợi params hoàn thành
  const id = resolvedParams?.id;
  const detail = listNews.find((item) => item?.slug === id);
  return (
    <div className="pt-24 bg-white ">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(27 49 71), rgba(179, 205, 209, 0.5))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <p className="text-white text-3xl font-semibold">
            Trung Tâm Thương Mại AEON MALL Huế
          </p>
        </div>
        <img
          className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
          src="https://wallpaperaccess.com/full/508840.jpg"
          alt="Công ty TNHH Đầu tư Phát triễn Xây dựng Đại Tiến Phát"
        />
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
  // Here you would typically fetch the list of news slugs or IDs
  const params = listNews.map((news) => ({
    id: String(news.slug), // Assuming 'slug' is the identifier for the news
  }));
  return params;
}
