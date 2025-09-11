import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b" style={{ backgroundColor: 'var(--bg-color)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors duration-200" style={{ color: 'var(--text-color)' }}>
        coderkavyag
        </Link>
        <div className="flex items-center space-x-8">
          <Link 
            to="/blog"
            className={`transition-colors duration-200 ${
              isActive('/blog') 
                ? 'text-blue-400' 
                : 'hover:text-blue-400'
            }`}
            style={{ color: isActive('/blog') ? '#60a5fa' : 'var(--text-color)' }}
          >
            Blog
          </Link>
          <Link 
            to="/gallery"
            className={`transition-colors duration-200 ${
              isActive('/gallery') 
                ? 'text-blue-400' 
                : 'hover:text-blue-400'
            }`}
            style={{ color: isActive('/gallery') ? '#60a5fa' : 'var(--text-color)' }}
          >
            Gallery
          </Link>
          <button 
            onClick={toggleTheme}
            className="w-6 h-6 rounded-full border-2 hover:border-blue-400 transition-colors duration-200 flex items-center justify-center relative"
            style={{ borderColor: 'var(--text-secondary)' }}
            aria-label="Toggle theme"
          >
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              theme === 'dark' 
                ? 'translate-x-0' 
                : '-translate-x-1'
            }`} style={{ backgroundColor: 'var(--text-color)' }} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
