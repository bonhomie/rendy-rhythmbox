import { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { ScrollArea } from './ui/scroll-area';
import { listTracks, loadTrack, type SavedTrack } from '../utils/api';
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
  const [apiTracks, setApiTracks] = useState<SavedTrack[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Debug: Log when isOpen changes
  useEffect(() => {
    if (DEBUG) {
      console.log('[LoadDropdown] isOpen changed:', isOpen);
    }
  }, [isOpen]);

  // Load API tracks when dropdown opens
  useEffect(() => {
    if (isOpen) {
      if (DEBUG) {
        console.log('[LoadDropdown] Loading tracks, isOpen is true');
      }
      
      setIsLoading(true);
      
      // Fetch API tracks
      listTracks()
        .then(tracks => {
          if (DEBUG) {
            console.log('[LoadDropdown] API tracks found:', tracks.length);
          }
          setApiTracks(tracks);
        })
        .catch(error => {
          console.warn('[LoadDropdown] Failed to load API tracks:', error);
          setApiTracks([]);
        })
        .finally(() => {
          setIsLoading(false);
        });
      
      setSelectedIndex(0);
    } else {
      // Reset when closed
      setApiTracks([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const handleLoadApiTrack = async (track: SavedTrack) => {
    try {
      const trackWithState = await loadTrack(track.slug);
      if (trackWithState && trackWithState.state) {
        onLoad(trackWithState.state);
        onOpenChange(false);
      } else {
        console.error('Failed to load API track: missing state');
      }
    } catch (error) {
      console.error('Failed to load API track:', error);
      // Could show error toast here
    }
  };


  return (
    <>
      <style>{`
        [data-load-dropdown-item]:not([data-selected="true"]):hover {
          background-color: rgba(255, 255, 255, 0.08) !important;
        }
      `}</style>
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
        className="min-w-[320px] max-w-[400px] z-[100]"
        align="start"
        sideOffset={8}
        style={{
          backdropFilter: 'blur(6px)',
          background: 'rgba(39, 39, 39, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.20)',
          borderRadius: '8px',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        {isLoading ? (
          <div 
            className="text-center w-full"
            style={{ padding: '16px' }}
          >
            <div className="font-['PP Neue Montreal',sans-serif] text-[13px] text-[rgba(255,255,255,0.4)]">
              Loading tracks...
            </div>
          </div>
        ) : apiTracks.length === 0 ? (
          <div 
            className="text-center w-full"
            style={{ padding: '16px' }}
          >
            <div className="font-['PP Neue Montreal',sans-serif] text-[13px] text-[rgba(255,255,255,0.4)]">
              No saved tracks yet
            </div>
          </div>
        ) : (
          <ScrollArea 
            className="w-full"
            style={{ maxHeight: 'calc(8 * 32px)' }}
          >
            <div className="flex flex-col" style={{ gap: '0', overflow: 'hidden', borderRadius: '8px' }}>
              {/* API Tracks */}
              {apiTracks.map((track, index) => {
                const isFirst = index === 0;
                const isLast = index === apiTracks.length - 1;
                const isSingleItem = apiTracks.length === 1;
                return (
                <button
                  key={track.slug}
                  onClick={() => handleLoadApiTrack(track)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  data-load-dropdown-item
                  data-selected={index === selectedIndex}
                  style={{
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    padding: '8px 12px',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    border: 'none',
                    background: index === selectedIndex 
                      ? 'rgba(255, 255, 255, 0.2)' 
                      : 'transparent',
                    borderRadius: isSingleItem 
                      ? '8px' 
                      : isFirst 
                        ? '8px 8px 0 0' 
                        : isLast 
                          ? '0 0 8px 8px' 
                          : '0',
                    transition: 'background-color 0.15s ease',
                  }}
                >
                  <MusicIcon />
                  <div 
                    className="flex gap-[4px] items-center text-nowrap"
                    style={{
                      fontFamily: "'PP Neue Montreal', sans-serif",
                      fontSize: '13px',
                      letterSpacing: '0.13px',
                    }}
                  >
                    <span style={{ color: 'white' }}>{track.title}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>by</span>
                    <span style={{ color: 'white' }}>{track.dj_name}</span>
                  </div>
                </button>
                );
              })}
            </div>
          </ScrollArea>
        )}
      </PopoverContent>
    </Popover>
    </>
  );
}
