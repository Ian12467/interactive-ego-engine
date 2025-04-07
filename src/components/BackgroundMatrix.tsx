
import { useEffect, useRef, useState } from 'react';

interface BackgroundMatrixProps {
  opacity?: number;
}

export function BackgroundMatrix({ opacity = 0.08 }: BackgroundMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create intersection observer to only animate when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(canvas);

    // Set canvas to full screen
    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    
    // Throttle resize event for better performance
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 200);
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Matrix animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Matrix character set - using binary to enhance cyber theme
    const chars = '01010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Position of each column - initialize outside the effect
    const drops: number[] = Array(columns).fill(0).map(() => Math.floor(Math.random() * -canvas.height));

    // Set a limit to the number of characters for performance
    const maxCharacters = Math.min(columns, 200); // Limit to 200 columns for performance
    
    // Draw the matrix effect with better performance
    const drawMatrix = () => {
      if (!isVisible) return;
      
      // Black semi-transparent background to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.04)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get current theme color - this uses the CSS variable set by BackgroundCarousel
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue('--primary').trim();
      
      // Set text color to primary theme color with custom opacity
      ctx.fillStyle = `hsla(${primaryColor}, ${opacity})`;
      ctx.font = `${fontSize}px monospace`;

      // Loop through a limited number of drops for better performance
      for (let i = 0; i < maxCharacters; i++) {
        // Choose a random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw the character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        // Reset when off-screen with some randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
          drops[i] = 0;
        }
        
        // Move drops down by one step
        drops[i]++;
      }
      
      // Use requestAnimationFrame for smoother animation
      animationRef.current = requestAnimationFrame(drawMatrix);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(drawMatrix);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-2]"
      aria-hidden="true"
    />
  );
}
