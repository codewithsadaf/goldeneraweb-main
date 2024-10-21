"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const coverageItems = [
  { name: "General liability", href: "/genaral-liability" },
  { name: "Professional liability", href: "/professional-liability" },
  { name: "Cyber Security", href: "/cyber-insurance" },
  { name: "Business liability", href: "/business-insurance" },
  { name: "Errors & Omission", href: "/errors-and-omissions" },
  { name: "Workers Comp", href: "/workers-compensation" },
  { name: "Commercial Auto", href: "/commercial-auto" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerClass, setHeaderClass] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderClass("fixed bg-white shadow-md");
      } else {
        setHeaderClass("transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full transition-colors duration-300 ${headerClass}`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          {!mobileMenuOpen && (
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-10 w-auto" />
            </Link>
          )}
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/about"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-500 focus:text-red-500"
          >
            About us
          </Link>
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-red-500 focus:text-red-500">
                  Coverage
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-17rem max-w-md overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 transition-opacity duration-200 ease-out"
                  onMouseLeave={close}
                >
                  <div className="p-4">
                    {coverageItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block font-semibold text-gray-900 relative group m-1 focus:text-red-500 hover:text-red-500"
                        onClick={close} // Close the popover when an item is clicked
                      >
                        {item.name}
                        <span className="m-1 absolute inset-x-0 -bottom-1 h-[1px] bg-gradient-to-r from-gray-300 via-gray-500 to-gray-900 group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-900 transition-all"></span>
                      </Link>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>
          <Link
            href="/renewals"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-500 focus:text-red-500"
          >
            Renewals
          </Link>
          <Link
            href="/claims"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-500 focus:text-red-500"
          >
            Claims
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-red-500 focus:text-red-500"
          >
            Contact
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="tel:+15108067931"
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300"
          >
            Call us: + 1 (510) 270-8141
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              {/* <XMarkIcon aria-hidden="true" className="h-6 w-6" /> */}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500">
                    Coverage
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {coverageItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/renewals"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Renewals
                </Link>
                <Link
                  href="/claims"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Claims
                </Link>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:text-red-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                <a
                  href="tel:+15108067931"
                  className=" bg-red-600 text-white py-2 px-4 rounded hover:text-white  hover:bg-black transition duration-300"
                >
                  Call us: + 1 (510) 270-8141
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
