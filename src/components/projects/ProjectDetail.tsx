"use client";

import { useEffect, useState } from "react";
import { Project, Comment } from "@/prisma-generated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CommentSection } from "@/components/comments/CommentSection";

interface ProjectWithComments extends Project {
  comments: Comment[];
}

interface ProjectDetailProps {
  slug: string;
}
export function ProjectDetail({ slug }: ProjectDetailProps) {
  const [project, setProject] = useState<ProjectWithComments | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const backLink = from === "home" ? "/" : "/projects";
  const backText = from === "home" ? "Voltar para Início" : "Voltar para Projetos";

  useEffect(() => {
    async function fetchProject() {
      try {
        const response = await fetch(`/api/projects/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setProject(data);
        }
      } catch (error) {
        console.error("Failed to fetch project", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-6">
          <Skeleton className="h-10 w-40" />
        </div>

        <Skeleton className="w-full h-64 md:h-96 rounded-xl mb-8 shadow-xl" />

        <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
          <div className="space-y-3">
            <Skeleton className="h-10 w-64 md:w-96" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-10 w-28" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>

        <div className="space-y-6 mb-12">
          <div>
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>

          <div>
            <Skeleton className="h-7 w-64 mb-3" />
            <div className="space-y-2 pl-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-11/12" />
              <Skeleton className="h-4 w-10/12" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Projeto não encontrado</h2>
        <Button asChild>
          <Link href={backLink}>{backText}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link href={backLink} className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> {backText}
        </Link>
      </Button>

      <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8 shadow-xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image || "/placeholder-project.jpg"}
          alt={project.title}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          {project.github && (
            <Button variant="outline" asChild>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 w-4 h-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.link && (
            <Button asChild>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 w-4 h-4" /> Ver Demo
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-bold mb-4">Visão Geral</h2>
        <p className="text-lg leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {project.features && project.features.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-3">Principais Funcionalidades</h3>
            <ul className="list-disc pl-6 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {project.challenges && (
          <>
            <h3 className="text-xl font-bold mb-3">Desafios e Soluções</h3>
            <p className="mb-6">{project.challenges}</p>
          </>
        )}
      </div>
 
      <div className="border-t pt-12">
        <CommentSection
          projectId={project.id}
          initialComments={project.comments}
        />
      </div>
    </div>
  );
}
