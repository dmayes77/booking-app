"use client";

import React from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "@/components/Link";

// Define your product items and calls-to-action
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: require("@heroicons/react/24/outline").ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: require("@heroicons/react/24/outline").CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: require("@heroicons/react/24/outline").FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: require("@heroicons/react/24/outline").SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: require("@heroicons/react/24/outline").ArrowPathIcon,
  },
];

const callsToAction = [
  {
    name: "Watch demo",
    href: "#",
    icon: require("@heroicons/react/20/solid").PlayCircleIcon,
  },
  {
    name: "Contact sales",
    href: "#",
    icon: require("@heroicons/react/20/solid").PhoneIcon,
  },
];

export default function ProductPopover() {
  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
        Product
        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 flex-none text-gray-400"
        />
      </PopoverButton>
      <PopoverPanel
        transition
        className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
      >
        <div className="p-4">
          {products.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm font-semibold hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <IconComponent
                    aria-hidden="true"
                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                  />
                </div>
                <div className="flex-auto">
                  <Link href={item.href} className="block text-gray-900">
                    
                      {item.name}
                      <span className="absolute inset-0" />
                    
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          {callsToAction.map((item) => {
            const IconComponent = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100"
              >
                
                  <IconComponent
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-gray-400"
                  />
                  {item.name}
                
              </Link>
            );
          })}
        </div>
      </PopoverPanel>
    </Popover>
  );
}
