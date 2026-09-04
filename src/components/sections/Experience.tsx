'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, Building2, Sparkles } from 'lucide-react';
import { experiences } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Experience() {
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);
  const activeExp = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <section id="experience" className="py-8 sm:py-14 relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest uppercase text-primary mb-3">
              <Briefcase className="w-3 h-3" /> Career Journey
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">Experience</span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              2+ years architecting scalable full-stack web applications, secure APIs, and production deployments for global & UAE clients.
            </p>
          </motion.div>

          {/* Interactive Master-Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Role / Company Selector */}
            <motion.div variants={fadeInUp} className="lg:col-span-4 flex flex-col gap-2.5">
              {experiences.map((exp) => {
                const isActive = exp.id === selectedId;
                return (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 relative border flex items-center justify-between group ${
                      isActive
                        ? 'bg-navy-light border-primary/40 shadow-[0_0_20px_rgba(56,189,248,0.12)] text-white'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10 text-text-secondary'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeExperienceIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-2xl"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}

                    <div className="pl-1.5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-sm font-bold transition-colors ${isActive ? 'text-white' : 'text-text-primary group-hover:text-white'}`}>
                          {exp.role}
                        </span>
                        {exp.current && (
                          <span className="px-1.5 py-0.2 text-[9px] font-bold uppercase tracking-wider rounded-full bg-primary/20 text-primary border border-primary/30">
                            Present
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-primary flex items-center gap-1">
                        <Building2 className="w-3 h-3 opacity-80" />
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-3 mt-1.5 text-[11px] text-text-muted font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-primary/70" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-primary translate-x-1' : 'text-text-muted opacity-40 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                  </button>
                );
              })}
            </motion.div>

            {/* Experience Detail Card */}
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 sm:p-7 rounded-2xl bg-navy-light/70 backdrop-blur-xl border border-white/10 shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-indigo-400 to-transparent" />

                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {activeExp.role}
                        </h3>
                        {activeExp.current && (
                          <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full bg-primary/20 text-primary border border-primary/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Active
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-xs">
                        <span className="font-semibold text-primary">{activeExp.company}</span>
                        <span className="text-text-muted">•</span>
                        <span className="text-text-secondary">{activeExp.type}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center sm:items-end gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-text-secondary">
                        <Calendar className="w-3 h-3 text-primary" />
                        {activeExp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-medium text-primary">
                        <MapPin className="w-3 h-3" />
                        {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-text-secondary text-xs sm:text-sm my-4 leading-relaxed font-light">
                    {activeExp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-3 mb-6">
                    <h4 className="text-[11px] uppercase tracking-wider font-bold text-text-muted flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-primary" /> Key Contributions
                    </h4>
                    <ul className="space-y-2">
                      {activeExp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Applied */}
                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-[10px] uppercase tracking-wider font-bold text-text-muted mb-2">
                      Technologies Applied
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeExp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/5 border border-white/5 text-text-secondary hover:border-primary/30 transition-all"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
