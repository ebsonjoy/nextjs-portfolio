'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Globe, Video, Layers, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/lib/data';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted || !project) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/95 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0.25 }}
            className="relative w-full max-w-5xl h-auto max-h-[90vh] overflow-hidden rounded-3xl bg-navy-light/95 border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] flex flex-col md:flex-row z-[10000]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[110] p-2.5 rounded-full bg-navy/80 text-white hover:bg-primary hover:text-navy transition-all border border-white/10 shadow-2xl group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Column: Image & Direct Actions */}
            <div className="w-full md:w-1/2 relative h-[260px] sm:h-[320px] md:h-auto min-h-0 flex-shrink-0 bg-navy">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent md:bg-gradient-to-r md:from-transparent" />

              {/* Action Buttons */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-5 py-3 bg-primary text-navy rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all text-xs uppercase tracking-wider shadow-lg"
                  >
                    <Globe className="w-4 h-4" /> Live Demo / Site
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-white/10 text-white rounded-xl font-bold flex items-center justify-center gap-2 border border-white/15 hover:bg-white/20 transition-all text-xs uppercase tracking-wider backdrop-blur-md"
                  >
                    <Github className="w-4 h-4" /> Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Information & Architecture */}
            <div className="w-full md:w-1/2 p-6 md:p-10 overflow-y-auto custom-scrollbar flex-grow bg-navy-light/60 backdrop-blur-md">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] uppercase font-bold tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {project.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                  {project.title}
                </h2>

                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Architecture Highlight */}
                {project.architectureHighlight && (
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-primary/20 mb-6">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5 mb-2">
                      <Layers className="w-3.5 h-3.5" /> Technical Architecture
                    </h4>
                    <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                      {project.architectureHighlight}
                    </p>
                  </div>
                )}

                {/* Key Features */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" /> Key Features & Capabilities
                    </h3>
                    <ul className="space-y-2.5">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-xs md:text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-2.5">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Video Demo Link */}
                  {project.videoDemoUrl && (
                    <div className="pt-4 border-t border-white/10">
                      <a
                        href={project.videoDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-primary font-bold text-xs uppercase tracking-wider hover:text-white transition-colors"
                      >
                        <Video className="w-4 h-4" /> Watch Video Demonstration
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
