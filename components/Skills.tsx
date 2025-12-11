"use client";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SkillBar = ({
  skill,
  index,
  isInView,
}: {
  skill: { name: string; level: number; icon: string };
  index: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1,
            delay: 0.3 + index * 0.1,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("skills");

  const skillCategories = [
    {
      title: t("frontend"),
      skills: [
        { name: "React / Next.js", level: 95, icon: "⚛️" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "TailwindCSS", level: 95, icon: "🎨" },
        { name: "Framer Motion", level: 85, icon: "✨" },
      ],
    },
    {
      title: t("backend"),
      skills: [
        { name: "Laravel", level: 90, icon: "🟢" },
        { name: "mysql", level: 85, icon: "🐘" },
        { name: "GraphQL", level: 80, icon: "◈" },
        { name: "REST APIs", level: 92, icon: "🔌" },
      ],
    },
    {
      title: t("tools"),
      skills: [
        { name: "Git / GitHub", level: 95, icon: "📦" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "Figma", level: 85, icon: "🎯" },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="container-wide" ref={ref}>
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
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-all hover-lift"
            >
              <h3 className="text-lg font-semibold mb-6 pb-4 border-b border-border/50">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
