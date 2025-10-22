import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ExternalLink, Music, Volume2 } from 'lucide-react';
import spotifyService from '../services/realSpotifyService';

const SpotifyWidget = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false);
  const [error, setError] = useState(null);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Start fetching immediately - no authentication needed
    fetchCurrentTrack();
    
    // Set up interval to fetch current track every 30 seconds
    intervalRef.current = setInterval(fetchCurrentTrack, 30000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const fetchCurrentTrack = async () => {
    try {
      setError(null);
      const track = await spotifyService.getCurrentlyPlaying();
      setCurrentTrack(track);
    } catch (error) {
      console.error('Error fetching current track:', error);
      setError('Failed to fetch current track');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePreviewPlay = () => {
    if (!currentTrack?.track?.previewUrl) {
      return;
    }

    if (isPreviewPlaying) {
      audioRef.current?.pause();
      setIsPreviewPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = currentTrack.track.previewUrl;
        audioRef.current.play().then(() => {
          setIsPreviewPlaying(true);
        }).catch(error => {
          console.error('Failed to play preview:', error);
        });
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPreviewPlaying(false);
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="rounded-lg p-4 border animate-pulse" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg animate-pulse" style={{ backgroundColor: 'var(--accent-bg)' }}></div>
          <div className="flex-1">
            <div className="h-4 rounded animate-pulse mb-2" style={{ backgroundColor: 'var(--accent-bg)' }}></div>
            <div className="h-3 rounded animate-pulse w-3/4" style={{ backgroundColor: 'var(--accent-bg)' }}></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="rounded-lg p-4 border" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium" style={{ color: 'var(--text-color)' }}>Spotify Error</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Not playing anything
  if (!currentTrack || !currentTrack.track) {
    return (
      <div className="rounded-lg p-4 border hover:shadow-sm transition-shadow duration-200" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--accent-bg)' }}>
              <Music className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-sm" style={{ color: 'var(--text-color)' }}>Offline</h3>
              <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>Not currently listening</p>
            </div>
          </div>
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
        </div>
      </div>
    );
  }

  // Currently playing
  return (
    <div className="rounded-lg p-4 border hover:shadow-sm transition-shadow duration-200" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={() => setIsPreviewPlaying(false)}
      />
      
      <div className="flex items-center space-x-3">
        {/* Album Art */}
        <div className="relative flex-shrink-0">
          <img
            src={currentTrack.track.albumArt}
            alt={currentTrack.track.album}
            className="w-12 h-12 rounded-lg object-cover"
          />
          {currentTrack.isPlaying && (
            <div className="absolute -top-1 -right-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>

        {/* Track Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium text-sm truncate" style={{ color: 'var(--text-color)' }}>
              {currentTrack.track.name}
            </h3>
            <a
              href={currentTrack.track.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity flex-shrink-0"
              style={{ color: 'var(--text-secondary)' }}
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs truncate" style={{ color: 'var(--text-secondary)' }}>
            {currentTrack.track.artists}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          {/* Preview Play Button */}
          {currentTrack.track.previewUrl && (
            <button
              onClick={handlePreviewPlay}
              className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              title="Play 30s preview"
            >
              {isPreviewPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white ml-0.5" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;