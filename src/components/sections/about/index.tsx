"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Heart,
  Gamepad2,
  Calendar,
  Code2,
  Sparkles,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-24 px-4 md:px-6 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-primary/5 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>Sobre Mim</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Desenvolvedor apaixonado por{" "}
              <span className="text-primary">inovação</span> e{" "}
              <span className="text-accent">tecnologia</span>.
            </h2>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Olá! Sou{" "}
                <span className="text-foreground font-semibold">
                  Rychard Antony
                </span>
                , um desenvolvedor de 21 anos que encontrou na programação uma
                forma de dar vida a ideias. Como{" "}
                <span className="text-foreground font-semibold">pai</span>,
                aprendi que paciência e dedicação são chaves para o crescimento
                constante, tanto na vida quanto no código.
              </p>

              <p>
                Atualmente, curso{" "}
                <span className="text-foreground font-semibold">
                  Sistema de Informação
                </span>{" "}
                na UFR e atuo como desenvolvedor na{" "}
                <span className="text-foreground font-semibold">
                  Fundação MT
                </span>
                . Minha jornada é movida pela curiosidade de entender como as
                coisas funcionam e como posso melhorá-las.
              </p>

              <p>
                Acredito no poder da colaboração e do aprendizado contínuo.
                Embora seja introspectivo, valorizo profundamente a troca de
                conhecimentos e o trabalho em equipe para construir soluções que
                impactam positivamente as pessoas.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "21", label: "Anos", icon: Calendar },
                { value: "10+", label: "Projetos", icon: Code2 },
                { value: "∞", label: "Curiosidade", icon: Sparkles },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors text-center group"
                >
                  <div className="mb-2 flex justify-center text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl -z-10" />

            <div className="bg-card/50 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8">Destaques Pessoais</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: GraduationCap,
                    title: "Educação",
                    subtitle: "Sistema de informação na UFR",
                    color: "bg-blue-500/10 text-blue-500",
                  },
                  {
                    icon: Briefcase,
                    title: "Experiência",
                    subtitle: "Desenvolvedor Full Stack @ Fundação MT",
                    color: "bg-emerald-500/10 text-emerald-500",
                  },
                  {
                    icon: Heart,
                    title: "Família",
                    subtitle: "Pai orgulhoso e esposo dedicado",
                    color: "bg-rose-500/10 text-rose-500",
                  },
                  {
                    icon: Gamepad2,
                    title: "Hobbies",
                    subtitle: "Gamer, Tech Enthusiast & Open Source",
                    color: "bg-purple-500/10 text-purple-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.color} group-hover:scale-110 transition-transform`}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
