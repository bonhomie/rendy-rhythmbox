function Frame() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 114.67 24\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.7333 6.4399e-8 -7.8636e-9 1.612 57.333 12)\\'><stop stop-color=\\'rgba(254,159,173,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(254,159,173,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(12.6242deg, rgb(255, 0, 59) 30.08%, rgb(160, 26, 82) 101.13%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[calc(50%+0.17px)] not-italic text-[10px] text-center text-nowrap text-white top-[calc(50%+3.5px)] tracking-[0.2px] translate-x-[-50%] translate-y-[-100%] uppercase">
          <p className="leading-[1.25]">ONE</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[4px] shadow-[0px_0px_8px_0px_rgba(255,64,131,0.5)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0" style={{ backgroundImage: "linear-gradient(37.6563deg, rgba(163, 163, 157, 0.12) 42.645%, rgba(160, 160, 160, 0.12) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[calc(50%+0.5px)] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[calc(50%+3.5px)] tracking-[0.2px] translate-x-[-50%] translate-y-[-100%] uppercase">
          <p className="leading-[1.25]">TWO</p>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[3px] shrink-0" style={{ backgroundImage: "linear-gradient(37.6563deg, rgba(163, 163, 157, 0.12) 42.645%, rgba(160, 160, 160, 0.12) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[calc(50%+0.83px)] not-italic text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap top-[calc(50%+3.5px)] tracking-[0.2px] translate-x-[-50%] translate-y-[-100%] uppercase">
          <p className="leading-[1.25]">THREE</p>
        </div>
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full">
      <Frame />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] tracking-[0.24px] uppercase w-full">
        <p className="leading-[1.25]">PHRASE</p>
      </div>
      <Frame4 />
    </div>
  );
}