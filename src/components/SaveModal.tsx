import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { saveToLocalStorage } from '../utils/localStorage';
import { saveTrack } from '../utils/api';
import { setHash, copyShareableUrl } from '../utils/urlHash';
import type { AppState } from '../utils/saveLoad';
import { serializeState } from '../utils/saveLoad';

const DEBUG = false;

interface SaveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, djName: string) => Promise<void>;
  state: AppState;
}

export function SaveModal({ isOpen, onClose, onSave, state }: SaveModalProps) {
  const [title, setTitle] = useState('');
  const [djName, setDjName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [shareableUrl, setShareableUrl] = useState<string | null>(null);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      // Reset form when modal opens
      setTitle('');
      setDjName('');
      setError(null);
      setShareableUrl(null);
      setIsSaving(false);
    }
  }, [isOpen]);

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

    try {
      // Serialize state to ensure proper deep cloning and versioning
      const serializedState = serializeState(state);
      
      // Always save to localStorage first (instant)
      saveToLocalStorage(title.trim(), djName.trim(), serializedState);

      // Then attempt API save
      try {
        const response = await saveTrack(title.trim(), djName.trim(), serializedState);
        const slug = response.slug;
        setHash(slug);
        const url = window.location.origin + window.location.pathname + `#track-${slug}`;
        setShareableUrl(url);
        
        // Copy to clipboard
        await copyShareableUrl(slug);
      } catch (apiError) {
        // API save failed, but localStorage save succeeded
        console.warn('API save failed, but local save succeeded:', apiError);
        setError('Saved locally, but failed to share online. You can still load it from local saves.');
      }

      await onSave(title.trim(), djName.trim());
      
      // Reset form and close modal after successful save
      setTitle('');
      setDjName('');
      setError(null);
      setShareableUrl(null);
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
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (DEBUG) {
        console.log('[SaveModal] Dialog onOpenChange called with:', open);
      }
      if (!open && !isSaving) {
        handleClose();
      } else if (open) {
        // Ensure state is synced when Dialog opens externally
        if (!isOpen) {
          // This shouldn't happen, but log if it does
          if (DEBUG) {
            console.log('[SaveModal] Dialog opened but isOpen prop is false');
          }
        }
      }
    }}>
      <DialogContent 
        className="bg-[#111111] border-2 border-red-500 border-solid rounded-[16px] p-6 w-[360px] min-h-[240px] [&>button]:hidden z-[100]"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 100
        }}
        aria-describedby={undefined}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Save Track</DialogTitle>
          <DialogDescription id="save-dialog-description" className="sr-only">
            Enter a track title and your name to save your beat
          </DialogDescription>
        </DialogHeader>
        <div className="bg-yellow-400 text-black text-xs px-2 py-1 rounded mb-4 font-bold">
          DEBUG: SaveModal visible (isOpen: {String(isOpen)})
        </div>
        <div className="relative flex flex-col gap-[8px] items-start w-full">
          {/* NAME YOUR BEAT */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] tracking-[0.2px] uppercase w-full">
              <p className="leading-[1.25]">NAME YOUR BEAT</p>
            </div>
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.72)] border border-[rgba(0,0,0,0.32)] border-solid h-[32px] overflow-clip relative rounded-[99px] shrink-0 w-full">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Funky Beat"
                disabled={isSaving}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isSaving && title.trim() && djName.trim()) {
                    handleSave();
                  }
                }}
                className="absolute flex flex-col font-['PP Neue Montreal',sans-serif] justify-end leading-[0] left-[15px] not-italic text-[12px] text-[rgba(13,13,13,0.44)] text-nowrap top-[calc(50%+10px)] tracking-[0.12px] translate-y-[-100%] bg-transparent border-0 outline-none w-[calc(100%-30px)] placeholder:text-[rgba(13,13,13,0.44)]"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          {/* YOUR NAME */}
          <div className="flex flex-col gap-[8px] items-start w-full">
            <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] tracking-[0.2px] uppercase w-full">
              <p className="leading-[1.25]">YOUR NAME</p>
            </div>
            <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(255,255,255,0.72)] border border-[rgba(0,0,0,0.32)] border-solid h-[32px] overflow-clip relative rounded-[99px] shrink-0 w-full">
              <input
                type="text"
                value={djName}
                onChange={(e) => setDjName(e.target.value)}
                placeholder="DJ Rendy Raccoon"
                disabled={isSaving}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isSaving && title.trim() && djName.trim()) {
                    handleSave();
                  }
                }}
                className="absolute flex flex-col font-['PP Neue Montreal',sans-serif] justify-end leading-[0] left-[15px] not-italic text-[12px] text-[rgba(13,13,13,0.44)] text-nowrap top-[calc(50%+10px)] tracking-[0.12px] translate-y-[-100%] bg-transparent border-0 outline-none w-[calc(100%-30px)] placeholder:text-[rgba(13,13,13,0.44)]"
                style={{ top: '50%', transform: 'translateY(-50%)' }}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-[8px] items-center w-full mt-4">
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

          {error && (
            <div className="text-red-400 text-[10px] font-['PP Neue Montreal Mono',sans-serif] mt-2">
              {error}
            </div>
          )}

          {shareableUrl && (
            <div className="bg-[rgba(138,5,255,0.1)] border border-[rgba(138,5,255,0.3)] rounded-[6px] p-2 w-full mt-2">
              <div className="text-[10px] font-['PP Neue Montreal Mono',sans-serif] text-[rgba(255,255,255,0.8)]">
                Track saved! URL copied to clipboard.
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
