export default function SectionTintuc({}) {
  return (
    <section className="py-24 relative bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-3xl">
            TIN TỨC
          </h2>
        </div>
        <div className="grid grid-cols-7 grid-rows-2 gap-4 ">
          <div className="col-span-3 row-span-2 border-2">
            <img
              className="mx-auto h-full rounded-3xl object-cover"
              src="https://pagedone.io/asset/uploads/1717751272.png"
              alt="about Us image"
            />
          </div>
          <div className="col-span-2 col-start-4 border-2">7</div>
          <div className="col-span-2 col-start-4 row-start-2 border-2">8</div>
          <div className="col-span-2 col-start-6 row-start-1 border-2">9</div>
          <div className="col-span-2 col-start-6 row-start-2 border-2">10</div>
        </div>
      </div>
    </section>
  );
}
