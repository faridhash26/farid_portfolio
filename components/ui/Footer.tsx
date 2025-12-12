"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/faridhashemian", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/faridhashemian",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/faridhashemian",
    label: "Twitter",
  },
];

export const Footer = () => {
  const tNav = useTranslations("nav");
  const tFooter = useTranslations("footer");

  const footerLinks = [
    { label: tNav("about"), href: "#about" },
    { label: tNav("skills"), href: "#skills" },
    { label: tNav("projects"), href: "#projects" },
    { label: tNav("experience"), href: "#experience" },
    { label: tNav("contact"), href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-secondary/20">
      <div className="container-wide px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Description */}
          <div className="text-center md:text-start">
            <a
              href="#"
              className="text-xl font-bold tracking-tight inline-block"
            >
              <span className="text-gradient">Farid</span>
              <span className="text-foreground">Hashemian</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              {tFooter("tagline")}
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Farid Hashemian. {tFooter("rights")}
          </p>
          <p className="flex items-center gap-1">
            {tFooter("madeWith")}{" "}
            <Heart size={14} className="text-primary animate-pulse" />{" "}
            {tFooter("using")}
          </p>
        </div>
      </div>
    </footer>
  );
};
