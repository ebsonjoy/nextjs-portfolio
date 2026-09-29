"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { Project, personalInfo } from "@/lib/data";

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && project) {
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
      if (dialog.open) dialog.close();
    };
  }, [isOpen, project]);
  return (
    <dialog
      ref={ref}
      className="project-dialog"
      aria-labelledby="project-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="dialog-inner">
        {project && (
          <>
            <button
              className="dialog-close"
              onClick={onClose}
              aria-label="Close project details"
              autoFocus
            >
              <X size={22} />
            </button>
            <div className="dialog-image">
              <Image
                src={project.imageUrl}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 700px) 95vw, 760px"
                className="object-cover object-top"
              />
            </div>
            <div className="dialog-body">
              <p className="eyebrow">{project.category}</p>
              <h2 id="project-title">{project.title}</h2>
              {project.role && <p className="dialog-role">{project.role}</p>}
              <p>{project.description}</p>
              {project.problem && (
                <div className="case-study-block">
                  <h3>The challenge</h3>
                  <p>{project.problem}</p>
                </div>
              )}
              {project.technicalDecision && (
                <div className="case-study-block">
                  <h3>The approach</h3>
                  <p>{project.technicalDecision}</p>
                </div>
              )}
              {project.outcome && (
                <div className="case-study-block outcome">
                  <h3>The outcome</h3>
                  <p>{project.outcome}</p>
                </div>
              )}
              <div className="case-study-block">
                <h3>Under the hood</h3>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="dialog-actions">
                {project.githubUrl && (
                  <a
                    className="button button-dark"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.githubUrl === personalInfo.github
                      ? "GitHub profile"
                      : "View source"}
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    className="text-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit project <ArrowUpRight size={16} />
                  </a>
                )}
                {project.videoDemoUrl && (
                  <a
                    className="text-link"
                    href={project.videoDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch walkthrough <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </dialog>
  );
}
