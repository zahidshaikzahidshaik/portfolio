export interface TechnicalSkill {
  name: string;
  percentage: number;
}

export interface ToolSkill {
  name: string;
  icon: string;
}

export interface Certification {
  name: string;
}

export const technicalSkills: TechnicalSkill[] = [
  { name: "Python", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "HTML / CSS", percentage: 95 },
  { name: "Next.js", percentage: 80 },
  { name: "PySpark", percentage: 80 },
  { name: "MySQL", percentage: 80 },
  { name: "React.js", percentage: 85 }
];

export const toolSkills: ToolSkill[] = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3-alt" },
  { name: "Python", icon: "python" },
  { name: "PySpark", icon: "apache-spark" },
  { name: "MySQL", icon: "mysql" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "Java", icon: "java" }
];

export const certifications: Certification[] = [
  { name: "Python Programming Internship - MotionCut" },
  { name: "Cloud Computing - NPTEL" },
  { name: "Java Internship - MotionCut" },
  { name: "Machine Learning Internship - Bharat Intern" }
];
