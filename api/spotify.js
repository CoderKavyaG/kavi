// Serverless function for Spotify integration
// This runs on the server and handles authentication automatically

const SPOTIFY_CLIENT_ID = 'eb02480e8e464c6b86e25bb6ff6d7260';
const SPOTIFY_CLIENT_SECRET = '833e5e422bbe4259a71bcf2d0f41aa82';

// Your refresh token (you'll get this once)
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Get access token using refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: SPOTIFY_REFRESH_TOKEN,
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to get access token');
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Get currently playing track
    const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (spotifyResponse.status === 204 || !spotifyResponse.ok) {
      // Nothing playing or error
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    const spotifyData = await spotifyResponse.json();

    if (!spotifyData || !spotifyData.item) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    // Return formatted track data
    const trackData = {
      isPlaying: spotifyData.is_playing,
      track: {
        id: spotifyData.item.id,
        name: spotifyData.item.name,
        artists: spotifyData.item.artists.map(artist => artist.name).join(', '),
        album: spotifyData.item.album.name,
        albumArt: spotifyData.item.album.images[0]?.url,
        previewUrl: spotifyData.item.preview_url,
        externalUrl: spotifyData.item.external_urls.spotify,
        duration: spotifyData.item.duration_ms,
        progress: spotifyData.progress_ms,
      },
      device: {
        name: spotifyData.device?.name,
        type: spotifyData.device?.type,
      }
    };

    return res.status(200).json(trackData);

  } catch (error) {
    console.error('Spotify API error:', error);
    return res.status(200).json({
      isPlaying: false,
      track: null,
      error: error.message,
    });
  }
}