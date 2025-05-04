
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  // WhatsApp message template
  const phoneNumber = "+919810518195"; // Nikhil Grover's phone number
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in booking a stay at Susegad Stays. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="hero" className="relative h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&q=80')", 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-12">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-display font-medium text-white mb-4 opacity-0 animate-fade-in">
            Susegad Stays
          </h1>
          <p className="text-xl md:text-3xl text-white mb-8 opacity-0 animate-fade-in-delay-1">
            Unplug. Unwind. Embrace the Goan Way of Life.
          </p>
          <div className="opacity-0 animate-fade-in-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button 
                className="px-8 py-6 text-lg bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black"
              >
                Book Now
              </Button>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
