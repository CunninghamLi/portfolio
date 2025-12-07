import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm font-medium text-sky-400">
          Full-Stack Developer
        </p>
        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
          Hello.
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-300">
          Test
        </p>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer/>
    </>
  );
}
