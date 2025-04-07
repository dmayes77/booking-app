"use client";

import React from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "@/components/Link";
import PropTypes from "prop-types";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#" },
  { name: "Contact sales", href: "#" },
];

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-10" aria-hidden="true" />
      <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Company Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Product
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none group-data-open:rotate-180"
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  {[...products, ...callsToAction].map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Marketplace
              </Link>
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Company
              </Link>
            </div>
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

MobileMenu.propTypes = {
  mobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
};