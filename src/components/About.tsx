
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Code, Globe, Lightbulb } from "lucide-react";

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and best practices.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that provide exceptional user experiences.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Creative Solutions",
      description: "Developing innovative solutions to complex problems with clean, efficient code.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Project Management",
      description: "Managing projects from conception to completion with a focus on timelines and quality.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-secondary/50 dark:bg-secondary/10"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary text-lg font-medium mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 ${isVisible ? "animate-fadeIn" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold">
              Engineering the Future: Code, Cloud & Cybersecurity 
            </h3>
            <p className="text-muted-foreground">
              Technology is my playground, and I thrive at the intersection of Software Engineering, Cloud
              Computing, and Cybersecurity. With a passion for building scalable, high-performance applications
              and securing digital infrastructures, I specialize in:
            </p>
            <p className="text-muted-foreground">
              💡 Developing cutting-edge web applications with intuitive user experiences.<br />
              ☁️ Optimizing cloud architectures for efficiency, reliability, and security.<br />
              🛡️ Fortifying networks against cyber threats through proactive defense strategies.
            </p>
            <p className="text-muted-foreground">
              From writing clean, scalable code to deploying secure cloud solutions and mitigating cyber risks, I believe in innovation with impact. Every line of code and security measure is a step toward a smarter, safer digital world.
            </p>
            <p className="text-muted-foreground font-bold">
              🔹 Let’s build, secure, and innovate—one solution at a time.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="text-4xl font-bold text-primary">5+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm">
                <h4 className="text-4xl font-bold text-primary">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`shadow-sm border border-border hover:border-primary/20 transition-all hover:shadow-md ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
