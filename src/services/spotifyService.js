import axios from 'axios';

class SpotifyService {
  constructor() {
    // Use your API endpoint instead of direct Spotify API
    this.apiEndpoint = '/api/spotify'; // This will be your serverless function
  }

  // Get currently playing track from your API
  async getCurrentlyPlaying() {
    try {
      const response = await axios.get(this.apiEndpoint);
      
      if (response.status === 200 && response.data) {
        return response.data;
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching current track from API:', error);
      return null;
    }
  }

  // No authentication needed for visitors
  isAuthenticated() {
    return true; // Always return true since API handles auth
  }

  // No auth callback needed
  async handleAuthCallback() {
    return true;
  }

  // No tokens to clear
  clearTokens() {
    // No-op since API handles everything
  }
}

export default new SpotifyService();