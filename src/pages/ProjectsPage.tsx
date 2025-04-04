
import { useState } from "react";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Code, 
  Shield, 
  Palette, 
  Github, 
  Link as LinkIcon, 
  ExternalLink 
} from "lucide-react";

// Define project categories and filter options
type ProjectCategory = 'all' | 'fullstack' | 'security' | 'uiux';

interface Project {
  id: number;
  title: string;
  description: string;
  category: 'fullstack' | 'security' | 'uiux';
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  
  // Sample project data
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with React.js, Django & Stripe payments integration. Features include search & filtering with Elasticsearch, email notifications & order tracking.",
      category: "fullstack",
      image: "/placeholder.svg",
      tags: ["React", "Django", "Stripe", "Elasticsearch"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
    {
      id: 2,
      title: "Cloud Security Assessment Tool",
      description: "AWS security scanning tool that analyzes IAM policies, S3 bucket permissions, and security groups for vulnerabilities. Implements AWS best practices and NIST framework guidelines.",
      category: "security",
      image: "/placeholder.svg",
      tags: ["AWS", "Python", "IAM", "NIST"],
      github: "https://github.com",
      featured: true
    },
    {
      id: 3,
      title: "Banking App UI Redesign",
      description: "A modern banking application interface designed for simplicity and security with interactive prototypes and user testing results showing 40% improvement in task completion rate.",
      category: "uiux",
      image: "/placeholder.svg",
      tags: ["Figma", "UI Design", "Prototyping", "User Testing"],
      live: "https://figma.com",
      featured: true
    },
    {
      id: 4,
      title: "Financial Management Web App",
      description: "User budgeting tool with OAuth2 authentication for secure sign-in with Google. Features include expense tracking, financial goals, and multi-user role dashboard.",
      category: "fullstack",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "OAuth2", "MongoDB"],
      github: "https://github.com",
      featured: false
    },
    {
      id: 5,
      title: "Network Intrusion Detection System",
      description: "Custom IDS solution that monitors network traffic for suspicious activities using machine learning algorithms to detect anomalies and potential threats.",
      category: "security",
      image: "/placeholder.svg",
      tags: ["Python", "Machine Learning", "Network Security", "Wireshark"],
      github: "https://github.com",
      featured: false
    },
    {
      id: 6,
      title: "Task Management Dashboard",
      description: "A productivity dashboard designed for teams with focus on accessibility and ease of use. Features include Kanban boards, time tracking, and team collaboration tools.",
      category: "uiux",
      image: "/placeholder.svg",
      tags: ["Sketch", "User Flows", "Design System", "Accessibility"],
      live: "https://dribbble.com",
      featured: false
    },
    {
      id: 7,
      title: "Secure File Sharing App",
      description: "File-sharing application with end-to-end encryption, implemented AWS S3 storage with role-based access control, and secure download links with expiration.",
      category: "fullstack",
      image: "/placeholder.svg",
      tags: ["AWS S3", "React", "Node.js", "Encryption"],
      github: "https://github.com",
      featured: false
    },
    {
      id: 8,
      title: "Vulnerability Scanner",
      description: "Automated web application vulnerability scanner that identifies common security issues like XSS, SQLi, and CSRF. Generates detailed reports with remediation recommendations.",
      category: "security",
      image: "/placeholder.svg",
      tags: ["Python", "Web Security", "Pentesting", "Automation"],
      github: "https://github.com",
      featured: false
    },
    {
      id: 9,
      title: "E-learning Platform Interface",
      description: "User interface design for an online learning platform with focus on engagement, accessibility, and seamless navigation between course materials.",
      category: "uiux",
      image: "/placeholder.svg",
      tags: ["Adobe XD", "User Research", "Information Architecture", "UI Animation"],
      live: "https://behance.net",
      featured: false
    }
  ];
  
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PageHero 
          title="My Projects"
          subtitle="From Code to Cloud: My Portfolio of Innovation"
          description="Explore my diverse portfolio of projects spanning full stack development, cybersecurity solutions, and UI/UX design work."
        />
        
        {/* Filter Section */}
        <section className="py-10 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveFilter('all')}
              >
                All Projects
              </Button>
              <Button 
                variant={activeFilter === 'fullstack' ? 'default' : 'outline'}
                className="gap-2"
                onClick={() => setActiveFilter('fullstack')}
              >
                <Code className="h-4 w-4" />
                Full Stack
              </Button>
              <Button 
                variant={activeFilter === 'security' ? 'default' : 'outline'}
                className="gap-2"
                onClick={() => setActiveFilter('security')}
              >
                <Shield className="h-4 w-4" />
                Security
              </Button>
              <Button 
                variant={activeFilter === 'uiux' ? 'default' : 'outline'}
                className="gap-2"
                onClick={() => setActiveFilter('uiux')}
              >
                <Palette className="h-4 w-4" />
                UI/UX Design
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Showcase</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Highlighting my best work across different domains - from full-stack applications to security solutions and design projects.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects
                .filter(project => project.featured)
                .map(project => (
                  <Card key={project.id} className="overflow-hidden hover-lift card-hover h-full flex flex-col">
                    <div className="h-48 bg-primary/5 flex items-center justify-center relative">
                      {getCategoryIcon(project.category)}
                      <Badge className="absolute top-4 right-4">{getCategoryName(project.category)}</Badge>
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
                ))}
            </div>
          </div>
        </section>
        
        {/* All Projects */}
        <section className="py-20 bg-secondary/50 dark:bg-secondary/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">All Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Project Collection</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Browse through my complete portfolio of projects showcasing a range of skills and expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects
                .filter(project => !project.featured)
                .map(project => (
                  <Card key={project.id} className="overflow-hidden hover-lift card-hover h-full flex flex-col">
                    <div className="h-40 bg-primary/5 flex items-center justify-center relative">
                      {getCategoryIcon(project.category)}
                      <Badge className="absolute top-4 right-4">{getCategoryName(project.category)}</Badge>
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
                ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-400/10">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to work on something innovative?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's collaborate on your next project and create something amazing together!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="gap-2">
                  <a href="/#contact">
                    Contact Me
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a href="https://linkedin.com/in/ian-ochieng-26152b222/" target="_blank" rel="noopener noreferrer">
                    <LinkIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
