import type { Metadata } from "next";
import { Hotel, Map, Mic, Coffee, BedDouble, ShoppingBag } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";
import { services } from "@/data/tours";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Hotel pickup, private tours, live English commentary, local tea & coconut experiences, hotel booking and souvenir shopping — everything included in your Colombo tuk tuk tour.",
};

const iconMap: Record<string, React.ElementType> = {
  Hotel, Map, Mic, Coffee, BedDouble, ShoppingBag,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand-dark to-primary pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">What We Offer</p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="mt-4 text-base text-sky-100 sm:text-lg">
            Everything you need for an unforgettable Colombo experience — all taken care of.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-warm py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s) => {
              const Icon = iconMap[s.icon] ?? Map;
              return (
                <div key={s.title} className="rounded-2xl bg-white p-5 shadow-sm sm:p-8">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h2 className="font-heading text-xl font-bold text-brand-dark">{s.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted">{s.fullDescription}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
