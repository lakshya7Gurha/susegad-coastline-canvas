
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GuidelinesSection from "@/components/GuidelinesSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ExploreSection from "@/components/ExploreSection";
import FoodSection from "@/components/FoodSection";
import ReachSection from "@/components/ReachSection";
import BookingSection from "@/components/BookingSection";
import FooterSection from "@/components/FooterSection";
import Gallery from "@/components/Gallery";
import { setupScrollAnimations } from "@/utils/animation";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "Susegad Stays | Experience the Goan Way of Life";
    
    // Create intersection observer for animations
    const { cleanup } = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Gallery />
      <GuidelinesSection />
      <AmenitiesSection />
      <ExploreSection />
      <FoodSection />
      <ReachSection />
      <BookingSection />
      <FooterSection />
    </div>
  );
};

export default Index;
