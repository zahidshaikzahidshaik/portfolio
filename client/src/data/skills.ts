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
  { name: "React.js", percentage: 90 },
  { name: "JavaScript / TypeScript", percentage: 85 },
  { name: "HTML / CSS", percentage: 95 },
  { name: "Next.js", percentage: 80 },
  { name: "Node.js", percentage: 75 }
];

export const toolSkills: ToolSkill[] = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "js" },
  { name: "HTML5", icon: "html5" },
  { name: "CSS3", icon: "css3-alt" },
  { name: "Sass", icon: "sass" },
  { name: "Node.js", icon: "node-js" },
  { name: "Git", icon: "git-alt" },
  { name: "Figma", icon: "figma" }
];

export const certifications: Certification[] = [
  { name: "AWS Certified Developer" },
  { name: "Google UX Design Professional" },
  { name: "Meta Frontend Developer" }
];
