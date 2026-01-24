'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiMongodb, SiJsonwebtokens, SiSocketdotio, SiGit,
  SiPostman, SiAmazonwebservices, SiHtml5, SiCss3, SiFirebase, SiBootstrap, SiSupabase, SiMysql, SiVercel, SiNestjs,
  SiStripe, SiRazorpay
} from 'react-icons/si';
import { Layout, Server, Terminal, Cpu, Zap, Code, Shield, Globe, Database, CreditCard } from 'lucide-react';
import { skills } from '@/lib/data';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const iconMap: { [key: string]: any } = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "HTML": SiHtml5,
  "CSS": SiCss3,
  "Bootstrap": SiBootstrap,
  "Redux Toolkit": SiRedux,
  "Framer Motion": Zap,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "Express": SiExpress,
  "MongoDB": SiMongodb,
  "SQL": Database,
  "Firebase": SiFirebase,
  "Supabase": SiSupabase,
  "Stripe": SiStripe,
  "Razorpay": SiRazorpay,
  "JWT": Shield,
  "WebSockets": Zap,
  "REST API": Globe,
  "Socket.io": SiSocketdotio,
  "Git": SiGit,
  "Vercel": SiVercel,
  "VS Code": Code,
  "Postman": SiPostman,
  "AWS": SiAmazonwebservices,
};

interface Skill {
  name: string;
  level: number;
}

const SkillCard = ({ name, icon: Icon }: { name: string, icon: any }) => (
  <motion.div
    whileHover={{ y: -5, scale: 1.05 }}
    className="group relative p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm flex flex-col items-center justify-center gap-3"
  >
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
    <div className="p-3 rounded-xl bg-navy-light/50 text-text-secondary group-hover:text-primary group-hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all duration-300">
      {Icon ? <Icon className="w-6 h-6" /> : <Cpu className="w-6 h-6" />}
    </div>
    <span className="text-xs font-mono font-bold tracking-wider text-text-muted group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const SkillCategory = ({ title, icon, skills, variant }: { title: string, icon: React.ReactNode, skills: Skill[], variant: any }) => (
  <motion.div 
    variants={variant}
    className="col-span-1"
  >
    <div className="flex items-center gap-4 mb-8">
      <div className="p-3 rounded-2xl bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <SkillCard 
          key={skill.name} 
          name={skill.name} 
          icon={iconMap[skill.name]} 
        />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent-to to-primary">
                Technical Mastery
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-primary/20 mx-auto rounded-full mb-8 overflow-hidden">
              <motion.div 
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-1/2 bg-primary rounded-full"
              />
            </div>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
              Forging robust digital solutions using a high-caliber selection of modern tools and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
             <SkillCategory 
                title="Frontend" 
                icon={<Layout className="w-8 h-8" />}
                skills={skills.frontend}
                variant={slideInLeft}
             />
             <SkillCategory 
                title="Backend" 
                icon={<Server className="w-8 h-8" />}
                skills={skills.backend}
                variant={fadeInUp}
             />
             <SkillCategory 
                title="DevTools" 
                icon={<Terminal className="w-8 h-8" />}
                skills={skills.tools}
                variant={slideInRight}
             />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;