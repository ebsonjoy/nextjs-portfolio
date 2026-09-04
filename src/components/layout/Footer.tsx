import React from 'react';
import { ArrowUpRight, Mail, Phone, FileDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy pt-14 pb-8 overflow-hidden border-t border-white/5">
      {/* Decorative gradient & glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-8">
          {/* Main CTA */}
          <div className="max-w-xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-2 block">
              Start a Conversation
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
              Ready to create something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">
                extraordinary
              </span>{' '}
              together?
            </h2>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 text-base sm:text-lg text-text-secondary hover:text-white transition-colors group cursor-pointer"
              >
                <span className="border-b border-white/20 group-hover:border-primary pb-0.5 transition-colors">
                  {personalInfo.email}
                </span>
                <ArrowUpRight className="w-4 h-4 text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Social Links & Quick Actions */}
          <div className="flex flex-col gap-3">
            <p className="text-text-muted uppercase tracking-widest text-[10px] font-bold">
              Connect & Profiles
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300 border border-white/5"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300 border border-white/5"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300 border border-white/5"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume"
                className="px-3.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary hover:text-navy text-primary transition-all duration-300 border border-primary/20 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-text-muted">
          <div className="flex flex-wrap gap-4 font-medium uppercase tracking-wider">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p>© {currentYear} {personalInfo.name}. Designed & Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}