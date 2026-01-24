'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from '@/lib/data';
import { Filter, Sparkles } from 'lucide-react';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  return (
    <section id="projects" className="relative py-32 bg-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-64 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-64 w-[500px] h-[500px] bg-accent-from/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-bold tracking-widest uppercase">
            <Sparkles className="w-4 h-4" /> Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tight">
            Crafted <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-to">Excellence</span>
          </h2>
          
          {/* Modern Filter Section */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-3xl bg-navy-light/30 backdrop-blur-xl border border-white/5 w-fit mx-auto shadow-2xl">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-500 relative overflow-hidden group ${
                  selectedTag === tag
                    ? 'text-navy shadow-[0_0_20px_rgba(100,255,218,0.3)]'
                    : 'text-text-secondary hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {selectedTag === tag && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 uppercase tracking-widest text-[10px]">
                  {tag}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <ProjectCard 
                  {...project} 
                  onOpenDetails={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-text-muted text-xl font-light italic">
              No masterpieces found in this category... yet.
            </p>
          </motion.div>
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
};

export default Projects;