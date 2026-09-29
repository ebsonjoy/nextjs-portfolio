import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <a href="#home" className="wordmark">
        ebson<span>.</span>
      </a>
      <p>Thoughtfully built. Constantly evolving.</p>
      <div>
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub <ArrowUpRight size={13} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <ArrowUpRight size={13} />
        </a>
        <span>© {new Date().getFullYear()} Ebson Joy</span>
      </div>
    </footer>
  );
}
