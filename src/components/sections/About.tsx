import Image from "next/image";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { education, engineeringPrinciples } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section page-width">
      <div className="about-grid">
        <div className="about-visual">
          <div className="about-photo">
            <Image
              src="/images/Ebson-Joy.jpg"
              alt="Ebson at his workspace in Kerala"
              fill
              sizes="(max-width: 700px) 90vw, 380px"
              className="object-cover"
            />
          </div>
          <span className="about-photo-label">
            THE PERSON BEHIND THE CODE <ArrowUpRight size={15} />
          </span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">
            <span>04 /</span> A LITTLE ABOUT ME
          </p>
          <h2>
            A developer’s mind.
            <br />
            <span className="serif-accent">A maker’s heart.</span>
          </h2>
          <p>
            I’m Ebson, a full-stack developer based in Kerala, India. I enjoy
            taking something complicated and making it feel surprisingly simple.
          </p>
          <p>
            My work has taken me from building real-time communication platforms
            to delivering enterprise products for teams in Dubai. Across every
            project, I care about the same things: thoughtful interfaces,
            dependable systems, and the people using them.
          </p>
          <div className="about-signature">
            Ebson Joy<span>Always a work in progress. In the best way.</span>
          </div>
        </div>
      </div>
      <div className="principles">
        {engineeringPrinciples.map((item) => (
          <div key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="education-row">
        <span className="eyebrow">
          <GraduationCap size={19} /> THE FOUNDATIONS
        </span>
        {education.map((item) => (
          <div key={item.institution}>
            <h3>{item.degree}</h3>
            <p>
              {item.institution} <span>· {item.period}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
