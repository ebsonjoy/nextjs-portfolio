'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiSocketdotio,
  SiGit,
  SiPostman,
  SiAmazonwebservices,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiVercel,
  SiNestjs,
  SiStripe,
  SiRazorpay,
  SiLinux,
} from 'react-icons/si';
import { Layout, Server, Database, ShieldCheck, Globe, Zap, Radio, Lock, Video, MessageSquare, Code2, Sparkles } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface SkillItem {
  name: string;
  level: number;
  icon: React.ElementType;
  tag?: string;
}

interface CategoryGroup {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: SkillItem[];
}

const skillGroups: CategoryGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend & Languages',
    subtitle: 'Modern reactive frameworks, typed development, and responsive styling',
    icon: Layout,
    skills: [
      { name: 'TypeScript', level: 92, icon: SiTypescript, tag: 'Typed JS' },
      { name: 'JavaScript', level: 95, icon: SiJavascript, tag: 'ES6+' },
      { name: 'Next.js', level: 92, icon: SiNextdotjs, tag: 'App Router' },
      { name: 'React.js', level: 94, icon: SiReact, tag: 'Hooks/SSR' },
      { name: 'Tailwind CSS', level: 94, icon: SiTailwindcss, tag: 'Modern UI' },
      { name: 'Redux Toolkit', level: 86, icon: SiRedux, tag: 'State' },
      { name: 'HTML5', level: 96, icon: SiHtml5, tag: 'Semantic' },
      { name: 'CSS3', level: 90, icon: SiCss3, tag: 'Animations' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Scalable server frameworks, microservices, and real-time streaming',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 92, icon: SiNodedotjs, tag: 'Runtime' },
      { name: 'NestJS', level: 86, icon: SiNestjs, tag: 'Modular' },
      { name: 'Express.js', level: 92, icon: SiExpress, tag: 'REST' },
      { name: 'REST APIs', level: 96, icon: Globe, tag: 'API Design' },
      { name: 'Socket.IO', level: 90, icon: SiSocketdotio, tag: 'Real-Time' },
      { name: 'WebSockets', level: 88, icon: Zap, tag: 'Bi-directional' },
      { name: 'WebRTC', level: 82, icon: Radio, tag: 'Audio/Video' },
      { name: 'Clean Arch', level: 90, icon: Code2, tag: 'Repository' },
    ],
  },
  {
    id: 'database-cloud',
    title: 'Databases & Cloud',
    subtitle: 'Data persistence, cloud infrastructure, containerization & deployments',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 90, icon: SiMongodb, tag: 'NoSQL' },
      { name: 'PostgreSQL', level: 86, icon: SiPostgresql, tag: 'Relational' },
      { name: 'Supabase', level: 90, icon: SiSupabase, tag: 'BaaS & Auth' },
      { name: 'SQL', level: 86, icon: Database, tag: 'Queries' },
      { name: 'AWS (S3/EC2)', level: 80, icon: SiAmazonwebservices, tag: 'Cloud' },
      { name: 'Docker', level: 80, icon: SiDocker, tag: 'Containers' },
      { name: 'Vercel', level: 92, icon: SiVercel, tag: 'CI/CD' },
      { name: 'Linux', level: 84, icon: SiLinux, tag: 'Server Ops' },
    ],
  },
  {
    id: 'security-tools',
    title: 'Security, Payments & Tools',
    subtitle: 'Enterprise authentication, payment gateways, RTC SDKs & tooling',
    icon: ShieldCheck,
    skills: [
      { name: 'JWT & OAuth', level: 92, icon: ShieldCheck, tag: 'Auth' },
      { name: 'RBAC Security', level: 92, icon: Lock, tag: 'Access Control' },
      { name: 'Stripe', level: 92, icon: SiStripe, tag: 'Payments' },
      { name: 'Razorpay', level: 90, icon: SiRazorpay, tag: 'Gateways' },
      { name: 'Agora RTC', level: 84, icon: Video, tag: 'Video Calling' },
      { name: 'Twilio', level: 84, icon: MessageSquare, tag: 'SMS & Comms' },
      { name: 'Git & GitHub', level: 94, icon: SiGit, tag: 'VCS' },
      { name: 'Postman', level: 90, icon: SiPostman, tag: 'Testing' },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const displayedGroups =
    activeTab === 'all'
      ? skillGroups
      : skillGroups.filter((group) => group.id === activeTab);

  return (
    <section id="skills" className="py-8 sm:py-14 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-3 text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-3 h-3" /> Technical Arsenal
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tight text-white">
              Skills &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">
                Expertise
              </span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Comprehensive full-stack toolset honed over 2+ years of architecting production applications and real-time systems.
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-6 p-1 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-md w-fit mx-auto">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'all'
                    ? 'bg-primary text-navy shadow-sm'
                    : 'text-text-secondary hover:text-white hover:bg-white/5'
                }`}
              >
                All Domains
              </button>
              {skillGroups.map((group) => (
                <button
                  key={group.id}
                  onClick={() => setActiveTab(group.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeTab === group.id
                      ? 'bg-primary text-navy shadow-sm'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  <group.icon className="w-3 h-3" />
                  <span>{group.title.split('&')[0]}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Skill Groups Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedGroups.map((group) => (
                <motion.div
                  key={group.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 sm:p-6 rounded-2xl bg-navy-light/60 backdrop-blur-xl border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-navy transition-colors duration-300">
                      <group.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{group.title}</h3>
                      <p className="text-[11px] text-text-muted">{group.subtitle}</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-4">
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/40 hover:bg-white/[0.05] transition-all duration-300 flex flex-col items-center justify-center text-center gap-1.5 group/card"
                        >
                          <div className="p-2 rounded-lg bg-navy-light/80 text-text-secondary group-hover/card:text-primary group-hover/card:scale-105 transition-all duration-300">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block text-xs font-bold text-white tracking-tight">
                              {skill.name}
                            </span>
                            {skill.tag && (
                              <span className="block text-[9px] text-text-muted font-mono">
                                {skill.tag}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}