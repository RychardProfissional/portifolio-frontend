"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Icon } from "@iconify/react"

const socialMedias = [
  { icon: "mdi:linkedin", url: "https://linkedin.com/in/rychard-antony", label: "LinkedIn" },
  { icon: "mdi:gmail", url: "mailto:rychard@example.com", label: "Email" },
  { icon: "mdi:github", url: "https://github.com/rychard", label: "GitHub" },
  { icon: "mdi:instagram", url: "https://instagram.com/rychard", label: "Instagram" },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna esquerda - Texto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.p
              className="text-sm md:text-base text-muted-foreground mb-4 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Eu sou
            </motion.p>

            <motion.h1
              className="text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 tracking-tighter"
              style={{ fontFamily: "var(--font-space)" }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="block">Rychard</span>
              <span className="block text-accent">Antony</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Desenvolvedor full-stack apaixonado por automação e experiências digitais simples e inteligentes.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.a
                href="#work"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Trabalhos
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border border-border rounded-full font-medium hover:bg-secondary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar em Contato
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Conecte-se</p>
              <ul className="flex gap-4">
                {socialMedias.map(({ icon, url, label }, index) => (
                  <motion.li
                    key={icon}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <motion.a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300"
                      whileTap={{ scale: 0.9 }}
                      aria-label={label}
                    >
                      <Icon icon={icon} width={24} height={24} className="text-foreground" />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Coluna direita - Foto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <motion.div className="relative" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                {/* Círculo de fundo decorativo */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Container da foto */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-border bg-secondary shadow-2xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-muted-foreground text-xl font-medium">Foto</span>
                  </div>
                  {/* Overlay sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>

                {/* Elemento decorativo flutuante */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-accent/20 blur-xl"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1.5 }}
        >
          <ArrowDown className="text-muted-foreground" size={32} />
        </motion.div>
      </div>
    </section>
  )
}
