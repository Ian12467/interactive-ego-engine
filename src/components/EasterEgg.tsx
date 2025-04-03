
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function EasterEgg() {
  const [isActive, setIsActive] = useState(false);
  const [secretCode, setSecretCode] = useState<string[]>([]);
  const targetCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newCode = [...secretCode, e.key];
      setSecretCode(newCode.slice(-10)); // Keep only the last 10 keypresses
    };
    
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [secretCode]);
  
  useEffect(() => {
    if (secretCode.length === 10 && secretCode.every((key, i) => key === targetCode[i])) {
      setIsActive(true);
    }
  }, [secretCode]);
  
  if (!isActive) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-scale">
      <Button 
        className="group rounded-full w-12 h-12 shadow-glow"
        onClick={() => {
          document.documentElement.classList.toggle("rainbow-mode");
          // Apply rainbow mode styles
          document.body.style.transition = "all 0.5s";
          document.body.style.filter = document.body.style.filter ? "" : "hue-rotate(360deg)";
          document.body.style.animationDuration = "5s";
          document.body.style.animationName = document.body.style.animationName ? "" : "hue-rotate";
        }}
      >
        <Sparkles className="h-5 w-5 group-hover:animate-pulse" />
      </Button>
    </div>
  );
}
