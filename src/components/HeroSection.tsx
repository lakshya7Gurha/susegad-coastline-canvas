import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  // WhatsApp message template
  const phoneNumber = "+919810518195"; // Nikhil Grover's phone number
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in booking a stay at Susegad Stays. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
  
  // Google Maps link
  const mapsUrl = "https://maps.app.goo.gl/2xwuRc79oeQwmp627?g_st=com.google.maps.preview.copy";

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{ 
          backgroundImage: "url('/images/hero/296A0512-89F5-4022-A2CD-D5F6CF2CE653.jpg')",
          transform: "scale(1.1)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-medium text-white mb-6 leading-tight">
              Susegad Stays
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-2xl md:text-4xl text-susegad-sand mb-6 font-serif italic">
              Unplug. Unwind. Embrace the Goan Way of Life.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <a 
              href={mapsUrl}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-susegad-sand mb-8 hover:text-susegad-turquoise transition-colors duration-300"
            >
              <MapPin size={20} className="mr-2" />
              <p className="text-lg font-medium">Near Bambolim Beach, opposite Grand Hyatt</p>
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                className="px-8 py-6 text-lg bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy font-medium transition-all duration-300 transform hover:scale-105"
              >
                Book Now
              </Button>
            </a>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-susegad-sand text-susegad-sand hover:bg-susegad-sand/10 font-medium transition-all duration-300 transform hover:scale-105"
            >
              Explore More
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-8 w-8 text-susegad-sand" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
