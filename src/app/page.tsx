import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Hero />
        <div className="space-y-32 py-16">
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="skills"
          >
            <Skills />
          </section>
          <section 
            className="scroll-mt-24 relative transform transition-all duration-500 hover:scale-[1.01]" 
            id="projects"
          >
            <Projects />
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
      <Analytics />
    </main>
  );
}
