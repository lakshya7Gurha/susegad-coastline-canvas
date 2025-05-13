import React, { useEffect } from 'react';
import { setupScrollAnimations } from '@/utils/animation';
import { motion } from 'framer-motion';

const AboutSection = () => {
  useEffect(() => {
    const { cleanup } = setupScrollAnimations();
    return cleanup;
  }, []);

  return (
    <section id="about" className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">Your Home by the Sea</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Welcome to our modern coastal retreat nestled in the heart of Goa. At Susegad Stays, we've created 
                a tranquil haven where the Susegad philosophy—Goa's unique take on the laid-back, contented life—comes 
                alive in every detail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our apartment offers the perfect blend of contemporary comfort and authentic Goan charm, 
                just minutes from pristine beaches, local markets, and cultural landmarks. Whether you're 
                catching the sunrise over the Arabian Sea, exploring the vibrant local scene, or simply 
                unwinding on the balcony, we invite you to experience the true essence of Goan hospitality.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-susegad-turquoise rounded-lg"></div>
              <div className="relative z-10 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/images/rooms/IMG_1973.JPG"
                  alt="Coastal Retreat"
                  className="w-full h-[32rem] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 flex gap-2">
                <motion.div 
                  className="w-12 h-12 bg-susegad-beige rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="w-12 h-12 bg-susegad-turquoise rounded-full"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="mt-20 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.div 
                  className="w-12 h-12 bg-susegad-beige rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
              <div className="absolute inset-0 flex justify-center items-center">
                <motion.svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full text-susegad-turquoise"
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <path 
                    d="M50,10 A40,40 0 1,1 49.9,10" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                  />
                </motion.svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
