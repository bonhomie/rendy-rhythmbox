import svgPaths from "../imports/svg-kh862mffl2";

type SoundOption = {
  id: string;
  name: string;
};

type SoundSelectorProps = {
  options: SoundOption[];
  selectedSound: string;
  onSelectSound: (soundId: string) => void;
  isOpen: boolean;
};

function PlaylistIcon() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g>
          <path d={svgPaths.p1aa2d80} fill="white" fillOpacity="0.66" />
        </g>
      </svg>
    </div>
  );
}

export function SoundSelector({ options, selectedSound, onSelectSound, isOpen }: SoundSelectorProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-1 z-50 w-[120px] dropdown-container"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="backdrop-blur-[6px] bg-[rgba(39,39,39,0.96)] rounded-[2px] border border-[rgba(255,255,255,0.2)]">
        <div className="flex flex-col p-[4px] gap-[2px]">
          {options.map((option) => {
            const isSelected = option.id === selectedSound;
            
            return (
              <button
                key={option.id}
                onClick={() => onSelectSound(option.id)}
                className={`flex items-center gap-2 px-2 py-1 text-[10px] hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer rounded-[2px] ${
                  isSelected ? 'bg-[rgba(255,255,255,0.08)] text-white' : 'text-[rgba(255,255,255,0.66)]'
                }`}
              >
                <PlaylistIcon />
                <div className={`font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] uppercase tracking-[0.2px] leading-[1.25] ${
                  isSelected ? 'text-white' : 'text-[rgba(255,255,255,0.66)]'
                }`}>
                  {option.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}