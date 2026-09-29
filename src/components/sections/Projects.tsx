"use client";
import { useState } from "react";
import { ArrowDown, ArrowUpRight, Github } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects, Project, personalInfo } from "@/lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="projects" className="section work-section">
      <div className="page-width">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> SELECTED WORK
            </p>
            <h2>
              Ideas, brought to life<span className="orange">.</span>
            </h2>
          </div>
          <p>
            A selection of things I’ve built.
            <br />
            Real challenges. Thoughtful solutions.
          </p>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenDetails={() => setSelected(project)}
            />
          ))}
        </div>
        <div className="work-bottom">
          <button
            className="text-link"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="more-projects"
          >
            {expanded ? "Show less" : "More things I’ve built"}
            <ArrowDown size={16} className={expanded ? "rotate-180" : ""} />
          </button>
          <a
            className="text-link"
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} /> Find me on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
        {expanded && (
          <div id="more-projects" className="additional-projects">
            {projects.slice(3).map((project) => (
              <button key={project.id} onClick={() => setSelected(project)}>
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="text-link">
                  Explore project <ArrowUpRight size={17} />
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
      <ProjectModal
        project={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
