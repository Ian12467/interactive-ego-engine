
import { Heart, Phone, Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-secondary/50 dark:bg-secondary/10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-4 inline-block">Portfolio</Link>
            <p className="text-muted-foreground mb-4">
              Information Security Specialist with proven experience in designing, implementing, and managing comprehensive security 
              solutions to protect organizational IT infrastructure.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/fullstack" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
                  Cloud & Network Security
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+254 759 986 632</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:ianochieng277@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  ianochieng277@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-primary" />
                <a href="https://www.linkedin.com/in/ian-ochieng-26152b222/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-primary" />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Ian Ochieng' Otieno. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/ian-ochieng-26152b222/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:ianochieng277@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="flex items-center gap-1 text-muted-foreground mt-4 md:mt-0">
              Built with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Ian Ochieng' Otieno
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
