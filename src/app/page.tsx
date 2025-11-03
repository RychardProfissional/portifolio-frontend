import HeroSection from "@/components/sections/hero/index";
import CurriculumSection from "@/components/sections/curriculum";
import ProjectsSection from "@/components/sections/projects";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CurriculumSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
