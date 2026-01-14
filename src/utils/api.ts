import type { AppState } from './saveLoad';

// VITE_API_URL is the primary base URL (no hardcoded /api suffix)
// Normalize trailing slashes and fallback to Render URL only if VITE_API_URL is missing
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    // Normalize trailing slash: remove if present
    return envUrl.replace(/\/+$/, '');
  }
  // Fallback to Render production URL (only if VITE_API_URL is missing)
  return 'https://rendy-rhythmbox-api.onrender.com';
};

const API_BASE_URL = getApiBaseUrl();

export interface SavedTrack {
  slug: string;
  title: string;
  dj_name: string;
  created_at: string;
}

export interface SavedTrackWithState extends SavedTrack {
  state: AppState;
}

export interface SaveTrackResponse {
  slug: string;
  title: string;
  dj_name: string;
  created_at: string;
}

/**
 * Save track to API
 */
export async function saveTrack(
  title: string,
  djName: string,
  state: AppState
): Promise<SaveTrackResponse> {
  const url = `${API_BASE_URL}/api/tracks`;
  console.log('[api.ts] saveTrack - URL:', url, 'Method: POST');
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      dj_name: djName,
      state,
    }),
  });

  console.log('[api.ts] saveTrack - HTTP Status:', response.status);

  if (!response.ok) {
    const contentType = response.headers.get('content-type');
    const error = contentType?.includes('application/json')
      ? await response.json().catch(() => ({ message: 'Failed to save track' }))
      : { message: 'Failed to save track' };
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    throw new Error('Invalid response format from server');
  }

  return response.json();
}

/**
 * Load track from API by slug
 */
export async function loadTrack(slug: string): Promise<SavedTrackWithState> {
  const url = `${API_BASE_URL}/api/tracks/${slug}`;
  console.log('[api.ts] loadTrack - URL:', url, 'Method: GET');
  
  const response = await fetch(url);

  console.log('[api.ts] loadTrack - HTTP Status:', response.status);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Track not found');
    }
    const contentType = response.headers.get('content-type');
    const error = contentType?.includes('application/json')
      ? await response.json().catch(() => ({ message: 'Failed to load track' }))
      : { message: 'Failed to load track' };
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    throw new Error('Invalid response format from server');
  }

  return response.json();
}

/**
 * List all tracks from API
 */
export async function listTracks(limit: number = 50, offset: number = 0): Promise<SavedTrack[]> {
  const url = `${API_BASE_URL}/api/tracks?limit=${limit}&offset=${offset}`;
  console.log('[api.ts] listTracks - URL:', url, 'Method: GET');
  
  const response = await fetch(url);

  console.log('[api.ts] listTracks - HTTP Status:', response.status);

  if (!response.ok) {
    const contentType = response.headers.get('content-type');
    const error = contentType?.includes('application/json')
      ? await response.json().catch(() => ({ message: 'Failed to list tracks' }))
      : { message: 'Failed to list tracks' };
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    throw new Error('Invalid response format from server');
  }

  return response.json();
}

