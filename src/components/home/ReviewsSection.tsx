"use client";

import { useState } from "react";
import { Star, CheckCircle } from "lucide-react";

type ReviewSource = "google" | "tripadvisor";

type Review = {
  id: number;
  source: ReviewSource;
  name: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
};

const reviews: Review[] = [
  {
    id: 1,
    source: "google",
    name: "Emma Wilson",
    rating: 5,
    date: "2 days ago",
    avatar: "E",
    text: "We had an amazing tuk tuk tour around Colombo. The guide was friendly, knowledgeable, and showed us places we would never have found on our own.",
  },
  {
    id: 2,
    source: "google",
    name: "Daniel Meyer",
    rating: 5,
    date: "1 week ago",
    avatar: "D",
    text: "A fantastic way to explore Colombo. The food stops, local markets, and cultural places were all well planned. Highly recommended.",
  },
  {
    id: 3,
    source: "google",
    name: "Sophie Laurent",
    rating: 5,
    date: "2 weeks ago",
    avatar: "S",
    text: "The best experience we had in Colombo. The tuk tuk ride was fun, safe, and full of local stories. Booking through WhatsApp was very easy.",
  },
  {
    id: 4,
    source: "tripadvisor",
    name: "Michael R.",
    rating: 5,
    date: "4 days ago",
    avatar: "M",
    text: "Excellent private tour. We visited temples, markets, Galle Face, and had a great tea tasting stop. Perfect for first-time visitors.",
  },
  {
    id: 5,
    source: "tripadvisor",
    name: "Anna K.",
    rating: 5,
    date: "1 week ago",
    avatar: "A",
    text: "Our guide was very kind and professional. The city highlights tour gave us a real feel for Colombo in just a short time.",
  },
  {
    id: 6,
    source: "tripadvisor",
    name: "James Carter",
    rating: 5,
    date: "3 weeks ago",
    avatar: "J",
    text: "Great value and very personal. Loved the street food stop and the Red Mosque photo stop. Would book again.",
  },
];

const reviewTabs = [
  { id: "google" as const,      label: "Google",      rating: "4.9", icon: "G", color: "text-blue-500"  },
  { id: "tripadvisor" as const, label: "Tripadvisor", rating: "4.9", icon: "●", color: "text-green-500" },
];

export default function ReviewsSection() {
  const [activeTab, setActiveTab] = useState<ReviewSource>("google");

  const filteredReviews = reviews.filter((r) => r.source === activeTab);

  return (
    <section className="bg-[#f4ecdf] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-golden">
            Guest Reviews
          </p>
          <h2 className="font-heading text-4xl font-black leading-tight text-brand-dark sm:text-5xl lg:text-6xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            Real stories from travellers who explored Colombo with Tuk &amp; See Colombo —
            from city highlights and cultural stops to food tours and local experiences.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-12 max-w-5xl rounded-xl bg-white/80 px-4 py-3 shadow-sm">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {reviewTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 pb-2 text-sm font-medium transition-colors sm:text-base ${
                    isActive ? "text-brand-dark" : "text-muted hover:text-brand-dark"
                  }`}
                >
                  <span className={`flex h-7 w-7 items-center justify-center rounded-md bg-white text-lg font-black shadow-sm ${tab.color}`}>
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span className="font-bold text-brand-dark">{tab.rating}</span>
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-3 h-0.5 rounded-full bg-brand-dark" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-brand-dark">{review.name}</h3>
                    <CheckCircle size={15} className="fill-brand-dark text-brand-dark" />
                  </div>
                  <p className="text-sm text-muted">{review.date}</p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-golden text-golden" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-brand-dark sm:text-base">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted">
                <span className={review.source === "google" ? "text-blue-500" : "text-green-500"}>
                  {review.source === "google" ? "Google" : "Tripadvisor"}
                </span>
                <span>Review</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
