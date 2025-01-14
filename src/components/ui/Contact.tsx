import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-4 w-96 h-96 bg-gradient-to-tr from-blue-400/10 to-purple-400/10 blur-3xl animate-pulse delay-1000" />
      </div>

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
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="group p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I&apos;m currently available for freelance work or full-time positions. 
                Feel free to reach out!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <a href="mailto:your.email@example.com" 
                   className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/50">
                    <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    your.email@example.com
                  </span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/yourusername" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50">
                    <FaGithub className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                    github.com/yourusername
                  </span>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/yourusername" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="group flex items-center gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-700/50 transition-all">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900/50">
                    <FaLinkedin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                    linkedin.com/in/yourusername
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="group p-8 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}