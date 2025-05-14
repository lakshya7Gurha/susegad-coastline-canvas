import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  aspectRatio,
  priority = false,
  sizes = '100vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoading(false);
      setImageSrc(src);
    };
    img.onerror = () => {
      setError(true);
      setIsLoading(false);
    };
  }, [src]);

  // Generate responsive srcset
  const generateSrcSet = (src: string) => {
    const widths = [320, 640, 768, 1024, 1280, 1536];
    return widths
      .map(width => `${src}?w=${width}&q=${quality} ${width}w`)
      .join(', ');
  };

  const imageClasses = cn(
    'transition-opacity duration-300',
    isLoading ? 'opacity-0' : 'opacity-100',
    className
  );

  const containerClasses = cn(
    'relative overflow-hidden',
    aspectRatio ? `aspect-[${aspectRatio}]` : '',
    className
  );

  return (
    <div className={containerClasses}>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gray-200 animate-pulse"
          />
        )}
      </AnimatePresence>

      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Failed to load image</p>
        </div>
      ) : (
        <img
          src={imageSrc}
          alt={alt}
          className={imageClasses}
          loading={priority ? 'eager' : 'lazy'}
          sizes={sizes}
          srcSet={generateSrcSet(src)}
          {...props}
        />
      )}
    </div>
  );
};

export default OptimizedImage; 