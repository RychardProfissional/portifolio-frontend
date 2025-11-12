"use client"

import { useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    proficiency: 75,
    skills: ["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    proficiency: 90,
    skills: ["Node.js", "Go", "PHP", "Laravel", "API REST", "Express"],
  },
  {
    title: "DevOps & Tools",
    proficiency: 85,
    skills: ["Docker", "Linux", "Nginx", "Git", "GitHub", "Git Flow"],
  },
  {
    title: "Languages",
    proficiency: 80,
    skills: ["JavaScript", "Go", "C", "PHP", "TypeScript"],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="w-full py-20 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Competências</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Conhecimento consolidado em diferentes tecnologias e linguagens
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="animate-fadeInUp" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
              <div className="space-y-3">
                {/* Category header with proficiency level */}
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  <span className="text-sm text-muted-foreground">{category.proficiency}%</span>
                </div>

                <div className="h-2 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                    style={{ width: `${category.proficiency}%` }}
                  />
                </div>

                <div className="flex flex-wrap gap-2 pt-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {skill}
                      {skill !== category.skills[category.skills.length - 1] && " •"}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-lg border border-border bg-card/20 backdrop-blur animate-fadeInUp">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6 text-center">
            Stack Completo
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "JavaScript",
              "TypeScript",
              "Go",
              "C",
              "PHP",
              "React",
              "React Native",
              "Next.js",
              "Node.js",
              "Laravel",
              "Docker",
              "Linux",
              "Nginx",
              "Git",
              "GitHub",
              "API REST",
              "Express",
              "Tailwind CSS",
            ].map((tech) => (
              <div
                key={tech}
                className="px-3 py-1.5 rounded-md text-xs font-medium text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground transition-all cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}