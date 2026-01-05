export const createAudioEngine = () => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  let masterGain = audioContext.createGain();
  let reverbGain = audioContext.createGain();
  let dryGain = audioContext.createGain();
  let delayNode = audioContext.createDelay(2.0); // Max 2 seconds delay
  let delayFeedback = audioContext.createGain();
  let delayMix = audioContext.createGain();
  
  // Global filter (high-pass/low-pass)
  let globalFilter = audioContext.createBiquadFilter();
  globalFilter.type = 'lowpass';
  globalFilter.frequency.value = 20000; // Start fully open
  globalFilter.Q.value = 1;
  
  // Audio analyser for visualizer
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.7;
  
  // Create warm, airy reverb - like floating over a beautiful forest
  const convolver = audioContext.createConvolver();
  const reverbLength = audioContext.sampleRate * 2.5; // 2.5 seconds for spacious feel
  const reverbBuffer = audioContext.createBuffer(2, reverbLength, audioContext.sampleRate);
  
  // Warm, diffuse reverb algorithm
  for (let channel = 0; channel < 2; channel++) {
    const channelData = reverbBuffer.getChannelData(channel);
    
    // Early reflections (first 80ms) - creates sense of space
    const earlyReflectionTime = audioContext.sampleRate * 0.08;
    for (let i = 0; i < earlyReflectionTime; i++) {
      const t = i / earlyReflectionTime;
      // Gradual build-up of early reflections
      const reflection = (Math.random() * 2 - 1) * (1 - Math.pow(t, 0.5)) * 0.3;
      channelData[i] = reflection;
    }
    
    // Late reverb - smooth, diffuse tail
    for (let i = earlyReflectionTime; i < reverbLength; i++) {
      const t = i / reverbLength;
      
      // Smooth exponential decay
      const decay = Math.exp(-2 * t);
      
      // Dense diffusion with multiple random reflections
      let diffusion = 0;
      for (let j = 0; j < 8; j++) {
        diffusion += (Math.random() * 2 - 1) / 8;
      }
      
      // Combine with decay
      let sample = diffusion * decay;
      
      // Apply warm low-pass characteristic by averaging with previous samples
      if (i > 0) {
        sample = sample * 0.5 + channelData[i - 1] * 0.5;
      }
      
      channelData[i] = sample * 0.4;
    }
    
    // Additional smoothing pass for warmth
    for (let i = 2; i < reverbLength; i++) {
      channelData[i] = (channelData[i] * 0.6 + channelData[i - 1] * 0.3 + channelData[i - 2] * 0.1);
    }
  }
  convolver.buffer = reverbBuffer;
  
  // Setup delay routing
  delayNode.delayTime.value = 0; // Start with no delay
  delayFeedback.gain.value = 0.35; // Fixed moderate feedback
  delayMix.gain.value = 0;
  
  // Setup routing with global filter
  dryGain.connect(masterGain);
  reverbGain.connect(convolver);
  convolver.connect(masterGain);
  
  // Delay routing: input -> delay -> feedback loop -> mix -> master
  delayMix.connect(delayNode);
  delayNode.connect(delayFeedback);
  delayFeedback.connect(delayNode); // Feedback loop
  delayFeedback.connect(masterGain);
  
  // Connect master through global filter and analyser to destination
  masterGain.connect(globalFilter);
  globalFilter.connect(analyser);
  analyser.connect(audioContext.destination);
  
  // Reduced master gain to prevent distortion
  masterGain.gain.value = 0.4;
  dryGain.gain.value = 1;
  reverbGain.gain.value = 0;

  const playKick = (time: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    osc.frequency.setValueAtTime(150, time);
    osc.frequency.exponentialRampToValueAtTime(40, time + 0.5);
    
    filter.type = 'lowpass';
    filter.frequency.value = 200;
    
    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc.start(time);
    osc.stop(time + 0.5);
  };

  // Kick 808 - Classic TR-808 style - IMPROVED - dry and punchy
  const playKick808 = (time: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const noiseOsc = audioContext.createBufferSource();
    
    // Create noise for attack click
    const bufferSize = audioContext.sampleRate * 0.01;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    noiseOsc.buffer = buffer;
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.2, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.01);
    
    osc.type = 'sine';
    // Dry 808 pitch sweep
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(48, time + 0.4);
    
    filter.type = 'lowpass';
    filter.frequency.value = 160;
    filter.Q.value = 0.3; // Very minimal resonance for dry sound
    
    gain.gain.setValueAtTime(1.1, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.4);
    
    noiseOsc.connect(noiseGain);
    noiseGain.connect(dryGain);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noiseOsc.start(time);
    osc.start(time);
    osc.stop(time + 0.4);
  };

  // Kick Acoustic - Natural, punchy kick - REDUCED VOLUME
  const playKickAcoustic = (time: number) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const bassBoost = audioContext.createBiquadFilter();
    
    // Lower fundamental for more bass presence
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(130, time);
    osc1.frequency.exponentialRampToValueAtTime(50, time + 0.15);
    
    // Add click/beater sound
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(250, time);
    osc2.frequency.exponentialRampToValueAtTime(80, time + 0.05);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(200, time + 0.1);
    filter.Q.value = 1;
    
    // Bass boost around 80Hz for more oomph
    bassBoost.type = 'peaking';
    bassBoost.frequency.value = 80;
    bassBoost.Q.value = 1.2;
    bassBoost.gain.value = 3; // Reduced from 4dB to 3dB
    
    // REDUCED GAIN to prevent distortion
    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.25, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(bassBoost);
    bassBoost.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + 0.25);
    osc2.start(time);
    osc2.stop(time + 0.05);
  };

  // Kick Deep - Deep thud with different tonality from 808 - FURTHER REDUCED VOLUME
  const playKickDeep = (time: number) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const noiseOsc = audioContext.createBufferSource();
    
    // Add subtle attack noise for definition
    const bufferSize = audioContext.sampleRate * 0.008;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    noiseOsc.buffer = buffer;
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.15, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.008);
    
    // Main deep tone - different frequency range than 808
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(120, time);
    osc1.frequency.exponentialRampToValueAtTime(38, time + 0.4);
    
    // Sub layer for extra depth
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(60, time);
    osc2.frequency.exponentialRampToValueAtTime(22, time + 0.5);
    
    filter.type = 'lowpass';
    filter.frequency.value = 150;
    filter.Q.value = 1.2; // Slight resonance for character
    
    // FURTHER REDUCED GAIN to 1.0
    gain.gain.setValueAtTime(1.0, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.6);
    
    noiseOsc.connect(noiseGain);
    noiseGain.connect(dryGain);
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noiseOsc.start(time);
    osc1.start(time);
    osc1.stop(time + 0.6);
    osc2.start(time);
    osc2.stop(time + 0.6);
  };

  // Kick Dry - Tight, dry kick with minimal sustain
  const playKickDry = (time: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const noiseOsc = audioContext.createBufferSource();
    
    // Sharp click for definition
    const bufferSize = audioContext.sampleRate * 0.006;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
    }
    noiseOsc.buffer = buffer;
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.3, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.006);
    
    osc.type = 'sine';
    // Different tonality - higher fundamental
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.exponentialRampToValueAtTime(65, time + 0.12);
    
    filter.type = 'lowpass';
    filter.frequency.value = 250;
    filter.Q.value = 0.5; // Tight and controlled
    
    // Short, tight envelope
    gain.gain.setValueAtTime(1.2, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);
    
    noiseOsc.connect(noiseGain);
    noiseGain.connect(dryGain);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noiseOsc.start(time);
    osc.start(time);
    osc.stop(time + 0.12);
  };

  const playSnare = (time: number) => {
    // Noise
    const bufferSize = audioContext.sampleRate * 0.2;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1000;
    
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.5, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
    
    // Tone component
    const osc = audioContext.createOscillator();
    osc.frequency.value = 180;
    const oscGain = audioContext.createGain();
    oscGain.gain.setValueAtTime(0.3, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(dryGain);
    noiseGain.connect(reverbGain);
    
    osc.connect(oscGain);
    oscGain.connect(dryGain);
    oscGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.2);
    osc.start(time);
    osc.stop(time + 0.1);
  };

  // Snare Warm - Warm, full-bodied acoustic snare
  const playSnareWarm = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.25;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Warmer, mid-focused filter
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 1500;
    noiseFilter.Q.value = 1.5;
    
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.55, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);
    
    // Lower tone for warmth
    const osc1 = audioContext.createOscillator();
    osc1.frequency.value = 160;
    const osc1Gain = audioContext.createGain();
    osc1Gain.gain.setValueAtTime(0.35, time);
    osc1Gain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);
    
    // Add body tone
    const osc2 = audioContext.createOscillator();
    osc2.frequency.value = 220;
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.setValueAtTime(0.25, time);
    osc2Gain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(dryGain);
    noiseGain.connect(reverbGain);
    noiseGain.connect(delayMix);
    
    osc1.connect(osc1Gain);
    osc1Gain.connect(dryGain);
    osc1Gain.connect(reverbGain);
    
    osc2.connect(osc2Gain);
    osc2Gain.connect(dryGain);
    osc2Gain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.25);
    osc1.start(time);
    osc1.stop(time + 0.12);
    osc2.start(time);
    osc2.stop(time + 0.08);
  };

  // Snare Tight - Short, punchy snare
  const playSnareTight = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.12;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1200;
    
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.6, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.12);
    
    // Higher pitch for tightness
    const osc = audioContext.createOscillator();
    osc.frequency.value = 200;
    const oscGain = audioContext.createGain();
    oscGain.gain.setValueAtTime(0.35, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.06);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(dryGain);
    noiseGain.connect(reverbGain);
    noiseGain.connect(delayMix);
    
    osc.connect(oscGain);
    oscGain.connect(dryGain);
    oscGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.12);
    osc.start(time);
    osc.stop(time + 0.06);
  };

  // Snare Crisp - Bright, crisp snare with sharp attack
  const playSnareCrisp = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.18;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Brighter filtering
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1800;
    
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.65, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);
    
    // Sharp click
    const osc = audioContext.createOscillator();
    osc.frequency.value = 250;
    const oscGain = audioContext.createGain();
    oscGain.gain.setValueAtTime(0.4, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(dryGain);
    noiseGain.connect(reverbGain);
    noiseGain.connect(delayMix);
    
    osc.connect(oscGain);
    oscGain.connect(dryGain);
    oscGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.18);
    osc.start(time);
    osc.stop(time + 0.04);
  };

  // Snare Rim - Spacey wild card - rim click with reverb trail
  const playSnareRim = (time: number) => {
    // Short attack noise
    const bufferSize = audioContext.sampleRate * 0.08;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const noiseFilter = audioContext.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 3000;
    noiseFilter.Q.value = 3;
    
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.5, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
    
    // Click tone
    const osc = audioContext.createOscillator();
    osc.frequency.value = 800;
    const oscGain = audioContext.createGain();
    oscGain.gain.setValueAtTime(0.4, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.03);
    
    noise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(dryGain);
    
    // Extra reverb for spacey effect
    const extraReverbGain = audioContext.createGain();
    extraReverbGain.gain.value = 1.8;
    noiseGain.connect(extraReverbGain);
    extraReverbGain.connect(reverbGain);
    
    osc.connect(oscGain);
    oscGain.connect(dryGain);
    oscGain.connect(extraReverbGain);
    
    noise.start(time);
    noise.stop(time + 0.08);
    osc.start(time);
    osc.stop(time + 0.03);
  };

  const playHiHat1 = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.05;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.4, time); // Boosted from 0.3
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.05);
  };

  // Hi-Hat Closed Crisp - Bright, clean closed hat
  const playHiHat1Crisp = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.05;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000;
    filter.Q.value = 0.8;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.42, time); // Boosted from 0.32
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.05);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.05);
  };

  // Hi-Hat Closed Soft - Gentler, warmer closed hat
  const playHiHat1Soft = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.04;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Lower frequency for warmer sound
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 5500;
    filter.Q.value = 1.2;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.35, time); // Boosted from 0.25
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.04);
  };

  // Hi-Hat Closed Tight - Very short, tight hat
  const playHiHat1Tight = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.03;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 8000;
    filter.Q.value = 1;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.45, time); // Boosted from 0.35
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.03);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.03);
  };

  // Hi-Hat Closed Shaker - Spacier wild card with reverb
  const playHiHat1Shaker = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.08;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 6000;
    filter.Q.value = 0.7;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.38, time); // Boosted from 0.28
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    
    // Extra reverb for spacey effect
    const extraReverbGain = audioContext.createGain();
    extraReverbGain.gain.value = 1.5;
    gain.connect(extraReverbGain);
    extraReverbGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.08);
  };

  const playHiHat2 = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.15;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 5000;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.35, time); // Boosted from 0.25
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.15);
  };

  // Hi-Hat Open - Controlled open hat, medium bright
  const playHiHat2Open = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.18;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 6000; // Mid-range brightness
    filter.Q.value = 0.8;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.4, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.18);
  };

  // Hi-Hat Wide - Full spectrum, longer sustain
  const playHiHat2Wide = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.35;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 4000; // Lower for fuller spectrum
    filter.Q.value = 0.5;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.15, time + 0.15); // Sustain longer
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.35);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.35);
  };

  // Hi-Hat Sizzle - Bright, sizzling top end
  const playHiHat2Sizzle = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.28;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 7000; // Much higher for sizzle
    filter.Q.value = 1.2;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.2, time + 0.1); // Quick initial decay
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.28);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noise.start(time);
    noise.stop(time + 0.28);
  };

  // Hi-Hat Space - Washy, long decay with heavy reverb
  const playHiHat2Space = (time: number) => {
    const bufferSize = audioContext.sampleRate * 0.5;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    const filter = audioContext.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 5500; // Mid-range for warmth
    filter.Q.value = 0.6;
    
    const gain = audioContext.createGain();
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.25, time + 0.2); // Long sustain
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
    
    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    
    // Extra reverb for spacey effect
    const extraReverbGain = audioContext.createGain();
    extraReverbGain.gain.value = 2.0;
    gain.connect(extraReverbGain);
    extraReverbGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 0.5);
  };

  const playClap = (time: number) => {
    for (let i = 0; i < 3; i++) {
      const bufferSize = audioContext.sampleRate * 0.035;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800;
      filter.Q.value = 1.5;
      
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0.45, time + i * 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.01 + 0.035);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dryGain);
      gain.connect(reverbGain);
      gain.connect(delayMix);
      
      noise.start(time + i * 0.01);
      noise.stop(time + i * 0.01 + 0.035);
    }
  };

  // Clap Tight - Tight, punchy clap with quick decay
  const playClapTight = (time: number) => {
    for (let i = 0; i < 3; i++) {
      const bufferSize = audioContext.sampleRate * 0.025;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 1800; // Slightly lower for tightness
      filter.Q.value = 1.8;
      
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0.45, time + i * 0.008); // Tighter spacing
      gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.008 + 0.025);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dryGain);
      gain.connect(reverbGain);
      gain.connect(delayMix);
      
      noise.start(time + i * 0.008);
      noise.stop(time + i * 0.008 + 0.025);
    }
  };

  // Clap Bright - Bright, crisp clap with more highs
  const playClapBright = (time: number) => {
    for (let i = 0; i < 3; i++) {
      const bufferSize = audioContext.sampleRate * 0.03;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioContext.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.value = 1500; // Higher for brightness
      filter.Q.value = 0.9;
      
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0.42, time + i * 0.01);
      gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.01 + 0.03);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dryGain);
      gain.connect(reverbGain);
      gain.connect(delayMix);
      
      noise.start(time + i * 0.01);
      noise.stop(time + i * 0.01 + 0.03);
    }
  };

  // Clap Snap - Finger snap sound (single, short burst) - BOOSTED
  const playClapSnap = (time: number) => {
    // Create two layers for more presence
    for (let i = 0; i < 2; i++) {
      const bufferSize = audioContext.sampleRate * 0.025;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = i === 0 ? 2800 : 1600; // Two frequency layers
      filter.Q.value = 3;
      
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0.65, time + i * 0.003); // Much louder, slight delay
      gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.003 + 0.025);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dryGain);
      gain.connect(reverbGain);
      gain.connect(delayMix);
      
      noise.start(time + i * 0.003);
      noise.stop(time + i * 0.003 + 0.025);
    }
  };

  // Clap Space - Spacious clap with lots of reverb
  const playClapSpace = (time: number) => {
    for (let i = 0; i < 2; i++) { // Fewer layers for clarity
      const bufferSize = audioContext.sampleRate * 0.04;
      const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      for (let j = 0; j < bufferSize; j++) {
        data[j] = Math.random() * 2 - 1;
      }
      
      const noise = audioContext.createBufferSource();
      noise.buffer = buffer;
      
      const filter = audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 2200;
      filter.Q.value = 1.2;
      
      const gain = audioContext.createGain();
      gain.gain.setValueAtTime(0.35, time + i * 0.015);
      gain.gain.exponentialRampToValueAtTime(0.01, time + i * 0.015 + 0.04);
      
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(dryGain);
      
      // Extra reverb for spacey effect
      const extraReverbGain = audioContext.createGain();
      extraReverbGain.gain.value = 2.0; // Lots of reverb
      gain.connect(extraReverbGain);
      extraReverbGain.connect(reverbGain);
      
      noise.start(time + i * 0.015);
      noise.stop(time + i * 0.015 + 0.04);
    }
  };

  const playPerc = (time: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    osc.frequency.setValueAtTime(800, time);
    osc.frequency.exponentialRampToValueAtTime(400, time + 0.1);
    
    gain.gain.setValueAtTime(0.45, time); // Boosted from 0.3
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    
    osc.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    osc.start(time);
    osc.stop(time + 0.1);
  };

  // Perc Wood - Woodblock sound - IMPROVED to sound less digital
  const playPercWood = (time: number) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const noiseOsc = audioContext.createBufferSource();
    
    // Add a bit of noise for natural attack
    const bufferSize = audioContext.sampleRate * 0.015;
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize) * 0.3;
    }
    noiseOsc.buffer = buffer;
    const noiseGain = audioContext.createGain();
    noiseGain.gain.setValueAtTime(0.15, time);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.015);
    
    // Two-oscillator approach for more natural wood tone
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(920, time);
    osc1.frequency.exponentialRampToValueAtTime(460, time + 0.07);
    
    osc2.type = 'square';
    osc2.frequency.setValueAtTime(1380, time);  // 1.5x harmonic
    osc2.frequency.exponentialRampToValueAtTime(690, time + 0.06);
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.2; // Subtle harmonic layer
    
    filter.type = 'bandpass';
    filter.frequency.value = 750;
    filter.Q.value = 1.8; // Less resonant for more natural sound
    
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.07);
    
    noiseOsc.connect(noiseGain);
    noiseGain.connect(dryGain);
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    noiseOsc.start(time);
    osc1.start(time);
    osc1.stop(time + 0.07);
    osc2.start(time);
    osc2.stop(time + 0.06);
  };

  // Perc Conga - Conga-like mid-tom sound
  const playPercConga = (time: number) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    osc.type = 'sine';
    // Mid-range tuned tom (not too high)
    osc.frequency.setValueAtTime(240, time);
    osc.frequency.exponentialRampToValueAtTime(190, time + 0.15);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(450, time + 0.12);
    filter.Q.value = 1.8;
    
    gain.gain.setValueAtTime(0.7, time); // Boosted from 0.55
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc.start(time);
    osc.stop(time + 0.15);
  };

  // Perc Tom - Floor tom sound (warm and low)
  const playPercTom = (time: number) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Low tom tuning - not too high
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(150, time);
    osc1.frequency.exponentialRampToValueAtTime(120, time + 0.2);
    
    // Add overtone
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(300, time);
    osc2.frequency.exponentialRampToValueAtTime(240, time + 0.15);
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.3;
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + 0.15);
    filter.Q.value = 1.5;
    
    gain.gain.setValueAtTime(0.75, time); // Boosted from 0.6
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);
    
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + 0.2);
    osc2.start(time);
    osc2.stop(time + 0.2);
  };

  // Perc Cowbell - Classic metallic cowbell
  const playPercCowbell = (time: number) => {
    // Multiple sine waves for metallic character
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Fundamental and inharmonic partials for metallic sound
    osc1.type = 'square';
    osc1.frequency.value = 540;
    
    osc2.type = 'square';
    osc2.frequency.value = 800;
    
    osc3.type = 'square';
    osc3.frequency.value = 1200;
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.6;
    
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.3;
    
    filter.type = 'bandpass';
    filter.frequency.value = 900;
    filter.Q.value = 1.5;
    
    // Sharp attack, medium decay for bell-like quality
    gain.gain.setValueAtTime(0.55, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.18);
    
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + 0.18);
    osc2.start(time);
    osc2.stop(time + 0.18);
    osc3.start(time);
    osc3.stop(time + 0.18);
  };

  // Crash Cymbal - Warm, long crash sound
  const playCrash = (time: number) => {
    // Create filtered noise for cymbal body
    const bufferSize = audioContext.sampleRate * 3.5; // 3.5 second crash
    const buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);
    
    // Generate warm noise with multiple layers
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      for (let i = 0; i < bufferSize; i++) {
        // Layer multiple noise sources for complexity
        const noise1 = Math.random() * 2 - 1;
        const noise2 = Math.random() * 2 - 1;
        const noise3 = Math.random() * 2 - 1;
        
        // Blend for warmth
        data[i] = (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
      }
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Bandpass filter for warmth - not too bright
    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.value = 4500; // Centered around 4.5kHz for warmth
    bandpass.Q.value = 0.7; // Wide bandwidth for fullness
    
    // Gentle highpass to remove mud
    const highpass = audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 800; // Remove low-end rumble
    highpass.Q.value = 0.5;
    
    // Gentle lowpass to remove harshness
    const lowpass = audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(8000, time);
    lowpass.frequency.exponentialRampToValueAtTime(5000, time + 1.5); // Gradually darken
    lowpass.Q.value = 0.5;
    
    const gain = audioContext.createGain();
    
    // Natural crash envelope: quick swell, long decay
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.35, time + 0.05); // Quick swell
    gain.gain.exponentialRampToValueAtTime(0.25, time + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.8);
    gain.gain.exponentialRampToValueAtTime(0.05, time + 1.8);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 3.5); // Long tail
    
    noise.connect(highpass);
    highpass.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(dryGain);
    
    // Extra reverb for lush crash
    const crashReverbGain = audioContext.createGain();
    crashReverbGain.gain.value = 1.2; // More reverb for crashes
    gain.connect(crashReverbGain);
    crashReverbGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + 3.5);
  };

  // Horn - Bright, brassy horn sound with characteristic attack
  const playHorn = (time: number) => {
    const duration = 1.2; // 1.2 second horn blast
    
    // Create multiple oscillators for rich, brassy tone
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const osc4 = audioContext.createOscillator();
    
    // Fundamental frequency (around Bb3 for horn-like sound)
    const fundamental = 233.08; // Bb3
    
    // Harmonic series for brassy character
    osc1.type = 'sawtooth';
    osc1.frequency.value = fundamental;
    
    osc2.type = 'sawtooth';
    osc2.frequency.value = fundamental * 2; // Octave
    
    osc3.type = 'sawtooth';
    osc3.frequency.value = fundamental * 3; // Fifth above octave
    
    osc4.type = 'sawtooth';
    osc4.frequency.value = fundamental * 4; // Two octaves
    
    // Individual gains for harmonic balance
    const osc1Gain = audioContext.createGain();
    const osc2Gain = audioContext.createGain();
    const osc3Gain = audioContext.createGain();
    const osc4Gain = audioContext.createGain();
    
    osc1Gain.gain.value = 0.4; // Strong fundamental
    osc2Gain.gain.value = 0.3; // Strong octave
    osc3Gain.gain.value = 0.2; // Moderate fifth
    osc4Gain.gain.value = 0.15; // Subtle two octaves
    
    // Bright bandpass filter for horn character
    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(800, time); // Start mid-range
    bandpass.frequency.exponentialRampToValueAtTime(1200, time + 0.1); // Brighten quickly
    bandpass.frequency.exponentialRampToValueAtTime(600, time + duration); // Darken over time
    bandpass.Q.value = 2.5; // Resonant for brassy character
    
    // Highpass to remove mud
    const highpass = audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 200;
    highpass.Q.value = 0.5;
    
    // Lowpass to smooth harshness
    const lowpass = audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(5000, time);
    lowpass.frequency.exponentialRampToValueAtTime(3000, time + duration);
    lowpass.Q.value = 1;
    
    const mainGain = audioContext.createGain();
    
    // Horn envelope: quick attack, sustain, then decay
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.5, time + 0.05); // Quick attack (50ms)
    mainGain.gain.setValueAtTime(0.5, time + 0.3); // Sustain
    mainGain.gain.exponentialRampToValueAtTime(0.3, time + 0.6); // Gradual decay
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration); // Fade out
    
    // Connect oscillators
    osc1.connect(osc1Gain);
    osc2.connect(osc2Gain);
    osc3.connect(osc3Gain);
    osc4.connect(osc4Gain);
    
    osc1Gain.connect(bandpass);
    osc2Gain.connect(bandpass);
    osc3Gain.connect(bandpass);
    osc4Gain.connect(bandpass);
    
    bandpass.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(mainGain);
    
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    mainGain.connect(delayMix);
    
    // Start all oscillators
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
    osc4.start(time);
    osc4.stop(time + duration);
  };

  // Riser - Long atmospheric riser with white noise build and descent
  const playRiser = (time: number) => {
    const duration = 10; // 10 seconds total
    const riseTime = 7; // 7 seconds rise
    const fallTime = 3; // 3 seconds fall
    
    // Create filtered noise for riser
    const bufferSize = audioContext.sampleRate * duration;
    const buffer = audioContext.createBuffer(2, bufferSize, audioContext.sampleRate);
    
    // Generate ambient white noise
    for (let channel = 0; channel < 2; channel++) {
      const data = buffer.getChannelData(channel);
      for (let i = 0; i < bufferSize; i++) {
        // Layered noise for depth
        const noise1 = Math.random() * 2 - 1;
        const noise2 = Math.random() * 2 - 1;
        data[i] = (noise1 * 0.6 + noise2 * 0.4);
      }
    }
    
    const noise = audioContext.createBufferSource();
    noise.buffer = buffer;
    
    // Bandpass filter that sweeps up then down
    const bandpass = audioContext.createBiquadFilter();
    bandpass.type = 'bandpass';
    bandpass.frequency.setValueAtTime(200, time); // Start low
    bandpass.frequency.exponentialRampToValueAtTime(8000, time + riseTime); // Rise to high
    bandpass.frequency.exponentialRampToValueAtTime(400, time + duration); // Fall back down
    bandpass.Q.value = 1.5; // Moderate resonance for character
    
    // Highpass to remove low rumble
    const highpass = audioContext.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.value = 150;
    highpass.Q.value = 0.5;
    
    // Lowpass for smoothness
    const lowpass = audioContext.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(10000, time);
    lowpass.frequency.exponentialRampToValueAtTime(12000, time + riseTime);
    lowpass.frequency.exponentialRampToValueAtTime(2000, time + duration);
    lowpass.Q.value = 0.7;
    
    const gain = audioContext.createGain();
    
    // Envelope: slow build, then descent
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.05, time + 1); // Gradual start
    gain.gain.exponentialRampToValueAtTime(0.4, time + riseTime); // Peak at end of rise
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration); // Fade out during fall
    
    noise.connect(highpass);
    highpass.connect(bandpass);
    bandpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(dryGain);
    
    // Heavy reverb for atmosphere
    const riserReverbGain = audioContext.createGain();
    riserReverbGain.gain.value = 2.0; // Lots of reverb
    gain.connect(riserReverbGain);
    riserReverbGain.connect(reverbGain);
    
    noise.start(time);
    noise.stop(time + duration);
  };

  const playBass = (time: number) => {
    // Create a more analog-sounding bass with multiple oscillators
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.value = 65.41; // C2
    osc2.type = 'square';
    osc2.frequency.value = 65.41; // C2 - same frequency for thickness
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(150, time + 0.3);
    filter.Q.value = 5;
    
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    osc1.start(time);
    osc1.stop(time + 0.5);
    osc2.start(time);
    osc2.stop(time + 0.5);
  };

  // Bass Double - Sawtooth + Square for thick analog bass
  const playBassDouble = (frequency: number, time: number, duration: number = 0.5) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.value = frequency;
    osc2.type = 'square';
    osc2.frequency.value = frequency;
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(150, time + 0.3);
    filter.Q.value = 5;
    
    // Reduced gain to prevent distortion
    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
  };

  // Bass Sub - Pure sine wave sub-bass with resonance
  const playBassSub = (frequency: number, time: number, duration: number = 0.6) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Pure sine for fundamental
    osc1.type = 'sine';
    osc1.frequency.value = frequency;
    
    // Add second harmonic for resonance and audibility
    osc2.type = 'sine';
    osc2.frequency.value = frequency * 2;
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.3; // Boosted for more resonance
    
    // Add third harmonic for even more presence
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 3;
    
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.15; // Subtle third harmonic
    
    filter.type = 'lowpass';
    filter.frequency.value = 350; // Higher cutoff for more resonance
    filter.Q.value = 3; // Increased resonance at cutoff
    
    // Increased gain for better audibility
    gain.gain.setValueAtTime(0.5, time);
    gain.gain.exponentialRampToValueAtTime(0.35, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Bass Electric - Brighter, plucked electric bass - LOWER OCTAVE WITH MORE BODY
  const playBassElectric = (frequency: number, time: number, duration: number = 0.5) => {
    // Drop one octave for lower range
    const lowerFreq = frequency / 2;
    
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Sawtooth for brightness
    osc1.type = 'sawtooth';
    osc1.frequency.value = lowerFreq;
    
    // Triangle for body
    osc2.type = 'triangle';
    osc2.frequency.value = lowerFreq;
    osc2.detune.value = 3;
    
    // Add sub layer for extra body
    osc3.type = 'sine';
    osc3.frequency.value = lowerFreq;
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.4; // Prominent sub
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1800, time); // Slightly lower for more body
    filter.frequency.exponentialRampToValueAtTime(350, time + 0.15);
    filter.Q.value = 3; // More resonance for "pluck"
    
    // Fast attack/release for plucked sound
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.35, time + 0.005); // Very fast attack
    gain.gain.exponentialRampToValueAtTime(0.12, time + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Bass Reese - Classic detuned sawtooth bass
  const playBassReese = (frequency: number, time: number, duration: number = 0.5) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const osc4 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Four detuned sawtooth oscillators for thick Reese bass
    osc1.type = 'sawtooth';
    osc1.frequency.value = frequency;
    osc1.detune.value = -7;
    
    osc2.type = 'sawtooth';
    osc2.frequency.value = frequency;
    osc2.detune.value = 7;
    
    osc3.type = 'sawtooth';
    osc3.frequency.value = frequency;
    osc3.detune.value = -3;
    
    osc4.type = 'sawtooth';
    osc4.frequency.value = frequency;
    osc4.detune.value = 3;
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, time);
    filter.frequency.exponentialRampToValueAtTime(300, time + 0.2);
    filter.Q.value = 2;
    
    gain.gain.setValueAtTime(0.25, time);
    gain.gain.exponentialRampToValueAtTime(0.15, time + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    osc4.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    gain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
    osc4.start(time);
    osc4.stop(time + duration);
  };

  const playSynth = (time: number) => {
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    osc1.type = 'sawtooth';
    osc1.frequency.value = 261.63; // C4
    osc2.type = 'sawtooth';
    osc2.frequency.value = 261.63 * 1.5; // G4
    
    filter.type = 'lowpass';
    filter.frequency.value = 2000;
    filter.Q.value = 1;
    
    gain.gain.setValueAtTime(0.15, time);
    gain.gain.setValueAtTime(0.15, time + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 1.0);
    
    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    osc1.start(time);
    osc1.stop(time + 1.0);
    osc2.start(time);
    osc2.stop(time + 1.0);
  };

  // Rhodes electric piano sound
  const playSynthRhodes = (frequency: number, time: number, duration: number = 0.8) => {
    // Rhodes uses FM-like synthesis with sine waves and bell-like envelope
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    
    // Main tone
    osc1.type = 'triangle';
    osc1.frequency.value = frequency;
    
    // Harmonic for bell-like quality
    osc2.type = 'sine';
    osc2.frequency.value = frequency * 2;
    
    // Slight detuning for warmth
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 3.99;
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3500, time);
    filter.frequency.exponentialRampToValueAtTime(1200, time + 0.1);
    filter.Q.value = 2;
    
    // Bell-like envelope: quick attack, medium decay
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(0.25, time + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.15, time + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(gain);
    gain.connect(dryGain);
    gain.connect(reverbGain);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Soft pad sound
  const playSynthPad = (frequency: number, time: number, duration: number = 1.2) => {
    // Multiple detuned oscillators for thick, smooth pad
    const oscs = [];
    const gains = [];
    const filter = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Create 4 detuned oscillators
    const detuneAmounts = [-8, -3, 3, 8];
    for (let i = 0; i < 4; i++) {
      const osc = audioContext.createOscillator();
      const oscGain = audioContext.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.value = frequency;
      osc.detune.value = detuneAmounts[i];
      
      oscGain.gain.value = 0.15; // Lower individual volumes
      
      osc.connect(oscGain);
      oscGain.connect(filter);
      
      oscs.push(osc);
      gains.push(oscGain);
    }
    
    filter.type = 'lowpass';
    filter.frequency.value = 1800;
    filter.Q.value = 0.5;
    
    // Slow attack, long sustain
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.4, time + 0.2); // Slow attack
    mainGain.gain.setValueAtTime(0.4, time + duration - 0.3);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    filter.connect(mainGain);
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    
    oscs.forEach(osc => {
      osc.start(time);
      osc.stop(time + duration);
    });
  };

  // Spacey atmospheric sound
  const playSynthSpace = (frequency: number, time: number, duration: number = 1.5) => {
    // Modulated oscillators with LFO for movement
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const lfo = audioContext.createOscillator();
    const lfoGain = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Main oscillators with different waveforms
    osc1.type = 'sawtooth';
    osc1.frequency.value = frequency;
    osc1.detune.value = -5;
    
    osc2.type = 'triangle';
    osc2.frequency.value = frequency;
    osc2.detune.value = 5;
    
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 2.01; // Slightly detuned harmonic
    
    // LFO for filter modulation
    lfo.type = 'sine';
    lfo.frequency.value = 4; // 4 Hz modulation
    lfoGain.gain.value = 300; // Modulation depth
    
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, time);
    filter.Q.value = 3;
    
    // Very slow attack, ethereal
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.3, time + 0.3); // Very slow attack
    mainGain.gain.setValueAtTime(0.3, time + duration - 0.5);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(dryGain);
    // More reverb for space sound
    const extraReverbGain = audioContext.createGain();
    extraReverbGain.gain.value = 1.5;
    mainGain.connect(extraReverbGain);
    extraReverbGain.connect(reverbGain);
    
    lfo.start(time);
    lfo.stop(time + duration);
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Grand Piano - Soft, Gentle Piano
  const playSynthPiano = (frequency: number, time: number, duration: number = 1.0) => {
    // Softer piano sound using sine and triangle waves
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Main oscillators - sine and triangle for softer tone
    osc1.type = 'sine';
    osc1.frequency.value = frequency;
    
    osc2.type = 'triangle';
    osc2.frequency.value = frequency;
    osc2.detune.value = 3; // Slight chorusing
    
    // Subtle harmonic for body
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 2;
    
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.15; // Quiet harmonic
    
    // Gentle lowpass filtering
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, time);
    filter.frequency.exponentialRampToValueAtTime(1800, time + 0.4);
    filter.Q.value = 0.7; // Soft filter slope
    
    // Soft attack and gentle decay - much quieter than Rhodes
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.18, time + 0.02); // 20ms soft attack
    mainGain.gain.exponentialRampToValueAtTime(0.12, time + 0.2); // Gentle decay
    mainGain.gain.setValueAtTime(0.12, time + duration - 0.4);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(filter);
    osc2.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    mainGain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Vibraphone - Soft, jazzy, airy with gentle tremolo
  const playSynthVibraphone = (frequency: number, time: number, duration: number = 1.2) => {
    // Smooth harmonic series for warm, mellow tone
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const tremolo = audioContext.createOscillator(); // Amplitude tremolo
    const tremoloGain = audioContext.createGain();
    const tremoloDepth = audioContext.createGain();
    const lowpass = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Pure sine waves for smooth, airy character
    osc1.type = 'sine';
    osc1.frequency.value = frequency;
    
    // Subtle second harmonic for warmth
    osc2.type = 'sine';
    osc2.frequency.value = frequency * 2;
    osc2.detune.value = 2; // Slight detuning for shimmer
    
    // Very subtle third harmonic
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 3;
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.15; // Gentle second harmonic
    
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.05; // Very subtle third
    
    // Slow amplitude tremolo (classic vibraphone motor feel)
    tremolo.type = 'sine';
    tremolo.frequency.value = 5.8; // Classic vibraphone rate
    tremoloDepth.gain.value = 0.12; // Gentle, not overpowering
    
    tremolo.connect(tremoloDepth);
    tremoloDepth.connect(tremoloGain.gain);
    
    // Gentle lowpass for soft, airy character
    lowpass.type = 'lowpass';
    lowpass.frequency.value = 4500; // Cut harsh highs
    lowpass.Q.value = 0.5; // Gentle slope
    
    // Soft attack, gentle sustain for mellow jazz feel
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.22, time + 0.015); // 15ms soft attack
    mainGain.gain.exponentialRampToValueAtTime(0.16, time + 0.2); // Gentle decay
    mainGain.gain.setValueAtTime(0.16, time + duration - 0.5);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    // Setup tremolo with offset to prevent cutting to zero
    tremoloGain.gain.setValueAtTime(0.88, time); // Gentle modulation around 0.88
    
    osc1.connect(lowpass);
    osc2.connect(osc2Gain);
    osc2Gain.connect(lowpass);
    osc3.connect(osc3Gain);
    osc3Gain.connect(lowpass);
    lowpass.connect(tremoloGain);
    tremoloGain.connect(mainGain);
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    mainGain.connect(delayMix);
    
    tremolo.start(time);
    tremolo.stop(time + duration);
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Marimba - Warm, Wooden, Percussive
  const playSynthMarimba = (frequency: number, time: number, duration: number = 1.0) => {
    // Warm wooden tone with rich harmonics
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Main fundamental - sine for warmth
    osc1.type = 'sine';
    osc1.frequency.value = frequency;
    
    // Rich second harmonic
    osc2.type = 'sine';
    osc2.frequency.value = frequency * 2;
    
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.4; // Strong second harmonic
    
    // Third harmonic for wooden character
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 3;
    
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.2; // Moderate third harmonic
    
    // Warm bandpass filtering for woody resonance
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(frequency * 2.5, time);
    filter.frequency.exponentialRampToValueAtTime(frequency * 1.5, time + 0.3);
    filter.Q.value = 3; // Resonant for woody character
    
    // Fast attack, medium decay - percussive but warm
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.28, time + 0.005); // Very fast attack (5ms)
    mainGain.gain.exponentialRampToValueAtTime(0.15, time + 0.15);
    mainGain.gain.setValueAtTime(0.15, time + duration - 0.3);
    mainGain.gain.exponentialRampToValueAtTime(0.01, time + duration);
    
    osc1.connect(mainGain);
    osc2.connect(osc2Gain);
    osc2Gain.connect(mainGain);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    mainGain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
  };

  // Organ - Classic drawbar organ sound
  const playSynthOrgan = (frequency: number, time: number, duration: number = 0.9) => {
    // Classic organ using multiple sine waves (drawbars simulation)
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const osc3 = audioContext.createOscillator();
    const osc4 = audioContext.createOscillator();
    const osc5 = audioContext.createOscillator();
    const filter = audioContext.createBiquadFilter();
    const mainGain = audioContext.createGain();
    
    // Sub-octave (16' drawbar)
    osc1.type = 'sine';
    osc1.frequency.value = frequency / 2;
    const osc1Gain = audioContext.createGain();
    osc1Gain.gain.value = 0.3;
    
    // Fundamental (8' drawbar) - main voice
    osc2.type = 'sine';
    osc2.frequency.value = frequency;
    const osc2Gain = audioContext.createGain();
    osc2Gain.gain.value = 0.5;
    
    // Octave up (4' drawbar)
    osc3.type = 'sine';
    osc3.frequency.value = frequency * 2;
    const osc3Gain = audioContext.createGain();
    osc3Gain.gain.value = 0.25;
    
    // Fifth above (2 2/3' drawbar)
    osc4.type = 'sine';
    osc4.frequency.value = frequency * 3;
    const osc4Gain = audioContext.createGain();
    osc4Gain.gain.value = 0.2;
    
    // Two octaves up (2' drawbar)
    osc5.type = 'sine';
    osc5.frequency.value = frequency * 4;
    const osc5Gain = audioContext.createGain();
    osc5Gain.gain.value = 0.15;
    
    // Subtle filtering for warmth
    filter.type = 'lowpass';
    filter.frequency.value = 3500;
    filter.Q.value = 0.7;
    
    // Organ has instant attack and sustain
    mainGain.gain.setValueAtTime(0, time);
    mainGain.gain.linearRampToValueAtTime(0.35, time + 0.01); // Very fast attack (10ms)
    mainGain.gain.setValueAtTime(0.35, time + duration - 0.05); // Sustain
    mainGain.gain.linearRampToValueAtTime(0.01, time + duration); // Quick release
    
    osc1.connect(osc1Gain);
    osc1Gain.connect(filter);
    osc2.connect(osc2Gain);
    osc2Gain.connect(filter);
    osc3.connect(osc3Gain);
    osc3Gain.connect(filter);
    osc4.connect(osc4Gain);
    osc4Gain.connect(filter);
    osc5.connect(osc5Gain);
    osc5Gain.connect(filter);
    filter.connect(mainGain);
    mainGain.connect(dryGain);
    mainGain.connect(reverbGain);
    mainGain.connect(delayMix);
    
    osc1.start(time);
    osc1.stop(time + duration);
    osc2.start(time);
    osc2.stop(time + duration);
    osc3.start(time);
    osc3.stop(time + duration);
    osc4.start(time);
    osc4.stop(time + duration);
    osc5.start(time);
    osc5.stop(time + duration);
  };

  const playSound = (sound: string, time: number = audioContext.currentTime) => {
    switch (sound) {
      case 'kick':
        playKick(time);
        break;
      case 'kick808':
        playKick808(time);
        break;
      case 'kickAcoustic':
        playKickAcoustic(time);
        break;
      case 'kickDeep':
        playKickDeep(time);
        break;
      case 'kickDry':
        playKickDry(time);
        break;
      case 'snare':
        playSnare(time);
        break;
      case 'snareWarm':
        playSnareWarm(time);
        break;
      case 'snareTight':
        playSnareTight(time);
        break;
      case 'snareCrisp':
        playSnareCrisp(time);
        break;
      case 'snareRim':
        playSnareRim(time);
        break;
      case 'hi-hat1':
      case 'hi-hat 1':
        playHiHat1(time);
        break;
      case 'hi-hat1Crisp':
      case 'hi-hat 1 crisp':
        playHiHat1Crisp(time);
        break;
      case 'hi-hat1Soft':
      case 'hi-hat 1 soft':
        playHiHat1Soft(time);
        break;
      case 'hi-hat1Tight':
      case 'hi-hat 1 tight':
        playHiHat1Tight(time);
        break;
      case 'hi-hat1Shaker':
      case 'hi-hat 1 shaker':
        playHiHat1Shaker(time);
        break;
      case 'hi-hat2':
      case 'hi-hat 2':
        playHiHat2(time);
        break;
      case 'hi-hat2Open':
      case 'hi-hat 2 open':
        playHiHat2Open(time);
        break;
      case 'hi-hat2Wide':
      case 'hi-hat 2 wide':
        playHiHat2Wide(time);
        break;
      case 'hi-hat2Sizzle':
      case 'hi-hat 2 sizzle':
        playHiHat2Sizzle(time);
        break;
      case 'hi-hat2Space':
      case 'hi-hat 2 space':
        playHiHat2Space(time);
        break;
      case 'clap':
        playClap(time);
        break;
      case 'clapTight':
        playClapTight(time);
        break;
      case 'clapBright':
        playClapBright(time);
        break;
      case 'clapSnap':
        playClapSnap(time);
        break;
      case 'clapSpace':
        playClapSpace(time);
        break;
      case 'perc':
        playPerc(time);
        break;
      case 'percWood':
        playPercWood(time);
        break;
      case 'percConga':
        playPercConga(time);
        break;
      case 'percTom':
        playPercTom(time);
        break;
      case 'percCowbell':
        playPercCowbell(time);
        break;
      case 'crash':
        playCrash(time);
        break;
      case 'riser':
        playRiser(time);
        break;
      case 'horn':
        playHorn(time);
        break;
      case 'bass':
        playBass(time);
        break;
      case 'synth':
        playSynth(time);
        break;
      case 'rhodes':
        playSynthRhodes(261.63, time); // C4
        break;
      case 'pad':
        playSynthPad(261.63, time); // C4
        break;
      case 'space':
        playSynthSpace(261.63, time); // C4
        break;
      case 'piano':
        playSynthPiano(261.63, time); // C4
        break;
      case 'vibraphone':
        playSynthVibraphone(261.63, time); // C4
        break;
    }
  };

  const setVolume = (value: number) => {
    masterGain.gain.value = value * 0.7;
  };

  const setReverb = (value: number) => {
    reverbGain.gain.value = value * 0.5;
    dryGain.gain.value = 1 - (value * 0.3);
  };

  const getCurrentTime = () => audioContext.currentTime;

  const resumeContext = async () => {
    if (audioContext.state === 'suspended') {
      await audioContext.resume();
    }
  };

  const playNotePreview = (trackType: string, frequency: number, time: number) => {
    if (trackType === 'bass') {
      // Improved bass with multiple oscillators
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      osc1.type = 'sawtooth';
      osc1.frequency.value = frequency;
      osc2.type = 'square';
      osc2.frequency.value = frequency;
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, time);
      filter.frequency.exponentialRampToValueAtTime(150, time + 0.3);
      filter.Q.value = 5;
      
      gain.gain.setValueAtTime(0.5, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);
      
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      osc1.start(time);
      osc1.stop(time + 0.5);
      osc2.start(time);
      osc2.stop(time + 0.5);
    } else if (trackType === 'synth') {
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const filter = audioContext.createBiquadFilter();
      
      osc1.type = 'sawtooth';
      osc1.frequency.value = frequency;
      osc2.type = 'sawtooth';
      osc2.frequency.value = frequency * 1.5;
      
      filter.type = 'lowpass';
      filter.frequency.value = 2000;
      filter.Q.value = 1;
      
      gain.gain.setValueAtTime(0.15, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + 0.8);
      
      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      osc1.start(time);
      osc1.stop(time + 0.8);
      osc2.start(time);
      osc2.stop(time + 0.8);
    }
  };

  const playNoteWithVariant = (
    trackType: string, 
    variant: string, 
    frequency: number, 
    time: number, 
    duration?: number
  ) => {
    if (trackType === 'keys') {
      switch (variant) {
        case 'rhodes':
          playSynthRhodes(frequency, time, duration);
          break;
        case 'pad':
          playSynthPad(frequency, time, duration);
          break;
        case 'space':
          playSynthSpace(frequency, time, duration);
          break;
        case 'piano':
          playSynthPiano(frequency, time, duration);
          break;
        case 'vibraphone':
          playSynthVibraphone(frequency, time, duration);
          break;
        case 'marimba':
          playSynthMarimba(frequency, time, duration);
          break;
        case 'organ':
          playSynthOrgan(frequency, time, duration);
          break;
        default:
          playSynthRhodes(frequency, time, duration); // Default to rhodes
      }
    } else if (trackType === 'bass') {
      switch (variant) {
        case 'double':
          playBassDouble(frequency, time, duration);
          break;
        case 'sub':
          playBassSub(frequency, time, duration);
          break;
        case 'electric':
          playBassElectric(frequency, time, duration);
          break;
        case 'reese':
          playBassReese(frequency, time, duration);
          break;
        default:
          playBassDouble(frequency, time, duration); // Default to double
      }
    }
  };

  const setDelay = (delayTimeMs: number) => {
    // delayTimeMs is the delay time in milliseconds (from notched slider)
    if (delayTimeMs === 0) {
      // No delay
      delayNode.delayTime.value = 0;
      delayMix.gain.value = 0;
    } else {
      // Set delay time in seconds
      const delayTimeSec = delayTimeMs / 1000;
      delayNode.delayTime.value = Math.min(delayTimeSec, 2.0); // Clamp to max 2 seconds
      // Default wet mix - this will be overridden by setDelayAmount if called
      const wetAmount = delayTimeSec < 0.2 ? 0.65 : 0.55; // More wet for 1/16, still wet for others
      delayMix.gain.value = wetAmount;
    }
  };

  const setDelayAmount = (amount: number) => {
    // amount is 0-100, representing the wet mix percentage
    // Only apply if delay is active (delayTime > 0)
    if (delayNode.delayTime.value > 0) {
      delayMix.gain.value = amount / 100;
    }
  };

  const setFilter = (value: number) => {
    // value: -1 to 1
    // -1 = full low-pass (left), 0 = no filter (center), 1 = full high-pass (right)
    
    if (value < -0.05) {
      // Low-pass mode (turn left)
      globalFilter.type = 'lowpass';
      // Map -1 to -0.05 -> 20000Hz to 200Hz
      const normalizedValue = Math.abs(value + 0.05) / 0.95; // 0 to 1
      globalFilter.frequency.value = 20000 - normalizedValue * 19800;
      globalFilter.Q.value = 1 + normalizedValue * 2; // Increase resonance as we filter more
    } else if (value > 0.05) {
      // High-pass mode (turn right) - exponential for more progressive feel
      globalFilter.type = 'highpass';
      // Map 0.05 to 1 -> 20Hz to 2000Hz using exponential curve
      const normalizedValue = (value - 0.05) / 0.95; // 0 to 1
      // Use exponential curve: starts slow near 0, accelerates toward 1
      const expValue = Math.pow(normalizedValue, 2.5); // Exponential curve for progressive control
      globalFilter.frequency.value = 20 + expValue * 1980;
      globalFilter.Q.value = 1 + expValue * 2; // Increase resonance as we filter more
    } else {
      // Center position - essentially bypass (full frequency range)
      globalFilter.type = 'lowpass';
      globalFilter.frequency.value = 20000; // Fully open
      globalFilter.Q.value = 1;
    }
  };

  const getAnalyser = () => analyser;

  return {
    playSound,
    setVolume,
    setReverb,
    setDelay,
    setDelayAmount,
    setFilter,
    getCurrentTime,
    resumeContext,
    playNotePreview,
    playNoteWithVariant,
    getAnalyser,
  };
};