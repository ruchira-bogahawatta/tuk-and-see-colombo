import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { getGalleryImages } from "@/lib/gallery-images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Tuk & See Colombo tours — tuk tuk rides, Colombo landmarks, street food, temples, markets, and happy travellers from around the world.",
};

export default function GalleryPage() {
  const galleryImages = getGalleryImages();

  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand-dark to-primary pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">Our Moments</p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">Gallery</h1>
          <p className="mt-4 text-base text-sky-100 sm:text-lg">
            Smiles, landmarks, street food and sunsets — moments from our tours.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-warm py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Photos" title="Moments From Our Tours" />
          <div className="mt-10">
            <GalleryGrid images={galleryImages} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
