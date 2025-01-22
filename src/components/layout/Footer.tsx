import {  Mail, Home, Code2, FolderGit2, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-blue-600/5 to-purple-600/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-gradient-to-tr from-blue-600/5 to-purple-600/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Home className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Code2 className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>Skills</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <FolderGit2 className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <MessageSquare className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="space-y-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                  <FaGithub className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
                <span>Follow on GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                  <FaLinkedin className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                </div>
                <span>Connect on LinkedIn</span>
              </a>
              <a 
                href="mailto:your.email@example.com" 
                className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors">
                  <Mail className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
                </div>
                <span>Send an Email</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h3>
            <div className="p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:shadow-xl transition-all">
              <p className="text-gray-300 leading-relaxed">
                Full Stack Developer specializing in creating modern web applications
                with a focus on user experience and clean code.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-800/50">
          <p className="text-center text-gray-400">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}