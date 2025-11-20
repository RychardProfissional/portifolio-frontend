"use client"

import { JSX, useState } from "react"
import { motion } from "framer-motion"
import {
  Code,
  FileCode,
  FileJson,
  Boxes,
  ServerCog,
  Cpu,
  Globe,
  Terminal,
  Github,
  GitBranch,
  Layers,
  Database,
  Settings,
  FileType,
} from "lucide-react"

/**
 * SkillsSection — Versão portfolio premium
 * - animação on-scroll (whileInView)
 * - glass cards
 * - barra de nível animada
 * - cores por categoria
 * - tooltips com descrição de impacto por tecnologia
 * - ícones reais (lucide-react)
 */

/* ---------- mapa de ícones ---------- */
const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <FileJson size={18} />,
  TypeScript: <FileCode size={18} />,
  PHP: <Code size={18} />,
  C: <Cpu size={18} />,
  Go: <Settings size={18} />,

  React: <Layers size={18} />,
  "Next.js": <Globe size={18} />,
  "Tailwind CSS": <FileType size={18} />,

  "Node.js": <ServerCog size={18} />,
  Laravel: <Database size={18} />,
  Express: <ServerCog size={18} />,
  "API REST": <Boxes size={18} />,

  Docker: <Boxes size={18} />,
  Linux: <Terminal size={18} />,
  Nginx: <Globe size={18} />,
  Git: <GitBranch size={18} />,
  GitHub: <Github size={18} />,
  "Git Flow": <GitBranch size={18} />,
}

/* ---------- descrições (criadas para vender/impacto) ---------- */
const techDescriptions: Record<string, string> = {
  JavaScript: "Base para interfaces interativas e aplicações web ricas.",
  TypeScript: "Tipagem que reduz bugs em produção e melhora manutenção.",
  React: "Biblioteca para construir UIs escaláveis e responsivas rapidamente.",
  "Next.js": "Framework para SSR/SSG e rotas otimizadas para SEO e performance.",
  "Tailwind CSS": "Utilitários que aceleram desenvolvimento com design consistente.",

  "Node.js": "Execução de backend com alta produtividade e ecossistema maduro.",
  Go: "APIs de alta performance e baixo uso de recursos em produção.",
  PHP: "Linguagem madura para sistemas legados e integrações rápidas.",
  Laravel: "Framework PHP com foco em produtividade e boas práticas.",
  "API REST": "Design de APIs robustas para integração entre serviços.",
  Express: "Servidor minimalista e eficiente para microservices e APIs.",

  Docker: "Padroniza ambiente e reduz problemas de deploy entre ambientes.",
  Linux: "Administração de servidores e automações em produção.",
  Nginx: "Servidor leve e eficiente para proxys e entrega estática.",
  Git: "Fluxo de versionamento essencial para colaboração segura.",
  GitHub: "Plataforma de colaboração, CI/CD e revisão de código.",
  "Git Flow": "Estratégia de branches para releases previsíveis e seguras.",

  C: "Linguagem de baixo nível para tarefas críticas e performance.",
}

/* ---------- categorias e cores ---------- */
const skillCategories = [
  {
    title: "Frontend",
    level: "Avançado",
    score: 3,
    color: "from-indigo-500 to-violet-500",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    level: "Especialista",
    score: 5,
    color: "from-emerald-500 to-teal-400",
    skills: ["Node.js", "Go", "PHP", "Laravel", "API REST", "Express"],
  },
  {
    title: "DevOps & Tools",
    level: "Avançado",
    score: 4,
    color: "from-orange-400 to-amber-400",
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub", "Git Flow"],
  },
  {
    title: "Linguagens",
    level: "Avançado",
    score: 4,
    color: "from-sky-500 to-cyan-400",
    skills: ["JavaScript", "Go", "C", "PHP", "TypeScript"],
  },
]

/* ---------- componente para nível visual (barra animada) ---------- */
function SkillLevel({ score, color }: { score: number; color: string }) {
  const width = `${(score / 5) * 100}%`
  return (
    <div className="w-full">
      <div className="h-2 bg-border rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
      <div className="mt-2 text-xs text-muted-foreground flex justify-between">
        <span>Nível</span>
        <span>{Math.round((score / 5) * 100)}%</span>
      </div>
    </div>
  )
}

