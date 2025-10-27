"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";

const PROJECTS = [
  {
    name: "Calculadora",
    description: "Uma calculadora simples feita em React.",
    image: "https://via.placeholder.com/800x400?text=Calculadora",
  },
  {
    name: "Todo List",
    description: "Gerenciador de tarefas minimalista com hooks.",
    image: "https://via.placeholder.com/800x400?text=Todo+List",
  },
  {
    name: "Dashboard",
    description: "Painel administrativo com gráficos e tabelas.",
    image: "https://via.placeholder.com/800x400?text=Dashboard",
  },
  {
    name: "E-commerce",
    description: "Loja virtual moderna com integração de pagamento.",
    image: "https://via.placeholder.com/800x400?text=E-commerce",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<string>(PROJECTS[0].name);
  const [progress, setProgress] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const progressPercent = (scrollY / totalHeight) * 100;
      setProgress(progressPercent);

      PROJECTS.forEach((project) => {
        const el = document.getElementById(`project-${project.name}`);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 200) {
          setActive(project.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (name: string) => {
    const el = document.getElementById(`project-${name}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative flex bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Conteúdo principal */}
      <div className="flex-1 relative p-8 space-y-[6rem]">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            id={`project-${project.name}`}
            src={project.image}
            name={project.name}
            description={project.description}
            delay={index * 0.15}
          />
        ))}
      </div>

      {/* Sidebar - Fixa e elegante */}
      <aside className="sticky top-0 h-screen w-1/4 max-w-xs p-6 bg-gray-50 border-r border-gray-100 flex flex-col items-center">
        <div className="sticky top-24 w-full"> {/* Usamos sticky top-24 aqui para o conteúdo interno */}
          <h2 className="text-3xl font-extrabold mb-10 text-gray-900 flex items-center gap-3">
            Projetos
          </h2>

          {/* Container de navegação e progresso */}
          <div className="relative flex">
            {/* Navigation */}
            <nav className="space-y-2 flex-1 pr-6">
              {PROJECTS.map((project) => (
                <ProjectNav
                  key={project.name}
                  name={project.name}
                  onClick={() => handleScrollTo(project.name)}
                  active={active === project.name}
                />
              ))}
            </nav>

            {/* Vertical Progress Bar - Mais sutil e moderno */}
            <div className="relative w-1.5 ml-4">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-200 rounded-full" />
              <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-indigo-500 rounded-full origin-top"
                style={{ height: `${progress}%` }}
              />
              {/* Indicadores de Posição */}
              <div className="absolute inset-0 flex flex-col justify-between items-center">
                {PROJECTS.map((project, index) => (
                  <div key={project.name} className="flex-1 flex justify-center items-center">
                    <motion.div
                      className={`w-3 h-3 rounded-full border-2 ${
                        active === project.name
                          ? "border-indigo-600 bg-white shadow-md transition-all duration-500 scale-125"
                          : "border-gray-300 bg-white transition-all duration-300"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

const ProjectCard = ({
  id,
  src,
  name,
  description,
  delay,
}: {
  id: string;
  src: string;
  name: string;
  description: string;
  delay: number;
}) => {
  return (
    <div id={id} className="relative h-[2200px] scroll-mt-24">
      <motion.div
        className="sticky top-24 z-10 bg-white rounded-3xl shadow-lg p-8 border border-gray-100 transition-all duration-500 min-h-[calc(100vh-120px)] flex flex-col justify-between overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
        viewport={{ once: true }}
      >
        <div>
          <div className="relative rounded-2xl overflow-hidden mb-6 group">
            <img
              src={src}
              alt={name}
              className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
              <Icon icon="mdi:arrow-top-right" className="text-2xl text-gray-700" />
            </div>
          </div>
          <h3 className="text-3xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600 mt-3 text-lg leading-relaxed">{description}</p>
        </div>
        <div className="mt-6 text-sm text-gray-400 flex items-center gap-2">
          <Icon icon="mdi:clock-outline" className="text-lg" />
          <span>Deslize para ver o próximo</span>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectNavProps {
  name: string;
  onClick: () => void;
  active: boolean;
}

const ProjectNav: FC<ProjectNavProps> = ({ name, onClick, active }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`p-3 rounded-xl cursor-pointer flex items-center gap-3 transition-all duration-300 transform ${
        active
          ? "bg-indigo-50 text-indigo-700 font-bold shadow-sm ring-2 ring-indigo-500/50"
          : "hover:bg-gray-100 text-gray-700 hover:translate-x-1"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon 
        icon={active ? "mdi:circle-slice-8" : "mdi:circle-outline"} 
        className={`text-lg transition-colors ${active ? 'text-indigo-500' : 'text-gray-400'}`} 
      />
      <span className="text-base truncate">{name}</span>
    </motion.div>
  );
};