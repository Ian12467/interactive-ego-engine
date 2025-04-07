
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Full Stack", href: "/fullstack" },
    { name: "Security", href: "/security" },
    { name: "UI/UX", href: "/uiux" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: location.pathname === "/" ? "/#contact" : "//#contact" }
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path.startsWith("/#") && location.pathname === "/") return true;
    if (path !== "/" && !path.startsWith("/#") && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#contact")) {
      e.preventDefault();
      
      // If we're already on the home page, just scroll to the contact section
      if (location.pathname === "/") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If we're on another page, navigate to home and then to contact section
        // Store a flag in sessionStorage to scroll to contact after navigation
        sessionStorage.setItem("scrollToContact", "true");
        window.location.href = "/";
      }
    }
  };

  // Handle scrolling to contact after navigation
  useEffect(() => {
    const shouldScrollToContact = sessionStorage.getItem("scrollToContact") === "true";
    if (shouldScrollToContact && location.pathname === "/") {
      sessionStorage.removeItem("scrollToContact");
      
      // Need to wait for the DOM to be fully loaded
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">Portfolio</Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href}
                  onClick={(e) => item.href.includes("#contact") && handleContactClick(e, item.href)}
                  className={`transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                    isActive(item.href) 
                      ? "text-primary after:w-full" 
                      : "text-foreground/80 hover:text-primary after:w-0 hover:after:w-full"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 bg-background/95 backdrop-blur-md">
          <nav className="container">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    onClick={(e) => item.href.includes("#contact") && handleContactClick(e, item.href)}
                    className={`block py-2 transition-colors ${
                      isActive(item.href) 
                        ? "text-primary font-medium" 
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
