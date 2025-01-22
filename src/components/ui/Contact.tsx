'use client'
import { useState, useRef } from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement | null>(null);

  const validateForm = (formData: FormData) => {
    const errors: { [key: string]: string } = {};
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || name.trim() === '') {
      errors.name = 'Name is required.';
    }
    if (!email || email.trim() === '') {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!message || message.trim() === '') {
      errors.message = 'Message is required.';
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      const response = await fetch('https://formspree.io/f/xpwwnayd', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setModalMessage('Thank you for your message! I will get back to you soon.');
        formRef.current?.reset();
      } else {
        setModalMessage('Oops! Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModalMessage('Error connecting to the server. Please check your internet connection.');
    }
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Let&apos;s collaborate on your next project</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="group p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">I&apos;m currently available for freelance work or full-time positions.</p>
              <div className="space-y-6">
                <a href="mailto:ebsonjoy721@gmail.com" className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">ebsonjoy721@gmail.com</span>
                </a>
                <a href="https://github.com/ebsonjoy" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <FaGithub className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">github.com/ebsonjoy</span>
                </a>
                <a href="https://www.linkedin.com/in/ebson-joy/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <FaLinkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">linkedin.com/in/ebson-joy</span>
                </a>
              </div>
            </div>
          </div>
          <div className="group p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_replyto" value="ebsonjoy721@gmail.com" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" required className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${formErrors.name ? 'border-red-500' : 'border-gray-200'} dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`} placeholder="Your Name" />
                {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email" required className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`} placeholder="your@email.com" />
                {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} className={`w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all`} placeholder="Your message..."></textarea>
                {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300">{modalMessage}</p>
            <button onClick={() => setModalMessage(null)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
