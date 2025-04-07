
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
  icon: React.ReactNode;
}

interface ProjectCarouselProps {
  projects: Project[];
  title: string;
  subtitle: string;
}

export function ProjectCarousel({ projects, title, subtitle }: ProjectCarouselProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [loadedProjects, setLoadedProjects] = useState<Record<number, boolean>>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize intersection observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Staggered loading of projects for better performance
  useEffect(() => {
    if (!isVisible) return;

    projects.forEach((project, index) => {
      // Stagger loading with increasing delays
      const timer = setTimeout(() => {
        setLoadedProjects(prev => ({ ...prev, [project.id]: true }));
      }, 100 * index);

      return () => clearTimeout(timer);
    });
  }, [isVisible, projects]);

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-primary text-lg font-medium mb-2">{title}</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">{subtitle}</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div ref={carouselRef} className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="p-1">
                    <Card className={`overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col bg-card/80 backdrop-blur-sm ${
                      loadedProjects[project.id] ? 'animate-fadeIn' : 'opacity-0'
                    }`}>
                      <div className="h-40 bg-primary/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/20"></div>
                        {project.icon}
                        <Badge className="absolute top-4 right-4 z-10">{project.category}</Badge>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                        <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map(tag => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                          {project.github && (
                            <Button variant="outline" size="sm" className="flex-1 gap-2" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button size="sm" className="flex-1 gap-2" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-4">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
