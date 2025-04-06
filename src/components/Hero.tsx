
import { useEffect, useRef, useState } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const typingRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Toggle for bio expansion on mobile
  const [bioExpanded, setBioExpanded] = useState(false);
  
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

  const handleDownloadCV = () => {
    // In a real implementation, this would download the actual CV file
    alert("CV download functionality will be implemented soon!");
  };

  // Create a shortened bio for mobile 
  const fullBio = "I am a versatile tech professional with expertise in Full Stack Software Engineering, Cybersecurity, and UI/UX Design. I build scalable, high-performance web applications using modern technologies like React, Django, Node.js, and PostgreSQL, ensuring seamless functionality and efficiency. As a Cybersecurity Specialist, I focus on penetration testing, cloud security, and network defense, implementing proactive measures to safeguard digital infrastructures against cyber threats. My passion for UI/UX Design allows me to craft intuitive, accessible, and visually appealing interfaces, ensuring a seamless user experience. Whether developing robust applications, fortifying systems against attacks, or designing user-friendly experiences, I am committed to delivering innovative, secure, and impactful digital solutions that stand out in today's fast-evolving tech landscape.";
  
  const shortBio = "I am a versatile tech professional with expertise in Full Stack Software Engineering, Cybersecurity, and UI/UX Design. I build scalable applications, implement security measures, and craft intuitive interfaces.";

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pb-10 pt-24 relative overflow-hidden">
      {/* Matrix-like overlay effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 -z-5 mix-blend-overlay"></div>
      
      <div className="container flex flex-col items-center text-center z-10">
        <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
          <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary/20 shadow-lg mb-2 hover:border-primary/40 transition-all duration-300">
            <AvatarImage src="/lovable-uploads/a2fa06d3-20e5-4f93-95fe-d4906d12a6fc.png" alt="Ian Ochieng' Otieno" />
            <AvatarFallback>IO</AvatarFallback>
          </Avatar>
          
          <h2 className="text-base md:text-lg text-muted-foreground animate-fadeIn">Hello, I'm</h2>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent animate-fadeIn">
            Ian Ochieng' Otieno
          </h1>
          
          <div className="my-2 md:my-4 h-12 md:h-16">
            <div 
              ref={typingRef}
              className="typing-container animate-blink font-mono text-lg md:text-2xl"
            >
              Fullstack Developer | Cloud & Network Security Specialist | UI/UX Designer
            </div>
          </div>
          
          <div className="relative">
            <p className={`text-sm md:text-lg text-muted-foreground max-w-xl transition-all duration-300 ${
              isMobile && !bioExpanded ? "line-clamp-3" : ""
            }`}>
              {isMobile && !bioExpanded ? shortBio : fullBio}
            </p>
            
            {isMobile && (
              <button 
                onClick={() => setBioExpanded(!bioExpanded)}
                className="text-primary text-sm mt-2 underline"
              >
                {bioExpanded ? "Read less" : "Read more"}
              </button>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6">
            <Button className="gap-2 group" size={isMobile ? "default" : "lg"} asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" className="gap-2" size={isMobile ? "default" : "lg"} onClick={handleDownloadCV}>
              <Download className="w-4 h-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 mt-4 md:mt-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ian-ochieng-26152b222/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="mailto:ianochieng277@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
        
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="w-6 h-6 md:w-8 md:h-8 text-primary" />
        </a>
      </div>
    </section>
  );
}
