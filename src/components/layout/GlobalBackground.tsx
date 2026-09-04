'use client';
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';

export default function GlobalBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 35, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 35, damping: 30 });
  const fastMouseX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const fastMouseY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  const [particles, setParticles] = useState<
    Array<{
      left: string;
      top: string;
      width: number;
      height: number;
      delay: number;
      duration: number;
      x: number;
      y: number;
    }>
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    setParticles(
      [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        width: Math.random() * 3 + 2,
        height: Math.random() * 3 + 2,
        delay: Math.random() * 4,
        duration: Math.random() * 20 + 20,
        x: Math.random() * 1600 - 800,
        y: Math.random() * 1600 - 800,
      }))
    );

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#0B0F19]">
      {/* 1. Primary Electric Cyan Glow - Top Left */}
      <motion.div
        style={{
          x: useTransform(smoothMouseX, [-800, 800], [80, -80]),
          y: useTransform(smoothMouseY, [-800, 800], [80, -80]),
        }}
        className="absolute -top-[15%] -left-[10%] w-[80vw] h-[80vw] bg-[#38BDF8]/[0.08] rounded-full blur-[160px] mix-blend-screen"
      />

      {/* 2. Soft Indigo/Purple Ambient Glow - Top Right */}
      <motion.div
        style={{
          x: useTransform(smoothMouseX, [-800, 800], [-70, 70]),
          y: useTransform(smoothMouseY, [-800, 800], [-70, 70]),
        }}
        className="absolute top-[10%] -right-[15%] w-[70vw] h-[70vw] bg-[#6366F1]/[0.09] rounded-full blur-[150px] mix-blend-screen"
      />

      {/* 3. Deep Violet Glow - Center Bottom */}
      <motion.div
        style={{
          x: useTransform(fastMouseX, [-800, 800], [60, -60]),
          y: useTransform(fastMouseY, [-800, 800], [60, -60]),
        }}
        className="absolute -bottom-[20%] left-[20%] w-[75vw] h-[75vw] bg-[#8B5CF6]/[0.06] rounded-full blur-[160px] mix-blend-screen"
      />

      {/* 4. Deep Sapphire Glow - Center Left */}
      <motion.div
        style={{
          x: useTransform(fastMouseX, [-800, 800], [-50, 50]),
          y: useTransform(fastMouseY, [-800, 800], [-50, 50]),
        }}
        className="absolute top-[40%] left-[10%] w-[50vw] h-[50vw] bg-[#0EA5E9]/[0.05] rounded-full blur-[140px]"
      />

      {/* Subtle Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial fade mask over grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-[#0B0F19]/80" />

      {/* Floating Micro-particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          initial={{
            x: p.x,
            y: p.y,
            opacity: 0.1,
          }}
          animate={{
            x: [null, Math.random() * 80 - 40],
            y: [null, Math.random() * 80 - 40],
            opacity: [0.1, 0.35, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            left: p.left,
            top: p.top,
            width: p.width,
            height: p.height,
          }}
          className="absolute rounded-full bg-primary/40 blur-[0.5px]"
        />
      ))}
    </div>
  );
}
