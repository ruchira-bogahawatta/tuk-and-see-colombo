"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, CalendarDays } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/tours", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = true;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)} aria-label="Tuk & See Colombo — Home">
          <Image
            src="/logo.png"
            alt="Tuk & See Colombo logo"
            width={220}
            height={70}
            className="h-12 w-auto object-contain sm:h-14"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-1.5 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:rounded-full after:transition-all ${
                  active
                    ? "after:bg-golden " + (solid ? "text-brand-dark" : "text-white")
                    : "after:bg-transparent " + (solid ? "text-brand-dark hover:text-primary" : "text-white/90 hover:text-white")
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={`https://wa.me/94724119468?text=Hi%2C+I%27d+like+to+book+a+tour`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-golden px-5 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-amber-300"
          >
            <CalendarDays size={15} />
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`flex h-11 w-11 items-center justify-center rounded-md md:hidden ${
            solid ? "text-brand-dark" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-sky-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((l) => {
            const active = l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm font-medium ${
                  active ? "text-primary" : "text-brand-dark hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <a
            href={`https://wa.me/94724119468?text=Hi%2C+I%27d+like+to+book+a+tour`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-golden px-4 py-2 text-center text-sm font-semibold text-brand-dark"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
