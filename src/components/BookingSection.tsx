
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Booking Request Sent!",
        description: "We'll get back to you within 24 hours to confirm your stay.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        guests: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="booking" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Book Your Stay</h2>
        <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
          Ready to experience the Susegad way of life? Fill out the form below to check availability and request a reservation.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your name" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="your.email@example.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    placeholder="Your contact number" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="guests" className="text-sm font-medium">Number of Guests</label>
                  <Input 
                    id="guests" 
                    name="guests" 
                    type="number" 
                    min="1" 
                    max="4" 
                    value={formData.guests}
                    onChange={handleChange}
                    required 
                    placeholder="1-4 guests" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkIn" className="text-sm font-medium">Check-in Date</label>
                  <Input 
                    id="checkIn" 
                    name="checkIn" 
                    type="date" 
                    value={formData.checkIn}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="checkOut" className="text-sm font-medium">Check-out Date</label>
                  <Input 
                    id="checkOut" 
                    name="checkOut" 
                    type="date" 
                    value={formData.checkOut}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Special Requests</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Any special requests or questions?" 
                />
              </div>
              
              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  className="px-8 py-6 bg-susegad-turquoise hover:bg-susegad-turquoise/90 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request to Book"}
                </Button>
              </div>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">Prefer to book through a platform?</p>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <a 
                  href="https://airbnb.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>Airbnb</span>
                </a>
                <a 
                  href="https://booking.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>Booking.com</span>
                </a>
                <a 
                  href="https://makemytrip.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span>MakeMyTrip</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
