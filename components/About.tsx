"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Zap, Heart, Sparkles } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const stats = [
    { value: "5+", label: t("yearsExp") },
    { value: "50+", label: t("projects") },
    { value: "30+", label: t("clients") },
    { value: "100%", label: t("dedication") },
  ];

  const highlights = [
    {
      icon: Code2,
      title: t("cleanCode"),
      description: t("cleanCodeDesc"),
    },
    {
      icon: Palette,
      title: t("designThinking"),
      description: t("designThinkingDesc"),
    },
    {
      icon: Zap,
      title: t("fastDelivery"),
      description: t("fastDeliveryDesc"),
    },
    {
      icon: Heart,
      title: t("passionDriven"),
      description: t("passionDrivenDesc"),
    },
  ];

  return (
    <section id="about" className="section-padding relative">
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
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative rotated glow background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rotate-6 animate-pulse-glow" />

              {/* Main decorative frame */}
              <div className="absolute inset-0 rounded-3xl glass border border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

                {/* ✅ عکس مستقیم در فضای داخلی — بدون دایره اضافه */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute inset-4 rounded-2xl overflow-hidden"
                >
                  {/* Optional semi-transparent overlay for better text contrast (if needed later) */}
                  {/* <div className="absolute inset-0 bg-black/5" /> */}

                  <Image
                    src="/profile.jpeg"
                    alt={t("name")}
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("p1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("p2")}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-colors group"
                >
                  <item.icon
                    className={`w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform ${
                      isRTL ? "mr-auto" : "ml-0"
                    }`}
                  />
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
