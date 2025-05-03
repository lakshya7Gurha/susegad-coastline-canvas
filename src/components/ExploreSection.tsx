
import React, { useEffect, useState } from 'react';

const ExploreSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const locations = [
    {
      id: 1,
      name: "Bambolim Beach",
      description: "A serene beach with golden sands and calm waters, perfect for a peaceful day by the sea.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/fCkPpFZ7oMUoxbYu7"
    },
    {
      id: 2,
      name: "Old Goa Churches",
      description: "Explore the UNESCO World Heritage site with magnificent churches dating back to the 16th century.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/dBnM9rhh7DpNZN8v9"
    },
    {
      id: 3,
      name: "Panjim City",
      description: "Goa's vibrant capital with Portuguese architecture, waterfront promenades, and bustling markets.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/VJz2QYTEQ5k5egeK9"
    },
    {
      id: 4,
      name: "Fontainhas",
      description: "The Latin Quarter with colorful Portuguese-style houses and a bohemian artistic atmosphere.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80",
      mapLink: "https://maps.app.goo.gl/eKw5kRK11KkqZDAy5"
    }
  ];

  return (
    <section id="explore" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Walk, Wander, Discover</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Our apartment is ideally situated to explore the best of what Goa has to offer. 
          These are some of our favorite nearby attractions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div 
              key={location.id} 
              className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 animate-on-scroll h-80 sm:h-96 lg:h-[30rem] ${
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
                  <span>View on map</span>
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
