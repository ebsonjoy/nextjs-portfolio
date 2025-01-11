import Hero from "@/components/ui/Hero";
import Projects from "@/components/ui/Projects";
import Skills from "@/components/ui/Skills";
import Contact from "@/components/ui/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <div className="space-y-24">
      <Projects/>
      <Skills/>
      <Contact/>
      </div>
    </main>
  );
}
