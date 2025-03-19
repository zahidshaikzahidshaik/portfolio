export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  liveLink: string;
  githubLink: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure payment integration.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "E-commerce Platform",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["React", "Redux", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Dashboard UI",
    description: "An interactive admin dashboard with real-time data visualization, user management, and dark mode support.",
    image: "https://images.unsplash.com/photo-1493119508027-2b584f234d6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Dashboard UI",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["React", "TypeScript", "ChartJS"]
  },
  {
    id: 3,
    title: "Social Media App",
    description: "A full-featured social media application with real-time chat, post creation, and user authentication.",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Social Media App",
    liveLink: "https://example.com",
    githubLink: "https://github.com",
    tags: ["Next.js", "Firebase", "TailwindCSS"]
  }
];
