# 🚀 Automatic Spotify Integration Setup

## This setup eliminates ALL browser authentication - visitors see your music automatically!

### ⚡ Quick Setup (5 minutes):

## Step 1: Get Your Refresh Token (One-Time)

1. **Add setup redirect URI to Spotify app:**
   - Go to: https://developer.spotify.com/dashboard
   - Edit your app
   - Add redirect URI: `https://coderkavyag.me/setup`

2. **Get authorization code:**
   - Run: `node scripts/getRefreshToken.js`
   - Follow the printed URL and authorize
   - Copy the code from redirect URL

3. **Get refresh token:**
   - Run: `node scripts/getRefreshToken.js YOUR_AUTHORIZATION_CODE`
   - Copy the refresh token

## Step 2: Add Environment Variable to Vercel

1. **Go to Vercel Dashboard**
2. **Add environment variable:**
   - Name: `SPOTIFY_REFRESH_TOKEN`
   - Value: `YOUR_REFRESH_TOKEN_FROM_STEP_1`

## Step 3: Deploy

```bash
git add .
git commit -m "Add automatic Spotify integration"
git push
```

## 🎵 How It Works:

### ✅ **What Visitors See:**
- **Playing music**: Full track info with album art, progress bar, preview play button
- **Not playing**: "Offline - Not currently listening"
- **No authentication required** - completely automatic!

### ⚙️ **Technical Details:**
- **Serverless API** (`/api/spotify`) handles all authentication
- **Auto-refreshes tokens** server-side
- **Updates every 10 seconds** for real-time status
- **No client secrets** exposed to frontend
- **CORS enabled** for your domain

### 🔐 **Security:**
- **Client secret** only on server
- **Refresh token** securely stored in Vercel environment
- **No localStorage** or browser authentication needed
- **API rate limits** respected

### 🎯 **API Endpoint:**
- **URL**: `https://coderkavyag.me/api/spotify`
- **Method**: GET
- **Response**: Current track data or null if offline
- **Rate limit**: Safe for frequent polling

## 🐛 Troubleshooting:

### Common Issues:
1. **"Failed to fetch"**: Check Vercel environment variable is set
2. **"Refresh token invalid"**: Re-run setup steps to get new token
3. **"CORS error"**: API should auto-handle CORS for your domain

### Debug:
- Check Vercel function logs for API errors
- Browser console shows fetch attempts
- API returns error messages for debugging

## 🔄 Token Refresh:
- **Automatic**: Server handles token refresh transparently
- **No user interaction**: Visitors never see auth flows
- **Persistent**: Once set up, works indefinitely

---

**After setup, your Spotify widget will show real-time music status automatically to all visitors with ZERO authentication required!** 🎵