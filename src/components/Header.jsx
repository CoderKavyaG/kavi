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
            to="/components-library"
            className={`text-xs sm:text-sm transition-colors duration-200 ${isActive('/components-library') ? 'font-medium text-[var(--text-color)]' : 'hover:opacity-70 text-[var(--text-secondary)]'}`}
          >
            Components Library
          </Link>
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
            className="w-9 h-9 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 bg-[var(--accent-bg)] relative overflow-hidden"
            aria-label="Toggle theme"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Sun Icon */}
              <svg
                className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${
                  theme === 'dark' 
                    ? 'opacity-0 rotate-180 scale-0' 
                    : 'opacity-100 rotate-0 scale-100'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#f59e0b' }}
              >
                <circle cx="12" cy="12" r="4" strokeWidth="2" fill="#f59e0b" />
                <path strokeLinecap="round" strokeWidth="2" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41" />
              </svg>
              
              {/* Moon Icon */}
              <svg
                className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${
                  theme === 'dark' 
                    ? 'opacity-100 rotate-0 scale-100' 
                    : 'opacity-0 -rotate-180 scale-0'
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
                style={{ color: '#60a5fa' }}
              >
                <path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36a10.14 10.14 0 1 0 14 11.69 1 1 0 0 0-.36-1.05zm-9.5 6.69A8.14 8.14 0 0 1 7.08 5.22v.27a10.15 10.15 0 0 0 10.14 10.14 9.79 9.79 0 0 0 2.1-.22 8.11 8.11 0 0 1-7.18 4.32z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
