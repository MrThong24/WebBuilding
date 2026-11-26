import { getLink } from "@/app/unit/common";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProjectMenuLinks from "./ProjectMenuLinks";

const panelStyle = "rounded-xl border border-gray-200 bg-white p-3 shadow-xl shadow-gray-900/10";

interface CustomPopoverProps {
  title: string;
  items: Array<{ name: string; href: string; slug?: string }>;
  isStatus: boolean;
  isProject: boolean;
  fontClassName?: string;
}

export const CustomPopover = ({
  title,
  items,
  isStatus,
  isProject,
  fontClassName = "",
}: CustomPopoverProps) => {
  const pathname = usePathname().replace(/\/$/, "");

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
      {isProject && items.length > 0 && (
        <PopoverPanel
          anchor={{ to: "bottom", gap: 12, padding: 16 }}
          transition
          className={`${fontClassName} ${panelStyle} z-[60] w-[34rem] max-w-[calc(100vw-2rem)] transition duration-150 data-[closed]:translate-y-1 data-[closed]:opacity-0 motion-reduce:transition-none`}
        >
          {({ close }) => (
            <ProjectMenuLinks items={items} onSelect={() => close()} twoColumns />
          )}
        </PopoverPanel>
      )}
      {!isProject && items.length > 0 && (
        <PopoverPanel
          transition
          className={`${fontClassName} ${panelStyle} absolute -left-8 top-full z-10 mt-3 w-screen max-w-[280px] transition duration-150 data-[closed]:translate-y-1 data-[closed]:opacity-0 motion-reduce:transition-none`}
        >
          {({ close }) => (
            <div className="grid gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => close()}
                  aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
                  className="flex min-h-11 items-center rounded-lg px-3 py-2 text-sm font-medium leading-snug text-gray-800 hover:bg-green-50 hover:text-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-green-700 aria-[current=page]:bg-green-100 aria-[current=page]:font-semibold aria-[current=page]:text-green-900"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </PopoverPanel>
      )}
    </Popover>
  );
};
