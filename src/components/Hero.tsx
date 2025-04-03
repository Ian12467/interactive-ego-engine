
import { useEffect, useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
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
    <section id="home" className="min-h-screen flex flex-col justify-center pb-10 pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
      
      <div className="container flex flex-col items-center text-center">
        <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-lg md:text-xl text-muted-foreground">Hello, I'm</h2>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            John Developer
          </h1>
          
          <div className="my-4 h-16">
            <div 
              ref={typingRef}
              className="typing-container animate-blink font-mono text-xl md:text-2xl"
            >
              Full Stack Developer | UI/UX Designer | Problem Solver
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-xl">
            I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I specialize in crafting clean, elegant solutions to complex problems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button className="gap-2 group" size="lg">
              <Mail className="w-4 h-4 group-hover:animate-bounce" />
              Contact Me
            </Button>
            <Button variant="outline" className="gap-2" size="lg">
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 mt-6">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-8 h-8 text-primary" />
        </a>
      </div>
    </section>
  );
}
