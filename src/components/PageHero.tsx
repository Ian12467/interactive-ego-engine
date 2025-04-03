
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle: string;
  description: string;
}

export function PageHero({ title, subtitle, description }: PageHeroProps) {
  const typingRef = useRef<HTMLDivElement>(null);
  
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

  return (
    <section className="min-h-[80vh] flex flex-col justify-center pb-10 pt-24 relative overflow-hidden">
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
