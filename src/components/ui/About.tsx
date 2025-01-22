'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Heart } from 'lucide-react';
import { achievements } from '@/lib/data';

const About = () => {

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-600" />
            Education & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">BSc Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Kannur University</p>
              <p className="text-gray-500 dark:text-gray-400">2019 - 2022</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">MERN Stack Training</h3>
              <p className="text-gray-600 dark:text-gray-300">Brototype</p>
              <p className="text-gray-500 dark:text-gray-400">2023</p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-blue-600" />
            Key Achievements
          </h2>
          <div className="grid gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <p className="text-gray-600 dark:text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Heart className="w-8 h-8 text-blue-600" />
            Beyond Coding
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              When I’m not coding, I love exploring new technologies, solving real-world problems, and building innovative projects. I enjoy contributing to open-source communities and continuously improving my skills.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Apart from development, I am passionate about learning industry trends, experimenting with new tools, and optimizing performance in web applications. I believe in writing clean, maintainable code that enhances user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              In my free time, I enjoy tech discussions, watching coding tutorials, and brainstorming ideas for future projects. I’m always excited to collaborate and create something impactful!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
