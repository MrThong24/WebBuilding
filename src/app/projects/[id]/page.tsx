import Image from "next/image";
import { listProject } from "../mockData";

interface BlogPostPageProps {
  params: Promise<{ id: string }>; // Đảm bảo params là một Promise
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
              "linear-gradient(115deg, rgba(27 49 71), rgba(179, 205, 209, 0.5))",
          }}
        ></div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex justify-center items-center p-6">
          <p className="text-white text-3xl font-semibold">{detail?.title}</p>
        </div>
        {detail?.img && detail.img !== "" && (
          <Image
            className="md:h-[300px] lg:h-[60vh] h-[240px] w-full object-cover"
            alt={`project image ${detail?.title}`} // Use the title for alt text
            src={detail.img}
          />
        )}
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10 mt-4">
        <h2 className="text-[#333333] font-bold text-2xl mb-6">
          {detail?.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: detail?.content ?? "" }}></div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // Here you would typically fetch the list of project slugs or IDs
  const params = listProject.map((project) => ({
    id: project.slug, // Assuming 'slug' is the identifier for the project
  }));
  return params;
}
