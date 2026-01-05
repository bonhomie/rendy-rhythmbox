import { useState, useEffect } from 'react';
import { detectChord } from '../utils/chordDetection';
import svgPaths from '../imports/svg-2ms8mx19ng';

type PianoKeyboardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (chord: string, notes: string[]) => void;
  trackName: string;
  onPreviewNote: (note: string, octave: number) => void;
  currentStep?: number;
  existingNotes?: string[] | null;
};

// Three octaves: C2 to C4 (22 white keys)
const whiteKeys = [
  { note: 'C', octave: 2 },
  { note: 'D', octave: 2 },
  { note: 'E', octave: 2 },
  { note: 'F', octave: 2 },
  { note: 'G', octave: 2 },
  { note: 'A', octave: 2 },
  { note: 'B', octave: 2 },
  { note: 'C', octave: 3 },
  { note: 'D', octave: 3 },
  { note: 'E', octave: 3 },
  { note: 'F', octave: 3 },
  { note: 'G', octave: 3 },
  { note: 'A', octave: 3 },
  { note: 'B', octave: 3 },
  { note: 'C', octave: 4 },
  { note: 'D', octave: 4 },
  { note: 'E', octave: 4 },
  { note: 'F', octave: 4 },
  { note: 'G', octave: 4 },
  { note: 'A', octave: 4 },
  { note: 'B', octave: 4 },
  { note: 'C', octave: 5 }
];

// Black keys with their exact positions
// Pattern repeats: C#/Db, D#/Eb, F#, G#/Ab, A#/Bb
const blackKeys = [
  { note: 'C#', flat: 'D♭', octave: 2, left: 32 },
  { note: 'D#', flat: 'E♭', octave: 2, left: 84 },
  { note: 'F#', flat: null, octave: 2, left: 188 },
  { note: 'G#', flat: 'A♭', octave: 2, left: 240 },
  { note: 'A#', flat: 'B♭', octave: 2, left: 292 },
  { note: 'C#', flat: 'D♭', octave: 3, left: 396 },
  { note: 'D#', flat: 'E♭', octave: 3, left: 448 },
  { note: 'F#', flat: null, octave: 3, left: 552 },
  { note: 'G#', flat: 'A♭', octave: 3, left: 604 },
  { note: 'A#', flat: 'B♭', octave: 3, left: 656 },
  { note: 'C#', flat: 'D♭', octave: 4, left: 760 },
  { note: 'D#', flat: 'E♭', octave: 4, left: 812 },
  { note: 'F#', flat: null, octave: 4, left: 916 },
  { note: 'G#', flat: 'A♭', octave: 4, left: 968 },
  { note: 'A#', flat: 'B♭', octave: 4, left: 1020 },
];

// Keyboard mapping (Ableton-style)
const keyboardMapping: Record<string, { note: string, octave: number, shiftOctave: number }> = {
  // White keys
  'a': { note: 'C', octave: 3, shiftOctave: 4 },
  's': { note: 'D', octave: 3, shiftOctave: 4 },
  'd': { note: 'E', octave: 3, shiftOctave: 4 },
  'f': { note: 'F', octave: 3, shiftOctave: 4 },
  'g': { note: 'G', octave: 3, shiftOctave: 4 },
  'h': { note: 'A', octave: 3, shiftOctave: 4 },
  'j': { note: 'B', octave: 3, shiftOctave: 4 },
  'k': { note: 'C', octave: 4, shiftOctave: 5 },
  'l': { note: 'D', octave: 4, shiftOctave: 5 },
  // Black keys
  'w': { note: 'C#', octave: 3, shiftOctave: 4 },
  'e': { note: 'D#', octave: 3, shiftOctave: 4 },
  't': { note: 'F#', octave: 3, shiftOctave: 4 },
  'y': { note: 'G#', octave: 3, shiftOctave: 4 },
  'u': { note: 'A#', octave: 3, shiftOctave: 4 },
};

function CloseIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <path d={svgPaths.p2b24c480} fill="white" />
    </svg>
  );
}

function ClearIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <path d={svgPaths.p1c3649f2} fill="white" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
      <path d={svgPaths.p317e1000} fill="#0D0D0F" />
    </svg>
  );
}

