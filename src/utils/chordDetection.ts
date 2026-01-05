// Map note names to semitone values
const noteToSemitone: { [key: string]: number } = {
  'C': 0, 'C#': 1, 'D': 2, 'D#': 3, 'E': 4, 'F': 5,
  'F#': 6, 'G': 7, 'G#': 8, 'A': 9, 'A#': 10, 'B': 11
};

const semitoneToNote = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

// Chord patterns (intervals from root)
const chordPatterns: { [key: string]: number[] } = {
  'Major': [0, 4, 7],
  'Minor': [0, 3, 7],
  'Diminished': [0, 3, 6],
  'Augmented': [0, 4, 8],
  'Sus2': [0, 2, 7],
  'Sus4': [0, 5, 7],
  'Major7': [0, 4, 7, 11],
  'Minor7': [0, 3, 7, 10],
  'Dominant7': [0, 4, 7, 10],
  'Diminished7': [0, 3, 6, 9],
  'Major6': [0, 4, 7, 9],
  'Minor6': [0, 3, 7, 9],
};

export function detectChord(notes: string[]): string {
  if (notes.length === 0) return '';
  if (notes.length === 1) {
    // Strip octave number if present
    return notes[0].replace(/\d+$/, '');
  }

  // Strip octave numbers from notes (e.g., "C3" -> "C")
  const notesWithoutOctaves = notes.map(note => note.replace(/\d+$/, ''));
  
  // Convert notes to semitones and sort
  const semitones = notesWithoutOctaves.map(note => noteToSemitone[note]).sort((a, b) => a - b);
  
  // Try each note as the root
  for (let i = 0; i < semitones.length; i++) {
    const root = semitones[i];
    const intervals = semitones.map(s => (s - root + 12) % 12).sort((a, b) => a - b);
    
    // Check against chord patterns
    for (const [chordType, pattern] of Object.entries(chordPatterns)) {
      if (pattern.length !== intervals.length) continue;
      
      const matches = pattern.every((interval, idx) => interval === intervals[idx]);
      if (matches) {
        const rootNote = semitoneToNote[root];
        const suffix = chordType === 'Major' ? '' : 
                      chordType === 'Minor' ? 'm' :
                      chordType === 'Diminished' ? 'dim' :
                      chordType === 'Augmented' ? 'aug' :
                      chordType === 'Sus2' ? 'sus2' :
                      chordType === 'Sus4' ? 'sus4' :
                      chordType === 'Major7' ? 'maj7' :
                      chordType === 'Minor7' ? 'm7' :
                      chordType === 'Dominant7' ? '7' :
                      chordType === 'Diminished7' ? 'dim7' :
                      chordType === 'Major6' ? '6' :
                      chordType === 'Minor6' ? 'm6' : '';
        return `${rootNote}${suffix}`;
      }
    }
  }
  
  // If no chord pattern matches, return the notes as a chord
  if (notes.length === 2) {
    return `${notes[0]}-${notes[1]}`;
  }
  
  return notes.join('-');
}

// Get frequency for a note
export function getFrequency(note: string, octave: number = 4): number {
  // Check if note already includes octave number (e.g., "C3")
  const octaveMatch = note.match(/\d+$/);
  let actualNote = note;
  let actualOctave = octave;
  
  if (octaveMatch) {
    // Note includes octave, extract both
    actualOctave = parseInt(octaveMatch[0]);
    actualNote = note.replace(/\d+$/, '');
  }
  
  const semitone = noteToSemitone[actualNote];
  
  // Validate that the note exists
  if (semitone === undefined) {
    console.error(`Invalid note: ${note}`);
    return 440; // Return A4 as fallback
  }
  
  // A4 = 440 Hz (semitone 9 in octave 4)
  const a4Frequency = 440;
  const semitonesFromA4 = (actualOctave - 4) * 12 + (semitone - 9);
  return a4Frequency * Math.pow(2, semitonesFromA4 / 12);
}