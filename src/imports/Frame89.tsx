import svgPaths from "./svg-kh862mffl2";

function Playlist() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="playlist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="playlist">
          <path d={svgPaths.p1aa2d80} fill="var(--fill-0, white)" fillOpacity="0.66" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Playlist />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-nowrap text-white tracking-[0.2px] uppercase">
        <p className="leading-[1.25]">CLASSIC</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[2px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[6px] py-[3px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Playlist1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="playlist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="playlist">
          <path d={svgPaths.p1aa2d80} fill="var(--fill-0, white)" fillOpacity="0.66" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Playlist1 />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.2px] uppercase">
        <p className="leading-[1.25]">808</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[6px] py-[3px] relative w-full">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Playlist2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="playlist">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="playlist">
          <path d={svgPaths.p1aa2d80} fill="var(--fill-0, white)" fillOpacity="0.66" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <Playlist2 />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.2px] uppercase">
        <p className="leading-[1.25]">WARM</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[6px] py-[3px] relative w-full">
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame5 />
      <Frame2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(39,39,39,0.96)] relative rounded-[2px] size-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center overflow-clip p-[4px] relative size-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2px]" />
    </div>
  );
}