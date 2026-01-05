import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-fxmtmshiph";

interface LEDInterfaceProps {
  volume: number; // 0-100
  tempo: number; // 60-200
  swing: number; // 0, 8, 16, 24, 32, 48, 64, 80
  onVolumeChange: (value: number) => void;
  onTempoChange: (value: number) => void;
  onSwingChange: (value: number) => void;
  frequencyData?: Uint8Array | null;
}

const SWING_VALUES = [0, 8, 16, 24, 32, 48, 64, 80];

export function LEDInterface({ 
  volume, 
  tempo, 
  swing, 
  onVolumeChange, 
  onTempoChange, 
  onSwingChange,
  frequencyData 
}: LEDInterfaceProps) {
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const [isDraggingTempo, setIsDraggingTempo] = useState(false);
  const [isDraggingSwing, setIsDraggingSwing] = useState(false);
  
  const volumeRef = useRef<HTMLDivElement>(null);
  const tempoStartY = useRef(0);
  const tempoStartValue = useRef(0);
  const swingStartX = useRef(0);
  const swingStartValue = useRef(0);

  // Volume drag handler (horizontal)
  useEffect(() => {
    if (!isDraggingVolume || !volumeRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = volumeRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      onVolumeChange(percentage);
    };

    const handleMouseUp = () => {
      setIsDraggingVolume(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingVolume, onVolumeChange]);

  // Tempo drag handler (vertical with acceleration)
  useEffect(() => {
    if (!isDraggingTempo) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = tempoStartY.current - e.clientY;
      
      // Calculate distance from start point for acceleration
      const distance = Math.abs(deltaY);
      const acceleration = distance > 100 ? Math.min(distance / 100, 3) : 1; // Only accelerate if dragged > 100px
      
      // Base sensitivity: 1 BPM per 3 pixels (slower than before)
      const sensitivity = 0.33 * acceleration;
      const change = deltaY * sensitivity;
      
      const newTempo = Math.max(60, Math.min(200, tempoStartValue.current + change));
      onTempoChange(Math.round(newTempo));
    };

    const handleMouseUp = () => {
      setIsDraggingTempo(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingTempo, onTempoChange]);

  // Swing drag handler (horizontal, stepped)
  useEffect(() => {
    if (!isDraggingSwing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - swingStartX.current; // Positive = right, negative = left
      
      // Less sensitive - 30px per step
      const steps = Math.round(deltaX / 30);
      const currentIndex = SWING_VALUES.indexOf(swingStartValue.current);
      const newIndex = Math.max(0, Math.min(SWING_VALUES.length - 1, currentIndex + steps));
      
      onSwingChange(SWING_VALUES[newIndex]);
    };

    const handleMouseUp = () => {
      setIsDraggingSwing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingSwing, onSwingChange]);

  const handleVolumeMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingVolume(true);
    
    // Immediately set volume based on click position
    if (volumeRef.current) {
      const rect = volumeRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      onVolumeChange(percentage);
    }
  };

  const handleTempoMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingTempo(true);
    tempoStartY.current = e.clientY;
    tempoStartValue.current = tempo;
  };

  const handleSwingMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDraggingSwing(true);
    swingStartX.current = e.clientX;
    swingStartValue.current = swing;
  };

  // Calculate swing bar index (0-7)
  const swingIndex = SWING_VALUES.indexOf(swing);

  // Visualizer bars (even columns across the full width)
  const renderVisualizer = () => {
    const bars = [];
    const numBars = 16; // More bars for better coverage
    const containerWidth = 129; // Total visualizer width
    const horizontalPadding = 8; // px-2 = 8px on each side = 16px total
    const gapSize = 2; // gap-[2px]
    const totalGaps = (numBars - 1) * gapSize; // Total gap space
    const availableWidth = containerWidth - (horizontalPadding * 2); // Account for padding
    const totalBarWidth = availableWidth - totalGaps; // Width available for bars
    const barWidth = Math.floor(totalBarWidth / numBars); // Even width for all bars
    
    for (let i = 0; i < numBars; i++) {
      let height = 0;
      
      if (frequencyData && frequencyData.length > 0) {
        // Map frequency bands to bars
        // Lower frequencies get first bars, higher get last bars
        const binStart = Math.floor((i / numBars) * frequencyData.length);
        const binEnd = Math.floor(((i + 1) / numBars) * frequencyData.length);
        
        let sum = 0;
        for (let j = binStart; j < binEnd; j++) {
          sum += frequencyData[j];
        }
        const average = sum / (binEnd - binStart);
        
        // Map 0-255 to 0-24px (container is 32px, leave some space at bottom)
        // Max height should be less than container height to ensure bars fit nicely
        height = Math.round((average / 255) * 24);
        height = Math.min(height, 24); // Cap at 24px to ensure it fits in 32px container
      }
      
      bars.push(
        <div
          key={i}
          className="bg-[rgba(13,13,13,0.48)] rounded-[0.5px] transition-all duration-75 ease-out"
          style={{
            width: `${barWidth}px`,
            height: height > 0 ? `${height}px` : '2px',
            opacity: height > 0 ? 0.72 : 0.16
          }}
        />
      );
    }
    
    return bars;
  };

  return (
    <div 
      className="relative rounded-[3px] h-[44px] w-[340px]" 
      style={{ 
        backgroundImage: "linear-gradient(26.1779deg, rgb(228, 232, 237) 42.645%, rgb(226, 234, 237) 82.759%)" 
      }}
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute content-stretch flex gap-[20px] items-center left-[12px] top-[6px]">
          {/* Volume */}
          <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0">
            <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] text-nowrap tracking-[0.2px] uppercase">
              VOLUME
            </p>
            <div 
              ref={volumeRef}
              className="content-stretch flex h-[18px] items-center relative shrink-0 w-[56px] select-none"
              style={{ cursor: isDraggingVolume || volumeRef.current ? 'ew-resize' : 'ew-resize' }}
              onMouseDown={handleVolumeMouseDown}
            >
              <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 18">
                  <g>
                    {/* Background triangle */}
                    <path 
                      d={svgPaths.p2cc68880} 
                      fill="#0D0D0D" 
                      fillOpacity="0.16"
                    />
                    {/* Active triangle (clipped by volume) */}
                    <clipPath id="volume-clip">
                      <rect x="0" y="0" width={56 * (volume / 100)} height="18" />
                    </clipPath>
                    <path 
                      d={svgPaths.p2cc68880} 
                      fill="#0D0D0D" 
                      fillOpacity="0.72"
                      clipPath="url(#volume-clip)"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Tempo */}
          <div 
            className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 uppercase w-[37px] select-none"
            style={{ cursor: isDraggingTempo ? 'row-resize' : 'row-resize' }}
            onMouseDown={handleTempoMouseDown}
          >
            <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] tracking-[0.2px] w-full">
              Tempo
            </p>
            <p 
              className="font-['Chivo_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-[rgba(13,13,13,0.72)] w-full"
              style={{ textShadow: '0px 0px 4px rgba(255,255,255,0.8)' }}
            >
              {tempo}
            </p>
          </div>

          {/* Swing */}
          <div 
            className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 select-none"
            style={{ cursor: isDraggingSwing ? 'ew-resize' : 'ew-resize' }}
            onMouseDown={handleSwingMouseDown}
          >
            <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] tracking-[0.2px] uppercase w-[min-content]">
              Swing
            </p>
            <div className="content-stretch flex gap-[2px] h-[18px] items-center relative shrink-0">
              {[3, 4, 5, 6, 7, 8, 9].map((width, idx) => (
                <div
                  key={idx}
                  className="h-full rounded-[1px] shrink-0"
                  style={{
                    width: `${width}px`,
                    backgroundColor: idx < swingIndex ? 'rgba(13,13,13,0.72)' : 'rgba(13,13,13,0.16)'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Visualizer */}
          <div className="h-[32px] relative shrink-0 w-[129px] flex items-end justify-center gap-[2px] px-2 overflow-hidden">
            {renderVisualizer()}
            <div 
              aria-hidden="true" 
              className="absolute border-[0px_0px_0.5px] border-[rgba(13,13,13,0.24)] border-solid inset-0 pointer-events-none rounded-[1px]" 
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)] rounded-[4px]" />
      <div 
        aria-hidden="true" 
        className="absolute border border-[rgba(255,255,255,0.38)] border-solid inset-[-1px] pointer-events-none rounded-[4px]" 
      />
    </div>
  );
}