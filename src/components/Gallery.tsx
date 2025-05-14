import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './ui/optimized-image';

const Gallery = () => {
  const images = [
    {
      src: "/images/gallary/5B583EEF-FD03-4250-8D00-D5091D2FAD4B.JPG",
      alt: "Living Room View",
      aspectRatio: 16/9
    },
    {
      src: "/images/gallary/8A03F42E-1D57-4106-813B-DB057F4506C8.JPG",
      alt: "Master Bedroom",
      aspectRatio: 16/9
    },
    {
      src: "/images/gallary/67C60CFA-3C85-4F78-BB6F-E8A411B29651.JPG",
      alt: "Kitchen Area",
      aspectRatio: 16/9
    },
    {
      src: "/images/gallary/A14FF0D8-72E5-47A3-950F-845D93CE39EE.JPG",
      alt: "Private Balcony",
      aspectRatio: 16/9
    },
    {
      src: "/images/gallary/B7ED50EF-1F2F-4E28-BE88-36424E816E63.jpg",
      alt: "Scenic View",
      aspectRatio: 16/9
    },
    {
      src: "/images/rooms/IMG_1960.JPG",
      alt: "Cozy Room",
      aspectRatio: 16/9
    },
    {
      src: "/images/rooms/IMG_1966.JPG",
      alt: "Modern Bathroom",
      aspectRatio: 16/9
    },
    {
      src: "/images/amenities/IMG_1982.JPG",
      alt: "Premium Amenities",
      aspectRatio: 16/9
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Gallery</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Explore the beauty of our coastal retreat through these stunning images
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[20rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={85}
                  aspectRatio={image.aspectRatio}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-medium mb-2">{image.alt}</h3>
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

export default Gallery;
