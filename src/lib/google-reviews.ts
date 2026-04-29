export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

export interface ReviewsData {
  reviews: GoogleReview[];
  rating: number;
  user_ratings_total: number;
}

const STATIC_FALLBACK: ReviewsData = {
  rating: 5,
  user_ratings_total: 50,
  reviews: [
    {
      author_name: "Alicia Harris",
      rating: 5,
      text: "An exemplary way to see Colombo. We were taken to places I would never have seen or experienced. Highly recommend to anyone visiting Colombo — go with Tuk and See Colombo.",
      relative_time_description: "a month ago",
      profile_photo_url: "",
    },
    {
      author_name: "Amy Purton-Long",
      rating: 5,
      text: "Great way to see Colombo through the eyes of a local. Loved the Hindu temple and the rooftop view of the market which I never would have discovered on my own.",
      relative_time_description: "2 months ago",
      profile_photo_url: "",
    },
    {
      author_name: "Greer Tighe",
      rating: 5,
      text: "We had the best day on our Tuk Tuk tour. The guides were amazing and went out of their way to make sure the tour was just right for us.",
      relative_time_description: "3 months ago",
      profile_photo_url: "",
    },
    {
      author_name: "Michelle Ivers",
      rating: 5,
      text: "We had the best day on our Tuk Tuk tour. The guides were amazing and went out of their way to make sure the tour was just right for us.",
      relative_time_description: "3 months ago",
      profile_photo_url: "",
    },
    {
      author_name: "Sarah Thompson",
      rating: 5,
      text: "Ranjith was the most knowledgeable and friendly guide. He took us off the beaten path and showed us the real Colombo. Absolutely worth every dollar!",
      relative_time_description: "4 months ago",
      profile_photo_url: "",
    },
  ],
};

export async function getGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return STATIC_FALLBACK;
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) return STATIC_FALLBACK;

    const data = await res.json();
    const result = data.result;

    if (!result?.reviews) return STATIC_FALLBACK;

    return {
      reviews: result.reviews.slice(0, 5),
      rating: result.rating ?? 5,
      user_ratings_total: result.user_ratings_total ?? 0,
    };
  } catch {
    return STATIC_FALLBACK;
  }
}
