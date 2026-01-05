import svgPaths from "./svg-7z0lgl25dg";

export default function Knob() {
  return (
    <div className="relative size-full" data-name="Knob">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Knob">
          <mask fill="white" id="path-1-inside-1_90_435">
            <path d={svgPaths.p38d3e400} />
          </mask>
          <path d={svgPaths.p38d3e400} fill="var(--fill-0, white)" fillOpacity="0.12" />
          <path d={svgPaths.p13b17f80} fill="var(--stroke-0, white)" fillOpacity="0.2" mask="url(#path-1-inside-1_90_435)" />
          <g filter="url(#filter0_i_90_435)" id="Ellipse 1">
            <circle cx="19.5" cy="8" fill="var(--fill-0, white)" fillOpacity="0.2" r="2" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5" id="filter0_i_90_435" width="4" x="17.5" y="6">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_90_435" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}