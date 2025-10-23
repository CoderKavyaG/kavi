import React, { useState, useEffect } from 'react'
import { FaCode, FaGithub } from 'react-icons/fa'

const CodingStats = () => {
  const [stats, setStats] = useState({
    loading: true,
    commits: 0,
    repos: 0
  })

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = 'coderkavyag'
        
        // Fetch recent commits from main repo
        const commitsResponse = await fetch(`https://api.github.com/repos/CoderKavyaG/kavi/commits?per_page=100`)
        const commits = await commitsResponse.json()
        
        // Count commits from today
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        
        const todayCommits = commits.filter(commit => {
          const commitDate = new Date(commit.commit.author.date)
          commitDate.setHours(0, 0, 0, 0)
          return commitDate.getTime() === today.getTime()
        }).length
        
        // Fetch repositories count
        const userResponse = await fetch(`https://api.github.com/users/${username}`)
        const userData = await userResponse.json()
        
        setStats({
          loading: false,
          commits: todayCommits,
          repos: userData.public_repos || 0
        })
      } catch (error) {
        console.error('GitHub API error:', error)
        setStats({
          loading: false,
          commits: 0,
          repos: 0
        })
      }
    }

    fetchGitHubStats()
    const interval = setInterval(fetchGitHubStats, 10 * 60 * 1000)
    return () => clearInterval(interval)
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

  const iconColor = hasActivity ? '#10b981' : '#f59e0b'

    return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-lg border hover:shadow-sm transition-shadow duration-200 bg-[var(--surface-color)] border-[var(--border-color)]">
      <FaGithub className={`text-lg flex-shrink-0 ${hasActivity ? 'text-[var(--accent-color-green,#10b981)]' : 'text-[var(--accent-color-amber,#f59e0b)]'}`} />
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium truncate text-[var(--text-color)]">{activityText}</span>
        <span className="text-xs truncate text-[var(--text-secondary)]">{stats.repos} public repos</span>
      </div>
    </div>
  )
}

export default CodingStats
