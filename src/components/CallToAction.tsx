
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Link as LinkIcon } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary/10 to-purple-400/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to work on something innovative?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's collaborate on your next project and create something amazing together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={(e) => {
                e.preventDefault();
                sessionStorage.setItem("scrollToContact", "true");
                window.location.href = "/";
              }}
            >
              Contact Me
              <ArrowRight className="h-4 w-4" />
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
  );
}
