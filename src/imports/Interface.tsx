import svgPaths from "./svg-fxmtmshiph";

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
      <div className="bg-[rgba(13,13,13,0.72)] h-full rounded-[1px] shrink-0 w-[3px]" />
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

export default function Interface() {
  return (
    <div className="relative rounded-[3px] size-full" data-name="Interface" style={{ backgroundImage: "linear-gradient(26.1779deg, rgb(228, 232, 237) 42.645%, rgb(226, 234, 237) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Content />
      </div>
      <div className="absolute inset-[-1px] pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.38)] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
    </div>
  );
}