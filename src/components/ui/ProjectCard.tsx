'use client'
import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
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
  videoDemoUrl?: string;
  features: string[];
  onOpenDetails: () => void;
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
  onOpenDetails,
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
      onClick={onOpenDetails}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative h-[400px] w-full rounded-3xl overflow-hidden cursor-pointer perspective-1000 bg-navy-light"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110"
        style={{ transform: "translateZ(0px)" }}
      >
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy/20 to-navy/90 opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      {/* Content Overlay */}
      <div 
        className="absolute inset-0 z-10 flex flex-col justify-end p-8"
        style={{ transform: "translateZ(20px)" }}
      >
        {/* Top: Tech Tags (Hidden initially, slide down) */}
        <div className="absolute top-6 right-6 flex flex-wrap justify-end gap-2 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
           {tags.slice(0, 3).map((tag, i) => (
             <span key={i} className="px-3 py-1 text-xs font-bold bg-navy/80 backdrop-blur-md text-primary rounded-full border border-primary/20 shadow-lg">
               {tag}
             </span>
           ))}
        </div>

        {/* Bottom Content */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">
            {title}
          </h3>
          
          <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
             <p className="text-text-secondary text-base mb-6 line-clamp-3">
               {description}
             </p>

            <div className="space-y-3 mb-4">
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 2).map((feature, i) => (
                  <span key={i} className="text-xs text-text-secondary border border-white/10 px-2 py-0.5 rounded-md">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                {githubUrl && (
                    <a 
                      href={getValidUrl(githubUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-navy transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                        <FaGithub className="w-5 h-5" />
                    </a>
                )}
                {liveUrl && (
                    <a 
                      href={getValidUrl(liveUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-navy transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
                 {videoDemoUrl && (
                    <a 
                      href={getValidUrl(videoDemoUrl)} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-navy transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                        <ArrowUpRight className="w-5 h-5 rotate-90" />
                    </a>
                )}
                 <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenDetails();
                  }}
                  className="ml-auto flex items-center gap-2 text-primary font-bold tracking-wide hover:gap-3 transition-all"
                >
                    READ MORE <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>
          </div>

           {/* Initial "Details" hint */}
           <div className="flex items-center gap-2 mt-2 group-hover:hidden transition-opacity duration-300">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">View Details</span>
              <ArrowUpRight className="w-4 h-4 text-primary" />
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;