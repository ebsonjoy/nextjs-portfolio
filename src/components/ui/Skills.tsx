'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';


interface Skill {
  name: string;
  level: number;
}

interface AccentColor {
  bg: string;
  text: string;
}


interface SkillCardProps {
  title: string;
  skills: Skill[];
  accentColor: AccentColor;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, accentColor }) => (
  <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-bold mb-8 text-gray-800">{title}</h3>
    <div className="space-y-6">
      {skills.map((skill) => (
        <div key={skill.name} className="group">
          <div className="flex justify-between items-center mb-3">
            <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">
              {skill.name}
            </span>
            <span className={`text-sm font-medium ${accentColor.text}`}>
              {skill.level}%
            </span>
          </div>
          <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className={`absolute top-0 left-0 h-full ${accentColor.bg} rounded-full`}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const colorSchemes = {
    frontend: {
      bg: 'bg-blue-500',
      text: 'text-blue-500',
    },
    backend: {
      bg: 'bg-green-500',
      text: 'text-green-500',
    },
    tools: {
      bg: 'bg-purple-500',
      text: 'text-purple-500',
    },
  };

 

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            My Skills
          </motion.h2>
          <p className="text-gray-600 text-lg">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCard
              title="Frontend Development"
              skills={skills.frontend}
              accentColor={colorSchemes.frontend}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SkillCard
              title="Backend Development"
              skills={skills.backend}
              accentColor={colorSchemes.backend}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillCard
              title="Development Tools"
              skills={skills.tools}
              accentColor={colorSchemes.tools}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
