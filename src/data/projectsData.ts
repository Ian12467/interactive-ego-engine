
export interface Project {
  id: number;
  title: string;
  description: string;
  category: 'fullstack' | 'security' | 'uiux';
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "LuxeGems Jewelry Store",
    description: "Elegant jewelry e-commerce platform with sophisticated design, product galleries, and secure checkout. Features responsive design and smooth user experience.",
    category: "fullstack",
    image: "/lovable-uploads/35e23ad3-8e62-4423-a75e-8df1dd504c58.png",
    tags: ["React", "E-commerce", "Responsive Design", "UI/UX"],
    live: "https://luxegems.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Hunter's Choice Outdoor Gear",
    description: "Outdoor equipment and hunting gear website with product catalogs, filtering systems, and responsive design optimized for outdoor enthusiasts.",
    category: "fullstack", 
    image: "/lovable-uploads/61678bbf-d151-485d-a58b-4c4220243028.png",
    tags: ["React", "Product Catalog", "Filtering", "Responsive"],
    live: "https://hunterschoice.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce platform with React.js, Django & Stripe payments integration. Features include search & filtering with Elasticsearch, email notifications & order tracking.",
    category: "fullstack",
    image: "/placeholder.svg",
    tags: ["React", "Django", "Stripe", "Elasticsearch"],
    github: "https://github.com",
    live: "https://example.com",
    featured: true
  },
  {
    id: 4,
    title: "Cloud Security Assessment Tool",
    description: "AWS security scanning tool that analyzes IAM policies, S3 bucket permissions, and security groups for vulnerabilities. Implements AWS best practices and NIST framework guidelines.",
    category: "security",
    image: "/placeholder.svg",
    tags: ["AWS", "Python", "IAM", "NIST"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 5,
    title: "Banking App UI Redesign",
    description: "A modern banking application interface designed for simplicity and security with interactive prototypes and user testing results showing 40% improvement in task completion rate.",
    category: "uiux",
    image: "/placeholder.svg",
    tags: ["Figma", "UI Design", "Prototyping", "User Testing"],
    live: "https://figma.com",
    featured: false
  },
  {
    id: 6,
    title: "Financial Management Web App",
    description: "User budgeting tool with OAuth2 authentication for secure sign-in with Google. Features include expense tracking, financial goals, and multi-user role dashboard.",
    category: "fullstack",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "OAuth2", "MongoDB"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 7,
    title: "Network Intrusion Detection System",
    description: "Custom IDS solution that monitors network traffic for suspicious activities using machine learning algorithms to detect anomalies and potential threats.",
    category: "security",
    image: "/placeholder.svg",
    tags: ["Python", "Machine Learning", "Network Security", "Wireshark"],
    github: "https://github.com",
    featured: false
  },
  {
    id: 8,
    title: "Task Management Dashboard",
    description: "A productivity dashboard designed for teams with focus on accessibility and ease of use. Features include Kanban boards, time tracking, and team collaboration tools.",
    category: "uiux",
    image: "/placeholder.svg",
    tags: ["Sketch", "User Flows", "Design System", "Accessibility"],
    live: "https://dribbble.com",
    featured: false
  },
  {
    id: 9,
    title: "Secure File Sharing App",
    description: "File-sharing application with end-to-end encryption, implemented AWS S3 storage with role-based access control, and secure download links with expiration.",
    category: "fullstack",
    image: "/placeholder.svg",
    tags: ["AWS S3", "React", "Node.js", "Encryption"],
    github: "https://github.com",
    featured: false
  }
];
