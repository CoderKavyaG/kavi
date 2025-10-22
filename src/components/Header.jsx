import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Download } from 'lucide-react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navBgColor = theme === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 254, 247, 0.9)'
  const linkColor = theme === 'dark' ? '#9ca3af' : '#525252'
  const linkActiveColor = theme === 'dark' ? '#ffffff' : '#1a1a1a'
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" style={{ backgroundColor: navBgColor, borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-yellow-400">
            <img 
              src="https://i.ibb.co/LXGvTyqm/image.png" 
              alt="kavi" 
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link 
            to="/blog"
            className={`text-sm transition-colors duration-200 ${
              isActive('/blog') 
                ? 'font-medium' 
                : 'hover:opacity-70'
            }`}
            style={{ color: isActive('/blog') ? linkActiveColor : linkColor }}
          >
            Blogs
          </Link>
          <Link 
            to="/projects"
            className={`text-sm transition-colors duration-200 ${
              isActive('/projects') 
                ? 'font-medium' 
                : 'hover:opacity-70'
            }`}
            style={{ color: isActive('/projects') ? linkActiveColor : linkColor }}
          >
            Projects
          </Link>
          <Link 
            to="/resume"
            className={`text-sm transition-colors duration-200 ${
              isActive('/resume') 
                ? 'font-medium' 
                : 'hover:opacity-70'
            }`}
            style={{ color: isActive('/resume') ? linkActiveColor : linkColor }}
          >
            Resume
          </Link>
          <Link 
            to="/resume"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 hover:opacity-80"
            style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
          >
            <Download className="w-3.5 h-3.5" />
            CV
          </Link>
          <button 
            onClick={toggleTheme}
            className="w-7 h-7 rounded-full flex items-center justify-center hover:opacity-70 transition-all duration-200"
            style={{ 
              backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(243, 229, 171, 0.5)'
            }}
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
