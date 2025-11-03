"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com painel administrativo, processamento de pagamentos e gestão de inventário.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/modern-ecommerce-dashboard.png",
    link: "/project/1",
  },
  {
    title: "SaaS Dashboard",
    description: "Dashboard analítico para SaaS com visualizações de dados em tempo real e relatórios customizáveis.",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/analytics-dashboard-dark-theme.png",
    link: "/project/1",
  },
  {
    title: "Mobile App Design",
    description: "Design system completo e protótipo interativo para aplicativo mobile de produtividade.",
    tags: ["Figma", "React Native", "Design System"],
    image: "/mobile-app-design-system.jpg",
    link: "/project/1",
  },
  {
    title: "AI Chat Interface",
    description: "Interface conversacional com IA, suportando múltiplos modelos e streaming de respostas.",
    tags: ["Next.js", "OpenAI", "Vercel AI SDK", "Tailwind"],
    image: "/ai-chat-interface-modern.jpg",
    link: "/project/1",
  },
]

export default function PorjectSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="work" ref={ref} className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">Projetos Selecionados</p>
          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Trabalhos
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""}`}>
                <motion.div
                  className={`relative overflow-hidden rounded-2xl aspect-4/3 ${index % 2 === 1 ? "md:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-accent/20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.link}
                      className="px-6 py-3 bg-background text-foreground rounded-full font-medium flex items-center gap-2"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Projeto <ExternalLink size={18} />
                    </motion.a>
                  </motion.div>
                </motion.div>

                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <motion.h3
                    className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tag}
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
  )
}
