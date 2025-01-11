'use client'
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Define animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-96 h-96 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl" />
        <div className="absolute -left-64 -bottom-64 w-96 h-96 rounded-full bg-purple-100 dark:bg-purple-900/20 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24 flex flex-col items-center justify-center">
        <motion.div
          {...fadeInUp}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Hi, I&apos;m Ebson Joy
          </h1>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer crafting beautiful web experiences with the MERN stack
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <ExternalLink className="w-5 h-5" />
            View Projects
          </button>
          <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </button>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex gap-6"
        >
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;