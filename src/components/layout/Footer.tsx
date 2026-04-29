import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY, EMAIL, ADDRESS } from "@/data/tours";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tours", label: "Tours" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const tourLinks = [
  { href: "/tours/colombo-romantic-tuk-tuk-tour", label: "Romantic Tour" },
  { href: "/tours/colombo-shopping-tuk-tuk-tour", label: "Shopping Tour" },
  { href: "/tours/colombo-food-tour", label: "Food Tour" },
  { href: "/tours/colombo-cultural-tour", label: "Cultural Tour" },
  { href: "/tours/colombo-city-highlights-tour", label: "City Highlights Tour" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-sky-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            {/* Logo on a white pill so brand colours show correctly on dark footer */}
            <div className="inline-block rounded-xl bg-white px-4 py-2.5 shadow-md">
              <Image
                src="/logo.png"
                alt="Tuk & See Colombo logo"
                width={220}
                height={70}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sky-200">
              Explore Sri Lanka's vibrant capital on a private tuk tuk with a licensed local guide.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500 transition-colors hover:bg-green-400"
              >
                <MessageCircle size={18} className="text-white" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-700 transition-colors hover:bg-sky-600"
              >
                {/* Facebook "f" icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-sky-200 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">Our Tours</h3>
            <ul className="space-y-2">
              {tourLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-sky-200 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-300">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-sky-200">
                <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
                <span>{ADDRESS}</span>
              </li>
              <li>
                <a href={`tel:${PHONE_DISPLAY}`} className="flex items-center gap-2 text-sm text-sky-200 hover:text-white">
                  <Phone size={16} className="shrink-0 text-sky-400" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm text-sky-200 hover:text-white">
                  <Mail size={16} className="shrink-0 text-sky-400" />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sky-800 pt-6 text-center text-xs text-sky-400">
          © {new Date().getFullYear()} Tuk & See Colombo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
