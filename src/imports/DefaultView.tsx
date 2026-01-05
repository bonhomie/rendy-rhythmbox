import svgPaths from "./svg-xxz527id14";
import imgGeminiGeneratedImageRbg1Arrbg1Arrbg12 from "figma:asset/aac1eb88716b548a153fd44b0418eb4c51e4b6eb.png";

function Text() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">Kick</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">808</p>
      </div>
    </div>
  );
}

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
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown />
    </div>
  );
}

function Volume1() {
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
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select />
      <Sound />
    </div>
  );
}

function Instrument() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text />
      <Buttons />
    </div>
  );
}

function Cell() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(157,102,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(144,77,241,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(131,51,227,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(118,26,212,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(112,13,205,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(105,0,198,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#8a05ff]" />
    </div>
  );
}

function Cell1() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell2() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell />
      <Cell1 />
      <Cell1 />
      <Cell1 />
      <Cell2 />
      <Cell1 />
      <Cell1 />
      <Cell1 />
      <Cell2 />
      <Cell1 />
      <Cell1 />
      <Cell1 />
      <Cell2 />
      <Cell1 />
      <Cell1 />
      <Cell1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-0 w-[1135px]">
      <Instrument />
      <Track />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">SNare</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">warm</p>
      </div>
    </div>
  );
}

function ChevronDown1() {
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

function Select1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown1 />
    </div>
  );
}

function Volume2() {
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

function Sound1() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume2 />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select1 />
      <Sound1 />
    </div>
  );
}

function Instrument1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text1 />
      <Buttons1 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(247,155,254,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(231,116,238,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(214,78,223,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(198,39,207,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(189,19,199,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(185,10,195,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(181,0,191,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_rgba(242,57,255,0.5)]" />
    </div>
  );
}

function Cell4() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell5() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell3 />
      <Cell4 />
      <Cell4 />
      <Cell4 />
      <Cell5 />
      <Cell4 />
      <Cell4 />
      <Cell4 />
      <Cell5 />
      <Cell4 />
      <Cell4 />
      <Cell4 />
      <Cell5 />
      <Cell4 />
      <Cell4 />
      <Cell4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[68px] w-[1135px]">
      <Instrument1 />
      <Track1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">Hi-hat 1</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">dry closed</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
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

function Select2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown2 />
    </div>
  );
}

function Volume3() {
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

function Sound2() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume3 />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select2 />
      <Sound2 />
    </div>
  );
}

function Instrument2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text2 />
      <Buttons2 />
    </div>
  );
}

function Cell6() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(254,247,207,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(239,227,163,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(223,207,119,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(208,187,76,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(200,177,54,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(192,167,32,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_rgba(243,205,1,0.66)]" />
    </div>
  );
}

function Cell7() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell6 />
      <Cell7 />
      <Cell7 />
      <Cell7 />
      <Cell8 />
      <Cell7 />
      <Cell7 />
      <Cell7 />
      <Cell8 />
      <Cell7 />
      <Cell7 />
      <Cell7 />
      <Cell8 />
      <Cell7 />
      <Cell7 />
      <Cell7 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[136px] w-[1135px]">
      <Instrument2 />
      <Track2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">hi-hat 2</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">open 808</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
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

function Select3() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown3 />
    </div>
  );
}

function Volume4() {
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

function Sound3() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume4 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select3 />
      <Sound3 />
    </div>
  );
}

function Instrument3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text3 />
      <Buttons3 />
    </div>
  );
}

function Cell9() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(196,255,150,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(172,248,112,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(148,241,74,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#57b60c]" />
    </div>
  );
}

function Cell10() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell11() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell9 />
      <Cell10 />
      <Cell10 />
      <Cell10 />
      <Cell11 />
      <Cell10 />
      <Cell10 />
      <Cell10 />
      <Cell11 />
      <Cell10 />
      <Cell10 />
      <Cell10 />
      <Cell11 />
      <Cell10 />
      <Cell10 />
      <Cell10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[204px] w-[1135px]">
      <Instrument3 />
      <Track3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">clap</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">classic</p>
      </div>
    </div>
  );
}

