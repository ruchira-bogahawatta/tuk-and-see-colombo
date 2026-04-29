import Link from "next/link";
import Image from "next/image";
import { Clock, DollarSign } from "lucide-react";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={tour.cardImage}
          alt={tour.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute bottom-3 left-3 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
          {tour.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-brand-dark leading-snug">{tour.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted line-clamp-2">{tour.tagline}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="flex items-center gap-1">
              <Clock size={14} /> {tour.duration}
            </span>
          </div>
          <div className="flex items-center gap-1 font-bold text-brand-dark">
            <DollarSign size={14} className="text-accent" />
            <span>From <span className="text-accent">$10</span></span>
          </div>
        </div>
      </div>
    </Link>
  );
}
