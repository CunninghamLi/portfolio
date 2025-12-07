// app/page.tsx 
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <main className="mx-auto max-w-5xl px-4 pt-24 pb-12 space-y-16">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection/>
        <ExperienceSection />
        <EducationSection/>
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
