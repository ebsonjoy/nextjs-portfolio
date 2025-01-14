import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, ExternalLink, Code2, Server, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with typing effect */}
          <div className="text-center mb-8 space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Hi, I&apos;m Ebson Joy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light">
              Full Stack Developer specializing in modern web solutions
            </p>
          </div>

          {/* Skills cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="group p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Layout className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">React, Next.js, TypeScript expert creating responsive, modern UIs</p>
            </div>
            <div className="group p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Server className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Node.js, Express, MongoDB specialist building scalable APIs</p>
            </div>
            <div className="group p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Git, Docker, AWS, and modern development workflows</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View Projects
            </button>
            <button className="group bg-white dark:bg-gray-800 border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Contact Me
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="group p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <FaGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:text-blue-600 transition-all" />
            </a>
            <a href="#" className="group p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:text-blue-600 transition-all" />
            </a>
            <a href="#" className="group p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:scale-110 group-hover:text-blue-600 transition-all" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;