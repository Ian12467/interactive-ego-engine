
import { useState } from "react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { ProjectsBackground } from "@/components/ProjectsBackground";
import { ProjectsMatrixBackground } from "@/components/ProjectsMatrixBackground";
import { ProjectCarousel } from "@/components/ProjectCarousel";
import { ProjectFilters } from "@/components/ProjectFilters";
import { ProjectGrid } from "@/components/ProjectGrid";
import { CallToAction } from "@/components/CallToAction";
import { projects } from "@/data/projectsData";
import { Code, Shield, Palette } from "lucide-react";

type ProjectCategory = 'all' | 'fullstack' | 'security' | 'uiux';

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  // Get the icon based on project category
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
  
  // Get the category name for display
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

  // Prepare carousel data
  const featuredProjects = filteredProjects
    .filter(project => project.featured)
    .map(project => ({
      ...project,
      icon: getCategoryIcon(project.category),
      category: getCategoryName(project.category)
    }));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProjectsBackground />
      <ProjectsMatrixBackground />
      <main className="flex-1">
        <PageHero 
          title="My Projects"
          subtitle="From Code to Cloud: My Portfolio of Innovation"
          description="Explore my diverse portfolio of projects spanning full stack development, cybersecurity solutions, and UI/UX design work."
        />
        
        <ProjectFilters 
          activeFilter={activeFilter} 
          onFilterChange={setActiveFilter} 
        />
        
        {featuredProjects.length > 0 && (
          <ProjectCarousel 
            projects={featuredProjects} 
            title="Showcase" 
            subtitle="Featured Projects" 
          />
        )}
        
        <ProjectGrid projects={filteredProjects} />
        
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
