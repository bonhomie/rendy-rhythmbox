import { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { listLocalSaves, loadFromLocalStorage, type LocalSave } from '../utils/localStorage';
import type { AppState } from '../utils/saveLoad';
import svgPaths from '../imports/svg-73swkc4pa7';

const DEBUG = false;

interface LoadDropdownProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onLoad: (state: AppState) => void;
  trigger: React.ReactNode;
}

function MusicIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path clipRule="evenodd" d={svgPaths.p9d57a70} fill="white" fillRule="evenodd" />
      </svg>
    </div>
  );
}

export function LoadDropdown({ isOpen, onOpenChange, onLoad, trigger }: LoadDropdownProps) {
  const [localSaves, setLocalSaves] = useState<LocalSave[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Debug: Log when isOpen changes
  useEffect(() => {
    if (DEBUG) {
      console.log('[LoadDropdown] isOpen changed:', isOpen);
    }
  }, [isOpen]);

  // Load local saves when dropdown opens - always refresh to get latest saves
  useEffect(() => {
    if (isOpen) {
      if (DEBUG) {
        console.log('[LoadDropdown] Loading local saves, isOpen is true');
      }
      const saves = listLocalSaves();
      if (DEBUG) {
        console.log('[LoadDropdown] Local saves found:', saves.length);
      }
      setLocalSaves(saves);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleLoad = (save: LocalSave) => {
    // Save already has state, no need to reload from localStorage
    if (save && save.state) {
      onLoad(save.state);
      onOpenChange(false);
    } else {
      console.error('Failed to load local track');
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={(open) => {
      if (DEBUG) {
        console.log('[LoadDropdown] Popover onOpenChange called with:', open);
      }
      onOpenChange(open);
    }}>
      <PopoverTrigger asChild>
        {trigger}
      </PopoverTrigger>
      <PopoverContent 
        className="bg-[rgba(39,39,39,0.95)] border border-[rgba(255,255,255,0.2)] border-solid rounded-[16px] p-4 min-w-[320px] max-w-[400px] max-h-[400px] z-[100]"
        align="start"
        sideOffset={8}
      >
        {localSaves.length === 0 ? (
          <div className="text-[13px] text-[rgba(255,255,255,0.4)] font-['PP Neue Montreal',sans-serif] py-4 text-center w-full">
            No saved tracks yet
          </div>
        ) : (
          <ScrollArea className="w-full max-h-[350px]">
            <div className="flex flex-col gap-[2px]">
              {localSaves.map((save, index) => (
                <button
                  key={save.id}
                  onClick={() => handleLoad(save)}
                  className={`flex gap-[8px] items-center px-[12px] py-[4px] rounded-[6px] w-full text-left transition-colors cursor-pointer ${
                    index === selectedIndex
                      ? 'bg-[rgba(255,255,255,0.2)]'
                      : 'hover:bg-[rgba(255,255,255,0.08)]'
                  }`}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <MusicIcon />
                  <div className="flex font-['PP Neue Montreal',sans-serif] gap-[5px] items-center text-[13px] text-nowrap tracking-[0.13px]">
                    <span className="text-white">{save.title}</span>
                    <span className="text-[rgba(255,255,255,0.5)]">by</span>
                    <span className="text-white">{save.djName}</span>
                  </div>
                </button>
              ))}
            </div>
          </ScrollArea>
        )}
      </PopoverContent>
    </Popover>
  );
}
