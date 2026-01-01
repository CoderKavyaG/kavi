import React, { useState, useEffect, useRef } from 'react'
import { Play, Pause, ExternalLink, Music } from 'lucide-react'
import spotifyService from '../services/realSpotifyService'

const SpotifyWidget = () => {
  const [currentTrack, setCurrentTrack] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false)
  const [error, setError] = useState(null)
  const audioRef = useRef(null)
  const intervalRef = useRef(null)

  useEffect(() => {
    const fetchCurrentTrack = async () => {
      try {
        setError(null)
        const track = await spotifyService.getCurrentlyPlaying()
        setCurrentTrack(track)
      } catch (err) {
        console.error('Error fetching current track:', err)
        setError('Failed to fetch current track')
      } finally {
        setIsLoading(false)
      }
    }

    fetchCurrentTrack()
    intervalRef.current = setInterval(fetchCurrentTrack, 30000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  const handlePreviewPlay = () => {
    if (!currentTrack?.track?.previewUrl) return

    if (isPreviewPlaying) {
      audioRef.current?.pause()
      setIsPreviewPlaying(false)
    } else {
      if (audioRef.current) {
        audioRef.current.src = currentTrack.track.previewUrl
        audioRef.current
          .play()
          .then(() => setIsPreviewPlaying(true))
          .catch((e) => console.error('Failed to play preview:', e))
      }
    }
  }

  const handleAudioEnded = () => setIsPreviewPlaying(false)

  if (isLoading) {
    return (
      <div className="border-2 border-[var(--border-color)] p-3 animate-pulse bg-[var(--surface-color)] h-full flex items-center">
        <div className="flex items-center space-x-2 w-full">
          <div className="w-10 h-10 animate-pulse bg-[var(--accent-bg)]" />
          <div className="flex-1">
            <div className="h-3 rounded animate-pulse mb-1.5 bg-[var(--accent-bg)]" />
            <div className="h-2 rounded animate-pulse w-3/4 bg-[var(--accent-bg)]" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="border-2 border-[var(--border-color)] p-3 bg-[var(--surface-color)] h-full flex items-center">
        <div className="flex items-center space-x-2 w-full">
          <div className="w-10 h-10 bg-red-500 flex items-center justify-center flex-shrink-0">
            <Music className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-xs text-[var(--text-color)] font-mono">Spotify Error</h3>
            <p className="text-xs text-[var(--text-secondary)] truncate">{error}</p>
          </div>
        </div>
      </div>

    )
  }

  // Show last played song if not currently playing
  if (!currentTrack.isPlaying && currentTrack.wasLastPlayed && currentTrack.track) {
    return (
      <div className="border-2 border-[var(--border-color)] p-3 bg-[var(--surface-color)] h-full flex flex-col justify-between">
        <audio ref={audioRef} onEnded={handleAudioEnded} onError={() => setIsPreviewPlaying(false)} />

        <div className="flex items-center space-x-2">
          <div className="relative flex-shrink-0">
            {currentTrack.track.albumArt ? (
              <img 
                src={currentTrack.track.albumArt} 
                alt={currentTrack.track.name}
                className="w-10 h-10 rounded flex-shrink-0 object-cover"
              />
            ) : (
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[var(--accent-bg)]">
                <Music className="w-5 h-5 text-[var(--text-secondary)]" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1 mb-0.5">
              <h3 className="font-medium text-xs truncate text-[var(--text-color)] font-mono">
                {currentTrack.track.name}
              </h3>
              <a href={currentTrack.track.externalUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0 text-[var(--text-secondary)]">
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-xs truncate text-[var(--text-secondary)]">
              {currentTrack.track.artists}
            </p>
            <p className="text-xs text-[var(--text-secondary)] mt-1 italic">Last Played</p>
          </div>
          {currentTrack.track.previewUrl && (
            <button onClick={handlePreviewPlay} className="w-7 h-7 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0" title="Play 30s preview">
              {isPreviewPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white ml-0.5" />}
            </button>
          )}
        </div>

        <div className="pt-2 mt-2 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-secondary)]">Status:</span>
            <div className="bg-yellow-500 border border-yellow-600 px-2 py-0.5 font-mono text-xs font-bold text-white">
              Idle
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  if (!currentTrack || !currentTrack.track) {
  return (
    <div className="border-2 border-[var(--border-color)] p-3 bg-[var(--surface-color)] h-full flex flex-col justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[var(--accent-bg)]">
          <Music className="w-5 h-5 text-[var(--text-secondary)]" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-medium text-xs text-[var(--text-color)] font-mono">Airplane Mode</h3>
          <p className="text-xs truncate text-[var(--text-secondary)]">Not listening</p>
        </div>
      </div>
        <div className="pt-2 mt-2 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-secondary)]">Status:</span>
            <div className="bg-[var(--accent-bg)] border border-[var(--border-color)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--text-secondary)]">
              Offline
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="border-2 border-[var(--border-color)] p-3 bg-[var(--surface-color)] h-full flex flex-col justify-between">
      <audio ref={audioRef} onEnded={handleAudioEnded} onError={() => setIsPreviewPlaying(false)} />

      <div className="flex items-center space-x-2">
        <div className="relative flex-shrink-0">
          <img src={currentTrack.track.albumArt} alt={currentTrack.track.album} className="w-10 h-10 object-cover" />
          {currentTrack.isPlaying && (
            <div className="absolute -top-0.5 -right-0.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1 mb-0.5">
            <h3 className="font-medium text-xs truncate text-[var(--text-color)] font-mono">{currentTrack.track.name}</h3>
            <a href={currentTrack.track.externalUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0 text-[var(--text-secondary)]">
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs truncate text-[var(--text-secondary)]">{currentTrack.track.artists}</p>
        </div>

        {currentTrack.track.previewUrl && (
          <button onClick={handlePreviewPlay} className="w-7 h-7 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors flex-shrink-0" title="Play 30s preview">
            {isPreviewPlaying ? <Pause className="w-3 h-3 text-white" /> : <Play className="w-3 h-3 text-white ml-0.5" />}
          </button>
        )}
      </div>

      <div className="pt-2 mt-2 border-t border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[var(--text-secondary)]">Status:</span>
          <div className="bg-green-500 border border-green-600 px-2 py-0.5 font-mono text-xs font-bold text-white">
            Online
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotifyWidget