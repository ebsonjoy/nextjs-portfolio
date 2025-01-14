'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
    >
      {/* Project Image with Overlay */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Gradient Border Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* Title with hover effect */}
        <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 rounded-full transform hover:scale-105 transition-transform duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
          >
            <FaGithub className="w-5 h-5" />
            <span className="font-medium">Code</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 -translate-y-1 transition-all" />
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">Live Demo</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 -translate-y-1 transition-all" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;