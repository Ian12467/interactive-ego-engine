
import { Button } from "@/components/ui/button";
import { Code, Shield, Palette } from "lucide-react";

type ProjectCategory = 'all' | 'fullstack' | 'security' | 'uiux';

interface ProjectFiltersProps {
  activeFilter: ProjectCategory;
  onFilterChange: (filter: ProjectCategory) => void;
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <section className="py-10 border-b border-border backdrop-blur-sm bg-background/50 sticky top-16 z-10">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant={activeFilter === 'all' ? 'default' : 'outline'}
            onClick={() => onFilterChange('all')}
          >
            All Projects
          </Button>
          <Button 
            variant={activeFilter === 'fullstack' ? 'default' : 'outline'}
            className="gap-2"
            onClick={() => onFilterChange('fullstack')}
          >
            <Code className="h-4 w-4" />
            Full Stack
          </Button>
          <Button 
            variant={activeFilter === 'security' ? 'default' : 'outline'}
            className="gap-2"
            onClick={() => onFilterChange('security')}
          >
            <Shield className="h-4 w-4" />
            Security
          </Button>
          <Button 
            variant={activeFilter === 'uiux' ? 'default' : 'outline'}
            className="gap-2"
            onClick={() => onFilterChange('uiux')}
          >
            <Palette className="h-4 w-4" />
            UI/UX Design
          </Button>
        </div>
      </div>
    </section>
  );
}
