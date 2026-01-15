import iconRendyRest from '../assets/icon-rendy-rest.svg';
import iconRendyBeat from '../assets/icon-rendy-beat.svg';
import titleWordmark from '../assets/title-wordmark-draft.svg';
import imgImage1 from "figma:asset/ed007e2fec1088a7f445f0e2d5813fe06cb8c399.png";

type HeaderProps = {
  isPlaying: boolean;
  tempo: number;
};

export function Header({ isPlaying, tempo }: HeaderProps) {
  // Calculate animation duration based on tempo (one beat = 60/tempo seconds)
  const beatDuration = (60 / tempo) * 1000; // Convert to milliseconds
  
  return (
    <header className="px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-[16px]">
        <img 
          src={isPlaying ? iconRendyBeat : iconRendyRest} 
          alt="Rendy" 
          className="h-[32px]"
          style={isPlaying ? {
            animation: `rendyBop ${beatDuration}ms cubic-bezier(0.5, 0, 0.3, 1) infinite`,
            transformOrigin: 'center bottom'
          } : {}}
        />
        <img src={titleWordmark} alt="Rendy" className="h-[32px]" />
      </div>
      
      <div className="flex items-center gap-2 opacity-60">
        <span className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[10px] text-white uppercase tracking-wide">
          Powered by
        </span>
        {/* Render logo/icon */}
        <a 
          href="https://www.render.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer transition-all group hover:opacity-100"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M26.5019 10.4828C26.4988 10.411 26.4925 10.3408 26.4863 10.269C26.4847 10.2518 26.4847 10.2331 26.4816 10.2159C26.4769 10.1722 26.4707 10.1301 26.4644 10.0864C26.4582 10.0411 26.4535 9.99744 26.4473 9.95374C26.4426 9.92253 26.4363 9.89132 26.4301 9.86167C26.4207 9.80705 26.4114 9.75087 26.4004 9.69625C26.3911 9.65256 26.3801 9.61042 26.3708 9.56673C26.3614 9.5246 26.352 9.48402 26.3427 9.44189C26.3317 9.39819 26.3177 9.35606 26.3052 9.31236C26.2943 9.27179 26.2833 9.23278 26.2709 9.1922C26.2568 9.14851 26.2412 9.10481 26.2256 9.06112C26.2131 9.02367 26.2006 8.98621 26.1881 8.94876C26.1678 8.89414 26.146 8.84109 26.1257 8.78803C26.1147 8.7615 26.1054 8.73653 26.0944 8.71C26.0695 8.65226 26.0445 8.59608 26.0179 8.5399C26.0086 8.51962 25.9992 8.49777 25.9898 8.47748C25.9649 8.42443 25.9368 8.37293 25.9102 8.32143C25.8977 8.29802 25.8868 8.27462 25.8743 8.25121C25.8431 8.19347 25.8087 8.13573 25.776 8.07955C25.7666 8.06394 25.7588 8.04834 25.7494 8.03273C25.7135 7.97343 25.676 7.91569 25.637 7.85795C25.6292 7.84547 25.6214 7.83299 25.6136 7.8205C25.5668 7.75184 25.5184 7.68318 25.4684 7.61607C25.4216 7.55365 25.3732 7.49123 25.3232 7.43037C25.3201 7.42569 25.317 7.42101 25.3123 7.41633C24.3474 6.24749 22.8908 5.50468 21.2594 5.50312V5.5L21.2547 5.50312H21.2563C20.8035 5.50312 20.3632 5.56086 19.9433 5.66854C19.6919 5.73252 19.4468 5.81679 19.2111 5.9151C19.133 5.94787 19.0549 5.98376 18.9784 6.01966C17.4282 6.76559 16.3041 8.25121 16.0559 10.0177H16.0527C15.9435 10.7746 15.7108 11.4909 15.3799 12.1494H15.3908C14.2386 14.434 11.8718 16.0023 9.13658 16.0023C7.91571 16.0023 6.76978 15.6902 5.77061 15.1425C5.65352 15.0785 5.51145 15.1628 5.51145 15.2954V16.0023H5.50052V26.5H16.0043V21.2504H16.0153V18.6256C16.0153 17.1759 17.1909 16.0008 18.6412 16.0008H21.2672C21.7168 16.0008 22.1524 15.943 22.5692 15.8354C22.8206 15.7698 23.0657 15.6871 23.3014 15.5888C23.3795 15.556 23.4576 15.5201 23.5341 15.4842C25.1405 14.7102 26.2927 13.1419 26.4816 11.2896C26.4988 11.1132 26.5082 10.9338 26.5082 10.7527C26.5082 10.6622 26.5066 10.5717 26.5019 10.4828Z" 
              fill="white" 
              className="transition-colors"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}