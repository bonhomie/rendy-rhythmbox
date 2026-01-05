import { useState, useEffect, useRef, useCallback } from 'react';
import { SequencerGrid } from './components/SequencerGrid';
import { ControlButtons } from './components/ControlButtons';
import { ParameterSliders } from './components/ParameterSliders';
import { Header } from './components/Header';
import { SFXButtons } from './components/SFXButtons';
import { PianoKeyboardModal } from './components/PianoKeyboardModal';
import { DragGhost } from './components/DragGhost';
import { PhraseDragGhost } from './components/PhraseDragGhost';
import { Phrases } from './components/Phrases';
import { Knob } from './components/Knob';
import { LEDInterface } from './components/LEDInterface';
import { createAudioEngine } from './utils/audioEngine';
import { getFrequency, detectChord } from './utils/chordDetection';
import type { ArpPattern, ArpRate } from './components/ArpeggiatorSelector';

export type TrackData = {
  id: number;
  name: string;
  subtitle: string;
  color: string;
  steps: boolean[];
  isMuted: boolean;
  chords?: (string | null)[]; // Chord for each step
  notes?: (string[] | null)[]; // Notes for each step
  soundVariant?: string; // Selected sound variant
  soundOptions?: { id: string; name: string }[]; // Available sound options
  arpPattern?: ArpPattern; // Arpeggiator pattern
  arpRate?: ArpRate; // Arpeggiator rate
  arpLength?: '1x' | '2x' | '4x'; // Arpeggiator length
};

