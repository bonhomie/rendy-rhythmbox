import { nanoid } from 'nanoid';

/**
 * Generate a unique URL-safe slug
 * Format: track-{random-id}
 */
export function generateSlug() {
  // Generate a short random ID (10 characters)
  const randomId = nanoid(10);
  return `track-${randomId}`;
}

/**
 * Check if a slug is unique in the database
 */
export async function isSlugUnique(pool, slug) {
  const result = await pool.query('SELECT id FROM tracks WHERE slug = $1', [slug]);
  return result.rows.length === 0;
}

/**
 * Generate a unique slug, checking against database
 */
export async function generateUniqueSlug(pool) {
  let slug = generateSlug();
  let attempts = 0;
  const maxAttempts = 10;

  while (!(await isSlugUnique(pool, slug)) && attempts < maxAttempts) {
    slug = generateSlug();
    attempts++;
  }

  if (attempts >= maxAttempts) {
    throw new Error('Failed to generate unique slug after multiple attempts');
  }

  return slug;
}

