"use client";

import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Users, Star } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/tours";

const trustItems = [
  { Icon: Users,        title: "Local & Licensed",      sub: "Certified tourist guides who know Colombo inside out." },
  { Icon: Star,         title: "Top Rated Experiences", sub: "Loved by travelers for authentic tours and unforgettable memories." },
  { Icon: ShieldCheck,  title: "Safe & Reliable",       sub: "Your safety, comfort, and satisfaction are our top priorities." },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col bg-white pt-16 lg:h-dvh lg:min-h-0 lg:overflow-hidden">
      {/* Main content */}
      <div className="flex flex-1 items-start py-6 sm:py-10 lg:min-h-0 lg:items-center lg:py-0">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            
            {/* Left — text */}
            <div className="order-2 lg:order-1">
              {/* Desktop badge */}
              <div className="mb-4 hidden max-w-full items-start gap-2 rounded-2xl border border-brand-dark/20 bg-surface px-4 py-2 lg:inline-flex">
                <ShieldCheck size={14} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-xs font-semibold uppercase leading-relaxed tracking-wider text-brand-dark">
                  Licensed National Tourist Guide · Colombo, Sri Lanka
                </span>
              </div>

              <h1 className="font-heading text-4xl font-black leading-[1.05] text-brand-dark sm:text-5xl lg:text-6xl">
                Explore Colombo
                <br />
                <span className="text-golden">Like a Local</span>
              </h1>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                Hop into a classic tuk tuk and discover Colombo&apos;s vibrant
                culture, iconic temples, bustling markets, street food, and
                hidden gems — with a certified local guide.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/tours"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-golden px-6 py-3.5 text-sm font-semibold text-brand-dark shadow-md transition-all hover:bg-amber-300 hover:shadow-lg sm:text-base"
                >
                  View Tours — from $10
                </Link>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+book+a+Colombo+tuk+tuk+tour`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-dark/25 px-6 py-3.5 text-sm font-semibold text-brand-dark transition-all hover:border-primary hover:text-primary sm:text-base"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right / Top on mobile — image */}
            <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="relative h-[240px] w-full overflow-hidden rounded-[1.5rem] sm:h-[320px] lg:h-[430px] lg:max-w-[560px] lg:rounded-[2rem]">
                <Image
                  src="/images/hero-img-colombo.png"
                  alt="Tuk tuk tour through Colombo with Lotus Tower in the background"
                  fill
                  className="object-cover object-center"
                  priority
                />

                {/* Mobile overlay badge */}
                <div className="absolute left-3 right-3 top-3 inline-flex items-start gap-2 rounded-2xl border border-white/40 bg-white/90 px-3 py-2 shadow-md backdrop-blur-sm lg:hidden">
                  <ShieldCheck size={14} className="mt-0.5 shrink-0 text-primary" />
                  <span className="text-[10px] font-semibold uppercase leading-relaxed tracking-wider text-brand-dark sm:text-xs">
                    Licensed National Tourist Guide · Colombo, Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="shrink-0 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {trustItems.map(({ Icon, title, sub }) => (
              <div
                key={title}
                className="flex items-center gap-3 px-2 py-4 sm:px-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface">
                  <Icon size={16} className="text-primary" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-brand-dark sm:text-sm">
                    {title}
                  </p>
                  <p className="text-xs leading-snug text-muted">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}