'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects, Project } from '@/lib/data';
import { Sparkles, Layers } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const categories = ['All', 'Real-Time & SaaS', 'Full Stack Enterprise', 'E-Commerce', 'OCR & AI', 'Real-Time'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-8 sm:py-14 relative bg-transparent overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 -right-64 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -left-64 w-72 h-72 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center mb-10 sm:mb-12"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-3 text-xs font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3" /> Featured Portfolio
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-white tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">Work & Architectures</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-text-secondary text-xs sm:text-sm font-light max-w-xl mx-auto leading-relaxed">
            Enterprise systems, real-time communications platforms, and full-stack solutions built with clean code and modern tech stacks.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md w-fit mx-auto">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;

              if (count === 0 && cat !== 'All') return null;

              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 relative ${
                    isSelected
                      ? 'text-navy shadow-md'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      className="absolute inset-0 bg-primary rounded-lg z-0"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {cat}
                    <span className={`text-[10px] px-1 py-0.2 rounded-full ${isSelected ? 'bg-navy/25 text-navy' : 'bg-white/10 text-text-muted'}`}>
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard
                  {...project}
                  onOpenDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-text-muted">
            <Layers className="w-10 h-10 mx-auto mb-2 opacity-40 text-primary" />
            <p className="text-xs">No projects found in this category.</p>
          </div>
        )}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}