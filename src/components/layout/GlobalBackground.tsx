'use client';
import React from 'react';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#090A0C]">
      {/* Subtle top ambient radial illumination */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] opacity-40 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.08) 0%, rgba(10, 10, 10, 0) 70%)',
        }}
      />

      {/* Ultra-subtle geometric grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
