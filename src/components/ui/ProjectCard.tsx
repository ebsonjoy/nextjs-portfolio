import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index = 0,
  onOpenDetails,
}: {
  project: Project;
  index?: number;
  onOpenDetails: () => void;
}) {
  const featured = index === 0;
  return (
    <button
      className={`project-card project-tone-${index}${featured ? " project-featured" : ""}`}
      onClick={onOpenDetails}
      aria-label={`View ${project.title} case study`}
    >
      <div className="project-image">
        <span className="project-image-label" aria-hidden="true">
          {featured
            ? "CONNECTION, WITHOUT LIMITS."
            : "BUILT FROM THE GROUND UP."}
        </span>
        <div className="project-window">
          <div className="window-bar">
            <span />
            <span />
            <span />
            <small>{project.title}</small>
          </div>
          <div className="project-screenshot">
            <Image
              src={project.imageUrl}
              alt={`${project.title} project preview`}
              fill
              sizes="(max-width: 700px) 90vw, 560px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <span className="project-view">
          <ArrowUpRight size={22} />
        </span>
      </div>
      <div className="project-body">
        <div className="project-meta">
          <span>{featured ? "FEATURED CASE STUDY" : project.category}</span>
          <span>0{index + 1}</span>
        </div>
        <h3>
          {project.title}
          <ArrowUpRight size={23} />
        </h3>
        {featured && (
          <span className="featured-subtitle">
            Real connections.
            <br />
            <span>In real time.</span>
          </span>
        )}
        <p>
          {featured
            ? "A real-time communication platform bringing audio, video, and creator communities together in one connected experience."
            : index === 1
              ? "Making complex visa applications feel simple, secure, and effortless."
              : "A fresh commerce experience, from product discovery to the doorstep."}
        </p>
        <div className="tags">
          {project.tags.slice(0, featured ? 4 : 3).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="case-study-link">
          Explore case study <ArrowUpRight size={16} />
        </span>
      </div>
    </button>
  );
}
