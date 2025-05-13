import React, { useEffect, useState } from 'react';
import { setupScrollAnimations } from '@/utils/animation';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const ExploreSection = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    const { cleanup } = setupScrollAnimations();
    return cleanup;
  }, []);

  const locations = [
    {
      id: 1,
      name: "Master Bedroom",
      description: "A spacious and elegant bedroom with a king-size bed, luxury linens, and modern amenities for ultimate comfort.",
      image: "/images/rooms/IMG_1975.JPG",
      mapLink: "https://maps.app.goo.gl/fCkPpFZ7oMUoxbYu7"
    },
    {
      id: 2,
      name: "Living Space",
      description: "A bright, airy living room with comfortable seating, smart TV, and Goan-inspired decor elements for a perfect relaxation space.",
      image: "/images/rooms/IMG_1961.JPG",
      mapLink: "https://maps.app.goo.gl/dBnM9rhh7DpNZN8v9"
    },
    {
      id: 3,
      name: "Kitchen & Dining",
      description: "A fully equipped modern kitchen with all essentials, dining area, and modern appliances for preparing delicious meals during your stay.",
      image: "/images/rooms/IMG_1962.JPG",
      mapLink: "https://maps.app.goo.gl/VJz2QYTEQ5k5egeK9"
    },
    {
      id: 4,
      name: "Bathroom",
      description: "A modern, well-appointed bathroom with premium fixtures, hot water, and essential amenities for your comfort.",
      image: "/images/rooms/IMG_1971.JPG",
      mapLink: "https://maps.app.goo.gl/eKw5kRK11KkqZDAy5"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="explore" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Experience Your Perfect Stay</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our apartment is designed for comfort and relaxation. Take a look at the beautiful spaces you'll enjoy during your stay.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 h-[28rem] sm:h-[32rem] lg:h-[36rem] ${
                  activeCard === location.id ? 'lg:col-span-2' : ''
                }`}
                onMouseEnter={() => setActiveCard(location.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 transition-opacity duration-300"></div>
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                  <h3 className="text-white text-2xl font-medium mb-3">{location.name}</h3>
                  <p className="text-white/90 mb-6 line-clamp-3 text-lg">{location.description}</p>
                  <a 
                    href={location.mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-susegad-turquoise hover:text-white transition-colors duration-300 group"
                  >
                    <span className="text-lg font-medium">View details</span>
                    <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <a
              href="https://maps.app.goo.gl/t6BpgG7YY3ngtY4YA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-susegad-turquoise hover:text-susegad-turquoise/80 transition-colors duration-300 group"
            >
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg font-medium">View Susegad Stays on Google Maps</span>
              <ArrowRight className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
