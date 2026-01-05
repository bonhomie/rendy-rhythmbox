import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-7z0lgl25dg";

interface KnobProps {
  value: number; // -1 to 1 (center is 0)
  onChange: (value: number) => void;
  label: string;
  size?: number;
}

export function Knob({ value, onChange, label, size = 40 }: KnobProps) {
  const [isDragging, setIsDragging] = useState(false);
  const knobRef = useRef<HTMLDivElement>(null);
  const startYRef = useRef<number>(0);
  const startValueRef = useRef<number>(0);

  // Convert value (-1 to 1) to rotation angle (-135° to 135°)
  const valueToAngle = (val: number) => val * 135;
  const angle = valueToAngle(value);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaY = startYRef.current - e.clientY;
      // Sensitivity: 100px of movement = full range
      const sensitivity = 0.02;
      const deltaValue = deltaY * sensitivity;
      const newValue = Math.max(-1, Math.min(1, startValueRef.current + deltaValue));
      onChange(newValue);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onChange]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startYRef.current = e.clientY;
    startValueRef.current = value;
  };

  const handleDoubleClick = () => {
    // Reset to center on double-click
    onChange(0);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      {/* Label */}
      <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[rgba(255,255,255,0.66)] tracking-[0.24px] uppercase leading-[1.25]">
        {label}
      </div>
      
      <div
        ref={knobRef}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
        className="relative cursor-pointer select-none"
        style={{ width: size, height: size }}
      >
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g>
            <mask fill="white" id="path-1-inside-1_90_435">
              <path d={svgPaths.p38d3e400} />
            </mask>
            <path d={svgPaths.p38d3e400} fill="white" fillOpacity="0.12" />
            <path d={svgPaths.p13b17f80} fill="white" fillOpacity="0.2" mask="url(#path-1-inside-1_90_435)" />
            <g 
              filter="url(#filter0_i_90_435)" 
              style={{
                transform: `rotate(${angle}deg)`,
                transformOrigin: '20px 20px',
                transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            >
              <circle cx="19.5" cy="8" fill="white" fillOpacity="0.2" r="2" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter0_i_90_435" width="4" x="17.5" y="6">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
              <feBlend in2="shape" mode="normal" result="effect1_innerShadow_90_435" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}