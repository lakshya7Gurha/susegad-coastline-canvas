
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
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

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6e59b46a-d238-4503-ac03-8be7ee21f542.png" 
            alt="Susegad Stays Logo"
            className="h-12 w-auto"
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['hero', 'about', 'guidelines', 'amenities', 'explore', 'food', 'reach', 'booking'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`font-medium transition-colors duration-300 hover:text-susegad-turquoise ${
                activeSection === section ? 'text-susegad-turquoise' : 'text-gray-600'
              }`}
            >
              {section === 'hero' ? 'Home' : 
               section === 'reach' ? 'How to Reach' : 
               section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="hidden md:block">
          <Button 
            onClick={() => scrollToSection('booking')} 
            className="bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black"
          >
            Book Now
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
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
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-4 py-2 space-y-3">
            {['hero', 'about', 'guidelines', 'amenities', 'explore', 'food', 'reach', 'booking'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`block w-full text-left py-2 font-medium ${
                  activeSection === section ? 'text-susegad-turquoise' : 'text-gray-600'
                }`}
              >
                {section === 'hero' ? 'Home' : 
                 section === 'reach' ? 'How to Reach' : 
                 section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('booking')} 
              className="bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}

      {/* WhatsApp Button (Mobile) */}
      <a
        href="https://wa.me/919810518195"
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
