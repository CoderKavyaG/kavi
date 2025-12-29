import React, { useState, useEffect } from 'react'
import { GitBranch, Users, Trophy, Star } from 'lucide-react'
import githubService from '../services/githubService'

const GitHubActivity = () => {
  const username = 'CoderKavyaG'
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await githubService.getUserStats()
        setStats(data)
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  // Gaming-style difficulty badge based on repos
  const getDifficultyLevel = (repos) => {
    if (repos >= 10) return { label: 'HARD', color: 'red', icon: <Trophy className="w-4 h-4" /> }
    if (repos >= 5) return { label: 'NORMAL', color: 'yellow', icon: <Star className="w-4 h-4" /> }
    return { label: 'EASY', color: 'green', icon: <Star className="w-4 h-4" /> }
  }

  const difficulty = stats ? getDifficultyLevel(stats.repos) : null

  return (
    <div className="space-y-4">
      {loading ? (
        <div className="space-y-4">
          <div className="h-12 border-4 border-[var(--text-color)] animate-pulse bg-[var(--surface-color)]"></div>
          <div className="h-32 border-4 border-[var(--text-color)] animate-pulse bg-[var(--surface-color)]"></div>
        </div>
      ) : stats ? (
        <>
          {/* Player Tag with Follow Me */}
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="border-4 border-[var(--text-color)] p-1 bg-[var(--bg-color)]">
                  <GitBranch className="w-8 h-8 text-[var(--accent-color)]" />
                </div>
                <div>
                  <h3 className="font-mono font-bold text-lg uppercase text-[var(--text-color)]">
                    ➤ @{username}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">Full Stack Developer</p>
                </div>
              </div>
              
              {/* Follow Me Section */}
              <div className="flex flex-col items-center sm:items-end gap-2">
                <span className="text-xs font-mono text-[var(--text-secondary)] uppercase">Follow Me Here:</span>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-[var(--text-color)] bg-[var(--bg-color)] px-4 py-2 hover:bg-[var(--accent-color)] hover:text-black transition-colors flex items-center gap-2"
                  title="GitHub"
                >
                  <GitBranch className="w-5 h-5" />
                  <span className="font-mono text-sm font-bold">GitHub</span>
                </a>
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
            <div className="p-4 bg-[var(--bg-color)]">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-[var(--border-color)] scrollbar-track-transparent">
                <img
                  src={`https://ghchart.rshah.org/36a64f/${username}`}
                  alt="GitHub Contributions"
                  className="w-full min-w-[600px] sm:min-w-0 opacity-90 hover:opacity-100 transition-opacity"
                  style={{ imageRendering: 'auto' }}
                  loading="eager"
                />
              </div>
              
              {/* Legend */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t-2 border-dashed border-[var(--border-color)]">
                <span className="text-xs font-mono text-[var(--text-secondary)]">
                  XP GAINED: {stats.repos * 150}+
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
