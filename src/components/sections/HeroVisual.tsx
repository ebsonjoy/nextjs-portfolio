import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="portrait-frame">
        <Image
          src="/images/Ebson-Joy.jpg"
          alt="Ebson Joy working at his laptop"
          fill
          priority
          loading="eager"
          sizes="(max-width: 700px) 90vw, 440px"
          className="portrait-image"
        />
        <div className="portrait-shade" />
        <div className="portrait-monogram" aria-hidden="true">
          EJ<span>DEVELOPER / MAKER</span>
        </div>
        <div className="portrait-caption">
          <span>
            A little curiosity.
            <br />A lot of building.
          </span>
          <ArrowUpRight size={26} />
        </div>
      </div>
      <div className="hero-star" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none">
          <path
            d="M50 4v92M4 50h92M17.5 17.5l65 65M17.5 82.5l65-65"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <circle
            cx="50"
            cy="50"
            r="13"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <div className="developer-card">
        <div className="code-icon">
          <Code2 size={25} />
        </div>
        <div>
          <strong>Full-stack, full picture.</strong>
          <span>Design-minded. Engineering-driven.</span>
        </div>
        <span className="card-dot" />
      </div>
      <span className="portrait-note">GOOD THINGS ARE BUILT WITH CARE.</span>
    </div>
  );
}
