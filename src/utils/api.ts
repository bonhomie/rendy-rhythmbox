import type { AppState } from './saveLoad';

// Use VITE_API_URL if set, otherwise fallback to same-origin /api
// If VITE_API_URL already ends with /api, use it as-is; otherwise append /api
const getApiBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl) {
    return envUrl.endsWith('/api') ? envUrl : `${envUrl}/api`;
  }
  return typeof window !== 'undefined' ? `${window.location.origin}/api` : 'http://localhost:3001/api';
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
  const url = `${API_BASE_URL}/tracks`;
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
  const url = `${API_BASE_URL}/tracks/${slug}`;
  const response = await fetch(url);

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
  const url = `${API_BASE_URL}/tracks?limit=${limit}&offset=${offset}`;
  const response = await fetch(url);

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

