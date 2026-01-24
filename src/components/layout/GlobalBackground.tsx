'use client';
import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

const GlobalBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Relative to center of screen
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dynamic Ambient Glows */}
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-500, 500], [50, -50]), 
          y: useTransform(smoothMouseY, [-500, 500], [50, -50]) 
        }}
        className="absolute -top-[10%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" 
      />
      
      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-500, 500], [-30, 30]), 
          y: useTransform(smoothMouseY, [-500, 500], [-30, 30]) 
        }}
        className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-accent-to/5 rounded-full blur-[100px] mix-blend-screen" 
      />

      <motion.div 
        style={{ 
          x: useTransform(smoothMouseX, [-500, 500], [20, -20]), 
          y: useTransform(smoothMouseY, [-500, 500], [20, -20]) 
        }}
        className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[150px] mix-blend-screen" 
      />

      {/* Grid / Dot Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.07]" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #5CA275 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* Subtle Noise Texture (Optional but adds premium feel) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
