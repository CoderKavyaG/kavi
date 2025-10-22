import React from 'react'
import { FaGithub } from 'react-icons/fa'

const GitHubActivity = () => {
  const username = 'coderkavyag'
  
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
        {/* GitHub Contribution Graph */}
        <div className="w-full overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Graph"
            className="w-full h-auto rounded"
            style={{ 
              minWidth: '600px'
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default GitHubActivity
