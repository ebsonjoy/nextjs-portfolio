'use client';
import React from 'react';
import { motion, useTransform, useSpring, useMotionValue, MotionValue } from 'framer-motion';
import { Mail, ArrowRight, Github, Linkedin, Code, Cpu, Globe, Rocket } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import HeroAnimation from './HeroAnimation';

// --- Helper Components for "Wow" Effect ---

const ShuffleText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const letters = text.split("");
  return (
    <motion.span className="inline-flex overflow-hidden">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 1.2,
            delay: delay + (i * 0.05),
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

const MagneticButton = ({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  );
};

const FloatingIcon = ({ Icon, i, smoothMouseX, smoothMouseY }: { Icon: React.ElementType, i: number, smoothMouseX: MotionValue<number>, smoothMouseY: MotionValue<number> }) => {
  const x = useTransform(smoothMouseX, [-500, 500], [15 * (i + 1), -15 * (i + 1)]);
  const y = useTransform(smoothMouseY, [-500, 500], [15 * (i + 1), -15 * (i + 1)]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
          opacity: [0.1, 0.3, 0.1],
          y: [0, -40, 0],
          x: [0, 20, 0],
          rotate: [0, 10, 0]
      }}
      transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 1.5
      }}
      style={{
          position: 'absolute',
          top: `${20 + i * 20}%`,
          left: `${10 + i * 15}%`,
          x,
          y
      }}
    >
      <Icon className="w-12 h-12 text-primary/20" />
    </motion.div>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateX = useTransform(smoothMouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <section 
      id="home" 
      onMouseMove={handleMouseMove}
      className="h-screen relative flex items-center overflow-hidden bg-transparent perspective-1000"
    >
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[Code, Cpu, Globe, Rocket].map((Icon, i) => (
          <FloatingIcon 
            key={i} 
            Icon={Icon} 
            i={i} 
            smoothMouseX={smoothMouseX} 
            smoothMouseY={smoothMouseY} 
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-left"
          >
            <motion.div variants={fadeInUp} className="mb-4" style={{ translateZ: "60px" }}>
                <span className="text-text-secondary text-lg font-light tracking-widest uppercase flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-primary/50" />
                  Hi, I&apos;m <span className="text-white font-bold ml-1">Ebson Joy</span>
                </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white leading-[1]"
              style={{ translateZ: "100px" }}
            >
              <div className="block overflow-hidden">
                <ShuffleText text="Building" />
              </div>
              <div className="block overflow-hidden">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-to to-primary bg-300% animate-gradient">
                  <ShuffleText text="Scalable" delay={0.4} />
                </span>
              </div>
              <div className="block overflow-hidden">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-to to-primary bg-300% animate-gradient">
                  <ShuffleText text="Solutions" delay={0.8} />
                </span>
              </div>
            </motion.h1>

             <motion.p 
               variants={fadeInUp} 
               className="text-lg md:text-xl text-text-secondary max-w-xl mb-8 font-light leading-relaxed border-l-2 border-primary/20 pl-6 ml-1"
               style={{ translateZ: "50px" }}
             >
               Full-stack engineer specialized in crafting <span className="text-white font-semibold">high-performance</span> 
               digital architectures. I transform complex problems into seamless user experiences.
             </motion.p>

             {/* Action Buttons */}
             <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 pl-1" style={{ translateZ: "80px" }}>
               <MagneticButton 
                 onClick={() => scrollToSection('contact')}
                 className="relative px-10 py-5 bg-primary text-navy rounded-xl font-black uppercase tracking-widest text-xs hover:shadow-[0_0_30px_rgba(100,255,218,0.3)] transition-all flex items-center gap-4 group overflow-hidden"
               >
                 <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12" />
                 <span className="relative z-10">Initiate Contact</span>
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
               </MagneticButton>
               
               <div className="flex items-center gap-4">
                 {[
                   { icon: Github, href: "https://github.com/ebsonjoy" },
                   { icon: Linkedin, href: "https://www.linkedin.com/in/ebson-joy/" },
                   { icon: Mail, href: "#contact" }
                 ].map((social, i) => (
                   <motion.a 
                    key={i}
                    href={social.href} 
                    target={social.href.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer" 
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="p-4 bg-navy-light/50 rounded-xl text-text-secondary hover:text-primary hover:bg-white/5 transition-all border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(100,255,218,0.15)] backdrop-blur-md"
                   >
                     <social.icon className="w-6 h-6" />
                   </motion.a>
                 ))}
               </div>
             </motion.div>
          </motion.div>

          {/* Right Column: Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="relative hidden lg:block scale-90"
          >
             <div className="relative z-20">
               <HeroAnimation />
             </div>
             {/* Extra Glow Behind Animation */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;