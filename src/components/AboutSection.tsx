import React from 'react';
import { motion } from 'framer-motion';
import OptimizedImage from './ui/optimized-image';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-susegad-cream py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-susegad-turquoise/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-susegad-terracotta/5 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
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
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="font-display text-5xl md:text-6xl font-medium text-susegad-navy mb-6 leading-tight">
                    Your Home by the Sea
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-4"
                >
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Welcome to our modern coastal retreat nestled in the heart of Goa. At Susegad Stays, we've created 
                    a tranquil haven where the Susegad philosophy—Goa's unique take on the laid-back, contented life—comes 
                    alive in every detail.
                  </p>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our apartment offers the perfect blend of contemporary comfort and authentic Goan charm, 
                    just minutes from pristine beaches, local markets, and cultural landmarks. Whether you're 
                    catching the sunrise over the Arabian Sea, exploring the vibrant local scene, or simply 
                    unwinding on the balcony, we invite you to experience the true essence of Goan hospitality.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Button 
                    className="group bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy px-8 py-6 text-lg font-medium transition-all duration-300"
                  >
                    Discover More
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Image Content */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <motion.div 
                  className="absolute -top-6 -left-6 w-full h-full border-2 border-susegad-turquoise rounded-2xl"
                  animate={{ 
                    rotate: [0, 2, 0, -2, 0],
                    scale: [1, 1.02, 1, 0.98, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Main Image */}
                <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                  <OptimizedImage 
                    src="/images/rooms/IMG_1973.JPG"
                    alt="Coastal Retreat Interior"
                    className="w-full h-[32rem] object-cover transform hover:scale-105 transition-transform duration-700"
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    aspectRatio={16/9}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -bottom-8 -right-8 flex gap-4"
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-16 h-16 bg-susegad-sand rounded-2xl shadow-lg transform rotate-12" />
                  <div className="w-16 h-16 bg-susegad-turquoise rounded-2xl shadow-lg transform -rotate-12" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