function ChevronDown4() {
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

function Select4() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown4 />
    </div>
  );
}

function VolumeX() {
  return (
    <div className="absolute left-px size-[18px] top-px" data-name="volume-x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="volume-x">
          <path d={svgPaths.p35971000} fill="var(--fill-0, white)" fillOpacity="0.5" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Sound4() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[#ff553d] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <VolumeX />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select4 />
      <Sound4 />
    </div>
  );
}

function Instrument4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text4 />
      <Buttons4 />
    </div>
  );
}

function Cell12() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(172,255,209,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(129,241,196,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(86,228,182,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(43,214,169,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(22,207,162,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(11,203,158,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,200,155,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#006d4c]" />
    </div>
  );
}

function Cell13() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell14() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell12 />
      <Cell13 />
      <Cell13 />
      <Cell13 />
      <Cell14 />
      <Cell13 />
      <Cell13 />
      <Cell13 />
      <Cell14 />
      <Cell13 />
      <Cell13 />
      <Cell13 />
      <Cell14 />
      <Cell13 />
      <Cell13 />
      <Cell13 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[272px] w-[1135px]">
      <Instrument4 />
      <Track4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">perc</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">woodblock</p>
      </div>
    </div>
  );
}

function ChevronDown5() {
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

function Select5() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown5 />
    </div>
  );
}

function Volume5() {
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

function Sound5() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume5 />
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select5 />
      <Sound5 />
    </div>
  );
}

function Instrument5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text5 />
      <Buttons5 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(129,211,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(82,188,255,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(58,177,255,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(34,165,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#005e9e]" />
    </div>
  );
}

function Cell16() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell17() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track5() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell15 />
      <Cell16 />
      <Cell16 />
      <Cell16 />
      <Cell17 />
      <Cell16 />
      <Cell16 />
      <Cell16 />
      <Cell17 />
      <Cell16 />
      <Cell16 />
      <Cell16 />
      <Cell17 />
      <Cell16 />
      <Cell16 />
      <Cell16 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[340px] w-[1135px]">
      <Instrument5 />
      <Track5 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">BASS</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">DOuBLE</p>
      </div>
    </div>
  );
}

function ChevronDown6() {
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

function Select6() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown6 />
    </div>
  );
}

function Volume6() {
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

function Sound6() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume6 />
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

function Select7() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
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

function Select8() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Circle />
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[48px]" data-name="Buttons">
      <Select6 />
      <Sound6 />
      <Select7 />
      <Select8 />
    </div>
  );
}

function Instrument6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text6 />
      <Buttons6 />
    </div>
  );
}

function Cell18() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(255,239,238,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,203,199,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(254,167,159,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#272727] text-[14px] text-center text-nowrap top-1/2 tracking-[0.28px] translate-x-[-50%] translate-y-[-50%] uppercase">
          <p className="leading-[20px]">C</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.438px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#d37602]" />
    </div>
  );
}

function Cell19() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell20() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.438px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track6() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell18 />
      <Cell19 />
      <Cell19 />
      <Cell19 />
      <Cell20 />
      <Cell19 />
      <Cell19 />
      <Cell19 />
      <Cell20 />
      <Cell19 />
      <Cell19 />
      <Cell19 />
      <Cell20 />
      <Cell19 />
      <Cell19 />
      <Cell19 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <Instrument6 />
      <Track6 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase" data-name="Text">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">KEYS</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">CHILL PAD</p>
      </div>
    </div>
  );
}

function ChevronDown7() {
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

function Select9() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <ChevronDown7 />
    </div>
  );
}

function Volume7() {
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

function Sound7() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Volume7 />
    </div>
  );
}

function Sliders1() {
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

function Select10() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Sliders1 />
    </div>
  );
}

function Circle1() {
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

function Select11() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative rounded-[1px] shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none rounded-[2px]" />
      <Circle1 />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-center flex flex-wrap gap-[8px] items-center relative shrink-0 w-[48px]" data-name="Buttons">
      <Select9 />
      <Sound7 />
      <Select10 />
      <Select11 />
    </div>
  );
}

function Instrument7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <Text7 />
      <Buttons7 />
    </div>
  );
}

