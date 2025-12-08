"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/prisma-generated";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-[400px] rounded-2xl bg-secondary/30 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-muted-foreground">
          Nenhum projeto encontrado no momento.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative flex flex-col bg-card/50 border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
        >
          {/* Image Container */}
          <div className="relative h-56 overflow-hidden">
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image || "/placeholder-project.jpg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Overlay Actions */}
            <div className="absolute top-4 right-4 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/90 text-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                  title="Ver Código"
                >
                  <Github size={18} />
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/90 text-foreground rounded-full hover:scale-110 transition-transform shadow-lg"
                  title="Ver Projeto"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col grow p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {((project.technologies ?? []) as string[])
                .slice(0, 3)
                .map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              {(project.technologies ?? []).length > 3 && (
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground border border-border/50">
                  +{(project.technologies ?? []).length - 3}
                </span>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto group/link"
            >
              Ver Detalhes
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
