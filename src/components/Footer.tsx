
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} My Portfolio. All rights reserved.
          </p>
          
          <p className="flex items-center gap-1 text-muted-foreground">
            Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by John Developer
          </p>
        </div>
      </div>
    </footer>
  );
}
