import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion, AnimatePresence } from "framer-motion";

// Gallery images
const galleryImages = [
  {
    id: 1,
    src: "/images/gallary/5B583EEF-FD03-4250-8D00-D5091D2FAD4B.JPG",
    alt: "Susegad Stays Interior",
    caption: "Living Room"
  },
  {
    id: 2,
    src: "/images/gallary/8A03F42E-1D57-4106-813B-DB057F4506C8.JPG",
    alt: "Susegad Stays Bedroom",
    caption: "Master Bedroom"
  },
  {
    id: 3,
    src: "/images/gallary/67C60CFA-3C85-4F78-BB6F-E8A411B29651.JPG",
    alt: "Susegad Stays Kitchen",
    caption: "Kitchen Area"
  },
  {
    id: 4,
    src: "/images/gallary/A14FF0D8-72E5-47A3-950F-845D93CE39EE.JPG",
    alt: "Susegad Stays Balcony",
    caption: "Private Balcony"
  },
  {
    id: 5,
    src: "/images/gallary/B7ED50EF-1F2F-4E28-BE88-36424E816E63.jpg",
    alt: "Susegad Stays View",
    caption: "Scenic View"
  },
  {
    id: 6,
    src: "/images/rooms/IMG_1960.JPG",
    alt: "Susegad Stays Room",
    caption: "Cozy Room"
  },
  {
    id: 7,
    src: "/images/rooms/IMG_1966.JPG",
    alt: "Susegad Stays Bathroom",
    caption: "Modern Bathroom"
  },
  {
    id: 8,
    src: "/images/amenities/IMG_1982.JPG",
    alt: "Susegad Stays Amenities",
    caption: "Premium Amenities"
  }
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
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
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
    <div className={cn("w-full py-24 px-4 md:px-8 lg:px-16", className)}>
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-medium mb-6 text-center">Gallery</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Experience the beauty of our stay through these images
        </p>
        
        {/* Masonry Grid Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                <AspectRatio ratio={4/3}>
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-95 z-50 flex justify-center items-center p-4"
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-susegad-turquoise transition-colors"
                onClick={closeLightbox}
              >
                <X size={32} />
              </button>
              
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-susegad-turquoise transition-colors"
                onClick={prevImage}
              >
                <ChevronLeft size={48} />
              </button>
              
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="max-h-[85vh] max-w-[85vw] object-contain"
              />
              
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-susegad-turquoise transition-colors"
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery;
