import svgPaths from "./svg-3e5tbp3wep";
import clsx from "clsx";
import imgGeminiGeneratedImageRbg1Arrbg1Arrbg12 from "figma:asset/aac1eb88716b548a153fd44b0418eb4c51e4b6eb.png";
import imgImage1 from "figma:asset/ed007e2fec1088a7f445f0e2d5813fe06cb8c399.png";
type BackgroundImage1Props = {
  additionalClassNames?: string;
};

function BackgroundImage1({ children, additionalClassNames = "" }: React.PropsWithChildren<BackgroundImage1Props>) {
  return (
    <div className={clsx("size-[18px]", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        {children}
      </svg>
    </div>
  );
}
type BackgroundImageAndText4Props = {
  text: string;
};

function BackgroundImageAndText4({ text }: BackgroundImageAndText4Props) {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center px-[8px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#c7aeff] text-[12px] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText3Props = {
  text: string;
};

function BackgroundImageAndText3({ text }: BackgroundImageAndText3Props) {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <SwitchBackgroundImage />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.2px] uppercase">
        <p className="leading-[1.25]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageAndText2Props = {
  text: string;
};

function BackgroundImageAndText2({ text }: BackgroundImageAndText2Props) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">{text}</p>
      </div>
      <BackgroundImageAndText1 text="102 BPM" />
    </div>
  );
}
type BackgroundImageAndText1Props = {
  text: string;
};

function BackgroundImageAndText1({ text }: BackgroundImageAndText1Props) {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] content-stretch flex items-center justify-center opacity-0 px-[8px] py-[2px] relative shrink-0">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-right text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">{text}</p>
      </div>
    </div>
  );
}
type BackgroundImageProps = {
  text: string;
  text1: string;
};

function BackgroundImage({ text, text1 }: BackgroundImageProps) {
  return (
    <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[0px] text-nowrap text-white tracking-[0.24px] uppercase">
      <p className="leading-[1.25] text-[12px]">
        {text}
        <span className="font-['PP Neue Montreal Mono',sans-serif] font-medium not-italic tracking-[-3.84px] uppercase">{text1}</span>
      </p>
    </div>
  );
}

function SwitchBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <g id="switch">
        <path d={svgPaths.p635c480} fill="var(--fill-0, white)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <div className="absolute content-stretch flex gap-[3.5px] items-center left-[calc(50%+0.13px)] opacity-80 top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#272727] text-[14px] text-center text-nowrap tracking-[0.28px] uppercase">
        <p className="leading-[1.25]">{text}</p>
      </div>
      <ChevronsVerticalBackgroundImage />
    </div>
  );
}

function ChevronsVerticalBackgroundImage() {
  return (
    <div className="relative shrink-0 size-[15.75px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevrons-vertical">
          <path d={svgPaths.p1eca6180} fill="var(--fill-0, #0D0D0D)" fillOpacity="0.5" id="Union" />
        </g>
      </svg>
    </div>
  );
}
type CellBackgroundImageProps = {
  additionalClassNames?: string;
};

function CellBackgroundImage({ additionalClassNames = "" }: CellBackgroundImageProps) {
  return (
    <div className={clsx("bg-gradient-to-b relative rounded-[3.5px] shrink-0 size-[56px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function SoundBackgroundImage() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <VolumeBackgroundImage />
    </div>
  );
}

function VolumeBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="absolute left-px top-px">
      <g id="volume-2">
        <path d={svgPaths.p14c86d80} fill="var(--fill-0, white)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}

function SelectBackgroundImage() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.16)] border-solid inset-[-1px] pointer-events-none" />
      <ChevronDownBackgroundImage />
    </div>
  );
}

