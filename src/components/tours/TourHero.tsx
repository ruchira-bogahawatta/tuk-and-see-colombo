import Image from "next/image";
import { Clock, DollarSign, Globe, Smartphone } from "lucide-react";
import type { Tour } from "@/data/tours";

export default function TourHero({ tour }: { tour: Tour }) {
  return (
    <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
      <Image
        src={tour.image}
        alt={tour.name}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-sky-300">
            {tour.category}
          </p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">
            {tour.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Clock size={14} /> {tour.duration}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-accent/90 px-3 py-1 text-sm font-semibold text-white">
              <DollarSign size={14} /> {tour.price} · {tour.priceNote}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Globe size={14} /> English guide
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Smartphone size={14} /> Mobile ticket
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
