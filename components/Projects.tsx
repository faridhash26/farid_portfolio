"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, ArrowLeft } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: string;
  link: string;
  github: string;
}

const ProjectCard = ({
  project,
  index,
  isInView,
  isRTL,
  viewProjectText,
}: {
  project: Project;
  index: number;
  isInView: boolean;
  isRTL: boolean;
  viewProjectText: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-2xl overflow-hidden glass border border-border/50 hover:border-primary/30 transition-all duration-500"
    >
      {/* Background Gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity`}
      />

      {/* Content */}
      <div className="relative p-6 md:p-8 flex flex-col h-full min-h-[320px]">
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-mono text-muted-foreground">
            0{index + 1}
          </span>
          <div className="flex gap-2">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View code"
            >
              <Github size={16} />
            </motion.a>
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
              aria-label="View live"
            >
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            x: isHovered ? 0 : isRTL ? 10 : -10,
          }}
          className="flex items-center gap-2 text-primary text-sm font-medium"
        >
          {viewProjectText}{" "}
          {isRTL ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </motion.div>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const projects: Project[] = [
    {
      id: 1,
      title: t("neobank.title"),
      description: t("neobank.desc"),
      tags: ["React", "TypeScript", "D3.js", "Node.js"],
      color: "from-primary/20 to-accent/20",
      link: "#",
      github: "#",
    },
    {
      id: 2,
      title: t("artisan.title"),
      description: t("artisan.desc"),
      tags: ["Next.js", "Three.js", "Stripe", "PostgreSQL"],
      color: "from-accent/20 to-primary/20",
      link: "#",
      github: "#",
    },
    {
      id: 3,
      title: t("synapse.title"),
      description: t("synapse.desc"),
      tags: ["React", "Python", "OpenAI", "FastAPI"],
      color: "from-primary/30 to-transparent",
      link: "#",
      github: "#",
    },
    {
      id: 4,
      title: t("ecotrack.title"),
      description: t("ecotrack.desc"),
      tags: ["React Native", "GraphQL", "MongoDB", "Charts"],
      color: "from-accent/20 to-primary/10",
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding relative">
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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
              isRTL={isRTL}
              viewProjectText={t("viewProject")}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/faridhashemian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full glass border border-border hover:border-primary/50 transition-all hover-lift"
          >
            <Github size={18} />
            {t("viewAll")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
