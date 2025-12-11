"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("experience");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const experiences = [
    {
      type: "work" as const,
      title: t("senior.title"),
      company: t("senior.company"),
      period: t("senior.period"),
      description: t("senior.desc"),
      technologies: ["React", "TypeScript", "GraphQL", "AWS"],
    },
    {
      type: "work" as const,
      title: t("fullstack.title"),
      company: t("fullstack.company"),
      period: t("fullstack.period"),
      description: t("fullstack.desc"),
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      type: "work" as const,
      title: t("frontend.title"),
      company: t("frontend.company"),
      period: t("frontend.period"),
      description: t("frontend.desc"),
      technologies: ["React", "Vue.js", "SCSS", "WordPress"],
    },
    {
      type: "education" as const,
      title: t("education.title"),
      company: t("education.company"),
      period: t("education.period"),
      description: t("education.desc"),
      technologies: ["Algorithms", "Data Structures", "HCI", "Web Development"],
    },
  ];

  return (
    <section
      id="experience"
      className="section-padding relative bg-secondary/30"
    >
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            {t("title")}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            {t("heading1")}{" "}
            <span className="text-gradient">{t("heading2")}</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line - Always centered */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px z-0 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex md:block mb-12 last:mb-0"
            >
              {/* Timeline Dot - Always centered on mobile, adjusted on desktop */}
              <div className="absolute left-4 top-2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10 glow-sm md:left-1/2 md:-translate-x-1/2 md:mt-2" />

              {/* Content */}
              <div
                className={`mt-8 md:mt-0 ${
                  index % 2 === 0
                    ? isRTL
                      ? "md:mr-[52%] md:pr-12"
                      : "md:ml-[52%] md:pl-12"
                    : isRTL
                    ? "md:ml-[52%] md:pl-12"
                    : "md:mr-[52%] md:pr-12"
                }`}
              >
                <div className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all hover-lift group">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {exp.type === "work" ? (
                        <Briefcase size={18} />
                      ) : (
                        <GraduationCap size={18} />
                      )}
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-3">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs font-medium rounded bg-secondary/80 text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
