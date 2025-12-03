"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <FileJson size={20} />,
  TypeScript: <FileCode size={20} />,
  PHP: <Code size={20} />,
  C: <Cpu size={20} />,
  Go: <Settings size={20} />,

  React: <Layers size={20} />,
  "Next.js": <Globe size={20} />,
  "Tailwind CSS": <FileType size={20} />,

  "Node.js": <ServerCog size={20} />,
  Laravel: <Database size={20} />,
  Express: <ServerCog size={20} />,
  "API REST": <Boxes size={20} />,

  Docker: <Boxes size={20} />,
  Linux: <Terminal size={20} />,
  Nginx: <Globe size={20} />,
  Git: <GitBranch size={20} />,
  GitHub: <Github size={20} />,
  "Git Flow": <GitBranch size={20} />,
};

const skillCategories = [
  {
    title: "Frontend",
    description: "Criando interfaces ricas e responsivas",
    color: "bg-blue-500",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    description: "Sistemas robustos e escaláveis",
    color: "bg-emerald-500",
    skills: ["Node.js", "Go", "PHP", "Laravel", "API REST", "Express"],
  },
  {
    title: "DevOps & Tools",
    description: "Infraestrutura e automação",
    color: "bg-orange-500",
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub", "Git Flow"],
  },
  {
    title: "Linguagens",
    description: "Fundamentos e versatilidade",
    color: "bg-purple-500",
    skills: ["JavaScript", "Go", "C", "PHP", "TypeScript"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-24 px-4 md:px-6 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ferramentas e tecnologias que utilizo para transformar ideias em
            realidade digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <SkillCategoryCard
              key={category.title}
              category={category}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategoryCard({
  category,
  index,
}: {
  category: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-colors overflow-hidden"
    >
      {/* Glow effect */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 ${category.color} opacity-5 blur-[60px] rounded-full group-hover:opacity-10 transition-opacity`}
      />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
            <p className="text-sm text-muted-foreground">
              {category.description}
            </p>
          </div>
          <div className={`w-2 h-2 rounded-full ${category.color}`} />
        </div>

        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill: string) => (
            <SkillTag key={skill} skill={skill} color={category.color} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SkillTag({ skill, color }: { skill: string; color: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border/50 hover:bg-secondary hover:border-border transition-colors cursor-default"
    >
      <span className={`${color.replace("bg-", "text-")} opacity-80`}>
        {skillIcons[skill] || <div className="w-5 h-5" />}
      </span>
      <span className="text-sm font-medium">{skill}</span>
    </motion.div>
  );
}
