import axios from 'axios';

class SpotifyService {
  constructor() {
    // Use local direct call for development, API endpoint for production
    this.isDevelopment = import.meta.env.DEV;
  }

  // Get YOUR currently playing track
  async getCurrentlyPlaying() {
    try {
      console.log('Fetching real Spotify data...');
      
      if (this.isDevelopment) {
        // For local development, call Spotify API directly
        return await this.fetchSpotifyDataDirectly();
      } else {
        // For production, use the API endpoint
        const response = await axios.get('/api/spotify');
        if (response.status === 200 && response.data) {
          console.log('Received data:', response.data);
          return response.data;
        }
        return null;
      }
    } catch (error) {
      console.error('Error fetching current track:', error);
      
      // Fallback to show that we're trying to connect
      return {
        isPlaying: false,
        track: null,
        error: 'Connecting to Spotify...'
      };
    }
  }

  // Direct Spotify API call for development
  async fetchSpotifyDataDirectly() {
    // In development, use environment variables for security
    const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID || 'eb02480e8e464c6b86e25bb6ff6d7260';
    const SPOTIFY_CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET || '833e5e422bbe4259a71bcf2d0f41aa82';
    const SPOTIFY_REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN || 'AQDttFnuU2wQMt420KeHXIQT19cwK0XquX30jlKVXEVlYciLbPwCstTFyfhO3oeU11UKwb7DfmJN0daohc9RMiJw99LtWgCaYFv8N9GALj9cfg1RjoHPKPx6drLSksofN3g';

    try {
      // Step 1: Get fresh access token
      const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: SPOTIFY_REFRESH_TOKEN,
        }),
      });

      if (!tokenResponse.ok) {
        console.error('Token refresh failed');
        return { isPlaying: false, track: null, error: 'Token refresh failed' };
      }

      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;

      // Step 2: Get currently playing track
      const spotifyResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      // Handle different response states
      if (spotifyResponse.status === 204) {
        return { isPlaying: false, track: null };
      }

      if (!spotifyResponse.ok) {
        console.error('Spotify API error:', spotifyResponse.status);
        return { isPlaying: false, track: null, error: 'Spotify API error' };
      }

      const spotifyData = await spotifyResponse.json();

      if (!spotifyData || !spotifyData.item) {
        return { isPlaying: false, track: null };
      }

      // Return track data
      return {
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

    } catch (error) {
      console.error('Direct Spotify API Error:', error);
      return { isPlaying: false, track: null, error: error.message };
    }
  }

  // Always return true since API handles auth
  isAuthenticated() {
    return true;
  }

  // No auth callback needed
  async handleAuthCallback() {
    return true;
  }

  // No tokens to clear
  clearTokens() {
    // No-op
  }
}

export default new SpotifyService();