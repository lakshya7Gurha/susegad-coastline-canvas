import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import OptimizedImage from './ui/optimized-image';
import { Button } from './ui/button';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="explore" className="relative py-32 bg-gradient-to-b from-white to-susegad-cream overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/3 -right-24 w-96 h-96 bg-susegad-turquoise/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -left-24 w-96 h-96 bg-susegad-terracotta/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-5xl md:text-6xl font-medium mb-6 text-susegad-navy">Explore Our Spaces</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the comfort and elegance of our carefully designed spaces
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl shadow-xl bg-white"
              >
                <div className="relative h-[32rem]">
                  <OptimizedImage
                    src={location.image}
                    alt={location.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    aspectRatio={4/3}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.h3 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="text-white text-3xl font-medium mb-3"
                      >
                        {location.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="text-gray-200 mb-6 text-lg"
                      >
                        {location.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        <Button
                          asChild
                          className="group bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy px-6 py-3 text-base font-medium transition-all duration-300"
                        >
                          <a
                            href={location.mapLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center"
                          >
                            <MapPin className="mr-2" size={20} />
                            View Location
                            <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
