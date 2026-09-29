import { ArrowUpRight } from "lucide-react";
import { experiences, personalInfo } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section page-width experience-section">
      <div className="experience-intro">
        <p className="eyebrow">
          <span>02 /</span> THE JOURNEY
        </p>
        <h2>
          Always learning.
          <br />
          Always building.
        </h2>
        <p>
          From hands-on foundations to production platforms for international
          teams.
        </p>
        <a
          className="text-link"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          The full story, in my résumé <ArrowUpRight size={17} />
        </a>
      </div>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <article className="experience-item" key={exp.id}>
            <div
              className={`experience-marker ${exp.current ? "current" : ""}`}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="experience-content">
              <div className="experience-date">
                <span>{exp.period}</span>
                {exp.current && <span className="current-label">CURRENT</span>}
              </div>
              <h3>{exp.role}</h3>
              <div className="experience-company">
                {exp.company}
                <span>{exp.location}</span>
              </div>
              <p>{exp.description}</p>
              <details>
                <summary>
                  What I worked on <span>+</span>
                </summary>
                <ul>
                  {exp.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </details>
              <div className="tags">
                {exp.skills.slice(0, 4).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
