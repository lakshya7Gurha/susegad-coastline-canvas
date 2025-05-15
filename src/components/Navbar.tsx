import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // WhatsApp message template
  const phoneNumber = "+919810518195"; // Nikhil Grover's phone number
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in booking a stay at Susegad Stays. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Get all sections and determine which one is currently in view
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  // List of navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'explore', label: 'Explore' },
    { id: 'food', label: 'Food' },
    { id: 'reach', label: 'How to Reach' },
    { id: 'booking', label: 'Book' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img 
            src="/images/logo/susegad stays - logo.png" 
            alt="Susegad Stays Logo"
            className={`h-12 w-auto transition-all duration-300 ${scrolled ? 'brightness-90' : 'brightness-100'}`}
          />
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className={`${scrolled ? 'bg-gray-100/80' : 'bg-black/10'} backdrop-blur-sm rounded-full px-2 py-1`}>
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 font-medium text-sm rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-susegad-turquoise text-susegad-navy shadow-md' 
                    : scrolled 
                      ? 'text-gray-700 hover:bg-gray-200/80' 
                      : 'text-white hover:bg-white/20'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          {/* Contact Button */}
          <motion.a 
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center h-10 w-10 rounded-full ${
              scrolled 
                ? 'bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            } transition-all duration-300 shadow-md`}
          >
            <Phone size={18} />
          </motion.a>
          
          {/* Book Button */}
          <motion.a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className={`px-6 py-2 text-base font-medium transition-all duration-300 ${
                scrolled
                  ? 'bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy'
                  : 'bg-white hover:bg-white/90 text-susegad-navy'
              } shadow-md`}
            >
              Book Now
            </Button>
          </motion.a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <motion.a 
            href={`tel:${phoneNumber}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center justify-center h-9 w-9 rounded-full ${
              scrolled 
                ? 'bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            } transition-all duration-300 shadow-md`}
          >
            <Phone size={16} />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`p-2 rounded-full ${
              scrolled 
                ? 'text-susegad-navy hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } focus:outline-none transition-all duration-300`}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg absolute w-full"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ x: 10 }}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-susegad-turquoise/10 text-susegad-turquoise border-l-4 border-susegad-turquoise' 
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-100">
                <motion.a 
                  href={whatsappUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full"
                >
                  <Button 
                    className="bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-susegad-navy w-full font-medium shadow-md"
                  >
                    Book Now
                  </Button>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button (Mobile) */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </motion.a>
    </motion.nav>
  );
};

export default Navbar;
