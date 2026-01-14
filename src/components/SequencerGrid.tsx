import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import type { TrackData } from '../App';
import { SoundSelector } from './SoundSelector';
import { ArpeggiatorSelector } from './ArpeggiatorSelector';
import type { ArpPattern, ArpRate } from './ArpeggiatorSelector';
import { useState, useRef, useEffect } from 'react';
import svgPaths from '../imports/svg-5dtcbjdxgg';

type SequencerGridProps = {
  tracks: TrackData[];
  currentStep: number;
  onToggleStep: (trackId: number, stepIndex: number) => void;
  onToggleMute: (trackId: number, isShiftClick?: boolean) => void;
  onOpenPianoModal?: (trackId: number, stepIndex: number) => void;
  onSelectSound?: (trackId: number, soundId: string) => void;
  onArpPatternChange?: (trackId: number, pattern: ArpPattern) => void;
  onArpRateChange?: (trackId: number, rate: ArpRate) => void;
  onArpLengthChange?: (trackId: number, length: '1x' | '2x' | '4x') => void;
  recordingTrackId?: number | null;
  onEnterRecordMode?: (trackId: number) => void;
  onExitRecordMode?: () => void;
  onClearNotes?: (trackId: number, stepIndex: number) => void;
  onDragStart?: (trackId: number, stepIndex: number) => void;
  onDuplicateStart?: (trackId: number, stepIndex: number) => void;
  onDragDrop?: (trackId: number, stepIndex: number) => void;
  onDragCancel?: () => void;
  isDragging?: boolean;
  draggedNote?: { trackId: number; stepIndex: number; notes: string[]; chord: string | null } | null;
};

const colorMap = {
  purple: {
    gradient: "radial-gradient(circle at center, rgba(157,102,255,1) 0%, rgba(144,77,241,1) 25%, rgba(131,51,227,1) 50%, rgba(118,26,212,1) 75%, rgba(112,13,205,1) 87.5%, rgba(105,0,198,1) 100%)",
    shadow: "0px 0px 8px 1px #8a05ff",
    border: "rgba(255,255,255,0.2)"
  },
  pink: {
    gradient: "radial-gradient(circle at center, rgba(247,155,254,1) 0%, rgba(231,116,238,1) 25%, rgba(214,78,223,1) 50%, rgba(198,39,207,1) 75%, rgba(189,19,199,1) 87.5%, rgba(185,10,195,1) 93.75%, rgba(181,0,191,1) 100%)",
    shadow: "0px 0px 8px 1px rgba(242,57,255,0.5)",
    border: "rgba(255,200,255,0.4)"
  },
  yellow: {
    gradient: "radial-gradient(circle at center, rgba(254,247,207,1) 0%, rgba(239,227,163,1) 25%, rgba(223,207,119,1) 50%, rgba(208,187,76,1) 75%, rgba(200,177,54,1) 87.5%, rgba(192,167,32,1) 100%)",
    shadow: "0px 0px 8px 1px rgba(243,205,1,0.66)",
    border: "rgba(255,250,200,0.4)"
  },
  green: {
    gradient: "radial-gradient(circle at center, rgba(196,255,150,1) 0%, rgba(172,248,112,1) 50%, rgba(148,241,74,1) 100%)",
    shadow: "0px 0px 8px 1px #57b60c",
    border: "rgba(200,255,180,0.5)"
  },
  orange: {
    gradient: "radial-gradient(circle at center, rgba(255,200,150,1) 0%, rgba(255,170,100,1) 50%, rgba(255,140,50,1) 100%)",
    shadow: "0px 0px 8px 1px #ff8c00",
    border: "rgba(255,220,180,0.5)"
  },
  cyan: {
    gradient: "radial-gradient(circle at center, rgba(172,255,209,1) 0%, rgba(129,241,196,1) 25%, rgba(86,228,182,1) 50%, rgba(43,214,169,1) 75%, rgba(22,207,162,1) 87.5%, rgba(11,203,158,1) 93.75%, rgba(0,200,155,1) 100%)",
    shadow: "0px 0px 8px 1px #006d4c",
    border: "rgba(200,255,230,0.4)"
  },
  blue: {
    gradient: "radial-gradient(circle at center, rgba(129,211,255,1) 0%, rgba(82,188,255,1) 50%, rgba(58,177,255,1) 75%, rgba(34,165,255,1) 100%)",
    shadow: "0px 0px 8px 1px #005e9e",
    border: "rgba(200,230,255,0.4)"
  },
  coral: {
    gradient: "radial-gradient(circle at center, rgba(255,239,238,1) 0%, rgba(255,203,199,1) 50%, rgba(254,167,159,1) 100%)",
    shadow: "0px 0px 8px 1px #d37602",
    border: "rgba(255,255,255,0.2)"
  },
  white: {
    gradient: "radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(197,235,255,1) 100%)",
    shadow: "0px 0px 8px 1px #c3c3c3",
    border: "rgba(255,255,255,0.2)"
  }
};

