import Hero from "@/components/home/Hero";
import AboutSnippet from "@/components/home/AboutSnippet";
import TourCategories from "@/components/home/TourCategories";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import GalleryPreview from "@/components/home/GalleryPreview";
import ContactCTA from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSnippet />
      <TourCategories />
      <ServicesOverview />
      <WhyChooseUs />
      <ReviewsSection />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}
