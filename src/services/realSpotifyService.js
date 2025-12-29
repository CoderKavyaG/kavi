import axios from 'axios';

class SpotifyService {
  constructor() {
    this.isDevelopment = import.meta.env.DEV;
  }

  async getCurrentlyPlaying() {
    try {
      // Try to fetch from API endpoint (works in production on Vercel)
      const response = await axios.get('/api/spotify', {
        timeout: 5000
      });
      if (response.status === 200 && response.data) {
        return response.data;
      }
      return this.getOfflineState();
    } catch (error) {
      console.warn('API endpoint not available:', error.message);
      // Fallback for development - show offline state
      return this.getOfflineState();
    }
  }

  getOfflineState() {
    return {
      isPlaying: false,
      track: null,
      error: 'Spotify offline - Deploy to Vercel to enable'
    };
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