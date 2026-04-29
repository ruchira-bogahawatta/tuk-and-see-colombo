import { ShieldCheck, Users, Banknote, Star } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description:
      "Mr. Silva holds a National Tourist Drivers Association certification, approved by the Sri Lanka Tourism Development Authority.",
  },
  {
    icon: Users,
    title: "Private Tours Only",
    description:
      "Every tour is exclusively for your group — no strangers, no shared buses. Your schedule, your pace, your experience.",
  },
  {
    icon: Banknote,
    title: "Unbeatable Value",
    description:
      "From just $10 per adult with children free. Includes guide, tuk tuk, welcome drink, water, tea tasting and hotel pickup.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description:
      "Consistently rated 5 stars by travellers from across the world on Google and TripAdvisor for guides, knowledge and friendliness.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Tuk & See"
          title="Why Travellers Choose Us"
          subtitle="Thousands of visitors have trusted us to show them the real Colombo."
          centered
          light
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-sky-700/50 bg-sky-900/30 p-6 text-center backdrop-blur-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sky-200">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
