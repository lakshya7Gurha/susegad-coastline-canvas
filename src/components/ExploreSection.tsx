
import React, { useEffect, useState } from 'react';
import { setupScrollAnimations } from '@/utils/animation';

const ExploreSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    // Use the utility function instead of inline observer
    const { cleanup } = setupScrollAnimations();
    return cleanup;
  }, []);

  const locations = [
    {
      id: 1,
      name: "Master Bedroom",
      description: "A spacious and elegant bedroom with a king-size bed and luxury linens for ultimate comfort.",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/fCkPpFZ7oMUoxbYu7"
    },
    {
      id: 2,
      name: "Living Space",
      description: "A bright, airy living room with comfortable seating and Goan-inspired decor elements.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/dBnM9rhh7DpNZN8v9"
    },
    {
      id: 3,
      name: "Kitchen & Dining",
      description: "A fully equipped modern kitchen with all essentials for preparing delicious meals during your stay.",
      image: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/VJz2QYTEQ5k5egeK9"
    },
    {
      id: 4,
      name: "Private Balcony",
      description: "Enjoy the sea breeze from your private balcony with comfortable seating and stunning views.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/eKw5kRK11KkqZDAy5"
    }
  ];

  return (
    <section id="explore" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Experience Your Perfect Stay</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Our apartment is designed for comfort and relaxation. Take a look at the beautiful spaces you'll enjoy during your stay.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 animate-on-scroll opacity-30 h-80 sm:h-96 lg:h-[30rem] ${
                activeCard === location.id ? 'lg:col-span-2' : ''
              }`}
              onMouseEnter={() => setActiveCard(location.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 hover:bg-opacity-50 z-10"></div>
              <img 
                src={location.image} 
                alt={location.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 z-20">
                <h3 className="text-white text-xl font-medium mb-2">{location.name}</h3>
                <p className="text-white/90 mb-4 line-clamp-2">{location.description}</p>
                <a 
                  href={location.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center text-susegad-turquoise hover:text-white"
                >
                  <span>View details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/t6BpgG7YY3ngtY4YA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-susegad-turquoise hover:text-susegad-turquoise/80"
          >
            <span className="text-lg">View Susegad Stays on Google Maps</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
