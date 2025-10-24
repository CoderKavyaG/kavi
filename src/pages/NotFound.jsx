import React from 'react'
import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  return (
    <main className="min-h-screen pt-24 bg-[var(--bg-color)] text-[var(--text-color)] flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Retro Game Over Screen */}
        <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] shadow-[8px_8px_0px_0px_rgba(96,165,250,0.5)]">
          <div className="bg-[var(--bg-color)] border-b-4 border-[var(--text-color)] p-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl font-bold font-mono uppercase text-[var(--text-color)] mb-2">
                Game Over
              </h1>
              <p className="text-sm font-mono text-[var(--text-secondary)]">Continue?</p>
            </div>

            {/* Pixel Skull */}
            <div className="flex justify-center mb-8">
              <div className="text-6xl sm:text-7xl">💀</div>
            </div>

            {/* Error Message */}
            <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4 mb-6">
              <p className="font-mono text-sm text-center text-[var(--text-color)]">
                ▸ ERROR 404: PAGE NOT FOUND
              </p>
              <p className="font-mono text-xs text-center text-[var(--text-secondary)] mt-2">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link
                to="/"
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-white text-black font-bold font-mono text-sm uppercase border-4 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Home className="w-4 h-4" />
                ↻ Retry
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-[var(--surface-color)] text-[var(--text-color)] font-bold font-mono text-sm uppercase border-4 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
              >
                <ArrowLeft className="w-4 h-4" />
                ✕ Exit
              </button>
            </div>

            {/* Tips Section */}
            <div className="mt-6 pt-6 border-t-4 border-dashed border-[var(--border-color)]">
              <p className="font-mono text-xs text-[var(--text-secondary)] text-center">
                💡 TIP: Check the URL or navigate back to the homepage
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound
