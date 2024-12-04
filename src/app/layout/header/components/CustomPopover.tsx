import { getLink } from "@/app/unit/common";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface CustomPopoverProps {
  title: string;
  items: Array<{ name: string; href: string }>;
  isStatus: boolean;
}

export const CustomPopover = ({
  title,
  items,
  isStatus,
}: CustomPopoverProps) => {
  return (
    <Popover className="relative">
      <PopoverButton
        className={`flex items-center font-medium gap-x-1 text-sm/8 ${
          isStatus ? "text-red-500 font-semibold" : "text-gray-700 font-medium"
        } focus:outline-none data-[active]:text-red-500 data-[hover]:text-red-500 data-[focus]:outline-1 data-[focus]:outline-[var(--thm-base-color)]`}
      >
        {items?.length === 0 && <Link href={getLink(title)}>{title}</Link>}
        {items?.length > 0 && (
          <>
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </>
        )}
      </PopoverButton>
      {items?.length > 0 && (
        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-[280px] overflow-hidden bg-[var(--thm-primary-color)] shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className={`${inter.className}`}>
            {items?.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault(); // Ngăn chặn hành động mặc định
                  // Thực hiện hành động ẩn PopoverPanel
                  const popover = e.currentTarget.closest(
                    "[data-headlessui-state]"
                  );
                  if (popover) {
                    popover.setAttribute("data-leave", "true"); // Thêm thuộc tính data-leave
                  }
                  // Chuyển hướng đến href
                  window.location.href = item.href;
                }}
              >
                <div
                  className={`group relative flex items-center gap-x-6 py-3 px-4 text-sm/6 hover:bg-[var(--thm-base-color-rgb)] ${
                    items.length - 1 !== index ? "border-b-[1px]" : ""
                  } border-b-white`}
                >
                  <div className="flex-auto">
                    <p className="block text-white">{item.name}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </PopoverPanel>
      )}
    </Popover>
  );
};
