import type { AppState } from './saveLoad';

export interface LocalSave {
  id: string;
  title: string;
  djName: string;
  createdAt: number; // timestamp
  state: AppState;
}

const STORAGE_KEY = 'rendy:saves';
const MAX_SAVES = 50;

/**
 * Generate a unique ID for a save
 */
function generateUniqueId(): string {
  // Try crypto.randomUUID() first (modern browsers)
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  // Fallback to Date.now() + Math.random() for uniqueness
  return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Get all saves from localStorage
 */
function getAllSaves(): LocalSave[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
}

/**
 * Save all saves to localStorage
 */
function saveAllSaves(saves: LocalSave[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saves));
  } catch (error) {
    console.error('[localStorage] Failed to save:', error);
    throw error;
  }
}

/**
 * Save state to localStorage
 */
export function saveToLocalStorage(title: string, djName: string, state: AppState): string {
  const id = generateUniqueId();
  const createdAt = Date.now();
  
  const newSave: LocalSave = {
    id,
    title: title.trim(),
    djName: djName.trim(),
    createdAt,
    state,
  };

  // Get existing saves
  const allSaves = getAllSaves();
  
  // Prepend new save (most recent first)
  allSaves.unshift(newSave);
  
  // Keep only the most recent 50 saves
  const trimmedSaves = allSaves.slice(0, MAX_SAVES);
  
  // Remove any saves beyond the limit
  if (allSaves.length > MAX_SAVES) {
    // Clean up old saves (though they're already removed from array)
    // This is just for safety - the array slice handles it
  }
  
  // Save back to localStorage
  saveAllSaves(trimmedSaves);
  
  return id;
}

/**
 * Load state from localStorage by ID
 */
export function loadFromLocalStorage(id: string): LocalSave | null {
  try {
    const allSaves = getAllSaves();
    return allSaves.find(save => save.id === id) || null;
  } catch {
    return null;
  }
}

/**
 * List all local saves (already sorted by most recent first)
 */
export function listLocalSaves(): LocalSave[] {
  return getAllSaves(); // Already sorted (newest first) since we prepend
}

/**
 * Delete a local save
 */
export function deleteLocalSave(id: string): boolean {
  try {
    const allSaves = getAllSaves();
    const filtered = allSaves.filter(save => save.id !== id);
    saveAllSaves(filtered);
    return true;
  } catch {
    return false;
  }
}
