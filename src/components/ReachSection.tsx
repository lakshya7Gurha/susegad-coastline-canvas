
import React, { useEffect } from 'react';
import { Plane, Train, Bus, Bike, Taxi } from 'lucide-react';

const ReachSection = () => {
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

  const transportOptions = [
    {
      icon: Plane,
      title: "By Air",
      description: "Dabolim Airport is 30 minutes away. Pre-book a taxi or use the airport shuttle service.",
      tip: "Tip: New Mopa Airport is 1 hour away but offers more international flights."
    },
    {
      icon: Train,
      title: "By Train",
      description: "Karmali Railway Station is closest (15 min). Madgaon Station is better connected but further (45 min).",
      tip: "Tip: Book an AC compartment during summer months for comfort."
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "Panjim Bus Stand is 10 minutes away with connections to major cities and local services.",
      tip: "Tip: Kadamba Transport buses are government-run and reliable."
    },
    {
      icon: Bike,
      title: "Bikes & Scooters",
      description: "Rent a two-wheeler for the authentic Goan experience and easy exploration.",
      tip: "Tip: We recommend Ride Easy for reliable rentals (contact included in welcome booklet)."
    },
    {
      icon: Taxi,
      title: "Taxis & Rides",
      description: "GoaMiles (Goa's official app) and Uber are available for convenient travel.",
      tip: "Tip: Save our trusted driver's number for airport pickups: +91 98701 23456"
    },
  ];

  return (
    <section id="reach" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">How to Reach</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Susegad Stays is conveniently located in Bambolim, making it easy to reach from anywhere in Goa.
        </p>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {transportOptions.map((option, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 bg-white rounded-lg shadow-sm animate-on-scroll"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-4 bg-susegad-turquoise/10 rounded-full text-susegad-turquoise">
                <option.icon size={32} />
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-1">{option.title}</h3>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <p className="text-sm text-susegad-turquoise font-medium">{option.tip}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center animate-on-scroll">
          <div className="max-w-md text-center">
            <div className="relative h-16">
              <div className="w-full h-0.5 absolute top-1/2 -translate-y-1/2 bg-susegad-turquoise/30"></div>
              <div className="absolute w-3 h-3 rounded-full bg-susegad-turquoise left-0"></div>
              <div className="absolute w-3 h-3 rounded-full bg-susegad-turquoise right-0"></div>
            </div>
            <p className="text-gray-600 italic mt-4">
              "We're happy to arrange airport pickups or advise on transport options—just let us know your arrival details!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachSection;
