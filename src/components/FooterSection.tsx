
import React from 'react';
import { Mail, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';

const FooterSection = () => {
  const phoneNumber = "+919810518195"; // Nikhil Grover's phone number
  
  // WhatsApp message template
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in booking a stay at Susegad Stays. Could you please provide more information?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-display mb-6">Susegad Stays</h3>
            <p className="mb-6 text-gray-300">
              Experience the laid-back charm of Goa in our modern coastal apartment.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-susegad-turquoise hover:text-susegad-beige transition-colors">
                <Instagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-susegad-turquoise hover:text-susegad-beige transition-colors">
                <Facebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-susegad-turquoise hover:text-susegad-beige transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-susegad-turquoise mt-1" size={18} />
                <a href="mailto:peace@susegadstays.co" className="text-gray-300 hover:text-white transition-colors">
                  peace@susegadstays.co
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-susegad-turquoise mt-1" size={18} />
                <div>
                  <p className="text-gray-300">Nikhil Grover</p>
                  <div className="flex flex-wrap items-center gap-3 mt-1">
                    <a href={`tel:${phoneNumber}`} className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <span className="mr-1">Call</span>
                      <Phone size={14} />
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-white transition-colors">
                      <span className="mr-1">WhatsApp</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display mb-6">Location</h3>
            <div className="flex items-start space-x-3">
              <MapPin className="text-susegad-turquoise mt-1" size={18} />
              <address className="text-gray-300 not-italic">
                Susegad Stays<br />
                Near Bambolim Beach, opposite Grand Hyatt<br />
                Goa, India
              </address>
            </div>
            <a 
              href="https://maps.app.goo.gl/2xwuRc79oeQwmp627?g_st=com.google.maps.preview.copy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center mt-4 text-susegad-turquoise hover:text-susegad-beige transition-colors"
            >
              <span className="mr-1">View on Map</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="italic text-gray-300 mb-8">
            "May you take a little Susegad with you, wherever you go."
          </p>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Susegad Stays. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
