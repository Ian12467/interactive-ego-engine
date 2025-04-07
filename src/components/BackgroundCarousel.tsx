
import { useState, useEffect, useRef, useMemo } from 'react';
import { getThemeColorFromImage, getSecondaryColorFromPrimary, getAccentColorFromPrimary } from '@/utils/colorUtils';

export function BackgroundCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isInView, setIsInView] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Array of background images
  const backgroundImages = useMemo(() => [
    "/lovable-uploads/32b9e253-ab1b-425a-bd7f-16ffb967cf91.png",
    "/lovable-uploads/d3031f0b-d512-4ac6-82e7-feb32c295e9f.png",
    "/lovable-uploads/86196035-9d98-45d8-945b-e91fa6307a60.png",
    "/lovable-uploads/890692ba-61cc-4487-b9a7-87fe12f74340.png",
    "/lovable-uploads/35e23ad3-8e62-4423-a75e-8df1dd504c58.png",
    "/lovable-uploads/61678bbf-d151-485d-a58b-4c4220243028.png"
  ], []);

  // Preload the most important images on component mount
  useEffect(() => {
    // Preload the first image immediately
    const img = new Image();
    img.src = backgroundImages[0];
    img.onload = () => {
      setLoadedImages(prev => ({ ...prev, [0]: true }));
      imagesRef.current[0] = img;
    };
    
    // Setup intersection observer to pause animation when not in view
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIsInView(entries[0].isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    const container = document.querySelector('.fixed.inset-0.-z-10');
    if (container) {
      observerRef.current.observe(container);
    }
    
    return () => {
      if (observerRef.current && container) {
        observerRef.current.unobserve(container);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [backgroundImages]);

  // Load all images lazily
  useEffect(() => {
    // Create array of image elements to preload
    backgroundImages.forEach((src, index) => {
      if (index === 0) return; // Skip the first one which we loaded above
      
      // Only load nearby images first (current, next, previous)
      const priority = 
        index === currentImageIndex || 
        index === (currentImageIndex + 1) % backgroundImages.length || 
        index === (currentImageIndex - 1 + backgroundImages.length) % backgroundImages.length;
      
      // Use setTimeout to stagger loading and reduce initial load impact
      setTimeout(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [index]: true }));
          imagesRef.current[index] = img;
        };
      }, priority ? 100 : 1000); // Load priority images sooner
    });
  }, [backgroundImages, currentImageIndex]);

  // Image rotation effect - only active when in view
  useEffect(() => {
    if (!isInView) {
      if (timerRef.current) {
        clearTimeout(timerRef.current); 
        timerRef.current = null;
      }
      return;
    }
    
    const interval = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => {
        const newIndex = prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1;
        return newIndex;
      });
    }, 5000); // Change image every 5 seconds
    
    timerRef.current = interval;
    return () => {
      clearTimeout(interval);
      timerRef.current = null;
    };
  }, [currentImageIndex, backgroundImages.length, isInView]);

  // Update CSS variables based on current image
  useEffect(() => {
    const currentImage = backgroundImages[currentImageIndex];
    if (!loadedImages[currentImageIndex]) return;
    
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
  }, [currentImageIndex, backgroundImages, loadedImages]);

  // Preload the next image in advance
  const preloadNextImage = (currentIdx: number) => {
    const nextIdx = (currentIdx + 1) % backgroundImages.length;
    if (!loadedImages[nextIdx] && !imagesRef.current[nextIdx]) {
      const img = new Image();
      img.src = backgroundImages[nextIdx];
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [nextIdx]: true }));
        imagesRef.current[nextIdx] = img;
      };
    }
  };

  // When current image changes, preload the next one
  useEffect(() => {
    preloadNextImage(currentImageIndex);
  }, [currentImageIndex]);

  return (
    <div className="fixed inset-0 -z-10">
      {backgroundImages.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out will-change-opacity ${
            index === currentImageIndex ? "opacity-30" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: loadedImages[index] ? `url(${img})` : 'none',
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
