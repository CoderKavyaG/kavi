import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

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

  return (
    <div className="rounded-2xl p-6 sm:p-8 border bg-[var(--surface-color)] border-[var(--border-color)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <FaGithub className="text-3xl text-[var(--text-color)]" />
          <h2 className="text-2xl font-bold text-[var(--text-color)]">GitHub Activity</h2>
        </div>
        {stats && (
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent-color)] hover:opacity-70 transition-opacity"
          >
            @{username}
          </a>
        )}
      </div>

      {loading ? (
        <div className="space-y-4">
          <div className="h-12 bg-[var(--accent-bg)] rounded-lg animate-pulse"></div>
          <div className="h-32 bg-[var(--accent-bg)] rounded-lg animate-pulse"></div>
        </div>
      ) : stats ? (
        <div className="space-y-6">
          <div className="hidden sm:grid grid-cols-2 gap-3">
            <div className="rounded-xl p-4 bg-[#1a2332] border border-[#2d3e50] hover:border-[#5b8fd1] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2d4a6a] flex items-center justify-center flex-shrink-0">
                    <FaGithub className="text-xl text-[#5b8fd1]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Repositories</p>
                    <p className="text-2xl font-bold text-white leading-tight mt-0.5">{stats.public_repos}</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-1 bg-[#2d4a6a] text-[#5b8fd1] rounded-md font-semibold uppercase tracking-wider">Public</span>
              </div>
            </div>

            <a 
              href={`https://github.com/${username}?tab=followers`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-4 bg-[#1a2332] border border-[#2d3e50] hover:border-[#5b8fd1] transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#2d4a6a] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#5b8fd1]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Followers</p>
                    <p className="text-2xl font-bold text-white leading-tight mt-0.5">{stats.followers}</p>
                  </div>
                </div>
                <span className="text-[9px] px-2 py-1 bg-[#5b8fd1] text-white rounded-md font-semibold uppercase tracking-wider group-hover:bg-[#4a7ec1] transition-colors">Follow Me</span>
              </div>
            </a>
          </div>

          <div>
            <div className="rounded-xl overflow-hidden bg-[#0d1117] border-2 border-[#2d3e50] p-6">
              {imageError ? (
                <div className="flex items-center justify-center h-32 text-[var(--text-secondary)] text-sm">
                  <div className="text-center">
                    <div className="w-8 h-8 border-4 border-[var(--accent-color)] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p>Loading contribution graph...</p>
                  </div>
                </div>
              ) : (
                <img
                  key={imageKey}
                  src={`https://ghchart.rshah.org/${username}?cacheBust=${cacheBuster}`}
                  alt="GitHub Contributions"
                  className="w-full"
                  style={{ imageRendering: 'pixelated' }}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              )}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                <span>XP GAINED: 1050+</span>
                <div className="flex items-center gap-2">
                  <span>LESS</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 bg-[#161b22] border border-[#2d3e50]"></div>
                    <div className="w-3 h-3 bg-[#0e4429]"></div>
                    <div className="w-3 h-3 bg-[#006d32]"></div>
                    <div className="w-3 h-3 bg-[#26a641]"></div>
                    <div className="w-3 h-3 bg-[#39d353]"></div>
                  </div>
                  <span>MORE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-[var(--text-secondary)]">
          <p>Unable to load GitHub activity</p>
        </div>
      )}
    </div>
  )
}

export default GitHubActivity
