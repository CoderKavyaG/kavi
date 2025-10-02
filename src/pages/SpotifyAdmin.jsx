import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import spotifyService from '../services/spotifyService';

const SpotifyAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Check if already authenticated
    setIsAuthenticated(spotifyService.isAuthenticated());
    
    // Handle auth callback
    const handleAuth = async () => {
      const success = await spotifyService.handleAuthCallback();
      if (success) {
        setIsAuthenticated(true);
        setStatus('✅ Successfully connected to Spotify!');
        // Test fetch
        testConnection();
      }
    };

    handleAuth();
  }, []);

  const testConnection = async () => {
    try {
      const track = await spotifyService.getCurrentlyPlaying();
      setCurrentTrack(track);
      setStatus('✅ Spotify integration working! Your music will now show on the homepage.');
    } catch (error) {
      setStatus('❌ Error testing connection: ' + error.message);
    }
  };

  const handleConnect = async () => {
    try {
      const authUrl = await spotifyService.getAuthUrl();
      window.location.href = authUrl;
    } catch (error) {
      setStatus('❌ Error starting auth: ' + error.message);
    }
  };

  const clearTokens = () => {
    spotifyService.clearTokens();
    setIsAuthenticated(false);
    setCurrentTrack(null);
    setStatus('🔄 Tokens cleared. You can reconnect now.');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">🎵 Spotify Admin Panel</h1>
        
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Authentication Status</h2>
          
          {!isAuthenticated ? (
            <div className="text-center">
              <div className="mb-4">
                <Music className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-400 mb-4">Connect your Spotify account to enable the widget</p>
              </div>
              <button
                onClick={handleConnect}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium"
              >
                Connect Spotify Account
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-green-500 text-lg mb-4">✅ Spotify Connected!</div>
              <div className="space-y-3">
                <button
                  onClick={testConnection}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-3"
                >
                  Test Connection
                </button>
                <button
                  onClick={clearTokens}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Disconnect
                </button>
              </div>
            </div>
          )}
          
          {status && (
            <div className="mt-4 p-3 bg-gray-700 rounded text-sm">
              {status}
            </div>
          )}
        </div>

        {currentTrack && (
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Currently Playing Test</h3>
            <div className="flex items-center space-x-4">
              {currentTrack.track?.albumArt && (
                <img 
                  src={currentTrack.track.albumArt} 
                  alt="Album art" 
                  className="w-16 h-16 rounded-lg"
                />
              )}
              <div>
                <div className="font-medium">{currentTrack.track?.name || 'Unknown'}</div>
                <div className="text-gray-400">{currentTrack.track?.artists || 'Unknown Artist'}</div>
                <div className="text-sm text-gray-500">
                  Status: {currentTrack.isPlaying ? '🎵 Playing' : '⏸️ Paused'}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-gray-400">
          <p>After connecting, visitors to your homepage will automatically see your currently playing music.</p>
          <p className="mt-2">No additional setup required!</p>
        </div>
      </div>
    </div>
  );
};

export default SpotifyAdmin;