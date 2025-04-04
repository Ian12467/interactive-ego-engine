
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExperienceCard } from "@/components/ExperienceCard";
import { TechnologyCard } from "@/components/TechnologyCard";
import { PageHero } from "@/components/PageHero";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const FullStackPage = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const backgroundImages = [
    "public/lovable-uploads/908838c6-7268-4e9f-af10-3408186ac695.png",
    "public/lovable-uploads/ceed8507-09a0-48a9-9865-fef675240b26.png",
    "public/lovable-uploads/fc35efc2-00f1-49f7-9e6c-b38efd9b5e14.png"
  ];

  const frontendSkills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 80 },
  ];

  const backendSkills = [
    { name: "Python (Django, Flask)", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express.js", level: 75 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 75 },
  ];

  const devOpsSkills = [
    { name: "Docker", level: 70 },
    { name: "Kubernetes", level: 65 },
    { name: "GitHub Actions", level: 75 },
    { name: "AWS", level: 80 },
    { name: "Firebase", level: 70 },
  ];

  const experiences = [
    { 
      title: "Full Stack Developer",
      company: "FTT-Forensic Discovery",
      period: "May 2021 – Jun 2024",
      responsibilities: [
        "Developed secure web applications for forensic data analysis using Django & React.js",
        "Led cloud-native deployment on AWS (EC2, S3, Lambda), improving performance by 40%",
        "Designed and implemented RESTful APIs with authentication and role-based access control (RBAC)",
        "Integrated CI/CD pipelines using GitHub Actions & Docker, reducing deployment time by 70%",
        "Built real-time dashboards for data visualization using D3.js & Chart.js",
        "Conducted penetration testing to enhance security against SQL injections & XSS attacks"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Kenyatta National Hospital",
      period: "Jun 2023 – Aug 2023",
      responsibilities: [
        "Developed an internal patient record system using Django & PostgreSQL",
        "Improved data security by implementing AES encryption for sensitive records",
        "Optimized API responses by 35% through caching strategies",
        "Conducted database migration & indexing for efficient queries",
        "Created a role-based authentication system for different user levels",
        "Integrated a chatbot assistant for user inquiries using NLP models"
      ]
    },
    {
      title: "Personal E-Commerce Project",
      company: "Independent",
      period: "2024",
      responsibilities: [
        "Built a full-stack e-commerce platform with React.js, Django & Stripe payments",
        "Implemented search & filtering features using Elasticsearch",
        "Integrated email notifications & order tracking",
        "Designed mobile-responsive UI with Tailwind CSS",
        "Implemented shopping cart with local storage persistence",
        "Created admin dashboard for product and order management"
      ]
    },
    {
      title: "FinTech App Development",
      company: "Freelance Project",
      period: "2023",
      responsibilities: [
        "Developed a financial management web app with user budgeting tools",
        "Used OAuth2 authentication for secure sign-in with Google",
        "Built a multi-user role dashboard for different user levels",
        "Implemented real-time data visualization with Chart.js",
        "Integrated third-party financial APIs for market data",
        "Created automated financial reports using PDF generation"
      ]
    },
    {
      title: "Secure File Sharing App",
      company: "Independent",
      period: "2022",
      responsibilities: [
        "Designed a file-sharing app with end-to-end encryption",
        "Implemented AWS S3 storage with role-based access",
        "Created secure file preview functionality",
        "Built user management system with access controls",
        "Implemented file versioning and history tracking",
        "Designed intuitive UI/UX for file management"
      ]
    },
    {
      title: "SaaS Platform Development",
      company: "Startup Collaboration",
      period: "2022",
      responsibilities: [
        "Led backend development of a SaaS dashboard for B2B analytics",
        "Optimized SQL queries, improving response time by 50%",
        "Implemented subscription payment system using Stripe",
        "Created API endpoints for third-party integrations",
        "Designed data export functionality in multiple formats",
        "Built automated testing suite for critical business logic"
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background/95 backdrop-blur-sm">
      <Header />
      <main>
        <PageHero 
          title="Full Stack Developer"
          subtitle="Creating robust, scalable, and secure web applications"
          description="A highly skilled Full Stack Developer with expertise in modern web technologies, databases, and cloud deployment. Passionate about scalable applications, API development, and DevOps pipelines."
          backgroundImages={backgroundImages}
        />

        <section id="skills" className="py-20 bg-secondary/80 dark:bg-secondary/20 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Technical Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <TechnologyCard 
                title="Frontend Development" 
                skills={frontendSkills}
                delay={0.2}
              />
              <TechnologyCard 
                title="Backend Development" 
                skills={backendSkills}
                delay={0.4}
              />
              <TechnologyCard 
                title="DevOps & Cloud" 
                skills={devOpsSkills}
                delay={0.6}
              />
            </div>
          </div>
        </section>

        <section id="tech-stack" className="py-16 bg-background/95">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-primary text-lg font-medium mb-2">Tools & Technologies</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">My Tech Stack</h3>
              <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
              {["JavaScript", "TypeScript", "React.js", "Vue.js", "Next.js", "Node.js", "Express.js", "Python", 
                "Django", "Flask", "PostgreSQL", "MongoDB", "GraphQL", "Docker", "Kubernetes", 
                "AWS", "Firebase", "GCP", "CI/CD", "Git", "REST API", "TDD", "Agile", "Scrum"].map((tech, i) => (
                <Badge 
                  key={i} 
                  variant={i % 3 === 0 ? "default" : (i % 3 === 1 ? "secondary" : "outline")}
                  className="text-sm px-3 py-1 transition-all hover:scale-110 hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gradient-to-b from-background/95 to-secondary/50 dark:from-background/95 dark:to-secondary/10">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-primary text-lg font-medium mb-2">Professional Journey</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h3>
              <div className="w-20 h-1 bg-primary mx-auto"></div>
            </div>

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  responsibilities={exp.responsibilities}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section id="cta" className="py-16 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create efficient, scalable, and secure web applications that drive business growth.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FullStackPage;
