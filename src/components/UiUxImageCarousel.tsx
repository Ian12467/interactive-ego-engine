
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';

interface UiUxImageCarouselProps {
  images: string[];
  titles: string[];
  descriptions: string[];
}

export function UiUxImageCarousel({ images, titles, descriptions }: UiUxImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-2xl">
      <Carousel className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={titles[index]} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <Badge className="mb-2 bg-primary/70 hover:bg-primary">{index % 3 === 0 ? 'UI Design' : index % 3 === 1 ? 'UX Research' : 'Prototyping'}</Badge>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{titles[index]}</h3>
                    <p className="text-sm text-white/80 max-w-md">{descriptions[index]}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Image indicator dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}
