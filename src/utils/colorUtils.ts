
/**
 * Simple utility to get a simplified "theme color" from an image URL
 * This uses a predefined color palette instead of actual image processing
 * since client-side image color extraction has performance implications
 */

// Mapping of images to their dominant theme colors (in HSL format)
const imageColorMap: Record<string, string> = {
  "/lovable-uploads/32b9e253-ab1b-425a-bd7f-16ffb967cf91.png": "266 75% 49%", // Purple (default)
  "/lovable-uploads/d3031f0b-d512-4ac6-82e7-feb32c295e9f.png": "210 100% 50%", // Blue
  "/lovable-uploads/86196035-9d98-45d8-945b-e91fa6307a60.png": "340 80% 55%", // Pink/Red
  "/lovable-uploads/890692ba-61cc-4487-b9a7-87fe12f74340.png": "160 60% 45%", // Green
  "/lovable-uploads/35e23ad3-8e62-4423-a75e-8df1dd504c58.png": "30 100% 50%",  // Orange
  "/lovable-uploads/61678bbf-d151-485d-a58b-4c4220243028.png": "270 60% 60%",  // Light Purple
  
  // New UI/UX page images with their dominant theme colors
  "/lovable-uploads/5584903f-40b9-4c50-802c-bfddda0c3cee.png": "330 60% 55%", // Warm Red (coffee workspace)
  "/lovable-uploads/2373305b-3ca2-44bb-b08c-f39fe3198dd1.png": "220 10% 95%", // Light Gray (minimalist)
  "/lovable-uploads/a2c22064-63c0-4448-8e6f-7b4b81e2dda2.png": "210 60% 35%", // Dark Blue (coding)
  "/lovable-uploads/32265a51-f883-4858-bf3c-d6038dd14113.png": "0 0% 98%",     // White (dual monitor setup)
  "/lovable-uploads/608b051f-4f5a-48bb-a9fc-bdc81e98e4ee.png": "310 90% 60%",  // Magenta (purple setup)
  "/lovable-uploads/8546cc4d-e4d1-48cd-ae2d-246269767ad7.png": "0 0% 95%",     // Light Gray (wireframe)
  "/lovable-uploads/3bddd775-efa5-4d27-9755-40f7fd85513e.png": "200 60% 75%",  // Light Blue (mobile design)
  "/lovable-uploads/5c92a430-5bfe-4dc6-86bb-92dec162c2d4.png": "40 80% 60%"    // Golden (tablet)
};

export const getThemeColorFromImage = (imageUrl: string): string => {
  return imageColorMap[imageUrl] || "266 75% 49%"; // Default to purple if image not found
};

// Generate a subtle/muted version of the color for secondary elements
export const getSecondaryColorFromPrimary = (primaryHsl: string): string => {
  const [h, s, l] = primaryHsl.split(' ');
  const hue = parseInt(h);
  return `${hue} 30% 90%`; // Much less saturated, lighter version
};

// Generate an accent color that complements the primary
export const getAccentColorFromPrimary = (primaryHsl: string): string => {
  const [h, s, l] = primaryHsl.split(' ');
  const hue = (parseInt(h) + 180) % 360; // Complementary color
  return `${hue} 80% 60%`;
};