function StepCell({ 
  isActive, 
  color, 
  isPlaying,
  onClick,
  chord,
  isMelodyTrack,
  onCmdClick,
  onAltClick,
  onShiftClick,
  onMouseEnter,
  isDragging,
  stepIndex
}: { 
  isActive: boolean; 
  color: keyof typeof colorMap;
  isPlaying: boolean;
  onClick: () => void;
  chord?: string | null;
  isMelodyTrack?: boolean;
  onCmdClick?: () => void;
  onAltClick?: () => void;
  onShiftClick?: () => void;
  onMouseEnter?: () => void;
  isDragging?: boolean;
  stepIndex: number;
}) {
  const colors = colorMap[color];
  
  // Highlight every 4th step (1, 5, 9, 13 in 1-based counting = 0, 4, 8, 12 in 0-based)
  const isStructuralBeat = stepIndex % 4 === 0;

  const handleClick = (e: React.MouseEvent) => {
    // Check for Shift key (for deleting)
    if (e.shiftKey && isMelodyTrack && onShiftClick && isActive) {
      e.preventDefault();
      e.stopPropagation();
      onShiftClick();
      return;
    }
    
    // Check for Command key (for dragging/moving) - on Mac this is metaKey
    if (e.metaKey && !e.altKey && isMelodyTrack && onCmdClick && isActive) {
      e.preventDefault();
      e.stopPropagation();
      onCmdClick();
      return;
    }
    
    // Check for Option/Alt key (for duplicating)
    if (e.altKey && !e.metaKey && isMelodyTrack && onAltClick && isActive) {
      e.preventDefault();
      e.stopPropagation();
      onAltClick();
      return;
    }
    
    // Normal click behavior
    onClick();
  };

  const handleMouseEnter = () => {
    if (onMouseEnter) {
      onMouseEnter();
    }
  };

  if (isActive) {
    return (
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        className={`relative rounded-[3.5px] w-14 h-14 transition-all hover:scale-105 active:scale-95 ${
          isPlaying ? 'ring-2 ring-white ring-opacity-60' : ''
        }`}
        style={{ 
          background: colors.gradient,
          boxShadow: isPlaying ? `${colors.shadow}, inset 0 0 20px rgba(255,255,255,0.4)` : colors.shadow,
          transform: isPlaying ? 'scale(1.08)' : 'scale(1)'
        }}
      >
        <div 
          className="absolute inset-0 pointer-events-none rounded-[3.5px]" 
          style={{
            border: `0.219px solid ${colors.border}`,
            boxShadow: '0px 0.438px 1.75px rgba(255,255,255,0.2)'
          }}
        />
        {isMelodyTrack && chord && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] text-[#272727] uppercase opacity-80 px-0.5">
              {chord}
            </span>
          </div>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`relative w-14 h-14 transition-all active:scale-95 ${
        isPlaying ? 'ring-1 ring-white ring-opacity-30' : ''
      }`}
      style={{
        borderRadius: '3.5px',
        transform: isPlaying ? 'scale(1.05)' : 'scale(1)',
        background: isStructuralBeat 
          ? 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(153, 153, 153, 0.20) 100%)'
          : 'linear-gradient(rgba(255, 255, 255, 0.07) 0%, rgba(153, 153, 153, 0.16) 100%)',
        borderTop: `0.219px solid ${isStructuralBeat ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)'}`,
        borderRight: `0.438px solid ${isStructuralBeat ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)'}`,
        borderBottom: `1.75px solid ${isStructuralBeat ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)'}`,
        borderLeft: `0.438px solid ${isStructuralBeat ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.08)'}`,
      }}
    />
  );
}

