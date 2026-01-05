# Deployment Guide for Render.com

This guide covers deploying both the frontend and backend of Rendy Rhythmbox to Render.com.

## Prerequisites

- Render.com account
- GitHub repository with your code
- PostgreSQL database (can be created via Render)

## Frontend Deployment

1. **Create a new Static Site on Render**
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Environment variables:
     - `VITE_API_URL`: Your backend API URL (e.g., `https://your-backend.onrender.com`)

2. **Build Settings**
   - Node version: 18 or higher
   - Install command: `npm install`

## Backend Deployment

1. **Create a new Web Service on Render**
   - Connect your GitHub repository
   - Root directory: `backend`
   - Build command: `npm install`
   - Start command: `npm start`
   - Environment: `Node`

2. **Environment Variables**
   - `DATABASE_URL`: Your PostgreSQL connection string (from Render Postgres)
   - `PORT`: `10000` (Render's default, or leave unset)
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your frontend URL (e.g., `https://your-frontend.onrender.com`)

3. **Database Setup**
   - Create a PostgreSQL database on Render
   - Copy the Internal Database URL
   - Run the schema: Connect to your database and run `backend/db/schema.sql`
   - Update `DATABASE_URL` in your backend service with the Internal Database URL

## Database Schema Setup

After creating the PostgreSQL database on Render:

1. Get the database connection details from Render dashboard
2. Connect using `psql` or a database client
3. Run the schema file:
   ```bash
   psql $DATABASE_URL < backend/db/schema.sql
   ```

Or use Render's database console to run the SQL from `backend/db/schema.sql`.

## Testing

1. **Frontend**: Visit your frontend URL
2. **Backend Health**: Visit `https://your-backend.onrender.com/health`
3. **Save a track**: Use the Save button to test API connectivity
4. **Load a track**: Use the Load button to verify data retrieval
5. **Share a track**: Copy the shareable URL and test loading it in a new tab

## Troubleshooting

### Backend Issues
- Check logs in Render dashboard
- Verify `DATABASE_URL` is correct
- Ensure schema has been run
- Check CORS settings match frontend URL

### Frontend Issues
- Verify `VITE_API_URL` is set correctly
- Check browser console for API errors
- Ensure backend is running and accessible

### Database Issues
- Verify connection string format
- Check database is running
- Ensure schema tables exist
- Check database user permissions

## Environment Variables Summary

### Frontend (.env or Render)
```
VITE_API_URL=https://your-backend.onrender.com
```

### Backend (.env or Render)
```
DATABASE_URL=postgresql://user:password@host:port/database
PORT=10000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.onrender.com
```

