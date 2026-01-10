import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import tracksRouter from './routes/tracks.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const allowedOrigins = [
  process.env.FRONTEND_URL,       // if set
  'http://localhost:3000',
  'http://localhost:5173',
].filter(Boolean);

console.log('CORS allowed origins:', allowedOrigins);

// Middleware
app.use(cors({
  origin: (origin, cb) => {
    // allow curl/postman/no-origin requests
    if (!origin) return cb(null, true);
    if (allowedOrigins.includes(origin)) return cb(null, true);
    return cb(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API routes
app.use('/api/tracks', tracksRouter);
app.use("/tracks", tracksRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

app.get("/__version", (req, res) => {
  res.json({
    commit: process.env.RENDER_GIT_COMMIT || null,
    service: process.env.RENDER_SERVICE_NAME || null,
    hasTracksMount: true,
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log('SERVER.JS LOADED OK');
  console.log(`Server running on port ${PORT}`);
  console.log(`Frontend URL: ${process.env.FRONTEND_URL || 'not set'}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

