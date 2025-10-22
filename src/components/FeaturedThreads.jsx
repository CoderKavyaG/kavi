import React, { useEffect, useRef } from 'react'
import { FaXTwitter } from 'react-icons/fa6'

const FeaturedThreads = () => {
  const containerRef = useRef(null)
  
  // Convert x.com to twitter.com for embed compatibility
  const tweetUrls = [
    'https://twitter.com/goelsahhab/status/1980521589503664312',
    'https://twitter.com/goelsahhab/status/1974851364183556171'
  ]

  useEffect(() => {
    // Wait for Twitter script to load and render tweets
    const loadTweets = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(containerRef.current)
      }
    }

    // If Twitter script is already loaded, render tweets
    if (window.twttr) {
      loadTweets()
    } else {
      // Wait for script to load
      const checkTwitter = setInterval(() => {
        if (window.twttr) {
          loadTweets()
          clearInterval(checkTwitter)
        }
      }, 100)

      return () => clearInterval(checkTwitter)
    }
  }, [])

  return (
    <div className="space-y-4" ref={containerRef}>
      <h2 className="text-xl font-bold flex items-center gap-2" style={{ color: 'var(--text-color)' }}>
        <FaXTwitter className="text-lg" />
        Featured Threads
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tweetUrls.map((url, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden flex items-center justify-center"
            style={{ 
              backgroundColor: 'var(--surface-color)'
            }}
          >
            <blockquote 
              className="twitter-tweet" 
              data-conversation="none"
              data-cards="hidden"
            >
              <a href={url}>Loading tweet...</a>
            </blockquote>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedThreads
