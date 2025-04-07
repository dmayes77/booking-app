"use client";

import { useState, useEffect } from "react";
import Link from "@/components/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CustomImage from "../CustomImage";
import MediaContainer from "../MediaContainer";
import { logoImages } from "@/constants/images";
import PropTypes from "prop-types";

const navigation = [
  { name: "Services", href: "/dv/services" },
  { name: "About Us", href: "/dv/about" },
  { name: "Promotions", href: "/dv/promotions" },
  { name: "Gift Cards", href: "/dv/gift-cards" },
  { name: "Blogs", href: "/dv/blogs" },
  { name: "Contact Us", href: "/dv/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on Escape key press for accessibility
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [mobileMenuOpen]);

  return (
    <header className="bg-mad-blue text-mad-white relative z-40 shadow-md">
      <nav className="flex items-center justify-between px-12 py-2">
        {/* Logo */}
        <Link href="/">
          <a>
            <MediaContainer
              className="max-w-[75px]"
              aspectRatio="aspect-square"
            >
              <CustomImage
                src={logoImages.madBadge.src}
                alt={logoImages.madBadge.alt}
              />
            </MediaContainer>
          </a>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
          className="hover:bg-mad-red rounded-sm p-2 transition-colors lg:hidden"
        >
          <Bars3Icon className="text-mad-white h-8 w-8" aria-hidden="true" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:gap-x-6 lg:flex">
          <ul className="flex list-none gap-x-6">
            {navigation.map((item) => (
              <NavItem key={item.name} href={item.href}>
                {item.name}
              </NavItem>
            ))}
          </ul>
        </div>
      </nav>

      {/* Background Overlay for Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="bg-mad-blue/75 fixed inset-0 z-50 transition-opacity duration-300 ease-in-out"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Tray */}
      <div
        role="dialog"
        aria-modal="true"
        className={`bg-mad-blue text-mad-white fixed top-0 right-0 z-50 h-full w-64 transform p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/">
            <a>
              <MediaContainer
                className="max-w-[75px]"
                aspectRatio="aspect-square"
              >
                <CustomImage
                  src={logoImages.madBadge.src}
                  alt={logoImages.madBadge.alt}
                />
              </MediaContainer>
            </a>
          </Link>
          <button
            aria-label="Close menu"
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:bg-mad-red rounded-sm p-2 transition-colors"
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <ul className="mt-6 flex list-none flex-col space-y-2">
          {navigation.map((item) => (
            <NavItem
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </NavItem>
          ))}
        </ul>
      </div>
    </header>
  );
}

function NavItem({ href, children, onClick }) {
  return (
    <li>
      <Link href={href}>
        <a
          onClick={onClick}
          className="hover:bg-mad-red block rounded-sm px-2 py-2 transition-colors"
        >
          {children}
        </a>
      </Link>
    </li>
  );
}

NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};