function ChevronDownBackgroundImage() {
  return (
    <BackgroundImage1 additionalClassNames="absolute left-px top-px">
      <g id="chevron-down">
        <path d={svgPaths.p3aa7bd00} fill="var(--fill-0, white)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}
type TextBackgroundImageProps = {
  text: string;
  text1: string;
};

function TextBackgroundImage({ text, text1 }: TextBackgroundImageProps) {
  return (
    <div className="content-stretch flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium items-end justify-center leading-[0] not-italic relative shrink-0 text-nowrap text-right uppercase">
      <div className="flex flex-col justify-end relative shrink-0 text-[12px] text-white tracking-[0.24px]">
        <p className="leading-[1.25] text-nowrap">{text}</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0 text-[10px] text-[rgba(255,255,255,0.5)] tracking-[0.2px]">
        <p className="leading-[1.25] text-nowrap">{text1}</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="Kick" text1="808" />
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

function Track() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-0 w-[1135px]">
      <Instrument />
      <Track />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="SNare" text1="warm" />
      <Buttons1 />
    </div>
  );
}

function Cell1() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(247,155,254,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(231,116,238,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(214,78,223,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(198,39,207,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(189,19,199,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(185,10,195,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(181,0,191,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_rgba(242,57,255,0.5)]" />
    </div>
  );
}

function Track1() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell1 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[68px] w-[1135px]">
      <Instrument1 />
      <Track1 />
    </div>
  );
}

function Select() {
  return (
    <div className="bg-[rgba(255,255,255,0.16)] relative shrink-0 size-[20px]" data-name="Select">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.66)] border-solid inset-[-1px] pointer-events-none" />
      <ChevronDownBackgroundImage />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <Select />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="Hi-hat 1" text1="dry closed" />
      <Buttons2 />
    </div>
  );
}

function Cell2() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(254,247,207,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(239,227,163,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(223,207,119,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(208,187,76,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(200,177,54,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(192,167,32,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_rgba(243,205,1,0.66)]" />
    </div>
  );
}

function Track2() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell2 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[136px] w-[1135px]">
      <Instrument2 />
      <Track2 />
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="hi-hat 2" text1="open 808" />
      <Buttons3 />
    </div>
  );
}

function Cell3() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(196,255,150,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(172,248,112,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(148,241,74,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#57b60c]" />
    </div>
  );
}

function Track3() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell3 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[204px] w-[1135px]">
      <Instrument3 />
      <Track3 />
    </div>
  );
}

function VolumeX() {
  return (
    <BackgroundImage1 additionalClassNames="absolute left-px top-px">
      <g id="volume-x">
        <path d={svgPaths.p35971000} fill="var(--fill-0, white)" fillOpacity="0.5" id="Union" />
      </g>
    </BackgroundImage1>
  );
}

function Sound() {
  return (
    <div className="bg-[rgba(255,255,255,0.08)] relative shrink-0 size-[20px]" data-name="Sound">
      <div aria-hidden="true" className="absolute border border-[#ff553d] border-solid inset-[-1px] pointer-events-none" />
      <VolumeX />
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <Sound />
    </div>
  );
}

function Instrument4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="clap" text1="classic" />
      <Buttons4 />
    </div>
  );
}

function Cell4() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(172,255,209,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(129,241,196,1)\\\' offset=\\\'0.25\\\'/><stop stop-color=\\\'rgba(86,228,182,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(43,214,169,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(22,207,162,1)\\\' offset=\\\'0.875\\\'/><stop stop-color=\\\'rgba(11,203,158,1)\\\' offset=\\\'0.9375\\\'/><stop stop-color=\\\'rgba(0,200,155,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#006d4c]" />
    </div>
  );
}

function Track4() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell4 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[272px] w-[1135px]">
      <Instrument4 />
      <Track4 />
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="perc" text1="woodblock" />
      <Buttons5 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(129,211,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(82,188,255,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(58,177,255,1)\\\' offset=\\\'0.75\\\'/><stop stop-color=\\\'rgba(34,165,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div aria-hidden="true" className="absolute border-[0.219px_0.438px_1.75px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#005e9e]" />
    </div>
  );
}

function Track5() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell5 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-end left-[21px] top-[340px] w-[1135px]">
      <Instrument5 />
      <Track5 />
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="BASS" text1="DOUBLE BASS" />
      <Buttons6 />
    </div>
  );
}

function Cell6() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(255,239,238,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,203,199,1)\\\' offset=\\\'0.5\\\'/><stop stop-color=\\\'rgba(254,167,159,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundImageAndText text="C" />
      </div>
      <div aria-hidden="true" className="absolute border-[0.438px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#d37602]" />
    </div>
  );
}

