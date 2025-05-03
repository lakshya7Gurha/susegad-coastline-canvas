
import React, { useEffect } from 'react';
import { setupScrollAnimations } from '@/utils/animation';

const AboutSection = () => {
  useEffect(() => {
    // Use the utility function instead of inline observer
    const { cleanup } = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll">
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Your Home by the Sea</h2>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our modern coastal retreat nestled in the heart of Goa. At Susegad Stays, we've created 
              a tranquil haven where the Susegad philosophy—Goa's unique take on the laid-back, contented life—comes 
              alive in every detail.
            </p>
            <p className="text-lg text-gray-700">
              Our apartment offers the perfect blend of contemporary comfort and authentic Goan charm, 
              just minutes from pristine beaches, local markets, and cultural landmarks. Whether you're 
              catching the sunrise over the Arabian Sea, exploring the vibrant local scene, or simply 
              unwinding on the balcony, we invite you to experience the true essence of Goan hospitality.
            </p>
          </div>
          
          <div className="md:w-1/2 relative animate-on-scroll">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-susegad-turquoise"></div>
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
              alt="Coastal Retreat"
              className="relative z-10 w-full h-80 object-cover"
            />
            <div className="absolute w-16 h-16 -bottom-6 -right-6 flex">
              <div className="animate-wave w-8 h-8 bg-susegad-beige rounded-full"></div>
              <div className="animate-wave animation-delay-300 w-8 h-8 bg-susegad-turquoise rounded-full"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 flex justify-center animate-on-scroll">
          <div className="w-24 h-24 relative">
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-12 h-12 bg-susegad-beige rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center transform rotate-0 transition-transform duration-10000 hover:rotate-180">
              <svg viewBox="0 0 100 100" className="w-full h-full text-susegad-turquoise">
                <path 
                  d="M50,10 A40,40 0 1,1 49.9,10" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
