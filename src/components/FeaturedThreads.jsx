import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const FeaturedThreads = () => {
  const { theme } = useTheme()
  const containerRefs = useRef([])
  const isLoadedRef = useRef(false)
  const [embedLoaded, setEmbedLoaded] = useState([false, false])

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
            ).then(() => {
              setEmbedLoaded((prev) => {
                const next = [...prev]
                next[index] = true
                return next
              })
            })
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
      // reset loaded flags while re-rendering for theme
      setEmbedLoaded(Array(tweetIds.length).fill(false))
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
          ).then(() => {
            setEmbedLoaded((prev) => {
              const next = [...prev]
              next[index] = true
              return next
            })
          })
        }
      })
    }
  }, [theme])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      {tweetIds.map((tweetId, index) => (
        <article
          key={tweetId}
          className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1"
        >
          {/* Gradient ring */}
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[var(--accent-color)]/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 blur-[1px]" aria-hidden="true"></div>

          {/* Card body */}
          <div className="relative rounded-2xl border bg-[var(--surface-color)] border-[var(--border-color)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)]">
              <div className="text-xs font-medium tracking-wider uppercase text-[var(--text-secondary)]">Featured Thread</div>
              <a
                href={`https://twitter.com/i/web/status/${tweetId}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[var(--accent-color)] hover:opacity-80 transition-opacity"
              >
                View on X
              </a>
            </div>

            {/* Embed area with consistent height */}
            <div className="h-[520px] md:h-[560px] p-3">
              <div className="flex h-full items-start justify-center overflow-hidden rounded-xl bg-[var(--bg-color)]/40">
                {!embedLoaded[index] && (
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--border-color)] border-t-[var(--accent-color)]" />
                  </div>
                )}
                <div
                  ref={(el) => (containerRefs.current[index] = el)}
                  className="w-full flex items-start justify-center"
                />
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default FeaturedThreads

