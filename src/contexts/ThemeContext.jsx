import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

// Get system/device theme preference
const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'
  }
  return 'light'
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Check if user has manually set a theme preference
    const savedTheme = localStorage.getItem('theme')
    
    // If user has a saved preference, use it
    if (savedTheme) {
      return savedTheme
    }
    
    // Otherwise, use the system/device theme
    return getSystemTheme()
  })

  useEffect(() => {
    // Apply theme to document
    document.documentElement.className = theme
    
    // Save user's theme preference
    localStorage.setItem('theme', theme)
  }, [theme])

  // Listen for system theme changes (when user hasn't manually set a preference)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleSystemThemeChange = (e) => {
      // Only auto-switch if user hasn't manually set a theme
      const savedTheme = localStorage.getItem('theme')
      const hasManualPreference = localStorage.getItem('manualThemeSet')
      
      if (!hasManualPreference) {
        setTheme(e.matches ? 'dark' : 'light')
      }
    }

    // Add listener for system theme changes
    mediaQuery.addEventListener('change', handleSystemThemeChange)

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    }
  }, [])

  const toggleTheme = () => {
    // Mark that user has manually toggled the theme
    localStorage.setItem('manualThemeSet', 'true')
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
