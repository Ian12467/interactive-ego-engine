
import { useEffect, useRef, useState } from 'react';

export function ProjectsMatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const FPS = 15; // Lower FPS for better performance
  const frameTime = 1000 / FPS;

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
      { threshold: 0.1, rootMargin: "200px" }
    );
    
    observer.observe(canvas);

    // Set canvas size with performance considerations
    const resizeCanvas = () => {
      if (!canvas) return;
      
      // Use a lower resolution for performance
      const dpr = window.devicePixelRatio || 1;
      const scaleFactor = Math.min(1, 1 / dpr); // Scale down for high DPI screens
      
      canvas.width = window.innerWidth * scaleFactor;
      canvas.height = window.innerHeight * scaleFactor;
      
      // Set display size (css pixels)
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
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

  // Matrix animation effect with performance optimizations
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Matrix character set - minimal set for performance
    const chars = '01';
    const fontSize = 12; // Smaller font size for performance
    const columns = Math.floor(canvas.width / fontSize);
    
    // Limit columns to improve performance
    const maxColumns = Math.min(columns, 100);
    
    // Position of each column - initialize outside the effect
    const drops: number[] = Array(maxColumns).fill(0).map(() => Math.floor(Math.random() * -canvas.height / fontSize));

    // Draw the matrix effect with performance optimization
    const drawMatrix = (timestamp: number) => {
      if (!isVisible) {
        animationRef.current = requestAnimationFrame(drawMatrix);
        return;
      }
      
      // Throttle frame rate for better performance
      const elapsed = timestamp - lastTimeRef.current;
      if (elapsed < frameTime) {
        animationRef.current = requestAnimationFrame(drawMatrix);
        return;
      }
      
      lastTimeRef.current = timestamp - (elapsed % frameTime);
      
      // Black semi-transparent background to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Get current theme color
      const computedStyle = getComputedStyle(document.documentElement);
      const primaryColor = computedStyle.getPropertyValue('--primary').trim() || '#9b87f5';
      
      // Set text color to primary theme color with custom opacity
      ctx.fillStyle = primaryColor ? `${primaryColor}20` : 'rgba(155, 135, 245, 0.15)';
      ctx.font = `${fontSize}px monospace`;

      // Loop through drops with reduced iterations
      for (let i = 0; i < maxColumns; i++) {
        // Only update every other frame for further optimization
        if (timestamp % 2 === 0) {
          const char = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }
        
        // Reset when off-screen with reduced probability (performance)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        
        // Move drops down by one step (slower rate)
        if (timestamp % 3 === 0) {
          drops[i]++;
        }
      }
      
      // Request next frame
      animationRef.current = requestAnimationFrame(drawMatrix);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(drawMatrix);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-3] opacity-30"
      aria-hidden="true"
    />
  );
}
