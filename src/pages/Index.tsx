import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import LocationSection from "@/components/LocationSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedDishes />
      <MenuSection />
      <ReviewsSection />
      <GallerySection />
      <ReservationSection />
      <LocationSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
