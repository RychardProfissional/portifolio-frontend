import { ProjectList } from "@/components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my portfolio of projects, featuring web applications, open
          source contributions, and more.
        </p>
      </div>
      <ProjectList />
    </div>
  );
}
