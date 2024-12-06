export default function MyApp() {
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
          alt="about Us image"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 pb-10 grid md:grid-cols-2 grid-cols-1 gap-4 mt-16"></div>
    </div>
  );
}

export async function generateStaticParams() {
  // Here you would typically fetch the list of news slugs or IDs
  const params = [
    {
      id: 1,
      title: "Dự án 1",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình dân dụng",
      type: "option1",
    },
    {
      id: 2,
      title: "Dự án 2",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Công trình công nghiệp",
      type: "option1",
    },
    {
      id: 3,
      title: "Dự án 3",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công nội thất",
      type: "option2",
    },
    {
      id: 4,
      title: "Dự án 4",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Thi công cảnh quan",
      type: "option2",
    },
    {
      id: 5,
      title: "Dự án 5",
      img: "https://wallpaperaccess.com/full/508840.jpg",
      description: "Hạ tầng kỹ thuật",
      type: "option2",
    },
  ].map((news) => ({
    id: String(news.id), // Assuming 'slug' is the identifier for the news
  }));
  return params;
}
