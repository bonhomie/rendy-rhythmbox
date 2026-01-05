import imgLogo from 'figma:asset/f40a801870f8313baa8a4fc5b76608884ee0cf05.png';
import imgImage1 from "figma:asset/ed007e2fec1088a7f445f0e2d5813fe06cb8c399.png";
import svgPaths from "../imports/svg-xxz527id14";

export function Header() {
  return (
    <header className="px-8 py-4 flex items-center justify-between">
      <img src={imgLogo} alt="Slishthe" className="h-[32px]" />
      
      <div className="flex items-center gap-2 opacity-60">
        <span className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] text-white uppercase tracking-wide">
          Powered by
        </span>
        {/* Render logo/icon */}
        <svg className="w-[18px] h-[18px]" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
          <path d={svgPaths.p35768400} fill="white" />
        </svg>
      </div>
    </header>
  );
}