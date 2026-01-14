import express from 'express';
import { pool } from '../db/connection.js';
import { generateUniqueSlug } from '../utils/slug.js';

const router = express.Router();

/**
 * POST /api/tracks
 * Create a new track
 */
router.post('/', async (req, res) => {
  try {
    const { title, dj_name, state } = req.body;

    // Validate required fields
    if (!title || !dj_name || !state) {
      return res.status(400).json({
        message: 'Missing required fields: title, dj_name, and state are required'
      });
    }

    // Validate title and dj_name are strings
    if (typeof title !== 'string' || typeof dj_name !== 'string') {
      return res.status(400).json({
        message: 'title and dj_name must be strings'
      });
    }

    // Validate title and dj_name length
    if (title.trim().length === 0 || title.length > 255) {
      return res.status(400).json({
        message: 'title must be between 1 and 255 characters'
      });
    }

    if (dj_name.trim().length === 0 || dj_name.length > 255) {
      return res.status(400).json({
        message: 'dj_name must be between 1 and 255 characters'
      });
    }

    // Validate state is an object
    if (typeof state !== 'object' || state === null || Array.isArray(state)) {
      return res.status(400).json({
        message: 'state must be an object'
      });
    }

    // Generate unique slug
    const slug = await generateUniqueSlug(pool);

    // Insert into database
    const result = await pool.query(
      'INSERT INTO tracks (slug, title, dj_name, state) VALUES ($1, $2, $3, $4) RETURNING slug, title, dj_name, created_at',
      [slug, title.trim(), dj_name.trim(), JSON.stringify(state)]
    );

    const track = result.rows[0];
    res.status(201).json({
      slug: track.slug,
      title: track.title,
      dj_name: track.dj_name,
      created_at: track.created_at
    });
  } catch (error) {
    console.error('Error creating track:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * GET /api/tracks
 * List all tracks (with pagination)
 * NOTE: This route must come BEFORE /:slug to avoid matching conflicts
 */
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50;
    const offset = parseInt(req.query.offset) || 0;

    // Validate limit and offset
    if (limit < 1 || limit > 100) {
      return res.status(400).json({
        message: 'limit must be between 1 and 100'
      });
    }

    if (offset < 0) {
      return res.status(400).json({
        message: 'offset must be >= 0'
      });
    }

    const result = await pool.query(
      'SELECT slug, title, dj_name, created_at FROM tracks ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    res.json(result.rows);
  } catch (error) {
    console.error('Error listing tracks:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

/**
 * GET /api/tracks/:slug
 * Get a track by slug
 * NOTE: This route must come AFTER / to avoid matching conflicts
 */
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const result = await pool.query(
      'SELECT slug, title, dj_name, state, created_at FROM tracks WHERE slug = $1',
      [slug]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: 'Track not found'
      });
    }

    const track = result.rows[0];
    res.json({
      slug: track.slug,
      title: track.title,
      dj_name: track.dj_name,
      state: track.state, // Already parsed from JSONB
      created_at: track.created_at
    });
  } catch (error) {
    console.error('Error fetching track:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;

