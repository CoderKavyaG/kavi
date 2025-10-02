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
    if (!currentTrack?.track?.previewUrl) return;

    if (isPreviewPlaying) {
      audioRef.current?.pause();
      setIsPreviewPlaying(false);
    } else {
      if (audioRef.current) {
        audioRef.current.src = currentTrack.track.previewUrl;
        audioRef.current.play();
        setIsPreviewPlaying(true);
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
      <div className="spotify-widget bg-gray-900 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-700 rounded-lg animate-pulse"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-700 rounded animate-pulse mb-2"></div>
            <div className="h-3 bg-gray-700 rounded animate-pulse w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="spotify-widget bg-gray-900 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">Spotify Error</h3>
            <p className="text-gray-400 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Not playing anything
  if (!currentTrack || !currentTrack.track) {
    return (
      <div className="spotify-widget bg-gray-900 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <h3 className="text-white font-medium">Offline</h3>
              <p className="text-gray-400 text-sm">Not currently listening</p>
            </div>
          </div>
          <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  // Currently playing
  return (
    <div className="spotify-widget bg-gray-900 rounded-lg p-4 border border-gray-700">
      <audio
        ref={audioRef}
        onEnded={handleAudioEnded}
        onError={() => setIsPreviewPlaying(false)}
      />
      
      <div className="flex items-center space-x-4">
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
            <h3 className="text-white font-medium text-sm truncate">
              {currentTrack.track.name}
            </h3>
            <a
              href={currentTrack.track.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-gray-400 text-xs truncate mb-1">
            {currentTrack.track.artists}
          </p>
          <p className="text-gray-500 text-xs truncate">
            {currentTrack.track.album}
          </p>
          
          {/* Progress Bar */}
          {currentTrack.isPlaying && currentTrack.track.progress && currentTrack.track.duration && (
            <div className="mt-2">
              <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>{formatTime(currentTrack.track.progress)}</span>
                <span>{formatTime(currentTrack.track.duration)}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-1">
                <div
                  className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                  style={{
                    width: `${(currentTrack.track.progress / currentTrack.track.duration) * 100}%`
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2">
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

          {/* Status Indicator */}
          <div className="flex flex-col items-center">
            {currentTrack.isPlaying ? (
              <Volume2 className="w-4 h-4 text-green-500" />
            ) : (
              <Pause className="w-4 h-4 text-gray-500" />
            )}
            <div className="text-xs text-gray-500 mt-1">
              {currentTrack.device?.name && (
                <span className="truncate max-w-16" title={currentTrack.device.name}>
                  {currentTrack.device.name}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotifyWidget;