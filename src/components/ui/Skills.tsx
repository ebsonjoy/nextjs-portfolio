'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench } from 'lucide-react';
import { skills } from '@/lib/data';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
}

const SkillCard = ({ title, skills, icon, gradientFrom, gradientTo }: SkillCardProps) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
      <div className="flex items-center gap-4 mb-8">
        <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group/skill"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400 transition-colors">
                {skill.name}
              </span>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {skill.level}%
              </span>
            </div>
            <div className="relative h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full" />
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse" />
        <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-lighten blur-3xl animate-pulse delay-1000" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              A showcase of my professional skills and technical proficiency
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillCard
              title="Frontend"
              skills={skills.frontend}
              icon={<Code2 className="w-6 h-6" />}
              gradientFrom="from-blue-600"
              gradientTo="to-blue-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCard
              title="Backend"
              skills={skills.backend}
              icon={<Server className="w-6 h-6" />}
              gradientFrom="from-purple-600"
              gradientTo="to-purple-400"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <SkillCard
              title="Tools"
              skills={skills.tools}
              icon={<Wrench className="w-6 h-6" />}
              gradientFrom="from-indigo-600"
              gradientTo="to-indigo-400"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;