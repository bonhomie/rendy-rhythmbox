import { Activity } from 'lucide-react';

type ParameterSlidersProps = {
  tempo: number;
  swing: number;
  reverb: number;
  delay?: number;
  delayAmount?: number;
  onTempoChange: (value: number) => void;
  onSwingChange: (value: number) => void;
  onReverbChange: (value: number) => void;
  onDelayChange?: (value: number) => void;
  onDelayAmountChange?: (value: number) => void;
};

function Slider({ 
  label, 
  value, 
  unit, 
  min, 
  max, 
  onChange 
}: { 
  label: string; 
  value: number; 
  unit: string; 
  min: number; 
  max: number; 
  onChange: (value: number) => void;
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[rgba(255,255,255,0.66)] uppercase tracking-[0.24px] leading-[1.25]">
          {label}
        </div>
        <div className="bg-[rgba(255,255,255,0.08)] px-2 py-0.5 font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[#c7aeff] uppercase tracking-[0.24px] leading-[1.25]">
          {value}{unit && ` ${unit}`}
        </div>
      </div>

      <div className="relative w-full h-[18px] flex items-center">
        {/* Track */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] rounded" />
        
        {/* Slider input */}
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
        />
        
        {/* Thumb */}
        <div 
          className="absolute w-[18.621px] h-[18px] bg-gradient-to-b from-white to-[#aaaaaa] border-[1.125px] border-[rgba(255,255,255,0.2)] rounded-[4.5px] pointer-events-none transition-all"
          style={{ left: `calc(${percentage}% - 9.3px)` }}
        />
      </div>
    </div>
  );
}

// Notched slider for delay with musical subdivisions
function NotchedDelaySlider({ 
  label, 
  value, 
  onChange,
  tempo
}: { 
  label: string; 
  value: number;
  onChange: (value: number) => void;
  tempo: number;
}) {
  // Define notch positions (0 = off, 1 = 1/16, 2 = 1/8, 3 = 1/4)
  const notches = [
    { position: 0, label: 'OFF', getValue: () => 0 },
    { position: 1, label: '1/16', getValue: (bpm: number) => Math.round((60000 / bpm) / 4) },
    { position: 2, label: '1/8', getValue: (bpm: number) => Math.round((60000 / bpm) / 2) },
    { position: 3, label: '1/4', getValue: (bpm: number) => Math.round(60000 / bpm) }
  ];
  
  // Find closest notch to current value
  const currentNotchIndex = notches.findIndex(notch => {
    const notchValue = notch.getValue(tempo);
    const nextNotch = notches[notch.position + 1];
    const nextValue = nextNotch ? nextNotch.getValue(tempo) : Infinity;
    return value >= notchValue && value < nextValue;
  });
  
  const currentNotch = notches[currentNotchIndex !== -1 ? currentNotchIndex : 0];
  const percentage = (currentNotch.position / (notches.length - 1)) * 100;

  const handleChange = (position: number) => {
    const notch = notches[position];
    onChange(notch.getValue(tempo));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[rgba(255,255,255,0.66)] uppercase tracking-[0.24px] leading-[1.25]">
          {label}
        </div>
        <div className="bg-[rgba(255,255,255,0.08)] px-2 py-0.5 font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[#c7aeff] uppercase tracking-[0.24px] leading-[1.25]">
          {currentNotch.label}
        </div>
      </div>

      <div className="relative w-full h-[18px] flex items-center">
        {/* Track with notch markers */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] rounded" />
        {notches.map((notch, i) => (
          <div 
            key={i}
            className="absolute w-[2px] h-2 bg-white/40 top-1/2 -translate-y-1/2"
            style={{ left: `${(notch.position / (notches.length - 1)) * 100}%` }}
          />
        ))}
        
        {/* Slider input */}
        <input
          type="range"
          min={0}
          max={notches.length - 1}
          step={1}
          value={currentNotch.position}
          onChange={(e) => handleChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
        />
        
        {/* Thumb */}
        <div 
          className="absolute w-[18.621px] h-[18px] bg-gradient-to-b from-white to-[#aaaaaa] border-[1.125px] border-[rgba(255,255,255,0.2)] rounded-[4.5px] pointer-events-none transition-all"
          style={{ left: `calc(${percentage}% - 9.3px)` }}
        />
      </div>
    </div>
  );
}

export function ParameterSliders({ 
  tempo, 
  swing, 
  reverb,
  onTempoChange,
  onSwingChange,
  onReverbChange,
  delay,
  delayAmount,
  onDelayChange,
  onDelayAmountChange
}: ParameterSlidersProps) {
  return (
    <div className="flex flex-col gap-[20px]">
      <Slider 
        label="REVERB"
        value={reverb}
        unit="%"
        min={0}
        max={100}
        onChange={onReverbChange}
      />

      {delay !== undefined && onDelayChange !== undefined && (
        <NotchedDelaySlider 
          label="DELAY TYPE"
          value={delay}
          onChange={onDelayChange}
          tempo={tempo}
        />
      )}

      {delayAmount !== undefined && onDelayAmountChange !== undefined && (
        <Slider 
          label="DELAY AMOUNT"
          value={delayAmount}
          unit="%"
          min={0}
          max={99}
          onChange={onDelayAmountChange}
        />
      )}
    </div>
  );
}