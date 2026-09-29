import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Introduction */}
      <Hero />

      {/* 2. Selected Work (Projects) */}
      <Projects />

      {/* 3. Professional Experience */}
      <Experience />

      {/* 4. Technical Stack */}
      <Skills />

      {/* 5. About, Principles, Education & Highlights */}
      <About />

      {/* 6. Contact */}
      <Contact />

      <Analytics />
    </div>
  );
}
