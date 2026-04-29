export interface ItineraryStop {
  name: string;
  description: string;
}

export interface Tour {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  duration: string;
  price: string;
  priceNote: string;
  startTime: string;
  pickup: {
    hotel: string;
    cruise: string;
    other: string;
  };
  overview: string;
  highlights: string[];
  itinerary: ItineraryStop[];
  whatsIncluded: string[];
  additionalInfo: string[];
  cancellationPolicy: string;
  image: string;
  cardImage: string;
  galleryImages: { src: string; alt: string }[];
  metaDescription: string;
}

export const tours: Tour[] = [
  {
    slug: "colombo-romantic-tuk-tuk-tour",
    name: "Colombo City Romantic Tour",
    tagline: "A dreamy private tuk tuk ride through Colombo's most romantic corners",
    category: "Romantic",
    duration: "01 hour",
    price: "USD 10",
    priceNote: "per adult · children free",
    startTime: "Early afternoon or evening (customizable)",
    pickup: {
      hotel: "Your driver-guide will meet you in the hotel lobby.",
      cruise: "Pickup available at Colombo Port — Gate No. 1 or Gate No. A1.",
      other: "We can collect you from any convenient spot within Colombo.",
    },
    overview:
      "Celebrate your special moments with a dreamy tuk-tuk ride through Colombo's most romantic corners. This intimate experience is carefully curated for couples — enjoy scenic viewpoints, quiet parks, colonial streets and the oceanfront at golden hour, followed by a cosy Sri Lankan meal.",
    highlights: [
      "Private tuk-tuk tour crafted for couples and romantic moments",
      "See iconic landmarks at sunset or under the city lights",
      "Stops include Lotus Tower, Independence Square and Galle Face Green",
      "Visit tranquil parks, heritage buildings and oceanfront promenades",
      "Includes king coconut welcome drink and bottled water",
      "Perfect for proposals, date nights, anniversaries, and honeymooners",
    ],
    itinerary: [
      { name: "Pickup — Colombo", description: "Collected from your hotel, port, or a central meeting point. Your guide sets the tone for a romantic evening." },
      { name: "Gangaramaya Temple", description: "A brief visit to one of Colombo's most beautiful Buddhist temples — tranquil and photogenic." },
      { name: "Viharamahadevi Park", description: "A peaceful stroll among shaded paths and fountains — perfect for quiet moments together." },
      { name: "New Town Hall (drive-by)", description: "Admire the colonial dome and stately architecture as you pass by." },
      { name: "Independence Square", description: "Walk the expansive grounds and take photos by the national monument." },
      { name: "Galle Face Green", description: "Enjoy sea breezes and sunset views along Colombo's beloved oceanfront promenade." },
      { name: "Old Parliament Building", description: "Pause for a scenic view of this grand Neoclassical landmark." },
      { name: "Fort Clock Tower", description: "Snap photos of this historic colonial timepiece in the business district." },
      { name: "King Coconut Break", description: "Refresh with Sri Lanka's iconic natural drink, served chilled." },
      { name: "Red Mosque (Jami Ul-Alfar)", description: "Admire the striking red-and-white façade — a great photo moment in Pettah." },
      { name: "Lunch or Dinner", description: "Enjoy a traditional Sri Lankan rice & curry meal — choose a cosy lunch or a candlelit dinner." },
      { name: "Ceylon Tea Experience", description: "A short guided tea tasting to round off your tour with authentic flavours." },
      { name: "Drop-off — Colombo", description: "Returned to your hotel, the port, or any preferred location in the city." },
    ],
    whatsIncluded: [
      "Welcome arrival with King coconut",
      "Bottled water",
      "Complimentary umbrella for rainy weather",
      "Free tea tasting experience",
      "English-speaking guide",
      "Souvenir shopping opportunities",
      "Hotel pickup and drop-off",
    ],
    additionalInfo: [
      "Live commentary by an English-speaking guide",
      "Suitable for most travellers",
      "Tuk-tuk for up to 3 persons (Colombo & Negombo tours); other tours by car",
      "Entrance tickets to attractions are not included",
      "Not wheelchair accessible",
      "Additional charges may apply for extra time",
    ],
    cancellationPolicy: "Cancel up to 24 hours in advance for a full refund.",
    image: "/images/tours/romantic/hero.png",
    cardImage: "/images/tours/romantic/card.jpeg",
    galleryImages: [
      { src: "/images/tours/romantic/guide-guests-at-hindu-temple-lotus-tower.jpeg", alt: "Guide Ranjith with guests at Sri Muthumariamman Hindu Temple with Colombo Lotus Tower in background" },
      { src: "/images/tours/romantic/colombo-national-museum-white-colonial.jpeg", alt: "Colombo National Museum white colonial building and lush garden" },
      { src: "/images/tours/romantic/couple-at-gangaramaya-buddhist-temple.jpeg", alt: "Couple visiting Gangaramaya Buddhist Temple in Colombo" },
      { src: "/images/tours/romantic/couple-at-hindu-shrine-colombo.jpeg", alt: "Couple at a colourful Hindu shrine in Colombo" },
      { src: "/images/tours/romantic/guide-and-guests-tuk-tuk-selfie.jpeg", alt: "Guide Ranjith with guests on the Colombo romantic tuk tuk tour" },
      { src: "/images/tours/romantic/gallery-4.jpeg", alt: "Scenic Colombo sunset view on the romantic tour" },
      { src: "/images/tours/romantic/gallery-2.jpg", alt: "Independence Square Colombo at golden hour" },
      { src: "/images/tours/romantic/gallery-3.jpg", alt: "Galle Face Green oceanfront promenade at dusk" },
      { src: "/images/tours/romantic/gallery-5.jpeg", alt: "Red Mosque Jami Ul-Alfar Colombo on the evening tour" },
    ],
    metaDescription:
      "A private tuk tuk tour for couples through Colombo's most romantic spots — Galle Face Green, Independence Square and Lotus Tower. From $10 per adult.",
  },
  {
    slug: "colombo-shopping-tuk-tuk-tour",
    name: "Colombo City Shopping Tour",
    tagline: "Discover Colombo's best markets, spice bazaars and handcraft stores",
    category: "Shopping",
    duration: "01 hour",
    price: "USD 10",
    priceNote: "per adult · children free",
    startTime: "Morning or afternoon (flexible)",
    pickup: {
      hotel: "Your guide will meet you in the hotel lobby for a smooth start.",
      cruise: "Pickup available at Colombo Port (Gate No. 1 or Gate No. A1).",
      other: "We can collect you from any central spot in Colombo.",
    },
    overview:
      "Experience the shopping heartbeat of Colombo with our guided tuk-tuk adventure, crafted for travellers who enjoy lively markets, cultural finds, and authentic Sri Lankan treasures. Explore tea outlets, spice bazaars, batik stores, gem merchants, and bustling markets.",
    highlights: [
      "Explore Colombo's best shopping spots on a private guided tuk-tuk tour",
      "Shop for tea, spices, batik, handloom fabrics, Ayurveda, gems, and handicrafts",
      "Discover Pettah Market's buzzing streets and the famous Red Mosque",
      "Enjoy a local lunch or dinner included in the package",
      "Ideal for souvenir seekers, first-time visitors, and culture enthusiasts",
      "Includes hotel pickup and local guide",
    ],
    itinerary: [
      { name: "Pickup — Colombo", description: "Begin from your hotel, port, or a central meeting point." },
      { name: "Ceylon Tea Experience", description: "Sip on authentic teas while learning about Sri Lanka's world-famous tea industry." },
      { name: "Gangaramaya Temple", description: "Visit one of Colombo's most significant Buddhist temples." },
      { name: "Spice Market", description: "Explore colourful spice stalls — cinnamon, curry powders, and local herbs." },
      { name: "Handicraft Shops", description: "Browse handmade crafts, woodwork, brassware, and coconut-shell goods from local artisans." },
      { name: "Gem Showroom", description: "Visit certified gem dealers showcasing blue sapphires, moonstones, garnets, and more." },
      { name: "Batik & Textiles", description: "Discover Sri Lanka's traditional batik and handloom textiles." },
      { name: "Ayurvedic Products", description: "Explore herbal oils, teas, and natural remedies rooted in ancient healing traditions." },
      { name: "Pettah Market Walk", description: "Dive into Colombo's busiest market for clothes, food, and quirky finds." },
      { name: "Red Mosque", description: "Marvel at the striking red-and-white Jami Ul-Alfar Mosque." },
      { name: "King Coconut Break", description: "Refresh yourself with Sri Lanka's favourite roadside drink, chilled and served naturally." },
      { name: "Drop-off — Colombo", description: "Convenient drop-off at your hotel, port, or chosen spot within the city." },
    ],
    whatsIncluded: [
      "Welcome arrival with King coconut",
      "Fresh juice",
      "Snack biscuits",
      "Bottled water",
      "Complimentary umbrella for rainy weather",
      "Free tea tasting experience",
      "English-speaking guide",
      "Souvenir shopping opportunities",
      "Hotel pickup and drop-off",
    ],
    additionalInfo: [
      "Live commentary by an English-speaking guide",
      "Suitable for most travellers",
      "Tuk-tuk for up to 3 persons (Colombo & Negombo tours); other tours by car",
      "Entrance tickets to attractions are not included",
      "Not wheelchair accessible",
      "Additional charges may apply for extra time",
    ],
    cancellationPolicy: "Cancel up to 24 hours in advance for a full refund.",
    image: "/images/tours/shopping/hero.png",
    cardImage: "/images/tours/shopping/cardNew2.jpeg",
    galleryImages: [
      { src: "/images/tours/shopping/guests-with-tuk-tuk-at-galle-face.jpeg", alt: "Two guests posing with the red tuk tuk at Galle Face, Colombo shopping tour" },
      { src: "/images/tours/shopping/guests-drinking-coconut-in-tuk-tuk.jpeg", alt: "Guests enjoying fresh king coconut water in the tuk tuk during the shopping tour" },
      { src: "/images/tours/shopping/couple-in-tuk-and-see-colombo-tuk-tuk.jpeg", alt: "Couple enjoying a ride in the Tuk & See Colombo branded tuk tuk by Galle Face Green" },
      { src: "/images/tours/shopping/family-at-pettah-floating-market.jpeg", alt: "Family with guide at Pettah Floating Market, Colombo" },
      { src: "/images/tours/shopping/family-at-gangaramaya-temple.jpeg", alt: "Family with guide Ranjith visiting Gangaramaya Buddhist Temple, Colombo" },
      { src: "/images/tours/shopping/family-drinking-coconut-in-tuk-tuk.jpeg", alt: "Family drinking king coconuts in the tuk tuk on the Colombo shopping tour" },
      { src: "/images/tours/shopping/ranjith-with-guest-at-tuk-tuk.jpeg", alt: "Guide Ranjith with guest beside the Sri Lanka Wonder of Asia tuk tuk" },
      { src: "/images/tours/shopping/guests-relaxing-at-tuk-tuk-park.jpeg", alt: "Three guests relaxing in the shade at a Colombo tuk tuk stand" },
      { src: "/images/tours/shopping/boy-and-guide-at-beach-restaurant.jpeg", alt: "Young guest with guide Ranjith at a Colombo beach restaurant" },
      { src: "/images/tours/shopping/gallery-5.jpeg", alt: "Ceylon tea tasting at a local tea shop on the shopping tour" },
    ],
    metaDescription:
      "Shop for spices, gems, batik, and authentic Sri Lankan handicrafts on a guided tuk tuk tour through Colombo's best markets. From $10 per adult.",
  },
  {
    slug: "colombo-food-tour",
    name: "Colombo City Local Food Tour",
    tagline: "A flavourful evening safari through Colombo's street food scene",
    category: "Food & Culinary",
    duration: "01 hour",
    price: "USD 10",
    priceNote: "per adult · children free",
    startTime: "4:00 PM",
    pickup: {
      hotel: "Your guide will greet you in the hotel lobby for a hassle-free start.",
      cruise: "Convenient pickup at Colombo Port, Gate No. 1 or Gate No. A1.",
      other: "Pickup available from any central point within Colombo.",
    },
    overview:
      "Dive into Colombo's culinary heartbeat with our guided Tuk-Tuk Food Safari — a flavourful evening designed for food lovers. From sizzling kottu roti to delicate egg hoppers, tangy isso (prawn) wade, and refreshing king coconut, every stop promises authentic tastes and stories.",
    highlights: [
      "Discover Colombo's buzzing food scene on a guided tuk-tuk adventure",
      "Taste hoppers, kottu roti, pittu with curry, curd with treacle, isso (prawn) wade, and more",
      "Visit family-run food stalls and uncover hidden gems",
      "Enjoy a mix of snacks, tastings, and a traditional dinner experience",
      "Includes hotel pickup, tea break, and English-speaking local foodie guide",
      "Perfect for curious travellers, food enthusiasts, and cultural explorers",
    ],
    itinerary: [
      { name: "Pickup — Colombo", description: "Start your evening from your hotel, the port, or a city meeting point." },
      { name: "Welcome Drink", description: "Begin with a refreshing King Coconut — Colombo's natural energy booster." },
      { name: "Hoppers & Lunu Miris", description: "Taste Sri Lanka's signature crispy pancake paired with a spicy sambal." },
      { name: "Kottu Roti", description: "Watch and listen as your kottu is chopped on the grill — a noisy, flavorful street food favourite." },
      { name: "Pittu with Curry", description: "Try this steamed rice-and-coconut delicacy served with bold crab or babath curry." },
      { name: "Isso Wade", description: "Bite into crispy prawn fritters — a beachside classic full of spice and crunch." },
      { name: "Local Market Walk", description: "Wander through lively food alleys, tasting tropical fruits and snacks." },
      { name: "Ceylon Tea Stop", description: "Relax with a cup of world-famous Ceylon tea while your guide shares tea-making traditions." },
      { name: "Sweet Ending", description: "Finish with a traditional dessert — creamy curd with treacle or syrupy gulab jamun." },
      { name: "Drop-off — Colombo", description: "Returned to your hotel, port, or any preferred location." },
    ],
    whatsIncluded: [
      "Welcome arrival with King coconut",
      "Snack biscuits",
      "Fresh juice",
      "Bottled water",
      "Complimentary umbrella for rainy weather",
      "Free tea tasting experience",
      "English-speaking guide",
      "Souvenir shopping opportunities",
      "Hotel pickup and drop-off",
    ],
    additionalInfo: [
      "Live commentary by an English-speaking guide",
      "Suitable for most travellers",
      "Dietary needs can be accommodated with prior notice",
      "Tuk-tuk for up to 3 persons (Colombo & Negombo tours); other tours by car",
      "Entrance tickets to attractions are not included",
      "Not wheelchair accessible",
      "Additional charges may apply for extra time",
    ],
    cancellationPolicy: "Cancel up to 24 hours in advance for a full refund.",
    image: "/images/tours/food/hero.png",
    cardImage: "/images/tours/food/card.jpeg",
    galleryImages: [
      { src: "/images/tours/food/ranjith-guest-dining-beach-wadiya.jpeg", alt: "Guide Ranjith and guest dining at Beach Wadiya seafood restaurant, Colombo" },
      { src: "/images/tours/food/tourists-with-king-coconuts-tuk-tuk.jpeg", alt: "Tourists enjoying fresh king coconuts in the tuk tuk on the Colombo food tour" },
      { src: "/images/tours/food/gallery-1.jpeg", alt: "Kottu roti being chopped on a hot griddle — Colombo street food" },
      { src: "/images/tours/food/gallery-6.jpeg", alt: "Ceylon tea stop during the Colombo food tour" },
      { src: "/images/tours/food/colombo-food-tour-street-food.jpg", alt: "Sri Lankan street food experience on the Colombo food tour" },
      { src: "/images/tours/food/colombo-local-food-experience.jpg", alt: "Local food experience on the Colombo tuk tuk food tour" },
    ],
    metaDescription:
      "Taste Sri Lankan street food — kottu roti, hoppers, isso wade and more on a guided tuk tuk food tour through Colombo. Starts at 4 PM, from $10.",
  },
  {
    slug: "colombo-cultural-tour",
    name: "Colombo City Cultural Tour",
    tagline: "Immerse yourself in Colombo's multi-faith heritage on three wheels",
    category: "Cultural",
    duration: "01 hour",
    price: "USD 10",
    priceNote: "per adult · children free",
    startTime: "Morning or early afternoon (flexible)",
    pickup: {
      hotel: "Your guide will meet you in the hotel lobby for a smooth start.",
      cruise: "Convenient pickup at Colombo Port, Gate No. 1 or Gate No. A1.",
      other: "Pickups available from any address within Colombo city limits.",
    },
    overview:
      "Set out on a daytime tuk-tuk adventure through Colombo's cultural and spiritual highlights. From serene Buddhist shrines and lively Hindu kovils to striking colonial churches and the iconic Red Mosque — experience the city's layered past and vibrant present.",
    highlights: [
      "Immerse yourself in Colombo's cultural and spiritual diversity on a private tuk-tuk tour",
      "Visit Buddhist, Hindu, Christian, and Islamic landmarks in one journey",
      "Explore traditional spice and produce markets alongside colonial museums",
      "Pause for local tea and coffee tastings and enjoy a Sri Lankan lunch",
      "Gain insight into the city's multicultural history from an experienced guide",
      "A perfect mix of heritage, flavours, and daily life in Colombo",
    ],
    itinerary: [
      { name: "Pickup — Colombo", description: "Begin with hotel, port, or city pickup from your friendly driver-guide." },
      { name: "Spice Market", description: "Engage your senses in a colourful spice bazaar — cinnamon, curry blends, and local seasonings." },
      { name: "Sri Lankan Coffee Break", description: "Pause at a boutique café to enjoy Colombo's emerging coffee culture." },
      { name: "Ceylon Tea Experience", description: "Discover why Sri Lanka is world-famous for tea with a guided tasting." },
      { name: "Vegetable Market", description: "See the vibrant produce stalls where locals shop daily for fresh vegetables and herbs." },
      { name: "Floating Market (Pettah)", description: "Stroll along wooden walkways above the water, browsing stalls selling clothes, trinkets, and snacks." },
      { name: "Pettah Main Market", description: "Dive into the energy of Colombo's busiest market." },
      { name: "Old Town Hall", description: "Step back in time at this colonial municipal building with antique furniture and historical displays." },
      { name: "Red Mosque (Jami Ul-Alfar)", description: "Marvel at this iconic red-and-white striped mosque." },
      { name: "Gangaramaya Temple", description: "Visit one of the city's most renowned Buddhist temples." },
      { name: "Hindu Temple", description: "Admire Colombo's oldest Hindu temple dedicated to Lord Shiva." },
      { name: "Wolvendaal Church", description: "Enter one of the country's oldest Protestant churches with preserved Dutch colonial architecture." },
      { name: "Maritime Museum", description: "Explore Sri Lanka's naval history within a restored Dutch warehouse." },
      { name: "Dutch Museum", description: "Explore a 17th-century residence turned museum, filled with colonial-era relics." },
      { name: "Drop-off — Colombo", description: "Convenient drop-off at your hotel, port, or any preferred spot in Colombo." },
    ],
    whatsIncluded: [
      "Welcome arrival with King coconut",
      "Snack biscuits",
      "Fresh juice",
      "Bottled water",
      "Complimentary umbrella for rainy weather",
      "Free tea tasting experience",
      "English-speaking guide",
      "Souvenir shopping opportunities",
      "Hotel pickup and drop-off",
    ],
    additionalInfo: [
      "Live commentary by an English-speaking guide",
      "Suitable for most travellers",
      "Tuk-tuk for up to 3 persons (Colombo & Negombo tours); other tours by car",
      "Entrance tickets to attractions are not included",
      "Not wheelchair accessible",
      "Additional charges may apply for extra time",
    ],
    cancellationPolicy: "Cancel up to 24 hours in advance for a full refund.",
    image: "/images/tours/cultural/hero.png",
    cardImage: "/images/tours/cultural/card.jpeg",
    galleryImages: [
      { src: "/images/tours/cultural/tourists-at-jami-ul-alfar-mosque.jpeg", alt: "Two guests in front of Jami Ul-Alfar Red Mosque in Pettah, Colombo" },
      { src: "/images/tours/cultural/tourists-admiring-jami-ul-alfar-mosque.jpeg", alt: "Tourists admiring the iconic red-and-white Jami Ul-Alfar Mosque in Colombo" },
      { src: "/images/tours/cultural/colombo-town-hall-red-colonial.jpeg", alt: "Colombo Town Hall, a striking red colonial municipal building" },
      { src: "/images/tours/cultural/tourists-at-colombo-town-hall.jpeg", alt: "Tourists standing in front of the colonial Colombo Town Hall" },
      { src: "/images/tours/cultural/plantation-house-colombo-fort.jpeg", alt: "Plantation House heritage building in Colombo Fort" },
      { src: "/images/tours/cultural/couple-at-gangaramaya-buddhist-temple.jpeg", alt: "Couple visiting Gangaramaya Buddhist Temple, Colombo" },
      { src: "/images/tours/cultural/guests-with-jasmine-garlands-tuk-tuk.jpeg", alt: "Three guests wearing jasmine garlands while riding the tuk tuk on the cultural tour" },
      { src: "/images/tours/cultural/sambodhi-chaitiya-buddhist-stupa.jpeg", alt: "Sambodhi Chaitiya Buddhist stupa, a unique elevated dagoba in Colombo" },
      { src: "/images/tours/cultural/ranjith-family-at-hindu-temple.jpeg", alt: "Guide Ranjith with a family at Sri Muthumariamman Hindu Temple, Colombo" },
      { src: "/images/tours/cultural/gallery-2.jpeg", alt: "Red Mosque Jami Ul-Alfar iconic facade on the cultural tour" },
      { src: "/images/tours/cultural/gallery-3.jpeg", alt: "Colonial architecture along the Colombo cultural tour route" },
      { src: "/images/tours/cultural/gallery-4.jpeg", alt: "Pettah Floating Market stalls on the water, Colombo" },
      { src: "/images/tours/cultural/gallery-5.jpeg", alt: "Hindu temple dedicated to Lord Shiva — Sri Kathiresan Kovil, Colombo" },
      { src: "/images/tours/cultural/gallery-6.jpeg", alt: "Wolvendaal Dutch Reformed Church, one of Colombo's oldest colonial churches" },
    ],
    metaDescription:
      "Explore Buddhist temples, Hindu kovils, colonial churches and the iconic Red Mosque on a guided cultural tuk tuk tour of Colombo. From $10 per adult.",
  },
  {
    slug: "colombo-city-highlights-tour",
    name: "Colombo Tuk-Tuk City Highlights Tour",
    tagline: "Visit 19+ major Colombo attractions in a lively, authentic tuk tuk adventure",
    category: "City Highlights",
    duration: "01 hour",
    price: "USD 10",
    priceNote: "per adult · children free",
    startTime: "Morning or evening (flexible)",
    pickup: {
      hotel: "Meet your driver-guide in your hotel lobby.",
      cruise: "Pickup at Colombo Port, Gate No. 1 or Gate No. A1.",
      other: "Available from anywhere within Colombo.",
    },
    overview:
      "Discover Colombo's top sights in just a few hours with our Tuk-Tuk City Adventure — a lively and authentic way to explore the capital. From sacred temples and colonial landmarks to bustling markets and the soaring Lotus Tower, this tour covers the very best of the city.",
    highlights: [
      "Visit 19+ major attractions around Colombo",
      "Choose Morning or Evening departures",
      "Guided by a friendly English-speaking local expert",
      "Explore temples, markets, colonial landmarks, and modern icons",
      "Enjoy a sunset at Galle Face Green",
      "Includes king coconut, bottled water, fresh juice, snack biscuits and tea tasting",
      "Perfect for cruise passengers, couples, families, or solo travellers",
      "Convenient hotel/port pickup and drop-off",
    ],
    itinerary: [
      { name: "Gangaramaya Temple", description: "A mix of Sri Lankan, Thai, Indian & Chinese architecture." },
      { name: "Red Mosque", description: "Iconic red-and-white striped mosque in Pettah." },
      { name: "Hindu Temple", description: "Colombo's oldest, dedicated to Lord Shiva." },
      { name: "Pettah Market", description: "Explore local life, food, and shopping stalls." },
      { name: "Old Town Hall", description: "Colonial-era history with vintage exhibits." },
      { name: "Lotus Tower (optional)", description: "South Asia's tallest tower with skyline views." },
      { name: "Galle Face Green", description: "Sunset, sea breeze, and local snacks." },
      { name: "King Coconut Stop", description: "Refreshing natural street drink." },
      { name: "Fort Clock Tower", description: "A working colonial-era timepiece." },
      { name: "Wolvendaal Church", description: "Dutch colonial Protestant church." },
      { name: "Viharamahadevi Park", description: "Central park with fountains & golden Buddha." },
      { name: "New Town Hall (drive-by)", description: "Colonial domed civic building." },
      { name: "Port City Beach", description: "Colombo's modern beachside walkway." },
      { name: "Old Parliament Building", description: "Neoclassical landmark, now Secretariat." },
      { name: "Independence Square", description: "National monument of freedom." },
      { name: "Fort Colombo", description: "Historic colonial district and business hub." },
      { name: "Railway Station", description: "Busy colonial-era train hub." },
      { name: "Kayman's Gate Bell Tower", description: "Rare Portuguese-era relic." },
      { name: "Ceylon Tea Experience", description: "Guided tea tasting of world-famous Ceylon tea." },
      { name: "Drop-Off", description: "Conveniently at your hotel, port, or chosen Colombo location." },
    ],
    whatsIncluded: [
      "Welcome arrival with King coconut",
      "Bottled water",
      "Complimentary umbrella for rainy weather",
      "Free tea tasting experience",
      "English-speaking guide",
      "Souvenir shopping opportunities",
      "Hotel pickup and drop-off",
    ],
    additionalInfo: [
      "Live commentary by an English-speaking guide",
      "Suitable for most travellers",
      "Tuk-tuk for up to 3 persons (Colombo & Negombo tours); other tours by car",
      "Entrance tickets to attractions are not included",
      "Not wheelchair accessible",
      "Additional charges may apply for extra time",
    ],
    cancellationPolicy: "Cancel up to 24 hours in advance for a full refund.",
    image: "/images/tours/city-highlights/hero.png",
    cardImage: "/images/tours/city-highlights/cardNew2.jpeg",
    galleryImages: [
      { src: "/images/tours/city-highlights/ranjith-guest-at-st-lucias-cathedral.jpeg", alt: "Guide Ranjith with a guest in front of St. Lucia's Cathedral, Kotahena, Colombo" },
      { src: "/images/tours/city-highlights/st-lucias-cathedral-kotahena-colombo.jpeg", alt: "St. Lucia's Cathedral, Kotahena — a stunning Baroque-style church in Colombo" },
      { src: "/images/tours/city-highlights/group-inside-st-lucias-cathedral.jpeg", alt: "Tour group inside the grand interior of St. Lucia's Cathedral, Colombo" },
      { src: "/images/tours/city-highlights/guests-with-tuk-tuk-galle-face-hotel.jpeg", alt: "Guests posing with the tuk tuk at Galle Face, Colombo city highlights tour" },
      { src: "/images/tours/city-highlights/tourist-in-tuk-and-see-colombo-tuk-tuk.jpeg", alt: "Tourist enjoying a private ride in the Tuk & See Colombo tuk tuk" },
      { src: "/images/tours/city-highlights/guests-with-tuk-tuk-colombo-fort.jpeg", alt: "Two guests posing with the red tuk tuk in Colombo Fort heritage area" },
      { src: "/images/tours/city-highlights/tourists-at-colombo-fort-railway-station.jpeg", alt: "Tourists on the platform at Colombo Fort Railway Station" },
      { src: "/images/tours/city-highlights/colombo-fort-old-customs-building.jpeg", alt: "Old Customs Building in Colombo Fort, a grand colonial-era landmark" },
      { src: "/images/tours/city-highlights/ranjith-with-guest-at-hotel-lobby.jpeg", alt: "Guide Ranjith with a guest at a Colombo hotel lobby after the city highlights tour" },
      { src: "/images/tours/city-highlights/gallery-1.jpeg", alt: "Lotus Tower Colombo — South Asia's tallest tower at golden hour" },
      { src: "/images/tours/city-highlights/gallery-3.jpeg", alt: "Viharamahadevi Park with the golden Buddha statue, Colombo" },
      { src: "/images/tours/city-highlights/gallery-4.jpeg", alt: "Fort Clock Tower, a working colonial-era timepiece in Colombo Fort" },
      { src: "/images/tours/city-highlights/gallery-6.jpeg", alt: "Independence Square national monument, Colombo" },
    ],
    metaDescription:
      "Visit 19+ Colombo landmarks — Gangaramaya Temple, Lotus Tower, Galle Face Green and more on a tuk tuk city highlights tour. Morning & evening slots, from $10.",
  },
];

