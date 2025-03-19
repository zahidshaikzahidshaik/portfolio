import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  href: string;
  label: string;
  isMobile?: boolean;
  onClick?: () => void;
}

const NavItem = ({ href, label, isMobile = false, onClick }: NavItemProps) => {
  return (
    <Link href={href}>
      <a
        className={`${
          isMobile
            ? "py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors w-full block"
            : "menu-item font-medium text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-2px] after:left-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        }`}
        onClick={onClick}
      >
        {label}
      </a>
    </Link>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold flex items-center gap-2">
            <span className="text-primary">John</span>
            <span className="text-slate-800 dark:text-white">Doe</span>
            <span className="text-primary text-xl">{"{"}</span>
            <span className="text-pink-500 text-xl">{"}"}</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavItem href="#home" label="Home" />
          <NavItem href="#about" label="About" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#contact" label="Contact" />

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="ml-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5 text-yellow-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-300" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-md absolute w-full left-0 top-full py-4 px-4"
        >
          <nav className="flex flex-col gap-4">
            <NavItem href="#home" label="Home" isMobile onClick={closeMobileMenu} />
            <NavItem href="#about" label="About" isMobile onClick={closeMobileMenu} />
            <NavItem href="#projects" label="Projects" isMobile onClick={closeMobileMenu} />
            <NavItem href="#skills" label="Skills" isMobile onClick={closeMobileMenu} />
            <NavItem href="#contact" label="Contact" isMobile onClick={closeMobileMenu} />

            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="flex items-center justify-start gap-2 py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors w-full"
            >
              {theme === "light" ? (
                <>
                  <Sun className="h-5 w-5 text-yellow-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="h-5 w-5 text-slate-300" />
                  <span>Dark Mode</span>
                </>
              )}
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
