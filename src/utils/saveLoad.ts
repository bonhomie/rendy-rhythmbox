import type { TrackData } from '../App';

// Legacy SavedState interface (for backward compatibility with old string-based saves)
export interface SavedState {
  version: string | number;
  phrases: Record<number, TrackData[]>;
  tempo: number;
  swing: number;
  reverb: number;
  delay: number;
  delayAmount: number;
  filter: number;
  volume: number;
  activePhrase: number;
}

const CURRENT_VERSION = 1;

export interface AppState {
  version?: number; // Optional for backward compatibility
  phrases: Record<number, TrackData[]>;
  tempo: number;
  swing: number;
  reverb: number;
  delay: number;
  delayAmount: number;
  filter: number;
  volume: number;
  activePhrase: number;
}

/**
 * Serialize the complete app state to an AppState object (deep cloned)
 */
export function serializeState(state: AppState): AppState {
  // Deep clone the phrases to ensure we capture the current state
  const clonedPhrases: Record<number, TrackData[]> = {};
  for (let i = 1; i <= 3; i++) {
    if (state.phrases[i]) {
      clonedPhrases[i] = JSON.parse(JSON.stringify(state.phrases[i]));
    } else {
      clonedPhrases[i] = [];
    }
  }

  return {
    version: CURRENT_VERSION,
    phrases: clonedPhrases,
    tempo: state.tempo,
    swing: state.swing,
    reverb: state.reverb,
    delay: state.delay,
    delayAmount: state.delayAmount,
    filter: state.filter,
    volume: state.volume,
    activePhrase: state.activePhrase,
  };
}

/**
 * Deserialize state (accepts either AppState object or JSON string for backward compatibility)
 */
export function deserializeState(stateOrJson: AppState | string): AppState {
  let savedState: SavedState | AppState;
  
  try {
    // If it's a string, parse it; otherwise use it directly
    if (typeof stateOrJson === 'string') {
      savedState = JSON.parse(stateOrJson) as SavedState;
    } else {
      savedState = stateOrJson as AppState;
    }
    
    // Handle legacy format with version string
    const version = typeof (savedState as SavedState).version === 'string' 
      ? parseFloat((savedState as SavedState).version) 
      : (savedState as AppState).version || 1;

    // Validate required fields
    if (!savedState.phrases || typeof savedState.phrases !== 'object') {
      throw new Error('Invalid state: missing or invalid phrases');
    }

    // Deep clone and normalize phrases to array format
    // Support both: phrases["1"] = Track[] (array) OR phrases["1"] = { tracks: Track[] } (object)
    const phrases: Record<number, TrackData[]> = {};
    for (let i = 1; i <= 3; i++) {
      const phraseData = savedState.phrases[i];
      if (Array.isArray(phraseData)) {
        // Format A: phrases["1"] = Track[] (array form)
        phrases[i] = JSON.parse(JSON.stringify(phraseData));
      } else if (phraseData && typeof phraseData === 'object' && 'tracks' in phraseData && Array.isArray(phraseData.tracks)) {
        // Format B: phrases["1"] = { tracks: Track[] } (object form)
        phrases[i] = JSON.parse(JSON.stringify(phraseData.tracks));
      } else {
        // Empty or invalid phrase
        phrases[i] = [];
      }
    }

    return {
      version: CURRENT_VERSION,
      phrases,
      tempo: typeof savedState.tempo === 'number' ? savedState.tempo : 102,
      swing: typeof savedState.swing === 'number' ? savedState.swing : 0,
      reverb: typeof savedState.reverb === 'number' ? savedState.reverb : 0,
      delay: typeof savedState.delay === 'number' ? savedState.delay : 0,
      delayAmount: typeof savedState.delayAmount === 'number' ? savedState.delayAmount : 60,
      filter: typeof savedState.filter === 'number' ? savedState.filter : 0,
      volume: typeof savedState.volume === 'number' ? savedState.volume : 80,
      activePhrase: typeof savedState.activePhrase === 'number' && savedState.activePhrase >= 1 && savedState.activePhrase <= 3 
        ? savedState.activePhrase 
        : 1,
    };
  } catch (error) {
    throw new Error(`Failed to deserialize state: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Normalize and validate state - accepts various formats and normalizes to canonical format
 * Returns normalized state and validation result
 */
export function normalizeAndValidateState(state: AppState): { state: AppState; valid: boolean; error?: string } {
  try {
    // Check phrases exist
    if (!state.phrases || typeof state.phrases !== 'object') {
      return { state, valid: false, error: 'missing phrases' };
    }

    // Normalize phrases - support both array and object forms
    const normalizedPhrases: Record<number, TrackData[]> = {};
    for (let i = 1; i <= 3; i++) {
      const phraseData = state.phrases[i];
      if (Array.isArray(phraseData)) {
        // Format A: phrases["1"] = Track[] (array form)
        normalizedPhrases[i] = JSON.parse(JSON.stringify(phraseData));
      } else if (phraseData && typeof phraseData === 'object' && 'tracks' in phraseData && Array.isArray(phraseData.tracks)) {
        // Format B: phrases["1"] = { tracks: Track[] } (object form)
        normalizedPhrases[i] = JSON.parse(JSON.stringify(phraseData.tracks));
      } else {
        // Empty phrase is valid
        normalizedPhrases[i] = [];
      }
    }

    // Determine active phrase (normalize to 1-3)
    const activePhrase = typeof state.activePhrase === 'number' && state.activePhrase >= 1 && state.activePhrase <= 3
      ? state.activePhrase
      : 1;

    // Critical validation: active phrase must resolve to an array (can be empty, but must exist)
    if (!Array.isArray(normalizedPhrases[activePhrase])) {
      return { state, valid: false, error: `phrases[${activePhrase}] not array` };
    }

    // Normalize optional fields with defaults (don't reject for invalid ranges, just clamp)
    const normalizedState: AppState = {
      version: state.version || CURRENT_VERSION,
      phrases: normalizedPhrases,
      tempo: typeof state.tempo === 'number' ? Math.max(60, Math.min(200, state.tempo)) : 102,
      swing: typeof state.swing === 'number' ? Math.max(0, Math.min(80, state.swing)) : 0,
      reverb: typeof state.reverb === 'number' ? Math.max(0, Math.min(100, state.reverb)) : 0,
      delay: typeof state.delay === 'number' ? Math.max(0, Math.min(2000, state.delay)) : 0, // Delay is in milliseconds, max 2000ms (2 seconds)
      delayAmount: typeof state.delayAmount === 'number' ? Math.max(0, Math.min(100, state.delayAmount)) : 60,
      filter: typeof state.filter === 'number' ? Math.max(-1, Math.min(1, state.filter)) : 0,
      // Clamp volume to safe max of 80 (maps to masterGain=0.32) to prevent clipping
      volume: typeof state.volume === 'number' ? Math.max(0, Math.min(80, state.volume)) : 80,
      activePhrase,
    };

    return { state: normalizedState, valid: true };
  } catch (error) {
    return { state, valid: false, error: `normalization error: ${error instanceof Error ? error.message : 'Unknown error'}` };
  }
}

/**
 * Validate that a state object has all required fields (legacy - kept for backward compatibility)
 */
export function validateState(state: AppState): boolean {
  const result = normalizeAndValidateState(state);
  return result.valid;
}

