import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { ProjectList } from "@/components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 px-4 md:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              Meus <span className="text-primary">Projetos</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Uma coleção dos meus trabalhos recentes, experimentos e projetos pessoais.
              Cada projeto representa um desafio único e um aprendizado.
            </p>
          </div>
          
          <ProjectList />
        </div>
      </main>
      <Footer />
    </>
  );
}
