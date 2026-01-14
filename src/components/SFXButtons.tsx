import svgPaths from "../imports/svg-xxz527id14";

interface SFXButtonsProps {
  onCrashClick: () => void;
  onRiserClick: () => void;
  onPulseClick?: () => void;
}

export function SFXButtons({ onCrashClick, onRiserClick, onPulseClick }: SFXButtonsProps) {
  const handleButtonClick = (label: string) => {
    if (label === 'CRASH') {
      onCrashClick();
    } else if (label === 'RISER') {
      onRiserClick();
    } else if (label === 'PULSE' && onPulseClick) {
      onPulseClick();
    }
  };

  return (
    <div className="flex gap-[8px] items-start w-full">
      {/* CRASH button */}
      <button
        onClick={() => handleButtonClick('CRASH')}
        className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
            <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p14c86d80} fill="white" />
            </svg>
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
              <p className="leading-[1.25]">Crash</p>
            </div>
          </div>
        </div>
      </button>

      {/* RISER button */}
      <button
        onClick={() => handleButtonClick('RISER')}
        className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
            <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p38701b00} fill="white" />
            </svg>
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
              <p className="leading-[1.25]">riser</p>
            </div>
          </div>
        </div>
      </button>

      {/* PULSE button */}
      <button
        onClick={() => handleButtonClick('PULSE')}
        className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
            <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p17e22780} fill="white" />
            </svg>
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
              <p className="leading-[1.25]">Pulse</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}