import { useState, useRef, useEffect } from 'react';
import svgPaths from "../imports/svg-d0xiv0f7ge";
import { SaveModal } from './SaveModal';
import { LoadDropdown } from './LoadDropdown';
import type { AppState } from '../utils/saveLoad';

const DEBUG = false;

type ControlButtonsProps = {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onRandom: () => void;
  onClear: () => void;
  onSave?: (title: string, djName: string) => Promise<void>;
  onLoad?: (state: AppState) => void;
  currentState: AppState;
  buttonHeight?: string;
};

export function ControlButtons({ isPlaying, onTogglePlay, onRandom, onClear, onSave, onLoad, currentState, buttonHeight = '48px' }: ControlButtonsProps) {
  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [isLoadDropdownOpen, setIsLoadDropdownOpen] = useState(false);
  const loadButtonRef = useRef<HTMLButtonElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);

  // Debug: Log state changes
  useEffect(() => {
    if (DEBUG) {
      console.log('[ControlButtons] isSaveModalOpen changed:', isSaveModalOpen);
    }
  }, [isSaveModalOpen]);

  useEffect(() => {
    if (DEBUG) {
      console.log('[ControlButtons] isLoadDropdownOpen changed:', isLoadDropdownOpen);
    }
  }, [isLoadDropdownOpen]);

  const handleSaveClick = () => {
    if (DEBUG) {
      console.log('[ControlButtons] Save clicked');
    }
    setIsSaveModalOpen(true);
    if (DEBUG) {
      console.log('[ControlButtons] setSaveModalOpen(true) called');
    }
  };

  const handleLoadClick = () => {
    if (DEBUG) {
      console.log('[ControlButtons] Load clicked');
    }
    setIsLoadDropdownOpen(true);
    if (DEBUG) {
      console.log('[ControlButtons] setLoadDropdownOpen(true) called');
    }
  };

  const handleSave = async (title: string, djName: string) => {
    if (onSave) {
      await onSave(title, djName);
    }
    setIsSaveModalOpen(false);
  };

  const handleLoad = (state: AppState) => {
    if (onLoad) {
      onLoad(state);
    }
    setIsLoadDropdownOpen(false);
  };
  const containerHeight = buttonHeight;
  const playButtonViewBox = buttonHeight === '32px' ? '0 0 154 32' : '0 0 143 48';
  
  return (
    <div 
      className="content-stretch flex gap-[8px] items-center large-screen:flex-wrap large-screen:h-auto" 
      style={{ height: containerHeight }}
    >
      {/* Play Button */}
      <button
        onClick={onTogglePlay}
        className="content-stretch flex gap-[8px] h-full items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
        style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg viewBox=\\'${playButtonViewBox}\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-3.45e-7 4.725 -13.332 -0.0000024747 71.5 24)\\'><stop stop-color=\\'rgba(255,255,255,1)\\' offset=\\'0.32202\\'/><stop stop-color=\\'rgba(251,255,212,1)\\' offset=\\'0.66101\\'/><stop stop-color=\\'rgba(247,254,169,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')` }}
      >
        <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p3d950580} fill="#0D0D0D" />
        </svg>
        <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
          <p className="leading-[1.25]">
            {isPlaying ? 'STOP' : 'PLAY'}<span className="text-[rgba(13,13,13,0.5)]">{` [Space]`}</span>
          </p>
        </div>
      </button>

      {/* Random Button */}
      <button
        onClick={onRandom}
        className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p635c480} fill="white" />
        </svg>
        <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
          <p className="leading-[1.25]">RANDOM</p>
        </div>
      </button>

      {/* Clear Button */}
      <button
        onClick={onClear}
        className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p29f0e700} fill="white" />
        </svg>
        <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
          <p className="leading-[1.25]">CLEAR</p>
        </div>
      </button>

      {/* Save Button */}
      <button 
        ref={saveButtonRef}
        onClick={() => setIsSaveModalOpen(true)}
        className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0 w-[154px] hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path d={svgPaths.p23748800} fill="white" />
        </svg>
        <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
          <p className="leading-[1.25] text-[12px]">
            SAVE<span className="font-['PP Neue Montreal Mono',sans-serif] font-medium not-italic tracking-[-3.84px] uppercase">...</span>
          </p>
        </div>
      </button>

      {/* Load Button with Dropdown */}
      <LoadDropdown
        isOpen={isLoadDropdownOpen}
        onOpenChange={setIsLoadDropdownOpen}
        onLoad={handleLoad}
        trigger={
          <button 
            ref={loadButtonRef}
            onClick={handleLoadClick}
            className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center justify-center px-[16px] py-[7px] relative rounded-[6px] shrink-0 hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
          >
        <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <svg className="block shrink-0 size-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <path clipRule="evenodd" d={svgPaths.p9d57a70} fill="white" fillRule="evenodd" />
        </svg>
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
          <p className="leading-[1.25] text-[12px]">
                LOAD<span className="font-['PP Neue Montreal Mono',sans-serif] font-medium not-italic tracking-[-3.84px] uppercase">...</span>
          </p>
        </div>
      </button>
        }
      />

      {/* Save Modal */}
      <SaveModal
        isOpen={isSaveModalOpen}
        onClose={() => setIsSaveModalOpen(false)}
        onSave={handleSave}
        state={currentState}
        triggerRef={saveButtonRef}
      />
    </div>
  );
}