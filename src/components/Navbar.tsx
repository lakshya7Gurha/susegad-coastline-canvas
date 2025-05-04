
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-gradient-to-b from-black/50 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6e59b46a-d238-4503-ac03-8be7ee21f542.png" 
            alt="Susegad Stays Logo"
            className="h-12 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <div className={`${scrolled ? 'bg-gray-100/80' : 'bg-black/10'} backdrop-blur-sm rounded-full px-2 py-1`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 font-medium text-sm rounded-full transition-colors duration-300 ${
                  activeSection === item.id 
                    ? 'bg-susegad-turquoise text-black' 
                    : scrolled 
                      ? 'text-gray-800 hover:bg-gray-200/80' 
                      : 'text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-3">
          {/* Contact Button */}
          <a 
            href={`tel:${phoneNumber}`} 
            className={`flex items-center justify-center h-10 w-10 rounded-full ${
              scrolled 
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            } transition-colors`}
          >
            <Phone size={18} />
          </a>
          
          {/* Book Button */}
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black font-medium"
            >
              Book Now
            </Button>
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Contact Button - Mobile */}
          <a 
            href={`tel:${phoneNumber}`} 
            className={`flex items-center justify-center h-9 w-9 rounded-full ${
              scrolled 
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' 
                : 'bg-white/10 hover:bg-white/20 text-white'
            } transition-colors`}
          >
            <Phone size={16} />
          </a>
          
          <button
            className={`p-2 rounded-full ${
              scrolled 
                ? 'text-gray-600 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            } focus:outline-none transition-colors`}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute w-full max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 px-4 rounded-lg font-medium ${
                  activeSection === item.id 
                  ? 'bg-susegad-turquoise/10 text-susegad-turquoise border-l-4 border-susegad-turquoise' 
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  className="bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black w-full"
                >
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WhatsApp Button (Mobile) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors md:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;
