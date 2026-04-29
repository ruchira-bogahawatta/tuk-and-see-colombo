import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const credentials = [
  { icon: ShieldCheck, label: "NTDA Certified", sub: "National Tourist Drivers Association" },
  { icon: Globe, label: "Island-Wide License", sub: "Authorized across all regions" },
  { icon: Award, label: "SLTDA Registered", sub: "Sri Lanka Tourism Dev. Authority" },
];

export default function AboutSnippet() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-2xl sm:h-96 lg:h-[480px]">
              <Image
                src="/images/about-ranjith.jpg"
                alt="Mr. Ranjith Silva with happy tourists in Colombo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-primary p-5 text-center text-white shadow-xl sm:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-xs font-medium leading-tight">Years<br />Experience</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading
              label="About Us"
              title="Meet Your Guide — Mr. Ranjith Silva"
              subtitle="Tuk and See is a Tuk Tuk ride agency in Colombo, Sri Lanka. Experience Colombo's breathtaking coastline like never before with our exciting Tuk Tuk Tours — the perfect mix of adventure, culture, and relaxation."
            />

            <p className="mt-4 text-base leading-relaxed text-muted">
              Our experienced drivers double as friendly local guides, sharing fascinating stories about Colombo's history, culture, and famous landmarks. From lively fish markets to iconic beachside temples, and from street food hotspots to picture-perfect sunset spots — every ride is filled with memorable moments.
            </p>

            {/* Credentials */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {credentials.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-3 rounded-xl bg-surface p-4">
                  <Icon size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">{label}</p>
                    <p className="text-xs text-muted">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-8 inline-block rounded-full bg-brand-dark px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
