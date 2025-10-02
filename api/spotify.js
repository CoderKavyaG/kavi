// Real Spotify API integration - shows YOUR actual currently playing music
const SPOTIFY_CLIENT_ID = 'eb02480e8e464c6b86e25bb6ff6d7260';
const SPOTIFY_CLIENT_SECRET = '833e5e422bbe4259a71bcf2d0f41aa82';

// This will be YOUR refresh token (we'll get it in setup)
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

export default async function handler(req, res) {
  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Step 1: Get fresh access token using your refresh token
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
      console.error('Token refresh failed:', await tokenResponse.text());
      return res.status(200).json({ isPlaying: false, track: null, error: 'Token refresh failed' });
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Get YOUR currently playing track
    const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    // Handle different response states
    if (spotifyResponse.status === 204) {
      // No content - you're not playing anything
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    if (!spotifyResponse.ok) {
      console.error('Spotify API error:', spotifyResponse.status, await spotifyResponse.text());
      return res.status(200).json({
        isPlaying: false,
        track: null,
        error: 'Spotify API error',
      });
    }

    const spotifyData = await spotifyResponse.json();

    // Check if data exists and has a track
    if (!spotifyData || !spotifyData.item) {
      return res.status(200).json({
        isPlaying: false,
        track: null,
      });
    }

    // Return your real track data
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
      },
      timestamp: Date.now(),
    };

    return res.status(200).json(trackData);

  } catch (error) {
    console.error('API Error:', error);
    return res.status(200).json({
      isPlaying: false,
      track: null,
      error: error.message,
    });
  }
}