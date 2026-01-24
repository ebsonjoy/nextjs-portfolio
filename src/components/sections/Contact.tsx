'use client'
import { useState, useRef } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

export default function Contact() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [statusType, setStatusType] = useState<'success' | 'error' | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

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
        setModalMessage('Message sent successfully! I will get back to you soon.');
        setStatusType('success');
        formRef.current?.reset();
      } else {
        setModalMessage('Something went wrong. Please try again later.');
        setStatusType('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setModalMessage('Network error. Please check your connection.');
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
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-text-secondary text-lg">Let&apos;s build something extraordinary together.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="p-8 rounded-3xl bg-navy-light/50 backdrop-blur-xl border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-text-secondary mb-8 leading-relaxed">
                  I&apos;m currently open to freelance projects and full-time opportunities.
                  Feel free to reach out with any questions or just to say hi!
                </p>
                <div className="space-y-6">
                  <a href="mailto:ebsonjoy721@gmail.com" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <span className="text-text-secondary group-hover:text-white transition-colors">ebsonjoy721@gmail.com</span>
                  </a>
                  <a href="https://github.com/ebsonjoy" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FaGithub className="w-5 h-5" />
                    </div>
                    <span className="text-text-secondary group-hover:text-white transition-colors">github.com/ebsonjoy</span>
                  </a>
                   <a href="https://www.linkedin.com/in/ebson-joy/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FaLinkedin className="w-5 h-5" />
                    </div>
                    <span className="text-text-secondary group-hover:text-white transition-colors">linkedin.com/in/ebson-joy</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="relative">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-3xl bg-navy-light/30 backdrop-blur-md border border-white/5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={`w-full px-5 py-4 rounded-xl bg-navy/50 border ${formErrors.name ? 'border-red-500/50' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-text-muted transition-all outline-none`} 
                    placeholder="John Doe" 
                  />
                  {formErrors.name && <p className="text-red-400 text-xs mt-2 pl-1">{formErrors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={`w-full px-5 py-4 rounded-xl bg-navy/50 border ${formErrors.email ? 'border-red-500/50' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-text-muted transition-all outline-none`} 
                    placeholder="john@example.com" 
                  />
                  {formErrors.email && <p className="text-red-400 text-xs mt-2 pl-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    className={`w-full px-5 py-4 rounded-xl bg-navy/50 border ${formErrors.message ? 'border-red-500/50' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary text-white placeholder-text-muted transition-all outline-none resize-none`} 
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {formErrors.message && <p className="text-red-400 text-xs mt-2 pl-1">{formErrors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-4 rounded-xl font-medium hover:bg-primary-hover shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>

              {/* Status Toast */}
              <AnimatePresence>
                {modalMessage && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className={`absolute bottom-4 left-0 right-0 mx-auto w-max px-6 py-3 rounded-full flex items-center gap-2 shadow-xl ${
                      statusType === 'success' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    } backdrop-blur-md`}
                  >
                    {statusType === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                    <span className="text-sm font-medium">{modalMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
