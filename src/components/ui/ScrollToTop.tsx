"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return visible ? (
    <a className="back-to-top" href="#home" aria-label="Back to top">
      <ArrowUp size={19} />
    </a>
  ) : null;
}
