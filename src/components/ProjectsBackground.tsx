
import { useEffect, useState, useRef } from "react";

export function ProjectsBackground() {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (backgroundRef.current) {
      observer.observe(backgroundRef.current);
    }
    
    return () => {
      if (backgroundRef.current) {
        observer.unobserve(backgroundRef.current);
      }
    };
  }, []);

  return (
    <div ref={backgroundRef} className="fixed inset-0 -z-10 pointer-events-none">
      {/* Primary gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background opacity-70"></div>
      
      {/* Pattern overlay */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.12'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      {/* Dynamic circles */}
      <div className={`absolute top-20 right-[10%] w-64 h-64 rounded-full bg-primary/10 filter blur-3xl transition-opacity duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}></div>
      <div className={`absolute bottom-40 left-[5%] w-96 h-96 rounded-full bg-primary/5 filter blur-3xl transition-opacity duration-1500 delay-300 ${isVisible ? 'opacity-50' : 'opacity-0'}`}></div>
      <div className={`absolute top-[40%] left-[15%] w-72 h-72 rounded-full bg-accent/10 filter blur-2xl transition-opacity duration-1500 delay-500 ${isVisible ? 'opacity-40' : 'opacity-0'}`}></div>
    </div>
  );
}
