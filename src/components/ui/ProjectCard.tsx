'use client';
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/lib/data';

interface ProjectCardProps extends Project {
  onOpenDetails: () => void;
}

export default function ProjectCard({
  title,
  category,
  description,
  tags,
  imageUrl,
  githubUrl,
  liveUrl,
  onOpenDetails,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  const rotateX = useTransform(ySpring, [-0.5, 0.5], ['5deg', '-5deg']);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ['-5deg', '5deg']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / rect.width - 0.5);
    y.set(mouseY / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenDetails}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative h-[330px] sm:h-[350px] w-full rounded-2xl overflow-hidden cursor-pointer bg-navy-light/80 border border-white/10 hover:border-primary/40 transition-colors shadow-lg flex flex-col justify-end"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Layered Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25 group-hover:via-navy/85 transition-all duration-300" />
      </div>

      {/* Top Bar: Category Pill */}
      <div className="absolute top-3.5 left-3.5 right-3.5 z-20 flex items-center justify-between pointer-events-none">
        <span className="px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-navy/90 backdrop-blur-md text-primary rounded-full border border-primary/20 shadow-md">
          {category}
        </span>
        <div className="w-7 h-7 rounded-full bg-navy/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-text-muted group-hover:text-primary group-hover:border-primary/40 transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
        </div>
      </div>

      {/* Card Body */}
      <div className="relative z-10 p-5 flex flex-col justify-end">
        <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1.5 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>

        <p className="text-text-secondary text-xs line-clamp-2 mb-3 font-light leading-relaxed">
          {description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1 mb-3.5">
          {tags.slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className="text-[9px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-text-muted"
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-md bg-white/5 text-text-muted">
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-primary hover:text-navy text-text-secondary transition-all"
                title="View Source Code"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-primary hover:text-navy text-text-secondary transition-all"
                title="View Live Demo"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails();
            }}
            className="text-[11px] font-bold uppercase tracking-wider text-primary hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}