function Cell21() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.438px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell22() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.094)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.12)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Cell23() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(197,235,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-center leading-[0] left-[calc(50%-0.5px)] not-italic text-[#272727] text-[14px] text-center text-nowrap top-1/2 tracking-[0.28px] translate-x-[-50%] translate-y-[-50%] uppercase">
          <p className="leading-[20px]">C</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.438px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#c3c3c3]" />
    </div>
  );
}

function Cell24() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track7() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell21 />
      <Cell22 />
      <Cell22 />
      <Cell22 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell22 />
      <Cell24 />
      <Cell22 />
      <Cell22 />
      <Cell22 />
      <Cell24 />
      <Cell22 />
      <Cell22 />
      <Cell22 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <Instrument7 />
      <Track7 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[21px] pb-0 pt-[16px] px-0 top-[408px] w-[1135px]">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[548px] left-[75px] top-[96px] w-[1156px]">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame21 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[36px]" data-name="Icon">
      <div className="absolute h-[28px] left-0 mix-blend-lighten top-px w-[36px]" data-name="Gemini_Generated_Image_rbg1arrbg1arrbg1 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[311.56%] left-[-280.19%] max-w-none top-[-23.73%] w-[442.77%]" src={imgGeminiGeneratedImageRbg1Arrbg1Arrbg12} />
        </div>
      </div>
    </div>
  );
}

function Wordmark() {
  return (
    <div className="h-[28px] relative shrink-0 w-[203px]" data-name="Wordmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 203 28">
        <g id="Wordmark">
          <g id="Union">
            <path d={svgPaths.p1dd1d600} fill="var(--fill-0, white)" />
            <path d={svgPaths.p12381700} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p1316be00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p38ee8f00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p1333a880} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2cfb7d80} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p33d6aa80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p2fce6800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bab1880} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p787b000} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19a32380} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p105ede00} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p22ad6d10} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[284px]" data-name="Logo">
      <Icon />
      <Wordmark />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute left-[252px] size-[32px] top-0" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Logo">
          <path d={svgPaths.p35768400} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RenderLockup() {
  return (
    <div className="h-[32px] relative shrink-0 w-[284px]" data-name="Render lockup">
      <Logo1 />
      <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[240px] not-italic text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right top-[23.5px] tracking-[0.2px] translate-x-[-100%] translate-y-[-100%] uppercase">
        <p className="leading-[1.25]">POWERED BY</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-[-1px] top-[calc(50%+0.25px)] translate-y-[-50%]" data-name="Content">
      <Logo />
      <RenderLockup />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute border-[0px_0px_0.5px] border-[rgba(255,255,255,0.2)] border-solid h-[64px] left-[24px] right-[24px] top-0" data-name="Header">
      <Content />
    </div>
  );
}

function Group3() {
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
      <Group3 />
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

function Frame22() {
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
      <Frame22 />
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

function Content1() {
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
    <div className="h-[48px] relative rounded-[3px] shrink-0 w-[360px]" data-name="LED screen" style={{ backgroundImage: "linear-gradient(26.1779deg, rgb(228, 232, 237) 42.645%, rgb(226, 234, 237) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Content1 />
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

function Controls() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Controls">
      <Row />
      <Row1 />
    </div>
  );
}

function Component() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="1">
      <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[5.25px]" />
      <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[6.75px]" />
      <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[8.25px]" />
      <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[9.75px]" />
      <div className="absolute bg-white left-[9.75px] size-[1.5px] top-[11.25px]" />
      <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[11.25px]" />
      <div className="absolute bg-white left-[6.75px] size-[1.5px] top-[5.25px]" />
      <div className="absolute bg-white left-[8.25px] size-[1.5px] top-[11.25px]" />
    </div>
  );
}

function One() {
  return (
    <div className="h-full relative rounded-[6px] shrink-0 w-[114.667px]" data-name="One" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 114.67 32\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'0.6000000238418579\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(5.7333 8.5865e-8 -7.8636e-9 2.1494 57.333 16)\\'><stop stop-color=\\'rgba(170,119,253,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(170,119,253,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>'), linear-gradient(16.6271deg, rgb(138, 5, 255) 30.08%, rgb(72, 0, 140) 101.13%)" }}>
      <div className="content-stretch flex items-center justify-center overflow-clip px-[48px] py-[7px] relative rounded-[inherit] size-full">
        <Component />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_8px_0px_rgba(138,5,255,0.5)]" />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute left-[calc(50%+0.5px)] overflow-clip size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="2">
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
    </div>
  );
}

