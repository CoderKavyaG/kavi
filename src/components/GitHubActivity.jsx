import React, { useEffect, useState } from 'react'
import { GitBranch, Users, Trophy, Star, Zap } from 'lucide-react'

const GitHubActivity = () => {
  const username = 'coderkavyag'
  const [cacheBuster, setCacheBuster] = useState(Date.now())
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [imageKey, setImageKey] = useState(0)

  useEffect(() => {
    let mounted = true

    const fetchData = async () => {
      setLoading(true)
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`)

        if (!mounted) return

        if (userRes.ok) {
          const userJson = await userRes.json()
          setStats({
            followers: userJson.followers,
            public_repos: userJson.public_repos,
            avatar: userJson.avatar_url
          })
        }
      } catch (err) {
        console.warn('GitHubActivity fetch error', err)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchData()

    // Refresh cache buster every 5 minutes
    const refreshInterval = setInterval(() => {
      setCacheBuster(Date.now())
      setImageKey(prev => prev + 1)
      setImageError(false)
    }, 1000 * 60 * 5)

    // Refresh on window focus
    const handleFocus = () => {
      setCacheBuster(Date.now())
      setImageKey(prev => prev + 1)
      setImageError(false)
      fetchData()
    }

    window.addEventListener('focus', handleFocus)

    return () => {
      mounted = false
      clearInterval(refreshInterval)
      window.removeEventListener('focus', handleFocus)
    }
  }, [username])

  const handleImageError = () => {
    setImageError(true)
    // Retry after 3 seconds
    setTimeout(() => {
      setCacheBuster(Date.now())
      setImageKey(prev => prev + 1)
      setImageError(false)
    }, 3000)
  }

  const handleImageLoad = () => {
    setImageError(false)
  }

  // Gaming-style difficulty badge based on repos
  const getDifficultyLevel = (repos) => {
    if (repos >= 10) return { label: 'HARD', color: 'red', icon: <Trophy className="w-4 h-4" /> }
    if (repos >= 5) return { label: 'NORMAL', color: 'yellow', icon: <Star className="w-4 h-4" /> }
    return { label: 'EASY', color: 'green', icon: <Zap className="w-4 h-4" /> }
  }

  const difficulty = stats ? getDifficultyLevel(stats.public_repos) : null

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="space-y-4">
          <div className="h-12 border-4 border-[var(--text-color)] animate-pulse bg-[var(--surface-color)]"></div>
          <div className="h-32 border-4 border-[var(--text-color)] animate-pulse bg-[var(--surface-color)]"></div>
        </div>
      ) : stats ? (
        <>
          {/* Gaming Stats Header */}
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="border-2 border-[var(--text-color)] p-2 bg-[var(--bg-color)]">
                  <GitBranch className="w-6 h-6 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-sm uppercase text-[var(--text-color)]">
                    ➤ Player Stats
                  </h3>
                  <a
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[var(--accent-color)] hover:translate-x-0.5 transition-transform inline-block"
                  >
                    @{username} →
                  </a>
                </div>
              </div>
              
              {/* Difficulty Badge */}
              {difficulty && (
                <div className={`flex items-center gap-2 px-3 py-1 border-2 border-[var(--text-color)] font-mono text-xs font-bold ${
                  difficulty.color === 'red' ? 'bg-red-500/20 text-red-400' :
                  difficulty.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {difficulty.icon}
                  <span>{difficulty.label}</span>
                </div>
              )}
            </div>
          </div>

          {/* Gaming Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4 hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="border-2 border-[var(--accent-color)] bg-[var(--accent-color)]/20 p-2">
                  <GitBranch className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-secondary)] uppercase">Quests</p>
                  <p className="text-2xl font-bold font-mono text-[var(--text-color)]">{stats.public_repos}</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4 hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-3 mb-2">
                <div className="border-2 border-[var(--accent-color)] bg-[var(--accent-color)]/20 p-2">
                  <Users className="w-5 h-5 text-[var(--accent-color)]" />
                </div>
                <div>
                  <p className="text-xs font-mono text-[var(--text-secondary)] uppercase">Allies</p>
                  <p className="text-2xl font-bold font-mono text-[var(--text-color)]">{stats.followers}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contribution Heatmap */}
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            {/* Header */}
            <div className="bg-[var(--accent-color)] text-black px-4 py-2 border-b-4 border-[var(--text-color)] flex items-center justify-between">
              <span className="font-mono font-bold text-xs">
                🎯 BATTLE HISTORY
              </span>
              <span className="font-mono text-xs">{new Date().getFullYear()}</span>
            </div>
            
            {/* Content */}
            {imageError ? (
              <div className="flex items-center justify-center h-32 sm:h-40 text-[var(--text-secondary)] text-sm p-4">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-[var(--accent-color)] border-t-transparent animate-spin mx-auto mb-2"></div>
                  <p className="font-mono text-xs">LOADING MAP...</p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-[var(--bg-color)]">
                <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">
                  <img
                    key={imageKey}
                    src={`https://ghchart.rshah.org/${username}?cacheBust=${cacheBuster}`}
                    alt="GitHub Contributions"
                    className="w-full min-w-[600px] sm:min-w-0 opacity-90"
                    style={{ imageRendering: 'pixelated' }}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                    loading="lazy"
                  />
                </div>
                
                {/* Legend */}
                <div className="flex items-center justify-between mt-3 pt-3 border-t-2 border-dashed border-[var(--border-color)]">
                  <span className="text-xs font-mono text-[var(--text-secondary)]">
                    XP GAINED: {stats.public_repos * 150}+
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-[var(--text-secondary)]">LESS</span>
                    <div className="flex gap-1">
                      <div className="w-3 h-3 border border-[var(--text-color)] bg-[var(--surface-color)]"></div>
                      <div className="w-3 h-3 border border-[var(--text-color)] bg-green-900/40"></div>
                      <div className="w-3 h-3 border border-[var(--text-color)] bg-green-700/60"></div>
                      <div className="w-3 h-3 border border-[var(--text-color)] bg-green-500/80"></div>
                      <div className="w-3 h-3 border border-[var(--text-color)] bg-green-400"></div>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-secondary)]">MORE</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Gaming Footer Tip */}
          <div className="border-2 border-dashed border-[var(--border-color)] p-3 bg-[var(--surface-color)]">
            <p className="text-xs font-mono text-[var(--text-secondary)] text-center">
              💡 TIP: Each commit is a battle won! Keep grinding to level up your skills.
            </p>
          </div>
        </>
      ) : (
        <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-8 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
          <p className="font-mono text-[var(--text-secondary)]">⚠️ CONNECTION LOST</p>
        </div>
      )}
    </div>
  )
}

export default GitHubActivity
