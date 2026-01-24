"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ["home", "skills", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="#home" className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary/50 group">
                <Image
                    src="/images/Ebson-Joy.jpg"
                    alt="Ebson Joy"
                    width={40}
                    height={40}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <span className="hidden md:block text-lg font-bold text-white tracking-wide uppercase">
                Ebson Joy
            </span>
        </Link>

        {/* Desktop Nav & Actions */}
        <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                       relative px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wider
                       ${activeSection === item.href.slice(1) ? "text-primary" : "text-text-secondary hover:text-white"}
                    `}
                  >
                    {item.label}
                    {activeSection === item.href.slice(1) && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                    )}
                  </Link>
                ))}
            </div>

            {/* Resume Button */}
             <a
               href="/Ebson_Joy.pdf"
               target="_blank"
               className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 hover:border-primary/50 transition-all flex items-center gap-2 uppercase text-xs tracking-wider font-semibold"
             >
               Resume
               <ExternalLink className="w-3 h-3 text-primary" />
             </a>
        </div>

        {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
      </div>

      {/* Mobile Menu Dropdown */}
        <div
          className={`
            fixed inset-0 top-[70px] bg-background/95 backdrop-blur-xl z-40
            flex flex-col items-center justify-center gap-6 transition-all duration-300
            ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          `}
        >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-2xl font-bold uppercase tracking-widest transition-colors
                  ${activeSection === item.href.slice(1) ? "text-primary" : "text-white hover:text-primary"}
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
             <a
               href="/Ebson_Joy.pdf"
               target="_blank"
               className="mt-4 px-8 py-3 bg-primary text-navy rounded-full font-bold uppercase tracking-wide flex items-center gap-2"
             >
               Resume <ExternalLink className="w-4 h-4" />
             </a>
        </div>
    </nav>
  );
};

export default Navbar;