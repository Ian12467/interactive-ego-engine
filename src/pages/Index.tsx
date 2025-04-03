
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { EasterEgg } from "@/components/EasterEgg";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        
        <section id="expertise" className="py-20 bg-secondary/50 dark:bg-secondary/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">My Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Specialized Skills</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my dual expertise areas - each with their own dedicated page showcasing detailed experience, 
                skills, and professional achievements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Full Stack Development</h3>
                  <p className="text-muted-foreground mb-6">
                    Creating robust, scalable, and secure web applications with modern front-end frameworks 
                    and back-end technologies. Specializing in React.js, Node.js, Python, and cloud deployment.
                  </p>
                </div>
                <CardContent className="p-8 pt-0 mt-auto">
                  <Link to="/fullstack">
                    <Button className="w-full gap-2 group">
                      Explore Full Stack Skills
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 h-full flex flex-col">
                <div className="bg-gradient-to-br from-primary/10 to-transparent p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cloud & Network Security</h3>
                  <p className="text-muted-foreground mb-6">
                    Securing digital infrastructure with advanced protection strategies. Specialized in cloud security, 
                    network monitoring, vulnerability assessment, and SIEM tools implementation.
                  </p>
                </div>
                <CardContent className="p-8 pt-0 mt-auto">
                  <Link to="/security">
                    <Button className="w-full gap-2 group">
                      Explore Security Skills
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
