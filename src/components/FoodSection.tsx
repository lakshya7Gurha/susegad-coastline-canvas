
import React, { useEffect, useState } from 'react';

const FoodSection = () => {
  const [activeCategory, setActiveCategory] = useState('fine-dining');
  
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

  const categories = [
    { id: 'fine-dining', name: 'Fine Dining' },
    { id: 'casual-cafes', name: 'Casual Cafés' },
    { id: 'local-favourites', name: 'Local Favourites' },
    { id: 'hidden-gems', name: 'Hidden Gems' },
    { id: 'sweet-spots', name: 'Sweet Spots' },
  ];
  
  const restaurants = {
    'fine-dining': [
      {
        name: "Antares Restaurant & Beach Club",
        description: "Celebrity chef-owned restaurant with spectacular sea views and fusion cuisine.",
        distance: "15 min drive"
      },
      {
        name: "A Reverie",
        description: "Progressive cuisine in an artistic setting with a tasting menu experience.",
        distance: "20 min drive"
      },
      {
        name: "Mahe",
        description: "Coastal cuisine with a modern twist in a beautiful heritage building.",
        distance: "25 min drive"
      },
    ],
    'casual-cafes': [
      {
        name: "Artjuna Cafe",
        description: "Garden cafe with healthy international fare and a bohemian atmosphere.",
        distance: "10 min drive"
      },
      {
        name: "Baba Au Rhum",
        description: "French bakery with excellent bread, croissants and coffee.",
        distance: "15 min drive"
      },
      {
        name: "Bean Me Up",
        description: "Plant-based cafe with international cuisine and a hippie vibe.",
        distance: "20 min drive"
      },
    ],
    'local-favourites': [
      {
        name: "Viva Panjim",
        description: "Authentic Goan home cooking in a heritage Portuguese house.",
        distance: "10 min drive"
      },
      {
        name: "Ritz Classic",
        description: "No-frills seafood restaurant loved by locals for generations.",
        distance: "12 min drive"
      },
      {
        name: "Gunpowder",
        description: "Homestyle South Indian and coastal cuisine in a garden setting.",
        distance: "25 min drive"
      },
    ],
    'hidden-gems': [
      {
        name: "Cafe Bodega",
        description: "Charming cafe inside the Sunaparanta arts centre with a creative menu.",
        distance: "15 min drive"
      },
      {
        name: "Venite Bar & Restaurant",
        description: "Quirky Goan-Portuguese restaurant with balconies overlooking the street.",
        distance: "12 min drive"
      },
      {
        name: "Saligao Stories",
        description: "Hidden cafe with excellent coffee and homemade cakes.",
        distance: "22 min drive"
      },
    ],
    'sweet-spots': [
      {
        name: "Cream Choc",
        description: "Artisanal gelato with unique flavors inspired by local ingredients.",
        distance: "10 min drive"
      },
      {
        name: "Confeitaria 31 De Janeiro",
        description: "Historic bakery famous for traditional Goan sweets and pastries.",
        distance: "12 min drive"
      },
      {
        name: "Delicieux",
        description: "French patisserie with exquisite cakes and macarons.",
        distance: "15 min drive"
      },
    ],
  };

  return (
    <section id="food" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Eat Like a Local</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Goa is a food lover's paradise. From fresh seafood to international cuisine, 
          here are our personal recommendations for an unforgettable culinary journey.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id 
                  ? 'bg-susegad-turquoise text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          {restaurants[activeCategory].map((restaurant, index) => (
            <div 
              key={`${activeCategory}-${index}`}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-300 border-b-2 border-susegad-turquoise"
            >
              <h3 className="text-xl font-medium mb-2">{restaurant.name}</h3>
              <p className="text-gray-600 mb-4">{restaurant.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{restaurant.distance}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <p className="italic text-gray-600">
            "Ask our host for current recommendations and hidden gems—the Goan food scene is always evolving!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
