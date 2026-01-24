'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define the tech stack nodes with balanced hexagonal positions
// Center: 50, 50. Radius approx 35-40% 
const nodes = [
  { id: 'next', label: 'Next.js', x: 50, y: 15 },      // Top
  { id: 'ts', label: 'TypeScript', x: 85, y: 32 },     // Top Right
  { id: 'node', label: 'Node.js', x: 85, y: 68 },      // Bottom Right
  { id: 'mongo', label: 'MongoDB', x: 50, y: 85 },     // Bottom
  { id: 'react', label: 'React', x: 15, y: 68 },       // Bottom Left
  { id: 'js', label: 'JavaScript', x: 15, y: 32 },     // Top Left
];

// Define the sequential circuit path -> loop matching the visual circle
const circuitSequence = ['next', 'ts', 'node', 'mongo', 'react', 'js'];

const HeroAnimation = () => {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [isGlowActive, setIsGlowActive] = useState(false);
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number, delay: number}>>([]);

  // Init particles on client side
  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5
      }))
    );
  }, []);

  // Cycle through the circuit
  useEffect(() => {
    // Current leg duration (time to travel from current node to next)
    const travelDuration = 2500; // Increased to 2.5s for smoothness
    const glowDuration = 1000;    // Time node stays bright after arrival

    // 1. Departure: Set a timer to move to the next node
    const nextTimer = setTimeout(() => {
      setActiveNodeIndex((prev) => (prev + 1) % circuitSequence.length);
      // 2. Arrival: Trigger glow when the index actually changes (effectively arrival at next node)
      setIsGlowActive(true);
      setTimeout(() => setIsGlowActive(false), glowDuration);
    }, travelDuration);

    return () => {
      clearTimeout(nextTimer);
    };
  }, [activeNodeIndex]);

  // Determine positions
  const currentNodeId = circuitSequence[activeNodeIndex];
  const nextNodeId = circuitSequence[(activeNodeIndex + 1) % circuitSequence.length];
  
  const startNode = nodes.find(n => n.id === currentNodeId)!;
  const endNode = nodes.find(n => n.id === nextNodeId)!;

  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Container for the network */}
      <div className="relative w-full max-w-[500px] aspect-square">
        
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />

        <svg className="absolute inset-0 w-full h-full pointer-events-none visible overflow-visible">
          <defs>
            <filter id="glow-dot">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="wire-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(100,255,218,0.4)" />
              <stop offset="100%" stopColor="rgba(100,255,218,0.1)" />
            </linearGradient>
          </defs>

          {/* Background Particles */}
          {particles.map((p, i) => (
            <motion.circle
                key={`p-${i}`}
                cx={`${p.x}%`}
                cy={`${p.y}%`}
                r={p.size}
                fill="rgba(100,255,218,0.2)"
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: [0, 0.4, 0],
                    y: [0, -30] // Float upwards
                }}
                transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "linear"
                }}
            />
          ))}

          {/* MESH CONNECTIONS: Connect every node to every other node for complex look */}
          {nodes.map((n1, i) => (
            nodes.map((n2, j) => {
              if (i >= j) return null; // Avoid duplicate lines
              return (
                 <line
                   key={`mesh-${i}-${j}`}
                   x1={`${n1.x}%`}
                   y1={`${n1.y}%`}
                   x2={`${n2.x}%`}
                   y2={`${n2.y}%`}
                   stroke="url(#wire-gradient)"
                   strokeWidth="1"
                   opacity="0.4"
                 />
              );
            })
          ))}

          {/* Main Circuit Track (brighter path) */}
          {circuitSequence.map((nodeId, i) => {
             const nextId = circuitSequence[(i + 1) % circuitSequence.length];
             const n1 = nodes.find(n => n.id === nodeId)!;
             const n2 = nodes.find(n => n.id === nextId)!;
             return (
               <line
                 key={`track-${i}`}
                 x1={`${n1.x}%`}
                 y1={`${n1.y}%`}
                 x2={`${n2.x}%`}
                 y2={`${n2.y}%`}
                 stroke="rgba(100,255,218,0.5)"
                 strokeWidth="1.5"
                 strokeDasharray="4 4"
               />
             )
          })}

          {/* Traveling Dot */}
          <motion.circle
            key={`dot-${activeNodeIndex}`} 
            r="4"
            fill="#64FFDA" 
            filter="url(#glow-dot)"
            initial={{ cx: `${startNode.x}%`, cy: `${startNode.y}%` }}
            animate={{ cx: `${endNode.x}%`, cy: `${endNode.y}%` }}
            transition={{
              duration: 2.5, // Matches updated travelDuration
              ease: [0.45, 0, 0.55, 1], // easeInOutSine for smoother ramp up/down
            }}
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => {
          // A node is active if it is the current starting point and the glow timer is active
          const isActive = node.id === currentNodeId && isGlowActive;
          
          return (
            <motion.div
              key={node.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-xl border transition-all duration-500 backdrop-blur-md z-10
                ${isActive
                  ? "bg-primary/20 border-primary text-white shadow-[0_0_30px_rgba(100,255,218,0.4)] scale-110" 
                  : "bg-navy-light/90 border-white/10 text-text-secondary shadow-lg hover:border-primary/50"
                }
              `}
              style={{ 
                top: `${node.y}%`, 
                left: `${node.x}%` 
              }}
              animate={{
                y: ["-5px", "5px", "-5px"], // Subtle floating
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2 
                }
              }}
            >
              <span className="text-sm font-mono font-bold tracking-wide">
                {node.label}
              </span>
              
              {/* Removed static dot here as requested */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroAnimation;
