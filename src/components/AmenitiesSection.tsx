
import React, { useEffect } from 'react';
import { Wifi, Fan, UtensilsCrossed, Washing, Dumbbell, BookOpen, Droplets, Umbrella } from 'lucide-react';

const AmenitiesSection = () => {
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

  const essentials = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with fast and reliable internet access."
    },
    {
      icon: Fan,
      title: "Air Conditioning",
      description: "All rooms equipped with modern AC units."
    },
    {
      icon: UtensilsCrossed,
      title: "Fully Equipped Kitchen",
      description: "Everything you need to prepare delicious meals."
    },
    {
      icon: Washing,
      title: "Laundry Facilities",
      description: "Washing machine and drying space available."
    }
  ];

  const specialTouches = [
    {
      icon: Dumbbell,
      title: "Yoga Mats",
      description: "Start your day with a peaceful yoga session."
    },
    {
      icon: BookOpen,
      title: "Reading Nook",
      description: "Cozy corner with a selection of books."
    },
    {
      icon: Droplets,
      title: "Water Filter",
      description: "Clean drinking water available at all times."
    },
    {
      icon: Umbrella,
      title: "Beach Essentials",
      description: "Beach towels, umbrellas, and picnic basket."
    }
  ];

  const AmenityItem = ({ Icon, title, description, delay }) => (
    <div className={`flex items-start space-x-4 animate-on-scroll opacity-0`} style={{animationDelay: `${delay}s`}}>
      <div className="p-3 bg-susegad-turquoise/10 rounded-lg text-susegad-turquoise">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );

  return (
    <section id="amenities" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Everything You Need</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Our apartment is equipped with all the comforts and conveniences to make your stay perfect.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h3 className="text-2xl font-medium mb-8 border-b-2 border-susegad-turquoise pb-2 inline-block">Essentials</h3>
            <div className="space-y-8">
              {essentials.map((item, index) => (
                <AmenityItem 
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
          
          <div className="space-y-10">
            <h3 className="text-2xl font-medium mb-8 border-b-2 border-susegad-beige pb-2 inline-block">Special Touches</h3>
            <div className="space-y-8">
              {specialTouches.map((item, index) => (
                <AmenityItem 
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  description={item.description}
                  delay={(index + 4) * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
