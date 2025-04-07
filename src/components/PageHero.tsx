
import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
  backgroundImages?: string[];
  backgroundImage?: string;
}

export function PageHero({ 
  title, 
  subtitle, 
  description, 
  backgroundImages, 
  backgroundImage 
}: PageHeroProps) {
  const typingRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-typing");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 }
    );
    
    if (typingRef.current) {
      observer.observe(typingRef.current);
    }
    
    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!backgroundImages || backgroundImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, [backgroundImages]);

  const renderBackgroundImage = () => {
    if (backgroundImages && backgroundImages.length > 0) {
      return (
        <div className="absolute inset-0 -z-10">
          {backgroundImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-20" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <div className="absolute bottom-8 right-8 z-10 flex space-x-2">
            {backgroundImages.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentImageIndex ? "bg-primary" : "bg-primary/30"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      );
    } else if (backgroundImage) {
      return (
        <div 
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      );
    }
    
    return null;
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pb-10 pt-24 relative overflow-hidden">
      {renderBackgroundImage()}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
      
      <div className="container flex flex-col items-center text-center">
        <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl text-muted-foreground">Welcome to my professional profile</h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            {title}
          </h1>
          
          <div className="my-4 h-16">
            <div 
              ref={typingRef}
              className="typing-container animate-blink font-mono text-xl md:text-2xl"
            >
              {subtitle}
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            {description}
          </p>
        </div>
        
        <a 
          href="#skills" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
          aria-label="Scroll to Skills section"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </a>
      </div>
    </section>
  );
}
