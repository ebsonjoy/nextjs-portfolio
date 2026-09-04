'use client';
import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Copy, Check, ExternalLink, Globe } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { personalInfo } from '@/lib/data';

export default function Contact() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {};
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || name.trim() === '') errors.name = 'Name is required.';
    if (!email || email.trim() === '') {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!message || message.trim() === '') errors.message = 'Message is required.';

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';

    try {
      const response = await fetch('https://portfolio-contact-api-lwkd.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setModalMessage('Message transmitted successfully! I will get back to you shortly.');
        setStatusType('success');
        formRef.current?.reset();
      } else {
        setModalMessage('Something went wrong on the server. Please email me directly at ebsonjoy721@gmail.com.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setModalMessage('Network error. Please reach out via email or phone directly.');
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setModalMessage(null);
        setStatusType(null);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-8 sm:py-14 relative overflow-hidden">
      {/* Ambient background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-10 sm:mb-12">
            <div className="inline-block px-3 py-1 mb-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Get in Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-white tracking-tight">
              Let&apos;s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">Exceptional</span>
            </h2>
            <p className="text-text-secondary text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-light">
              Looking for a full-stack developer for a full-time role, contract, or exciting project? Let&apos;s connect.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 items-start">
            {/* Contact Details Card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 space-y-3">
              <div className="p-6 rounded-2xl bg-navy-light/60 backdrop-blur-2xl border border-white/10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-indigo-400 to-transparent" />

                <h3 className="text-lg font-bold text-white mb-4">Contact Channels</h3>

                <div className="space-y-2.5">
                  {/* Email */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all flex items-center justify-between group">
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-3 flex-1 min-w-0"
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-navy transition-colors">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Direct Email</p>
                        <p className="text-xs text-text-secondary group-hover:text-white transition-colors truncate">
                          {personalInfo.email}
                        </p>
                      </div>
                    </a>
                    <button
                      onClick={copyEmail}
                      className="p-1.5 rounded-md text-text-muted hover:text-primary hover:bg-white/5 transition-colors"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all flex items-center gap-3 group block"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-navy transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Phone / WhatsApp</p>
                      <p className="text-xs text-text-secondary group-hover:text-white transition-colors">
                        {personalInfo.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Location</p>
                      <p className="text-xs text-text-secondary">
                        {personalInfo.location} <span className="text-text-muted">({personalInfo.internationalExp})</span>
                      </p>
                    </div>
                  </div>

                  {/* Portfolio */}
                  <a
                    href={personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary group-hover:text-navy transition-colors">
                        <Globe className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <p className="text-[9px] font-bold text-text-muted uppercase tracking-wider">Website</p>
                        <p className="text-xs text-text-secondary group-hover:text-white transition-colors">
                          ebson.online
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-text-muted group-hover:text-primary transition-colors" />
                  </a>
                </div>

                {/* Social Buttons */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2.5">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 flex items-center justify-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider transition-all"
                  >
                    <FaGithub className="w-3.5 h-3.5 text-primary" /> GitHub
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 flex items-center justify-center gap-1.5 text-xs font-bold text-white uppercase tracking-wider transition-all"
                  >
                    <FaLinkedin className="w-3.5 h-3.5 text-primary" /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <div className="p-6 sm:p-7 rounded-2xl bg-navy-light/60 backdrop-blur-2xl border border-white/10 shadow-xl relative overflow-hidden">
                <h3 className="text-lg font-bold text-white mb-4">Send a Message</h3>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 relative">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-[11px] font-bold text-white uppercase tracking-wider">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border ${
                          formErrors.name ? 'border-red-500/60' : 'border-white/10'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-text-muted/40 text-xs sm:text-sm outline-none transition-all`}
                        placeholder="Your Name"
                      />
                      {formErrors.name && (
                        <p className="text-red-400 text-[10px] font-medium mt-0.5">{formErrors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-[11px] font-bold text-white uppercase tracking-wider">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border ${
                          formErrors.email ? 'border-red-500/60' : 'border-white/10'
                        } focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-text-muted/40 text-xs sm:text-sm outline-none transition-all`}
                        placeholder="your@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-400 text-[10px] font-medium mt-0.5">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="message" className="block text-[11px] font-bold text-white uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border ${
                        formErrors.message ? 'border-red-500/60' : 'border-white/10'
                      } focus:border-primary focus:ring-2 focus:ring-primary/20 text-white placeholder-text-muted/40 text-xs sm:text-sm outline-none resize-none transition-all`}
                      placeholder="Your project, opportunity, or idea..."
                    />
                    {formErrors.message && (
                      <p className="text-red-400 text-[10px] font-medium mt-0.5">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-navy py-3 rounded-xl font-bold uppercase tracking-wider text-xs hover:bg-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group shadow-md"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>

                {/* Status Overlay */}
                <AnimatePresence>
                  {modalMessage && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-navy/85 backdrop-blur-md"
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className={`p-5 rounded-xl text-center shadow-2xl border max-w-sm ${
                          statusType === 'success'
                            ? 'bg-green-500/10 border-green-500/30 text-green-400'
                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                        }`}
                      >
                        {statusType === 'success' ? (
                          <CheckCircle className="w-10 h-10 mx-auto mb-2" />
                        ) : (
                          <AlertCircle className="w-10 h-10 mx-auto mb-2" />
                        )}
                        <h4 className="text-base font-bold mb-1">
                          {statusType === 'success' ? 'Message Sent' : 'Notice'}
                        </h4>
                        <p className="text-xs text-white/90 leading-relaxed">{modalMessage}</p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
