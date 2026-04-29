import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Globe, Award, Users } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Mr. D.R. Silva (Ranjith) — a licensed National Tourist Guide recognized by the NTDA and SLTDA, with island-wide authorization and years of experience showing visitors the best of Colombo.",
};

const credentials = [
  { icon: ShieldCheck, label: "NTDA Certified", sub: "National Tourist Drivers Association of Sri Lanka · Member No. 520 · Since 01.11.2011" },
  { icon: Globe, label: "Island-Wide Authorization", sub: "Place of Origin: All Island — authorized to operate tours across all regions of Sri Lanka" },
  { icon: Award, label: "SLTDA Registered", sub: "Approved by the Sri Lanka Tourism Development Authority · SLTDA Reg No: ASSO 8" },
  { icon: Users, label: "Expert Local Knowledge", sub: "Decades of experience guiding couples, families, solo travellers, and cruise passengers" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-brand-dark to-primary pt-24 pb-12 text-center sm:pt-28 sm:pb-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-300">Our Story</p>
          <h1 className="font-heading text-3xl font-black text-white sm:text-4xl md:text-5xl">About Us</h1>
          <p className="mt-4 text-base text-sky-100 sm:text-lg">
            Meet the man behind Tuk &amp; See Colombo — your licensed local guide on three wheels.
          </p>
        </div>
      </section>

      {/* Guide intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Photo */}
            <div className="relative">
              <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl sm:h-[500px]">
                <Image
                  src="/images/about-ranjith.jpg"
                  alt="Mr. Ranjith Silva — Licensed National Tourist Guide, Colombo Sri Lanka"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <SectionHeading
                label="Meet Your Guide"
                title="Mr. D.R. Silva (Ranjith)"
              />
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  Licensed National Tourist Guide — recognized by the National Tourist Drivers Association of Sri Lanka. Authorized to operate across all regions of the island, Mr. Silva brings considerable local knowledge and professional experience to every tour.
                </p>
                <p>
                  Experience Colombo's breathtaking coastline like never before with our exciting Tuk Tuk Beach Tours! Whether you're a first-time visitor or a seasoned traveler, our guided Tuk Tuk rides offer the perfect mix of adventure, culture, and relaxation. Glide through the city's vibrant beachside streets, soak in stunning ocean views, and discover hidden coastal gems — all while enjoying the cool sea breeze.
                </p>
                <p>
                  Our experienced drivers double as friendly local guides, sharing fascinating stories about Colombo's history, culture, and famous landmarks. From lively fish markets to iconic beachside temples, and from street food hotspots to picture-perfect sunset spots, we ensure every ride is filled with memorable moments. Plus, with affordable pricing and a focus on comfort and safety, our tours are perfect for solo travelers, couples, families, and groups.
                </p>
                <p>
                  Hop in, sit back, and let our Tuk Tuks take you on a fun-filled journey along Colombo's stunning shores. Whether you're chasing the perfect Instagram shot, indulging in fresh seafood, or simply enjoying a breezy ride by the waves, we promise an unforgettable experience!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Certifications"
            title="Officially Certified"
            subtitle="Every tour operates under full national authorization. Your safety and experience are backed by official credentials."
            centered
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-brand-dark">{label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{sub}</p>
              </div>
            ))}
          </div>

          {/* License card images */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6">
            <div className="relative h-52 w-36 overflow-hidden rounded-xl shadow-lg sm:h-64 sm:w-44">
              <Image
                src="/images/license-front.jpeg"
                alt="Mr. Ranjith Silva NTDA membership card — front"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
            <div className="relative h-52 w-36 overflow-hidden rounded-xl shadow-lg sm:h-64 sm:w-44">
              <Image
                src="/images/license-back.jpeg"
                alt="Mr. Ranjith Silva NTDA membership card — back"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 144px, 176px"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
