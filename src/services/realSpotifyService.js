import axios from 'axios';

class SpotifyService {
  constructor() {
    // Use local direct call for development, API endpoint for production
    this.isDevelopment = import.meta.env.DEV;
  }

  // Get YOUR currently playing track
  async getCurrentlyPlaying() {
    try {
      console.log('Fetching Spotify data from API...');
      
      // Always use API endpoint for security
      const response = await axios.get('/api/spotify');
      if (response.status === 200 && response.data) {
        console.log('Received data:', response.data);
        return response.data;
      }
      return null;
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
    // REMOVED HARDCODED CREDENTIALS - USE API ENDPOINT INSTEAD
    console.error('Direct API calls disabled for security. Please use /api/spotify endpoint.');
    return { 
      isPlaying: false, 
      track: null, 
      error: 'Use production API endpoint' 
    };
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