function Track6() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell6 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell6 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell6 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell6 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell6 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <Instrument6 />
      <Track6 />
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Buttons">
      <SelectBackgroundImage />
      <SoundBackgroundImage />
    </div>
  );
}

function Instrument7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Instrument">
      <TextBackgroundImage text="SYNTH" text1="CHILL PAD" />
      <Buttons7 />
    </div>
  );
}

function Cell7() {
  return (
    <div className="relative rounded-[3.5px] shrink-0 size-[56px]" data-name="Cell" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 56 56\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.2226e-14 3.4 -3.4 2.0819e-16 28 28)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(197,235,255,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <BackgroundImageAndText text="C" />
      </div>
      <div aria-hidden="true" className="absolute border-[0.438px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[3.5px] shadow-[0px_0px_8px_1px_#c3c3c3]" />
    </div>
  );
}

function Cell8() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0.16)] relative rounded-[3.5px] shrink-0 size-[56px] to-[rgba(153,153,153,0.2)]" data-name="Cell">
      <div aria-hidden="true" className="absolute border-[0.438px] border-solid border-white inset-0 pointer-events-none rounded-[3.5px]" />
    </div>
  );
}

function Track7() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0" data-name="Track">
      <Cell7 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell8 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <Cell7 />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.16)] to-[rgba(153,153,153,0.2)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
      <CellBackgroundImage additionalClassNames="from-[rgba(255,255,255,0.094)] to-[rgba(153,153,153,0.12)]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full">
      <Instrument7 />
      <Track7 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[21px] pb-0 pt-[16px] px-0 top-[408px] w-[1135px]">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[548px] left-[75px] top-[124px] w-[1156px]">
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame20 />
    </div>
  );
}

function Play() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <g id="play">
        <path d={svgPaths.p3d950580} fill="var(--fill-0, #0D0D0D)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}

function Frame22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[41px] shadow-[0px_1px_12px_0px_rgba(255,255,255,0.4)] shrink-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 154 32\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-3.7154e-7 3.15 -14.358 -0.0000016498 77 16)\\\'><stop stop-color=\\\'rgba(255,255,255,1)\\\' offset=\\\'0.32202\\\'/><stop stop-color=\\\'rgba(251,255,212,1)\\\' offset=\\\'0.66101\\\'/><stop stop-color=\\\'rgba(247,254,169,1)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')" }}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative w-full">
          <Play />
          <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-nowrap tracking-[0.24px] uppercase">
            <p className="leading-[1.25]">
              PLAY<span className="text-[rgba(13,13,13,0.66)]">{` [Space]`}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <SwitchBackgroundImage />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">RANDOM</p>
      </div>
    </div>
  );
}

function Trash() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <g id="trash">
        <path d={svgPaths.p29f0e700} fill="var(--fill-0, white)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <Trash />
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">CLEAR</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame22 />
      <Frame23 />
      <Frame10 />
    </div>
  );
}

function Save() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <g id="save">
        <path d={svgPaths.p23748800} fill="var(--fill-0, white)" id="Union" />
      </g>
    </BackgroundImage1>
  );
}

function Frame25() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center justify-center pl-[12px] pr-[16px] py-[7px] relative rounded-[41px] shrink-0 w-[152px]">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <Save />
      <BackgroundImage text="SAVE" text1="..." />
    </div>
  );
}

function Music() {
  return (
    <BackgroundImage1 additionalClassNames="relative shrink-0">
      <g id="music">
        <path clipRule="evenodd" d={svgPaths.p9d57a70} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector 30 (Stroke)" />
      </g>
    </BackgroundImage1>
  );
}

function Frame26() {
  return (
    <div className="bg-[rgba(255,255,255,0.12)] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[7px] relative rounded-[41px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[41px]" />
      <Music />
      <BackgroundImage text="LOAD" text1="..." />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame16 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <BackgroundImageAndText3 text="DILLA" />
      <BackgroundImageAndText3 text="HORN" />
      <BackgroundImageAndText3 text="riser" />
      <BackgroundImageAndText3 text="Crash" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <BackgroundImageAndText2 text="SFX" />
      <Frame14 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">TEMPO</p>
      </div>
      <BackgroundImageAndText4 text="102 BPM" />
    </div>
  );
}

