'use client';
import React from 'react';
import { motion, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, FileDown, Sparkles, Terminal, ShieldCheck, Database, Layers, Phone } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import HeroAnimation from './HeroAnimation';
import { personalInfo, stats } from '@/lib/data';

const FloatingIcon = ({
  Icon,
  i,
  smoothMouseX,
  smoothMouseY,
}: {
  Icon: React.ElementType;
  i: number;
  smoothMouseX: MotionValue<number>;
  smoothMouseY: MotionValue<number>;
}) => {
  const x = useTransform(smoothMouseX, [-500, 500], [12 * (i + 1), -12 * (i + 1)]);
  const y = useTransform(smoothMouseY, [-500, 500], [12 * (i + 1), -12 * (i + 1)]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.06, 0.2, 0.06],
        y: [0, -20, 0],
        x: [0, 10, 0],
      }}
      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: i * 1.2,
      }}
      style={{
        position: 'absolute',
        top: `${15 + i * 22}%`,
        left: `${6 + i * 24}%`,
        x,
        y,
      }}
    >
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary/25" />
    </motion.div>
  );
};

const techPills = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Node.js',
  'NestJS',
  'Supabase',
  'MongoDB',
  'Stripe',
  'AWS',
  'Docker',
];

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [3, -3]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="min-h-[82vh] lg:min-h-[86vh] relative flex flex-col justify-center overflow-hidden bg-transparent pt-20 pb-8 sm:pt-24 sm:pb-12"
    >
      {/* Background Floating Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[Terminal, Layers, Database, ShieldCheck].map((Icon, i) => (
          <FloatingIcon
            key={i}
            Icon={Icon}
            i={i}
            smoothMouseX={smoothMouseX}
            smoothMouseY={smoothMouseY}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 text-left"
          >
            {/* Live Availability Badge */}
            <motion.div variants={fadeInUp} className="mb-4 flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Available for Roles
              </div>
              <span className="text-[11px] font-medium text-text-muted">
                📍 {personalInfo.location} • {personalInfo.internationalExp}
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div variants={fadeInUp} className="space-y-1.5 mb-4">
              <p className="text-text-secondary text-sm sm:text-base font-medium tracking-wide">
                Hi, I&apos;m <span className="text-white font-bold">{personalInfo.name}</span>
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12]">
                Architecting <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-300% animate-gradient">
                  Scalable Web Solutions
                </span>
              </h1>
            </motion.div>

            {/* Professional Summary */}
            <motion.p
              variants={fadeInUp}
              className="text-xs sm:text-sm md:text-base text-text-secondary max-w-xl mb-6 font-light leading-relaxed border-l-2 border-primary/40 pl-4"
            >
              Full-Stack Developer with <span className="text-white font-medium">2+ years of experience</span> crafting high-performance, secure digital platforms. Specialized in <span className="text-white font-medium">Next.js, React, Node.js, NestJS, and Supabase</span> with cloud deployments, robust payment gateways, and real-time systems.
            </motion.p>

            {/* CTA Buttons & Social Links */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3 mb-7">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 bg-primary text-navy rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-white hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] transition-all duration-300 flex items-center gap-2 group active:scale-95 shadow-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold uppercase tracking-wider text-xs border border-white/10 hover:border-primary/40 transition-all duration-300 flex items-center gap-2 active:scale-95"
              >
                <FileDown className="w-3.5 h-3.5 text-primary" />
                <span>Resume</span>
              </a>

              <div className="flex items-center gap-2 ml-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 bg-navy-light/60 rounded-xl text-text-secondary hover:text-primary hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 bg-navy-light/60 rounded-xl text-text-secondary hover:text-primary hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email"
                  className="p-2.5 bg-navy-light/60 rounded-xl text-text-secondary hover:text-primary hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  aria-label="Phone"
                  className="p-2.5 bg-navy-light/60 rounded-xl text-text-secondary hover:text-primary hover:bg-white/10 transition-all border border-white/5 hover:border-primary/30"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md"
            >
              {stats.map((stat, i) => (
                <div key={i} className="text-left border-l border-white/10 pl-3 first:border-l-0 first:pl-0">
                  <div className="text-lg sm:text-xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-text-muted uppercase tracking-wider font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
          >
            <div className="relative z-20 w-full max-w-[380px]">
              <HeroAnimation />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-primary/10 rounded-full blur-[90px] pointer-events-none" />
          </motion.div>
        </div>

        {/* Tech Stack Marquee Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-5 border-t border-white/5"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] uppercase tracking-wider font-bold text-text-muted flex items-center gap-1.5 mr-1">
              <Sparkles className="w-3 h-3 text-primary" /> Stack:
            </span>
            {techPills.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-white/[0.03] hover:bg-primary/15 border border-white/5 hover:border-primary/30 text-text-secondary hover:text-white transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}