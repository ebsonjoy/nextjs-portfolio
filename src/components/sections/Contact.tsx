"use client";
import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [notice, setNotice] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setNotice("You can email me at " + personalInfo.email);
    }
  }
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    if (Object.values(payload).some((value) => !String(value).trim())) {
      setStatus("error");
      setNotice("Please complete every field before sending.");
      return;
    }
    setStatus("sending");
    setNotice("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(
          result.error ||
            "Your message could not be sent. Please email me directly.",
        );
      setStatus("success");
      setNotice("Message sent. Thanks for reaching out — I’ll be in touch!");
      form.reset();
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "The request timed out. Please email me directly.",
      );
    }
  }
  return (
    <section id="contact" className="contact-section">
      <div className="page-width contact-grid">
        <div>
          <p className="eyebrow">
            <span>05 /</span> WHAT’S NEXT?
          </p>
          <h2>
            Good things start
            <br />
            with a <span className="serif-accent">hello.</span>
            <span className="contact-star" aria-hidden="true">
              ✳
            </span>
          </h2>
          <p className="contact-description">
            Have an interesting opportunity or something in mind?
            <br />
            I’d love to hear about it.
          </p>
          <div className="contact-email">
            <a href={`mailto:${personalInfo.email}`}>
              {personalInfo.email}
              <ArrowUpRight size={21} />
            </a>
            <button
              onClick={copyEmail}
              aria-label={copied ? "Email copied" : "Copy email address"}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <span className="sr-only" role="status">
              {copied ? "Email copied to clipboard" : ""}
            </span>
          </div>
          <div className="contact-availability">
            <span className="status-dot" /> Open to full-time roles & freelance
            projects
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3>Let’s make something great.</h3>
          <div className="form-row">
            <div>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                required
                maxLength={120}
                placeholder="Alex Smith"
              />
            </div>
            <div>
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                placeholder="alex@company.com"
              />
            </div>
          </div>
          <label htmlFor="message">What do you have in mind?</label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={5000}
            rows={3}
            placeholder="A role, a project, or just a hello…"
          />
          <button
            className="button button-dark"
            disabled={status === "sending"}
            type="submit"
          >
            {status === "sending" ? "Sending message…" : "Send message"}
            <ArrowUpRight size={18} />
          </button>
          <p className="form-note">
            <Mail size={12} /> Straight to my inbox. Let’s talk.
          </p>
          {notice && (
            <p
              className={`form-status ${status}`}
              role={status === "error" ? "alert" : "status"}
            >
              {notice}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
