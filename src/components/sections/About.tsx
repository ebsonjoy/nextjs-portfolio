'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Code, CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { personalInfo, education, achievements } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const corePillars = [
  {
    icon: Code,
    title: 'Clean Architecture',
    description: 'Maintainable codebases, Repository patterns, modular NestJS/Express backends, and strict TypeScript.',
  },
  {
    icon: Zap,
    title: 'High Performance & Real-Time',
    description: 'Low-latency WebSockets, Socket.IO, and Agora RTC for fluid live interactions, chat, and media streaming.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Enterprise Integrations',
    description: 'Rigorous RBAC access control, JWT authentication, and resilient Stripe/Razorpay payment webhook handling.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-14 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Background & Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">Ebson Joy</span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto font-light leading-relaxed">
              Passionate full-stack developer turning business requirements into scalable, secure, and intuitive web platforms.
            </p>
          </motion.div>

          {/* Top Grid: Bio & Core Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
            {/* Bio Card */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-7 p-6 sm:p-7 rounded-2xl bg-navy-light/60 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white mb-3">
                  Engineering Resilient Digital Systems
                </h3>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-light mb-4">
                  {personalInfo.summary}
                </p>
                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-light mb-4">
                  Over the past 2+ years, I have engineered production solutions across diverse domains—including UAE visa processing platforms, real-time video/audio calling SaaS, and luxury e-commerce. I focus on end-to-end quality, from schema design and API performance to responsive frontend user experiences.
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-primary">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-primary">
                  <MapPin className="w-3 h-3 text-primary" />
                  <span>{personalInfo.internationalExp}</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>Available for Hire</span>
                </div>
              </div>
            </motion.div>

            {/* Core Pillars */}
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col gap-3">
              {corePillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-navy-light/40 backdrop-blur-md border border-white/5 hover:border-primary/30 transition-all flex-1"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                      <pillar.icon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Education & Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-navy-light/60 backdrop-blur-xl border border-white/10 shadow-lg relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Education</h3>
                  <p className="text-[11px] text-text-muted">Academic Foundation</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-sm font-bold text-white">{education.degree}</h4>
                  <p className="text-xs font-semibold text-primary mt-0.5">{education.institution}</p>
                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {education.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary/80" /> {education.location}
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed font-light">
                    {education.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-0.5">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <h4 className="text-sm font-bold text-white">Full-Stack Web Development</h4>
                  </div>
                  <p className="text-xs font-semibold text-primary">Brototype (Training & Projects)</p>
                  <div className="flex items-center gap-3 mt-1.5 text-[11px] text-text-muted font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> Dec 2023 - Jul 2025
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary/80" /> Kerala, India
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 sm:p-7 rounded-2xl bg-navy-light/60 backdrop-blur-xl border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Career Highlights</h3>
                  <p className="text-[11px] text-text-muted">Key Milestones & Deliveries</p>
                </div>
              </div>

              <ul className="space-y-2.5">
                {achievements.map((item, i) => (
                  <li
                    key={i}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed group hover:border-primary/30 transition-colors"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