// Helper to generate simple random melody
const generateRandomMelody = (trackName: string): { chords: (string | null)[], notes: (string[] | null)[] } => {
  const chords = Array(16).fill(null);
  const notes = Array(16).fill(null);
  
  // Use same octave range as piano keyboard (C3-C5)
  // Bass uses lower range (C3-A3), Synth uses higher range (C3-C4)
  const bassNotes = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3'];
  const synthNotes = ['C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'C4', 'D4'];
  
  const scale = trackName === 'BASS' ? bassNotes : synthNotes;
  
  // Randomly place 3-5 notes
  const numNotes = Math.floor(Math.random() * 3) + 3; // 3-5 notes
  const positions = Array.from({length: 16}, (_, i) => i)
    .sort(() => Math.random() - 0.5)
    .slice(0, numNotes);
  
  positions.forEach(pos => {
    // Sometimes single note, sometimes 2-note interval
    const numNotesInChord = Math.random() > 0.6 ? 2 : 1;
    const selectedNotes: string[] = [];
    
    for (let i = 0; i < numNotesInChord; i++) {
      const note = scale[Math.floor(Math.random() * scale.length)];
      if (!selectedNotes.includes(note)) {
        selectedNotes.push(note);
      }
    }
    
    notes[pos] = selectedNotes;
    chords[pos] = detectChord(selectedNotes);
  });
  
  return { chords, notes };
};

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [tempo, setTempo] = useState(102);
  const [swing, setSwing] = useState(0);
  const [reverb, setReverb] = useState(0);
  const [delay, setDelay] = useState(0);
  const [delayAmount, setDelayAmount] = useState(60); // Default 60% wet mix
  const [filter, setFilter] = useState(0); // -1 to 1, 0 is center (no filter)
  const [volume, setVolume] = useState(80); // 0-100 for LED interface, default 80%
  const [frequencyData, setFrequencyData] = useState<Uint8Array | null>(null);
  const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
  const [selectedStepIndex, setSelectedStepIndex] = useState<number | null>(null);
  const [isPianoModalOpen, setIsPianoModalOpen] = useState(false);
  const [recordingTrackId, setRecordingTrackId] = useState<number | null>(null); // Track being recorded
  const [draggedNote, setDraggedNote] = useState<{ trackId: number; stepIndex: number; notes: string[]; chord: string | null; color: string } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [cursorPosition, setCursorPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  
  // Phrase management
  const [activePhrase, setActivePhrase] = useState(1);
  const [queuedPhrase, setQueuedPhrase] = useState<number | null>(null);
  const [duplicateSourcePhrase, setDuplicateSourcePhrase] = useState<number | null>(null); // For Option+click duplication
  const [isDraggingPhrase, setIsDraggingPhrase] = useState(false); // Track phrase dragging state
  const [phrases, setPhrases] = useState<Record<number, TrackData[]>>({
    1: [], // Will be initialized with default tracks
    2: [], // Empty until user clicks
    3: [], // Empty until user clicks
  });
  
  // History for undo/redo
  const [history, setHistory] = useState<TrackData[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const [tracks, setTracks] = useState<TrackData[]>([
    { 
      id: 0, 
      name: 'Kick', 
      subtitle: 'Acoustic', 
      color: 'purple', 
      steps: [true, false, false, false, true, false, false, false, true, false, false, false, true, false, false, false], 
      isMuted: false,
      soundVariant: 'acoustic',
      soundOptions: [
        { id: '808', name: '808' },
        { id: 'acoustic', name: 'ACOUSTIC' },
        { id: 'deep', name: 'DEEP' },
        { id: 'dry', name: 'DRY' }
      ]
    },
    { 
      id: 1, 
      name: 'Snare', 
      subtitle: 'warm', 
      color: 'pink', 
      steps: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], 
      isMuted: false,
      soundVariant: 'warm',
      soundOptions: [
        { id: 'warm', name: 'WARM' },
        { id: 'tight', name: 'TIGHT' },
        { id: 'crisp', name: 'CRISP' },
        { id: 'rim', name: 'RIM' }
      ]
    },
    { 
      id: 2, 
      name: 'HI-HATS', 
      subtitle: 'crisp', 
      color: 'blue', 
      steps: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false], 
      isMuted: false,
      soundVariant: 'crisp',
      soundOptions: [
        { id: 'crisp', name: 'CRISP' },
        { id: 'soft', name: 'SOFT' },
        { id: 'tight', name: 'TIGHT' },
        { id: 'shaker', name: 'SHAKER' }
      ]
    },
    { 
      id: 3, 
      name: 'HI-HAT OPEN', 
      subtitle: 'open', 
      color: 'cyan', 
      steps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
      isMuted: false,
      soundVariant: 'open',
      soundOptions: [
        { id: 'open', name: 'OPEN' },
        { id: 'wide', name: 'WIDE' },
        { id: 'sizzle', name: 'SIZZLE' },
        { id: 'space', name: 'SPACE' }
      ]
    },
    { 
      id: 4, 
      name: 'CLAP', 
      subtitle: 'tight', 
      color: 'orange', 
      steps: [false, false, false, false, true, false, false, false, false, false, false, false, true, false, false, false], 
      isMuted: false,
      soundVariant: 'tight',
      soundOptions: [
        { id: 'tight', name: 'TIGHT' },
        { id: 'bright', name: 'BRIGHT' },
        { id: 'snap', name: 'SNAP' },
        { id: 'space', name: 'SPACE' }
      ]
    },
    { 
      id: 5, 
      name: 'PERC', 
      subtitle: 'conga', 
      color: 'green', 
      steps: [false, false, true, false, false, true, false, true, false, false, true, false, false, true, false, false], 
      isMuted: false,
      soundVariant: 'conga',
      soundOptions: [
        { id: 'wood', name: 'WOOD' },
        { id: 'conga', name: 'CONGA' },
        { id: 'tom', name: 'TOM' },
        { id: 'cowbell', name: 'COWBELL' }
      ]
    },
    { 
      id: 6, 
      name: 'BASS', 
      subtitle: 'sub', 
      color: 'coral', 
      steps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
      isMuted: false,
      chords: Array(16).fill(null),
      notes: Array(16).fill(null),
      soundVariant: 'sub',
      soundOptions: [
        { id: 'sub', name: 'SUB' },
        { id: 'double', name: 'DOUBLE' },
        { id: 'electric', name: 'ELECTRIC' },
        { id: 'reese', name: 'REESE' }
      ],
      arpPattern: 'off',
      arpRate: '1/16',
      arpLength: '1x'
    },
    { 
      id: 7, 
      name: 'KEYS', 
      subtitle: 'Elec Piano', 
      color: 'white', 
      steps: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false], 
      isMuted: false,
      chords: Array(16).fill(null),
      notes: Array(16).fill(null),
      soundVariant: 'marimba',
      soundOptions: [
        { id: 'rhodes', name: 'RHODES' },
        { id: 'piano', name: 'BIT PIANO' },
        { id: 'vibraphone', name: 'VIBRAPHONE' },
        { id: 'marimba', name: 'ELEC PIANO' },
        { id: 'organ', name: 'ORGAN' }
      ],
      arpPattern: 'off',
      arpRate: '1/16',
      arpLength: '1x'
    },
  ]);

  const audioEngineRef = useRef<ReturnType<typeof createAudioEngine> | null>(null);
  const intervalRef = useRef<number | null>(null);
  const tracksRef = useRef(tracks);
  const crashOnNextStepRef = useRef(false); // Use ref instead of state to avoid closure issues
  const riserOnNextStepRef = useRef(false); // Track riser trigger
  const hornOnNextStepRef = useRef(false); // Track horn trigger
  const queuedPhraseRef = useRef<number | null>(null); // Track queued phrase
  const tempoRef = useRef(tempo); // Track tempo for arpeggiator
  const phrasesRef = useRef(phrases); // Track phrases for phrase switching

  // Keep tracksRef in sync with tracks state
  useEffect(() => {
    tracksRef.current = tracks;
  }, [tracks]);

  // Keep tempoRef in sync with tempo state
  useEffect(() => {
    tempoRef.current = tempo;
  }, [tempo]);

  // Keep phrasesRef in sync with phrases state
  useEffect(() => {
    phrasesRef.current = phrases;
  }, [phrases]);

  // Initialize phrase 1 with default tracks
  useEffect(() => {
    if (phrases[1].length === 0) {
      setPhrases(prev => ({
        ...prev,
        1: JSON.parse(JSON.stringify(tracks))
      }));
    }
  }, []);

  // Keep queuedPhraseRef in sync
  useEffect(() => {
    queuedPhraseRef.current = queuedPhrase;
  }, [queuedPhrase]);

  // Save history when tracks change (debounced to avoid too many history entries)
  const saveToHistory = useCallback((newTracks: TrackData[]) => {
    setHistory(prev => {
      // Remove any redo history when making a new change
      const newHistory = prev.slice(0, historyIndex + 1);
      // Add new state to history
      const updatedHistory = [...newHistory, JSON.parse(JSON.stringify(newTracks))];
      // Limit history to last 50 states
      return updatedHistory.slice(-50);
    });
    setHistoryIndex(prev => Math.min(prev + 1, 49));
  }, [historyIndex]);

  // Undo/Redo keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape to cancel drag
      if (e.key === 'Escape' && isDragging) {
        e.preventDefault();
        handleDragCancel();
        return;
      }
      
      // Command+Z for undo
      if ((e.metaKey || e.ctrlKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        if (historyIndex > 0) {
          setHistoryIndex(prev => prev - 1);
          setTracks(JSON.parse(JSON.stringify(history[historyIndex - 1])));
        }
      }
      // Shift+Command+Z for redo
      else if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === 'z') {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          setHistoryIndex(prev => prev + 1);
          setTracks(JSON.parse(JSON.stringify(history[historyIndex + 1])));
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [history, historyIndex, isDragging]);

  // Track mouse position during drag
  useEffect(() => {
    if (!isDragging && !isDraggingPhrase) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDragging, isDraggingPhrase]);

  // Keyboard mapping for live recording (same as piano modal)
  const keyboardMapping: Record<string, { note: string, octave: number, shiftOctave: number }> = {
    'a': { note: 'C', octave: 3, shiftOctave: 4 },
    's': { note: 'D', octave: 3, shiftOctave: 4 },
    'd': { note: 'E', octave: 3, shiftOctave: 4 },
    'f': { note: 'F', octave: 3, shiftOctave: 4 },
    'g': { note: 'G', octave: 3, shiftOctave: 4 },
    'h': { note: 'A', octave: 3, shiftOctave: 4 },
    'j': { note: 'B', octave: 3, shiftOctave: 4 },
    'k': { note: 'C', octave: 4, shiftOctave: 5 },
    'l': { note: 'D', octave: 4, shiftOctave: 5 },
    'w': { note: 'C#', octave: 3, shiftOctave: 4 },
    'e': { note: 'D#', octave: 3, shiftOctave: 4 },
    't': { note: 'F#', octave: 3, shiftOctave: 4 },
    'y': { note: 'G#', octave: 3, shiftOctave: 4 },
    'u': { note: 'A#', octave: 3, shiftOctave: 4 },
  };

  // Live recording keyboard listener
  useEffect(() => {
    if (recordingTrackId === null || !isPlaying || currentStep === -1) return;

    const activeKeys = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      
      // Ignore if already pressed
      if (activeKeys.has(key)) return;
      
      const mapping = keyboardMapping[key];
      if (!mapping) return;

      e.preventDefault();
      activeKeys.add(key);

      // Determine octave based on modifiers:
      // Cmd + Shift: octave - 1 (e.g., C3 -> C2)
      // Cmd: octave - 2 (e.g., C3 -> C1)
      // Shift: use shiftOctave (e.g., C3 -> C4)
      // None: use base octave (e.g., C3)
      let octave: number;
      if (e.metaKey && e.shiftKey) {
        // Cmd+Shift: one octave lower
        octave = mapping.octave - 1;
      } else if (e.metaKey) {
        // Cmd: two octaves lower
        octave = mapping.octave - 2;
      } else if (e.shiftKey) {
        // Shift: use shift octave
        octave = mapping.shiftOctave;
      } else {
        // No modifiers: use base octave
        octave = mapping.octave;
      }
      
      // Validate octave range (C1-C5)
      if (octave < 1 || octave > 5) return;
      if (octave === 5 && mapping.note !== 'C') return;

      const noteString = `${mapping.note}${octave}`;
      
      // Record the note to the current step
      setTracks(prev => prev.map(track => {
        if (track.id === recordingTrackId) {
          const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
          const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
          const newSteps = [...track.steps];
          
          // Add note to current step
          const currentNotes = newNotes[currentStep] || [];
          if (!currentNotes.includes(noteString)) {
            newNotes[currentStep] = [...currentNotes, noteString];
            newChords[currentStep] = detectChord(newNotes[currentStep]!);
            newSteps[currentStep] = true; // Enable the step
          }
          
          return { ...track, notes: newNotes, chords: newChords, steps: newSteps };
        }
        return track;
      }));

      // Play preview sound
      if (audioEngineRef.current) {
        const track = tracks.find(t => t.id === recordingTrackId);
        if (track) {
          const frequency = getFrequency(mapping.note, octave);
          const soundName = track.name.toLowerCase();
          
          if (track.soundVariant && audioEngineRef.current.playNoteWithVariant) {
            audioEngineRef.current.playNoteWithVariant(
              soundName,
              track.soundVariant,
              frequency,
              audioEngineRef.current.getCurrentTime(),
              0.3 // Short preview
            );
          } else {
            audioEngineRef.current.playNotePreview(
              soundName,
              frequency,
              audioEngineRef.current.getCurrentTime()
            );
          }
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      activeKeys.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [recordingTrackId, isPlaying, currentStep, tracks]);

  useEffect(() => {
    audioEngineRef.current = createAudioEngine();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioEngineRef.current) {
      audioEngineRef.current.setReverb(reverb / 100);
      audioEngineRef.current.setDelay(delay); // Pass delay directly in milliseconds
    }
  }, [reverb, delay]);

  // Update delay amount when changed
  useEffect(() => {
    if (audioEngineRef.current && audioEngineRef.current.setDelayAmount) {
      audioEngineRef.current.setDelayAmount(delayAmount);
    }
  }, [delayAmount]);

  // Update filter when changed
  useEffect(() => {
    if (audioEngineRef.current && audioEngineRef.current.setFilter) {
      audioEngineRef.current.setFilter(filter);
    }
  }, [filter]);

  // Update volume when changed
  useEffect(() => {
    if (audioEngineRef.current && audioEngineRef.current.setVolume) {
      audioEngineRef.current.setVolume(volume / 100);
    }
  }, [volume]);

  // Audio analysis for visualizer
  useEffect(() => {
    if (!audioEngineRef.current?.getAnalyser) return;

    const analyser = audioEngineRef.current.getAnalyser();
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    let animationId: number;

    const updateFrequencyData = () => {
      analyser.getByteFrequencyData(dataArray);
      setFrequencyData(new Uint8Array(dataArray));
      animationId = requestAnimationFrame(updateFrequencyData);
    };

    updateFrequencyData();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [audioEngineRef.current]);

  // Playback effect - with swing support
  useEffect(() => {
    if (!isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentStep(-1);
      return;
    }

    // Resume audio context when starting playback
    if (audioEngineRef.current) {
      audioEngineRef.current.resumeContext();
    }

    // Calculate interval based on tempo (16th notes)
    const baseStepDuration = (60 / tempo) / 4; // Duration of one 16th note in seconds
    const swingAmount = swing / 100; // Convert swing percentage to decimal
    
    let stepIndex = 0;
    let nextStepTime = audioEngineRef.current!.getCurrentTime();
    
    const scheduleNextStep = () => {
      const currentSwingRef = swing; // Capture current swing value
      
      // Play sounds for this step
      if (audioEngineRef.current) {
        const now = nextStepTime;
        
        // Check if crash should play on this step
        if (crashOnNextStepRef.current) {
          audioEngineRef.current.playSound('crash', now);
          crashOnNextStepRef.current = false; // Reset after playing
        }
        
        // Check if riser should play on this step
        if (riserOnNextStepRef.current) {
          audioEngineRef.current.playSound('riser', now);
          riserOnNextStepRef.current = false; // Reset after playing
        }
        
        // Check if horn should play on this step
        if (hornOnNextStepRef.current) {
          audioEngineRef.current.playSound('horn', now);
          hornOnNextStepRef.current = false; // Reset after playing
        }
        
        tracksRef.current.forEach((track) => {
          if (track.isMuted) return; // Skip muted tracks
          
          // Map track names to audio engine sound names
          let soundName = track.name.toLowerCase();
          if (soundName === 'hi-hats') soundName = 'hi-hat1';
          if (soundName === 'hi-hat open') soundName = 'hi-hat2';
          
          // Check if this is a melody track (bass or synth) with stored notes
          if ((track.name === 'BASS' || track.name === 'KEYS')) {
            // For melody tracks, only play if there are notes assigned
            const notes = track.notes?.[stepIndex];
            if (notes && notes.length > 0) {
              // Check if arpeggiator is enabled
              const arpPattern = track.arpPattern || 'off';
              const arpRate = track.arpRate || '1/16';
              const arpLength = track.arpLength || '1x';
              
              console.log(`Track ${track.name}: pattern=${arpPattern}, rate=${arpRate}, length=${arpLength}, notes=`, notes);
              
              if (arpPattern !== 'off') {
                // Arpeggiator is enabled - play notes in sequence
                let arpNotes = [...notes];
                
                // Sort notes by frequency for consistent ordering
                arpNotes.sort((a, b) => {
                  const freqA = getFrequency(a) || 0;
                  const freqB = getFrequency(b) || 0;
                  return freqA - freqB;
                });
                
                // Apply pattern
                if (arpPattern === 'down') {
                  arpNotes.reverse();
                } else if (arpPattern === 'updown') {
                  arpNotes = [...arpNotes, ...arpNotes.slice(0, -1).reverse()];
                } else if (arpPattern === 'downup') {
                  const reversed = [...arpNotes].reverse();
                  arpNotes = [...reversed, ...reversed.slice(0, -1).reverse()];
                } else if (arpPattern === 'random') {
                  arpNotes = arpNotes.sort(() => Math.random() - 0.5);
                }
                
                // Apply length multiplier
                const lengthMultiplier = arpLength === '1x' ? 1 : arpLength === '2x' ? 2 : 4;
                if (lengthMultiplier > 1) {
                  const basePattern = [...arpNotes];
                  for (let i = 1; i < lengthMultiplier; i++) {
                    arpNotes.push(...basePattern);
                  }
                }
                
                // Calculate timing between arpeggiator notes based on rate
                const currentTempo = tempoRef.current;
                const rateMultiplier = arpRate === '1/16' ? 1 : arpRate === '1/8' ? 2 : 4;
                const arpNoteInterval = (60 / currentTempo) / 4 * rateMultiplier; // Time between arp notes in seconds
                
                // Play each note in the arpeggio
                arpNotes.forEach((note, idx) => {
                  if (note && note.trim()) {
                    const frequency = getFrequency(note);
                    if (frequency && isFinite(frequency)) {
                      const noteTime = now + (idx * arpNoteInterval);
                      if (track.soundVariant && audioEngineRef.current?.playNoteWithVariant) {
                        audioEngineRef.current.playNoteWithVariant(
                          soundName, 
                          track.soundVariant, 
                          frequency, 
                          noteTime
                        );
                      } else {
                        audioEngineRef.current?.playNotePreview(soundName, frequency, noteTime);
                      }
                    }
                  }
                });
              } else {
                // No arpeggiator - play all notes simultaneously (chord)
                notes.forEach(note => {
                  if (note && note.trim()) {
                    const frequency = getFrequency(note);
                    if (frequency && isFinite(frequency)) {
                      if (track.soundVariant && audioEngineRef.current?.playNoteWithVariant) {
                        audioEngineRef.current.playNoteWithVariant(
                          soundName, 
                          track.soundVariant, 
                          frequency, 
                          now
                        );
                      } else {
                        audioEngineRef.current?.playNotePreview(soundName, frequency, now);
                      }
                    }
                  }
                });
              }
            }
          } else {
            // For rhythm tracks, play if step is active
            if (track.steps[stepIndex]) {
              // Map variant for all drum tracks
              let soundToPlay = soundName;
              if (track.soundVariant) {
                // Capitalize first letter of variant
                const variantCapitalized = track.soundVariant.charAt(0).toUpperCase() + track.soundVariant.slice(1);
                
                if (track.name === 'Kick') {
                  soundToPlay = 'kick' + variantCapitalized;
                } else if (track.name === 'Snare') {
                  soundToPlay = 'snare' + variantCapitalized;
                } else if (track.name === 'HI-HATS') {
                  soundToPlay = 'hi-hat1' + variantCapitalized;
                } else if (track.name === 'HI-HAT OPEN') {
                  soundToPlay = 'hi-hat2' + variantCapitalized;
                } else if (track.name === 'CLAP') {
                  soundToPlay = 'clap' + variantCapitalized;
                } else if (track.name === 'PERC') {
                  soundToPlay = 'perc' + variantCapitalized;
                }
              }
              audioEngineRef.current.playSound(soundToPlay, now);
            }
          }
        });
      }
      
      setCurrentStep(stepIndex);
      
      // Calculate next step timing with swing
      // Swing delays odd-numbered 16th notes (1, 3, 5, 7, etc.)
      const isOddStep = stepIndex % 2 === 1;
      const swingDelay = isOddStep ? (baseStepDuration * swingAmount) : 0;
      const nextStepDuration = baseStepDuration + swingDelay;
      
      // If we're on an even step, subtract the swing delay that was added to the previous odd step
      // This keeps the overall timing consistent
      const actualDuration = (stepIndex % 2 === 0 && stepIndex > 0) 
        ? baseStepDuration - (baseStepDuration * swingAmount * 0.5)
        : nextStepDuration;
      
      nextStepTime += actualDuration;
      const nextStepIndex = (stepIndex + 1) % 16;
      
      // Check if we're transitioning to step 0 (start of loop) and there's a queued phrase
      // Do this BEFORE incrementing stepIndex so the new phrase is ready for step 0
      if (nextStepIndex === 0 && queuedPhraseRef.current !== null) {
        const newPhraseId = queuedPhraseRef.current;
        
        // Load the queued phrase immediately into tracksRef so it plays on step 0
        // Use phrasesRef to get the latest phrases state
        const newTracks = JSON.parse(JSON.stringify(phrasesRef.current[newPhraseId] || []));
        tracksRef.current = newTracks; // Update ref immediately for playback
        setTracks(newTracks); // Update state for UI
        setActivePhrase(newPhraseId);
        setQueuedPhrase(null);
        queuedPhraseRef.current = null; // Clear ref immediately
      }
      
      stepIndex = nextStepIndex;
      
      // Schedule next step
      const delay = (nextStepTime - audioEngineRef.current!.getCurrentTime()) * 1000;
      intervalRef.current = window.setTimeout(scheduleNextStep, Math.max(0, delay));
    };
    
    // Start scheduling
    scheduleNextStep();

    return () => {
      if (intervalRef.current) {
        clearTimeout(intervalRef.current);
      }
    };
  }, [isPlaying, tempo, swing]); // Added swing to dependencies

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleTogglePlay = async () => {
    if (audioEngineRef.current) {
      await audioEngineRef.current.resumeContext();
    }
    togglePlay();
  };

  const handleClear = () => {
    setTracks(prev => prev.map(track => ({
      ...track,
      steps: Array(16).fill(false),
      chords: Array(16).fill(null),
      notes: Array(16).fill(null)
    })));
  };

  const handleRandom = () => {
    setTracks(prev => prev.map(track => {
      const newSteps = Array(16).fill(false).map(() => Math.random() > 0.7);
      
      if (track.name === 'BASS' || track.name === 'KEYS') {
        const melody = generateRandomMelody(track.name);
        return {
          ...track,
          steps: newSteps,
          ...melody
        };
      }
      
      return {
        ...track,
        steps: newSteps
      };
    }));
  };

  const toggleStep = (trackId: number, stepIndex: number) => {
    // Resume audio context and play sound immediately when toggling on (only if not playing)
    if (audioEngineRef.current && !isPlaying) {
      audioEngineRef.current.resumeContext();
      
      const track = tracks.find(t => t.id === trackId);
      if (track && !track.steps[stepIndex]) {
        // Toggling ON - play the sound
        let soundName = track.name.toLowerCase();
        if (soundName === 'hi-hats') soundName = 'hi-hat1';
        if (soundName === 'hi-hat open') soundName = 'hi-hat2';
        
        if (track.name !== 'BASS' && track.name !== 'KEYS') {
          audioEngineRef.current.playSound(soundName, audioEngineRef.current.getCurrentTime());
        }
      }
    }
    
    const newTracks = tracks.map(track => {
      if (track.id === trackId) {
        const newSteps = [...track.steps];
        newSteps[stepIndex] = !newSteps[stepIndex];
        
        // For Bass and Synth tracks, also clear the notes when toggling off
        if ((track.name === 'BASS' || track.name === 'KEYS') && newSteps[stepIndex] === false) {
          const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
          const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
          newNotes[stepIndex] = null;
          newChords[stepIndex] = null;
          return { ...track, steps: newSteps, notes: newNotes, chords: newChords };
        }
        
        return { ...track, steps: newSteps };
      }
      return track;
    });
    
    setTracks(newTracks);
    saveToHistory(newTracks);
  };

  const toggleMute = (trackId: number, isShiftClick: boolean = false) => {
    setTracks(prev => {
      const targetTrack = prev.find(t => t.id === trackId);
      if (!targetTrack) return prev;
      
      // Check if this is a percussion track (not Bass or Keys)
      const isPercussionTrack = targetTrack.name !== 'BASS' && targetTrack.name !== 'KEYS';
      
      if (isShiftClick && isPercussionTrack) {
        // Solo mode: mute all other percussion tracks, unmute this one
        return prev.map(track => {
          if (track.name === 'BASS' || track.name === 'KEYS') {
            // Don't change Bass/Keys mute state
            return track;
          } else if (track.id === trackId) {
            // Unmute the target track
            return { ...track, isMuted: false };
          } else {
            // Mute all other percussion tracks
            return { ...track, isMuted: true };
          }
        });
      } else {
        // Normal toggle
        return prev.map(track =>
          track.id === trackId ? { ...track, isMuted: !track.isMuted } : track
        );
      }
    });
  };

  const handleOpenPianoModal = (trackId: number, stepIndex: number) => {
    setSelectedTrackId(trackId);
    setSelectedStepIndex(stepIndex);
    setIsPianoModalOpen(true);
  };

  const handleApplyChord = (chord: string, notes: string[]) => {
    if (selectedTrackId !== null && selectedStepIndex !== null) {
      setTracks(prev => prev.map(track => {
        if (track.id === selectedTrackId) {
          const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
          const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
          const newSteps = [...track.steps];
          
          if (notes.length === 0) {
            // If no notes selected, clear the step
            newChords[selectedStepIndex] = null;
            newNotes[selectedStepIndex] = null;
            newSteps[selectedStepIndex] = false; // Disable the step
          } else {
            // If notes selected, store them and enable the step
            newChords[selectedStepIndex] = chord;
            newNotes[selectedStepIndex] = notes;
            newSteps[selectedStepIndex] = true; // Enable the step
          }
          
          return { ...track, chords: newChords, notes: newNotes, steps: newSteps };
        }
        return track;
      }));
    }
  };

  const handlePreviewNote = (note: string, octave: number) => {
    if (audioEngineRef.current && selectedTrackId !== null) {
      const track = tracks.find(t => t.id === selectedTrackId);
      if (track) {
        const frequency = getFrequency(note, octave);
        // Use variant-based playback for synth track
        if (track.name === 'KEYS' && track.soundVariant && audioEngineRef.current.playNoteWithVariant) {
          audioEngineRef.current.playNoteWithVariant(
            track.name.toLowerCase(),
            track.soundVariant,
            frequency,
            audioEngineRef.current.getCurrentTime(),
            0.5 // Shorter duration for preview
          );
        } else {
          audioEngineRef.current.playNotePreview(
            track.name.toLowerCase(), 
            frequency,
            audioEngineRef.current.getCurrentTime()
          );
        }
      }
    }
  };

  const handleSelectSound = (trackId: number, soundId: string) => {
    setTracks(prev => prev.map(track => {
      if (track.id === trackId) {
        // Update subtitle to match selected sound variant
        const selectedOption = track.soundOptions?.find(opt => opt.id === soundId);
        const newSubtitle = selectedOption?.name || track.subtitle;
        return { ...track, soundVariant: soundId, subtitle: newSubtitle };
      }
      return track;
    }));
  };

  const handleArpPatternChange = (trackId: number, pattern: ArpPattern) => {
    setTracks(prev => {
      const newTracks = prev.map(track => {
        if (track.id === trackId) {
          return { ...track, arpPattern: pattern };
        }
        return track;
      });
      
      // Save to history and active phrase
      saveToHistory(newTracks);
      setPhrases(prevPhrases => ({
        ...prevPhrases,
        [activePhrase]: newTracks
      }));
      
      return newTracks;
    });
  };

  const handleArpRateChange = (trackId: number, rate: ArpRate) => {
    setTracks(prev => {
      const newTracks = prev.map(track => {
        if (track.id === trackId) {
          return { ...track, arpRate: rate };
        }
        return track;
      });
      
      // Save to history and active phrase
      saveToHistory(newTracks);
      setPhrases(prevPhrases => ({
        ...prevPhrases,
        [activePhrase]: newTracks
      }));
      
      return newTracks;
    });
  };

  const handleArpLengthChange = (trackId: number, length: '1x' | '2x' | '4x') => {
    setTracks(prev => {
      const newTracks = prev.map(track => {
        if (track.id === trackId) {
          return { ...track, arpLength: length };
        }
        return track;
      });
      
      // Save to history and active phrase
      saveToHistory(newTracks);
      setPhrases(prevPhrases => ({
        ...prevPhrases,
        [activePhrase]: newTracks
      }));
      
      return newTracks;
    });
  };

  const handleCrashClick = () => {
    // Set the crash to trigger on the next step during playback
    crashOnNextStepRef.current = true;
    
    // If not currently playing, play the crash immediately
    if (!isPlaying && audioEngineRef.current) {
      audioEngineRef.current.resumeContext();
      audioEngineRef.current.playSound('crash', audioEngineRef.current.getCurrentTime());
    }
  };

  const handleRiserClick = () => {
    // Set the riser to trigger on the next step during playback
    riserOnNextStepRef.current = true;
    
    // If not currently playing, play the riser immediately
    if (!isPlaying && audioEngineRef.current) {
      audioEngineRef.current.resumeContext();
      audioEngineRef.current.playSound('riser', audioEngineRef.current.getCurrentTime());
    }
  };

  const handleHornClick = () => {
    // Set the horn to trigger on the next step during playback
    hornOnNextStepRef.current = true;
    
    // If not currently playing, play the horn immediately
    if (!isPlaying && audioEngineRef.current) {
      audioEngineRef.current.resumeContext();
      audioEngineRef.current.playSound('horn', audioEngineRef.current.getCurrentTime());
    }
  };

  const handleSave = () => {
    // TODO: Implement save functionality
    // This will save the current state of all phrases to localStorage or a file
    console.log('Save clicked - functionality to be implemented');
  };

  const handleLoad = () => {
    // TODO: Implement load functionality
    // This will load saved phrases from localStorage or a file
    console.log('Load clicked - functionality to be implemented');
  };

  const handleEnterRecordMode = (trackId: number) => {
    setRecordingTrackId(trackId);
  };

  const handleExitRecordMode = () => {
    setRecordingTrackId(null);
  };

  const handleClearNotes = (trackId: number, stepIndex: number) => {
    // Clear notes from a step (triggered by Control+Click)
    const newTracks = tracks.map(track => {
      if (track.id === trackId) {
        const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
        const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
        const newSteps = [...track.steps];
        
        newNotes[stepIndex] = null;
        newChords[stepIndex] = null;
        newSteps[stepIndex] = false;
        
        return { ...track, notes: newNotes, chords: newChords, steps: newSteps };
      }
      return track;
    });
    
    setTracks(newTracks);
    saveToHistory(newTracks);
  };

  const handleDragStart = (trackId: number, stepIndex: number) => {
    // Pick up notes from a step (triggered by Command+Click) - MOVE operation
    const track = tracks.find(t => t.id === trackId);
    if (track && track.notes && track.notes[stepIndex]) {
      console.log('Starting drag (move):', { trackId, stepIndex, notes: track.notes[stepIndex] });
      setDraggedNote({
        trackId,
        stepIndex,
        notes: track.notes[stepIndex]!,
        chord: track.chords?.[stepIndex] || null,
        color: track.color
      });
      setIsDragging(true);
      
      // Clear the original step (without saving to history yet)
      setTracks(prev => prev.map(t => {
        if (t.id === trackId) {
          const newNotes = t.notes ? [...t.notes] : Array(16).fill(null);
          const newChords = t.chords ? [...t.chords] : Array(16).fill(null);
          const newSteps = [...t.steps];
          
          newNotes[stepIndex] = null;
          newChords[stepIndex] = null;
          newSteps[stepIndex] = false;
          
          return { ...t, notes: newNotes, chords: newChords, steps: newSteps };
        }
        return t;
      }));
    }
  };

  const handleDuplicateStart = (trackId: number, stepIndex: number) => {
    // Copy notes from a step (triggered by Option+Click) - DUPLICATE operation
    const track = tracks.find(t => t.id === trackId);
    if (track && track.notes && track.notes[stepIndex]) {
      console.log('Starting duplicate:', { trackId, stepIndex, notes: track.notes[stepIndex] });
      setDraggedNote({
        trackId,
        stepIndex,
        notes: track.notes[stepIndex]!,
        chord: track.chords?.[stepIndex] || null,
        color: track.color
      });
      setIsDragging(true);
      
      // DON'T clear the original step - this is a copy operation
    }
  };

  const handleDragDrop = (targetTrackId: number, targetStepIndex: number) => {
    // Drop notes onto a new step
    if (!draggedNote) return;
    
    console.log('Dropping note:', { targetTrackId, targetStepIndex, draggedNote });
    
    const newTracks = tracks.map(track => {
      if (track.id === targetTrackId) {
        const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
        const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
        const newSteps = [...track.steps];
        
        newNotes[targetStepIndex] = draggedNote.notes;
        newChords[targetStepIndex] = draggedNote.chord;
        newSteps[targetStepIndex] = true;
        
        return { ...track, notes: newNotes, chords: newChords, steps: newSteps };
      }
      return track;
    });
    
    setTracks(newTracks);
    saveToHistory(newTracks);
    setDraggedNote(null);
    setIsDragging(false);
  };

  const handleDragCancel = () => {
    // Cancel drag and restore notes to original position
    if (!draggedNote) return;
    
    setTracks(prev => prev.map(track => {
      if (track.id === draggedNote.trackId) {
        const newNotes = track.notes ? [...track.notes] : Array(16).fill(null);
        const newChords = track.chords ? [...track.chords] : Array(16).fill(null);
        const newSteps = [...track.steps];
        
        newNotes[draggedNote.stepIndex] = draggedNote.notes;
        newChords[draggedNote.stepIndex] = draggedNote.chord;
        newSteps[draggedNote.stepIndex] = true;
        
        return { ...track, notes: newNotes, chords: newChords, steps: newSteps };
      }
      return track;
    }));
    
    setDraggedNote(null);
    setIsDragging(false);
  };

  const handlePhraseClick = (phraseId: number, isOptionHeld: boolean) => {
    // DUPLICATION MODE: Option+click to start dragging
    if (isOptionHeld && !isDraggingPhrase) {
      // Start dragging this phrase
      setDuplicateSourcePhrase(phraseId);
      setIsDraggingPhrase(true);
      return;
    }
    
    // DROPPING MODE: Click to drop the dragged phrase
    if (isDraggingPhrase && duplicateSourcePhrase !== null) {
      // Save current phrase first
      setPhrases(prev => {
        const newPhrases = { ...prev };
        newPhrases[activePhrase] = JSON.parse(JSON.stringify(tracks));
        
        // Copy source phrase to destination
        const sourcePhraseData = newPhrases[duplicateSourcePhrase];
        if (sourcePhraseData.length > 0) {
          newPhrases[phraseId] = JSON.parse(JSON.stringify(sourcePhraseData));
        }
        
        return newPhrases;
      });
      
      // Clear duplication mode
      setDuplicateSourcePhrase(null);
      setIsDraggingPhrase(false);
      return;
    }
    
    // NORMAL MODE: Regular phrase switching
    // If clicking the already active phrase, do nothing
    if (phraseId === activePhrase) {
      setQueuedPhrase(null); // Cancel any queued phrase
      return;
    }

    // If not playing, switch immediately
    if (!isPlaying) {
      // Save current phrase and load new phrase in a single operation
      setPhrases(prev => {
        const newPhrases = { ...prev };
        // Save current tracks to the active phrase
        newPhrases[activePhrase] = JSON.parse(JSON.stringify(tracks));
        // Initialize the new phrase with a copy of current tracks if it's empty
        if (newPhrases[phraseId].length === 0) {
          newPhrases[phraseId] = JSON.parse(JSON.stringify(tracks));
        }
        
        // Load the new phrase immediately using the updated data
        setTracks(JSON.parse(JSON.stringify(newPhrases[phraseId])));
        
        return newPhrases;
      });
      
      setActivePhrase(phraseId);
      setQueuedPhrase(null);
    } else {
      // If playing, queue the phrase change for the next cycle
      // Save current phrase and prepare new phrase immediately
      setPhrases(prev => {
        const newPhrases = { ...prev };
        newPhrases[activePhrase] = JSON.parse(JSON.stringify(tracks));
        if (newPhrases[phraseId].length === 0) {
          newPhrases[phraseId] = JSON.parse(JSON.stringify(tracks));
        }
        return newPhrases;
      });
      setQueuedPhrase(phraseId);
    }
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    // Exit recording mode when clicking the background
    if (recordingTrackId !== null) {
      handleExitRecordMode();
    }
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden" 
      style={{
        background: 'linear-gradient(155deg, #0D0D0D 10.08%, #191919 77.75%)'
      }}
      onClick={handleBackgroundClick}
    >
      <div className="flex flex-col min-h-screen" onClick={(e) => e.stopPropagation()}>
        <Header />
        
        <div className="flex-1 flex items-center justify-center px-8 py-8">
          <div className="w-full max-w-[1400px]">
            {/* Controls and LED above sequencer - aligned with sequencer structure */}
            <div className="flex items-start gap-3 mb-6 pb-8">
              {/* Spacer to match track info width */}
              <div className="w-[200px] shrink-0" />
              
              {/* Content area matching steps section - flex container like the steps */}
              <div className="flex gap-[7px] shrink-0" style={{ width: '1001px' }}>
                {/* Control Buttons - flush left with first step */}
                <div className="shrink-0">
                  <ControlButtons 
                    isPlaying={isPlaying}
                    onTogglePlay={handleTogglePlay}
                    onClear={handleClear}
                    onRandom={handleRandom}
                    onSave={handleSave}
                    onLoad={handleLoad}
                  />
                </div>
                
                {/* Spacer to push LED right and ensure minimum 32px gap */}
                <div style={{ flex: '1 1 32px', minWidth: '32px' }} />
                
                {/* LED Interface - flush right with last step */}
                <div className="shrink-0">
                  <LEDInterface 
                    volume={volume}
                    tempo={tempo}
                    swing={swing}
                    onVolumeChange={setVolume}
                    onTempoChange={setTempo}
                    onSwingChange={setSwing}
                    frequencyData={frequencyData}
                  />
                </div>
              </div>
            </div>

            <SequencerGrid 
              tracks={tracks}
              currentStep={currentStep}
              onToggleStep={toggleStep}
              onToggleMute={toggleMute}
              onOpenPianoModal={handleOpenPianoModal}
              onSelectSound={handleSelectSound}
              onArpPatternChange={handleArpPatternChange}
              onArpRateChange={handleArpRateChange}
              onArpLengthChange={handleArpLengthChange}
              recordingTrackId={recordingTrackId}
              onEnterRecordMode={handleEnterRecordMode}
              onExitRecordMode={handleExitRecordMode}
              onClearNotes={handleClearNotes}
              onDragStart={handleDragStart}
              onDuplicateStart={handleDuplicateStart}
              onDragDrop={handleDragDrop}
              onDragCancel={handleDragCancel}
              isDragging={isDragging}
              draggedNote={draggedNote}
            />
          </div>
        </div>

        <div className="pb-8 px-8">
          <div className="max-w-[1400px] mx-auto">
            {/* Bottom Control Panel - aligned with sequencer structure */}
            <div className="flex items-start gap-3 relative h-[159px]">
              {/* Spacer to match track info width */}
              <div className="w-[200px] shrink-0" />
              
              {/* Content area matching steps width exactly: 16 steps (56px each) + 15 gaps (7px each) = 1001px */}
              <div className="w-[1001px] shrink-0 relative h-full">
              {/* Left Section: Phrase and Filter/SFX */}
              <div className="absolute left-0 top-0 w-[560px]">
                {/* Phrase Section */}
                <div className="flex flex-col gap-[8px] items-start mb-[27px]">
                  <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[rgba(255,255,255,0.66)] tracking-[0.24px] uppercase leading-[1.25]">
                    PHRASE
                  </div>
                  <Phrases 
                    activePhrase={activePhrase}
                    queuedPhrase={queuedPhrase}
                    onPhraseClick={handlePhraseClick}
                    duplicateSourcePhrase={duplicateSourcePhrase}
                    isDraggingPhrase={isDraggingPhrase}
                  />
                </div>
                
                {/* Filter and SFX Section */}
                <div className="flex gap-[32px] items-start">
                  <Knob 
                    value={filter}
                    onChange={setFilter}
                    label="FILTER"
                  />
                  
                  <div className="flex-1 flex flex-col gap-[8px]">
                    <div className="font-['PP Neue Montreal Mono',sans-serif] font-medium text-[12px] text-[rgba(255,255,255,0.66)] tracking-[0.24px] uppercase leading-[1.25]">
                      SFX
                    </div>
                    <SFXButtons onCrashClick={handleCrashClick} onRiserClick={handleRiserClick} onHornClick={handleHornClick} />
                  </div>
                </div>
              </div>
              
              {/* Right Section: Effects */}
              <div className="absolute left-[630px] top-0 w-[371px]">
                <ParameterSliders 
                  tempo={tempo}
                  swing={swing}
                  reverb={reverb}
                  delay={delay}
                  delayAmount={delayAmount}
                  onTempoChange={setTempo}
                  onSwingChange={setSwing}
                  onReverbChange={setReverb}
                  onDelayChange={setDelay}
                  onDelayAmountChange={setDelayAmount}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PianoKeyboardModal 
        isOpen={isPianoModalOpen}
        onClose={() => setIsPianoModalOpen(false)}
        onApply={handleApplyChord}
        onPreviewNote={handlePreviewNote}
        trackName={selectedTrackId !== null ? tracks.find(t => t.id === selectedTrackId)?.name || '' : ''}
        currentStep={selectedStepIndex !== null ? selectedStepIndex + 1 : 1}
        existingNotes={
          selectedTrackId !== null && selectedStepIndex !== null
            ? tracks.find(t => t.id === selectedTrackId)?.notes?.[selectedStepIndex] || null
            : null
        }
      />
      
      {isDragging && draggedNote && (
        <DragGhost 
          x={cursorPosition.x}
          y={cursorPosition.y}
          notes={draggedNote.notes}
          chord={draggedNote.chord}
          color={draggedNote.color}
        />
      )}
      
      {isDraggingPhrase && duplicateSourcePhrase !== null && (
        <PhraseDragGhost 
          x={cursorPosition.x}
          y={cursorPosition.y}
          phraseNumber={duplicateSourcePhrase}
        />
      )}
    </div>
  );
}