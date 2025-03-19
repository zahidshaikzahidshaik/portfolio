import { Link } from "wouter";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaDribbble, 
  FaHeart 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/">
              <div className="text-2xl font-bold flex items-center gap-2 cursor-pointer">
                <span className="text-primary">Shaik</span>
                <span className="text-white">Zahid Hussain</span>
                <span className="text-primary text-xl">{"{"}</span>
                <span className="text-pink-500 text-xl">{"}"}</span>
              </div>
            </Link>
            <p className="text-slate-400 mt-2 max-w-md">
              Creating exceptional digital experiences through clean, efficient code and thoughtful design.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 justify-center">
            <a 
              href="#home" 
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-slate-300 hover:text-primary transition-colors"
            >
              About
            </a>
            <a 
              href="#projects" 
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a 
              href="#contact" 
              className="text-slate-300 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="flex gap-4">
            <a 
              href="https://github.com/shaikzahidhussain" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-300 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/shaikzahidhussain" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-300 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400">&copy; {new Date().getFullYear()} Shaik Zahid Hussain. All rights reserved.</p>
          <p className="text-slate-400 mt-4 md:mt-0 flex items-center gap-1">
            Made with <FaHeart className="text-red-500" /> and React.js
          </p>
        </div>
      </div>
    </footer>
  );
}
