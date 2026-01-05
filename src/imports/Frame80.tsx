import svgPaths from "./svg-bpvr9l5lmq";
import imgGeminiGeneratedImageRbg1Arrbg1Arrbg12 from "figma:asset/aac1eb88716b548a153fd44b0418eb4c51e4b6eb.png";

function Frame1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[36px]">
      <div className="absolute h-[28px] left-0 mix-blend-lighten top-[2px] w-[36px]" data-name="Gemini_Generated_Image_rbg1arrbg1arrbg1 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[311.56%] left-[-280.19%] max-w-none top-[-23.73%] w-[442.77%]" src={imgGeminiGeneratedImageRbg1Arrbg1Arrbg12} />
        </div>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[232px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 32">
        <g id="Logo">
          <g id="Union">
            <path d={svgPaths.pdc57f80} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3e882100} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p849d2c0} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.peccc000} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2ca55d00} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p1cef5d00} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2d1e8380} fill="var(--fill-0, white)" />
            <path d={svgPaths.p180eb400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p5751600} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p14f23220} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pfa0df70} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p2c932100} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p14e7d700} fill="var(--fill-0, white)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Frame80() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative">
      <Frame1 />
      <Logo />
    </div>
  );
}
