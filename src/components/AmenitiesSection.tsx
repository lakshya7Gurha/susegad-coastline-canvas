import React from 'react';
import { Wifi, Fan, UtensilsCrossed, WashingMachine, Dumbbell, BookOpen, Droplets, Umbrella } from 'lucide-react';
import { motion } from 'framer-motion';

const AmenitiesSection = () => {
  const essentials = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Stay connected with fast and reliable internet access throughout your stay."
    },
    {
      icon: Fan,
      title: "Air Conditioning",
      description: "Modern AC units in all rooms for your comfort in any weather."
    },
    {
      icon: UtensilsCrossed,
      title: "Fully Equipped Kitchen",
      description: "Complete kitchen setup with modern appliances and cookware."
    },
    {
      icon: WashingMachine,
      title: "Laundry Facilities",
      description: "Convenient washing machine and dedicated drying space."
    }
  ];

  const specialTouches = [
    {
      icon: Dumbbell,
      title: "Yoga Mats",
      description: "Start your day with a peaceful yoga session by the sea."
    },
    {
      icon: BookOpen,
      title: "Reading Nook",
      description: "Curated collection of books in a cozy reading corner."
    },
    {
      icon: Droplets,
      title: "Water Filter",
      description: "Premium water filtration system for clean drinking water."
    },
    {
      icon: Umbrella,
      title: "Beach Essentials",
      description: "Complete beach kit with towels, umbrellas, and picnic basket."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const AmenityItem = ({ Icon, title, description }) => (
    <motion.div 
      variants={itemVariants}
      className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-white/50 transition-all duration-300"
    >
      <div className="p-3 bg-susegad-turquoise/10 rounded-xl text-susegad-turquoise group-hover:bg-susegad-turquoise group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1 text-susegad-navy group-hover:text-susegad-turquoise transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );

  return (
    <section id="amenities" className="relative bg-gradient-to-b from-susegad-cream to-white py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-24 w-96 h-96 bg-susegad-turquoise/5 rounded-full"
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
          className="absolute bottom-1/4 -left-24 w-96 h-96 bg-susegad-terracotta/5 rounded-full"
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

      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-6 text-susegad-navy">Everything You Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our apartment is equipped with all the comforts and conveniences to make your stay perfect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-medium mb-8 text-susegad-navy border-b-2 border-susegad-turquoise pb-2 inline-block">
              Essential Amenities
            </h3>
            <div className="space-y-4">
              {essentials.map((item, index) => (
                <AmenityItem 
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-10 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-medium mb-8 text-susegad-navy border-b-2 border-susegad-terracotta pb-2 inline-block">
              Special Touches
            </h3>
            <div className="space-y-4">
              {specialTouches.map((item, index) => (
                <AmenityItem 
                  key={index}
                  Icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
