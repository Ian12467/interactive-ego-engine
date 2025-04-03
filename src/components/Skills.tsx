
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Skill = {
  name: string;
  level: number;
  category: string;
};

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const skills: Skill[] = [
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "React", level: 80, category: "frontend" },
    { name: "TypeScript", level: 75, category: "frontend" },
    { name: "Node.js", level: 70, category: "backend" },
    { name: "Express", level: 65, category: "backend" },
    { name: "MongoDB", level: 60, category: "backend" },
    { name: "SQL", level: 65, category: "backend" },
    { name: "UI Design", level: 75, category: "design" },
    { name: "UX Design", level: 70, category: "design" },
    { name: "Figma", level: 80, category: "design" },
  ];

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

  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const designSkills = skills.filter(skill => skill.category === "design");

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-secondary/50 dark:bg-secondary/10"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-primary text-lg font-medium mb-2">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">What I Can Do</h3>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className={`shadow-sm border border-border ${isVisible ? "animate-fadeIn" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-6 text-center">Frontend Development</h4>
              <div className="space-y-6">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div 
                      className="h-2 w-full bg-secondary rounded-full overflow-hidden progress-bar"
                      style={{ 
                        "--progress-value": `${skill.level}%`,
                        animationDelay: `${0.3 + index * 0.1}s`
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`shadow-sm border border-border ${isVisible ? "animate-fadeIn" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-6 text-center">Backend Development</h4>
              <div className="space-y-6">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div 
                      className="h-2 w-full bg-secondary rounded-full overflow-hidden progress-bar"
                      style={{ 
                        "--progress-value": `${skill.level}%`,
                        animationDelay: `${0.5 + index * 0.1}s`
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className={`shadow-sm border border-border ${isVisible ? "animate-fadeIn" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <CardContent className="p-6">
              <h4 className="text-2xl font-bold mb-6 text-center">Design</h4>
              <div className="space-y-6">
                {designSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div 
                      className="h-2 w-full bg-secondary rounded-full overflow-hidden progress-bar"
                      style={{ 
                        "--progress-value": `${skill.level}%`,
                        animationDelay: `${0.7 + index * 0.1}s`
                      } as React.CSSProperties}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
