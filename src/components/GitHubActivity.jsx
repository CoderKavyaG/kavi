import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHubActivity = () => {
  const username = 'coderkavyag'
  const [cacheBuster, setCacheBuster] = useState(Date.now())

  useEffect(() => {
    const refresh = () => setCacheBuster(Date.now())

    // initial refresh
    refresh()

    // refresh every 30 minutes (adjust as needed)
    const interval = setInterval(refresh, 1000 * 60 * 30)

    // refresh when window gains focus or tab becomes visible
    const handleFocus = () => refresh()
    const handleVisibility = () => { if (!document.hidden) refresh() }

    window.addEventListener('focus', handleFocus)
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      clearInterval(interval)
      window.removeEventListener('focus', handleFocus)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [username])

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-color)' }}>
        <FaGithub className="text-lg" />
        GitHub Activity
      </h2>
      
      <div 
        className="p-4 rounded-lg border overflow-hidden"
        style={{ 
          backgroundColor: 'var(--surface-color)', 
          borderColor: 'var(--border-color)'
        }}
      >
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}?t=${cacheBuster}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded"
            style={{ 
              minWidth: '600px'
            }}
            onError={() => setTimeout(() => setCacheBuster(Date.now()), 5000)} // retry on load error
          />
        </div>
      </div>
    </div>
  )
}

export default GitHubActivity
