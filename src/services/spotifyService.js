import axios from 'axios';

class SpotifyService {
  constructor() {
    this.clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    this.clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
    this.redirectUri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
    this.accessToken = localStorage.getItem('spotify_access_token');
    this.refreshToken = localStorage.getItem('spotify_refresh_token');
    this.tokenExpiry = localStorage.getItem('spotify_token_expiry');
  }

  // Generate authorization URL
  getAuthUrl() {
    const scope = 'user-read-currently-playing user-read-playback-state';
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    
    authUrl.searchParams.append('client_id', this.clientId);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', this.redirectUri);
    authUrl.searchParams.append('scope', scope);
    authUrl.searchParams.append('show_dialog', 'false');
    
    return authUrl.toString();
  }

  // Exchange authorization code for access token
  async getAccessToken(code) {
    try {
      const response = await axios.post('https://accounts.spotify.com/api/token', 
        new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: this.redirectUri,
          client_id: this.clientId,
          client_secret: this.clientSecret,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token, refresh_token, expires_in } = response.data;
      const expiryTime = Date.now() + (expires_in * 1000);

      // Store tokens
      localStorage.setItem('spotify_access_token', access_token);
      localStorage.setItem('spotify_refresh_token', refresh_token);
      localStorage.setItem('spotify_token_expiry', expiryTime.toString());

      this.accessToken = access_token;
      this.refreshToken = refresh_token;
      this.tokenExpiry = expiryTime.toString();

      return access_token;
    } catch (error) {
      console.error('Error getting access token:', error);
      throw error;
    }
  }

  // Refresh access token
  async refreshAccessToken() {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    try {
      const response = await axios.post('https://accounts.spotify.com/api/token',
        new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: this.refreshToken,
          client_id: this.clientId,
          client_secret: this.clientSecret,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );

      const { access_token, expires_in } = response.data;
      const expiryTime = Date.now() + (expires_in * 1000);

      localStorage.setItem('spotify_access_token', access_token);
      localStorage.setItem('spotify_token_expiry', expiryTime.toString());

      this.accessToken = access_token;
      this.tokenExpiry = expiryTime.toString();

      return access_token;
    } catch (error) {
      console.error('Error refreshing token:', error);
      this.clearTokens();
      throw error;
    }
  }

  // Check if token is valid and refresh if needed
  async ensureValidToken() {
    if (!this.accessToken) {
      return false;
    }

    const now = Date.now();
    const expiry = parseInt(this.tokenExpiry);

    // If token expires in less than 5 minutes, refresh it
    if (now >= expiry - 300000) {
      try {
        await this.refreshAccessToken();
        return true;
      } catch (error) {
        return false;
      }
    }

    return true;
  }

  // Get currently playing track
  async getCurrentlyPlaying() {
    const isValidToken = await this.ensureValidToken();
    if (!isValidToken) {
      return null;
    }

    try {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${this.accessToken}`,
        },
      });

      if (response.status === 204 || !response.data) {
        return null; // Nothing is currently playing
      }

      return {
        isPlaying: response.data.is_playing,
        track: {
          id: response.data.item.id,
          name: response.data.item.name,
          artists: response.data.item.artists.map(artist => artist.name).join(', '),
          album: response.data.item.album.name,
          albumArt: response.data.item.album.images[0]?.url,
          previewUrl: response.data.item.preview_url,
          externalUrl: response.data.item.external_urls.spotify,
          duration: response.data.item.duration_ms,
          progress: response.data.progress_ms,
        },
        device: {
          name: response.data.device?.name,
          type: response.data.device?.type,
        }
      };
    } catch (error) {
      if (error.response?.status === 401) {
        // Token is invalid, try to refresh
        try {
          await this.refreshAccessToken();
          return this.getCurrentlyPlaying();
        } catch (refreshError) {
          console.error('Failed to refresh token:', refreshError);
          return null;
        }
      }
      console.error('Error fetching currently playing:', error);
      return null;
    }
  }

  // Clear stored tokens
  clearTokens() {
    localStorage.removeItem('spotify_access_token');
    localStorage.removeItem('spotify_refresh_token');
    localStorage.removeItem('spotify_token_expiry');
    this.accessToken = null;
    this.refreshToken = null;
    this.tokenExpiry = null;
  }

  // Check if user is authenticated
  isAuthenticated() {
    return !!this.accessToken && !!this.refreshToken;
  }

  // Handle auth callback
  async handleAuthCallback() {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const error = urlParams.get('error');

    if (error) {
      console.error('Spotify auth error:', error);
      return false;
    }

    if (code) {
      try {
        await this.getAccessToken(code);
        // Clean up URL
        window.history.replaceState({}, document.title, window.location.pathname);
        return true;
      } catch (error) {
        console.error('Failed to get access token:', error);
        return false;
      }
    }

    return false;
  }
}

export default new SpotifyService();