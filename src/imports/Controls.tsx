import svgPaths from "./svg-73swkc4pa7";

function Play() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="play">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="play">
          <path d={svgPaths.p3d950580} fill="var(--fill-0, #0D0D0D)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function PlayButton() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[6px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0" data-name="Play button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 154 32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-3.7154e-7 3.15 -14.358 -0.0000016498 77 16)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.32202\\\'/><stop stop-color=\\\'rgba(251,255,212,1)\\\' offset=\\\'0.66101\\\'/><stop stop-color=\\\'rgba(247,254,169,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
          <Play />
          <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
            <p className="leading-[1.25]">
              PLAY<span className="text-[rgba(13,13,13,0.5)]">{` [Space]`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Switch() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="switch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="switch">
          <path d={svgPaths.p635c480} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function RandomButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Random button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Switch />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">RANDOM</p>
      </div>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="trash">
          <path d={svgPaths.p29f0e700} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ClearButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Clear button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Trash />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">CLEAR</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <PlayButton />
      <RandomButton />
      <ClearButton />
    </div>
  );
}

function Save() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="save">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="save">
          <path d={svgPaths.p23748800} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SaveButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0 w-[154px]" data-name="Save button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Save />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25] text-[12px]">
          SAVE<span className="font-['PP Neue Montreal Mono',sans-serif] font-medium not-italic tracking-[-3.84px] uppercase">...</span>
        </p>
      </div>
    </div>
  );
}

function Music() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="music">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="music">
          <path clipRule="evenodd" d={svgPaths.p9d57a70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 30 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LoadButton() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Load button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Music />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25] text-[12px]">
          LOAD<span className="font-['PP Neue Montreal Mono',sans-serif] font-medium not-italic tracking-[-3.84px] uppercase">...</span>
        </p>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Row">
      <SaveButton />
      <LoadButton />
    </div>
  );
}

export default function Controls() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Controls">
      <Row />
      <Row1 />
    </div>
  );
}