import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = [
    {
      slug: "portfolio-website",
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with Next.js and Tailwind CSS.",
      longDescription:
        "This is a comprehensive portfolio website designed to showcase my projects and skills. It features a responsive design, dark mode support, and a dynamic project showcase.",
      tags: ["Next.js", "React", "Tailwind CSS", "Prisma"],
      image: "", // Placeholder or empty for now
      link: "https://example.com",
      github: "https://github.com/example/portfolio",
      color: "from-blue-500 to-purple-500",
      features: [
        "Responsive Design",
        "Dark Mode",
        "Project Showcase",
        "Contact Form",
      ],
      challenges:
        "Implementing the dynamic project showcase and ensuring smooth animations across all devices.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "PostgreSQL",
      ],
    },
    {
      slug: "e-commerce-platform",
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with cart and checkout functionality.",
      longDescription:
        "An e-commerce solution that provides a seamless shopping experience. It includes product management, a shopping cart, secure checkout, and user authentication.",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      image: "",
      link: "https://example.com/store",
      github: "https://github.com/example/ecommerce",
      color: "from-green-500 to-teal-500",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Stripe Integration",
        "User Auth",
      ],
      challenges:
        "Handling complex state management for the shopping cart and ensuring secure payment processing.",
      technologies: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
      ],
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {},
      create: project,
    });
  }

  console.log("Seed data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