export const toursBySlug = Object.fromEntries(tours.map((t) => [t.slug, t]));

export const services = [
  {
    icon: "Hotel",
    title: "Hotel Pick-Up & Drop-Off",
    description:
      "Start and end your Colombo adventure with ease. Our drivers arrive on time at your hotel, port, or guesthouse — no navigation, no stress.",
    fullDescription:
      "Start and end your Colombo adventure with ease! Our Hotel Pick-Up & Drop-Off Service ensures a hassle-free experience, allowing you to focus on enjoying your Tuk Tuk tour without worrying about transportation. Whether you're staying at a beachfront resort, a city hotel, or a cozy guesthouse, our friendly drivers will pick you up right from your doorstep and drop you off safely after the tour.",
  },
  {
    icon: "Map",
    title: "Private & Customizable Tours",
    description:
      "No fixed itinerary — explore Colombo entirely on your own terms. Linger at your favourite spots, skip what doesn't interest you.",
    fullDescription:
      "Experience Colombo on your own terms with our Private & Customizable Tuk Tuk Tours, designed to give you the ultimate freedom and flexibility. Whether you want to explore vibrant markets, relax by the beach, or dive into the city's cultural treasures, this tour is tailored entirely to your interests.",
  },
  {
    icon: "Mic",
    title: "Live Commentary with Expert Guides",
    description:
      "Your guide is a passionate local who brings Colombo to life with stories, history, and hidden secrets in real-time English commentary.",
    fullDescription:
      "Experience Colombo like never before with our Live Commentary from Expert Guides — your personal storyteller on three wheels! Our friendly and knowledgeable Tuk Tuk guides are more than just drivers; they are passionate locals who bring the city to life with fascinating insights, fun facts, and hidden stories.",
  },
  {
    icon: "Coffee",
    title: "Local Experiences",
    description:
      "Sip complimentary Ceylon tea, taste king coconut water straight from the shell, and savour the authentic flavours of Sri Lanka.",
    fullDescription:
      "Immerse yourself in the authentic flavours of Sri Lanka with a complimentary tea tasting experience, all while enjoying the warm hospitality of Colombo. Quench your thirst with the refreshing taste of Sri Lanka's natural king coconut water, sipped straight from the shell.",
  },
  {
    icon: "BedDouble",
    title: "Hotel Booking Assistance",
    description:
      "Let us handle your accommodation. We handpick options across all budgets — luxury resorts, boutique hotels, or cozy guesthouses.",
    fullDescription:
      "Our hotel booking service ensures a seamless and comfortable stay for all our guests, offering a range of handpicked accommodations to suit every budget and preference. Whether you're looking for luxury resorts, boutique hotels, or cozy guesthouses, we take care of all the details.",
  },
  {
    icon: "ShoppingBag",
    title: "Exclusive Souvenir Shopping",
    description:
      "We guide you to the best local markets and specialty shops for unique, handcrafted Sri Lankan keepsakes at authentic prices.",
    fullDescription:
      "Our Exclusive Souvenir Shopping experience offers you the chance to pick out unique, handcrafted keepsakes that reflect the rich culture and craftsmanship of Sri Lanka. With personalized recommendations, you'll explore local markets and specialty shops, ensuring you find the perfect mementos.",
  },
];

export const WHATSAPP_NUMBER = "94724119468";
export const PHONE_DISPLAY = "+(94)72-411-9468";
export const EMAIL = "ranjithsilva99@gmail.com";
export const ADDRESS = "94/54, Sriwickrama pura, Mattakkuliya, Colombo 05";
