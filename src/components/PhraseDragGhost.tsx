import React from 'react';

interface PhraseDragGhostProps {
  x: number;
  y: number;
  phraseNumber: number;
}

export function PhraseDragGhost({ x, y, phraseNumber }: PhraseDragGhostProps) {
  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Ghost phrase button */}
      <div
        className="relative w-8 h-8 rounded flex items-center justify-center"
        style={{
          background: 'rgba(138, 5, 255, 0.8)',
          border: '2px solid #8a05ff',
          boxShadow: '0px 0px 20px 4px rgba(138, 5, 255, 0.6), 0 4px 12px rgba(0, 0, 0, 0.3)',
          opacity: 0.8
        }}
      >
        <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[1.25] text-[10px] tracking-[0.2px] uppercase text-white">
          {phraseNumber}
        </p>
        
        {/* Pulsing glow effect */}
        <div
          className="absolute inset-0 rounded animate-pulse"
          style={{
            background: 'radial-gradient(circle at center, rgba(138, 5, 255, 0.4) 0%, transparent 70%)',
          }}
        />
      </div>
    </div>
  );
}
