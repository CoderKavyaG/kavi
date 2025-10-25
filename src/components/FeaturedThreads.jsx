import React, { useEffect, useRef } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const FeaturedThreads = () => {
  const { theme } = useTheme()
  const containerRefs = useRef([])
  const isLoadedRef = useRef(false)

  const tweetIds = [
    '1981248113953165466',
    '1980521602149138895'
  ]

  useEffect(() => {
    // Prevent double loading in strict mode
    if (isLoadedRef.current) return
    
    // Load Twitter widget script
    const loadScript = () => {
      return new Promise((resolve) => {
        if (window.twttr?.widgets) {
          resolve()
          return
        }

        const script = document.createElement('script')
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        script.charset = 'utf-8'
        script.onload = () => resolve()
        document.head.appendChild(script)
      })
    }

    loadScript().then(() => {
      if (window.twttr?.widgets && !isLoadedRef.current) {
        isLoadedRef.current = true
        containerRefs.current.forEach((container, index) => {
          if (container) {
            // Clear any existing content
            while (container.firstChild) {
              container.removeChild(container.firstChild)
            }
            
            window.twttr.widgets.createTweet(
              tweetIds[index],
              container,
              {
                theme: theme === 'dark' ? 'dark' : 'light',
                conversation: 'none',
                align: 'center'
              }
            )
          }
        })
      }
    })

    return () => {
      // Cleanup on unmount
      containerRefs.current.forEach((container) => {
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild)
          }
        }
      })
    }
  }, [])

  // Handle theme changes separately
  useEffect(() => {
    if (!isLoadedRef.current) return
    
    if (window.twttr?.widgets) {
      containerRefs.current.forEach((container, index) => {
        if (container) {
          while (container.firstChild) {
            container.removeChild(container.firstChild)
          }
          
          window.twttr.widgets.createTweet(
            tweetIds[index],
            container,
            {
              theme: theme === 'dark' ? 'dark' : 'light',
              conversation: 'none',
              align: 'center'
            }
          )
        }
      })
    }
  }, [theme])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
      {tweetIds.map((tweetId, index) => (
        <div
          key={tweetId}
          ref={(el) => (containerRefs.current[index] = el)}
          className="flex items-start justify-center min-h-[500px] max-h-[600px] overflow-hidden"
        />
      ))}
    </div>
  )
}

export default FeaturedThreads

