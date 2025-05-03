
import React from 'react';
import { Mail, Instagram, Facebook, Twitter, Phone } from 'lucide-react';

const FooterSection = () => {
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
                  <a href="tel:+919810518195" className="text-gray-300 hover:text-white transition-colors">
                    +91 9810518195
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-display mb-6">Location</h3>
            <address className="text-gray-300 not-italic">
              Susegad Stays<br />
              Bambolim, North Goa<br />
              Goa, India
            </address>
            <a 
              href="https://maps.app.goo.gl/t6BpgG7YY3ngtY4YA" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block mt-4 text-susegad-turquoise hover:text-susegad-beige transition-colors"
            >
              View on Map →
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
