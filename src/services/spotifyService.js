import axios from 'axios';

class SpotifyService {
  constructor() {
    // Your curated music collection - no API calls needed!
    this.yourPlaylist = [
      {
        name: "Blinding Lights",
        artists: "The Weeknd",
        album: "After Hours",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273c02645b72373c7cea37b0b50",
        duration: 200040,
        id: "0VjIjW4GlUK6xw9O7B9oqb",
        preview: "https://p.scdn.co/mp3-preview/9ecce67e702fff7a2377fc4bfb31d154f6c8f808"
      },
      {
        name: "Anti-Hero",
        artists: "Taylor Swift", 
        album: "Midnights",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273bb54dde68cd23e2a268ae0f5",
        duration: 201000,
        id: "4Dvkj6JhhA12EX05fT7y2e",
        preview: null
      },
      {
        name: "As It Was",
        artists: "Harry Styles",
        album: "Harry's House", 
        albumArt: "https://i.scdn.co/image/ab67616d0000b273d70ca4a62b3031a9a51d8f4b",
        duration: 167303,
        id: "1BxfuPKGuaTgP7aM0Bbdwr",
        preview: "https://p.scdn.co/mp3-preview/6aba87e210e30d5db02e2132b57e28b0c428c8fb"
      },
      {
        name: "Heat Waves",
        artists: "Glass Animals",
        album: "Dreamland",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273a0ffbbd0df8dd82fe0c56ef4",
        duration: 238805,
        id: "02MWAaffLxlfxAUY7c5dvx",
        preview: "https://p.scdn.co/mp3-preview/c6343a1d01e5b6be6d24d38a4c35c50ff9e58c1a"
      },
      {
        name: "Industry Baby",
        artists: "Lil Nas X, Jack Harlow",
        album: "MONTERO",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273be82673b5f79d9658ec0a9fd",
        duration: 212000,
        id: "27NovPIUIRrOZoCHxABJwK", 
        preview: "https://p.scdn.co/mp3-preview/e73b3c1e9f54cc8c1b4db1f8b7f8b7f8e7f8b7f8"
      },
      {
        name: "Unholy",
        artists: "Sam Smith, Kim Petras",
        album: "Gloria",
        albumArt: "https://i.scdn.co/image/ab67616d0000b273c76b8f74a6b06b5dc99e5efe",
        duration: 156000,
        id: "3nqQXoyQOWXiESFLlDF1hG",
        preview: "https://p.scdn.co/mp3-preview/a7f5b7f8e7f8b7f8e7f8b7f8e7f8b7f8e7f8b7f8"
      },
      {
        name: "Flowers",
        artists: "Miley Cyrus",
        album: "Endless Summer Vacation",
        albumArt: "https://i.scdn.co/image/ab67616d0000b2737b2e7e6a2e6a2e6a2e6a2e6a",
        duration: 200000,
        id: "7KXjTSCq5nL1LoYtL7XAwS",
        preview: null
      }
    ];

    this.devices = ['iPhone 14', 'MacBook Pro', 'iPad Pro', 'AirPods Pro', 'Desktop PC'];
    this.currentTrackIndex = 0;
    this.isPlaying = true;
    this.startTime = Date.now();
    
    // Simulate realistic music listening patterns
    this.listensPattern = this.generateListeningPattern();
  }

  // Generate a realistic listening pattern for the day
  generateListeningPattern() {
    const now = new Date();
    const hour = now.getHours();
    
    // Realistic listening times based on typical day
    const patterns = {
      morning: { active: hour >= 7 && hour <= 10, probability: 0.8 },
      work: { active: hour >= 11 && hour <= 17, probability: 0.6 },
      evening: { active: hour >= 18 && hour <= 23, probability: 0.9 },
      night: { active: hour >= 0 && hour <= 6, probability: 0.2 }
    };

    // Determine if you should be "listening" right now
    let shouldBePlaying = false;
    for (const [period, config] of Object.entries(patterns)) {
      if (config.active && Math.random() < config.probability) {
        shouldBePlaying = true;
        break;
      }
    }

    return shouldBePlaying;
  }

  // Get current track with realistic simulation
  async getCurrentlyPlaying() {
    // Check if should be playing based on time patterns
    if (!this.listensPattern && Math.random() < 0.7) {
      return null; // Show offline
    }

    // Simulate track progression and changes
    const currentTime = Date.now();
    const elapsedSinceStart = currentTime - this.startTime;
    
    // Get current track
    const track = this.yourPlaylist[this.currentTrackIndex];
    const trackProgress = elapsedSinceStart % track.duration;
    
    // If track finished, move to next
    if (trackProgress === 0 && elapsedSinceStart > track.duration) {
      this.currentTrackIndex = (this.currentTrackIndex + 1) % this.yourPlaylist.length;
      this.startTime = currentTime;
    }

    // Randomly pause sometimes
    if (Math.random() < 0.1) {
      this.isPlaying = !this.isPlaying;
    }

    const currentDevice = this.devices[Math.floor(Math.random() * this.devices.length)];

    return {
      isPlaying: this.isPlaying,
      track: {
        id: track.id,
        name: track.name,
        artists: track.artists,
        album: track.album,
        albumArt: track.albumArt,
        previewUrl: track.preview,
        externalUrl: `https://open.spotify.com/track/${track.id}`,
        duration: track.duration,
        progress: Math.floor(trackProgress),
      },
      device: {
        name: currentDevice,
        type: currentDevice.includes('iPhone') ? 'smartphone' : 'computer',
      }
    };
  }

  // Always authenticated
  isAuthenticated() {
    return true;
  }

  // No auth needed
  async handleAuthCallback() {
    return true;
  }

  // No tokens
  clearTokens() {
    // No-op
  }

  // Update listening pattern every 30 minutes
  updateListeningPattern() {
    this.listensPattern = this.generateListeningPattern();
  }
}

export default new SpotifyService();