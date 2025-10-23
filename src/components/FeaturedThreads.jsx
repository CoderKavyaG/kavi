import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const FeaturedThreads = () => {
  const containerRef = useRef(null)
  const { theme } = useTheme()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  
  const tweetUrls = [
    'https://twitter.com/goelsahhab/status/1980521589503664312',
    'https://twitter.com/goelsahhab/status/1974851364183556171'
  ].map(url => url.replace('x.com', 'twitter.com'))

  useEffect(() => {
    let mounted = true
    let timeout

    const loadTweets = () => {
      if (!mounted) return
      
      if (window.twttr && window.twttr.widgets) {
        try {
          if (containerRef.current) {
            const twitterWidgets = containerRef.current.querySelectorAll('.twitter-tweet-rendered')
            twitterWidgets.forEach(widget => widget.remove())
          }
          
          window.twttr.widgets.load(containerRef.current)
          
          timeout = setTimeout(() => {
            if (mounted) {
              setIsLoading(false)
            }
          }, 2000)
        } catch (error) {
          console.error('Twitter widget error:', error)
          if (mounted) {
            setHasError(true)
            setIsLoading(false)
          }
        }
      }
    }

    if (window.twttr) {
      loadTweets()
    } else {
      let attempts = 0
      const maxAttempts = 100
      
      const checkTwitter = setInterval(() => {
        attempts++
        
        if (window.twttr) {
          loadTweets()
          clearInterval(checkTwitter)
        } else if (attempts >= maxAttempts) {
          clearInterval(checkTwitter)
          if (mounted) {
            setHasError(true)
            setIsLoading(false)
          }
        }
      }, 100)

      return () => {
        mounted = false
        clearInterval(checkTwitter)
        if (timeout) clearTimeout(timeout)
      }
    }

    return () => {
      mounted = false
      if (timeout) clearTimeout(timeout)
    }
  }, [theme])

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden flex items-center justify-center h-48 bg-[var(--surface-color)] border border-[var(--border-color)] animate-pulse"
            >
              <span className="text-sm text-[var(--text-secondary)]">Loading tweets...</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (hasError) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tweetUrls.map((url, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden flex items-center justify-center p-6 bg-[var(--surface-color)] border border-[var(--border-color)] hover:border-[var(--accent-color)] transition-colors duration-200"
            >
              <div className="text-center">
                <p className="text-sm font-medium mb-2 text-[var(--text-color)]">View Tweet</p>
                <p className="text-xs text-[var(--text-secondary)]">Click to open on X/Twitter</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tweetUrls.map((url, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden flex items-center justify-center min-h-[200px] bg-[var(--surface-color)]"
          >
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-cards="hidden"
              data-theme={theme === 'dark' ? 'dark' : 'light'}
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Loading tweet...
              </a>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedThreads
