import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import OptimizedImage from './ui/optimized-image';

const ExploreSection = () => {
  const locations = [
    {
      name: "Living Room",
      description: "A spacious and modern living area with comfortable seating, perfect for relaxation and entertainment.",
      image: "/images/rooms/IMG_1961.JPG",
      mapLink: "https://maps.app.goo.gl/fCkPpFZ7oMUoxbYu7"
    },
    {
      name: "Master Bedroom",
      description: "A spacious and elegant bedroom with a king-size bed, luxury linens, and modern amenities for ultimate comfort.",
      image: "/images/rooms/IMG_1975.JPG",
      mapLink: "https://maps.app.goo.gl/fCkPpFZ7oMUoxbYu7"
    },
    {
      name: "Kitchen & Dining",
      description: "A fully equipped modern kitchen with all essentials, dining area, and modern appliances for preparing delicious meals during your stay.",
      image: "/images/rooms/IMG_1962.JPG",
      mapLink: "https://maps.app.goo.gl/VJz2QYTEQ5k5egeK9"
    },
    {
      name: "Bathroom",
      description: "A modern, well-appointed bathroom with premium fixtures, hot water, and essential amenities for your comfort.",
      image: "/images/rooms/IMG_1971.JPG",
      mapLink: "https://maps.app.goo.gl/eKw5kRK11KkqZDAy5"
    }
  ];

  return (
    <section id="explore" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Explore Our Spaces</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the comfort and elegance of our carefully designed spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <OptimizedImage
                  src={location.image}
                  alt={location.name}
                  className="w-full h-[28rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={85}
                  aspectRatio={4/3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-medium mb-2">{location.name}</h3>
                    <p className="text-gray-200 mb-4">{location.description}</p>
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white hover:text-susegad-turquoise transition-colors"
                    >
                      <MapPin className="mr-2" size={20} />
                      View Location
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
