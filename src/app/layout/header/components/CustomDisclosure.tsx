import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import ProjectMenuLinks from "./ProjectMenuLinks";

interface Item {
  name: string;
  href: string;
  slug?: string;
}

interface CustomDisclosureProps {
  title: string;
  items: Item[];
  slug: string;
  handleClose?: () => void;
  isProject?: boolean;
}

const CustomDisclosure: React.FC<CustomDisclosureProps> = ({
  title,
  items,
  slug,
  handleClose,
  isProject,
}) => {
  const router = useRouter();
  const pathname = usePathname().replace(/\/$/, "");
  const activeSection =
    !isProject && items.some(({ href }) => pathname === href.replace(/\/$/, ""));
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton
        onClick={() => {
          if (items && items.length > 0) {
            return;
          }
          if (handleClose) {
            handleClose(); // Call handleClose only if it's defined
          }
          router.push(slug);
        }}
        className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold hover:bg-[var(--thm-base-color)] hover:text-white ${activeSection ? "bg-green-50 text-green-900" : "text-gray-900"}`}
      >
        {title}
        {items?.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </DisclosureButton>

      {isProject && items.length > 0 && (
        <DisclosurePanel className="px-2 pb-2 pt-1">
          <div className="rounded-xl border border-gray-200 bg-white p-2">
            <ProjectMenuLinks items={items} onSelect={handleClose} />
          </div>
        </DisclosurePanel>
      )}
      {!isProject && items.length > 0 && (
        <DisclosurePanel className="mt-2 space-y-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={handleClose}
              aria-current={pathname === item.href.replace(/\/$/, "") ? "page" : undefined}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-green-50 hover:text-green-900 aria-[current=page]:bg-green-100 aria-[current=page]:text-green-900"
            >
              {item.name}
            </Link>
          ))}
        </DisclosurePanel>
      )}
    </Disclosure>
  );
};

export default CustomDisclosure;
