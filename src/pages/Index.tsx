
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

const Index = () => {
  useEffect(() => {
    // Create intersection observer for animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
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
