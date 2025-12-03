"use client";

import { useEffect, useState } from "react";
import { Project, Comment } from "@/prisma-generated";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
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
    return <div className="text-center py-20">Loading project details...</div>;
  }

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Button asChild>
          <Link href="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/projects" className="flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
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
                <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-lg leading-relaxed mb-6">
          {project.longDescription}
        </p>

        {project.features && project.features.length > 0 && (
          <>
            <h3 className="text-xl font-bold mb-3">Key Features</h3>
            <ul className="list-disc pl-6 mb-6">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </>
        )}

        {project.challenges && (
          <>
            <h3 className="text-xl font-bold mb-3">Challenges & Solutions</h3>
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
