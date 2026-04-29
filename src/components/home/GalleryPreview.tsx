import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const galleryImages = [
  { src: "/images/gallery/independence-memorial-hall-colombo.jpeg", alt: "Independence Memorial Hall, Colombo — a iconic national monument" },
  { src: "/images/gallery/seema-malaka-golden-buddhas-beira-lake.jpeg", alt: "Golden Buddha statues at Seema Malaka Temple on Beira Lake, Colombo" },
  { src: "/images/gallery/jami-ul-alfar-mosque-grand-view-colombo.jpeg", alt: "Jami Ul-Alfar Red Mosque, Pettah — Colombo's most colourful landmark" },
  { src: "/images/gallery/jami-ul-alfar-red-mosque-front-colombo.jpeg", alt: "Jami Ul-Alfar Red Mosque front facade, Pettah, Colombo" },
  { src: "/images/gallery/old-parliament-building-colombo.jpeg", alt: "Old Parliament Building (Presidential Secretariat), Colombo Fort" },
  { src: "/images/gallery/sambodhi-chaitiya-buddhist-stupa.jpeg", alt: "Sambodhi Chaitiya Buddhist stupa elevated above the road, Colombo" },
  { src: "/images/gallery/sri-muthumariamman-hindu-temple-colombo.jpeg", alt: "Sri Muthumariamman Hindu Temple with Lotus Tower in background, Colombo" },
  { src: "/images/gallery/guide-guests-hindu-temple-lotus-tower.jpeg", alt: "Guide Ranjith with guests at Hindu temple with Colombo Lotus Tower behind" },
  { src: "/images/gallery/guests-at-sri-muthumariamman-hindu-temple.jpeg", alt: "Guests with guide Ranjith at Sri Muthumariamman Hindu Temple, Colombo" },
  { src: "/images/gallery/guests-at-ganesh-hindu-temple-colombo.jpeg", alt: "Guests at a colourful Ganesh Hindu temple in Colombo" },
  { src: "/images/gallery/guests-at-ramlal-maharajan-temple.jpeg", alt: "Two guests at the gateway of Ramlal Maharajan Hindu Temple, Colombo" },
  { src: "/images/gallery/tourists-at-ramlal-maharajan-temple.jpeg", alt: "Tourists at the colourful entrance of Ramlal Maharajan Hindu Temple" },
  { src: "/images/gallery/sacred-heart-church-colombo.jpeg", alt: "Sacred Heart Church, a grand colonial church in Colombo" },
  { src: "/images/gallery/st-lucias-cathedral-colombo-tuk-tuk.jpeg", alt: "St. Lucia's Cathedral, Kotahena — historic Baroque church in Colombo" },
  { src: "/images/gallery/ranjith-guest-at-st-lucias-cathedral.jpeg", alt: "Guide Ranjith with a guest in front of St. Lucia's Cathedral, Colombo" },
  { src: "/images/gallery/group-inside-st-lucias-cathedral.jpeg", alt: "Tour group inside the grand nave of St. Lucia's Cathedral, Colombo" },
  { src: "/images/gallery/guests-with-tuk-tuk-galle-face-hotel.jpeg", alt: "Two guests with the red tuk tuk at Galle Face, Colombo" },
  { src: "/images/gallery/galle-face-green-colombo-tuk-tuk-tour.jpeg", alt: "Galle Face Green oceanfront promenade, Colombo — a tuk tuk tour favourite" },
  { src: "/images/gallery/guests-at-galle-face-green-colombo.jpeg", alt: "Guests enjoying the sea breeze at Galle Face Green, Colombo" },
  { src: "/images/gallery/old-customs-building-colombo-fort.jpeg", alt: "Old Customs Building, Colombo Fort — a striking colonial-era landmark" },
  { src: "/images/gallery/plantation-house-colombo-fort.jpeg", alt: "Plantation House heritage building in Colombo Fort" },
  { src: "/images/gallery/colombo-national-museum-white-colonial.jpeg", alt: "Colombo National Museum, a beautiful white colonial building" },
  { src: "/images/gallery/tourists-at-colombo-national-museum.jpeg", alt: "Tourists at the grounds of the Colombo National Museum" },
  { src: "/images/gallery/tuk-and-see-colombo-group-tour-old-parliament.jpeg", alt: "Group tour guests with Tuk & See Colombo tuk tuk at Old Parliament" },
  { src: "/images/gallery/ranjith-with-group-tour-colombo-fort.jpeg", alt: "Guide Ranjith with a group of five guests in Colombo Fort" },
  { src: "/images/gallery/tourists-at-jami-ul-alfar-mosque.jpeg", alt: "Tourists posing in front of the iconic Jami Ul-Alfar Red Mosque, Pettah" },
  { src: "/images/gallery/tourists-admiring-jami-ul-alfar-mosque.jpeg", alt: "Tourists viewing the Jami Ul-Alfar Mosque from the street in Colombo" },
  { src: "/images/gallery/tourists-at-colombo-town-hall.jpeg", alt: "Tourists at Colombo Town Hall, a red colonial landmark" },
  { src: "/images/gallery/couple-at-gangaramaya-buddhist-temple.jpeg", alt: "Couple visiting Gangaramaya Buddhist Temple, Colombo" },
  { src: "/images/gallery/couple-at-hindu-shrine-colombo.jpeg", alt: "Couple at a colourful Hindu shrine in Colombo" },
  { src: "/images/gallery/guests-with-jasmine-garlands-tuk-tuk.jpeg", alt: "Three guests wearing jasmine garlands while riding the tuk tuk" },
  { src: "/images/gallery/tourists-ceylon-tea-tasting-colombo.jpeg", alt: "Tourists at a Ceylon Tea tasting experience in Colombo" },
  { src: "/images/gallery/tourist-eating-egg-hopper-colombo.jpeg", alt: "Tourist enjoying a traditional Sri Lankan egg hopper at a local restaurant" },
  { src: "/images/gallery/tourists-drinking-king-coconut-tuk-tuk.jpeg", alt: "Tourists drinking fresh king coconut water in the tuk tuk" },
  { src: "/images/gallery/ranjith-guest-dining-beach-wadiya.jpeg", alt: "Guide Ranjith and guest dining at Beach Wadiya seafood restaurant, Colombo" },
  { src: "/images/gallery/tourists-at-fort-railway-station.jpeg", alt: "Tourists on the platform of Colombo Fort Railway Station" },
  { src: "/images/gallery/tourists-posing-with-tuk-tuk-colombo.jpeg", alt: "Couple posing beside the red tuk tuk in Colombo" },
  { src: "/images/gallery/couple-in-tuk-and-see-colombo-tuk-tuk.jpeg", alt: "Couple enjoying a private ride in the Tuk & See Colombo tuk tuk" },
  { src: "/images/gallery/ranjith-with-asian-family-guests-colombo.jpeg", alt: "Guide Ranjith with a family from Asia on a Colombo tuk tuk tour" },
  { src: "/images/gallery/ranjith-with-young-guest-colombo.jpeg", alt: "Guide Ranjith with a young guest on the Colombo tour" },
  { src: "/images/gallery/ranjith-with-guests-hotel-lobby.jpeg", alt: "Guide Ranjith with guests at a Colombo hotel lobby" },
  { src: "/images/gallery/family-at-pettah-floating-market.jpeg", alt: "Family with guide at Pettah Floating Market, Colombo" },
  { src: "/images/gallery/family-at-gangaramaya-temple-colombo.jpeg", alt: "Family visiting Gangaramaya Buddhist Temple with guide Ranjith" },
  { src: "/images/gallery/ranjith-with-family-at-hindu-temple.jpeg", alt: "Guide Ranjith with a family at Sri Muthumariamman Hindu Temple" },
  { src: "/images/gallery/boy-and-guide-at-beach-restaurant.jpeg", alt: "Young guest with guide Ranjith at a Colombo beach restaurant" },
  { src: "/images/gallery/guide-and-guests-tuk-tuk-selfie.jpeg", alt: "Guide Ranjith and guests smiling for a tuk tuk selfie in Colombo" },
  { src: "/images/gallery/tourists-colombo-city-highlights-tuk-tuk.jpeg", alt: "Tourists enjoying the Colombo city highlights tuk tuk tour" },
  { src: "/images/gallery/colombo-landmarks-tuk-tuk-tour.jpeg", alt: "Colombo landmarks discovered on the tuk tuk city tour" },
  { src: "/images/gallery/guests-with-tuk-tuk-colombo-fort-area.jpeg", alt: "Guests posing with the red tuk tuk in Colombo Fort heritage area" },
  { src: "/images/gallery/colombo-tuk-tuk-tour-experience.jpeg", alt: "Colombo tuk tuk tour experience with Tuk & See Colombo" },
  { src: "/images/gallery/colombo-cultural-tour-sites.jpeg", alt: "Colombo cultural tour sites visited by tuk tuk" },
  { src: "/images/gallery/pettah-market-colombo-shopping-tuk-tuk.jpeg", alt: "Pettah Market in Colombo — the heart of the shopping tuk tuk tour" },
  { src: "/images/gallery/colombo-scenic-drive-tuk-tuk-tour.jpeg", alt: "Scenic Colombo streets on the tuk tuk tour" },
  { src: "/images/gallery/colombo-tuk-tuk-guided-tour.jpeg", alt: "Guided tuk tuk tour through the streets of Colombo" },
  { src: "/images/gallery/tourists-exploring-colombo-by-tuk-tuk.jpeg", alt: "Tourists exploring Colombo by tuk tuk with a local guide" },
  { src: "/images/gallery/colombo-city-tour-highlights.jpeg", alt: "Colombo city tour highlights — the best of Sri Lanka's capital" },
];

export default function GalleryPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionHeading label="Gallery" title="Moments From Our Tours" />

          <Link
            href="/gallery"
            className="hidden text-sm font-semibold text-primary hover:underline sm:block"
          >
            View All Photos →
          </Link>
        </div>

        <div className="mt-10">
          <GalleryGrid
            images={galleryImages}
            displayCount={6}
            swapCount={2}
            swapInterval={5000}
            className="columns-2 gap-3 sm:columns-3 lg:columns-3"
          />
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/gallery"
            className="inline-block rounded-full border-2 border-primary px-6 py-2.5 text-sm font-semibold text-primary"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}