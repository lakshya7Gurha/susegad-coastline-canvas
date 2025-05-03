
import React, { useEffect } from 'react';

const GuidelinesSection = () => {
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

  const guidelines = [
    {
      icon: "🎉",
      title: "No Parties",
      description: "Keep it calm and quiet to maintain the peaceful ambience."
    },
    {
      icon: "🐾",
      title: "Pet Friendly",
      description: "Well-behaved furry friends are welcome to join your stay."
    },
    {
      icon: "🔊",
      title: "Respect Quiet Hours",
      description: "10 PM - 8 AM, let's keep the peace for everyone."
    },
    {
      icon: "🚬",
      title: "No Smoking Indoors",
      description: "Please use designated outdoor areas for smoking."
    },
    {
      icon: "👥",
      title: "Guest Limit",
      description: "Maximum of 4 guests in the apartment at any time."
    },
    {
      icon: "♻️",
      title: "Eco-Friendly",
      description: "Help us preserve Goa's natural beauty by reducing waste."
    },
  ];

  return (
    <section id="guidelines" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">House Guidelines – The Susegad Way</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          To ensure everyone enjoys the true Susegad experience, we kindly ask you to follow these simple guidelines.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidelines.map((guideline, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1 hover:border-susegad-turquoise border-2 border-transparent animate-on-scroll" 
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4">{guideline.icon}</div>
              <h3 className="text-xl font-medium mb-3">{guideline.title}</h3>
              <p className="text-gray-600">{guideline.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidelinesSection;
