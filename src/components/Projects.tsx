
import { useState, useRef, useEffect } from "react";
import { Github, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  tags: string[];
  link: string;
  github: string;
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1610433546658-8f9480ae83c9?q=80&w=1000",
      category: ["web", "frontend", "backend"],
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing social media accounts with analytics and scheduling features.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000",
      category: ["web", "frontend"],
      tags: ["Vue.js", "Tailwind CSS", "Chart.js"],
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity application for tracking tasks and projects with collaborative features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000",
      category: ["web", "mobile"],
      tags: ["React Native", "Firebase", "Redux"],
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: "Real Estate Website",
      description: "A property listing website with advanced search features and map integration.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000",
      category: ["web", "design"],
      tags: ["Next.js", "TypeScript", "Google Maps API"],
      link: "#",
      github: "#",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "A mobile application for tracking workouts, nutrition, and health metrics.",
      image: "https://images.unsplash.com/photo-1574680088814-c9e8a9d8b006?q=80&w=1000",
      category: ["mobile"],
      tags: ["Flutter", "Firebase", "Health API"],
      link: "#",
      github: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A showcase website for a creative professional with animated elements and smooth transitions.",
      image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1000",
      category: ["web", "design"],
      tags: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { label: "All", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Design", value: "design" },
    { label: "Frontend", value: "frontend" },
    { label: "Backend", value: "backend" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
  
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary text-lg font-medium mb-2">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className="mb-2"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`project-card border-0 overflow-hidden rounded-lg shadow-md ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="project-card-overlay">
                  <div className="flex flex-col space-y-2">
                    <h4 className="text-white text-xl font-bold">{project.title}</h4>
                    <div className="flex gap-2 mt-2">
                      <a href={project.github} aria-label="GitHub">
                        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                      <a href={project.link} aria-label="Live Demo">
                        <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30">
                          <Link className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
