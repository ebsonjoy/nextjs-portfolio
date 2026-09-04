'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, FileDown } from 'lucide-react';
import { personalInfo } from '@/lib/data';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'experience', 'projects', 'skills', 'about', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 sm:py-3 bg-navy/90 backdrop-blur-xl border-b border-white/10 shadow-md'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 overflow-hidden rounded-full border-2 border-primary/40 group-hover:border-primary transition-all duration-300 shadow-sm">
            <Image
              src="/images/Ebson-Joy.jpg"
              alt="Ebson Joy"
              width={32}
              height={32}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase group-hover:text-primary transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[9px] text-text-muted font-mono tracking-widest hidden sm:block">
              FULL-STACK DEVELOPER
            </span>
          </div>
        </Link>

        {/* Desktop Nav & Actions */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-0.5 p-1 rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors rounded-full ${
                  activeSection === item.href.slice(1)
                    ? 'text-navy bg-primary shadow-sm'
                    : 'text-text-secondary hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Resume Download */}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-primary/10 hover:bg-primary text-primary hover:text-navy rounded-full border border-primary/30 transition-all duration-300 flex items-center gap-1.5 uppercase text-xs tracking-wider font-bold shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden p-1.5 text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden fixed inset-x-0 top-[56px] bg-navy/95 backdrop-blur-2xl border-b border-white/10 p-5 flex flex-col gap-3 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'bg-primary text-navy'
                  : 'text-text-secondary hover:text-white hover:bg-white/5'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 bg-primary text-navy rounded-xl font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-xs shadow-md mt-1"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FileDown className="w-3.5 h-3.5" /> Download CV Resume
        </a>
      </div>
    </nav>
  );
}