/* ---------- cartão de tecnologia (grid) com tooltip ---------- */
function TechCard({ tech, categoryColor }: { tech: string; categoryColor: string }) {
  const icon = skillIcons[tech]
  const description = techDescriptions[tech] ?? "Tecnologia usada em projetos modernos."

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative p-4 rounded-xl border border-border bg-background/50 backdrop-blur-sm hover:shadow-xl transition-all"
    >
      {/* linha inferior colorida sutil */}
      <div className={`absolute bottom-0 left-0 h-[3px] w-full rounded-b ${categoryColor}`} />

      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 rounded-md flex items-center justify-center bg-transparent">
          {icon ?? <span className="font-semibold text-sm">{tech.slice(0, 2).toUpperCase()}</span>}
        </div>

        <div className="text-center">
          <div className="text-xs font-medium text-foreground">{tech}</div>

          {/* tooltip — aparece ao hover (via group) */}
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            whileHover={{ opacity: 1, y: 0, scale: 1 }}
            whileTap={{ scale: 0.99 }}
            className="pointer-events-none absolute z-30 left-1/2 -translate-x-1/2 bottom-full mb-3 w-[260px]"
          >
            <div className="px-3 py-2 rounded-md text-xs text-muted-foreground bg-card/90 border border-border shadow-sm">
              {description}
            </div>
            <div className="h-2 w-full flex justify-center">
              <div className="h-2 w-2 rotate-45 bg-card/90 border-l border-t border-border -mt-1" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

/* ---------- componente principal ---------- */
export default function SkillsSection() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null)

  const allTechs = Array.from(new Set(skillCategories.flatMap((c) => c.skills)))

  return (
    <section id="skills" className="w-full py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Skills & Competências</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tecnologias aplicadas em projetos reais — foco em entrega, performance e escalabilidade.
            </p>
          </div>
        </motion.div>

        {/* Categories (cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="rounded-2xl p-6 bg-card/40 border border-border backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                  <p className="text-xs mt-1 text-muted-foreground">{category.level}</p>
                </div>

                <div className="text-sm font-medium text-muted-foreground">
                  {/* score convertido para % apenas visual */}
                  {Math.round((category.score / 5) * 100)}%
                </div>
              </div>

              <div className="mb-4">
                <SkillLevel score={category.score} color={category.color} />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((s) => (
                  <motion.button
                    key={s}
                    onMouseEnter={() => setActiveTooltip(s)}
                    onMouseLeave={() => setActiveTooltip(null)}
                    onFocus={() => setActiveTooltip(s)}
                    onBlur={() => setActiveTooltip(null)}
                    type="button"
                    className="flex items-center gap-2 px-3 py-1 rounded-md text-xs bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors shadow-sm"
                  >
                    <span className="h-4 w-4 flex items-center justify-center">
                      {skillIcons[s] ?? <span className="text-[10px] font-semibold">{s.slice(0, 2).toUpperCase()}</span>}
                    </span>
                    {s}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stack Geral — grid com tooltips de descrição e cores por categoria */}
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 rounded-2xl border border-border bg-card/30 backdrop-blur-md shadow-md">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">Stack Geral</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {allTechs.map((tech) => {
              // encontra a categoria que contém a tech para aplicar cor
              const cat = skillCategories.find((c) => c.skills.includes(tech))
              const color = cat?.color ?? "from-gray-400 to-gray-400"

              return (
                <div key={tech} className="relative group">
                  <motion.div
                    whileHover={{ translateY: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className={`p-4 rounded-lg border border-border bg-background/60 hover:bg-background transition-all cursor-pointer flex flex-col items-center gap-2`}
                    aria-describedby={`${tech}-desc`}
                  >
                    <div className={`h-10 w-10 flex items-center justify-center rounded-md`}>
                      {skillIcons[tech] ?? <span className="font-semibold text-sm">{tech.slice(0, 2).toUpperCase()}</span>}
                    </div>

                    <div className="text-xs text-center text-muted-foreground">{tech}</div>

                    {/* linha sutil colorida */}
                    <div className={`absolute -bottom-1 left-2 right-2 h-[3px] rounded ${color}`} />
                  </motion.div>

                  {/* tooltip visível no hover/focus */}
                  <motion.div
                    id={`${tech}-desc`}
                    initial={{ opacity: 0, y: 6 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="pointer-events-none absolute z-40 left-1/2 -translate-x-1/2 -top-20 w-64"
                  >
                    <div className="px-3 py-2 rounded-md bg-card/95 border border-border text-xs text-muted-foreground shadow">
                      {techDescriptions[tech] ?? "Tecnologia usada em projetos modernos."}
                    </div>
                    <div className="flex justify-center">
                      <div className="w-3 h-3 rotate-45 bg-card/95 border-l border-t border-border -mt-1" />
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
