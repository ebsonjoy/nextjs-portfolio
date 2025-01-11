// src/components/layout/Footer.tsx
export default function Footer() {
    const currentYear = new Date().getFullYear()
  
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-blue-400">Home</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-blue-400">Skills</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400">Contact</a>
                </li>
              </ul>
            </div>
  
            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:your.email@example.com" className="hover:text-blue-400">
                    Email
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Copyright */}
            <div>
              <h3 className="text-xl font-bold mb-4">About</h3>
              <p className="text-gray-400">
                Full Stack Developer specializing in creating modern web applications
                with a focus on user experience and clean code.
              </p>
            </div>
          </div>
  
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {currentYear} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }