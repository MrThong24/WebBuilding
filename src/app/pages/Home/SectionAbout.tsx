export default function SectionAbout() {
  return (
    <section className="py-24 relative bg-white ">
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
                personal growth and achievement but also strengthens the fabric
                of society.
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
  );
}
