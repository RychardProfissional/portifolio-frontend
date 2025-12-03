"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText, X, Briefcase, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    year: "2025 - Presente",
    role: "Desenvolvedor Full Stack",
    company: "Fundação MT",
    description:
      "Atuação no desenvolvimento full stack, contribuindo para sistemas internos e aprimorando fluxos operacionais com foco em performance e escalabilidade.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    year: "2024 - 2025",
    role: "Analista de Desenvolvimento Web",
    company: "Mavielo RH",
    description:
      "Responsável pelo levantamento de requisitos, planejamento de entregas e desenvolvimento de soluções web personalizadas para clientes.",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    year: "2024",
    role: "Assistente de Desenvolvimento",
    company: "Mavielo RH",
    description:
      "Manutenção de sistemas legados e desenvolvimento de novas features utilizando Go e arquitetura serverless.",
    tags: ["Go", "Lambda", "DynamoDB"],
  },
  {
    year: "2023 - 2024",
    role: "Auxiliar de Informática",
    company: "Atacadão",
    description:
      "Suporte técnico, manutenção de hardware e garantia da disponibilidade dos sistemas operacionais da loja.",
    tags: ["Suporte", "Redes", "Hardware"],
  },
  {
    year: "2023",
    role: "Agente de Prevenção de Perdas",
    company: "Atacadão",
    description:
      "Implementação de estratégias de segurança, monitoramento de riscos e registro de incidentes.",
    tags: [],
  },
  {
    year: "2022 - 2023",
    role: "Repositor de Perecíveis",
    company: "Mundo Novo",
    description:
      "Gestão e reposição de produtos perecíveis, garantindo disponibilidade e organização de estoque.",
    tags: [],
  },
];

export default function CurriculumSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPDF, setShowPDF] = useState(false);

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-24 px-6 bg-muted/20 relative"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-medium text-primary tracking-widest uppercase mb-4 block">
            Minha Jornada
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Experiência Profissional
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Uma linha do tempo das minhas conquistas e aprendizados ao longo da
            carreira.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Timeline Column */}
          <div className="lg:col-span-7 space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-4 bottom-4 w-px bg-border hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative md:pl-24 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[26px] top-1 w-3 h-3 rounded-full bg-background border-2 border-primary z-10 group-hover:scale-125 transition-transform duration-300 hidden md:block" />

                {/* Content Card */}
                <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium flex items-center gap-2">
                      <Calendar size={14} />
                      {exp.year}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase size={14} />
                      {exp.company}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CV Download Column */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="sticky top-24"
            >
              <div className="rounded-3xl bg-linear-to-br from-primary/5 to-accent/5 border border-border p-8 text-center">
                <div className="w-20 h-20 mx-auto bg-background rounded-2xl flex items-center justify-center shadow-sm mb-6">
                  <FileText className="w-10 h-10 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-2">Currículo Completo</h3>
                <p className="text-muted-foreground mb-8">
                  Baixe meu CV para ver detalhes completos sobre minha formação
                  e skills.
                </p>

                {!showPDF ? (
                  <div className="space-y-4">
                    <Button
                      onClick={() => setShowPDF(true)}
                      className="w-full h-12 text-base font-medium rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Visualizar PDF
                    </Button>
                    <Button
                      onClick={() => window.open("/pdfs/profile.pdf", "_blank")}
                      variant="outline"
                      className="w-full h-12 text-base font-medium rounded-xl hover:bg-background/80"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Baixar Arquivo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                    <div className="flex justify-end">
                      <Button
                        onClick={() => setShowPDF(false)}
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                    <div className="aspect-3/4 w-full bg-white rounded-xl overflow-hidden border border-border shadow-inner">
                      <iframe
                        src="/pdfs/profile.pdf"
                        className="w-full h-full"
                        title="CV Preview"
                      />
                    </div>
                    <Button
                      onClick={() => window.open("/pdfs/profile.pdf", "_blank")}
                      className="w-full h-12 rounded-xl"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Abrir em nova aba
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
