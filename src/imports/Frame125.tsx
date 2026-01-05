import svgPaths from "./svg-d0xiv0f7ge";

function Group() {
  return (
    <div className="basis-0 grow h-[18px] min-h-px min-w-px relative shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 18">
        <g id="Group 9">
          <path d={svgPaths.p2cc68880} fill="var(--fill-0, #0D0D0D)" fillOpacity="0.16" id="Rectangle 2995" />
          <path d={svgPaths.p25d3f100} fill="var(--fill-0, #0D0D0D)" fillOpacity="0.72" id="Rectangle 2996" />
        </g>
      </svg>
    </div>
  );
}

function VolumeScale() {
  return (
    <div className="content-stretch flex h-[18px] items-center relative shrink-0 w-[56px]" data-name="Volume scale">
      <Group />
    </div>
  );
}

function Volume() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0" data-name="Volume">
      <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] text-nowrap tracking-[0.2px] uppercase">VOLUME</p>
      <VolumeScale />
    </div>
  );
}

function Tempo() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 uppercase w-[37px]" data-name="Tempo">
      <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] tracking-[0.2px] w-full">Tempo</p>
      <p className="font-['Chivo_Mono:Regular',sans-serif] font-normal leading-none relative shrink-0 text-[20px] text-[rgba(13,13,13,0.72)] text-shadow-[0px_0px_4px_rgba(255,255,255,0.8)] w-full">120</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2px] h-[18px] items-center relative shrink-0">
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[0.8px] shrink-0 w-[3px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[4px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[5px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[6px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[7px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[8px]" />
      <div className="bg-[rgba(13,13,13,0.16)] h-full rounded-[1px] shrink-0 w-[9px]" />
    </div>
  );
}

function Swing() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0" data-name="Swing">
      <p className="font-['PP Neue Montreal Mono',sans-serif] font-medium leading-[12px] min-w-full not-italic relative shrink-0 text-[10px] text-[rgba(13,13,13,0.5)] tracking-[0.2px] uppercase w-[min-content]">Swing</p>
      <Frame />
    </div>
  );
}

function Visualizer() {
  return (
    <div className="h-[32px] relative shrink-0 w-[129px]" data-name="Visualizer">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.5px] border-[rgba(13,13,13,0.24)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-center left-[12px] top-[6px]" data-name="Content">
      <div className="flex flex-row items-center self-stretch">
        <Volume />
      </div>
      <Tempo />
      <div className="flex flex-row items-center self-stretch">
        <Swing />
      </div>
      <Visualizer />
    </div>
  );
}

function LedScreen() {
  return (
    <div className="absolute h-[48px] left-[calc(50%+320.5px)] rounded-[3px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[360px]" data-name="LED screen" style={{ backgroundImage: "linear-gradient(26.1779deg, rgb(228, 232, 237) 42.645%, rgb(226, 234, 237) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.38)] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
    </div>
  );
}

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
    <div className="content-stretch flex gap-[8px] h-full items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0" data-name="Play button" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 143 48\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-3.45e-7 4.725 -13.332 -0.0000024747 71.5 24)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.32202\\\'/><stop stop-color=\\\'rgba(251,255,212,1)\\\' offset=\\\'0.66101\\\'/><stop stop-color=\\\'rgba(247,254,169,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Play />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">
          PLAY<span className="text-[rgba(13,13,13,0.5)]">{` [Space]`}</span>
        </p>
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
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Random button">
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
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Clear button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Trash />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">CLEAR</p>
      </div>
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
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Save button">
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
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] h-full items-center justify-center px-[16px] py-[7px] relative rounded-[6px] shrink-0" data-name="Load button">
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

function Row() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[48px] items-center left-0 top-0" data-name="Row">
      <PlayButton />
      <RandomButton />
      <ClearButton />
      <SaveButton />
      <LoadButton />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <LedScreen />
      <Row />
    </div>
  );
}