"use client";

import { Icon } from "@iconify/react";

const PROJECTS = [
  {
    name: "Calculadora",
    description: "Uma calculadora simples feita em React.",
    image: "https://via.placeholder.com/600x300?text=Calculadora",
  },
  {
    name: "Todo List",
    description: "Gerenciador de tarefas minimalista com hooks.",
    image: "https://via.placeholder.com/600x300?text=Todo+List",
  },
  {
    name: "Dashboard",
    description: "Painel administrativo com gráficos e tabelas.",
    image: "https://via.placeholder.com/600x300?text=Dashboard",
  },
  {
    name: "E-commerce",
    description: "Loja virtual moderna com integração de pagamento.",
    image: "https://via.placeholder.com/600x300?text=E-commerce",
  },
];

export default function ProjectsSection() {
  const handleScrollTo = (name: string) => {
    const el = document.getElementById(`project-${name}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative flex min-h-screen bg-gray-50">
      <div className="flex-1 relative p-8 space-y-[4rem]">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={index}
            id={`project-${project.name}`}
            src={project.image}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>

      <aside className="sticky top-24 rounded-md h-screen w-1/4 border border-gray-200 bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">Projetos</h2>
        <nav className="space-y-2">
          {PROJECTS.map((project) => (
            <ProjectNav
              key={project.name}
              name={project.name}
              onClick={() => handleScrollTo(project.name)}
            />
          ))}
        </nav>
      </aside>
    </section>
  );
}

const ProjectCard = ({
  id,
  src,
  name,
  description,
}: {
  id: string;
  src: string;
  name: string;
  description: string;
}) => {
  return (
    <div id={id} className="relative h-[2500px] scroll-mt-24">
      <div className="bg-white sticky top-24 transition-all z-10 min-h-[calc(100vh-112px)] rounded-xl p-6">
        <img
          src={src}
          alt={name}
          className="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="absolute top-4 right-4 p-1 border border-gray-200 rounded-full">
          <Icon icon="mdi:arrow-top-right" className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

const ProjectNav = ({
  name,
  onClick,
}: {
  name: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="p-2 rounded-md hover:bg-gray-100 cursor-pointer"
    >
      <span className="text-gray-700">{name}</span>
    </div>
  );
};
