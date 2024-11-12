import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

interface Item {
  name: string;
  href: string;
}

interface CustomDisclosureProps {
  title: string;
  items: Item[];
}

const CustomDisclosure: React.FC<CustomDisclosureProps> = ({
  title,
  items,
}) => {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-[var(--thm-base-color)] hover:text-white ">
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
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
            >
              {item.name}
            </DisclosureButton>
          ))}
        </DisclosurePanel>
      )}
    </Disclosure>
  );
};

export default CustomDisclosure;
