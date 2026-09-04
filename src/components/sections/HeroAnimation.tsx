'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const nodes = [
  { id: 'next', label: 'Next.js', x: 50, y: 10 },
  { id: 'ts', label: 'TypeScript', x: 82, y: 24 },
  { id: 'node', label: 'Node.js', x: 92, y: 50 },
  { id: 'sql', label: 'PostgreSQL', x: 82, y: 76 },
  { id: 'mongo', label: 'MongoDB', x: 50, y: 90 },
  { id: 'nestjs', label: 'NestJS', x: 18, y: 76 },
  { id: 'react', label: 'React.js', x: 8, y: 50 },
  { id: 'supabase', label: 'Supabase', x: 18, y: 24 },
];

const circuitSequence = ['next', 'ts', 'node', 'sql', 'mongo', 'nestjs', 'react', 'supabase'];

export default function HeroAnimation() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isGlowActive, setIsGlowActive] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ x: number; y: number; size: number; duration: number; delay: number }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 16 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 4,
      }))
    );
  }, []);

  useEffect(() => {
    const travelDuration = 2200;
    const glowDuration = 900;

    const nextTimer = setTimeout(() => {
      setActiveNodeIndex((prev) => (prev + 1) % circuitSequence.length);
      setIsGlowActive(true);
      setTimeout(() => setIsGlowActive(false), glowDuration);
    }, travelDuration);

    return () => {
      clearTimeout(nextTimer);
    };
  }, [activeNodeIndex]);

  const currentNodeId = circuitSequence[activeNodeIndex];
  const nextNodeId = circuitSequence[(activeNodeIndex + 1) % circuitSequence.length];

  const startNode = nodes.find((n) => n.id === currentNodeId)!;
  const endNode = nodes.find((n) => n.id === nextNodeId)!;

  return (
    <div className="relative w-full h-[320px] md:h-[360px] flex items-center justify-center">
      <div className="relative w-full max-w-[340px] aspect-square">
        {/* Central Radial Energy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-primary/10 rounded-full blur-[80px] animate-pulse" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none visible overflow-visible">
          <defs>
            <filter id="glow-dot">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(56, 189, 248, 0.4)" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.2)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
            </linearGradient>
          </defs>

          {/* Background Particles */}
          {particles.map((p, i) => (
            <motion.circle
              key={`p-${i}`}
              cx={`${p.x}%`}
              cy={`${p.y}%`}
              r={p.size}
              fill="rgba(56, 189, 248, 0.25)"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.4, 0],
                y: [0, -20],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'linear',
              }}
            />
          ))}

          {/* Mesh Connections */}
          {nodes.map((n1, i) =>
            nodes.map((n2, j) => {
              if (i >= j) return null;
              return (
                <line
                  key={`mesh-${i}-${j}`}
                  x1={`${n1.x}%`}
                  y1={`${n1.y}%`}
                  x2={`${n2.x}%`}
                  y2={`${n2.y}%`}
                  stroke="url(#wire-gradient)"
                  strokeWidth="1"
                  opacity="0.3"
                />
              );
            })
          )}

          {/* Main Circuit Track */}
          {circuitSequence.map((nodeId, i) => {
            const nextId = circuitSequence[(i + 1) % circuitSequence.length];
            const n1 = nodes.find((n) => n.id === nodeId)!;
            const n2 = nodes.find((n) => n.id === nextId)!;
            return (
              <line
                key={`track-${i}`}
                x1={`${n1.x}%`}
                y1={`${n1.y}%`}
                x2={`${n2.x}%`}
                y2={`${n2.y}%`}
                stroke="rgba(56, 189, 248, 0.35)"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* Traveling Circuit Pulse */}
          <motion.circle
            key={`dot-${activeNodeIndex}`}
            r="3.5"
            fill="#38BDF8"
            filter="url(#glow-dot)"
            initial={{ cx: `${startNode.x}%`, cy: `${startNode.y}%` }}
            animate={{ cx: `${endNode.x}%`, cy: `${endNode.y}%` }}
            transition={{
              duration: 2.2,
              ease: [0.45, 0, 0.55, 1],
            }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          const isActive = node.id === currentNodeId && isGlowActive;

          return (
            <motion.div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg border transition-all duration-300 backdrop-blur-md z-10 shadow-md ${
                isActive
                  ? 'bg-primary/20 border-primary text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                  : 'bg-navy-light/90 border-white/10 text-text-secondary hover:border-primary/40 hover:text-white'
              }`}
              style={{
                top: `${node.y}%`,
                left: `${node.x}%`,
              }}
              animate={{
                y: ['-3px', '3px', '-3px'],
              }}
              transition={{
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: Math.random() * 2,
                },
              }}
            >
              <span className="text-[11px] font-mono font-bold tracking-tight">
                {node.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
