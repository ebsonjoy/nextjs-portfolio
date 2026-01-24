import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy pt-24 pb-12 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          
          {/* Main CTA */}
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Let&apos;s make something <br />
              <span className="text-primary italic">amazing</span> together.
            </h2>
            <a 
              href="mailto:ebsonjoy721@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-3xl text-text-secondary hover:text-white transition-colors group cursor-pointer"
            >
              <span className="border-b border-white/20 group-hover:border-primary pb-2 transition-colors">ebsonjoy721@gmail.com</span>
              <ArrowUpRight className="w-8 h-8 text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
             <p className="text-text-muted uppercase tracking-widest text-sm font-semibold mb-2">Socials</p>
             <div className="flex gap-4">
                <a href="https://github.com/ebsonjoy" target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300">
                    <FaGithub className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/ebson-joy" target="_blank" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300">
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ebsonjoy721@gmail.com" className="p-4 rounded-full bg-white/5 hover:bg-primary hover:text-navy text-white transition-all duration-300">
                     <Mail className="w-6 h-6" />
                </a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-8">
              <a href="#home" className="text-text-secondary hover:text-white text-sm transition-colors">Home</a>
              <a href="#about" className="text-text-secondary hover:text-white text-sm transition-colors">About</a>
              <a href="#projects" className="text-text-secondary hover:text-white text-sm transition-colors">Projects</a>
           </div>

           <p className="text-text-muted text-sm">
             © {currentYear} Ebson Joy. Designed & Built in Next.js
           </p>
        </div>
      </div>
    </footer>
  );
}