
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  index: number;
}

export function ExperienceCard({ title, company, period, responsibilities, index }: ExperienceCardProps) {
  return (
    <Card className={`shadow-sm border border-border overflow-hidden animate-fadeIn opacity-0`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-muted/50 p-6 flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{period}</span>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <h4 className="text-lg font-semibold mb-4">Key Accomplishments:</h4>
            <ul className="space-y-3">
              {responsibilities.map((responsibility, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
