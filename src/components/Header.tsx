"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Team", href: "/team" },
  { name: "About Us", href: "/management" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/logo.svg"
                alt="Himalayan Rangers SC Logo"
                width={60}
                height={60}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">
                Himalayan Rangers
              </span>
              <span className="text-xs text-red-600 font-semibold">
                SPORTS CLUB
              </span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm font-semibold leading-6 transition-colors hover:text-red-600",
                pathname === item.href
                  ? "text-red-600 border-b-2 border-red-600 pb-1"
                  : "text-gray-900"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/contact"
            className="rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-red-700 hover:to-red-800 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-200"
          >
            Join Us
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={clsx("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.svg"
                  alt="Himalayan Rangers SC Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 leading-tight">
                  Himalayan Rangers
                </span>
                <span className="text-xs text-red-600 font-semibold">
                  SPORTS CLUB
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={clsx(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-colors",
                      pathname === item.href
                        ? "text-red-600 bg-red-50"
                        : "text-gray-900"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="rounded-lg bg-gradient-to-r from-red-600 to-red-700 px-4 py-2.5 text-sm font-semibold text-white shadow-lg hover:from-red-700 hover:to-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-all duration-200 block text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
