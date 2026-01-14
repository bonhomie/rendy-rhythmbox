import { useState, useEffect, useRef } from 'react';
import { Popover, PopoverContent } from './ui/popover';
import { saveTrack } from '../utils/api';
import { setHash, getShareableUrl, copyShareableUrl } from '../utils/urlHash';
import type { AppState } from '../utils/saveLoad';
import { serializeState } from '../utils/saveLoad';

const DEBUG = false;

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, djName: string) => Promise<void>;
  state: AppState;
  triggerRef?: React.RefObject<HTMLButtonElement>;
}

export function SaveModal({ isOpen, onClose, onSave, state, triggerRef }: SaveModalProps) {
  const [title, setTitle] = useState('');
  const [djName, setDjName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareableUrl, setShareableUrl] = useState<string | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setTitle('');
      setDjName('');
      setError(null);
      setShareableUrl(null);
      setSlug(null);
      setIsSaving(false);
      
      // Calculate position below the Save button
      if (triggerRef?.current) {
        const buttonRect = triggerRef.current.getBoundingClientRect();
        const spacing = 8; // 8px gap below button
        setPosition({
          top: buttonRect.bottom + spacing + window.scrollY,
          left: buttonRect.left + window.scrollX,
        });
      }
    }
  }, [isOpen, triggerRef]);

  // Debug: Log when isOpen changes
  useEffect(() => {
    if (DEBUG) {
      console.log('[SaveModal] isOpen changed:', isOpen);
    }
  }, [isOpen]);

  const handleSave = async () => {
    if (!title.trim() || !djName.trim()) {
      setError('Please enter both title and name');
      return;
    }

    setIsSaving(true);
    setError(null);
    setShareableUrl(null);
    setSlug(null);

    try {
      // Serialize state to ensure proper deep cloning and versioning
      const serializedState = serializeState(state);
      
      // Save to API
      const response = await saveTrack(title.trim(), djName.trim(), serializedState);
      const savedSlug = response.slug;
      setHash(savedSlug);
      const url = getShareableUrl(savedSlug);
      setShareableUrl(url);
      setSlug(savedSlug);
      
      await onSave(title.trim(), djName.trim());
      
      // Reset form and close modal after successful save
      setTitle('');
      setDjName('');
      setError(null);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save track');
    } finally {
      setIsSaving(false);
    }
  };

  const handleClose = () => {
    if (!isSaving) {
      setTitle('');
      setDjName('');
      setError(null);
      setShareableUrl(null);
      setSlug(null);
      onClose();
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={(open) => {
      if (DEBUG) {
        console.log('[SaveModal] Popover onOpenChange called with:', open);
      }
      if (!open && !isSaving) {
        handleClose();
      }
    }}>
      <PopoverContent 
        data-testid="save-modal"
        className="!w-[360px] !max-w-[360px] !h-[228px] z-[100]"
        align="start"
        sideOffset={8}
        style={position ? {
          position: 'fixed',
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: 'none',
          width: '360px',
          maxWidth: '360px',
          backdropFilter: 'blur(6px)',
          background: 'rgba(39, 39, 39, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.20)',
          borderRadius: '8px',
          padding: '24px',
        } : {
          width: '360px',
          maxWidth: '360px',
          backdropFilter: 'blur(6px)',
          background: 'rgba(39, 39, 39, 0.88)',
          border: '1px solid rgba(255, 255, 255, 0.20)',
          borderRadius: '8px',
          padding: '24px',
        }}
      >
        <div className="flex flex-col items-start w-full h-full">
          {/* NAME YOUR BEAT */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <label className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] text-[rgba(255,255,255,0.66)] tracking-[0.2px] uppercase">
              NAME YOUR BEAT
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My Funky Beat"
              disabled={isSaving}
              onKeyDown={(e) => {
                // Handle Command+A / Ctrl+A to select all text
                if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                  e.preventDefault();
                  (e.target as HTMLInputElement).select();
                  return;
                }
                if (e.key === 'Enter' && !isSaving && title.trim() && djName.trim()) {
                  handleSave();
                }
              }}
              style={{
                width: '100%',
                height: '32px',
                borderRadius: '99px',
                border: '1px solid rgba(0, 0, 0, 0.32)',
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(6px)',
                padding: '7px 16px',
                lineHeight: '18px',
                boxSizing: 'border-box',
              }}
              className="font-['PP Neue Montreal',sans-serif] text-[12px] text-[rgba(13,13,13,0.44)] placeholder:text-[rgba(13,13,13,0.44)] disabled:opacity-50 outline-none focus:outline-none focus:ring-0 focus:border-[rgba(0,0,0,0.32)]"
            />
          </div>

          {/* YOUR NAME */}
          <div 
            className="flex flex-col gap-[8px] items-start w-full"
            style={{ marginTop: '16px' }}
          >
            <label className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] text-[rgba(255,255,255,0.66)] tracking-[0.2px] uppercase">
              YOUR NAME
            </label>
            <input
              type="text"
              value={djName}
              onChange={(e) => setDjName(e.target.value)}
              placeholder="DJ Rendy Raccoon"
              disabled={isSaving}
              onKeyDown={(e) => {
                // Handle Command+A / Ctrl+A to select all text
                if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
                  e.preventDefault();
                  (e.target as HTMLInputElement).select();
                  return;
                }
                if (e.key === 'Enter' && !isSaving && title.trim() && djName.trim()) {
                  handleSave();
                }
              }}
              style={{
                width: '100%',
                height: '32px',
                borderRadius: '99px',
                border: '1px solid rgba(0, 0, 0, 0.32)',
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(6px)',
                padding: '7px 16px',
                lineHeight: '18px',
                boxSizing: 'border-box',
              }}
              className="font-['PP Neue Montreal',sans-serif] text-[12px] text-[rgba(13,13,13,0.44)] placeholder:text-[rgba(13,13,13,0.44)] disabled:opacity-50 outline-none focus:outline-none focus:ring-0 focus:border-[rgba(0,0,0,0.32)]"
            />
          </div>

          {/* Buttons */}
          <div 
            className="flex gap-[8px] items-center w-full"
            style={{ marginTop: '24px' }}
          >
            <button
              onClick={handleSave}
              disabled={isSaving || !title.trim() || !djName.trim()}
              className="basis-0 content-stretch flex gap-[8px] grow h-[32px] items-center justify-center min-h-px min-w-px pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0 disabled:opacity-50 cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
              style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 152 32\\' xmlns=\\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\\'none\\'><rect x=\\\'0\\' y=\\\'0\\' height=\\\'100%\\' width=\\\'100%\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\'/><defs><radialGradient id=\\\'grad\\' gradientUnits=\\\'userSpaceOnUse\\' cx=\\\'0\\' cy=\\\'0\\' r=\\\'10\\' gradientTransform=\\\'matrix(-3.6671e-7 3.15 -14.171 -0.0000016498 76 16)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.32202\\'/><stop stop-color=\\\'rgba(251,255,212,1)\\\' offset=\\\'0.66101\\'/><stop stop-color=\\\'rgba(247,254,169,1)\\\' offset=\\\'1\\'/></radialGradient></defs></svg>')" }}
            >
              <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
                <p className="leading-[1.25]">{isSaving ? 'SAVING...' : 'SAVE'}</p>
              </div>
            </button>
            <button
              onClick={handleClose}
              disabled={isSaving}
              className="basis-0 bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] border-solid content-stretch flex gap-[8px] grow items-center justify-center min-h-px min-w-px pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shrink-0 disabled:opacity-50 cursor-pointer hover:bg-[rgba(255,255,255,0.16)] transition-colors"
            >
              <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
                <p className="leading-[1.25]">CANCEL</p>
              </div>
            </button>
          </div>

        </div>
      </PopoverContent>
    </Popover>
  );
}
