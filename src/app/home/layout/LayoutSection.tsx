"use client";

import Link from "next/link";
export default function LayoutSection({
  children, // Change from child to children
  title,
  showBtnMore,
  slug,
}: {
  children: React.ReactNode; // Change from child to children
  title: string;
  showBtnMore: boolean;
  slug: string;
}) {
  return (
    <section className="py-12 lg:py-14 relative bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto lg:mx-0 flex justify-between items-center">
          <h2 className="text-pretty text-2xl font-semibold tracking-tight text-[var(--thm-primary-color)] sm:text-3xl">
            {title}
          </h2>
          {showBtnMore && (
            <Link
              href={slug}
              className=" text-white hidden bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 text-center sm:inline-flex items-center dark:bg-green-700 dark:hover:bg-green-800 dark:focus:ring-green-900"
            >
              Xem thêm
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          )}
        </div>
        <div>
          <div className="border-t border-green-800 mt-8 pt-10 sm:mt-4 sm:pt-10 md:mx-0 animate-width-animation"></div>
          {children}
        </div>
      </div>
    </section>
  );
}
