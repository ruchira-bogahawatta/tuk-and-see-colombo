import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MessageCircle, MapPin } from "lucide-react";
import { tours, toursBySlug, WHATSAPP_NUMBER } from "@/data/tours";
import TourHero from "@/components/tours/TourHero";
import TourHighlights from "@/components/tours/TourHighlights";
import TourItinerary from "@/components/tours/TourItinerary";
import TourInclusions from "@/components/tours/TourInclusions";
import TourBookingBar from "@/components/tours/TourBookingBar";
import TourGallery from "@/components/tours/TourGallery";
import TourCard from "@/components/tours/TourCard";

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = toursBySlug[slug];

  if (!tour) return {};

  return {
    title: tour.name,
    description: tour.metaDescription,
    openGraph: {
      title: tour.name,
      description: tour.metaDescription,
      images: [tour.image],
    },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = toursBySlug[slug];

  if (!tour) notFound();

  const relatedTours = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  const bookingMsg = encodeURIComponent(
    `Hi, I'd like to book the "${tour.name}". Please let me know availability.`
  );

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.name,
            description: tour.metaDescription,
            offers: {
              "@type": "Offer",
              price: "10",
              priceCurrency: "USD",
            },
            provider: {
              "@type": "LocalBusiness",
              name: "Tuk & See Colombo",
              telephone: "+94724119468",
            },
          }),
        }}
      />

      <TourHero tour={tour} />

      <section className="bg-warm pb-28 pt-8 sm:pb-16 sm:pt-12 lg:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            {/* Main content */}
            <div className="min-w-0 space-y-6 sm:space-y-8">
              {/* Overview */}
              <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6 lg:bg-transparent lg:p-0 lg:shadow-none">
                <h2 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">
                  Overview
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  {tour.overview}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-muted">
                  <strong className="text-brand-dark">Start time:</strong>{" "}
                  {tour.startTime}
                </p>
              </div>

              <TourHighlights highlights={tour.highlights} />

              {tour.galleryImages.length > 0 && (
                <TourGallery images={tour.galleryImages} tourName={tour.name} />
              )}

              <TourItinerary itinerary={tour.itinerary} />

              <TourInclusions
                whatsIncluded={tour.whatsIncluded}
                additionalInfo={tour.additionalInfo}
                cancellationPolicy={tour.cancellationPolicy}
              />
            </div>

            {/* Sidebar booking card */}
            <aside className="hidden min-w-0 lg:block">
              <div className="sticky top-24 rounded-2xl border border-sky-100 bg-white p-6 shadow-lg">
                <p className="text-sm text-muted">Starting from</p>

                <p className="font-heading text-4xl font-bold text-accent">
                  $10{" "}
                  <span className="text-lg font-normal text-muted">
                    / adult
                  </span>
                </p>

                <p className="mt-1 text-sm text-muted">{tour.priceNote}</p>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${bookingMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2.5 rounded-full bg-green-500 px-6 py-3.5 text-sm font-semibold text-white shadow transition-colors hover:bg-green-600"
                >
                  <MessageCircle size={18} />
                  Book via WhatsApp
                </a>

                {/* Pickup info */}
                <div className="mt-5 space-y-3 border-t border-sky-100 pt-5">
                  <h3 className="flex items-center gap-1.5 text-sm font-semibold text-brand-dark">
                    <MapPin size={14} className="text-primary" />
                    Pickup Information
                  </h3>

                  {Object.entries(tour.pickup).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-xs font-semibold capitalize text-muted">
                        {key === "hotel"
                          ? "Hotel Guests"
                          : key === "cruise"
                            ? "Cruise Passengers"
                            : "Other Locations"}
                      </p>

                      <p className="text-xs leading-relaxed text-muted">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {/* Related tours */}
          <div className="mt-12 sm:mt-16">
            <h2 className="font-heading text-2xl font-bold text-brand-dark">
              You May Also Like
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTours.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky booking bar */}
      <TourBookingBar tourName={tour.name} price={tour.price} />
    </>
  );
}