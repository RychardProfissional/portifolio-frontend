"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Instagram,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rychardprofissional",
      name: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:rychard.professional@gmail.com",
      name: "Email",
    },
    {
      icon: Github,
      href: "https://github.com/RychardProfissional",
      name: "GitHub",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/rzd355",
      name: "Instagram",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold tracking-tight">
              Rychard Antony
            </h3>
            <p className="text-muted-foreground max-w-md text-lg">
              Transformando ideias em realidade através de código limpo e design
              intuitivo.
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-6">
            <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Redes Sociais
            </span>
            <div className="flex gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            © {currentYear} Feito com{" "}
            <Heart
              size={14}
              className="text-red-500 fill-red-500 animate-pulse"
            />{" "}
            por Rychard Antony.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group"
          >
            Voltar ao topo
            <ArrowUp
              size={16}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}

export function ProjectFooter() {
  return (
    <footer className="py-8 border-t border-border text-center text-muted-foreground">
      <p>© {new Date().getFullYear()} Rychard Antony</p>
    </footer>
  );
}
