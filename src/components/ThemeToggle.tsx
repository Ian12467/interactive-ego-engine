
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // Ensure dark mode specific variables are set when switching to dark
      document.documentElement.style.setProperty('--primary', '266 75% 59%');
      document.documentElement.style.setProperty('--ring', '266 75% 59%');
    } else {
      document.documentElement.classList.remove("dark");
      // Restore the dynamic theme colors when returning to light mode
      // (BackgroundCarousel will handle actual values in its useEffect)
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
  };

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="rounded-full transition-all duration-300 hover:shadow-md"
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 transition-all ${theme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} absolute`} />
      <Moon className={`h-5 w-5 transition-all ${theme === 'light' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'} absolute`} />
    </Button>
  );
}
