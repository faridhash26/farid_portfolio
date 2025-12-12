"use client";
import { useTranslations, useLocale } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "fa";

  const contactInfo = [
    {
      icon: Mail,
      label: t("email"),
      value: "hello@faridhashemian",
      href: "mailto:hello@faridhashemian",
    },
    {
      icon: MapPin,
      label: t("location"),
      value: t("locationValue"),
      href: "#",
    },
    {
      icon: Phone,
      label: t("phone"),
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
  ];

  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="section-padding relative">
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
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-4 rounded-xl glass border border-border/50 hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium group-hover:text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
