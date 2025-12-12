"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#skills", label: t("skills") },
    { href: "#projects", label: t("projects") },
    { href: "#experience", label: t("experience") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-strong py-3" : "py-5"
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-4 md:px-8">
        <motion.a
          href="#"
          className="text-xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">F</span>
          <span className="text-foreground">arid.dev</span>
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
              >
                {link.label}
                <span
                  className={`absolute bottom-0 ${
                    isRTL
                      ? "right-1/2 translate-x-1/2"
                      : "left-1/2 -translate-x-1/2"
                  } w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}
                />
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinks.length * 0.1 }}
            className={isRTL ? "mr-4" : "ml-4"}
          >
            <LanguageSwitcher />
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navLinks.length + 1) * 0.1 }}
          >
            <a
              href="/faridhashemain_resume.pdf"
              download="faridhashemain_resume.pdf"
              className={`${
                isRTL ? "mr-2" : "ml-2"
              } px-5 py-2.5 text-sm font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-sm hover:glow`}
            >
              {t("resumeDownload")}
            </a>
          </motion.li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-strong border-t border-border/50"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-2 px-4 py-3 text-center font-semibold rounded-full bg-primary text-primary-foreground"
                >
                  {t("letsTalk")}
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
