"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@prisma/client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

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
    return <div className="text-center py-10">Loading projects...</div>;
  }

  if (projects.length === 0) {
    return <div className="text-center py-10">No projects found.</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-48 w-full overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image || "/placeholder-project.jpg"}
              alt={project.title}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-muted-foreground line-clamp-3 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {((project.technologies ?? []) as string[]).slice(0, 3).map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
              {(project.technologies ?? []).length > 3 && (
                <Badge variant="outline">
                  +{(project.technologies ?? []).length - 3}
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between mt-auto">
            <div className="flex gap-2">
              {project.github && (
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
              )}
              {project.link && (
                <Button variant="ghost" size="icon" asChild>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </Button>
              )}
            </div>
            <Button asChild>
              <Link href={`/projects/${project.slug}`}>View Details</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
