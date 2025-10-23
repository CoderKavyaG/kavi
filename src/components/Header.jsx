import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Download } from 'lucide-react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const linkColor = theme === 'dark' ? '#9ca3af' : '#525252'
  const linkActiveColor = theme === 'dark' ? '#ffffff' : '#1a1a1a'
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[var(--border-color)] ${theme === 'dark' ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-[rgba(255,254,247,0.9)]'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-yellow-400">
            <img 
              src="https://i.ibb.co/LXGvTyqm/image.png" 
              alt="kavi" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <Link
            to="/blog"
            className={`text-xs sm:text-sm transition-colors duration-200 ${isActive('/blog') ? 'font-medium text-[var(--text-color)]' : 'hover:opacity-70 text-[var(--text-secondary)]'}`}
          >
            Blogs
          </Link>
          <Link
            to="/projects"
            className={`text-xs sm:text-sm transition-colors duration-200 ${isActive('/projects') ? 'font-medium text-[var(--text-color)]' : 'hover:opacity-70 text-[var(--text-secondary)]'}`}
          >
            Projects
          </Link>
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 opacity-60 cursor-not-allowed bg-[var(--accent-color)] text-white"
            title="CV coming soon"
          >
            <Download className="w-3.5 h-3.5" />
            Coming soon
          </button>
          <button
            onClick={toggleTheme}
            className={`w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-200 ${theme === 'dark' ? 'bg-[rgba(255,255,255,0.1)]' : 'bg-[rgba(243,229,171,0.5)]'}`}
            aria-label="Toggle theme"
          >
            <div className="text-base">{theme === 'dark' ? '🌙' : '☀️'}</div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