function Two() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Two" style={{ backgroundImage: "linear-gradient(45.8159deg, rgba(163, 163, 157, 0.12) 42.645%, rgba(160, 160, 160, 0.12) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Component1 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute left-[calc(50%+0.83px)] overflow-clip size-[18px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="3">
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
    </div>
  );
}

function Three() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Three" style={{ backgroundImage: "linear-gradient(45.8159deg, rgba(163, 163, 157, 0.12) 42.645%, rgba(160, 160, 160, 0.12) 82.759%)" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Component2 />
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_8px_2px_rgba(0,0,0,0.16)]" />
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PhraseButton() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center relative shrink-0 w-full" data-name="Phrase button">
      <One />
      <Two />
      <Three />
    </div>
  );
}

function Phrase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Phrase">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] tracking-[0.24px] uppercase w-full">
        <p className="leading-[1.25]">PHRASE</p>
      </div>
      <PhraseButton />
    </div>
  );
}

function Knob() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Knob">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Knob">
          <mask fill="white" id="path-1-inside-1_90_2157">
            <path d={svgPaths.p38d3e400} />
          </mask>
          <path d={svgPaths.p38d3e400} fill="var(--fill-0, white)" fillOpacity="0.12" />
          <path d={svgPaths.p13b17f80} fill="var(--stroke-0, white)" fillOpacity="0.2" mask="url(#path-1-inside-1_90_2157)" />
          <g filter="url(#filter0_i_90_2157)" id="Ellipse 1">
            <circle cx="19.5" cy="8" fill="var(--fill-0, white)" fillOpacity="0.2" r="2" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter0_i_90_2157" width="4" x="17.5" y="6">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_90_2157" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Filter() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0" data-name="Filter">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">FILTER</p>
      </div>
      <Knob />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents inset-[8.33%_16.67%]">
      <div className="absolute bg-white inset-[33.33%_33.33%_58.33%_58.33%]" />
      <div className="absolute bg-white bottom-[41.67%] left-1/2 right-[41.67%] top-[41.67%]" />
      <div className="absolute bg-white bottom-1/4 left-[58.33%] right-[33.33%] top-[66.67%]" />
      <div className="absolute bg-white inset-[58.33%_33.33%_33.33%_58.33%]" />
      <div className="absolute bg-white bottom-[66.67%] left-[58.33%] right-[33.33%] top-1/4" />
      <div className="absolute bg-white bottom-3/4 left-[66.67%] right-1/4 top-[16.67%]" />
      <div className="absolute bg-white bottom-[16.67%] left-[66.67%] right-1/4 top-3/4" />
      <div className="absolute bg-white bottom-[16.67%] left-[41.67%] right-1/2 top-3/4" />
      <div className="absolute bg-white inset-[58.33%_58.33%_33.33%_33.33%]" />
      <div className="absolute bg-white inset-[45.83%_70.83%_45.83%_16.67%]" />
      <div className="absolute bg-white inset-[33.33%_58.33%_58.33%_33.33%]" />
      <div className="absolute bg-white bottom-3/4 left-[41.67%] right-1/2 top-[16.67%]" />
      <div className="absolute bg-white inset-[8.33%_58.33%_83.33%_33.33%]" />
      <div className="absolute bg-white bottom-[66.67%] left-1/4 right-[66.67%] top-1/4" />
      <div className="absolute bg-white bottom-1/4 left-1/4 right-[66.67%] top-[66.67%]" />
      <div className="absolute bg-white inset-[83.33%_58.33%_8.33%_33.33%]" />
      <div className="absolute bg-white bottom-[8.33%] left-3/4 right-[16.67%] top-[8.33%]" />
    </div>
  );
}

