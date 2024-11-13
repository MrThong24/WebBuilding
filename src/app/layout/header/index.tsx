"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Montserrat } from "next/font/google";
import { dataIntroduce, dataService } from "./mockData";
import { CustomPopover } from "./components/CustomPopover";
import CustomDisclosure from "./components/CustomDisclosure";
import logoCty from "../../assest/image/LOGOCTY.png";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // Add state for scroll

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white ${
        montserrat.className
      } fixed top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out ${
        scrolled ? "shadow-lg py-4" : "shadow-none py-6"
      }`}
    >
      <nav
        aria-label="Global"
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ease-in-out ${
          scrolled ? "transform scale-95" : "scale-100"
        } lg:px-8`}
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <Image
              alt="Logo Company" // Cập nhật thuộc tính alt
              src={logoCty}
              width={80} // Thay đổi kích thước theo yêu cầu
              height={80} // Thay đổi kích thước theo yêu cầu
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <CustomPopover title="TRANG CHỦ" items={[]} />
          <CustomPopover title="GIỚI THIỆU" items={dataIntroduce} />
          <CustomPopover title="LĨNH VỰC HOẠT ĐỘNG" items={dataService} />
          <CustomPopover title="DỰ ÁN" items={[]} />
          <CustomPopover title="TIN TỨC" items={[]} />
          <CustomPopover title="LIÊN HỆ" items={[]} />
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
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
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <CustomDisclosure title="Trang chủ" items={[]} />
                <CustomDisclosure title="Giới thiệu" items={dataIntroduce} />
                <CustomDisclosure
                  title="Lĩnh vực hoạt động"
                  items={dataService}
                />
                <CustomDisclosure title="Dự án" items={[]} />
                <CustomDisclosure title="Tin tức" items={[]} />
                <CustomDisclosure title="Liên hệ" items={[]} />
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}