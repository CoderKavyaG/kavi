import React, { useState, useEffect } from 'react'
import { Github } from 'lucide-react'
import githubService from '../services/githubService'

const GitHubActivity = () => {
  const username = 'coderkavyag'
  const [stats, setStats] = useState(null)
  const [contributions, setContributions] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await githubService.getUserStats()
        setStats(data)
        setContributions(data?.publicRepos || 0)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="h-48 rounded-2xl animate-pulse bg-[var(--surface-color)]\"></div>
      ) : stats ? (
        <>
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-mono text-[var(--text-secondary)] mb-1">Featured</p>
              <h2 className="text-2xl font-bold font-mono text-[var(--text-color)]">GitHub Activity</h2>
            </div>
            <div className="text-right text-xs font-mono text-[var(--text-secondary)]">
              <p>Total: <span className="font-bold text-[var(--text-color)]">{contributions ? `${contributions} repositories` : 'Loading...'}</span></p>
            </div>
          </div>

          {/* Contribution Chart */}
          <div className="rounded-2xl overflow-hidden bg-[var(--surface-color)]/50 p-4 border border-[var(--border-color)]">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">
              <img
                src={`https://ghchart.rshah.org/36a64f/${username}`}
                alt="GitHub Contributions"
                className="w-full min-w-[600px] sm:min-w-0 opacity-90 hover:opacity-100 transition-opacity"
                style={{ imageRendering: 'auto' }}
                loading="eager"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="rounded-2xl p-8 bg-[var(--surface-color)]/50 border border-[var(--border-color)] text-center">
          <p className="font-mono text-[var(--text-secondary)]">⚠️ Unable to load GitHub data</p>
        </div>
      )}
    </div>
  )
}

export default GitHubActivity
