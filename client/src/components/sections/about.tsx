import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-slate-100 dark:bg-slate-800/50"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative h-96 w-full md:w-[90%] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Working at computer" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30"></div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              I'm a passionate frontend developer with 5+ years of experience in developing modern and responsive web applications. My specialty lies in React.js, Next.js, Apache Spark, MySQL, HTML/CSS, Python and modern CSS frameworks such as Tailwind CSS.
            </p>
            
            <p className="text-slate-700 dark:text-slate-300 mb-6">
              My web development career began with an interest in user interfaces and interactive experiences. I've collaborated with clients from startups to large corporations, assisting them in creating digital products that users enjoy.
            </p>
            
            <div className="mb-8">
              <h3 className="font-bold text-primary mb-2">Education</h3>
              <p className="text-slate-700 dark:text-slate-300">Bachelor of Technology (B.Tech)</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Computer Science Engineering</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Jawaharlal Nehru Technological University Anantapur</p>
            </div>
            
            <Button 
              asChild
              className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
