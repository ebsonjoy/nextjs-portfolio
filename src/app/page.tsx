import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <div className="space-y-32 py-16">
        <section className="scroll-mt-16" id="projects">
          <Projects/>
        </section>
        <section className="scroll-mt-16" id="skills">
          <Skills/>
        </section>
        <section className="scroll-mt-16" id="contact">
          <Contact/>
        </section>
      </div>
    </main>
  );
}