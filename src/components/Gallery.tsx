
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Gallery images - you'll replace these URLs with your own images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    alt: "Susegad Stays Interior",
    caption: "Living Room"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    alt: "Susegad Stays Bedroom",
    caption: "Master Bedroom"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588854337236-6889d631faa8",
    alt: "Susegad Stays Kitchen",
    caption: "Kitchen Area"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    alt: "Susegad Stays Balcony",
    caption: "Private Balcony"
  }
  // You'll add the rest of your 15-16 images here
];

interface GalleryProps {
  className?: string;
}

const Gallery = ({ className }: GalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className={cn("w-full", className)}>
      <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Gallery</h2>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
        Experience the beauty of our stay through these images
      </p>
      
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div 
            key={image.id} 
            className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => openLightbox(index)}
          >
            <AspectRatio ratio={4/3}>
              <img 
                src={`${image.src}?w=600&auto=format&fit=crop&q=80`} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center p-4">
          <button
            className="absolute top-4 right-4 text-white hover:text-susegad-turquoise"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-susegad-turquoise"
            onClick={prevImage}
          >
            <ChevronLeft size={48} />
          </button>
          
          <img
            src={galleryImages[currentImageIndex].src}
            alt={galleryImages[currentImageIndex].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-susegad-turquoise"
            onClick={nextImage}
          >
            <ChevronRight size={48} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-white text-xl">{galleryImages[currentImageIndex].caption}</p>
            <p className="text-gray-300">
              {currentImageIndex + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
      
      {/* Carousel for alternative view */}
      <div className="mt-12">
        <h3 className="text-2xl font-medium mb-4 text-center">Featured Images</h3>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {galleryImages.map((image) => (
              <CarouselItem key={image.id}>
                <AspectRatio ratio={16/9}>
                  <img 
                    src={`${image.src}?w=1200&auto=format&fit=crop&q=80`}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </AspectRatio>
                <p className="text-center mt-2 text-gray-700">{image.caption}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-12" />
          <CarouselNext className="right-2 lg:-right-12" />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
