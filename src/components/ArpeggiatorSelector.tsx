import { useEffect, useRef, useState } from 'react';
import svgPaths from "../imports/svg-kh862mffl2";

type ArpPattern = 'off' | 'up' | 'down' | 'updown' | 'downup' | 'random';
type ArpRate = '1/16' | '1/8' | '1/4';
type ArpLength = '1x' | '2x' | '4x';

type ArpeggiatorSelectorProps = {
  pattern: ArpPattern;
  rate: ArpRate;
  length: ArpLength;
  onPatternChange: (pattern: ArpPattern) => void;
  onRateChange: (rate: ArpRate) => void;
  onLengthChange: (length: ArpLength) => void;
  isOpen: boolean;
};

function ChevronIcon() {
  return (
    <div className="relative shrink-0 size-[8px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <path d="M 1 3 L 4 6 L 7 3" stroke="rgba(255,255,255,0.66)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

const patternOptions: { id: ArpPattern; name: string }[] = [
  { id: 'off', name: 'OFF' },
  { id: 'up', name: 'UP' },
  { id: 'down', name: 'DOWN' },
  { id: 'updown', name: 'UP-DOWN' },
  { id: 'downup', name: 'DOWN-UP' },
  { id: 'random', name: 'RANDOM' },
];

const rateOptions: { id: ArpRate; name: string }[] = [
  { id: '1/16', name: '1/16' },
  { id: '1/8', name: '1/8' },
  { id: '1/4', name: '1/4' },
];

const lengthOptions: { id: ArpLength; name: string }[] = [
  { id: '1x', name: '1x' },
  { id: '2x', name: '2x' },
  { id: '4x', name: '4x' },
];

export function ArpeggiatorSelector({ 
  pattern, 
  rate, 
  length, 
  onPatternChange, 
  onRateChange, 
  onLengthChange, 
  isOpen 
}: ArpeggiatorSelectorProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [positionAbove, setPositionAbove] = useState(false);

  useEffect(() => {
    if (!isOpen || !dropdownRef.current) return;

    const checkPosition = () => {
      const dropdown = dropdownRef.current;
      if (!dropdown) return;

      // Get the button container (parent with relative positioning)
      const buttonContainer = dropdown.parentElement;
      if (!buttonContainer) return;

      const buttonRect = buttonContainer.getBoundingClientRect();
      
      // Get actual dropdown height after it's rendered
      const dropdownHeight = dropdown.offsetHeight || dropdown.getBoundingClientRect().height;
      
      // Estimate if not yet rendered (fallback)
      const estimatedHeight = pattern !== 'off' ? 308 : 144;
      const dropdownActualHeight = dropdownHeight > 0 ? dropdownHeight : estimatedHeight;
      
      const spaceBelow = window.innerHeight - buttonRect.bottom;
      const spaceAbove = buttonRect.top;

      // If not enough space below but enough space above, position above
      // Add some buffer (16px) to ensure it doesn't touch edges
      if (spaceBelow < dropdownActualHeight + 16 && spaceAbove > dropdownActualHeight + 16) {
        setPositionAbove(true);
      } else {
        setPositionAbove(false);
      }
    };

    // Check position after a brief delay to ensure DOM is updated
    const timeoutId = setTimeout(checkPosition, 0);
    
    // Also check on scroll/resize
    window.addEventListener('scroll', checkPosition, true);
    window.addEventListener('resize', checkPosition);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', checkPosition, true);
      window.removeEventListener('resize', checkPosition);
    };
  }, [isOpen, pattern]);

  if (!isOpen) return null;

  return (
    <div 
      ref={dropdownRef}
      className={`absolute left-0 z-50 w-[140px] dropdown-container ${
        positionAbove ? 'bottom-full mb-1' : 'top-full mt-1'
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="backdrop-blur-[6px] bg-[rgba(39,39,39,0.96)] rounded-[2px] border border-[rgba(255,255,255,0.2)]">
        <div className="flex flex-col p-[4px] gap-[4px]">
          {/* Pattern Section */}
          <div className="flex flex-col gap-[2px]">
            <div className="px-2 py-1 text-[9px] text-[rgba(255,255,255,0.4)] font-['PP Neue Montreal Mono',sans-serif] font-medium uppercase tracking-[0.2px]">
              Arpeggio
            </div>
            {patternOptions.map((option) => {
              const isSelected = option.id === pattern;
              
              return (
                <button
                  key={option.id}
                  onClick={() => onPatternChange(option.id)}
                  className={`flex items-center justify-between px-2 py-1 text-[10px] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer rounded-[2px] ${
                    isSelected ? 'bg-[rgba(255,255,255,0.08)] text-white' : 'text-[rgba(255,255,255,0.66)]'
                  }`}
                >
                  <div className={`font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] uppercase tracking-[0.2px] leading-[1.25] ${
                    isSelected ? 'text-white' : 'text-[rgba(255,255,255,0.66)]'
                  }`}>
                    {option.name}
                  </div>
                  {isSelected && (
                    <div className="size-[6px] rounded-full bg-white" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Divider */}
          {pattern !== 'off' && (
            <>
              <div className="h-[1px] bg-[rgba(255,255,255,0.1)] mx-1" />

              {/* Rate Section */}
              <div className="flex flex-col gap-[2px]">
                <div className="px-2 py-1 text-[9px] text-[rgba(255,255,255,0.4)] font-['PP Neue Montreal Mono',sans-serif] font-medium uppercase tracking-[0.2px]">
                  Rate
                </div>
                {rateOptions.map((option) => {
                  const isSelected = option.id === rate;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => onRateChange(option.id)}
                      className={`flex items-center justify-between px-2 py-1 text-[10px] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer rounded-[2px] ${
                        isSelected ? 'bg-[rgba(255,255,255,0.08)] text-white' : 'text-[rgba(255,255,255,0.66)]'
                      }`}
                    >
                      <div className={`font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] uppercase tracking-[0.2px] leading-[1.25] ${
                        isSelected ? 'text-white' : 'text-[rgba(255,255,255,0.66)]'
                      }`}>
                        {option.name}
                      </div>
                      {isSelected && (
                        <div className="size-[6px] rounded-full bg-white" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-[1px] bg-[rgba(255,255,255,0.1)] mx-1" />

              {/* Length Section */}
              <div className="flex flex-col gap-[2px]">
                <div className="px-2 py-1 text-[9px] text-[rgba(255,255,255,0.4)] font-['PP Neue Montreal Mono',sans-serif] font-medium uppercase tracking-[0.2px]">
                  Length
                </div>
                {lengthOptions.map((option) => {
                  const isSelected = option.id === length;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => onLengthChange(option.id)}
                      className={`flex items-center justify-between px-2 py-1 text-[10px] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer rounded-[2px] ${
                        isSelected ? 'bg-[rgba(255,255,255,0.08)] text-white' : 'text-[rgba(255,255,255,0.66)]'
                      }`}
                    >
                      <div className={`font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] uppercase tracking-[0.2px] leading-[1.25] ${
                        isSelected ? 'text-white' : 'text-[rgba(255,255,255,0.66)]'
                      }`}>
                        {option.name}
                      </div>
                      {isSelected && (
                        <div className="size-[6px] rounded-full bg-white" />
                      )}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export type { ArpPattern, ArpRate, ArpLength };