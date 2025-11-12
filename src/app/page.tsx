import HeroSection from "@/components/sections/hero/index";
import CurriculumSection from "@/components/sections/curriculum";
import ProjectsSection from "@/components/sections/projects";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ContactSection from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <CurriculumSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
