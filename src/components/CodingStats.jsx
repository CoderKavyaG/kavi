import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'
import githubService from '../services/githubService'

const CodingStats = () => {
  const [stats, setStats] = useState({
    loading: true,
    commits: 0,
    repos: 0
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [commitsToday, userStats] = await Promise.all([
          githubService.getTodayCommits(),
          githubService.getUserStats()
        ])
        
        setStats({
          loading: false,
          commits: commitsToday,
          repos: userStats?.publicRepos || 0
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
        setStats(prev => ({ ...prev, loading: false }))
      }
    }

    fetchStats()
  }, [])

  if (stats.loading) {
    return (
      <div className="flex items-center gap-3 px-4 py-3 rounded-lg border bg-[var(--surface-color)] border-[var(--border-color)]">
        <FaGithub className="text-lg text-[var(--text-secondary)]" />
        <span className="text-sm text-[var(--text-secondary)]">Loading...</span>
      </div>
    )
  }

  const hasActivity = stats.commits > 0
  const activityText = hasActivity
    ? `${stats.commits} commit${stats.commits > 1 ? 's' : ''} today`
    : 'Building cool stuff'

  // Determine status based on commits
  const getStatus = () => {
    if (stats.commits >= 10) return { text: 'Legendary', color: 'bg-purple-500' }
    if (stats.commits >= 5) return { text: 'Warrior', color: 'bg-green-500' }
    if (stats.commits >= 3) return { text: 'Active', color: 'bg-blue-500' }
    if (stats.commits > 0) return { text: 'Builder', color: 'bg-yellow-500' }
    return { text: 'Idle', color: 'bg-gray-500' }
  }

  const status = getStatus()

    return (
    <div className="rounded-lg border hover:shadow-sm transition-shadow duration-200 bg-[var(--surface-color)] border-[var(--border-color)]">
      <div className="flex items-center gap-3 px-4 py-3">
        <FaGithub className={`text-lg flex-shrink-0 ${hasActivity ? 'text-[var(--accent-color-green,#10b981)]' : 'text-[var(--accent-color-amber,#f59e0b)]'}`} />
        <div className="flex flex-col min-w-0 flex-1">
          <span className="text-sm font-medium truncate text-[var(--text-color)]">{activityText}</span>
          <span className="text-xs truncate text-[var(--text-secondary)]">{stats.repos} public repos</span>
        </div>
      </div>
      <div className="px-4 pb-3 pt-0">
        <div className="flex items-center justify-between pt-2 border-t border-[var(--border-color)]">
          <span className="text-xs font-mono text-[var(--text-secondary)]">Coding Status:</span>
          <div className={`${status.color} border border-opacity-50 px-2 py-0.5 font-mono text-xs font-bold text-white`}>
            {status.text}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodingStats
