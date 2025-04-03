
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
}

interface TechnologyCardProps {
  title: string;
  skills: Skill[];
  delay: number;
}

export function TechnologyCard({ title, skills, delay }: TechnologyCardProps) {
  return (
    <Card className={`shadow-sm border border-border animate-fadeIn opacity-0`} style={{ animationDelay: `${delay}s` }}>
      <CardContent className="p-6">
        <h4 className="text-2xl font-bold mb-6 text-center">{title}</h4>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <div 
                className="h-2 w-full bg-secondary rounded-full overflow-hidden progress-bar"
                style={{ 
                  "--progress-value": `${skill.level}%`,
                  animationDelay: `${delay + index * 0.1}s`
                } as React.CSSProperties}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
