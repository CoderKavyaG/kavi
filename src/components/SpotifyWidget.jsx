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
      <div className="rounded-lg p-4 border animate-pulse bg-[var(--surface-color)] border-[var(--border-color)]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-lg animate-pulse bg-[var(--accent-bg)]" />
          <div className="flex-1">
            <div className="h-4 rounded animate-pulse mb-2 bg-[var(--accent-bg)]" />
            <div className="h-3 rounded animate-pulse w-3/4 bg-[var(--accent-bg)]" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-lg p-4 border bg-[var(--surface-color)] border-[var(--border-color)]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-medium text-[var(--text-color)]">Spotify Error</h3>
            <p className="text-sm text-[var(--text-secondary)]">{error}</p>
          </div>
        </div>
      </div>
    )
  }

  if (!currentTrack || !currentTrack.track) {
    return (
      <div className="rounded-lg p-4 border hover:shadow-sm transition-shadow duration-200 bg-[var(--surface-color)] border-[var(--border-color)]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 bg-[var(--accent-bg)]">
              <Music className="w-6 h-6 text-[var(--text-secondary)]" />
            </div>
            <div className="min-w-0">
              <h3 className="font-medium text-sm text-[var(--text-color)]">Airplane Mode</h3>
              <p className="text-xs truncate text-[var(--text-secondary)]">Not currently listening</p>
            </div>
          </div>
        </div>
        <div className="pt-2 border-t border-[var(--border-color)]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-[var(--text-secondary)]">Player Status:</span>
            <div className="bg-[var(--accent-bg)] border border-[var(--border-color)] px-2 py-0.5 font-mono text-xs font-bold text-[var(--text-secondary)]">
              Offline
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-lg p-4 border hover:shadow-sm transition-shadow duration-200 bg-[var(--surface-color)] border-[var(--border-color)]">
      <audio ref={audioRef} onEnded={handleAudioEnded} onError={() => setIsPreviewPlaying(false)} />

      <div className="flex items-center space-x-3 mb-3">
        <div className="relative flex-shrink-0">
          <img src={currentTrack.track.albumArt} alt={currentTrack.track.album} className="w-12 h-12 rounded-lg object-cover" />
          {currentTrack.isPlaying && (
            <div className="absolute -top-1 -right-1">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-medium text-sm truncate text-[var(--text-color)]">{currentTrack.track.name}</h3>
            <a href={currentTrack.track.externalUrl} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity flex-shrink-0 text-[var(--text-secondary)]">
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs truncate text-[var(--text-secondary)]">{currentTrack.track.artists}</p>
        </div>

        <div className="flex items-center space-x-2 flex-shrink-0">
          {currentTrack.track.previewUrl && (
            <button onClick={handlePreviewPlay} className="w-8 h-8 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors" title="Play 30s preview">
              {isPreviewPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white ml-0.5" />}
            </button>
          )}
        </div>
      </div>

      <div className="pt-2 border-t border-[var(--border-color)]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono text-[var(--text-secondary)]">Player Status:</span>
          <div className="bg-green-500 border border-green-600 px-2 py-0.5 font-mono text-xs font-bold text-white">
            Online
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotifyWidget