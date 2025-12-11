"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

const FloatingShape = ({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay }}
    className={className}
  />
);

export const Hero = () => {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "fa";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingShape
          delay={0.2}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob"
        />
        <FloatingShape
          delay={0.4}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob animation-delay-2000"
        />
        <FloatingShape
          delay={0.6}
          className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob animation-delay-4000"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      </div>

      <div className="relative z-10 container-narrow px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full glass border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t("available")}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block">{t("creative")}</span>
          <span className="text-gradient-animate">{t("developer")}</span>
          <span className="block">{t("designer")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 text-base font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow hover:glow flex items-center gap-2"
          >
            {t("viewWork")}
            <motion.span
              animate={{ x: isRTL ? [-4, 0, -4] : [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {isRTL ? "←" : "→"}
            </motion.span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 text-base font-semibold rounded-full glass border border-border hover:border-primary/50 transition-all hover-lift"
          >
            {t("getInTouch")}
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/faridhashemian",
              label: "GitHub",
            },
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
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full glass border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            {t("scroll")}
          </span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
};
