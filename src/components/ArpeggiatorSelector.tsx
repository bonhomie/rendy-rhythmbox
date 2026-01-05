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
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-1 z-50 w-[140px] dropdown-container"
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