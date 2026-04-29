import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { getGalleryImages } from "@/lib/gallery-images";

export default function GalleryPreview() {
  const all = getGalleryImages();
  // Pick 5 deterministic images spread across the pool for variety
  const step = Math.max(1, Math.floor(all.length / 5));
  const previewImages = [0, 1, 2, 3, 4].map((i) => all[(i * step) % all.length]).filter(Boolean);

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <SectionHeading label="Gallery" title="Moments From Our Tours" />
          <Link
            href="/gallery"
            className="hidden text-sm font-semibold text-primary hover:underline sm:block"
          >
            View All Photos →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {previewImages.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-xl ${i === 0 ? "row-span-2" : ""}`}
            >
              <div className={`relative ${i === 0 ? "h-full min-h-64 sm:min-h-80" : "h-40 sm:h-48"}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
