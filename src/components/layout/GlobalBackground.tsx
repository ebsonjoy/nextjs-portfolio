'use client';
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Multiple springs for varying depth/reaction speeds
  const smoothMouseX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const fastMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const fastMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  const [particles, setParticles] = React.useState<Array<{
    left: string;
    top: string;
    width: number;
    height: number;
    delay: number;
    duration: number;
    x: number;
    y: number;
  }>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    // Initialize particles only on client to avoid hydration mismatch
    setParticles([...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: Math.random() * 4 + 2,
      height: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 20 + 20,
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000,
    })));

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#010403]">
      {/* 1. Deep Base Glow (Emerald) - Slowest Parallax */}
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-800, 800], [100, -100]), 
          y: useTransform(smoothMouseY, [-800, 800], [100, -100]) 
        }}
        className="absolute -top-[20%] -left-[10%] w-[90vw] h-[90vw] bg-primary/10 rounded-full blur-[160px] mix-blend-screen animate-pulse" 
      />
      
      {/* 2. Deep Spectral Glow (Violet) */}
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-800, 800], [-80, 80]), 
          y: useTransform(smoothMouseY, [-800, 800], [-80, 80]) 
        }}
        className="absolute top-[5%] right-[-10%] w-[65vw] h-[65vw] bg-[#4A148C]/15 rounded-full blur-[140px] mix-blend-screen transition-opacity duration-1000" 
      />

      {/* 3. Deep Accent Glow (Teal) */}
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-800, 800], [60, -60]), 
          y: useTransform(smoothMouseY, [-800, 800], [60, -60]) 
        }}
        className="absolute bottom-[-15%] left-[10%] w-[75vw] h-[75vw] bg-accent-to/8 rounded-full blur-[160px] mix-blend-screen" 
      />

      {/* 4. Subdued Contrast Glow (Navy) */}
      <motion.div 
        style={{ 
          x: useTransform(fastMouseX, [-800, 800], [-40, 40]), 
          y: useTransform(fastMouseY, [-800, 800], [-40, 40]) 
        }}
        className="absolute top-[25%] left-[20%] w-[50vw] h-[50vw] bg-[#102A43]/30 rounded-full blur-[130px] mix-blend-overlay" 
      />

      {/* 5. Highlight Spot (Subdued Gold) - Faster Reaction */}
      <motion.div 
        style={{ 
          x: useTransform(fastMouseX, [-800, 800], [120, -120]), 
          y: useTransform(fastMouseY, [-800, 800], [120, -120]) 
        }}
        className="absolute top-1/4 right-1/4 w-[30vw] h-[30vw] bg-[#FFD700]/[0.03] rounded-full blur-[100px]" 
      />

      {/* 6. Static Global Atmosphere */}
      <div className="absolute inset-0 bg-primary/[0.01] blur-[150px]" />

      {/* Micro-Particles - Floating Bokeh Effect */}
      {particles.map((p, i) => (
        <motion.div
           key={i}
           initial={{ 
             x: p.x, 
             y: p.y,
             opacity: 0.1
           }}
           animate={{
             x: [null, Math.random() * 100 - 50],
             y: [null, Math.random() * 100 - 50],
             opacity: [0.1, 0.4, 0.1]
           }}
           transition={{
             duration: p.duration,
             repeat: Infinity,
             ease: "linear"
           }}
           style={{
             left: p.left,
             top: p.top,
             width: p.width,
             height: p.height,
           }}
           className="absolute rounded-full bg-primary/20 blur-[1px]"
        />
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.1]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #5CA275 0.5px, transparent 0.5px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
