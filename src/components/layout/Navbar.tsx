"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const items = [
  ["projects", "Work"],
  ["about", "About"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const update = () => {
      const current = items.find(([id]) => {
        const rect = document.getElementById(id)?.getBoundingClientRect();
        return rect && rect.top <= 180 && rect.bottom > 180;
      });
      setActive(current?.[0] ?? "");
    };
    window.addEventListener("scroll", update, { passive: true });
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", close);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="reading-progress" aria-hidden="true" />
      <div className="page-width nav-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label="Ebson Joy home"
          onClick={() => setOpen(false)}
        >
          ebson<span>.</span>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
          {items.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <a
          className="nav-resume"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {items.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
              <ArrowUpRight size={18} />
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Download résumé
            <ArrowUpRight size={18} />
          </a>
        </nav>
      )}
    </header>
  );
}
