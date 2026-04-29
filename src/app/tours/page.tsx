import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import TourCard from "@/components/tours/TourCard";
import ContactCTA from "@/components/home/ContactCTA";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Colombo Tuk Tuk Tours",
  description:
    "Choose from 5 private tuk tuk tours in Colombo — romantic, cultural, food, shopping and city highlights. Licensed English-speaking guide, from $10.",
};

export default function ToursPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-linear-to-br from-brand-dark to-primary pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">
            All Tours · From $10
          </p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">
            Colombo Tuk Tuk Tours
          </h1>
          <p className="mt-4 text-base text-sky-100 sm:text-lg">
            Five unique ways to experience Colombo — each one private, guided, and packed with local flavour.
          </p>
        </div>
      </section>

      {/* Tour grid */}
      <section className="bg-surface py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Pick Your Tour"
            title="Choose Your Colombo Adventure"
            subtitle="All tours include: licensed English-speaking guide · hotel pickup · king coconut welcome drink · bottled water · tea tasting · umbrella"
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
