import { useEffect, useState } from 'react';

type PhrasesProps = {
  activePhrase: number;
  queuedPhrase: number | null;
  onPhraseClick: (phraseId: number, isOptionHeld: boolean) => void;
  duplicateSourcePhrase: number | null;
  isDraggingPhrase: boolean;
};

export function Phrases({ activePhrase, queuedPhrase, onPhraseClick, duplicateSourcePhrase, isDraggingPhrase }: PhrasesProps) {
  return (
    <div className="flex gap-[8px] h-[32px] items-center w-full">
      {[1, 2, 3].map((phraseId) => {
        const isActive = activePhrase === phraseId;
        const isQueued = queuedPhrase === phraseId && !isActive;
        
        return (
        <button
          key={phraseId}
          onClick={(e) => onPhraseClick(phraseId, e.altKey)}
          className={`basis-0 grow min-h-px min-w-px h-full relative rounded-[6px] shrink-0 cursor-pointer transition-all ${
            isActive 
              ? 'shadow-[0px_0px_8px_0px_rgba(138,5,255,0.5)]' 
              : ''
          }`}
          style={{
            ...(isActive ? {
            backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 181.33 32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(9.0667 8.5865e-8 -1.2435e-8 2.1494 90.667 16)\\'><stop stop-color=\\'rgba(170,119,253,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(170,119,253,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(10.6937deg, rgb(138, 5, 255) 30.08%, rgb(72, 0, 140) 101.13%)"
          } : {
            backgroundImage: "linear-gradient(33.049deg, rgba(163, 163, 157, 0.12) 42.645%, rgba(160, 160, 160, 0.12) 82.759%)"
            }),
            ...(isQueued ? {
              animation: 'pulse-glow 2s ease-in-out infinite'
            } : {})
          }}
        >
          <div className="flex items-center justify-center size-full">
            <div className="relative size-[18px]">
              {/* Pixel art number */}
              {phraseId === 1 && (
                <>
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[6.75px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[8.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[9.75px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[11.25px]" />
                </>
              )}
              {phraseId === 2 && (
                <>
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[11.25px] size-[1.5px] top-[6.75px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[8.25px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[11.25px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[9.75px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[8.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[5.25px] size-[1.5px] top-[6.75px]" />
                  <div className="absolute bg-white left-[5.25px] size-[1.5px] top-[11.25px]" />
                </>
              )}
              {phraseId === 3 && (
                <>
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[11.25px] size-[1.5px] top-[6.75px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[8.25px]" />
                  <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[11.25px] size-[1.5px] top-[9.75px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[11.25px]" />
                  <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[8.25px]" />
                  <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[5.25px]" />
                  <div className="absolute bg-white left-[5.25px] size-[1.5px] top-[6.75px]" />
                  <div className="absolute bg-white left-[5.25px] size-[1.5px] top-[9.75px]" />
                </>
              )}
            </div>
          </div>
          {isQueued && (
            <div 
              className="absolute inset-0 pointer-events-none rounded-[6px]"
              style={{
                boxShadow: '0px 0px 12px 0px rgba(138, 5, 255, 0.4)',
                animation: 'pulse-glow-shadow 2s ease-in-out infinite'
              }}
            />
          )}
          {!isActive && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
          )}
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[6px]" />
        </button>
        );
      })}
    </div>
  );
}