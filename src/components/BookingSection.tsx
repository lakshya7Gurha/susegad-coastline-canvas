
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/utils/animation";

const BookingSection = () => {
  // WhatsApp message template
  const phoneNumber = "+919810518195"; // Nikhil Grover's phone number
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in booking a stay at Susegad Stays. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <section id="booking" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Book Your Stay</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Ready to experience the Susegad way of life? Book directly through your preferred platform.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-sm animate-on-scroll">
            <div className="flex flex-col items-center space-y-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-medium mb-4">Book Directly</h3>
                <p className="text-gray-600 mb-6">Choose your preferred booking option below:</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
                  <a 
                    href={whatsappUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-susegad-turquoise hover:shadow-md transition-all text-center"
                  >
                    <div className="bg-green-500 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </div>
                    <h4 className="font-medium">WhatsApp</h4>
                    <p className="text-sm text-gray-500 mt-1">Chat directly with Nikhil</p>
                  </a>
                  
                  <a 
                    href="https://airbnb.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-susegad-turquoise hover:shadow-md transition-all text-center"
                  >
                    <div className="bg-rose-500 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 4v16" />
                        <path d="M4 10a8 8 0 0 1 8-8 8 8 0 0 1 8 8v4a8 8 0 0 1-8 8 8 8 0 0 1-8-8Z" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Airbnb</h4>
                    <p className="text-sm text-gray-500 mt-1">Book through Airbnb</p>
                  </a>
                  
                  <a 
                    href="https://booking.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 border border-gray-200 rounded-lg hover:border-susegad-turquoise hover:shadow-md transition-all text-center"
                  >
                    <div className="bg-blue-600 text-white p-3 rounded-full mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h4 className="font-medium">Booking.com</h4>
                    <p className="text-sm text-gray-500 mt-1">Book through Booking.com</p>
                  </a>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-200 max-w-md w-full">
                  <div className="flex items-center justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-susegad-turquoise">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    <p className="text-gray-600">Instant confirmation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
