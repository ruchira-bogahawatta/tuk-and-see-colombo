import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Utensils, Landmark, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  {
    icon: Heart,
    label: "Romantic",
    description: "Sunset rides, scenic viewpoints and intimate moments for couples",
    href: "/tours/colombo-romantic-tuk-tuk-tour",
    cardImage: "/images/tours/romantic/card.jpeg",
    color: "from-rose-400 to-pink-600",
  },
  {
    icon: ShoppingBag,
    label: "Shopping",
    description: "Tea, spices, gems, batik and handcrafts from Colombo's best markets",
    href: "/tours/colombo-shopping-tuk-tuk-tour",
    cardImage: "/images/tours/shopping/cardNew2.jpeg",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Utensils,
    label: "Food & Culinary",
    description: "Hoppers, kottu roti, isso wade and authentic Sri Lankan street food",
    href: "/tours/colombo-food-tour",
    cardImage: "/images/tours/food/card.jpeg",
    color: "from-green-400 to-emerald-600",
  },
  {
    icon: Landmark,
    label: "Cultural",
    description: "Temples, mosques, churches and colonial museums across faiths",
    href: "/tours/colombo-cultural-tour",
    cardImage: "/images/tours/cultural/card.jpeg",
    color: "from-violet-400 to-purple-600",
  },
  {
    icon: MapPin,
    label: "City Highlights",
    description: "19+ iconic Colombo landmarks in one unforgettable adventure",
    href: "/tours/colombo-city-highlights-tour",
    cardImage: "/images/tours/city-highlights/cardNew2.jpeg",
    color: "from-sky-400 to-blue-600",
  },
];

export default function TourCategories() {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Tours"
          title="Choose Your Adventure"
          subtitle="Five unique ways to explore Colombo — all from $10 per adult, with a licensed English-speaking guide."
          centered
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {categories.map(({ icon: Icon, label, description, href, cardImage, color }) => (
            <Link
              key={href}
              href={href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Photo */}
              <div className="relative h-48 shrink-0 overflow-hidden rounded-t-2xl">
                <Image
                  src={cardImage}
                  alt={`${label} tuk tuk tour Colombo`}
                  fill
                  className="scale-100 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* Icon badge */}
                <div
                  className={`absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}
                >
                  <Icon size={19} />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col bg-white p-5">
                <h3 className="font-heading text-lg font-bold text-brand-dark">{label}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>

                <p
                  className={`mt-auto pt-5 text-sm font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                >
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/tours"
            className="inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  );
}
