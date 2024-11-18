export default function Breadcrumb({
  title,
  href,
  nameChild,
}: {
  title: string;
  href: string;
  nameChild: string;
}) {
  return (
    <div className="absolute bottom-24 left-10 md:left-24 right-0 z-10">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm md:text-md font-medium text-white"
            >
              Trang chủ
            </a>
          </li>

          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-white mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>

              <a
                href={href}
                className="ms-1 text-sm md:text-md font-medium text-white"
              >
                {title}
              </a>
            </div>
          </li>
          <li aria-current="page" className="flex-1">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>

              <span className="ms-1 text-sm md:text-md font-medium text-red-400 md:ms-2 dark:text-red-200">
                {nameChild}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
}
