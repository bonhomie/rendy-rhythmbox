
// Import font files using Vite's asset handling - this ensures proper processing
import fontWoff2 from "./assets/fonts/Neue-Montreal-Mono/Medium/PPNeueMontrealMono-Medium.woff2?url";
import fontWoff from "./assets/fonts/Neue-Montreal-Mono/Medium/PPNeueMontrealMono-Medium.woff?url";
import fontTtf from "./assets/fonts/Neue-Montreal-Mono/Medium/PPNeueMontrealMono-Medium.ttf?url";

// Inject @font-face with the processed URLs
const style = document.createElement('style');
style.id = 'pp-neue-montreal-mono-font';
const fontFaceCSS = `
@font-face {
  font-family: 'PP Neue Montreal Mono';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('${fontWoff2}') format('woff2'),
       url('${fontWoff}') format('woff'),
       url('${fontTtf}') format('truetype');
}

/* Apply font to all elements using the Tailwind class */
[class*="font-['PP Neue Montreal Mono"] {
  font-family: 'PP Neue Montreal Mono', sans-serif !important;
}
`;
style.textContent = fontFaceCSS;
document.head.insertBefore(style, document.head.firstChild);

// Wait for font to load BEFORE rendering the app
async function initApp() {
  if (document.fonts) {
    // Create a FontFace object and add it to document.fonts
    const fontFace = new FontFace(
      'PP Neue Montreal Mono',
      `url('${fontWoff2}') format('woff2'), url('${fontWoff}') format('woff'), url('${fontTtf}') format('truetype')`,
      {
        style: 'normal',
        weight: '500',
        display: 'swap'
      }
    );
    
    try {
      await fontFace.load();
      document.fonts.add(fontFace);
      console.log('Font loaded and added to document.fonts');
    } catch (error) {
      console.error('Error loading font:', error);
    }
  }
  
  // Now render the app
  const { createRoot } = await import("react-dom/client");
  const App = (await import("./App.tsx")).default;
  await import("./index.css");

  createRoot(document.getElementById("root")!).render(<App />);
}

initApp();
  