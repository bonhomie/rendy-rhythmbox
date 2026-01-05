/**
 * Parse slug from URL hash
 * Example: "#track-example-name" -> "example-name"
 */
export function parseHash(): string | null {
  const hash = window.location.hash;
  if (!hash || !hash.startsWith('#track-')) {
    return null;
  }
  
  return hash.substring(7); // Remove "#track-"
}

/**
 * Set URL hash with track slug
 */
export function setHash(slug: string): void {
  window.location.hash = `#track-${slug}`;
}

/**
 * Clear URL hash
 */
export function clearHash(): void {
  window.location.hash = '';
  // Use history API to remove hash without reload
  if (window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

/**
 * Get shareable URL with hash
 */
export function getShareableUrl(slug: string): string {
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}#track-${slug}`;
}

/**
 * Copy shareable URL to clipboard
 */
export async function copyShareableUrl(slug: string): Promise<boolean> {
  try {
    const url = getShareableUrl(slug);
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    // Fallback for older browsers
    try {
      const url = getShareableUrl(slug);
      const textArea = document.createElement('textarea');
      textArea.value = url;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch {
      return false;
    }
  }
}

