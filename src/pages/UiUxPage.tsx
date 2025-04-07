
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UiUxImageCarousel } from "@/components/UiUxImageCarousel";
import { ArrowRight, Figma, Framer, Palette, LayoutGrid, Users, Laptop, Code, EyeIcon, PenTool, Workflow } from "lucide-react";

const UiUxPage = () => {
  // Define the UI/UX background images
  const backgroundImages = [
    "/lovable-uploads/608b051f-4f5a-48bb-a9fc-bdc81e98e4ee.png", // Purple setup
    "/lovable-uploads/5c92a430-5bfe-4dc6-86bb-92dec162c2d4.png", // Tablet
    "/lovable-uploads/5584903f-40b9-4c50-802c-bfddda0c3cee.png", // Coffee workspace
    "/lovable-uploads/32265a51-f883-4858-bf3c-d6038dd14113.png", // Dual monitor setup
  ];

  // Project carousel images
  const projectImages = [
    "/lovable-uploads/3bddd775-efa5-4d27-9755-40f7fd85513e.png", // Mobile design
    "/lovable-uploads/a2c22064-63c0-4448-8e6f-7b4b81e2dda2.png", // Coding
    "/lovable-uploads/8546cc4d-e4d1-48cd-ae2d-246269767ad7.png", // Wireframe
    "/lovable-uploads/2373305b-3ca2-44bb-b08c-f39fe3198dd1.png", // Minimalist
  ];

  const projectTitles = [
    "Mobile App Interface Design",
    "Web Application Development",
    "Wireframing & Prototyping",
    "Minimalist Design Systems",
  ];

  const projectDescriptions = [
    "Creating intuitive mobile interfaces that engage users and simplify complex tasks",
    "Developing responsive web applications with clean code and optimal user experience",
    "Turning concepts into interactive wireframes and prototypes for rapid testing",
    "Designing clean, functional systems that prioritize content and usability",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <PageHero 
          title="UI/UX Designer"
          subtitle="Designing Digital Experiences That Inspire & Perform"
          description="Crafting intuitive and visually appealing user experiences through research, design thinking, and creative solutions."
          backgroundImages={backgroundImages}
        />
        
        {/* Featured Work Showcase */}
        <section className="py-12 bg-background">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-primary text-lg font-medium mb-2">Featured Work</h2>
              <h3 className="text-3xl font-bold mb-4">Recent Design Projects</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of my latest UI/UX design projects across mobile, web, and product design
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <UiUxImageCarousel 
                images={projectImages}
                titles={projectTitles}
                descriptions={projectDescriptions}
              />
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">UI/UX Skills</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Design Expertise & Tools</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My comprehensive skill set spans from user research and wireframing to prototyping and visual design, 
                all focused on creating exceptional user experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* UX Skills */}
              <Card className="hover-lift card-hover">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">User Experience (UX)</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Wireframing
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Prototyping
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      User Research
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Journey Mapping
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Usability Testing
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* UI Skills */}
              <Card className="hover-lift card-hover">
                <CardContent className="p-6">
                  <Palette className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">User Interface (UI)</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Visual Design
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Typography
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Color Theory
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Accessibility Compliance
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Micro-interactions
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tools & Technologies */}
              <Card className="hover-lift card-hover">
                <CardContent className="p-6">
                  <Laptop className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">Tools & Technologies</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Figma
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Adobe XD
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Sketch
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      InVision
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Framer
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Frontend for UI */}
              <Card className="hover-lift card-hover">
                <CardContent className="p-6">
                  <Code className="h-8 w-8 text-primary mb-4" />
                  <h4 className="text-xl font-bold mb-3">Frontend Development</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      HTML & CSS
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      JavaScript
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Tailwind CSS
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      Bootstrap
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      CSS Animations
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Design Approach Section */}
        <section id="approach" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Design Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">My Design Approach</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A human-centered approach focused on aesthetics, functionality, and accessibility to create meaningful digital experiences.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/10 via-primary to-primary/10 hidden md:block" style={{transform: 'translateY(-50%)'}}></div>
              
              {/* Empathize */}
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Empathize</h4>
                <p className="text-sm text-muted-foreground">Understanding user needs through research and interviews</p>
              </div>
              
              {/* Define */}
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LayoutGrid className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Define</h4>
                <p className="text-sm text-muted-foreground">Identifying problems and establishing goals</p>
              </div>
              
              {/* Ideate */}
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <PenTool className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Ideate</h4>
                <p className="text-sm text-muted-foreground">Brainstorming creative solutions and concepts</p>
              </div>
              
              {/* Prototype */}
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Figma className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Prototype</h4>
                <p className="text-sm text-muted-foreground">Creating interactive models and wireframes</p>
              </div>
              
              {/* Test */}
              <div className="relative z-10 flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <EyeIcon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Test</h4>
                <p className="text-sm text-muted-foreground">Validating designs through user feedback</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Portfolio Preview */}
        <section id="portfolio-preview" className="py-20 bg-secondary/50 dark:bg-secondary/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Featured Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Portfolio Highlights</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my most impactful UI/UX design projects showcasing problem-solving and creative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <div className="project-card rounded-lg overflow-hidden bg-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/5584903f-40b9-4c50-802c-bfddda0c3cee.png"
                    alt="Design workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="project-card-overlay">
                  <Badge className="mb-2">UX Research</Badge>
                  <h4 className="text-xl font-bold text-white mb-1">E-commerce Redesign</h4>
                  <p className="text-white/80 text-sm mb-4">Improved user journey and checkout flow</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">E-commerce Redesign</h4>
                  <p className="text-muted-foreground mb-4">A complete redesign of an e-commerce platform focusing on usability and conversion optimization.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">User Testing</Badge>
                    <Badge variant="outline">A/B Testing</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    View Case Study 
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="project-card rounded-lg overflow-hidden bg-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/3bddd775-efa5-4d27-9755-40f7fd85513e.png"
                    alt="Mobile UI Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="project-card-overlay">
                  <Badge className="mb-2">Mobile App</Badge>
                  <h4 className="text-xl font-bold text-white mb-1">Banking App UI</h4>
                  <p className="text-white/80 text-sm mb-4">User-friendly financial management</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Banking App UI</h4>
                  <p className="text-muted-foreground mb-4">A modern banking application interface designed for simplicity and security.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Adobe XD</Badge>
                    <Badge variant="outline">Prototyping</Badge>
                    <Badge variant="outline">UI Animation</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    View Prototype
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="project-card rounded-lg overflow-hidden bg-card">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="/lovable-uploads/8546cc4d-e4d1-48cd-ae2d-246269767ad7.png"
                    alt="Wireframe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="project-card-overlay">
                  <Badge className="mb-2">Web Application</Badge>
                  <h4 className="text-xl font-bold text-white mb-1">Task Management Dashboard</h4>
                  <p className="text-white/80 text-sm mb-4">Productivity tool with intuitive UX</p>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Task Management Dashboard</h4>
                  <p className="text-muted-foreground mb-4">A productivity dashboard designed for teams with focus on accessibility and ease of use.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Sketch</Badge>
                    <Badge variant="outline">User Flows</Badge>
                    <Badge variant="outline">Design System</Badge>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-2">
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <Button asChild className="gap-2">
                <a href="/projects">
                  View All Projects
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section with background image */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{backgroundImage: `url('/lovable-uploads/608b051f-4f5a-48bb-a9fc-bdc81e98e4ee.png')`}}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-400/30"></div>
          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's create something amazing together!</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Explore my designs or reach out for collaboration on your next innovative project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <a href="/projects">Explore Projects</a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/#contact">Contact Me</a>
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

export default UiUxPage;
