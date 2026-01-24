'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, MapPin, User, Calendar, Briefcase, Award } from 'lucide-react';
import { achievements } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const timelineData = [
  {
    type: 'bio',
    title: 'Who am I?',
    icon: <User className="w-6 h-6" />,
    content: (
      <div className="space-y-4">
        <p className="text-text-secondary text-lg leading-relaxed">
          I&apos;m a passionate Full Stack Developer with a knack for building intuitive and performing web applications. My journey started with a curiosity for how things work on the internet, which quickly evolved into a career obsession with clean code, modern architectures, and user-centric design.
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-text-primary">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span>Dubai, UAE</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-text-primary">
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            <span>Available for Hire</span>
          </div>
        </div>
      </div>
    )
  },
  {
    type: 'education',
    title: 'Education',
    icon: <GraduationCap className="w-6 h-6" />,
    content: (
      <div>
        <h4 className="text-xl font-bold text-white">BSc Computer Science</h4>
        <p className="text-primary font-medium">Kannur University</p>
        <p className="text-text-muted mt-2 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> 2019 - 2022
        </p>
      </div>
    )
  },
  {
    type: 'certification',
    title: 'Certification',
    icon: <Award className="w-6 h-6" />,
    content: (
      <div>
        <h4 className="text-xl font-bold text-white">MERN Stack Training</h4>
        <p className="text-primary font-medium">Brototype</p>
        <p className="text-text-muted mt-2 flex items-center gap-2">
          <Calendar className="w-4 h-4" /> 2023
        </p>
      </div>
    )
  },
  {
    type: 'achievements',
    title: 'Achievements',
    icon: <Trophy className="w-6 h-6" />,
    content: (
      <ul className="space-y-3">
        {achievements.slice(0, 4).map((item, i) => (
          <li key={i} className="text-sm text-text-secondary flex gap-3 group/item">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    )
  }
];

interface TimelineEntry {
  type: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const TimelineItem = ({ item, index }: { item: TimelineEntry, index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-between mb-12 md:mb-16 w-full ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      {/* Central Node */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(100,255,218,0.3)]"
        >
          <div className="text-primary scale-90">
            {item.icon}
          </div>
        </motion.div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className={`w-full md:w-[45%] pl-14 md:pl-0 ${isLeft ? 'md:text-left' : 'md:text-left'}`}
      >
        <div className="p-6 rounded-3xl bg-navy-light/50 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all group overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
          <h3 className="text-xs uppercase font-black tracking-widest text-primary mb-1 opacity-60">
            {item.type}
          </h3>
          <h2 className="text-xl font-bold text-white mb-4">
            {item.title}
          </h2>
          <div className="text-sm md:text-base">
            {item.content}
          </div>
        </div>
      </motion.div>

      {/* Spacing for layout */}
      <div className="hidden md:block w-[45%]" />
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20 md:mb-32">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">
              My <span className="text-primary">Legacy</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto font-light">
              A journey of persistent learning, building, and solving complex problems.
            </p>
          </motion.div>

          {/* Timeline Wrapper */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent" 
            />

            {/* Timeline Items */}
            <div className="relative">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
