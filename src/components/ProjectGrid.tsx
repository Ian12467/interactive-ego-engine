
import { useState, useEffect, useRef } from "react";
import { Loader } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { Project } from "@/data/projectsData";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setVisibleProjects(projects);
      setIsLoading(false);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [projects]);

  useEffect(() => {
    if (!projectsRef.current || isLoading) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeIn');
              observer.unobserve(entry.target);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    const projectCards = projectsRef.current.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.add('opacity-0');
      observer.observe(card);
    });
    
    return () => {
      projectCards.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, [visibleProjects, isLoading]);

  return (
    <section className="py-16 bg-secondary/20 backdrop-blur-sm dark:bg-secondary/10">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary text-lg font-medium mb-2">All Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Project Collection</h3>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through my complete portfolio of projects showcasing a range of skills and expertise.
          </p>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
