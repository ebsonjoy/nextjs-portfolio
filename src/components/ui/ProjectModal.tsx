'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Globe, Video } from 'lucide-react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  videoDemoUrl?: string;
  features: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
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
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
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

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", duration: 0.6, bounce: 0.3 }}
            className="relative w-full max-w-5xl h-auto max-h-[92vh] overflow-hidden rounded-[2rem] bg-navy-light/90 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row z-[10000]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-[110] p-2.5 rounded-full bg-navy/80 text-white hover:bg-primary hover:text-navy transition-all border border-white/10 shadow-2xl group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Left Column: Image & Core Links */}
            <div className="w-full md:w-1/2 relative h-[280px] sm:h-[350px] md:h-auto min-h-0 flex-shrink-0">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent md:bg-gradient-to-r md:from-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row gap-3">
                 {project.liveUrl && (
                   <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-3.5 bg-primary text-navy rounded-xl font-black flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(100,255,218,0.4)] transition-all text-xs uppercase tracking-widest"
                   >
                     <Globe className="w-4 h-4" /> Live Demo
                   </a>
                 )}
                 {project.githubUrl && (
                   <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 bg-white/5 text-white rounded-xl font-black flex items-center justify-center gap-2 border border-white/10 hover:bg-white/10 transition-all text-xs uppercase tracking-widest"
                   >
                     <Github className="w-4 h-4" /> Code
                   </a>
                 )}
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="w-full md:w-1/2 p-7 md:p-12 overflow-y-auto custom-scrollbar flex-grow bg-navy-light/40 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag: string, i: number) => (
                    <span key={i} className="text-[10px] uppercase font-black tracking-[0.2em] text-primary px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
                  {project.title}
                </h2>

                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8 font-light italic opacity-90">
                  {project.description}
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-5 flex items-center gap-2">
                       <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                         <CheckCircle2 className="w-5 h-5 text-primary" />
                       </div>
                       Key Features
                    </h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {project.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-text-secondary group/item">
                          <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 group-hover/item:scale-125 transition-transform" />
                          <span className="text-sm md:text-base leading-snug">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.videoDemoUrl && (
                    <div className="pt-8 border-t border-white/5">
                      <a 
                        href={project.videoDemoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-primary font-bold hover:gap-6 transition-all duration-300 group/video"
                      >
                        <div className="p-3 rounded-full bg-primary/10 group-hover/video:bg-primary group-hover/video:text-navy transition-colors">
                          <Video className="w-6 h-6" />
                        </div>
                        <span className="uppercase tracking-widest text-[10px] font-black">Watch Full Demonstration</span>
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
};

export default ProjectModal;
