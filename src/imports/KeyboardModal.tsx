import svgPaths from "./svg-2ms8mx19ng";

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

function SelectInstrumentSound() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Select instrument sound">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <ChevronDown />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25] text-[12px]">
          <span className="text-white">BASS</span> <span className="text-[rgba(255,255,255,0.66)]">{`— `}</span>
          <span className="text-[#ffd5d2]">DOUBLE BASS</span>
        </p>
      </div>
      <SelectInstrumentSound />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0">
      <Frame2 />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap">
        <p className="leading-[1.25]">Tip: You can press keys from A / W to U / K + Shift for upper octave.</p>
      </div>
    </div>
  );
}

function Key() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">C</p>
      </div>
    </div>
  );
}

function Key1() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">D</p>
      </div>
    </div>
  );
}

function Key2() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">E</p>
      </div>
    </div>
  );
}

function Key3() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">F</p>
      </div>
    </div>
  );
}

function Key4() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">G</p>
      </div>
    </div>
  );
}

function Key5() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">A</p>
      </div>
    </div>
  );
}

function Key6() {
  return (
    <div className="bg-white h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[#0d0d0d] text-[12px] text-center text-nowrap tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">B</p>
      </div>
    </div>
  );
}

function Key7() {
  return (
    <div className="bg-[#8a05ff] h-[268px] overflow-clip relative rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] shrink-0 w-[48px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 not-italic text-[12px] text-center text-nowrap text-white tracking-[0.24px] translate-x-[-50%] uppercase">
        <p className="leading-[1.25]">C</p>
      </div>
    </div>
  );
}

function WhiteKeys() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-0 top-0" data-name="White Keys">
      <Key />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key7 />
      <Key1 />
      <Key2 />
      <Key3 />
      <Key4 />
      <Key5 />
      <Key6 />
      <Key />
    </div>
  );
}

function Key8() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[32px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          C<span className="text-[6.45px]">♯</span>
        </p>
        <p>D♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key9() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[396px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          C<span className="text-[6.45px]">♯</span>
        </p>
        <p>D♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key10() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[84px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          D<span className="text-[6.45px]">♯</span>
        </p>
        <p>E♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key11() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[448px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          D<span className="text-[6.45px]">♯</span>
        </p>
        <p>E♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key12() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[188px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.25]">
          F<span className="text-[6.45px]">♯</span>
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key13() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[552px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-1/2 text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.25]">
          F<span className="text-[6.45px]">♯</span>
        </p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key14() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[240px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          G<span className="text-[6.45px]">♯</span>
        </p>
        <p>A♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key15() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[604px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[1.25] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="mb-0">
          G<span className="text-[6.45px]">♯</span>
        </p>
        <p>A♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key16() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[292px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.25]">B♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function Key17() {
  return (
    <div className="absolute bg-gradient-to-t from-[#272727] from-[23.661%] h-[172px] left-[656px] overflow-clip rounded-bl-[4.5px] rounded-br-[4.5px] rounded-tl-[3px] rounded-tr-[3px] to-[#4d4d4d] to-[97.321%] top-0 w-[36px]" data-name="Key">
      <div className="absolute bottom-[16px] flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[calc(50%+0.5px)] text-[10px] text-[rgba(255,255,255,0.5)] text-center text-nowrap tracking-[0.2px] translate-x-[-50%]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 500" }}>
        <p className="leading-[1.25]">B♭</p>
      </div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_-1.5px_-3px_1.5px_6px_rgba(13,13,13,0.8)]" />
    </div>
  );
}

function KeyboardLarge() {
  return (
    <div className="absolute h-[268px] left-[4px] top-[4px] w-[776px]" data-name="Keyboard - Large">
      <WhiteKeys />
      <Key8 />
      <Key9 />
      <Key10 />
      <Key11 />
      <Key12 />
      <Key13 />
      <Key14 />
      <Key15 />
      <Key16 />
      <Key17 />
    </div>
  );
}

function Inset() {
  return (
    <div className="bg-[#0d0d0d] h-[276px] relative rounded-[8px] shrink-0 w-[784px]" data-name="Inset">
      <KeyboardLarge />
    </div>
  );
}

function Clear() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="clear">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p1c3649f2} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Clear1() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[16px] pr-[20px] py-[7px] relative rounded-[41px] shrink-0" data-name="Clear">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <Clear />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">
          CLEAR<span className="text-[rgba(255,255,255,0.66)]">{` [DELETE]`}</span>
        </p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="check">
          <path d={svgPaths.p317e1000} fill="var(--fill-0, #0D0D0F)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Apply() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center pl-[16px] pr-[20px] py-[7px] relative rounded-[41px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0" data-name="Apply" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 166 32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-4.0049e-7 3.15 -15.477 -0.0000016498 83 16)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.32202\\\'/><stop stop-color=\\\'rgba(251,255,212,1)\\\' offset=\\\'0.66101\\\'/><stop stop-color=\\\'rgba(247,254,169,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <Check />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">
          APPLY<span className="text-[rgba(13,13,13,0.66)]">{` [Return]`}</span>
        </p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Button group">
      <Clear1 />
      <Apply />
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex font-['PP Neue Montreal Mono',sans-serif] font-medium gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-[10px] text-center text-nowrap tracking-[0.2px]" data-name="Info">
      <div className="flex flex-col justify-end relative shrink-0 text-[rgba(255,255,255,0.5)]">
        <p className="leading-[1.25] text-nowrap">STEP 1/16 •</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[rgba(255,255,255,0.5)]">
        <p className="leading-[1.25] text-nowrap">DETECTED:</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-white">
        <p className="leading-[1.25] text-nowrap">C</p>
      </div>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p2b24c480} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-end right-[16px] top-[16px]">
      <Close />
    </div>
  );
}

export default function KeyboardModal() {
  return (
    <div className="backdrop-blur-[6px] backdrop-filter bg-[rgba(39,39,39,0.88)] relative rounded-[16px] size-full" data-name="Keyboard modal">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center pb-[16px] pt-[24px] px-[24px] relative size-full">
          <Frame1 />
          <Inset />
          <ButtonGroup />
          <Info />
          <Frame />
        </div>
      </div>
    </div>
  );
}