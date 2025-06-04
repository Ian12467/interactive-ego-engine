
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Shield, Palette, Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projectsData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'fullstack':
        return <Code className="h-5 w-5" />;
      case 'security':
        return <Shield className="h-5 w-5" />;
      case 'uiux':
        return <Palette className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };
  
  const getCategoryName = (category: string) => {
    switch(category) {
      case 'fullstack':
        return 'Full Stack';
      case 'security':
        return 'Security';
      case 'uiux':
        return 'UI/UX Design';
      default:
        return category;
    }
  };

  return (
    <Card 
      className="project-card overflow-hidden hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col bg-card/80 backdrop-blur-sm"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className="h-40 bg-primary/5 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background/20"></div>
        {getCategoryIcon(project.category)}
        <Badge className="absolute top-4 right-4 z-10">{getCategoryName(project.category)}</Badge>
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <h4 className="text-xl font-bold mb-2">{project.title}</h4>
        <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
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
  );
}
