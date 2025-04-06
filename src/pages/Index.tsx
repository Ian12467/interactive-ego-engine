
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EasterEgg } from "@/components/EasterEgg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Shield, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";
import { BackgroundMatrix } from "@/components/BackgroundMatrix";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";

const Index = () => {
  const isMobile = useIsMobile();
  
  // For page transition animation
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`flex flex-col min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      
      {/* Background elements - z-index ordering is important */}
      <BackgroundCarousel />
      <BackgroundMatrix opacity={0.08} />
      
      <main className="relative">
        {/* Cyber-themed gradient overlay for entire page */}
        <div className="fixed inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background pointer-events-none z-[-1]"></div>
        
        <Hero />
        <About />
        
        <section id="expertise" className="py-16 md:py-20 relative overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/10 -z-10"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/32b9e253-ab1b-425a-bd7f-16ffb967cf91.png')] bg-cover bg-center opacity-5 -z-10"></div>
          
          <div className="container">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-primary text-base md:text-lg font-medium mb-2">My Expertise</h2>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Specialized Skills</h3>
              <div className="w-16 md:w-20 h-1 bg-primary mx-auto mb-4 md:mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
                Explore my triple expertise areas - each with their own dedicated page showcasing detailed experience, 
                skills, and professional achievements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <Card className="overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col bg-card/90 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 md:mb-6">
                    <Code className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Full Stack Development</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
                    Creating robust, scalable, and secure web applications with modern front-end frameworks 
                    and back-end technologies. Specializing in React.js, Node.js, Python, and cloud deployment.
                  </p>
                </div>
                <CardContent className="p-6 md:p-8 pt-0 mt-auto">
                  <Link to="/fullstack">
                    <Button className="w-full gap-2 group">
                      Explore Full Stack Skills
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col bg-card/90 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 md:mb-6">
                    <Shield className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Cloud & Network Security</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
                    Securing digital infrastructure with advanced protection strategies. Specialized in cloud security, 
                    network monitoring, vulnerability assessment, and SIEM tools implementation.
                  </p>
                </div>
                <CardContent className="p-6 md:p-8 pt-0 mt-auto">
                  <Link to="/security">
                    <Button className="w-full gap-2 group">
                      Explore Security Skills
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col bg-card/90 backdrop-blur-sm">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 md:mb-6">
                    <Palette className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">UI/UX Design</h3>
                  <p className="text-muted-foreground text-sm md:text-base mb-4 md:mb-6">
                    Crafting intuitive, accessible, and visually appealing interfaces. Focused on user research, 
                    wireframing, prototyping, and implementing responsive designs that deliver exceptional experiences.
                  </p>
                </div>
                <CardContent className="p-6 md:p-8 pt-0 mt-auto">
                  <Link to="/uiux">
                    <Button className="w-full gap-2 group">
                      Explore UI/UX Skills
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <Skills />
        <Contact />
      </main>
      <Footer />
      <EasterEgg />
    </div>
  );
};

export default Index;
