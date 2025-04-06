
import { useEffect, useRef } from 'react';

interface BackgroundMatrixProps {
  opacity?: number;
}

export function BackgroundMatrix({ opacity = 0.05 }: BackgroundMatrixProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix character set - using binary to enhance cyber theme
    const chars = '01010101';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Position of each column
    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -canvas.height);
    }

    // Draw the matrix effect
    const drawMatrix = () => {
      // Black semi-transparent background to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.04)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set text color to primary theme color with custom opacity
      ctx.fillStyle = `hsla(266, 75%, 49%, ${opacity})`;
      ctx.font = `${fontSize}px monospace`;

      // Loop through each drop
      for (let i = 0; i < drops.length; i++) {
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
    };

    // Animation loop with slightly faster speed for more dynamic effect
    const interval = setInterval(drawMatrix, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [opacity]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-3]"
    />
  );
}
