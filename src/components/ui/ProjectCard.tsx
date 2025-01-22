'use client'
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Code2, Sparkles } from 'lucide-react';
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
  videoDemoUrl?: string;
  features: string[];
}

const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  videoDemoUrl,
  features,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const getValidUrl = (url?: string) => {
    if (!url) return '';
    try {
      return new URL(url).toString();
    } catch {
      return url.startsWith('http') ? url : `https://${url}`;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col h-full bg-white dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 perspective-1000"
    >
      <div 
        className="relative h-48 overflow-hidden"
        style={{ transform: "translateZ(20px)" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div 
        className="flex flex-col flex-grow p-6"
        style={{ transform: "translateZ(30px)" }}
      >
        <h3 className="text-2xl font-bold mb-3 group-hover:bg-gradient-to-r from-blue-600 to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
              Key Features
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="px-3 py-1 text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full transform hover:scale-105 transition-transform duration-300"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
              Tech Stack
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full transform hover:scale-105 transition-transform duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div 
          className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
          style={{ transform: "translateZ(40px)" }}
        >
          {githubUrl && (
            <a
              href={getValidUrl(githubUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-medium">Code</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 -translate-y-1 transition-all" />
            </a>
          )}
          {liveUrl && (
            <a
              href={getValidUrl(liveUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">Live Demo</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 -translate-y-1 transition-all" />
            </a>
          )}
          {videoDemoUrl && (
            <a
              href={getValidUrl(videoDemoUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="font-medium">Demo Video</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transform group-hover/link:translate-x-1 -translate-y-1 transition-all" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;