'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-purple-100/50 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/30 dark:bg-pink-900/10 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Explore my latest works showcasing modern web development solutions
          </p>
          <div className="flex items-center justify-center flex-wrap gap-3 mb-8">
            <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400">
              No projects found with the selected technology.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;