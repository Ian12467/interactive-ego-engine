
import { Heart, Phone, Mail, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Ian Ochieng' Otieno. All rights reserved.
          </p>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">+254 759 986 632</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <a href="mailto:ianochieng277@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                ianochieng277@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-muted-foreground" />
              <a href="https://www.linkedin.com/in/ian-ochieng-26152b222/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn Profile
              </a>
            </div>
            <p className="flex items-center gap-1 text-muted-foreground mt-4">
              Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Ian Ochieng' Otieno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
