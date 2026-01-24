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
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Local Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#4A148C]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           variants={staggerContainer}
           className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Ready to start?</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight">
              Let&apos;s build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-to">together.</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? My inbox is always open.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Contact Details Card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 space-y-6">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-3xl font-bold text-white mb-8">Reach Out</h3>
                
                <div className="space-y-4">
                  <ContactLink 
                    href="mailto:ebsonjoy721@gmail.com" 
                    icon={<Mail className="w-5 h-5" />} 
                    label="Email" 
                    value="ebsonjoy721@gmail.com" 
                  />
                  <ContactLink 
                    href="https://github.com/ebsonjoy" 
                    icon={<FaGithub className="w-5 h-5" />} 
                    label="GitHub" 
                    value="github.com/ebsonjoy" 
                  />
                  <ContactLink 
                    href="https://www.linkedin.com/in/ebson-joy/" 
                    icon={<FaLinkedin className="w-5 h-5" />} 
                    label="LinkedIn" 
                    value="linkedin.com/ebson-joy" 
                  />
                </div>

              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div variants={fadeInUp} className="md:col-span-3">
              <div className="p-10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />
                 
                 <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 relative">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput 
                        label="Name" 
                        id="name" 
                        name="name" 
                        placeholder="John" 
                        error={formErrors.name} 
                      />
                      <FormInput 
                        label="Email" 
                        id="email" 
                        name="email" 
                        type="email"
                        placeholder="john@example.com" 
                        error={formErrors.email} 
                      />
                    </div>

                    <div className="space-y-3">
                      <label htmlFor="message" className="block text-sm font-bold text-white uppercase tracking-wider ml-1">Your Vision</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={5} 
                        className={`w-full px-6 py-5 rounded-2xl bg-white/[0.03] border ${formErrors.message ? 'border-red-500/50' : 'border-white/10'} focus:border-primary/50 focus:ring-4 focus:ring-primary/10 text-white placeholder-text-muted/50 transition-all outline-none resize-none transition-all duration-300`} 
                        placeholder="Tell me about what you're dreaming of..."
                      />
                      {formErrors.message && <p className="text-red-400 text-xs mt-2 pl-1 animate-fadeIn">{formErrors.message}</p>}
                    </div>
                    
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-navy py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-white transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(var(--primary-rgb),0.3)] hover:shadow-primary/40 active:scale-[0.98]"
                    >
                      <span className="relative z-10">{isSubmitting ? 'Transmitting...' : 'Send Signal'}</span>
                      {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />}
                    </button>
                 </form>

                 {/* Success/Error Overlay */}
                 <AnimatePresence>
                   {modalMessage && (
                     <motion.div 
                       initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                       animate={{ opacity: 1, backdropFilter: 'blur(10px)' }}
                       exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                       className="absolute inset-0 z-50 flex items-center justify-center p-10 bg-navy/60"
                     >
                       <motion.div 
                         initial={{ scale: 0.9, opacity: 0 }}
                         animate={{ scale: 1, opacity: 1 }}
                         className={`p-8 rounded-[2rem] text-center shadow-2xl border ${
                           statusType === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'
                         }`}
                       >
                         {statusType === 'success' ? <CheckCircle className="w-16 h-16 mx-auto mb-4" /> : <AlertCircle className="w-16 h-16 mx-auto mb-4" />}
                         <h4 className="text-2xl font-bold mb-2">
                           {statusType === 'success' ? 'Message Sent!' : 'Transmission Failed'}
                         </h4>
                         <p className="text-white/80">{modalMessage}</p>
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

function ContactLink({ href, icon, label, value }: { href: string; icon: React.ReactNode; label: string; value: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/[0.05] transition-all group border border-transparent hover:border-white/5">
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.05] text-text-muted group-hover:bg-primary group-hover:text-navy transition-all duration-500 shadow-inner">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-text-muted uppercase tracking-widest">{label}</p>
        <p className="text-text-secondary group-hover:text-white transition-colors">{value}</p>
      </div>
    </a>
  );
}

function FormInput({ label, id, name, type = "text", placeholder, error }: { label: string; id: string; name: string; type?: string; placeholder: string; error?: string }) {
  return (
    <div className="space-y-3">
      <label htmlFor={id} className="block text-sm font-bold text-white uppercase tracking-wider ml-1">{label}</label>
      <input 
        type={type} 
        id={id} 
        name={name} 
        className={`w-full px-6 py-5 rounded-2xl bg-white/[0.03] border ${error ? 'border-red-500/50' : 'border-white/10'} focus:border-primary/50 focus:ring-4 focus:ring-primary/10 text-white placeholder-text-muted/50 transition-all outline-none transition-all duration-300`} 
        placeholder={placeholder} 
      />
      {error && <p className="text-red-400 text-xs mt-2 pl-1 animate-fadeIn">{error}</p>}
    </div>
  );
}
