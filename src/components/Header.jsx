import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { Download } from 'lucide-react'

const Header = () => {
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-all duration-300 ${theme === 'dark' ? 'bg-slate-950/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 relative flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden bg-gradient-to-br from-yellow-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform">
            <img
              src="https://i.ibb.co/bMBz13cK/v-VXZna3h-400x400.jpg"
              alt="kavi"
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`hidden sm:block font-bold text-base transition-colors ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`}>KAVI</span>
        </Link>

        {/* Center Section */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden sm:flex items-center space-x-8">
          <Link
            to="/blog"
            className={`font-mono transition-all duration-300 ${isActive('/blog') ? `text-lg font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}` : `text-base ${theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}`}
          >
            Blogs
          </Link>
          <Link
            to="/projects"
            className={`font-mono transition-all duration-300 ${isActive('/projects') ? `text-lg font-bold ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}` : `text-base ${theme === 'dark' ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'}`}`}
          >
            Projects
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 border-2 ${theme === 'dark' ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-slate-100'}`}
            aria-label="Toggle theme"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Sun Icon */}
              <svg
                className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${theme === 'dark'
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
                className={`absolute w-5 h-5 transition-all duration-500 ease-in-out ${theme === 'dark'
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
