
import { useState, useEffect, useRef } from 'react';
import { getThemeColorFromImage, getSecondaryColorFromPrimary, getAccentColorFromPrimary } from '@/utils/colorUtils';

export function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const imagesRef = useRef<HTMLImageElement[]>([]);
  
  // Array of background images
  const backgroundImages = [
    "/lovable-uploads/32b9e253-ab1b-425a-bd7f-16ffb967cf91.png",
    "/lovable-uploads/d3031f0b-d512-4ac6-82e7-feb32c295e9f.png",
    "/lovable-uploads/86196035-9d98-45d8-945b-e91fa6307a60.png",
    "/lovable-uploads/890692ba-61cc-4487-b9a7-87fe12f74340.png",
    "/lovable-uploads/35e23ad3-8e62-4423-a75e-8df1dd504c58.png",
    "/lovable-uploads/61678bbf-d151-485d-a58b-4c4220243028.png"
  ];

  // Preload images
  useEffect(() => {
    // Create array of image elements to preload
    backgroundImages.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
      imagesRef.current[index] = img;
    });
    
    // Preload the next image in advance
    const preloadNextImage = (currentIdx: number) => {
      const nextIdx = (currentIdx + 1) % backgroundImages.length;
      if (!loadedImages[nextIdx] && imagesRef.current[nextIdx]) {
        imagesRef.current[nextIdx].src = backgroundImages[nextIdx];
      }
    };
    
    preloadNextImage(currentImageIndex);
  }, [currentImageIndex, backgroundImages.length]);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  // Update CSS variables based on current image
  useEffect(() => {
    const currentImage = backgroundImages[currentImageIndex];
    const primaryColor = getThemeColorFromImage(currentImage);
    const secondaryColor = getSecondaryColorFromPrimary(primaryColor);
    const accentColor = getAccentColorFromPrimary(primaryColor);
    
    // Set CSS variables for theme colors
    document.documentElement.style.setProperty('--primary', primaryColor);
    document.documentElement.style.setProperty('--accent', accentColor);
    
    // Only set these in light mode to prevent dark mode contrast issues
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.style.setProperty('--ring', primaryColor);
    }
  }, [currentImageIndex, backgroundImages]);

  return (
    <div className="fixed inset-0 -z-10">
      {backgroundImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-30" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: loadedImages[index] ? `url(${img})` : 'none',
            willChange: 'opacity',
          }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-background/80 z-10"></div>
      
      {/* Cyber-style overlay patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,135,245,0.2)_0%,transparent_70%)] opacity-70 mix-blend-overlay"></div>
    </div>
  );
}
