import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const FoodSection = () => {
  const [activeCategory, setActiveCategory] = useState('fine-dining');
  
  const categories = [
    { id: 'fine-dining', name: 'Fine Dining' },
    { id: 'casual-cafes', name: 'Casual Cafés' },
    { id: 'local-favourites', name: 'Local Favourites' },
    { id: 'hidden-gems', name: 'Hidden Gems' },
    { id: 'sweet-spots', name: 'Sweet Spots' },
  ];
  
  const restaurants = {
    'fine-dining': [
      {
        name: "Antares Restaurant & Beach Club",
        description: "Celebrity chef-owned restaurant with spectacular sea views and fusion cuisine.",
        distance: "15 min drive"
      },
      {
        name: "A Reverie",
        description: "Progressive cuisine in an artistic setting with a tasting menu experience.",
        distance: "20 min drive"
      },
      {
        name: "Mahe",
        description: "Coastal cuisine with a modern twist in a beautiful heritage building.",
        distance: "25 min drive"
      },
    ],
    'casual-cafes': [
      {
        name: "Artjuna Cafe",
        description: "Garden cafe with healthy international fare and a bohemian atmosphere.",
        distance: "10 min drive"
      },
      {
        name: "Baba Au Rhum",
        description: "French bakery with excellent bread, croissants and coffee.",
        distance: "15 min drive"
      },
      {
        name: "Bean Me Up",
        description: "Plant-based cafe with international cuisine and a hippie vibe.",
        distance: "20 min drive"
      },
    ],
    'local-favourites': [
      {
        name: "Viva Panjim",
        description: "Authentic Goan home cooking in a heritage Portuguese house.",
        distance: "10 min drive"
      },
      {
        name: "Ritz Classic",
        description: "No-frills seafood restaurant loved by locals for generations.",
        distance: "12 min drive"
      },
      {
        name: "Gunpowder",
        description: "Homestyle South Indian and coastal cuisine in a garden setting.",
        distance: "25 min drive"
      },
    ],
    'hidden-gems': [
      {
        name: "Cafe Bodega",
        description: "Charming cafe inside the Sunaparanta arts centre with a creative menu.",
        distance: "15 min drive"
      },
      {
        name: "Venite Bar & Restaurant",
        description: "Quirky Goan-Portuguese restaurant with balconies overlooking the street.",
        distance: "12 min drive"
      },
      {
        name: "Saligao Stories",
        description: "Hidden cafe with excellent coffee and homemade cakes.",
        distance: "22 min drive"
      },
    ],
    'sweet-spots': [
      {
        name: "Cream Choc",
        description: "Artisanal gelato with unique flavors inspired by local ingredients.",
        distance: "10 min drive"
      },
      {
        name: "Confeitaria 31 De Janeiro",
        description: "Historic bakery famous for traditional Goan sweets and pastries.",
        distance: "12 min drive"
      },
      {
        name: "Delicieux",
        description: "French patisserie with exquisite cakes and macarons.",
        distance: "15 min drive"
      },
    ],
  };

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

  return (
    <section id="food" className="relative py-32 bg-gradient-to-b from-susegad-cream to-white overflow-hidden">
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
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-6 text-susegad-navy">Eat Like a Local</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Goa is a food lover's paradise. From fresh seafood to international cuisine, 
            here are our personal recommendations for an unforgettable culinary journey.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                activeCategory === category.id 
                  ? 'bg-susegad-turquoise text-susegad-navy shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {restaurants[activeCategory].map((restaurant, index) => (
              <motion.div
                key={`${activeCategory}-${index}`}
                variants={itemVariants}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-2xl font-medium mb-3 text-susegad-navy group-hover:text-susegad-turquoise transition-colors duration-300">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-6 text-lg">
                  {restaurant.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{restaurant.distance}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="group-hover:text-susegad-turquoise transition-colors duration-300"
                  >
                    View Details
                    <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl italic text-gray-600">
            "Ask our host for current recommendations and hidden gems—the Goan food scene is always evolving!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FoodSection;
