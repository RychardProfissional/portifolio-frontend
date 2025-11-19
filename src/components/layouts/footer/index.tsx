"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/rychardprofissional", name: "LinkedIn" },
    { icon: Mail, href: "mailto:rychard.professional@gmail.com", name: "Email" },
    { icon: Github, href: "https://github.com/RychardProfissional", name: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/rzd355", name: "Instagram" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto py-12">
        <div className="flex md:flex-row flex-col md:p-0 p-6 justify-between gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <motion.h3
              className="text-3xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Rychard
            </motion.h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desenvolvedor Full Stack criando experiências digitais memoráveis e inovadoras.
            </p>
          </div>


          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Conecte-se</h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            © {currentYear} Rychard Antony. Feito com <Heart size={14} className="text-accent fill-accent" /> e muito
            café.
          </p>
          <p className="text-xs text-muted-foreground">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export function ProjectFooter() {
  return (
    <footer>
      Project footer
    </footer>
  )
}