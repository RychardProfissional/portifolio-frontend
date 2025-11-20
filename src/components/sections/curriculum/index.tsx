"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    year: "2025 - Presente",
    role: "Desenvolvedor Full Stack",
    company: "Fundação MT",
    description:
      "Atuação no desenvolvimento full stack, contribuindo para sistemas internos e aprimorando fluxos operacionais.",
  },
  {
    year: "2024 - 2025",
    role: "Analista de Desenvolvimento Web",
    company: "Mavielo RH",
    description:
      "Responsável pelo levantamento de requisitos, planejamento de entregas e desenvolvimento de soluções web.",
  },
  {
    year: "2024",
    role: "Assistente de Desenvolvimento de Sistemas",
    company: "Mavielo RH",
    description:
      "Manutenção de sistemas existentes, utilizando Go, Next.js e serviços AWS em ambientes de produção.",
  },
  {
    year: "2023 - 2024",
    role: "Auxiliar de Informática",
    company: "Atacadão",
    description:
      "Garantia do funcionamento do sistema interno e resolução de problemas técnicos para colaboradores.",
  },
  {
    year: "2023",
    role: "Agente de Prevenção de Perdas",
    company: "Atacadão",
    description:
      "Implementação de estratégias de segurança, monitoramento de riscos e registro de incidentes.",
  },
  {
    year: "2022 - 2023",
    role: "Repositor de Perecíveis",
    company: "Mundo Novo",
    description:
      "Gestão e reposição de produtos perecíveis, garantindo disponibilidade e organização de estoque.",
  },
];


export default function CurriculumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showPDF, setShowPDF] = useState(false)

  return (
    <section id="experience" ref={ref} className="min-h-screen flex items-center py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-widest uppercase">Trajetória</p>

          <h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 leading-tight tracking-tighter"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Experiência
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Timeline de experiências */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-primary font-semibold mb-2">{exp.year}</p>
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground mb-3">{exp.company}</p>
                  <p className="text-base text-muted-foreground leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Visualizador de currículo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:sticky lg:top-24 h-fit"
            >
              <div className="bg-background border-2 border-border rounded-2xl p-6 md:p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="md:text-2xl font-bold">Currículo Completo</h3>
                    <p className="text-sm text-muted-foreground">Visualize ou baixe meu CV</p>
                  </div>
                </div>
                <div className="space-y-4">        
                  {!showPDF ? (
                    <>        
                      <div
                        className="h-[calc(100vh-350px)] bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer group"
                        onClick={() => setShowPDF(true)}
                      >
                        <div className="text-center">
                          <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <p className="text-lg font-semibold mb-2">Clique para visualizar</p>
                          <p className="text-sm text-muted-foreground">Curriculum Vitae - PDF</p>
                        </div>
                      </div>

                      <div className="flex gap-3 md:flex-row flex-col">
                        <Button onClick={() => setShowPDF(true)} className="flex-1 md:h-12 min-h-10 text-base" size="lg">
                          <FileText className="w-5 h-5 mr-2" />
                          Visualizar
                        </Button>
                        <Button
                          onClick={() => window.open("/pdfs/profile.pdf", "_blank")}
                          variant="outline"
                          className="flex-1 md:h-12 min-h-10 text-base"
                          size="lg"
                        >
                          <Download className="w-5 h-5 mr-2" />
                          Baixar PDF
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between gap-2">
                        <Button onClick={() => setShowPDF(false)} variant="ghost" size="sm">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="h-[calc(100vh-350px)] bg-muted rounded-lg overflow-hidden border-2 border-border">
                        <iframe
                          src="/pdfs/profile.pdf"
                          title="Curriculum Vitae"
                          className="w-full h-full border-none"
                        />
                      </div>

                      <Button
                        onClick={() => window.open("/pdfs/profile.pdf", "_blank")}
                        variant="outline"
                        className="w-full h-12 text-base"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Baixar PDF
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
