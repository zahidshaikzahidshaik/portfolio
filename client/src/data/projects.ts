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
    title: "Weather Application",
    description: "A dynamic weather app built with Python that provides real-time weather data, forecasts, and weather alerts for any location.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Weather Application",
    liveLink: "https://example.com/weather-app",
    githubLink: "https://github.com/shaikzahidhussain/weather-app",
    tags: ["Python", "Weather API", "Data Visualization"]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "A fully responsive e-commerce platform with product filtering, shopping cart functionality, and secure payment integration.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "E-commerce Platform",
    liveLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/shaikzahidhussain/ecommerce-platform",
    tags: ["JavaScript", "React", "TailwindCSS"]
  },
  {
    id: 3,
    title: "E-commerce Sales Analysis",
    description: "A data analysis project using PySpark to analyze and visualize e-commerce sales patterns, customer behavior, and inventory management.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "E-commerce Sales Analysis",
    liveLink: "https://example.com/sales-analysis",
    githubLink: "https://github.com/shaikzahidhussain/ecommerce-analysis",
    tags: ["PySpark", "Data Analysis", "Visualization"]
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    description: "An AI-powered movie recommendation system that suggests films based on user preferences and viewing history using machine learning algorithms.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Movie Recommendation System",
    liveLink: "https://example.com/movie-recommendations",
    githubLink: "https://github.com/shaikzahidhussain/movie-recommendations",
    tags: ["Python", "Machine Learning", "Data Science"]
  }
];
