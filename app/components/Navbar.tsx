"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = navigation.mainNav;

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="border-b border-[#2d2d2d] bg-[#080808]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[80px] max-w-[1400px] items-center px-6 lg:px-14">

          {/* ================= LOGO ================= */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Lumora Astudio"
              width={250}
              height={60}
              priority
              className="h-[80px] w-auto object-contain"
            />
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <div className="ml-auto hidden items-center lg:flex">

            <div className="flex items-center gap-10">
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative py-7 font-serif text-[17px] transition-all duration-300 ${
                      active
                        ? "text-[#d8a84e]"
                        : "text-[#eeeeee] hover:text-[#d8a84e]"
                    }`}
                  >
                    {item.name}

                    {/* Active underline */}
                    {active && (
                      <span className="absolute bottom-[13px] left-0 h-[2px] w-full bg-[#d8a84e]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Separator */}
            <div className="mx-6 h-9 w-px bg-[#c99538]" />

            {/* Book a Shoot */}
            <Link
              href="/book-a-shoot"
              className={`rounded-full border px-7 py-3 font-serif text-[16px] transition-all duration-300 ${
                isActive("/book-a-shoot")
                  ? "border-[#d5a044] bg-[#d5a044] text-black"
                  : "border-[#d5a044] text-[#f5eee1] hover:bg-[#d5a044] hover:text-black"
              }`}
            >
              Book a Shoot
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto flex flex-col gap-1.5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="h-[2px] w-7 bg-[#d5a044]" />
            <span className="h-[2px] w-7 bg-[#d5a044]" />
            <span className="h-[2px] w-7 bg-[#d5a044]" />
          </button>
        </div>

        {/* ================= MOBILE NAV ================= */}
        <div
          className={`overflow-hidden border-t border-[#252525] bg-[#080808] transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-6 py-5">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`border-b border-[#222] py-4 font-serif text-[17px] ${
                    active
                      ? "text-[#d5a044]"
                      : "text-white hover:text-[#d5a044]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/book-a-shoot"
              onClick={() => setMenuOpen(false)}
              className={`mt-5 rounded-full border px-6 py-3 text-center font-serif transition ${
                isActive("/book-a-shoot")
                  ? "border-[#d5a044] bg-[#d5a044] text-black"
                  : "border-[#d5a044] text-[#f5eee1] hover:bg-[#d5a044] hover:text-black"
              }`}
            >
              Book a Shoot
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}