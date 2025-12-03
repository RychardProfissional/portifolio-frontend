"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight, Github } from "lucide-react";
import { Project } from "@prisma/client";
import Link from "next/link";

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="work"
      className="relative w-full py-20 md:py-32 px-4 md:px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto" ref={containerRef}>
        {loading ? (
          <div className="py-20 text-center">Loading projects...</div>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-24 text-center"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Portfolio
              </span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/60">
                Projetos Selecionados
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Uma coleção de trabalhos que demonstram minha paixão por criar
                experiências digitais excepcionais.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-20 md:gap-32">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative grid md:grid-cols-12 gap-8 items-center ${
        index % 2 === 1 ? "md:text-right" : ""
      }`}
    >
      {/* Project Image */}
      <div
        className={`md:col-span-7 relative ${
          index % 2 === 1 ? "md:order-2 md:col-start-6" : "md:col-start-1"
        }`}
      >
        <div
          className="relative rounded-2xl overflow-hidden aspect-video border border-border/50 bg-card/50 shadow-2xl transition-all duration-500 group-hover:shadow-primary/10 group-hover:border-primary/20"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image || "/placeholder-project.jpg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay Actions */}
          <div
            className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-4 transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/90 text-foreground rounded-full hover:scale-110 transition-transform"
                title="Ver Projeto"
              >
                <ExternalLink size={24} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/90 text-foreground rounded-full hover:scale-110 transition-transform"
                title="Ver Código"
              >
                <Github size={24} />
              </a>
            )}
          </div>
        </div>

        {/* Decorative blob behind image */}
        <div
          className={`absolute -inset-4 bg-linear-to-r ${project.color} opacity-20 blur-2xl -z-10 rounded-full transition-opacity duration-500 group-hover:opacity-30`}
        />
      </div>

      {/* Project Info */}
      <div
        className={`md:col-span-5 flex flex-col justify-center ${
          index % 2 === 1
            ? "md:order-1 md:col-start-1 md:items-end"
            : "md:col-start-8 md:items-start"
        }`}
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="text-primary font-mono text-sm tracking-wider">
            0{index + 1}
          </span>
          <div className="h-px w-12 bg-primary/30" />
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
          {project.description}
        </p>

        <div
          className={`flex flex-wrap gap-2 mb-8 ${
            index % 2 === 1 ? "justify-end" : "justify-start"
          }`}
        >
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm rounded-full border border-border bg-secondary/30 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group/link"
        >
          Ver Detalhes
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}
