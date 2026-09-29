import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { personalInfo, stats } from "@/lib/data";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="hero page-width">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" /> Available for opportunities
          </div>
          <p className="hero-intro">
            EBSON JOY / FULL-STACK DEVELOPER <span className="intro-line" />
          </p>
          <h1>
            Thoughtful code.
            <br />
            Meaningful
            <br />
            <span className="serif-accent">experiences.</span>
          </h1>
          <p className="hero-description">
            A full-stack developer turning complex problems into simple, useful
            digital products. From the first pixel to the last API.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowUpRight size={18} />
            </a>
            <a
              className="text-link"
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download résumé <ArrowDown size={16} />
            </a>
          </div>
          <div className="hero-location">
            <MapPin size={14} />
            <span>Based in Kerala, India. Building for the world.</span>
          </div>
        </div>
        <HeroVisual />
      </div>
      <div className="hero-bottom">
        <div className="hero-stats">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>
                {stat.label
                  .replace("Production & Core Projects", "Projects built")
                  .replace("Years Experience", "Years of experience")
                  .replace("Production Deployments", "Production deployments")}
              </span>
            </div>
          ))}
        </div>
        <div className="social-links">
          <span>ELSEWHERE</span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>
          <a
            href="#projects"
            className="scroll-cue"
            aria-label="Scroll to selected work"
          >
            <ArrowDown size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}
