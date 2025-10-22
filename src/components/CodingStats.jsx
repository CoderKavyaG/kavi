import React, { useState, useEffect } from 'react'
import { FaCode } from 'react-icons/fa'

const CodingStats = () => {
  const [stats, setStats] = useState({
    loading: true,
    hours: 0,
    minutes: 0
  })

  useEffect(() => {
    const fetchCodingStats = async () => {
      try {
        const response = await fetch('/api/wakatime')
        const data = await response.json()
        
        setStats({
          loading: false,
          hours: data.hours || 0,
          minutes: data.minutes || 0
        })
      } catch (error) {
        setStats({
          loading: false,
          hours: 0,
          minutes: 0
        })
      }
    }

    fetchCodingStats()
    const interval = setInterval(fetchCodingStats, 10 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  if (stats.loading) {
    return (
      <div 
        className="flex items-center gap-3 px-4 py-3 rounded-lg border"
        style={{ 
          backgroundColor: 'var(--surface-color)', 
          borderColor: 'var(--border-color)'
        }}
      >
        <FaCode className="text-lg" style={{ color: 'var(--text-secondary)' }} />
        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
          Loading...
        </span>
      </div>
    )
  }

  const hasActivity = stats.hours > 0 || stats.minutes > 0
  const timeText = stats.hours > 0 
    ? `${stats.hours}h ${stats.minutes}m` 
    : stats.minutes > 0 
      ? `${stats.minutes}m`
      : '0h'

  const activityText = hasActivity
    ? `Coded today: ${timeText}`
    : 'Reading docs and blogs'

  const iconColor = hasActivity ? '#10b981' : '#f59e0b'

  return (
    <div 
      className="flex items-center gap-3 px-4 py-3 rounded-lg border hover:shadow-sm transition-shadow duration-200"
      style={{ 
        backgroundColor: 'var(--surface-color)', 
        borderColor: 'var(--border-color)'
      }}
    >
      <FaCode 
        className="text-lg flex-shrink-0" 
        style={{ color: iconColor }} 
      />
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-medium truncate" style={{ color: 'var(--text-color)' }}>
          {activityText}
        </span>
      </div>
    </div>
  )
}

export default CodingStats
