import { Braces, Server, Database, Workflow } from "lucide-react";
import { technicalStack } from "@/lib/data";
const icons = [Braces, Server, Database, Workflow];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>03 /</span> MY TOOLKIT
            </p>
            <h2>
              The right tools.
              <br />
              For the right problems.
            </h2>
          </div>
          <p>
            End-to-end development, with a stack
            <br />
            built for the real world.
          </p>
        </div>
        <div className="skills-grid">
          {Object.values(technicalStack).map((category, index) => {
            const Icon = icons[index];
            return (
              <div className="skill-column" key={category.title}>
                <Icon size={26} strokeWidth={1.5} />
                <span className="skill-number">0{index + 1}</span>
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="toolkit-note">
          <span className="status-dot" /> Built with TypeScript. Backed by
          curiosity.
        </div>
      </div>
    </section>
  );
}
