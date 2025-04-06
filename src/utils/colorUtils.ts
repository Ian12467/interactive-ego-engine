
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
  "/lovable-uploads/61678bbf-d151-485d-a58b-4c4220243028.png": "270 60% 60%"   // Light Purple
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