export function PianoKeyboardModal({ 
  isOpen, 
  onClose, 
  onApply, 
  trackName,
  onPreviewNote,
  currentStep = 1,
  existingNotes = null
}: PianoKeyboardModalProps) {
  const [selectedNotes, setSelectedNotes] = useState<Set<string>>(new Set());
  const [detectedChord, setDetectedChord] = useState<string>('');
  const [activeKeys, setActiveKeys] = useState<Set<string>>(new Set());

  // Initialize selected notes when modal opens or existing notes change
  useEffect(() => {
    if (isOpen) {
      setSelectedNotes(new Set(existingNotes || []));
      setActiveKeys(new Set()); // Clear active keys when reopening
    }
  }, [isOpen, existingNotes]);

  useEffect(() => {
    if (selectedNotes.size > 0) {
      const chord = detectChord(Array.from(selectedNotes));
      setDetectedChord(chord);
    } else {
      setDetectedChord('');
    }
  }, [selectedNotes]);

  // Keyboard event handlers
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle ESC to close modal
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      
      // Handle Return/Enter to apply
      if (e.key === 'Enter') {
        e.preventDefault();
        handleApply();
        return;
      }
      
      // Handle Delete/Backspace to clear
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault();
        handleClear();
        return;
      }
      
      // Ignore if already pressed (holding key)
      if (activeKeys.has(e.key.toLowerCase())) return;

      const key = e.key.toLowerCase();
      const mapping = keyboardMapping[key];
      
      if (mapping) {
        // Prevent default behavior for Cmd key combinations
        e.preventDefault();
        
        // Determine octave based on modifiers:
        // Cmd + Shift: octave - 1 (e.g., C3 -> C2)
        // Cmd: octave - 2 (e.g., C3 -> C1)
        // Shift: use shiftOctave (e.g., C3 -> C4)
        // None: use base octave (e.g., C3)
        let octave: number;
        if (e.metaKey && e.shiftKey) {
          // Cmd+Shift: one octave lower
          octave = mapping.octave - 1;
        } else if (e.metaKey) {
          // Cmd: two octaves lower
          octave = mapping.octave - 2;
        } else if (e.shiftKey) {
          // Shift: use shift octave
          octave = mapping.shiftOctave;
        } else {
          // No modifiers: use base octave
          octave = mapping.octave;
        }
        
        // Validate octave range (C2-C5)
        if (octave >= 2 && octave <= 5) {
          // For C5, only allow C (not D5 which doesn't exist)
          if (octave === 5 && mapping.note !== 'C') return;
          
          setActiveKeys(prev => new Set(prev).add(key));
          toggleNote(mapping.note, octave);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      setActiveKeys(prev => {
        const newSet = new Set(prev);
        newSet.delete(key);
        return newSet;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen, activeKeys, selectedNotes]);

  const toggleNote = (note: string, octave: number) => {
    setSelectedNotes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(`${note}${octave}`)) {
        newSet.delete(`${note}${octave}`);
      } else {
        newSet.add(`${note}${octave}`);
        onPreviewNote(note, octave);
      }
      return newSet;
    });
  };

  const handleApply = () => {
    onApply(detectedChord, Array.from(selectedNotes));
    setSelectedNotes(new Set());
    onClose();
  };

  const handleClear = () => {
    setSelectedNotes(new Set());
    setDetectedChord('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(13,13,13,0.8)]">
      <div className="relative rounded-[16px] border border-[rgba(255,255,255,0.2)] bg-[rgba(39,39,39,0.88)] backdrop-blur-[6px]">
        <div className="flex flex-col items-center justify-center">
          <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pb-[16px] pt-[24px] px-[24px] relative">
            
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-[16px] top-[16px] size-[18px] text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <CloseIcon />
            </button>

            {/* Header */}
            <div className="content-stretch flex flex-col gap-[8px] items-center">
              <div className="content-stretch flex gap-[12px] items-center justify-center">
                <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
                  <p className="leading-[1.25] text-[12px]">
                    <span className="text-white">{trackName}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap">
                <p className="leading-[1.25]">Tip: Keys A–L/W–U play notes. Shift for upper octave, Cmd for lower, Cmd+Shift for lowest.</p>
              </div>
            </div>

            {/* Keyboard */}
            <div className="bg-[#0d0d0d] h-[276px] relative rounded-[8px] w-[1148px]">
              <div className="absolute h-[268px] left-[4px] top-[4px] w-[1140px]">
                
                {/* White Keys */}
                <div className="absolute content-stretch flex gap-[4px] items-center left-0 top-0">
                  {whiteKeys.map((key) => {
                    const noteKey = `${key.note}${key.octave}`;
                    const isSelected = selectedNotes.has(noteKey);
                    
                    return (
                      <button
                        key={noteKey}
                        onClick={() => toggleNote(key.note, key.octave)}
                        className={`h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] w-[48px] transition-all ${
                          isSelected ? 'bg-[#8a05ff]' : 'bg-white hover:bg-gray-100'
                        }`}
                      >
                        <div className={`absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase ${
                          isSelected ? 'text-white' : 'text-[#0d0d0d]'
                        }`}>
                          <p className="leading-[1.25]">{key.note}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Black Keys */}
                {blackKeys.map((key) => {
                  const noteKey = `${key.note}${key.octave}`;
                  const isSelected = selectedNotes.has(noteKey);
                  
                  return (
                    <button
                      key={noteKey}
                      onClick={() => toggleNote(key.note, key.octave)}
                      style={{ left: `${key.left}px` }}
                      className={`absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px] transition-all cursor-pointer ${
                        isSelected ? 'from-[#6900c6] to-[#8a05ff]' : ''
                      }`}
                    >
                      <div className={`absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] ${
                        key.flat ? 'left-[calc(50%+0.5px)]' : 'left-1/2'
                      } text-[10px] ${
                        isSelected ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'
                      } text-center text-nowrap tracking-[0.2px] translate-x-[-50%]`}>
                        {key.flat ? (
                          <>
                            <p className="mb-0">
                              {key.note.charAt(0)}<span className="text-[6.45px]">♯</span>
                            </p>
                            <p>{key.flat}</p>
                          </>
                        ) : (
                          <p className="leading-[1.25]">
                            {key.note.charAt(0)}<span className="text-[6.45px]">♯</span>
                          </p>
                        )}
                      </div>
                      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Buttons */}
            <div className="content-stretch flex gap-[8px] items-center">
              <button
                onClick={handleClear}
                className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[16px] pr-[20px] py-[7px] relative rounded-[41px] border border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.16)] transition-colors cursor-pointer"
              >
                <div className="size-[18px]">
                  <ClearIcon />
                </div>
                <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
                  <p className="leading-[1.25]">
                    CLEAR<span className="text-[rgba(255,255,255,0.66)]">{` [DELETE]`}</span>
                  </p>
                </div>
              </button>
              
              <button
                onClick={handleApply}
                disabled={selectedNotes.size === 0}
                className={`content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[20px] py-[7px] relative rounded-[41px] transition-all ${
                  selectedNotes.size === 0
                    ? 'bg-[rgba(255,255,255,0.1)] cursor-not-allowed opacity-50'
                    : 'shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] hover:shadow-[0px_1px_16px_0px_rgba(255,255,255,0.6)] cursor-pointer'
                }`}
                style={
                  selectedNotes.size > 0
                    ? {
                        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 166 32\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(-4.0049e-7 3.15 -15.477 -0.0000016498 83 16)\"><stop stop-color=\"rgba(255,255,255,1)\" offset=\"0.32202\"/><stop stop-color=\"rgba(251,255,212,1)\" offset=\"0.66101\"/><stop stop-color=\"rgba(247,254,169,1)\" offset=\"1\"/></radialGradient></defs></svg>')"
                      }
                    : undefined
                }
              >
                <div className="size-[18px]">
                  <CheckIcon />
                </div>
                <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
                  <p className="leading-[1.25]">
                    APPLY<span className="text-[rgba(13,13,13,0.66)]">{` [RETURN]`}</span>
                  </p>
                </div>
              </button>
            </div>

            {/* Info */}
            <div className="content-stretch flex font-['PP Neue Montreal Mono',sans-serif] font-medium gap-[8px] items-start leading-[0] not-italic text-[10px] text-center text-nowrap tracking-[0.2px]">
              <div className="flex flex-col justify-end text-[rgba(255,255,255,0.5)]">
                <p className="leading-[1.25] text-nowrap">STEP {currentStep}/16 •</p>
              </div>
              <div className="flex flex-col justify-end text-[rgba(255,255,255,0.5)]">
                <p className="leading-[1.25] text-nowrap">DETECTED:</p>
              </div>
              <div className="flex flex-col justify-end text-white">
                <p className="leading-[1.25] text-nowrap">{detectedChord || '—'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}