export function SequencerGrid({ tracks, currentStep, onToggleStep, onToggleMute, onOpenPianoModal, onSelectSound, onArpPatternChange, onArpRateChange, onArpLengthChange, recordingTrackId, onEnterRecordMode, onExitRecordMode, onClearNotes, onDragStart, onDuplicateStart, onDragDrop, onDragCancel, isDragging, draggedNote }: SequencerGridProps) {
  const [openSelectorTrackId, setOpenSelectorTrackId] = useState<number | null>(null);
  const [openArpTrackId, setOpenArpTrackId] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMelodyTrack = (trackName: string) => trackName === 'BASS' || trackName === 'KEYS';

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Check if click is outside all dropdowns
      const target = e.target as HTMLElement;
      const isDropdownClick = target.closest('.dropdown-container');
      
      if (!isDropdownClick) {
        setOpenSelectorTrackId(null);
        setOpenArpTrackId(null);
      }
    };

    // Add listener to document
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleStepClick = (track: TrackData, stepIndex: number) => {
    // If in drag mode and this is a melody track, drop the note
    if (isDragging && isMelodyTrack(track.name) && onDragDrop) {
      onDragDrop(track.id, stepIndex);
      return;
    }
    
    if (isMelodyTrack(track.name)) {
      // For melody tracks, open piano modal for manual note programming
      if (onOpenPianoModal) {
        onOpenPianoModal(track.id, stepIndex);
      }
    } else {
      // For rhythm tracks, toggle step
      onToggleStep(track.id, stepIndex);
    }
  };

  const handleSoundSelect = (trackId: number, soundId: string) => {
    if (onSelectSound) {
      onSelectSound(trackId, soundId);
    }
    setOpenSelectorTrackId(null);
  };

  return (
    <div className="flex flex-col gap-3">
      {tracks.map((track) => {
        const isTrackMelody = isMelodyTrack(track.name);
        const isRecording = recordingTrackId === track.id;
        
        return (
          <div key={track.id} className={`flex items-center gap-3 transition-all ${isRecording ? 'relative' : ''}`}>
            {/* Recording indicator overlay */}
            {isRecording && (
              <div className="absolute -inset-1 rounded-lg border-2 border-red-500 bg-red-500/10 animate-pulse pointer-events-none" />
            )}
            
            {/* Track info */}
            <div className="flex items-center gap-3 w-[200px] large-screen:w-[150px] shrink-0">
              <div className="flex flex-col items-end gap-0.5 flex-1">
                <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-white text-[12px] uppercase tracking-[0.24px] leading-[1.25] flex items-center gap-2">
                  {track.name}
                  {isRecording && (
                    <span className="text-red-500 text-[10px] animate-pulse">● REC</span>
                  )}
                </div>
                <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[rgba(255,255,255,0.5)] text-[10px] uppercase tracking-[0.2px] leading-[1.25]">
                  {track.subtitle}
                </div>
              </div>
              
              {/* Control buttons */}
              <div className="flex flex-col items-center gap-2 relative">
                {/* Top row: Sound selector and Mute */}
                <div className="flex items-center gap-2 relative dropdown-container">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      // For melody tracks, close arpeggiator if open
                      if (isTrackMelody && openArpTrackId === track.id) {
                        setOpenArpTrackId(null);
                      }
                      setOpenSelectorTrackId(openSelectorTrackId === track.id ? null : track.id);
                    }}
                    className="w-5 h-5 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer"
                  >
                    <ChevronDown className="w-[18px] h-[18px] text-white" />
                  </button>
                  {track.soundOptions && (
                    <SoundSelector
                      options={track.soundOptions}
                      selectedSound={track.soundVariant || ''}
                      onSelectSound={(soundId) => handleSoundSelect(track.id, soundId)}
                      isOpen={openSelectorTrackId === track.id}
                    />
                  )}
                  <button 
                    onClick={(e) => onToggleMute(track.id, e.shiftKey)}
                    className={`w-5 h-5 flex items-center justify-center transition-colors cursor-pointer ${
                      track.isMuted 
                        ? 'bg-[rgba(255,255,255,0.08)] border border-[#ff553d]' 
                        : 'bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.12)]'
                    }`}
                  >
                    {track.isMuted ? (
                      <VolumeX className="w-[18px] h-[18px] text-white opacity-50" />
                    ) : (
                      <Volume2 className="w-[18px] h-[18px] text-white" />
                    )}
                  </button>
                </div>

                {/* Bottom row: Settings and Record (only for melody tracks) */}
                {isTrackMelody && (
                  <div className="flex items-center gap-2 relative dropdown-container">
                    {/* Settings button for arpeggiator */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Close sound selector if open
                        if (openSelectorTrackId === track.id) {
                          setOpenSelectorTrackId(null);
                        }
                        setOpenArpTrackId(openArpTrackId === track.id ? null : track.id);
                      }}
                      className="w-5 h-5 bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] flex items-center justify-center hover:bg-[rgba(255,255,255,0.12)] transition-colors cursor-pointer"
                    >
                      <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path clipRule="evenodd" d={svgPaths.p3e225580} fill="white" fillRule="evenodd" />
                      </svg>
                    </button>
                    {track.arpPattern !== undefined && track.arpRate !== undefined && (
                      <ArpeggiatorSelector
                        pattern={track.arpPattern}
                        rate={track.arpRate}
                        length={track.arpLength || '1x'}
                        onPatternChange={(pattern) => {
                          if (onArpPatternChange) {
                            onArpPatternChange(track.id, pattern);
                          }
                        }}
                        onRateChange={(rate) => {
                          if (onArpRateChange) {
                            onArpRateChange(track.id, rate);
                          }
                        }}
                        onLengthChange={(length) => {
                          if (onArpLengthChange) {
                            onArpLengthChange(track.id, length);
                          }
                        }}
                        isOpen={openArpTrackId === track.id}
                      />
                    )}
                    
                    {/* Record button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (isRecording && onExitRecordMode) {
                          onExitRecordMode();
                        } else if (onEnterRecordMode) {
                          onEnterRecordMode(track.id);
                        }
                      }}
                      className={`w-5 h-5 flex items-center justify-center transition-all cursor-pointer ${
                        isRecording
                          ? 'bg-[rgba(255,85,61,0.2)] border border-[#ff553d] animate-pulse' 
                          : 'bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.12)]'
                      }`}
                    >
                      <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <path d={svgPaths.pb1cd300} fill={isRecording ? '#ff553d' : 'white'} />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Step grid */}
            <div className="flex gap-[7px]">
              {track.steps.map((isActive, stepIndex) => {
                // For melody tracks, only show as active if notes are assigned
                const shouldBeActive = isTrackMelody 
                  ? (track.notes?.[stepIndex] && track.notes[stepIndex]!.length > 0)
                  : isActive;
                
                return (
                  <StepCell
                    key={stepIndex}
                    isActive={shouldBeActive}
                    color={track.color as keyof typeof colorMap}
                    isPlaying={currentStep === stepIndex}
                    onClick={() => handleStepClick(track, stepIndex)}
                    chord={track.chords?.[stepIndex]}
                    isMelodyTrack={isTrackMelody}
                    onCmdClick={() => {
                      if (onDragStart) {
                        onDragStart(track.id, stepIndex);
                      }
                    }}
                    onAltClick={() => {
                      if (onDuplicateStart) {
                        onDuplicateStart(track.id, stepIndex);
                      }
                    }}
                    onShiftClick={() => {
                      if (onClearNotes) {
                        onClearNotes(track.id, stepIndex);
                      }
                    }}
                    stepIndex={stepIndex}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}