function VolumeVibrate() {
  return (
    <div className="relative size-[18px]" data-name="volume-vibrate">
      <Group4 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
          <div className="flex items-center justify-center relative shrink-0 size-[18px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <VolumeVibrate />
            </div>
          </div>
          <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
            <p className="leading-[1.25]">Crash</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HumanHandsup() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="human-handsup">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="human-handsup">
          <path d={svgPaths.p38701b00} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
          <HumanHandsup />
          <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
            <p className="leading-[1.25]">riser</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[16.67%_8.33%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
        <g id="Group 107">
          <path d={svgPaths.p17e22780} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function VolumeVibrate1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="volume-vibrate">
      <Group5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.12)] grow min-h-px min-w-px relative rounded-[6px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
          <VolumeVibrate1 />
          <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
            <p className="leading-[1.25]">HORN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame13 />
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">SFX</p>
      </div>
      <Frame17 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Filter />
      <Frame23 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#c7aeff] text-[12px] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">45%</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">REVERB</p>
      </div>
      <Frame9 />
    </div>
  );
}

function Frame14() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] ml-[144px] mt-0 rounded-[4.5px] size-[20px] to-[#aaaaaa]" />;
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[8px] rounded-[4px] w-[360px]" />
      <Frame14 />
    </div>
  );
}

function Reverb() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Reverb">
      <Frame10 />
      <Group />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#c7aeff] text-[12px] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">1/16</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">DELAY</p>
      </div>
      <Frame15 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full">
      <div className="absolute inset-[0_-0.28%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 18">
          <g id="Group 1">
            <g id="Rectangle 2974">
              <rect fill="var(--fill-0, white)" fillOpacity="0.4" height="4" rx="2" width="360" x="5.24537e-07" y="7" />
              <rect height="3" rx="1.5" stroke="var(--stroke-0, white)" strokeOpacity="0.2" width="359" x="0.500001" y="7.5" />
            </g>
            <line id="Line 1" stroke="var(--stroke-0, white)" x1="0.500001" x2="0.5" y1="3" y2="15" />
            <line id="Line 3" stroke="var(--stroke-0, white)" x1="120.5" x2="120.5" y1="3" y2="15" />
            <line id="Line 4" stroke="var(--stroke-0, white)" x1="240.5" x2="240.5" y1="3" y2="15" />
            <line id="Line 2" stroke="var(--stroke-0, white)" x1="360.5" x2="360.5" y1="3" y2="15" />
            <g id="Frame 71">
              <path d={svgPaths.p8068c80} fill="url(#paint0_linear_90_2123)" />
              <path d={svgPaths.pc38b980} stroke="var(--stroke-0, white)" strokeOpacity="0.2" strokeWidth="1.125" />
            </g>
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_90_2123" x1="120.31" x2="120.31" y1="0" y2="18">
              <stop stopColor="white" />
              <stop offset="1" stopColor="#AAAAAA" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DelayType() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Delay type">
      <Frame16 />
      <Group1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#c7aeff] text-[12px] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">45%</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">DELAY AMOUNT</p>
      </div>
      <Frame18 />
    </div>
  );
}

function Frame20() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] h-[18px] ml-[144.83px] mt-0 rounded-[4.5px] to-[#aaaaaa] w-[18.621px]" />;
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[7px] rounded-[4px] w-[360px]" />
      <Frame20 />
    </div>
  );
}

function DelayAmount() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Delay amount">
      <Frame19 />
      <Group2 />
    </div>
  );
}

function Effects() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Effects">
      <Reverb />
      <DelayType />
      <DelayAmount />
    </div>
  );
}

function Interface() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[1295px] top-[96px] w-[360px]" data-name="Interface">
      <LedScreen />
      <Controls />
      <Phrase />
      <Frame24 />
      <Effects />
    </div>
  );
}

export default function DefaultView() {
  return (
    <div className="relative size-full" data-name="Default view" style={{ backgroundImage: "linear-gradient(168.521deg, rgb(13, 13, 13) 10.076%, rgb(25, 25, 25) 77.752%)" }}>
      <Frame8 />
      <Header />
      <Interface />
    </div>
  );
}