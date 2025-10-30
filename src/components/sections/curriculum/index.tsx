"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Download, FileText, X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CurriculumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showPDF, setShowPDF] = useState(false)
  const [zoom, setZoom] = useState(100)

  const experiences = [
    {
      year: "2023 - Presente",
      role: "Senior Full-Stack Developer",
      company: "Tech Innovation Co.",
      description: "Liderando o desenvolvimento de aplicações web escaláveis usando Next.js, TypeScript e Node.js.",
    },
    {
      year: "2021 - 2023",
      role: "Full-Stack Developer",
      company: "Digital Solutions Ltd.",
      description: "Desenvolvimento de sistemas complexos e APIs RESTful, com foco em performance e UX.",
    },
    {
      year: "2019 - 2021",
      role: "Frontend Developer",
      company: "Creative Agency",
      description: "Criação de interfaces modernas e responsivas, trabalhando com React e design systems.",
    },
  ]

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
              <div className="bg-background border-2 border-border rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-bold">Currículo Completo</h3>
                    <p className="text-sm text-muted-foreground">Visualize ou baixe meu CV</p>
                  </div>
                </div>

                {!showPDF ? (
                  <div className="space-y-4">
                    <div
                      className="aspect-3/4 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer group"
                      onClick={() => setShowPDF(true)}
                    >
                      <div className="text-center">
                        <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <p className="text-lg font-semibold mb-2">Clique para visualizar</p>
                        <p className="text-sm text-muted-foreground">Curriculum Vitae - PDF</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={() => setShowPDF(true)} className="flex-1 h-12 text-base" size="lg">
                        <FileText className="w-5 h-5 mr-2" />
                        Visualizar
                      </Button>
                      <Button
                        onClick={() => window.open("/pdfs/profile.pdf", "_blank")}
                        variant="outline"
                        className="flex-1 h-12 text-base"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Button
                          onClick={() => setZoom(Math.max(50, zoom - 10))}
                          variant="outline"
                          size="sm"
                          disabled={zoom <= 50}
                        >
                          <ZoomOut className="w-4 h-4" />
                        </Button>
                        <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
                        <Button
                          onClick={() => setZoom(Math.min(150, zoom + 10))}
                          variant="outline"
                          size="sm"
                          disabled={zoom >= 150}
                        >
                          <ZoomIn className="w-4 h-4" />
                        </Button>
                      </div>
                      <Button onClick={() => setShowPDF(false)} variant="ghost" size="sm">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="aspect-3/4 bg-muted rounded-lg overflow-hidden border-2 border-border">
                      <iframe
                        src="/pdfs/profile.pdf"
                        title="Curriculum Vitae"
                        className="w-full h-full border-none"
                        style={{ transform: `scale(${zoom / 100})`, transformOrigin: "top left" }}
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
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
