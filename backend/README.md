# Rendy Rhythmbox Backend API

Backend API for the Rendy Rhythmbox sequencer application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Update `.env` with your database connection string and configuration.

4. Set up the database:
```bash
# Connect to your PostgreSQL database and run:
psql -d your_database < db/schema.sql
```

5. Start the server:
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 3001)
- `NODE_ENV`: Environment (development/production)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:5173)

## API Endpoints

### POST /api/tracks
Create a new track.

**Request Body:**
```json
{
  "title": "My Track",
  "dj_name": "DJ Name",
  "state": { ... }
}
```

**Response:**
```json
{
  "slug": "track-abc123",
  "title": "My Track",
  "dj_name": "DJ Name",
  "created_at": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/tracks/:slug
Get a track by slug.

**Response:**
```json
{
  "slug": "track-abc123",
  "title": "My Track",
  "dj_name": "DJ Name",
  "state": { ... },
  "created_at": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/tracks
List all tracks with pagination.

**Query Parameters:**
- `limit`: Number of tracks to return (default: 50, max: 100)
- `offset`: Number of tracks to skip (default: 0)

**Response:**
```json
[
  {
    "slug": "track-abc123",
    "title": "My Track",
    "dj_name": "DJ Name",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
]
```

## Deployment on Render

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd backend && npm install`
4. Set start command: `cd backend && npm start`
5. Add environment variables in Render dashboard
6. Add a PostgreSQL database and connect it
7. Run the schema.sql file on the database