function Frame29() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] h-[18px] ml-[85.86px] mt-0 rounded-[4.5px] to-[#aaaaaa] w-[18.621px]" />;
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[7px] rounded-[4px] w-[360px]" />
      <Frame29 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Group />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">SWING</p>
      </div>
      <BackgroundImageAndText4 text="8%" />
    </div>
  );
}

function Frame31() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] h-[18px] ml-[28.97px] mt-0 rounded-[4.5px] to-[#aaaaaa] w-[18.621px]" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[7px] rounded-[4px] w-[360px]" />
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame30 />
      <Group1 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">REVERB</p>
      </div>
      <BackgroundImageAndText4 text="45%" />
    </div>
  );
}

function Frame34() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] h-[18px] ml-[144.83px] mt-0 rounded-[4.5px] to-[#aaaaaa] w-[18.621px]" />;
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[7px] rounded-[4px] w-[360px]" />
      <Frame34 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame33 />
      <Group2 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.66)] text-nowrap text-right tracking-[0.24px] uppercase">
        <p className="leading-[1.25]">VOLUME</p>
      </div>
      <BackgroundImageAndText4 text="100%" />
    </div>
  );
}

function Frame36() {
  return <div className="[grid-area:1_/_1] bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] h-[18px] ml-[341.38px] mt-0 rounded-[4.5px] to-[#aaaaaa] w-[18.621px]" />;
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.2)] border-solid h-[4px] ml-0 mt-[7px] rounded-[4px] w-[360px]" />
      <Frame36 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame35 />
      <Group3 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame13 />
      <Frame32 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame37() {
  return <div className="absolute bg-gradient-to-b border-[1.125px] border-[rgba(255,255,255,0.2)] border-solid from-[#ffffff] left-[3px] rounded-[4.5px] size-[18px] to-[#aaaaaa] top-1/2 translate-y-[-50%]" />;
}

function Frame38() {
  return (
    <div className="h-[24px] relative rounded-[6px] shrink-0 w-[44px]">
      <div aria-hidden="true" className="absolute border border-[#8a05ff] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Frame37 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <BackgroundImageAndText2 text="VISUALIZER" />
      <Frame38 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="absolute content-stretch flex flex-col h-[548px] items-start justify-between left-[1295px] top-[124px] w-[360px]">
      <Frame21 />
      <Frame15 />
      <Frame39 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[32px] relative shrink-0 w-[36px]">
      <div className="absolute h-[28px] left-0 mix-blend-lighten top-px w-[36px]" data-name="Gemini_Generated_Image_rbg1arrbg1arrbg1 2">
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

function Frame17() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[284px]">
      <Frame18 />
      <Logo />
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

function Frame() {
  return (
    <div className="h-[32px] relative shrink-0 w-[284px]">
      <div className="absolute flex flex-col font-['PP Neue Montreal Mono',sans-serif] font-medium justify-end leading-[0] left-[240px] not-italic text-[10px] text-[rgba(255,255,255,0.66)] text-nowrap text-right top-[23.5px] tracking-[0.2px] translate-x-[-100%] translate-y-[-100%] uppercase">
        <p className="leading-[1.25]">POWERED BY</p>
      </div>
      <Logo1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-[-1px] top-[16px]">
      <Frame17 />
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute border-[0px_0px_0.5px] border-[rgba(255,255,255,0.2)] border-solid h-[68px] left-[24px] right-[24px] top-[24px]" data-name="Header">
      <Frame19 />
    </div>
  );
}

function WoodTrim() {
  return (
    <div className="absolute h-[24px] left-0 overflow-clip top-0 w-[1728px]" data-name="Wood trim">
      <div className="absolute h-[969.12px] left-0 top-0 w-[1728px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

export default function RendyRhythmbox() {
  return (
    <div className="overflow-clip relative rounded-[12px] size-full" data-name="Rendy Rhythmbox" style={{ backgroundImage: "linear-gradient(168.157deg, rgb(13, 13, 13) 10.076%, rgb(25, 25, 25) 77.752%)" }}>
      <Frame9 />
      <Frame40 />
      <Header />
      <WoodTrim />
    </div>
  );
}