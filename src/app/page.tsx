import { Carousel } from "@material-tailwind/react";
export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Chất lượng",
      description:
        "Chúng tôi cam kết cung cấp sản phẩm và dịch vụ chất lượng cao nhất, đảm bảo sự hài lòng của khách hàng.",
    },
    {
      id: 2,
      title: "Đổi mới",
      description:
        "Chúng tôi luôn tìm kiếm những giải pháp sáng tạo và công nghệ tiên tiến để cải thiện quy trình và sản phẩm của mình.",
    },
    {
      id: 3,
      title: "Tin cậy",
      description:
        "Khách hàng có thể hoàn toàn yên tâm khi hợp tác với chúng tôi, vì chúng tôi luôn giữ đúng lời hứa và cam kết.",
    },
    {
      id: 4,
      title: "Bền vững",
      description:
        "Chúng tôi chú trọng đến việc bảo vệ môi trường và phát triển bền vững trong mọi hoạt động của mình.",
    },
    {
      id: 5,
      title: "Đội ngũ chuyên nghiệp",
      description:
        "Đội ngũ nhân viên của chúng tôi là những chuyên gia giàu kinh nghiệm, luôn sẵn sàng hỗ trợ và tư vấn cho khách hàng.",
    },
    {
      id: 6,
      title: "Khách hàng là trung tâm",
      description:
        "Chúng tôi đặt khách hàng lên hàng đầu, lắng nghe và đáp ứng nhu cầu của họ để tạo ra giá trị tốt nhất.",
    },
  ];
  return (
    <div>
      <section className="py-24 relative bg-white">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="border-l-[3px] border-[var(--thm-primary-color)] pl-3 w-full">
                  <h2 className="text-[var(--thm-primary-color)] text-5xl font-bold font-manrope leading-normal lg:text-start ">
                    Chào mừng!
                  </h2>
                  <h2 className="text-[var(--thm-primary-color)] text-2xl font-bold font-manrope leading-normal lg:text-start ">
                    Công ty xây dựng
                  </h2>
                </div>
                <p className="text-gray-500 text-[14px] font-normal leading-relaxed lg:text-start text-center">
                  Through collaborationperse perspectives and strengths are
                  leveraged to create inclusive environments where everyone has
                  the opportunity to thrive. This approach not only fosters
                  personal growth and achievement but also strengthens the
                  fabric of society.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-[var(--thm-primary-color)] hover:bg-[var(--thm-primary-color-hover)] transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Tìm hiểu thêm
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="white" // Changed fill to white
                  className="size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
            />
          </div>
        </div>
      </section>
      <section className="py-24 relative bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-4xl">
              GIÁ TRỊ CỐT LÕI
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <p>
                      <span className="absolute inset-0" />
                      {post.title}
                    </p>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 relative bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-4xl">
              LĨNH VỰC HOẠT ĐỘNG
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="group relative">
                  <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <p>
                      <span className="absolute inset-0" />
                      {post.title}
                    </p>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
