import React from 'react';

const colorMap = {
  purple: { bg: '#9B7EBD', border: '#7B5E9D', glow: 'rgba(155, 126, 189, 0.4)' },
  pink: { bg: '#E89AC7', border: '#C87AA7', glow: 'rgba(232, 154, 199, 0.4)' },
  blue: { bg: '#86C8BC', border: '#66A89C', glow: 'rgba(134, 200, 188, 0.4)' },
  cyan: { bg: '#A0E7E5', border: '#80C7C5', glow: 'rgba(160, 231, 229, 0.4)' },
  orange: { bg: '#FFA477', border: '#DF8457', glow: 'rgba(255, 164, 119, 0.4)' },
  green: { bg: '#B4CFB0', border: '#94AF90', glow: 'rgba(180, 207, 176, 0.4)' },
  coral: { bg: '#FFABAB', border: '#DF8B8B', glow: 'rgba(255, 171, 171, 0.4)' },
  white: { bg: '#F8F7FF', border: '#D8D7DF', glow: 'rgba(248, 247, 255, 0.4)' }
};

interface DragGhostProps {
  x: number;
  y: number;
  chord: string | null;
  notes: string[];
  color: string;
}

export function DragGhost({ x, y, chord, notes, color }: DragGhostProps) {
  const colors = colorMap[color as keyof typeof colorMap] || colorMap.white;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Ghost step cell */}
      <div
        className="relative w-[52px] h-[52px] rounded-lg transition-all duration-200"
        style={{
          background: colors.bg,
          border: `2px solid ${colors.border}`,
          boxShadow: `0 0 20px ${colors.glow}, 0 4px 12px rgba(0, 0, 0, 0.3)`,
          opacity: 0.7
        }}
      >
        {/* Chord label */}
        {chord && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="text-xs px-2 py-0.5 rounded"
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                color: '#fff',
                fontFamily: 'monospace',
                fontWeight: 600
              }}
            >
              {chord}
            </div>
          </div>
        )}
        
        {/* Pulsing glow effect */}
        <div
          className="absolute inset-0 rounded-lg animate-pulse"
          style={{
            background: `radial-gradient(circle at center, ${colors.glow} 0%, transparent 70%)`,
          }}
        />
      </div>
    </div>
  );
}
