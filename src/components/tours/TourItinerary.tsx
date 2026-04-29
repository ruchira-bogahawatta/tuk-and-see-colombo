import type { ItineraryStop } from "@/data/tours";

export default function TourItinerary({ itinerary }: { itinerary: ItineraryStop[] }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-brand-dark">Itinerary</h2>
      <p className="mt-1 text-sm text-muted">
        Route may adjust slightly based on traffic and timing, but all major stops are included.
      </p>
      <div className="mt-6 space-y-0">
        {itinerary.map((stop, i) => (
          <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
            {/* Timeline line */}
            {i < itinerary.length - 1 && (
              <div className="absolute left-4 top-8 h-full w-0.5 -translate-x-0.5 bg-sky-100" />
            )}
            {/* Dot */}
            <div className="relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-xs font-bold text-primary">
              {i + 1}
            </div>
            {/* Content */}
            <div className="min-w-0 flex-1 rounded-xl bg-white p-4 shadow-sm">
              <p className="font-semibold text-brand-dark">{stop.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{stop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
