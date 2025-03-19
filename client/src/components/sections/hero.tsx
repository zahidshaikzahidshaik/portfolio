import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble 
} from "react-icons/fa";

export default function HeroSection() {
  const phrases = ["Frontend Developer", "UI/UX Designer", "React Specialist"];
  const { text } = useTypingEffect({ phrases });
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-10 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-6">
              <span className="font-mono">{text}</span>
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse"></span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, and responsive. Focused on creating clean, efficient code that drives user engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg"
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button 
                variant="outline"
                asChild
                className="px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-md transition-colors"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Dribbble"
              >
                <FaDribbble className="text-2xl" />
              </a>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-white dark:bg-slate-900 rounded-full m-1"></div>
              <img 
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="John Doe" 
                className="w-60 h-60 md:w-76 md:h-76 object-cover rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
