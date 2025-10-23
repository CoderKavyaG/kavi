import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHubActivity = () => {
  const username = 'coderkavyag'
  const [cacheBuster, setCacheBuster] = useState(Date.now())
  const [stats, setStats] = useState(null)
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let mounted = true

    const refresh = () => setCacheBuster(Date.now())
    refresh()

    // fetch user stats and recent events
    const fetchData = async () => {
      setLoading(true)
      try {
        const [userRes, eventsRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/events/public`)
        ])

        if (!mounted) return

        if (userRes.ok) {
          const userJson = await userRes.json()
          setStats({
            followers: userJson.followers,
            public_repos: userJson.public_repos,
            avatar: userJson.avatar_url
          })
        }

        if (eventsRes.ok) {
          const eventsJson = await eventsRes.json()
          // take first 5 relevant event summaries
          setEvents(eventsJson.slice(0, 6).map(e => {
            const type = e.type.replace(/Event$/, '')
            const repo = e.repo?.name || ''
            const created = new Date(e.created_at).toLocaleDateString()
            return { type, repo, created }
          }))
        }
      } catch (err) {
        // fail silently, keep existing UI
        console.warn('GitHubActivity fetch error', err)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchData()

    // refresh every 30 minutes
    const interval = setInterval(() => {
      refresh()
      fetchData()
    }, 1000 * 60 * 30)

    // also refresh on focus/visibility
    const handleFocus = () => { refresh(); fetchData() }
    const handleVisibility = () => { if (!document.hidden) { refresh(); fetchData() } }

    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      mounted = false
      clearInterval(interval)
      window.removeEventListener('focus', handleFocus)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [username])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--text-color)]">
        <FaGithub className="text-lg" />
        GitHub Activity
      </h2>

  <div className="p-4 rounded-lg border bg-[var(--surface-color)] border-[var(--border-color)]">
        {/* Stats badges */}
          <div className="flex items-center gap-3 mb-3 flex-wrap">
          {stats ? (
            <>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-900/40 text-[var(--text-color)]">
                <img src={stats.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                <span className="text-sm">{username}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--card-bg)] text-[var(--text-color)]">
                <strong>{stats.public_repos}</strong>
                <span className="text-sm">repos</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[var(--card-bg)] text-[var(--text-color)]">
                <strong>{stats.followers}</strong>
                <span className="text-sm">followers</span>
              </div>
            </>
          ) : (
            <div className="text-sm text-gray-400">GitHub data unavailable</div>
          )}
        </div>

        {/* Recent activity (small list) */}
        {loading ? (
          <div className="text-sm text-gray-400 mb-3">Loading recent activity…</div>
        ) : (
          events.length > 0 && (
            <div className="mb-3">
              <div className="text-sm font-medium mb-2 text-[var(--text-color)]">Recent activity</div>
              <ul className="text-sm text-[var(--text-secondary)]">
                {events.map((ev, i) => (
                  <li key={i} className="mb-1">{ev.type} on <span className="font-medium">{ev.repo}</span> · <span className="text-xs">{ev.created}</span></li>
                ))}
              </ul>
            </div>
          )
        )}

        {/* Contribution graph */}
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}?t=${cacheBuster}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded min-w-[600px]"
            onError={() => setTimeout(() => setCacheBuster(Date.now()), 5000)}
          />
        </div>
      </div>
    </div>
  )
}

export default GitHubActivity
