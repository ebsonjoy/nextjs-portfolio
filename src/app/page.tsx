import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        <Hero />
        <div className="space-y-16 md:space-y-24 py-6 md:py-10">
          <section className="scroll-mt-24 relative" id="experience">
            <Experience />
          </section>

          <section className="scroll-mt-24 relative" id="projects">
            <Projects />
          </section>

          <section className="scroll-mt-24 relative" id="skills">
            <Skills />
          </section>

          <section className="scroll-mt-24 relative" id="about">
            <About />
          </section>

          <section className="scroll-mt-24 relative" id="contact">
            <Contact />
          </section>
        </div>
      </div>
      <Analytics />
    </main>
  );
}
