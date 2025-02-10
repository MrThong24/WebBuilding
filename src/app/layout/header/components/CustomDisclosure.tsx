import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
}

const CustomDisclosure: React.FC<CustomDisclosureProps> = ({
  title,
  items,
  slug,
  handleClose,
}) => {
  const router = useRouter();
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
        className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-[var(--thm-base-color)] hover:text-white"
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

      {items?.length > 0 && (
        <DisclosurePanel className="mt-2 space-y-2">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => {
                if (handleClose) {
                  handleClose(); // Call handleClose only if it's defined
                }
              }}
            >
              <div className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50">
                {item.name}
              </div>
            </Link>
          ))}
        </DisclosurePanel>
      )}
    </Disclosure>
  );
};

export default CustomDisclosure;
