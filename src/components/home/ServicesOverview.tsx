import { Hotel, Map, Mic, Coffee, BedDouble, ShoppingBag } from "lucide-react";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/tours";

const iconMap: Record<string, React.ElementType> = {
  Hotel,
  Map,
  Mic,
  Coffee,
  BedDouble,
  ShoppingBag,
};

export default function ServicesOverview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          title="Everything You Need for a Perfect Tour"
          subtitle="From hotel pickup to souvenir shopping — we handle every detail so you can simply enjoy Colombo."
          centered
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Map;
            return (
              <div
                key={s.title}
                className="group rounded-2xl border border-sky-100 bg-surface p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-dark">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block rounded-full bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
          >
            Learn More About Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}
