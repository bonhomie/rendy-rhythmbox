import svgPaths from "./svg-5dtcbjdxgg";

function ChevronDown() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="chevron-down">
          <path d={svgPaths.p3aa7bd00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Select() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <ChevronDown />
    </div>
  );
}

function Volume() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="volume-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="volume-2">
          <path d={svgPaths.p14c86d80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Sound() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <Volume />
    </div>
  );
}

function Sliders() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="sliders-2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="sliders-2">
          <path clipRule="evenodd" d={svgPaths.p3e225580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 42 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Select1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <Sliders />
    </div>
  );
}

function Circle() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="circle">
          <path d={svgPaths.pb1cd300} fill="var(--fill-0, #FF553D)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Select2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <Circle />
    </div>
  );
}

export default function Buttons() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative size-full" data-name="Buttons">
      <Select />
      <Sound />
      <Select1 />
      <Select2 />
    </div>
  );
}