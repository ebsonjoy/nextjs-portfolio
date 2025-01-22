import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import About from "@/components/ui/About";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Hero />
        <div className="space-y-32 py-16">
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="projects"
          >
            <Projects />
          </section>
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="skills"
          >
            <Skills />
          </section>
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="about"
          >
            <About />
          </section>
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="contact"
          >
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
