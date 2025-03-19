import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Progress } from "@/components/ui/progress";
import { 
  technicalSkills, 
  toolSkills, 
  certifications 
} from "@/data/skills";
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaSass, 
  FaNodeJs, 
  FaGitAlt, 
  FaFigma,
  FaCertificate
} from "react-icons/fa";

// Map of tool names to their respective icons
const toolIcons: Record<string, JSX.Element> = {
  "React": <FaReact className="text-4xl text-blue-500" />,
  "JavaScript": <FaJs className="text-4xl text-yellow-500" />,
  "HTML5": <FaHtml5 className="text-4xl text-orange-500" />,
  "CSS3": <FaCss3Alt className="text-4xl text-blue-500" />,
  "Sass": <FaSass className="text-4xl text-pink-500" />,
  "Node.js": <FaNodeJs className="text-4xl text-green-600" />,
  "Git": <FaGitAlt className="text-4xl text-orange-600" />,
  "Figma": <FaFigma className="text-4xl text-purple-500" />
};

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  // States for animated progress bars
  const [progressValues, setProgressValues] = useState<number[]>(
    Array(technicalSkills.length).fill(0)
  );
  
  // Animate progress bars when section is visible
  useEffect(() => {
    if (isVisible) {
      const timeouts = technicalSkills.map((skill, index) => {
        return setTimeout(() => {
          setProgressValues(prev => {
            const newValues = [...prev];
            newValues[index] = skill.percentage;
            return newValues;
          });
        }, index * 200);
      });
      
      return () => {
        timeouts.forEach(timeout => clearTimeout(timeout));
      };
    }
  }, [isVisible]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-slate-800/50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies in the web development world. Here's a glimpse of my technical expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{progressValues[index]}%</span>
                  </div>
                  <Progress value={progressValues[index]} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6">Technologies & Tools</h3>
              
              <motion.div 
                className="grid grid-cols-3 sm:grid-cols-4 gap-4"
                variants={container}
                initial="hidden"
                animate={isVisible ? "show" : "hidden"}
              >
                {toolSkills.map((tool, index) => (
                  <motion.div 
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    variants={item}
                  >
                    {toolIcons[tool.name]}
                    <span className="text-center text-sm mt-2">{tool.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCertificate className="text-yellow-500" />
                    <span>{cert.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
