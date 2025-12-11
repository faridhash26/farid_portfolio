"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLanguage = () => {
    console.log("currentLocale", currentLocale);
    const newLocale = currentLocale === "en" ? "fa" : "en";
    const newPath = `/${newLocale}`;
    router.push(newPath);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={switchLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full glass border border-border/50 hover:border-primary/50 transition-colors text-sm font-medium"
      aria-label="Switch language"
    >
      <Globe size={16} className="text-primary" />
      <span>{currentLocale === "en" ? "فا" : "EN"}</span>
    </motion.button>
  );
};
